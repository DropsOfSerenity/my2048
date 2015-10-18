(ns ^:figwheel-always my2048.core
  (:require [cljs.core.async :refer [put! chan <! timeout dropping-buffer]]
            [clojure.string :as string]
            [figwheel.client :as fw]
            [goog.events :as events]
            [quiescent.core :as q]
            [quiescent.dom :as d])
  (:require-macros [cljs.core.async.macros :refer [go go-loop]]))

(enable-console-print!)

;; == Board Init ==
(def board-size
  "How tall and wide the board is, in this case 4x4"
  4)

(def initial-board
  "Our initial empty board state."
  (vec (repeat (* board-size board-size) nil)))

(defn get-nil-indexes [coll]
  "Returns a set of the nil indexes in a seq"
  (filter identity
          (into #{} (map-indexed
                     (fn [idx tile]
                       (if (= nil tile) idx nil))
                     coll))))

(defn random-nil-index [coll]
  "All through the game we need to ability to add a tile to
a random empty tile in the game. Returns the index of a random
nil tile"
  (first (shuffle (get-nil-indexes coll))))

(defn build-tile [val]
  {:val val
   :key (gensym "tile")
   :new true})

(defn combine-tiles [first second]
  {:val (+ (:val first) (:val second))
   :old [first second]
   :key (gensym "tile")})

(defn add-random-tile [board]
  "Returns a new board with a tile randomely added to a previously
empty space"
  (assoc board (random-nil-index board)
         (rand-nth [(build-tile 2) (build-tile 2) (build-tile 4)])))

;; Rendering Logic
(defn index->css-position [idx]
  "Convert an index to a row and column (1 indexed)"
  (let [col (+ 1 (mod idx board-size))
        row (+ 1 (quot idx board-size))]
    {:row row :col col}))

(defn board->tiles-to-render [board]
  "Create a mapping from the actual state of the board, to
a structure that represents what we should actually render"
  (->> board
       (keep-indexed (fn [idx tile]
                       (when tile
                         (assoc tile :pos (index->css-position idx)))))
       (reduce (fn [acc tile]
                 (if (:old tile)
                   (concat acc (conj (map #(assoc % :pos (:pos tile)) (:old tile)) tile))
                   (conj acc tile)))
               [])
       (map (fn [tile]
              (assoc tile :classes (cond (:new tile) "tile-new"
                                         (:old tile) "tile-merged"))))
       (sort-by :key)))

;; == Dom Components ==
(q/defcomponent Grid []
  "Draws the Grid, nothing here really needs to be dynamic"
  (apply d/div {:className "grid-container"}
         (for [i (range board-size)]
           (apply d/div {:className "grid-row"}
                  (for [i (range board-size)]
                    (d/div {:className "grid-cell"}))))))


(q/defcomponent Game [{:keys [board]}]
  "Represents the entire game"
  (d/div
   {:className "game-container"}
   (Grid)
   (d/div {:className :grid-row}
          (apply d/div {:className :tile-container}
                 (map
                  (fn [tile]
                    (d/div {:className (string/join
                                        " "
                                        ["tile"
                                         (str "tile-" (:val tile))
                                         (str "tile-position-" (:col (:pos tile)) "-" (:row (:pos tile)))
                                         (:classes tile)])
                            :key (:key tile)}
                           (d/div {:className :tile-inner} (:val tile))))
                  (board->tiles-to-render board))))))

;; GAME LOGIC
(defn- combine
  ([r]
   (combine r []))
  ([r result]
   (if (seq r)
     (if (= (:val (first r)) (:val (second r)))
       (recur (rest (rest r)) (conj result (combine-tiles (first r) (second r))))
       (recur (rest r) (conj result (first r))))
     result)))

(defn- pad-with-nils [n coll]
  (concat coll (repeat (- board-size (count coll)) nil)))

(defn combine-adjacent [coll]
  "Given a vector, combined any adjacent similar numbers"
  (combine coll))

(defn left-slide [row]
  "Given a row, see if we can slide left and return the
new row if we can"
  (->> row
       (remove nil?)
       combine-adjacent
       (pad-with-nils board-size)))
(defn right-slide [row]
  "Given a row, slide to right. A right slide is just
the same as reversing a row, doing a left slide, then
reversing the result"
  (reverse (left-slide (reverse row))))

(defn up-slide [col]
  "For an upward slide"
  (->> col
       (remove nil?)
       combine-adjacent
       (pad-with-nils board-size)))

(defn down-slide [col]
  (reverse (up-slide (reverse col))))

(defn slide [board dir]
  "Returns the result of a slide in a direction."
  (let [rows (partition board-size board)
        cols (apply map list rows)]
    (case dir
      :left (into [] (flatten (map left-slide rows)))
      :right (into [] (flatten (map right-slide rows)))
      :up (into [] (flatten (apply map list (map up-slide cols))))
      :down (into [] (flatten (apply map list (map down-slide cols)))))))

(defn handle-move [board dir]
  (if (= board (slide board dir))
    nil
    (slide board dir)))

;; KEY INPUT
;; Using core.async we set up a channel for pushing key events onto

(def keyword->event-type
  "Maps a sensible keyword to an event type"
  {:keyup goog.events.EventType.KEYUP
   :keydown goog.events.EventType.KEYDOWN})

(def keycode->symbol
  {37 :left
   38 :up
   40 :down
   39 :right
   87 :up
   65 :left
   83 :down
   68 :right})

(def key-chan (chan (dropping-buffer 1)))

(defn key-listener [ch]
  "When a key has been pressed, push it to the channel"
  (events/listen js/window
                 (keyword->event-type :keyup)
                 #(when-let [k (keycode->symbol (.-keyCode %))]
                    (.preventDefault %)
                    (put! ch k))))

(key-listener key-chan)
(events/listen js/window
               (keyword->event-type :keydown)
               #(when (keycode->symbol (.-keyCode %))
                  (.preventDefault %)))

;; RENDERING
(defn render [board]
  "Renders the latest state of the game, we wrap this in a function
so that it can be called by callbacks elsewhere"
  (q/render (Game {:board board})
            (.getElementById js/document "main-area")))


(defn on-js-reload []
  )

;; GAME LOOP
;; Due to quescient we maintain global state here and only here.
(defonce run-once
  (let [keys key-chan]
    (go-loop [board (add-random-tile (add-random-tile initial-board))
              action :render]
      (case action
        :slide (do (render board)
                   (<! (timeout 100))
                   (recur board :add))
        :add (do (render board)
                 (<! (timeout 100))
                 (recur (add-random-tile board) :render))
        :render (do (render board)
                    (recur (map #(dissoc % :new :old) board) :wait))
        :wait (if-let [board' (handle-move board (<! keys))]
                (recur board' :slide)
                (recur board :wait))))))
