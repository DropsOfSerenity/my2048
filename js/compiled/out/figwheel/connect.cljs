(ns figwheel.connect (:require [figwheel.client] [my2048.core] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/my2048.core.on-js-reload (apply js/my2048.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'my2048.core/on-js-reload' is missing"))), :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

