// Compiled by ClojureScript 1.7.122 {}
goog.provide('my2048.core');
goog.require('cljs.core');
goog.require('quiescent.core');
goog.require('figwheel.client');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('quiescent.dom');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * How tall and wide the board is, in this case 4x4
 */
my2048.core.board_size = (4);
/**
 * Our initial empty board state.
 */
my2048.core.initial_board = cljs.core.vec.call(null,cljs.core.repeat.call(null,(my2048.core.board_size * my2048.core.board_size),null));
my2048.core.get_nil_indexes = (function my2048$core$get_nil_indexes(coll){

return cljs.core.filter.call(null,cljs.core.identity,cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.map_indexed.call(null,(function (idx,tile){
if(cljs.core._EQ_.call(null,null,tile)){
return idx;
} else {
return null;
}
}),coll)));
});
my2048.core.random_nil_index = (function my2048$core$random_nil_index(coll){

return cljs.core.first.call(null,cljs.core.shuffle.call(null,my2048.core.get_nil_indexes.call(null,coll)));
});
my2048.core.build_tile = (function my2048$core$build_tile(val){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),val,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"tile"),new cljs.core.Keyword(null,"new","new",-2085437848),true], null);
});
my2048.core.combine_tiles = (function my2048$core$combine_tiles(first,second){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"val","val",128701612),(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(first) + new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(second)),new cljs.core.Keyword(null,"old","old",-1825222690),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,second], null),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.gensym.call(null,"tile")], null);
});
my2048.core.add_random_tile = (function my2048$core$add_random_tile(board){

return cljs.core.assoc.call(null,board,my2048.core.random_nil_index.call(null,board),cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [my2048.core.build_tile.call(null,(2)),my2048.core.build_tile.call(null,(2)),my2048.core.build_tile.call(null,(4))], null)));
});
my2048.core.index__GT_css_position = (function my2048$core$index__GT_css_position(idx){

var col = ((1) + cljs.core.mod.call(null,idx,my2048.core.board_size));
var row = ((1) + cljs.core.quot.call(null,idx,my2048.core.board_size));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row","row",-570139521),row,new cljs.core.Keyword(null,"col","col",-1959363084),col], null);
});
my2048.core.board__GT_tiles_to_render = (function my2048$core$board__GT_tiles_to_render(board){

return cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.map.call(null,(function (tile){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"classes","classes",2037804510),(cljs.core.truth_(new cljs.core.Keyword(null,"new","new",-2085437848).cljs$core$IFn$_invoke$arity$1(tile))?"tile-new":(cljs.core.truth_(new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(tile))?"tile-merged":null)));
}),cljs.core.reduce.call(null,(function (acc,tile){
if(cljs.core.truth_(new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(tile))){
return cljs.core.concat.call(null,acc,cljs.core.conj.call(null,cljs.core.map.call(null,(function (p1__84185_SHARP_){
return cljs.core.assoc.call(null,p1__84185_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(tile));
}),new cljs.core.Keyword(null,"old","old",-1825222690).cljs$core$IFn$_invoke$arity$1(tile)),tile));
} else {
return cljs.core.conj.call(null,acc,tile);
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.keep_indexed.call(null,(function (idx,tile){
if(cljs.core.truth_(tile)){
return cljs.core.assoc.call(null,tile,new cljs.core.Keyword(null,"pos","pos",-864607220),my2048.core.index__GT_css_position.call(null,idx));
} else {
return null;
}
}),board))));
});
/**
 * 
 */
