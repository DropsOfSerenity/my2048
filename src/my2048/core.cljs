(ns ^:figwheel-always my2048.core
  (:require [figwheel.client :as fw]
            [quiescent.core :as q]
            [quiescent.dom :as d]))

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

(defn add-random-tile [board]
  "Returns a new board with a tile randomely added to a previously
empty space"
  (assoc board (random-nil-index board) (rand-nth [2 4])))

(defonce app-state (atom {:board (add-random-tile initial-board)}))

;; Rendering Logic
(defn index->css-position
  [idx]
  "Convert an index to a coord, example:
Given a 4x4 board.
Given an index of 3
We should return [1 4]"
  (let [idx (inc idx)
        row (quot idx board-size)
        col (+ 1 (mod idx board-size))]
    {:row row :col col}))

;; == Dom Components ==
(q/defcomponent Grid []
  "Draws the Grid, nothing here really needs to be dynamic"
  (apply d/div {:className "grid-container"}
         (for [i (range board-size)]
           (apply d/div {:className "grid-row"}
                  (for [i (range board-size)]
                    (d/div {:className "grid-cell"}))))))

(q/defcomponent Square
  [idx value]
  (d/div {:className "tile-container"}
         (d/div {:className (str "tile " 
                                 "tile-position-" 
                                 (:row (index->css-position idx)) "-"
                                 (:col (index->css-position idx)))}
                (d/div {:className "tile-inner"} value))))

(q/defcomponent Game
  [data]
  (println (str "Latest state of game: " (:board data)))
  (d/div {:className "game-container"}
         (Grid)
         (apply d/div {:className :grid-row}
                (map-indexed (fn [idx val]
                               (if (not= nil val)
                                 (Square idx val)))
                             (:board data)))))


(defn render [data]
  "Renders the latest state of the game, we wrap this in a function
so that it can be called by callbacks elsewhere"
  (q/render (Game data)
            (.getElementById js/document "main-area")))

                                        ; Re-render our game on app-state change
(add-watch app-state ::render
           (do
             (print "App State Changed")
             (println @app-state)
             (fn [_ _ _ data] (render data))))


(defonce *yolo* (render @app-state))
(defn on-js-reload []
  ;; optionally touch your app-state to force rerendering depending on
  ;; your application
  (swap! app-state update-in [:__figwheel_counter] not))
