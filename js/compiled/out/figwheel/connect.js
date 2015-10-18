// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('my2048.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__32986__delegate = function (x){
if(cljs.core.truth_(my2048.core.on_js_reload)){
return cljs.core.apply.call(null,my2048.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'my2048.core/on-js-reload' is missing");
}
};
var G__32986 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__32987__i = 0, G__32987__a = new Array(arguments.length -  0);
while (G__32987__i < G__32987__a.length) {G__32987__a[G__32987__i] = arguments[G__32987__i + 0]; ++G__32987__i;}
  x = new cljs.core.IndexedSeq(G__32987__a,0);
} 
return G__32986__delegate.call(this,x);};
G__32986.cljs$lang$maxFixedArity = 0;
G__32986.cljs$lang$applyTo = (function (arglist__32988){
var x = cljs.core.seq(arglist__32988);
return G__32986__delegate(x);
});
G__32986.cljs$core$IFn$_invoke$arity$variadic = G__32986__delegate;
return G__32986;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null));

//# sourceMappingURL=connect.js.map?rel=1445108534029