my2048.core.Grid = quiescent.core.component.call(null,(function (){

return cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-container"], null),(function (){var iter__17090__auto__ = (function my2048$core$iter__84186(s__84187){
return (new cljs.core.LazySeq(null,(function (){
var s__84187__$1 = s__84187;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__84187__$1);
if(temp__4425__auto__){
var s__84187__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84187__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__84187__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__84189 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__84188 = (0);
while(true){
if((i__84188 < size__17089__auto__)){
var i = cljs.core._nth.call(null,c__17088__auto__,i__84188);
cljs.core.chunk_append.call(null,b__84189,cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-row"], null),(function (){var iter__17090__auto__ = ((function (i__84188,i,c__17088__auto__,size__17089__auto__,b__84189,s__84187__$2,temp__4425__auto__){
return (function my2048$core$iter__84186_$_iter__84198(s__84199){
return (new cljs.core.LazySeq(null,((function (i__84188,i,c__17088__auto__,size__17089__auto__,b__84189,s__84187__$2,temp__4425__auto__){
return (function (){
var s__84199__$1 = s__84199;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__84199__$1);
if(temp__4425__auto____$1){
var s__84199__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84199__$2)){
var c__17088__auto____$1 = cljs.core.chunk_first.call(null,s__84199__$2);
var size__17089__auto____$1 = cljs.core.count.call(null,c__17088__auto____$1);
var b__84201 = cljs.core.chunk_buffer.call(null,size__17089__auto____$1);
if((function (){var i__84200 = (0);
while(true){
if((i__84200 < size__17089__auto____$1)){
var i__$1 = cljs.core._nth.call(null,c__17088__auto____$1,i__84200);
cljs.core.chunk_append.call(null,b__84201,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-cell"], null)));

var G__84206 = (i__84200 + (1));
i__84200 = G__84206;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84201),my2048$core$iter__84186_$_iter__84198.call(null,cljs.core.chunk_rest.call(null,s__84199__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84201),null);
}
} else {
var i__$1 = cljs.core.first.call(null,s__84199__$2);
return cljs.core.cons.call(null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-cell"], null)),my2048$core$iter__84186_$_iter__84198.call(null,cljs.core.rest.call(null,s__84199__$2)));
}
} else {
return null;
}
break;
}
});})(i__84188,i,c__17088__auto__,size__17089__auto__,b__84189,s__84187__$2,temp__4425__auto__))
,null,null));
});})(i__84188,i,c__17088__auto__,size__17089__auto__,b__84189,s__84187__$2,temp__4425__auto__))
;
return iter__17090__auto__.call(null,cljs.core.range.call(null,my2048.core.board_size));
})()));

var G__84207 = (i__84188 + (1));
i__84188 = G__84207;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84189),my2048$core$iter__84186.call(null,cljs.core.chunk_rest.call(null,s__84187__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84189),null);
}
} else {
var i = cljs.core.first.call(null,s__84187__$2);
return cljs.core.cons.call(null,cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-row"], null),(function (){var iter__17090__auto__ = ((function (i,s__84187__$2,temp__4425__auto__){
return (function my2048$core$iter__84186_$_iter__84202(s__84203){
return (new cljs.core.LazySeq(null,((function (i,s__84187__$2,temp__4425__auto__){
return (function (){
var s__84203__$1 = s__84203;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__84203__$1);
if(temp__4425__auto____$1){
var s__84203__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__84203__$2)){
var c__17088__auto__ = cljs.core.chunk_first.call(null,s__84203__$2);
var size__17089__auto__ = cljs.core.count.call(null,c__17088__auto__);
var b__84205 = cljs.core.chunk_buffer.call(null,size__17089__auto__);
if((function (){var i__84204 = (0);
while(true){
if((i__84204 < size__17089__auto__)){
var i__$1 = cljs.core._nth.call(null,c__17088__auto__,i__84204);
cljs.core.chunk_append.call(null,b__84205,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-cell"], null)));

var G__84208 = (i__84204 + (1));
i__84204 = G__84208;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84205),my2048$core$iter__84186_$_iter__84202.call(null,cljs.core.chunk_rest.call(null,s__84203__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__84205),null);
}
} else {
var i__$1 = cljs.core.first.call(null,s__84203__$2);
return cljs.core.cons.call(null,quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"grid-cell"], null)),my2048$core$iter__84186_$_iter__84202.call(null,cljs.core.rest.call(null,s__84203__$2)));
}
} else {
return null;
}
break;
}
});})(i,s__84187__$2,temp__4425__auto__))
,null,null));
});})(i,s__84187__$2,temp__4425__auto__))
;
return iter__17090__auto__.call(null,cljs.core.range.call(null,my2048.core.board_size));
})()),my2048$core$iter__84186.call(null,cljs.core.rest.call(null,s__84187__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17090__auto__.call(null,cljs.core.range.call(null,my2048.core.board_size));
})());
}),cljs.core.PersistentArrayMap.EMPTY);
/**
 * 
 */
my2048.core.Game = quiescent.core.component.call(null,(function (p__84209){
var map__84210 = p__84209;
var map__84210__$1 = ((((!((map__84210 == null)))?((((map__84210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__84210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__84210):map__84210);
var board = cljs.core.get.call(null,map__84210__$1,new cljs.core.Keyword(null,"board","board",-1907017633));

return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),"game-container"], null),my2048.core.Grid.call(null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087)], null),cljs.core.apply.call(null,quiescent.dom.div,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"tile-container","tile-container",1744931099)], null),cljs.core.map.call(null,((function (map__84210,map__84210__$1,board){
return (function (tile){
return quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.call(null," ",new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["tile",[cljs.core.str("tile-"),cljs.core.str(new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(tile))].join(''),[cljs.core.str("tile-position-"),cljs.core.str(new cljs.core.Keyword(null,"col","col",-1959363084).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(tile))),cljs.core.str("-"),cljs.core.str(new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(tile)))].join(''),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(tile)], null)),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(tile)], null),quiescent.dom.div.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"tile-inner","tile-inner",432231425)], null),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(tile)));
});})(map__84210,map__84210__$1,board))
,my2048.core.board__GT_tiles_to_render.call(null,board)))));
}),cljs.core.PersistentArrayMap.EMPTY);
my2048.core.combine = (function my2048$core$combine(var_args){
var args84212 = [];
var len__17376__auto___84215 = arguments.length;
var i__17377__auto___84216 = (0);
while(true){
if((i__17377__auto___84216 < len__17376__auto___84215)){
args84212.push((arguments[i__17377__auto___84216]));

var G__84217 = (i__17377__auto___84216 + (1));
i__17377__auto___84216 = G__84217;
continue;
} else {
}
break;
}

var G__84214 = args84212.length;
switch (G__84214) {
case 1:
return my2048.core.combine.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return my2048.core.combine.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args84212.length)].join('')));

}
});

my2048.core.combine.cljs$core$IFn$_invoke$arity$1 = (function (r){
return my2048.core.combine.call(null,r,cljs.core.PersistentVector.EMPTY);
});

my2048.core.combine.cljs$core$IFn$_invoke$arity$2 = (function (r,result){
while(true){
if(cljs.core.seq.call(null,r)){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,r)),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,r)))){
var G__84219 = cljs.core.rest.call(null,cljs.core.rest.call(null,r));
var G__84220 = cljs.core.conj.call(null,result,my2048.core.combine_tiles.call(null,cljs.core.first.call(null,r),cljs.core.second.call(null,r)));
r = G__84219;
result = G__84220;
continue;
} else {
var G__84221 = cljs.core.rest.call(null,r);
var G__84222 = cljs.core.conj.call(null,result,cljs.core.first.call(null,r));
r = G__84221;
result = G__84222;
continue;
}
} else {
return result;
}
break;
}
});

my2048.core.combine.cljs$lang$maxFixedArity = 2;
my2048.core.pad_with_nils = (function my2048$core$pad_with_nils(n,coll){
return cljs.core.concat.call(null,coll,cljs.core.repeat.call(null,(my2048.core.board_size - cljs.core.count.call(null,coll)),null));
});
my2048.core.combine_adjacent = (function my2048$core$combine_adjacent(coll){

return my2048.core.combine.call(null,coll);
});
my2048.core.left_slide = (function my2048$core$left_slide(row){

return my2048.core.pad_with_nils.call(null,my2048.core.board_size,my2048.core.combine_adjacent.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,row)));
});
my2048.core.right_slide = (function my2048$core$right_slide(row){

return cljs.core.reverse.call(null,my2048.core.left_slide.call(null,cljs.core.reverse.call(null,row)));
});
my2048.core.up_slide = (function my2048$core$up_slide(col){

return my2048.core.pad_with_nils.call(null,my2048.core.board_size,my2048.core.combine_adjacent.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,col)));
});
my2048.core.down_slide = (function my2048$core$down_slide(col){
return cljs.core.reverse.call(null,my2048.core.up_slide.call(null,cljs.core.reverse.call(null,col)));
});
my2048.core.slide = (function my2048$core$slide(board,dir){

var rows = cljs.core.partition.call(null,my2048.core.board_size,board);
var cols = cljs.core.apply.call(null,cljs.core.map,cljs.core.list,rows);
var G__84224 = (((dir instanceof cljs.core.Keyword))?dir.fqn:null);
switch (G__84224) {
case "left":
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,cljs.core.map.call(null,my2048.core.left_slide,rows)));

break;
case "right":
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,cljs.core.map.call(null,my2048.core.right_slide,rows)));

break;
case "up":
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.list,cljs.core.map.call(null,my2048.core.up_slide,cols))));

break;
case "down":
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.flatten.call(null,cljs.core.apply.call(null,cljs.core.map,cljs.core.list,cljs.core.map.call(null,my2048.core.down_slide,cols))));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(dir)].join('')));

}
});
my2048.core.handle_move = (function my2048$core$handle_move(board,dir){
if(cljs.core._EQ_.call(null,board,my2048.core.slide.call(null,board,dir))){
return null;
} else {
return my2048.core.slide.call(null,board,dir);
}
});
/**
 * Maps a sensible keyword to an event type
 */
my2048.core.keyword__GT_event_type = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keyup","keyup",-794526927),goog.events.EventType.KEYUP,new cljs.core.Keyword(null,"keydown","keydown",-629268186),goog.events.EventType.KEYDOWN], null);
my2048.core.keycode__GT_symbol = new cljs.core.PersistentArrayMap(null, 8, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(38),new cljs.core.Keyword(null,"up","up",-269712113),(40),new cljs.core.Keyword(null,"down","down",1565245570),(39),new cljs.core.Keyword(null,"right","right",-452581833),(87),new cljs.core.Keyword(null,"up","up",-269712113),(65),new cljs.core.Keyword(null,"left","left",-399115937),(83),new cljs.core.Keyword(null,"down","down",1565245570),(68),new cljs.core.Keyword(null,"right","right",-452581833)], null);
my2048.core.key_chan = cljs.core.async.chan.call(null,cljs.core.async.dropping_buffer.call(null,(1)));
my2048.core.key_listener = (function my2048$core$key_listener(ch){

return goog.events.listen(window,my2048.core.keyword__GT_event_type.call(null,new cljs.core.Keyword(null,"keyup","keyup",-794526927)),(function (p1__84226_SHARP_){
var temp__4425__auto__ = my2048.core.keycode__GT_symbol.call(null,p1__84226_SHARP_.keyCode);
if(cljs.core.truth_(temp__4425__auto__)){
var k = temp__4425__auto__;
p1__84226_SHARP_.preventDefault();

return cljs.core.async.put_BANG_.call(null,ch,k);
} else {
return null;
}
}));
});
my2048.core.key_listener.call(null,my2048.core.key_chan);
goog.events.listen(window,my2048.core.keyword__GT_event_type.call(null,new cljs.core.Keyword(null,"keydown","keydown",-629268186)),(function (p1__84227_SHARP_){
if(cljs.core.truth_(my2048.core.keycode__GT_symbol.call(null,p1__84227_SHARP_.keyCode))){
return p1__84227_SHARP_.preventDefault();
} else {
return null;
}
}));
my2048.core.render = (function my2048$core$render(board){

return quiescent.core.render.call(null,my2048.core.Game.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"board","board",-1907017633),board], null)),document.getElementById("main-area"));
});
my2048.core.on_js_reload = (function my2048$core$on_js_reload(){
return null;
});
if(typeof my2048.core.run_once !== 'undefined'){
} else {
my2048.core.run_once = (function (){var keys = my2048.core.key_chan;
var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__,keys){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__,keys){
return (function (state_84267){
var state_val_84268 = (state_84267[(1)]);
if((state_val_84268 === (7))){
var inst_84231 = (state_84267[(7)]);
var inst_84240 = my2048.core.render.call(null,inst_84231);
var inst_84241 = cljs.core.async.timeout.call(null,(100));
var state_84267__$1 = (function (){var statearr_84270 = state_84267;
(statearr_84270[(8)] = inst_84240);

return statearr_84270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84267__$1,(8),inst_84241);
} else {
if((state_val_84268 === (1))){
var inst_84229 = my2048.core.add_random_tile.call(null,my2048.core.initial_board);
var inst_84230 = my2048.core.add_random_tile.call(null,inst_84229);
var inst_84231 = inst_84230;
var inst_84232 = new cljs.core.Keyword(null,"render","render",-1408033454);
var state_84267__$1 = (function (){var statearr_84271 = state_84267;
(statearr_84271[(9)] = inst_84232);

(statearr_84271[(7)] = inst_84231);

return statearr_84271;
})();
var statearr_84272_84302 = state_84267__$1;
(statearr_84272_84302[(2)] = null);

(statearr_84272_84302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (4))){
var inst_84263 = (state_84267[(2)]);
var state_84267__$1 = state_84267;
var statearr_84274_84303 = state_84267__$1;
(statearr_84274_84303[(2)] = inst_84263);

(statearr_84274_84303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (13))){
var inst_84231 = (state_84267[(7)]);
var tmp84269 = inst_84231;
var inst_84231__$1 = tmp84269;
var inst_84232 = new cljs.core.Keyword(null,"wait","wait",-260664777);
var state_84267__$1 = (function (){var statearr_84275 = state_84267;
(statearr_84275[(9)] = inst_84232);

(statearr_84275[(7)] = inst_84231__$1);

return statearr_84275;
})();
var statearr_84276_84304 = state_84267__$1;
(statearr_84276_84304[(2)] = null);

(statearr_84276_84304[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (6))){
var inst_84231 = (state_84267[(7)]);
var inst_84237 = (state_84267[(2)]);
var tmp84273 = inst_84231;
var inst_84231__$1 = tmp84273;
var inst_84232 = new cljs.core.Keyword(null,"add","add",235287739);
var state_84267__$1 = (function (){var statearr_84277 = state_84267;
(statearr_84277[(10)] = inst_84237);

(statearr_84277[(9)] = inst_84232);

(statearr_84277[(7)] = inst_84231__$1);

return statearr_84277;
})();
var statearr_84278_84305 = state_84267__$1;
(statearr_84278_84305[(2)] = null);

(statearr_84278_84305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (3))){
var inst_84265 = (state_84267[(2)]);
var state_84267__$1 = state_84267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_84267__$1,inst_84265);
} else {
if((state_val_84268 === (12))){
var inst_84254 = (state_84267[(11)]);
var inst_84231 = inst_84254;
var inst_84232 = new cljs.core.Keyword(null,"slide","slide",142491892);
var state_84267__$1 = (function (){var statearr_84279 = state_84267;
(statearr_84279[(9)] = inst_84232);

(statearr_84279[(7)] = inst_84231);

return statearr_84279;
})();
var statearr_84280_84306 = state_84267__$1;
(statearr_84280_84306[(2)] = null);

(statearr_84280_84306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (2))){
var inst_84232 = (state_84267[(9)]);
var state_84267__$1 = state_84267;
var G__84281_84307 = (((inst_84232 instanceof cljs.core.Keyword))?inst_84232.fqn:null);
switch (G__84281_84307) {
case "slide":
var statearr_84282_84309 = state_84267__$1;
(statearr_84282_84309[(1)] = (5));


break;
case "add":
var statearr_84283_84310 = state_84267__$1;
(statearr_84283_84310[(1)] = (7));


break;
case "render":
var statearr_84284_84311 = state_84267__$1;
(statearr_84284_84311[(1)] = (9));


break;
case "wait":
var statearr_84285_84312 = state_84267__$1;
(statearr_84285_84312[(1)] = (10));


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(inst_84232)].join('')));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (11))){
var inst_84231 = (state_84267[(7)]);
var inst_84254 = (state_84267[(11)]);
var inst_84253 = (state_84267[(2)]);
var inst_84254__$1 = my2048.core.handle_move.call(null,inst_84231,inst_84253);
var state_84267__$1 = (function (){var statearr_84286 = state_84267;
(statearr_84286[(11)] = inst_84254__$1);

return statearr_84286;
})();
if(cljs.core.truth_(inst_84254__$1)){
var statearr_84287_84313 = state_84267__$1;
(statearr_84287_84313[(1)] = (12));

} else {
var statearr_84288_84314 = state_84267__$1;
(statearr_84288_84314[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (9))){
var inst_84232 = (state_84267[(9)]);
var inst_84231 = (state_84267[(7)]);
var inst_84247 = my2048.core.render.call(null,inst_84231);
var inst_84248 = (function (){var board = inst_84231;
var action = inst_84232;
return ((function (board,action,inst_84232,inst_84231,inst_84247,state_val_84268,c__19398__auto__,keys){
return (function (p1__84228_SHARP_){
return cljs.core.dissoc.call(null,p1__84228_SHARP_,new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"old","old",-1825222690));
});
;})(board,action,inst_84232,inst_84231,inst_84247,state_val_84268,c__19398__auto__,keys))
})();
var inst_84249 = cljs.core.map.call(null,inst_84248,inst_84231);
var inst_84231__$1 = inst_84249;
var inst_84232__$1 = new cljs.core.Keyword(null,"wait","wait",-260664777);
var state_84267__$1 = (function (){var statearr_84289 = state_84267;
(statearr_84289[(12)] = inst_84247);

(statearr_84289[(9)] = inst_84232__$1);

(statearr_84289[(7)] = inst_84231__$1);

return statearr_84289;
})();
var statearr_84290_84315 = state_84267__$1;
(statearr_84290_84315[(2)] = null);

(statearr_84290_84315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (5))){
var inst_84231 = (state_84267[(7)]);
var inst_84234 = my2048.core.render.call(null,inst_84231);
var inst_84235 = cljs.core.async.timeout.call(null,(100));
var state_84267__$1 = (function (){var statearr_84291 = state_84267;
(statearr_84291[(13)] = inst_84234);

return statearr_84291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84267__$1,(6),inst_84235);
} else {
if((state_val_84268 === (14))){
var inst_84260 = (state_84267[(2)]);
var state_84267__$1 = state_84267;
var statearr_84292_84316 = state_84267__$1;
(statearr_84292_84316[(2)] = inst_84260);

(statearr_84292_84316[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_84268 === (10))){
var state_84267__$1 = state_84267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_84267__$1,(11),keys);
} else {
if((state_val_84268 === (8))){
var inst_84231 = (state_84267[(7)]);
var inst_84243 = (state_84267[(2)]);
var inst_84244 = my2048.core.add_random_tile.call(null,inst_84231);
var inst_84231__$1 = inst_84244;
var inst_84232 = new cljs.core.Keyword(null,"render","render",-1408033454);
var state_84267__$1 = (function (){var statearr_84293 = state_84267;
(statearr_84293[(9)] = inst_84232);

(statearr_84293[(7)] = inst_84231__$1);

(statearr_84293[(14)] = inst_84243);

return statearr_84293;
})();
var statearr_84294_84317 = state_84267__$1;
(statearr_84294_84317[(2)] = null);

(statearr_84294_84317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19398__auto__,keys))
;
return ((function (switch__19333__auto__,c__19398__auto__,keys){
return (function() {
var my2048$core$state_machine__19334__auto__ = null;
var my2048$core$state_machine__19334__auto____0 = (function (){
var statearr_84298 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_84298[(0)] = my2048$core$state_machine__19334__auto__);

(statearr_84298[(1)] = (1));

return statearr_84298;
});
var my2048$core$state_machine__19334__auto____1 = (function (state_84267){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_84267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e84299){if((e84299 instanceof Object)){
var ex__19337__auto__ = e84299;
var statearr_84300_84318 = state_84267;
(statearr_84300_84318[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_84267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e84299;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__84319 = state_84267;
state_84267 = G__84319;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
my2048$core$state_machine__19334__auto__ = function(state_84267){
switch(arguments.length){
case 0:
return my2048$core$state_machine__19334__auto____0.call(this);
case 1:
return my2048$core$state_machine__19334__auto____1.call(this,state_84267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
my2048$core$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = my2048$core$state_machine__19334__auto____0;
my2048$core$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = my2048$core$state_machine__19334__auto____1;
return my2048$core$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__,keys))
})();
var state__19400__auto__ = (function (){var statearr_84301 = f__19399__auto__.call(null);
(statearr_84301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_84301;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__,keys))
);

return c__19398__auto__;
})();
}

//# sourceMappingURL=core.js.map?rel=1445169815424