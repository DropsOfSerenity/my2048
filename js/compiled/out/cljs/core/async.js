// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async27922 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27922 = (function (fn_handler,f,meta27923){
this.fn_handler = fn_handler;
this.f = f;
this.meta27923 = meta27923;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27924,meta27923__$1){
var self__ = this;
var _27924__$1 = this;
return (new cljs.core.async.t_cljs$core$async27922(self__.fn_handler,self__.f,meta27923__$1));
});

cljs.core.async.t_cljs$core$async27922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27924){
var self__ = this;
var _27924__$1 = this;
return self__.meta27923;
});

cljs.core.async.t_cljs$core$async27922.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta27923","meta27923",2068553794,null)], null);
});

cljs.core.async.t_cljs$core$async27922.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27922.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27922";

cljs.core.async.t_cljs$core$async27922.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27922");
});

cljs.core.async.__GT_t_cljs$core$async27922 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async27922(fn_handler__$1,f__$1,meta27923){
return (new cljs.core.async.t_cljs$core$async27922(fn_handler__$1,f__$1,meta27923));
});

}

return (new cljs.core.async.t_cljs$core$async27922(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27927 = [];
var len__17376__auto___27930 = arguments.length;
var i__17377__auto___27931 = (0);
while(true){
if((i__17377__auto___27931 < len__17376__auto___27930)){
args27927.push((arguments[i__17377__auto___27931]));

var G__27932 = (i__17377__auto___27931 + (1));
i__17377__auto___27931 = G__27932;
continue;
} else {
}
break;
}

var G__27929 = args27927.length;
switch (G__27929) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27927.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27934 = [];
var len__17376__auto___27937 = arguments.length;
var i__17377__auto___27938 = (0);
while(true){
if((i__17377__auto___27938 < len__17376__auto___27937)){
args27934.push((arguments[i__17377__auto___27938]));

var G__27939 = (i__17377__auto___27938 + (1));
i__17377__auto___27938 = G__27939;
continue;
} else {
}
break;
}

var G__27936 = args27934.length;
switch (G__27936) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27934.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27941 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27941);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27941,ret){
return (function (){
return fn1.call(null,val_27941);
});})(val_27941,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27942 = [];
var len__17376__auto___27945 = arguments.length;
var i__17377__auto___27946 = (0);
while(true){
if((i__17377__auto___27946 < len__17376__auto___27945)){
args27942.push((arguments[i__17377__auto___27946]));

var G__27947 = (i__17377__auto___27946 + (1));
i__17377__auto___27946 = G__27947;
continue;
} else {
}
break;
}

var G__27944 = args27942.length;
switch (G__27944) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27942.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17221__auto___27949 = n;
var x_27950 = (0);
while(true){
if((x_27950 < n__17221__auto___27949)){
(a[x_27950] = (0));

var G__27951 = (x_27950 + (1));
x_27950 = G__27951;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27952 = (i + (1));
i = G__27952;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27956 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27956 = (function (alt_flag,flag,meta27957){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27957 = meta27957;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27958,meta27957__$1){
var self__ = this;
var _27958__$1 = this;
return (new cljs.core.async.t_cljs$core$async27956(self__.alt_flag,self__.flag,meta27957__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27958){
var self__ = this;
var _27958__$1 = this;
return self__.meta27957;
});})(flag))
;

cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27956.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27956.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27957","meta27957",1012154685,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27956.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27956.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27956";

cljs.core.async.t_cljs$core$async27956.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27956");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27956 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27956(alt_flag__$1,flag__$1,meta27957){
return (new cljs.core.async.t_cljs$core$async27956(alt_flag__$1,flag__$1,meta27957));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27956(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27962 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27962 = (function (alt_handler,flag,cb,meta27963){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27963 = meta27963;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27964,meta27963__$1){
var self__ = this;
var _27964__$1 = this;
return (new cljs.core.async.t_cljs$core$async27962(self__.alt_handler,self__.flag,self__.cb,meta27963__$1));
});

cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27964){
var self__ = this;
var _27964__$1 = this;
return self__.meta27963;
});

cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27962.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27962.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27963","meta27963",1106626100,null)], null);
});

cljs.core.async.t_cljs$core$async27962.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27962.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27962";

cljs.core.async.t_cljs$core$async27962.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async27962");
});

cljs.core.async.__GT_t_cljs$core$async27962 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27962(alt_handler__$1,flag__$1,cb__$1,meta27963){
return (new cljs.core.async.t_cljs$core$async27962(alt_handler__$1,flag__$1,cb__$1,meta27963));
});

}

return (new cljs.core.async.t_cljs$core$async27962(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27965_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27965_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27966_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27966_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16318__auto__ = wport;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27967 = (i + (1));
i = G__27967;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16318__auto__ = ret;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16306__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16306__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17383__auto__ = [];
var len__17376__auto___27973 = arguments.length;
var i__17377__auto___27974 = (0);
while(true){
if((i__17377__auto___27974 < len__17376__auto___27973)){
args__17383__auto__.push((arguments[i__17377__auto___27974]));

var G__27975 = (i__17377__auto___27974 + (1));
i__17377__auto___27974 = G__27975;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((1) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17384__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27970){
var map__27971 = p__27970;
var map__27971__$1 = ((((!((map__27971 == null)))?((((map__27971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27971):map__27971);
var opts = map__27971__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27968){
var G__27969 = cljs.core.first.call(null,seq27968);
var seq27968__$1 = cljs.core.next.call(null,seq27968);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27969,seq27968__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27976 = [];
var len__17376__auto___28026 = arguments.length;
var i__17377__auto___28027 = (0);
while(true){
if((i__17377__auto___28027 < len__17376__auto___28026)){
args27976.push((arguments[i__17377__auto___28027]));

var G__28028 = (i__17377__auto___28027 + (1));
i__17377__auto___28027 = G__28028;
continue;
} else {
}
break;
}

var G__27978 = args27976.length;
switch (G__27978) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27976.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19398__auto___28030 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___28030){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___28030){
return (function (state_28002){
var state_val_28003 = (state_28002[(1)]);
if((state_val_28003 === (7))){
var inst_27998 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
var statearr_28004_28031 = state_28002__$1;
(statearr_28004_28031[(2)] = inst_27998);

(statearr_28004_28031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (1))){
var state_28002__$1 = state_28002;
var statearr_28005_28032 = state_28002__$1;
(statearr_28005_28032[(2)] = null);

(statearr_28005_28032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (4))){
var inst_27981 = (state_28002[(7)]);
var inst_27981__$1 = (state_28002[(2)]);
var inst_27982 = (inst_27981__$1 == null);
var state_28002__$1 = (function (){var statearr_28006 = state_28002;
(statearr_28006[(7)] = inst_27981__$1);

return statearr_28006;
})();
if(cljs.core.truth_(inst_27982)){
var statearr_28007_28033 = state_28002__$1;
(statearr_28007_28033[(1)] = (5));

} else {
var statearr_28008_28034 = state_28002__$1;
(statearr_28008_28034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (13))){
var state_28002__$1 = state_28002;
var statearr_28009_28035 = state_28002__$1;
(statearr_28009_28035[(2)] = null);

(statearr_28009_28035[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (6))){
var inst_27981 = (state_28002[(7)]);
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28002__$1,(11),to,inst_27981);
} else {
if((state_val_28003 === (3))){
var inst_28000 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28002__$1,inst_28000);
} else {
if((state_val_28003 === (12))){
var state_28002__$1 = state_28002;
var statearr_28010_28036 = state_28002__$1;
(statearr_28010_28036[(2)] = null);

(statearr_28010_28036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (2))){
var state_28002__$1 = state_28002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28002__$1,(4),from);
} else {
if((state_val_28003 === (11))){
var inst_27991 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
if(cljs.core.truth_(inst_27991)){
var statearr_28011_28037 = state_28002__$1;
(statearr_28011_28037[(1)] = (12));

} else {
var statearr_28012_28038 = state_28002__$1;
(statearr_28012_28038[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (9))){
var state_28002__$1 = state_28002;
var statearr_28013_28039 = state_28002__$1;
(statearr_28013_28039[(2)] = null);

(statearr_28013_28039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (5))){
var state_28002__$1 = state_28002;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28014_28040 = state_28002__$1;
(statearr_28014_28040[(1)] = (8));

} else {
var statearr_28015_28041 = state_28002__$1;
(statearr_28015_28041[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (14))){
var inst_27996 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
var statearr_28016_28042 = state_28002__$1;
(statearr_28016_28042[(2)] = inst_27996);

(statearr_28016_28042[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (10))){
var inst_27988 = (state_28002[(2)]);
var state_28002__$1 = state_28002;
var statearr_28017_28043 = state_28002__$1;
(statearr_28017_28043[(2)] = inst_27988);

(statearr_28017_28043[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28003 === (8))){
var inst_27985 = cljs.core.async.close_BANG_.call(null,to);
var state_28002__$1 = state_28002;
var statearr_28018_28044 = state_28002__$1;
(statearr_28018_28044[(2)] = inst_27985);

(statearr_28018_28044[(1)] = (10));


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
});})(c__19398__auto___28030))
;
return ((function (switch__19333__auto__,c__19398__auto___28030){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_28022 = [null,null,null,null,null,null,null,null];
(statearr_28022[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_28022[(1)] = (1));

return statearr_28022;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_28002){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28023){if((e28023 instanceof Object)){
var ex__19337__auto__ = e28023;
var statearr_28024_28045 = state_28002;
(statearr_28024_28045[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28023;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28046 = state_28002;
state_28002 = G__28046;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_28002){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_28002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___28030))
})();
var state__19400__auto__ = (function (){var statearr_28025 = f__19399__auto__.call(null);
(statearr_28025[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___28030);

return statearr_28025;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___28030))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28230){
var vec__28231 = p__28230;
var v = cljs.core.nth.call(null,vec__28231,(0),null);
var p = cljs.core.nth.call(null,vec__28231,(1),null);
var job = vec__28231;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19398__auto___28413 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___28413,res,vec__28231,v,p,job,jobs,results){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___28413,res,vec__28231,v,p,job,jobs,results){
return (function (state_28236){
var state_val_28237 = (state_28236[(1)]);
if((state_val_28237 === (1))){
var state_28236__$1 = state_28236;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28236__$1,(2),res,v);
} else {
if((state_val_28237 === (2))){
var inst_28233 = (state_28236[(2)]);
var inst_28234 = cljs.core.async.close_BANG_.call(null,res);
var state_28236__$1 = (function (){var statearr_28238 = state_28236;
(statearr_28238[(7)] = inst_28233);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28236__$1,inst_28234);
} else {
return null;
}
}
});})(c__19398__auto___28413,res,vec__28231,v,p,job,jobs,results))
;
return ((function (switch__19333__auto__,c__19398__auto___28413,res,vec__28231,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0 = (function (){
var statearr_28242 = [null,null,null,null,null,null,null,null];
(statearr_28242[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__);

(statearr_28242[(1)] = (1));

return statearr_28242;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1 = (function (state_28236){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28243){if((e28243 instanceof Object)){
var ex__19337__auto__ = e28243;
var statearr_28244_28414 = state_28236;
(statearr_28244_28414[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28243;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28415 = state_28236;
state_28236 = G__28415;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = function(state_28236){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1.call(this,state_28236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___28413,res,vec__28231,v,p,job,jobs,results))
})();
var state__19400__auto__ = (function (){var statearr_28245 = f__19399__auto__.call(null);
(statearr_28245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___28413);

return statearr_28245;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___28413,res,vec__28231,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28246){
var vec__28247 = p__28246;
var v = cljs.core.nth.call(null,vec__28247,(0),null);
var p = cljs.core.nth.call(null,vec__28247,(1),null);
var job = vec__28247;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17221__auto___28416 = n;
var __28417 = (0);
while(true){
if((__28417 < n__17221__auto___28416)){
var G__28248_28418 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28248_28418) {
case "compute":
var c__19398__auto___28420 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28417,c__19398__auto___28420,G__28248_28418,n__17221__auto___28416,jobs,results,process,async){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (__28417,c__19398__auto___28420,G__28248_28418,n__17221__auto___28416,jobs,results,process,async){
return (function (state_28261){
var state_val_28262 = (state_28261[(1)]);
if((state_val_28262 === (1))){
var state_28261__$1 = state_28261;
var statearr_28263_28421 = state_28261__$1;
(statearr_28263_28421[(2)] = null);

(statearr_28263_28421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (2))){
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28261__$1,(4),jobs);
} else {
if((state_val_28262 === (3))){
var inst_28259 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else {
if((state_val_28262 === (4))){
var inst_28251 = (state_28261[(2)]);
var inst_28252 = process.call(null,inst_28251);
var state_28261__$1 = state_28261;
if(cljs.core.truth_(inst_28252)){
var statearr_28264_28422 = state_28261__$1;
(statearr_28264_28422[(1)] = (5));

} else {
var statearr_28265_28423 = state_28261__$1;
(statearr_28265_28423[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (5))){
var state_28261__$1 = state_28261;
var statearr_28266_28424 = state_28261__$1;
(statearr_28266_28424[(2)] = null);

(statearr_28266_28424[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (6))){
var state_28261__$1 = state_28261;
var statearr_28267_28425 = state_28261__$1;
(statearr_28267_28425[(2)] = null);

(statearr_28267_28425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28262 === (7))){
var inst_28257 = (state_28261[(2)]);
var state_28261__$1 = state_28261;
var statearr_28268_28426 = state_28261__$1;
(statearr_28268_28426[(2)] = inst_28257);

(statearr_28268_28426[(1)] = (3));


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
});})(__28417,c__19398__auto___28420,G__28248_28418,n__17221__auto___28416,jobs,results,process,async))
;
return ((function (__28417,switch__19333__auto__,c__19398__auto___28420,G__28248_28418,n__17221__auto___28416,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0 = (function (){
var statearr_28272 = [null,null,null,null,null,null,null];
(statearr_28272[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__);

(statearr_28272[(1)] = (1));

return statearr_28272;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1 = (function (state_28261){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object)){
var ex__19337__auto__ = e28273;
var statearr_28274_28427 = state_28261;
(statearr_28274_28427[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28273;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28428 = state_28261;
state_28261 = G__28428;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__;
})()
;})(__28417,switch__19333__auto__,c__19398__auto___28420,G__28248_28418,n__17221__auto___28416,jobs,results,process,async))
})();
var state__19400__auto__ = (function (){var statearr_28275 = f__19399__auto__.call(null);
(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___28420);

return statearr_28275;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(__28417,c__19398__auto___28420,G__28248_28418,n__17221__auto___28416,jobs,results,process,async))
);


break;
case "async":
var c__19398__auto___28429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28417,c__19398__auto___28429,G__28248_28418,n__17221__auto___28416,jobs,results,process,async){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (__28417,c__19398__auto___28429,G__28248_28418,n__17221__auto___28416,jobs,results,process,async){
return (function (state_28288){
var state_val_28289 = (state_28288[(1)]);
if((state_val_28289 === (1))){
var state_28288__$1 = state_28288;
var statearr_28290_28430 = state_28288__$1;
(statearr_28290_28430[(2)] = null);

(statearr_28290_28430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (2))){
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28288__$1,(4),jobs);
} else {
if((state_val_28289 === (3))){
var inst_28286 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28288__$1,inst_28286);
} else {
if((state_val_28289 === (4))){
var inst_28278 = (state_28288[(2)]);
var inst_28279 = async.call(null,inst_28278);
var state_28288__$1 = state_28288;
if(cljs.core.truth_(inst_28279)){
var statearr_28291_28431 = state_28288__$1;
(statearr_28291_28431[(1)] = (5));

} else {
var statearr_28292_28432 = state_28288__$1;
(statearr_28292_28432[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (5))){
var state_28288__$1 = state_28288;
var statearr_28293_28433 = state_28288__$1;
(statearr_28293_28433[(2)] = null);

(statearr_28293_28433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (6))){
var state_28288__$1 = state_28288;
var statearr_28294_28434 = state_28288__$1;
(statearr_28294_28434[(2)] = null);

(statearr_28294_28434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28289 === (7))){
var inst_28284 = (state_28288[(2)]);
var state_28288__$1 = state_28288;
var statearr_28295_28435 = state_28288__$1;
(statearr_28295_28435[(2)] = inst_28284);

(statearr_28295_28435[(1)] = (3));


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
});})(__28417,c__19398__auto___28429,G__28248_28418,n__17221__auto___28416,jobs,results,process,async))
;
return ((function (__28417,switch__19333__auto__,c__19398__auto___28429,G__28248_28418,n__17221__auto___28416,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0 = (function (){
var statearr_28299 = [null,null,null,null,null,null,null];
(statearr_28299[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__);

(statearr_28299[(1)] = (1));

return statearr_28299;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1 = (function (state_28288){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28300){if((e28300 instanceof Object)){
var ex__19337__auto__ = e28300;
var statearr_28301_28436 = state_28288;
(statearr_28301_28436[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28300;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28437 = state_28288;
state_28288 = G__28437;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = function(state_28288){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1.call(this,state_28288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__;
})()
;})(__28417,switch__19333__auto__,c__19398__auto___28429,G__28248_28418,n__17221__auto___28416,jobs,results,process,async))
})();
var state__19400__auto__ = (function (){var statearr_28302 = f__19399__auto__.call(null);
(statearr_28302[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___28429);

return statearr_28302;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(__28417,c__19398__auto___28429,G__28248_28418,n__17221__auto___28416,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28438 = (__28417 + (1));
__28417 = G__28438;
continue;
} else {
}
break;
}

var c__19398__auto___28439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___28439,jobs,results,process,async){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___28439,jobs,results,process,async){
return (function (state_28324){
var state_val_28325 = (state_28324[(1)]);
if((state_val_28325 === (1))){
var state_28324__$1 = state_28324;
var statearr_28326_28440 = state_28324__$1;
(statearr_28326_28440[(2)] = null);

(statearr_28326_28440[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (2))){
var state_28324__$1 = state_28324;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28324__$1,(4),from);
} else {
if((state_val_28325 === (3))){
var inst_28322 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28324__$1,inst_28322);
} else {
if((state_val_28325 === (4))){
var inst_28305 = (state_28324[(7)]);
var inst_28305__$1 = (state_28324[(2)]);
var inst_28306 = (inst_28305__$1 == null);
var state_28324__$1 = (function (){var statearr_28327 = state_28324;
(statearr_28327[(7)] = inst_28305__$1);

return statearr_28327;
})();
if(cljs.core.truth_(inst_28306)){
var statearr_28328_28441 = state_28324__$1;
(statearr_28328_28441[(1)] = (5));

} else {
var statearr_28329_28442 = state_28324__$1;
(statearr_28329_28442[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (5))){
var inst_28308 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28324__$1 = state_28324;
var statearr_28330_28443 = state_28324__$1;
(statearr_28330_28443[(2)] = inst_28308);

(statearr_28330_28443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (6))){
var inst_28305 = (state_28324[(7)]);
var inst_28310 = (state_28324[(8)]);
var inst_28310__$1 = cljs.core.async.chan.call(null,(1));
var inst_28311 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28312 = [inst_28305,inst_28310__$1];
var inst_28313 = (new cljs.core.PersistentVector(null,2,(5),inst_28311,inst_28312,null));
var state_28324__$1 = (function (){var statearr_28331 = state_28324;
(statearr_28331[(8)] = inst_28310__$1);

return statearr_28331;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28324__$1,(8),jobs,inst_28313);
} else {
if((state_val_28325 === (7))){
var inst_28320 = (state_28324[(2)]);
var state_28324__$1 = state_28324;
var statearr_28332_28444 = state_28324__$1;
(statearr_28332_28444[(2)] = inst_28320);

(statearr_28332_28444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28325 === (8))){
var inst_28310 = (state_28324[(8)]);
var inst_28315 = (state_28324[(2)]);
var state_28324__$1 = (function (){var statearr_28333 = state_28324;
(statearr_28333[(9)] = inst_28315);

return statearr_28333;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28324__$1,(9),results,inst_28310);
} else {
if((state_val_28325 === (9))){
var inst_28317 = (state_28324[(2)]);
var state_28324__$1 = (function (){var statearr_28334 = state_28324;
(statearr_28334[(10)] = inst_28317);

return statearr_28334;
})();
var statearr_28335_28445 = state_28324__$1;
(statearr_28335_28445[(2)] = null);

(statearr_28335_28445[(1)] = (2));


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
});})(c__19398__auto___28439,jobs,results,process,async))
;
return ((function (switch__19333__auto__,c__19398__auto___28439,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0 = (function (){
var statearr_28339 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28339[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__);

(statearr_28339[(1)] = (1));

return statearr_28339;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1 = (function (state_28324){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28324);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28340){if((e28340 instanceof Object)){
var ex__19337__auto__ = e28340;
var statearr_28341_28446 = state_28324;
(statearr_28341_28446[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28447 = state_28324;
state_28324 = G__28447;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = function(state_28324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1.call(this,state_28324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___28439,jobs,results,process,async))
})();
var state__19400__auto__ = (function (){var statearr_28342 = f__19399__auto__.call(null);
(statearr_28342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___28439);

return statearr_28342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___28439,jobs,results,process,async))
);


var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__,jobs,results,process,async){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__,jobs,results,process,async){
return (function (state_28380){
var state_val_28381 = (state_28380[(1)]);
if((state_val_28381 === (7))){
var inst_28376 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
var statearr_28382_28448 = state_28380__$1;
(statearr_28382_28448[(2)] = inst_28376);

(statearr_28382_28448[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (20))){
var state_28380__$1 = state_28380;
var statearr_28383_28449 = state_28380__$1;
(statearr_28383_28449[(2)] = null);

(statearr_28383_28449[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (1))){
var state_28380__$1 = state_28380;
var statearr_28384_28450 = state_28380__$1;
(statearr_28384_28450[(2)] = null);

(statearr_28384_28450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (4))){
var inst_28345 = (state_28380[(7)]);
var inst_28345__$1 = (state_28380[(2)]);
var inst_28346 = (inst_28345__$1 == null);
var state_28380__$1 = (function (){var statearr_28385 = state_28380;
(statearr_28385[(7)] = inst_28345__$1);

return statearr_28385;
})();
if(cljs.core.truth_(inst_28346)){
var statearr_28386_28451 = state_28380__$1;
(statearr_28386_28451[(1)] = (5));

} else {
var statearr_28387_28452 = state_28380__$1;
(statearr_28387_28452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (15))){
var inst_28358 = (state_28380[(8)]);
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28380__$1,(18),to,inst_28358);
} else {
if((state_val_28381 === (21))){
var inst_28371 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
var statearr_28388_28453 = state_28380__$1;
(statearr_28388_28453[(2)] = inst_28371);

(statearr_28388_28453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (13))){
var inst_28373 = (state_28380[(2)]);
var state_28380__$1 = (function (){var statearr_28389 = state_28380;
(statearr_28389[(9)] = inst_28373);

return statearr_28389;
})();
var statearr_28390_28454 = state_28380__$1;
(statearr_28390_28454[(2)] = null);

(statearr_28390_28454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (6))){
var inst_28345 = (state_28380[(7)]);
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28380__$1,(11),inst_28345);
} else {
if((state_val_28381 === (17))){
var inst_28366 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
if(cljs.core.truth_(inst_28366)){
var statearr_28391_28455 = state_28380__$1;
(statearr_28391_28455[(1)] = (19));

} else {
var statearr_28392_28456 = state_28380__$1;
(statearr_28392_28456[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (3))){
var inst_28378 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28380__$1,inst_28378);
} else {
if((state_val_28381 === (12))){
var inst_28355 = (state_28380[(10)]);
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28380__$1,(14),inst_28355);
} else {
if((state_val_28381 === (2))){
var state_28380__$1 = state_28380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28380__$1,(4),results);
} else {
if((state_val_28381 === (19))){
var state_28380__$1 = state_28380;
var statearr_28393_28457 = state_28380__$1;
(statearr_28393_28457[(2)] = null);

(statearr_28393_28457[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (11))){
var inst_28355 = (state_28380[(2)]);
var state_28380__$1 = (function (){var statearr_28394 = state_28380;
(statearr_28394[(10)] = inst_28355);

return statearr_28394;
})();
var statearr_28395_28458 = state_28380__$1;
(statearr_28395_28458[(2)] = null);

(statearr_28395_28458[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (9))){
var state_28380__$1 = state_28380;
var statearr_28396_28459 = state_28380__$1;
(statearr_28396_28459[(2)] = null);

(statearr_28396_28459[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (5))){
var state_28380__$1 = state_28380;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28397_28460 = state_28380__$1;
(statearr_28397_28460[(1)] = (8));

} else {
var statearr_28398_28461 = state_28380__$1;
(statearr_28398_28461[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (14))){
var inst_28360 = (state_28380[(11)]);
var inst_28358 = (state_28380[(8)]);
var inst_28358__$1 = (state_28380[(2)]);
var inst_28359 = (inst_28358__$1 == null);
var inst_28360__$1 = cljs.core.not.call(null,inst_28359);
var state_28380__$1 = (function (){var statearr_28399 = state_28380;
(statearr_28399[(11)] = inst_28360__$1);

(statearr_28399[(8)] = inst_28358__$1);

return statearr_28399;
})();
if(inst_28360__$1){
var statearr_28400_28462 = state_28380__$1;
(statearr_28400_28462[(1)] = (15));

} else {
var statearr_28401_28463 = state_28380__$1;
(statearr_28401_28463[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (16))){
var inst_28360 = (state_28380[(11)]);
var state_28380__$1 = state_28380;
var statearr_28402_28464 = state_28380__$1;
(statearr_28402_28464[(2)] = inst_28360);

(statearr_28402_28464[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (10))){
var inst_28352 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
var statearr_28403_28465 = state_28380__$1;
(statearr_28403_28465[(2)] = inst_28352);

(statearr_28403_28465[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (18))){
var inst_28363 = (state_28380[(2)]);
var state_28380__$1 = state_28380;
var statearr_28404_28466 = state_28380__$1;
(statearr_28404_28466[(2)] = inst_28363);

(statearr_28404_28466[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28381 === (8))){
var inst_28349 = cljs.core.async.close_BANG_.call(null,to);
var state_28380__$1 = state_28380;
var statearr_28405_28467 = state_28380__$1;
(statearr_28405_28467[(2)] = inst_28349);

(statearr_28405_28467[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__19398__auto__,jobs,results,process,async))
;
return ((function (switch__19333__auto__,c__19398__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0 = (function (){
var statearr_28409 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28409[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__);

(statearr_28409[(1)] = (1));

return statearr_28409;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1 = (function (state_28380){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28410){if((e28410 instanceof Object)){
var ex__19337__auto__ = e28410;
var statearr_28411_28468 = state_28380;
(statearr_28411_28468[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28469 = state_28380;
state_28380 = G__28469;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__ = function(state_28380){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1.call(this,state_28380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19334__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__,jobs,results,process,async))
})();
var state__19400__auto__ = (function (){var statearr_28412 = f__19399__auto__.call(null);
(statearr_28412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_28412;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__,jobs,results,process,async))
);

return c__19398__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28470 = [];
var len__17376__auto___28473 = arguments.length;
var i__17377__auto___28474 = (0);
while(true){
if((i__17377__auto___28474 < len__17376__auto___28473)){
args28470.push((arguments[i__17377__auto___28474]));

var G__28475 = (i__17377__auto___28474 + (1));
i__17377__auto___28474 = G__28475;
continue;
} else {
}
break;
}

var G__28472 = args28470.length;
switch (G__28472) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28470.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28477 = [];
var len__17376__auto___28480 = arguments.length;
var i__17377__auto___28481 = (0);
while(true){
if((i__17377__auto___28481 < len__17376__auto___28480)){
args28477.push((arguments[i__17377__auto___28481]));

var G__28482 = (i__17377__auto___28481 + (1));
i__17377__auto___28481 = G__28482;
continue;
} else {
}
break;
}

var G__28479 = args28477.length;
switch (G__28479) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28477.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28484 = [];
var len__17376__auto___28537 = arguments.length;
var i__17377__auto___28538 = (0);
while(true){
if((i__17377__auto___28538 < len__17376__auto___28537)){
args28484.push((arguments[i__17377__auto___28538]));

var G__28539 = (i__17377__auto___28538 + (1));
i__17377__auto___28538 = G__28539;
continue;
} else {
}
break;
}

var G__28486 = args28484.length;
switch (G__28486) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28484.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19398__auto___28541 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___28541,tc,fc){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___28541,tc,fc){
return (function (state_28512){
var state_val_28513 = (state_28512[(1)]);
if((state_val_28513 === (7))){
var inst_28508 = (state_28512[(2)]);
var state_28512__$1 = state_28512;
var statearr_28514_28542 = state_28512__$1;
(statearr_28514_28542[(2)] = inst_28508);

(statearr_28514_28542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (1))){
var state_28512__$1 = state_28512;
var statearr_28515_28543 = state_28512__$1;
(statearr_28515_28543[(2)] = null);

(statearr_28515_28543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (4))){
var inst_28489 = (state_28512[(7)]);
var inst_28489__$1 = (state_28512[(2)]);
var inst_28490 = (inst_28489__$1 == null);
var state_28512__$1 = (function (){var statearr_28516 = state_28512;
(statearr_28516[(7)] = inst_28489__$1);

return statearr_28516;
})();
if(cljs.core.truth_(inst_28490)){
var statearr_28517_28544 = state_28512__$1;
(statearr_28517_28544[(1)] = (5));

} else {
var statearr_28518_28545 = state_28512__$1;
(statearr_28518_28545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (13))){
var state_28512__$1 = state_28512;
var statearr_28519_28546 = state_28512__$1;
(statearr_28519_28546[(2)] = null);

(statearr_28519_28546[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (6))){
var inst_28489 = (state_28512[(7)]);
var inst_28495 = p.call(null,inst_28489);
var state_28512__$1 = state_28512;
if(cljs.core.truth_(inst_28495)){
var statearr_28520_28547 = state_28512__$1;
(statearr_28520_28547[(1)] = (9));

} else {
var statearr_28521_28548 = state_28512__$1;
(statearr_28521_28548[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (3))){
var inst_28510 = (state_28512[(2)]);
var state_28512__$1 = state_28512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28512__$1,inst_28510);
} else {
if((state_val_28513 === (12))){
var state_28512__$1 = state_28512;
var statearr_28522_28549 = state_28512__$1;
(statearr_28522_28549[(2)] = null);

(statearr_28522_28549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (2))){
var state_28512__$1 = state_28512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28512__$1,(4),ch);
} else {
if((state_val_28513 === (11))){
var inst_28489 = (state_28512[(7)]);
var inst_28499 = (state_28512[(2)]);
var state_28512__$1 = state_28512;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28512__$1,(8),inst_28499,inst_28489);
} else {
if((state_val_28513 === (9))){
var state_28512__$1 = state_28512;
var statearr_28523_28550 = state_28512__$1;
(statearr_28523_28550[(2)] = tc);

(statearr_28523_28550[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (5))){
var inst_28492 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28493 = cljs.core.async.close_BANG_.call(null,fc);
var state_28512__$1 = (function (){var statearr_28524 = state_28512;
(statearr_28524[(8)] = inst_28492);

return statearr_28524;
})();
var statearr_28525_28551 = state_28512__$1;
(statearr_28525_28551[(2)] = inst_28493);

(statearr_28525_28551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (14))){
var inst_28506 = (state_28512[(2)]);
var state_28512__$1 = state_28512;
var statearr_28526_28552 = state_28512__$1;
(statearr_28526_28552[(2)] = inst_28506);

(statearr_28526_28552[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (10))){
var state_28512__$1 = state_28512;
var statearr_28527_28553 = state_28512__$1;
(statearr_28527_28553[(2)] = fc);

(statearr_28527_28553[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28513 === (8))){
var inst_28501 = (state_28512[(2)]);
var state_28512__$1 = state_28512;
if(cljs.core.truth_(inst_28501)){
var statearr_28528_28554 = state_28512__$1;
(statearr_28528_28554[(1)] = (12));

} else {
var statearr_28529_28555 = state_28512__$1;
(statearr_28529_28555[(1)] = (13));

}

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
});})(c__19398__auto___28541,tc,fc))
;
return ((function (switch__19333__auto__,c__19398__auto___28541,tc,fc){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_28533 = [null,null,null,null,null,null,null,null,null];
(statearr_28533[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_28533[(1)] = (1));

return statearr_28533;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_28512){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28534){if((e28534 instanceof Object)){
var ex__19337__auto__ = e28534;
var statearr_28535_28556 = state_28512;
(statearr_28535_28556[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28557 = state_28512;
state_28512 = G__28557;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_28512){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_28512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___28541,tc,fc))
})();
var state__19400__auto__ = (function (){var statearr_28536 = f__19399__auto__.call(null);
(statearr_28536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___28541);

return statearr_28536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___28541,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__){
return (function (state_28604){
var state_val_28605 = (state_28604[(1)]);
if((state_val_28605 === (1))){
var inst_28590 = init;
var state_28604__$1 = (function (){var statearr_28606 = state_28604;
(statearr_28606[(7)] = inst_28590);

return statearr_28606;
})();
var statearr_28607_28622 = state_28604__$1;
(statearr_28607_28622[(2)] = null);

(statearr_28607_28622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (2))){
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28604__$1,(4),ch);
} else {
if((state_val_28605 === (3))){
var inst_28602 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28604__$1,inst_28602);
} else {
if((state_val_28605 === (4))){
var inst_28593 = (state_28604[(8)]);
var inst_28593__$1 = (state_28604[(2)]);
var inst_28594 = (inst_28593__$1 == null);
var state_28604__$1 = (function (){var statearr_28608 = state_28604;
(statearr_28608[(8)] = inst_28593__$1);

return statearr_28608;
})();
if(cljs.core.truth_(inst_28594)){
var statearr_28609_28623 = state_28604__$1;
(statearr_28609_28623[(1)] = (5));

} else {
var statearr_28610_28624 = state_28604__$1;
(statearr_28610_28624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (5))){
var inst_28590 = (state_28604[(7)]);
var state_28604__$1 = state_28604;
var statearr_28611_28625 = state_28604__$1;
(statearr_28611_28625[(2)] = inst_28590);

(statearr_28611_28625[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (6))){
var inst_28590 = (state_28604[(7)]);
var inst_28593 = (state_28604[(8)]);
var inst_28597 = f.call(null,inst_28590,inst_28593);
var inst_28590__$1 = inst_28597;
var state_28604__$1 = (function (){var statearr_28612 = state_28604;
(statearr_28612[(7)] = inst_28590__$1);

return statearr_28612;
})();
var statearr_28613_28626 = state_28604__$1;
(statearr_28613_28626[(2)] = null);

(statearr_28613_28626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28605 === (7))){
var inst_28600 = (state_28604[(2)]);
var state_28604__$1 = state_28604;
var statearr_28614_28627 = state_28604__$1;
(statearr_28614_28627[(2)] = inst_28600);

(statearr_28614_28627[(1)] = (3));


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
});})(c__19398__auto__))
;
return ((function (switch__19333__auto__,c__19398__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19334__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19334__auto____0 = (function (){
var statearr_28618 = [null,null,null,null,null,null,null,null,null];
(statearr_28618[(0)] = cljs$core$async$reduce_$_state_machine__19334__auto__);

(statearr_28618[(1)] = (1));

return statearr_28618;
});
var cljs$core$async$reduce_$_state_machine__19334__auto____1 = (function (state_28604){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28604);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28619){if((e28619 instanceof Object)){
var ex__19337__auto__ = e28619;
var statearr_28620_28628 = state_28604;
(statearr_28620_28628[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28604);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28629 = state_28604;
state_28604 = G__28629;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19334__auto__ = function(state_28604){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19334__auto____1.call(this,state_28604);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19334__auto____0;
cljs$core$async$reduce_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19334__auto____1;
return cljs$core$async$reduce_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__))
})();
var state__19400__auto__ = (function (){var statearr_28621 = f__19399__auto__.call(null);
(statearr_28621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_28621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__))
);

return c__19398__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28630 = [];
var len__17376__auto___28682 = arguments.length;
var i__17377__auto___28683 = (0);
while(true){
if((i__17377__auto___28683 < len__17376__auto___28682)){
args28630.push((arguments[i__17377__auto___28683]));

var G__28684 = (i__17377__auto___28683 + (1));
i__17377__auto___28683 = G__28684;
continue;
} else {
}
break;
}

var G__28632 = args28630.length;
switch (G__28632) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28630.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__){
return (function (state_28657){
var state_val_28658 = (state_28657[(1)]);
if((state_val_28658 === (7))){
var inst_28639 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28659_28686 = state_28657__$1;
(statearr_28659_28686[(2)] = inst_28639);

(statearr_28659_28686[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (1))){
var inst_28633 = cljs.core.seq.call(null,coll);
var inst_28634 = inst_28633;
var state_28657__$1 = (function (){var statearr_28660 = state_28657;
(statearr_28660[(7)] = inst_28634);

return statearr_28660;
})();
var statearr_28661_28687 = state_28657__$1;
(statearr_28661_28687[(2)] = null);

(statearr_28661_28687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (4))){
var inst_28634 = (state_28657[(7)]);
var inst_28637 = cljs.core.first.call(null,inst_28634);
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28657__$1,(7),ch,inst_28637);
} else {
if((state_val_28658 === (13))){
var inst_28651 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28662_28688 = state_28657__$1;
(statearr_28662_28688[(2)] = inst_28651);

(statearr_28662_28688[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (6))){
var inst_28642 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
if(cljs.core.truth_(inst_28642)){
var statearr_28663_28689 = state_28657__$1;
(statearr_28663_28689[(1)] = (8));

} else {
var statearr_28664_28690 = state_28657__$1;
(statearr_28664_28690[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (3))){
var inst_28655 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28657__$1,inst_28655);
} else {
if((state_val_28658 === (12))){
var state_28657__$1 = state_28657;
var statearr_28665_28691 = state_28657__$1;
(statearr_28665_28691[(2)] = null);

(statearr_28665_28691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (2))){
var inst_28634 = (state_28657[(7)]);
var state_28657__$1 = state_28657;
if(cljs.core.truth_(inst_28634)){
var statearr_28666_28692 = state_28657__$1;
(statearr_28666_28692[(1)] = (4));

} else {
var statearr_28667_28693 = state_28657__$1;
(statearr_28667_28693[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (11))){
var inst_28648 = cljs.core.async.close_BANG_.call(null,ch);
var state_28657__$1 = state_28657;
var statearr_28668_28694 = state_28657__$1;
(statearr_28668_28694[(2)] = inst_28648);

(statearr_28668_28694[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (9))){
var state_28657__$1 = state_28657;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28669_28695 = state_28657__$1;
(statearr_28669_28695[(1)] = (11));

} else {
var statearr_28670_28696 = state_28657__$1;
(statearr_28670_28696[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (5))){
var inst_28634 = (state_28657[(7)]);
var state_28657__$1 = state_28657;
var statearr_28671_28697 = state_28657__$1;
(statearr_28671_28697[(2)] = inst_28634);

(statearr_28671_28697[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (10))){
var inst_28653 = (state_28657[(2)]);
var state_28657__$1 = state_28657;
var statearr_28672_28698 = state_28657__$1;
(statearr_28672_28698[(2)] = inst_28653);

(statearr_28672_28698[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28658 === (8))){
var inst_28634 = (state_28657[(7)]);
var inst_28644 = cljs.core.next.call(null,inst_28634);
var inst_28634__$1 = inst_28644;
var state_28657__$1 = (function (){var statearr_28673 = state_28657;
(statearr_28673[(7)] = inst_28634__$1);

return statearr_28673;
})();
var statearr_28674_28699 = state_28657__$1;
(statearr_28674_28699[(2)] = null);

(statearr_28674_28699[(1)] = (2));


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
});})(c__19398__auto__))
;
return ((function (switch__19333__auto__,c__19398__auto__){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_28678 = [null,null,null,null,null,null,null,null];
(statearr_28678[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_28678[(1)] = (1));

return statearr_28678;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_28657){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_28657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e28679){if((e28679 instanceof Object)){
var ex__19337__auto__ = e28679;
var statearr_28680_28700 = state_28657;
(statearr_28680_28700[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28679;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28701 = state_28657;
state_28657 = G__28701;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_28657){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_28657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__))
})();
var state__19400__auto__ = (function (){var statearr_28681 = f__19399__auto__.call(null);
(statearr_28681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_28681;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__))
);

return c__19398__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16973__auto__ = (((_ == null))?null:_);
var m__16974__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,_);
} else {
var m__16974__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28923 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28923 = (function (mult,ch,cs,meta28924){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28924 = meta28924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28925,meta28924__$1){
var self__ = this;
var _28925__$1 = this;
return (new cljs.core.async.t_cljs$core$async28923(self__.mult,self__.ch,self__.cs,meta28924__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28925){
var self__ = this;
var _28925__$1 = this;
return self__.meta28924;
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28924","meta28924",-675872232,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28923.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28923.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28923";

cljs.core.async.t_cljs$core$async28923.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async28923");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28923 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28923(mult__$1,ch__$1,cs__$1,meta28924){
return (new cljs.core.async.t_cljs$core$async28923(mult__$1,ch__$1,cs__$1,meta28924));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28923(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19398__auto___29144 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___29144,cs,m,dchan,dctr,done){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___29144,cs,m,dchan,dctr,done){
return (function (state_29056){
var state_val_29057 = (state_29056[(1)]);
if((state_val_29057 === (7))){
var inst_29052 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29058_29145 = state_29056__$1;
(statearr_29058_29145[(2)] = inst_29052);

(statearr_29058_29145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (20))){
var inst_28957 = (state_29056[(7)]);
var inst_28967 = cljs.core.first.call(null,inst_28957);
var inst_28968 = cljs.core.nth.call(null,inst_28967,(0),null);
var inst_28969 = cljs.core.nth.call(null,inst_28967,(1),null);
var state_29056__$1 = (function (){var statearr_29059 = state_29056;
(statearr_29059[(8)] = inst_28968);

return statearr_29059;
})();
if(cljs.core.truth_(inst_28969)){
var statearr_29060_29146 = state_29056__$1;
(statearr_29060_29146[(1)] = (22));

} else {
var statearr_29061_29147 = state_29056__$1;
(statearr_29061_29147[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (27))){
var inst_28997 = (state_29056[(9)]);
var inst_29004 = (state_29056[(10)]);
var inst_28928 = (state_29056[(11)]);
var inst_28999 = (state_29056[(12)]);
var inst_29004__$1 = cljs.core._nth.call(null,inst_28997,inst_28999);
var inst_29005 = cljs.core.async.put_BANG_.call(null,inst_29004__$1,inst_28928,done);
var state_29056__$1 = (function (){var statearr_29062 = state_29056;
(statearr_29062[(10)] = inst_29004__$1);

return statearr_29062;
})();
if(cljs.core.truth_(inst_29005)){
var statearr_29063_29148 = state_29056__$1;
(statearr_29063_29148[(1)] = (30));

} else {
var statearr_29064_29149 = state_29056__$1;
(statearr_29064_29149[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (1))){
var state_29056__$1 = state_29056;
var statearr_29065_29150 = state_29056__$1;
(statearr_29065_29150[(2)] = null);

(statearr_29065_29150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (24))){
var inst_28957 = (state_29056[(7)]);
var inst_28974 = (state_29056[(2)]);
var inst_28975 = cljs.core.next.call(null,inst_28957);
var inst_28937 = inst_28975;
var inst_28938 = null;
var inst_28939 = (0);
var inst_28940 = (0);
var state_29056__$1 = (function (){var statearr_29066 = state_29056;
(statearr_29066[(13)] = inst_28940);

(statearr_29066[(14)] = inst_28938);

(statearr_29066[(15)] = inst_28974);

(statearr_29066[(16)] = inst_28939);

(statearr_29066[(17)] = inst_28937);

return statearr_29066;
})();
var statearr_29067_29151 = state_29056__$1;
(statearr_29067_29151[(2)] = null);

(statearr_29067_29151[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (39))){
var state_29056__$1 = state_29056;
var statearr_29071_29152 = state_29056__$1;
(statearr_29071_29152[(2)] = null);

(statearr_29071_29152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (4))){
var inst_28928 = (state_29056[(11)]);
var inst_28928__$1 = (state_29056[(2)]);
var inst_28929 = (inst_28928__$1 == null);
var state_29056__$1 = (function (){var statearr_29072 = state_29056;
(statearr_29072[(11)] = inst_28928__$1);

return statearr_29072;
})();
if(cljs.core.truth_(inst_28929)){
var statearr_29073_29153 = state_29056__$1;
(statearr_29073_29153[(1)] = (5));

} else {
var statearr_29074_29154 = state_29056__$1;
(statearr_29074_29154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (15))){
var inst_28940 = (state_29056[(13)]);
var inst_28938 = (state_29056[(14)]);
var inst_28939 = (state_29056[(16)]);
var inst_28937 = (state_29056[(17)]);
var inst_28953 = (state_29056[(2)]);
var inst_28954 = (inst_28940 + (1));
var tmp29068 = inst_28938;
var tmp29069 = inst_28939;
var tmp29070 = inst_28937;
var inst_28937__$1 = tmp29070;
var inst_28938__$1 = tmp29068;
var inst_28939__$1 = tmp29069;
var inst_28940__$1 = inst_28954;
var state_29056__$1 = (function (){var statearr_29075 = state_29056;
(statearr_29075[(13)] = inst_28940__$1);

(statearr_29075[(14)] = inst_28938__$1);

(statearr_29075[(16)] = inst_28939__$1);

(statearr_29075[(17)] = inst_28937__$1);

(statearr_29075[(18)] = inst_28953);

return statearr_29075;
})();
var statearr_29076_29155 = state_29056__$1;
(statearr_29076_29155[(2)] = null);

(statearr_29076_29155[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (21))){
var inst_28978 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29080_29156 = state_29056__$1;
(statearr_29080_29156[(2)] = inst_28978);

(statearr_29080_29156[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (31))){
var inst_29004 = (state_29056[(10)]);
var inst_29008 = done.call(null,null);
var inst_29009 = cljs.core.async.untap_STAR_.call(null,m,inst_29004);
var state_29056__$1 = (function (){var statearr_29081 = state_29056;
(statearr_29081[(19)] = inst_29008);

return statearr_29081;
})();
var statearr_29082_29157 = state_29056__$1;
(statearr_29082_29157[(2)] = inst_29009);

(statearr_29082_29157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (32))){
var inst_28996 = (state_29056[(20)]);
var inst_28997 = (state_29056[(9)]);
var inst_28998 = (state_29056[(21)]);
var inst_28999 = (state_29056[(12)]);
var inst_29011 = (state_29056[(2)]);
var inst_29012 = (inst_28999 + (1));
var tmp29077 = inst_28996;
var tmp29078 = inst_28997;
var tmp29079 = inst_28998;
var inst_28996__$1 = tmp29077;
var inst_28997__$1 = tmp29078;
var inst_28998__$1 = tmp29079;
var inst_28999__$1 = inst_29012;
var state_29056__$1 = (function (){var statearr_29083 = state_29056;
(statearr_29083[(20)] = inst_28996__$1);

(statearr_29083[(9)] = inst_28997__$1);

(statearr_29083[(22)] = inst_29011);

(statearr_29083[(21)] = inst_28998__$1);

(statearr_29083[(12)] = inst_28999__$1);

return statearr_29083;
})();
var statearr_29084_29158 = state_29056__$1;
(statearr_29084_29158[(2)] = null);

(statearr_29084_29158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (40))){
var inst_29024 = (state_29056[(23)]);
var inst_29028 = done.call(null,null);
var inst_29029 = cljs.core.async.untap_STAR_.call(null,m,inst_29024);
var state_29056__$1 = (function (){var statearr_29085 = state_29056;
(statearr_29085[(24)] = inst_29028);

return statearr_29085;
})();
var statearr_29086_29159 = state_29056__$1;
(statearr_29086_29159[(2)] = inst_29029);

(statearr_29086_29159[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (33))){
var inst_29015 = (state_29056[(25)]);
var inst_29017 = cljs.core.chunked_seq_QMARK_.call(null,inst_29015);
var state_29056__$1 = state_29056;
if(inst_29017){
var statearr_29087_29160 = state_29056__$1;
(statearr_29087_29160[(1)] = (36));

} else {
var statearr_29088_29161 = state_29056__$1;
(statearr_29088_29161[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (13))){
var inst_28947 = (state_29056[(26)]);
var inst_28950 = cljs.core.async.close_BANG_.call(null,inst_28947);
var state_29056__$1 = state_29056;
var statearr_29089_29162 = state_29056__$1;
(statearr_29089_29162[(2)] = inst_28950);

(statearr_29089_29162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (22))){
var inst_28968 = (state_29056[(8)]);
var inst_28971 = cljs.core.async.close_BANG_.call(null,inst_28968);
var state_29056__$1 = state_29056;
var statearr_29090_29163 = state_29056__$1;
(statearr_29090_29163[(2)] = inst_28971);

(statearr_29090_29163[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (36))){
var inst_29015 = (state_29056[(25)]);
var inst_29019 = cljs.core.chunk_first.call(null,inst_29015);
var inst_29020 = cljs.core.chunk_rest.call(null,inst_29015);
var inst_29021 = cljs.core.count.call(null,inst_29019);
var inst_28996 = inst_29020;
var inst_28997 = inst_29019;
var inst_28998 = inst_29021;
var inst_28999 = (0);
var state_29056__$1 = (function (){var statearr_29091 = state_29056;
(statearr_29091[(20)] = inst_28996);

(statearr_29091[(9)] = inst_28997);

(statearr_29091[(21)] = inst_28998);

(statearr_29091[(12)] = inst_28999);

return statearr_29091;
})();
var statearr_29092_29164 = state_29056__$1;
(statearr_29092_29164[(2)] = null);

(statearr_29092_29164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (41))){
var inst_29015 = (state_29056[(25)]);
var inst_29031 = (state_29056[(2)]);
var inst_29032 = cljs.core.next.call(null,inst_29015);
var inst_28996 = inst_29032;
var inst_28997 = null;
var inst_28998 = (0);
var inst_28999 = (0);
var state_29056__$1 = (function (){var statearr_29093 = state_29056;
(statearr_29093[(20)] = inst_28996);

(statearr_29093[(27)] = inst_29031);

(statearr_29093[(9)] = inst_28997);

(statearr_29093[(21)] = inst_28998);

(statearr_29093[(12)] = inst_28999);

return statearr_29093;
})();
var statearr_29094_29165 = state_29056__$1;
(statearr_29094_29165[(2)] = null);

(statearr_29094_29165[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (43))){
var state_29056__$1 = state_29056;
var statearr_29095_29166 = state_29056__$1;
(statearr_29095_29166[(2)] = null);

(statearr_29095_29166[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (29))){
var inst_29040 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29096_29167 = state_29056__$1;
(statearr_29096_29167[(2)] = inst_29040);

(statearr_29096_29167[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (44))){
var inst_29049 = (state_29056[(2)]);
var state_29056__$1 = (function (){var statearr_29097 = state_29056;
(statearr_29097[(28)] = inst_29049);

return statearr_29097;
})();
var statearr_29098_29168 = state_29056__$1;
(statearr_29098_29168[(2)] = null);

(statearr_29098_29168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (6))){
var inst_28988 = (state_29056[(29)]);
var inst_28987 = cljs.core.deref.call(null,cs);
var inst_28988__$1 = cljs.core.keys.call(null,inst_28987);
var inst_28989 = cljs.core.count.call(null,inst_28988__$1);
var inst_28990 = cljs.core.reset_BANG_.call(null,dctr,inst_28989);
var inst_28995 = cljs.core.seq.call(null,inst_28988__$1);
var inst_28996 = inst_28995;
var inst_28997 = null;
var inst_28998 = (0);
var inst_28999 = (0);
var state_29056__$1 = (function (){var statearr_29099 = state_29056;
(statearr_29099[(20)] = inst_28996);

(statearr_29099[(29)] = inst_28988__$1);

(statearr_29099[(9)] = inst_28997);

(statearr_29099[(21)] = inst_28998);

(statearr_29099[(30)] = inst_28990);

(statearr_29099[(12)] = inst_28999);

return statearr_29099;
})();
var statearr_29100_29169 = state_29056__$1;
(statearr_29100_29169[(2)] = null);

(statearr_29100_29169[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (28))){
var inst_28996 = (state_29056[(20)]);
var inst_29015 = (state_29056[(25)]);
var inst_29015__$1 = cljs.core.seq.call(null,inst_28996);
var state_29056__$1 = (function (){var statearr_29101 = state_29056;
(statearr_29101[(25)] = inst_29015__$1);

return statearr_29101;
})();
if(inst_29015__$1){
var statearr_29102_29170 = state_29056__$1;
(statearr_29102_29170[(1)] = (33));

} else {
var statearr_29103_29171 = state_29056__$1;
(statearr_29103_29171[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (25))){
var inst_28998 = (state_29056[(21)]);
var inst_28999 = (state_29056[(12)]);
var inst_29001 = (inst_28999 < inst_28998);
var inst_29002 = inst_29001;
var state_29056__$1 = state_29056;
if(cljs.core.truth_(inst_29002)){
var statearr_29104_29172 = state_29056__$1;
(statearr_29104_29172[(1)] = (27));

} else {
var statearr_29105_29173 = state_29056__$1;
(statearr_29105_29173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (34))){
var state_29056__$1 = state_29056;
var statearr_29106_29174 = state_29056__$1;
(statearr_29106_29174[(2)] = null);

(statearr_29106_29174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (17))){
var state_29056__$1 = state_29056;
var statearr_29107_29175 = state_29056__$1;
(statearr_29107_29175[(2)] = null);

(statearr_29107_29175[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (3))){
var inst_29054 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29056__$1,inst_29054);
} else {
if((state_val_29057 === (12))){
var inst_28983 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29108_29176 = state_29056__$1;
(statearr_29108_29176[(2)] = inst_28983);

(statearr_29108_29176[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (2))){
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29056__$1,(4),ch);
} else {
if((state_val_29057 === (23))){
var state_29056__$1 = state_29056;
var statearr_29109_29177 = state_29056__$1;
(statearr_29109_29177[(2)] = null);

(statearr_29109_29177[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (35))){
var inst_29038 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29110_29178 = state_29056__$1;
(statearr_29110_29178[(2)] = inst_29038);

(statearr_29110_29178[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (19))){
var inst_28957 = (state_29056[(7)]);
var inst_28961 = cljs.core.chunk_first.call(null,inst_28957);
var inst_28962 = cljs.core.chunk_rest.call(null,inst_28957);
var inst_28963 = cljs.core.count.call(null,inst_28961);
var inst_28937 = inst_28962;
var inst_28938 = inst_28961;
var inst_28939 = inst_28963;
var inst_28940 = (0);
var state_29056__$1 = (function (){var statearr_29111 = state_29056;
(statearr_29111[(13)] = inst_28940);

(statearr_29111[(14)] = inst_28938);

(statearr_29111[(16)] = inst_28939);

(statearr_29111[(17)] = inst_28937);

return statearr_29111;
})();
var statearr_29112_29179 = state_29056__$1;
(statearr_29112_29179[(2)] = null);

(statearr_29112_29179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (11))){
var inst_28957 = (state_29056[(7)]);
var inst_28937 = (state_29056[(17)]);
var inst_28957__$1 = cljs.core.seq.call(null,inst_28937);
var state_29056__$1 = (function (){var statearr_29113 = state_29056;
(statearr_29113[(7)] = inst_28957__$1);

return statearr_29113;
})();
if(inst_28957__$1){
var statearr_29114_29180 = state_29056__$1;
(statearr_29114_29180[(1)] = (16));

} else {
var statearr_29115_29181 = state_29056__$1;
(statearr_29115_29181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (9))){
var inst_28985 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29116_29182 = state_29056__$1;
(statearr_29116_29182[(2)] = inst_28985);

(statearr_29116_29182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (5))){
var inst_28935 = cljs.core.deref.call(null,cs);
var inst_28936 = cljs.core.seq.call(null,inst_28935);
var inst_28937 = inst_28936;
var inst_28938 = null;
var inst_28939 = (0);
var inst_28940 = (0);
var state_29056__$1 = (function (){var statearr_29117 = state_29056;
(statearr_29117[(13)] = inst_28940);

(statearr_29117[(14)] = inst_28938);

(statearr_29117[(16)] = inst_28939);

(statearr_29117[(17)] = inst_28937);

return statearr_29117;
})();
var statearr_29118_29183 = state_29056__$1;
(statearr_29118_29183[(2)] = null);

(statearr_29118_29183[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (14))){
var state_29056__$1 = state_29056;
var statearr_29119_29184 = state_29056__$1;
(statearr_29119_29184[(2)] = null);

(statearr_29119_29184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (45))){
var inst_29046 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29120_29185 = state_29056__$1;
(statearr_29120_29185[(2)] = inst_29046);

(statearr_29120_29185[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (26))){
var inst_28988 = (state_29056[(29)]);
var inst_29042 = (state_29056[(2)]);
var inst_29043 = cljs.core.seq.call(null,inst_28988);
var state_29056__$1 = (function (){var statearr_29121 = state_29056;
(statearr_29121[(31)] = inst_29042);

return statearr_29121;
})();
if(inst_29043){
var statearr_29122_29186 = state_29056__$1;
(statearr_29122_29186[(1)] = (42));

} else {
var statearr_29123_29187 = state_29056__$1;
(statearr_29123_29187[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (16))){
var inst_28957 = (state_29056[(7)]);
var inst_28959 = cljs.core.chunked_seq_QMARK_.call(null,inst_28957);
var state_29056__$1 = state_29056;
if(inst_28959){
var statearr_29124_29188 = state_29056__$1;
(statearr_29124_29188[(1)] = (19));

} else {
var statearr_29125_29189 = state_29056__$1;
(statearr_29125_29189[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (38))){
var inst_29035 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29126_29190 = state_29056__$1;
(statearr_29126_29190[(2)] = inst_29035);

(statearr_29126_29190[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (30))){
var state_29056__$1 = state_29056;
var statearr_29127_29191 = state_29056__$1;
(statearr_29127_29191[(2)] = null);

(statearr_29127_29191[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (10))){
var inst_28940 = (state_29056[(13)]);
var inst_28938 = (state_29056[(14)]);
var inst_28946 = cljs.core._nth.call(null,inst_28938,inst_28940);
var inst_28947 = cljs.core.nth.call(null,inst_28946,(0),null);
var inst_28948 = cljs.core.nth.call(null,inst_28946,(1),null);
var state_29056__$1 = (function (){var statearr_29128 = state_29056;
(statearr_29128[(26)] = inst_28947);

return statearr_29128;
})();
if(cljs.core.truth_(inst_28948)){
var statearr_29129_29192 = state_29056__$1;
(statearr_29129_29192[(1)] = (13));

} else {
var statearr_29130_29193 = state_29056__$1;
(statearr_29130_29193[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (18))){
var inst_28981 = (state_29056[(2)]);
var state_29056__$1 = state_29056;
var statearr_29131_29194 = state_29056__$1;
(statearr_29131_29194[(2)] = inst_28981);

(statearr_29131_29194[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (42))){
var state_29056__$1 = state_29056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29056__$1,(45),dchan);
} else {
if((state_val_29057 === (37))){
var inst_29024 = (state_29056[(23)]);
var inst_29015 = (state_29056[(25)]);
var inst_28928 = (state_29056[(11)]);
var inst_29024__$1 = cljs.core.first.call(null,inst_29015);
var inst_29025 = cljs.core.async.put_BANG_.call(null,inst_29024__$1,inst_28928,done);
var state_29056__$1 = (function (){var statearr_29132 = state_29056;
(statearr_29132[(23)] = inst_29024__$1);

return statearr_29132;
})();
if(cljs.core.truth_(inst_29025)){
var statearr_29133_29195 = state_29056__$1;
(statearr_29133_29195[(1)] = (39));

} else {
var statearr_29134_29196 = state_29056__$1;
(statearr_29134_29196[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29057 === (8))){
var inst_28940 = (state_29056[(13)]);
var inst_28939 = (state_29056[(16)]);
var inst_28942 = (inst_28940 < inst_28939);
var inst_28943 = inst_28942;
var state_29056__$1 = state_29056;
if(cljs.core.truth_(inst_28943)){
var statearr_29135_29197 = state_29056__$1;
(statearr_29135_29197[(1)] = (10));

} else {
var statearr_29136_29198 = state_29056__$1;
(statearr_29136_29198[(1)] = (11));

}

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
}
}
}
});})(c__19398__auto___29144,cs,m,dchan,dctr,done))
;
return ((function (switch__19333__auto__,c__19398__auto___29144,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19334__auto__ = null;
var cljs$core$async$mult_$_state_machine__19334__auto____0 = (function (){
var statearr_29140 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29140[(0)] = cljs$core$async$mult_$_state_machine__19334__auto__);

(statearr_29140[(1)] = (1));

return statearr_29140;
});
var cljs$core$async$mult_$_state_machine__19334__auto____1 = (function (state_29056){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_29056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e29141){if((e29141 instanceof Object)){
var ex__19337__auto__ = e29141;
var statearr_29142_29199 = state_29056;
(statearr_29142_29199[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29141;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29200 = state_29056;
state_29056 = G__29200;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19334__auto__ = function(state_29056){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19334__auto____1.call(this,state_29056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19334__auto____0;
cljs$core$async$mult_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19334__auto____1;
return cljs$core$async$mult_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___29144,cs,m,dchan,dctr,done))
})();
var state__19400__auto__ = (function (){var statearr_29143 = f__19399__auto__.call(null);
(statearr_29143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___29144);

return statearr_29143;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___29144,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29201 = [];
var len__17376__auto___29204 = arguments.length;
var i__17377__auto___29205 = (0);
while(true){
if((i__17377__auto___29205 < len__17376__auto___29204)){
args29201.push((arguments[i__17377__auto___29205]));

var G__29206 = (i__17377__auto___29205 + (1));
i__17377__auto___29205 = G__29206;
continue;
} else {
}
break;
}

var G__29203 = args29201.length;
switch (G__29203) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29201.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m);
} else {
var m__16974__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,state_map);
} else {
var m__16974__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16973__auto__ = (((m == null))?null:m);
var m__16974__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,m,mode);
} else {
var m__16974__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17383__auto__ = [];
var len__17376__auto___29218 = arguments.length;
var i__17377__auto___29219 = (0);
while(true){
if((i__17377__auto___29219 < len__17376__auto___29218)){
args__17383__auto__.push((arguments[i__17377__auto___29219]));

var G__29220 = (i__17377__auto___29219 + (1));
i__17377__auto___29219 = G__29220;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((3) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17384__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29212){
var map__29213 = p__29212;
var map__29213__$1 = ((((!((map__29213 == null)))?((((map__29213.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29213.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29213):map__29213);
var opts = map__29213__$1;
var statearr_29215_29221 = state;
(statearr_29215_29221[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29213,map__29213__$1,opts){
return (function (val){
var statearr_29216_29222 = state;
(statearr_29216_29222[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29213,map__29213__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29217_29223 = state;
(statearr_29217_29223[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29208){
var G__29209 = cljs.core.first.call(null,seq29208);
var seq29208__$1 = cljs.core.next.call(null,seq29208);
var G__29210 = cljs.core.first.call(null,seq29208__$1);
var seq29208__$2 = cljs.core.next.call(null,seq29208__$1);
var G__29211 = cljs.core.first.call(null,seq29208__$2);
var seq29208__$3 = cljs.core.next.call(null,seq29208__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29209,G__29210,G__29211,seq29208__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29387 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29388){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29388 = meta29388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29389,meta29388__$1){
var self__ = this;
var _29389__$1 = this;
return (new cljs.core.async.t_cljs$core$async29387(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29388__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29389){
var self__ = this;
var _29389__$1 = this;
return self__.meta29388;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29388","meta29388",-761031657,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29387";

cljs.core.async.t_cljs$core$async29387.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async29387");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29387 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29387(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29388){
return (new cljs.core.async.t_cljs$core$async29387(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29388));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29387(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19398__auto___29550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___29550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___29550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29487){
var state_val_29488 = (state_29487[(1)]);
if((state_val_29488 === (7))){
var inst_29405 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29489_29551 = state_29487__$1;
(statearr_29489_29551[(2)] = inst_29405);

(statearr_29489_29551[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (20))){
var inst_29417 = (state_29487[(7)]);
var state_29487__$1 = state_29487;
var statearr_29490_29552 = state_29487__$1;
(statearr_29490_29552[(2)] = inst_29417);

(statearr_29490_29552[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (27))){
var state_29487__$1 = state_29487;
var statearr_29491_29553 = state_29487__$1;
(statearr_29491_29553[(2)] = null);

(statearr_29491_29553[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (1))){
var inst_29393 = (state_29487[(8)]);
var inst_29393__$1 = calc_state.call(null);
var inst_29395 = (inst_29393__$1 == null);
var inst_29396 = cljs.core.not.call(null,inst_29395);
var state_29487__$1 = (function (){var statearr_29492 = state_29487;
(statearr_29492[(8)] = inst_29393__$1);

return statearr_29492;
})();
if(inst_29396){
var statearr_29493_29554 = state_29487__$1;
(statearr_29493_29554[(1)] = (2));

} else {
var statearr_29494_29555 = state_29487__$1;
(statearr_29494_29555[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (24))){
var inst_29461 = (state_29487[(9)]);
var inst_29447 = (state_29487[(10)]);
var inst_29440 = (state_29487[(11)]);
var inst_29461__$1 = inst_29440.call(null,inst_29447);
var state_29487__$1 = (function (){var statearr_29495 = state_29487;
(statearr_29495[(9)] = inst_29461__$1);

return statearr_29495;
})();
if(cljs.core.truth_(inst_29461__$1)){
var statearr_29496_29556 = state_29487__$1;
(statearr_29496_29556[(1)] = (29));

} else {
var statearr_29497_29557 = state_29487__$1;
(statearr_29497_29557[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (4))){
var inst_29408 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29408)){
var statearr_29498_29558 = state_29487__$1;
(statearr_29498_29558[(1)] = (8));

} else {
var statearr_29499_29559 = state_29487__$1;
(statearr_29499_29559[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (15))){
var inst_29434 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29434)){
var statearr_29500_29560 = state_29487__$1;
(statearr_29500_29560[(1)] = (19));

} else {
var statearr_29501_29561 = state_29487__$1;
(statearr_29501_29561[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (21))){
var inst_29439 = (state_29487[(12)]);
var inst_29439__$1 = (state_29487[(2)]);
var inst_29440 = cljs.core.get.call(null,inst_29439__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29441 = cljs.core.get.call(null,inst_29439__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29442 = cljs.core.get.call(null,inst_29439__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29487__$1 = (function (){var statearr_29502 = state_29487;
(statearr_29502[(13)] = inst_29441);

(statearr_29502[(12)] = inst_29439__$1);

(statearr_29502[(11)] = inst_29440);

return statearr_29502;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29487__$1,(22),inst_29442);
} else {
if((state_val_29488 === (31))){
var inst_29469 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29469)){
var statearr_29503_29562 = state_29487__$1;
(statearr_29503_29562[(1)] = (32));

} else {
var statearr_29504_29563 = state_29487__$1;
(statearr_29504_29563[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (32))){
var inst_29446 = (state_29487[(14)]);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29487__$1,(35),out,inst_29446);
} else {
if((state_val_29488 === (33))){
var inst_29439 = (state_29487[(12)]);
var inst_29417 = inst_29439;
var state_29487__$1 = (function (){var statearr_29505 = state_29487;
(statearr_29505[(7)] = inst_29417);

return statearr_29505;
})();
var statearr_29506_29564 = state_29487__$1;
(statearr_29506_29564[(2)] = null);

(statearr_29506_29564[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (13))){
var inst_29417 = (state_29487[(7)]);
var inst_29424 = inst_29417.cljs$lang$protocol_mask$partition0$;
var inst_29425 = (inst_29424 & (64));
var inst_29426 = inst_29417.cljs$core$ISeq$;
var inst_29427 = (inst_29425) || (inst_29426);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29427)){
var statearr_29507_29565 = state_29487__$1;
(statearr_29507_29565[(1)] = (16));

} else {
var statearr_29508_29566 = state_29487__$1;
(statearr_29508_29566[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (22))){
var inst_29446 = (state_29487[(14)]);
var inst_29447 = (state_29487[(10)]);
var inst_29445 = (state_29487[(2)]);
var inst_29446__$1 = cljs.core.nth.call(null,inst_29445,(0),null);
var inst_29447__$1 = cljs.core.nth.call(null,inst_29445,(1),null);
var inst_29448 = (inst_29446__$1 == null);
var inst_29449 = cljs.core._EQ_.call(null,inst_29447__$1,change);
var inst_29450 = (inst_29448) || (inst_29449);
var state_29487__$1 = (function (){var statearr_29509 = state_29487;
(statearr_29509[(14)] = inst_29446__$1);

(statearr_29509[(10)] = inst_29447__$1);

return statearr_29509;
})();
if(cljs.core.truth_(inst_29450)){
var statearr_29510_29567 = state_29487__$1;
(statearr_29510_29567[(1)] = (23));

} else {
var statearr_29511_29568 = state_29487__$1;
(statearr_29511_29568[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (36))){
var inst_29439 = (state_29487[(12)]);
var inst_29417 = inst_29439;
var state_29487__$1 = (function (){var statearr_29512 = state_29487;
(statearr_29512[(7)] = inst_29417);

return statearr_29512;
})();
var statearr_29513_29569 = state_29487__$1;
(statearr_29513_29569[(2)] = null);

(statearr_29513_29569[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (29))){
var inst_29461 = (state_29487[(9)]);
var state_29487__$1 = state_29487;
var statearr_29514_29570 = state_29487__$1;
(statearr_29514_29570[(2)] = inst_29461);

(statearr_29514_29570[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (6))){
var state_29487__$1 = state_29487;
var statearr_29515_29571 = state_29487__$1;
(statearr_29515_29571[(2)] = false);

(statearr_29515_29571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (28))){
var inst_29457 = (state_29487[(2)]);
var inst_29458 = calc_state.call(null);
var inst_29417 = inst_29458;
var state_29487__$1 = (function (){var statearr_29516 = state_29487;
(statearr_29516[(7)] = inst_29417);

(statearr_29516[(15)] = inst_29457);

return statearr_29516;
})();
var statearr_29517_29572 = state_29487__$1;
(statearr_29517_29572[(2)] = null);

(statearr_29517_29572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (25))){
var inst_29483 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29518_29573 = state_29487__$1;
(statearr_29518_29573[(2)] = inst_29483);

(statearr_29518_29573[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (34))){
var inst_29481 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29519_29574 = state_29487__$1;
(statearr_29519_29574[(2)] = inst_29481);

(statearr_29519_29574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (17))){
var state_29487__$1 = state_29487;
var statearr_29520_29575 = state_29487__$1;
(statearr_29520_29575[(2)] = false);

(statearr_29520_29575[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (3))){
var state_29487__$1 = state_29487;
var statearr_29521_29576 = state_29487__$1;
(statearr_29521_29576[(2)] = false);

(statearr_29521_29576[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (12))){
var inst_29485 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29487__$1,inst_29485);
} else {
if((state_val_29488 === (2))){
var inst_29393 = (state_29487[(8)]);
var inst_29398 = inst_29393.cljs$lang$protocol_mask$partition0$;
var inst_29399 = (inst_29398 & (64));
var inst_29400 = inst_29393.cljs$core$ISeq$;
var inst_29401 = (inst_29399) || (inst_29400);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29401)){
var statearr_29522_29577 = state_29487__$1;
(statearr_29522_29577[(1)] = (5));

} else {
var statearr_29523_29578 = state_29487__$1;
(statearr_29523_29578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (23))){
var inst_29446 = (state_29487[(14)]);
var inst_29452 = (inst_29446 == null);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29452)){
var statearr_29524_29579 = state_29487__$1;
(statearr_29524_29579[(1)] = (26));

} else {
var statearr_29525_29580 = state_29487__$1;
(statearr_29525_29580[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (35))){
var inst_29472 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
if(cljs.core.truth_(inst_29472)){
var statearr_29526_29581 = state_29487__$1;
(statearr_29526_29581[(1)] = (36));

} else {
var statearr_29527_29582 = state_29487__$1;
(statearr_29527_29582[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (19))){
var inst_29417 = (state_29487[(7)]);
var inst_29436 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29417);
var state_29487__$1 = state_29487;
var statearr_29528_29583 = state_29487__$1;
(statearr_29528_29583[(2)] = inst_29436);

(statearr_29528_29583[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (11))){
var inst_29417 = (state_29487[(7)]);
var inst_29421 = (inst_29417 == null);
var inst_29422 = cljs.core.not.call(null,inst_29421);
var state_29487__$1 = state_29487;
if(inst_29422){
var statearr_29529_29584 = state_29487__$1;
(statearr_29529_29584[(1)] = (13));

} else {
var statearr_29530_29585 = state_29487__$1;
(statearr_29530_29585[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (9))){
var inst_29393 = (state_29487[(8)]);
var state_29487__$1 = state_29487;
var statearr_29531_29586 = state_29487__$1;
(statearr_29531_29586[(2)] = inst_29393);

(statearr_29531_29586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (5))){
var state_29487__$1 = state_29487;
var statearr_29532_29587 = state_29487__$1;
(statearr_29532_29587[(2)] = true);

(statearr_29532_29587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (14))){
var state_29487__$1 = state_29487;
var statearr_29533_29588 = state_29487__$1;
(statearr_29533_29588[(2)] = false);

(statearr_29533_29588[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (26))){
var inst_29447 = (state_29487[(10)]);
var inst_29454 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29447);
var state_29487__$1 = state_29487;
var statearr_29534_29589 = state_29487__$1;
(statearr_29534_29589[(2)] = inst_29454);

(statearr_29534_29589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (16))){
var state_29487__$1 = state_29487;
var statearr_29535_29590 = state_29487__$1;
(statearr_29535_29590[(2)] = true);

(statearr_29535_29590[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (38))){
var inst_29477 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29536_29591 = state_29487__$1;
(statearr_29536_29591[(2)] = inst_29477);

(statearr_29536_29591[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (30))){
var inst_29441 = (state_29487[(13)]);
var inst_29447 = (state_29487[(10)]);
var inst_29440 = (state_29487[(11)]);
var inst_29464 = cljs.core.empty_QMARK_.call(null,inst_29440);
var inst_29465 = inst_29441.call(null,inst_29447);
var inst_29466 = cljs.core.not.call(null,inst_29465);
var inst_29467 = (inst_29464) && (inst_29466);
var state_29487__$1 = state_29487;
var statearr_29537_29592 = state_29487__$1;
(statearr_29537_29592[(2)] = inst_29467);

(statearr_29537_29592[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (10))){
var inst_29393 = (state_29487[(8)]);
var inst_29413 = (state_29487[(2)]);
var inst_29414 = cljs.core.get.call(null,inst_29413,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29415 = cljs.core.get.call(null,inst_29413,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29416 = cljs.core.get.call(null,inst_29413,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29417 = inst_29393;
var state_29487__$1 = (function (){var statearr_29538 = state_29487;
(statearr_29538[(7)] = inst_29417);

(statearr_29538[(16)] = inst_29414);

(statearr_29538[(17)] = inst_29416);

(statearr_29538[(18)] = inst_29415);

return statearr_29538;
})();
var statearr_29539_29593 = state_29487__$1;
(statearr_29539_29593[(2)] = null);

(statearr_29539_29593[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (18))){
var inst_29431 = (state_29487[(2)]);
var state_29487__$1 = state_29487;
var statearr_29540_29594 = state_29487__$1;
(statearr_29540_29594[(2)] = inst_29431);

(statearr_29540_29594[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (37))){
var state_29487__$1 = state_29487;
var statearr_29541_29595 = state_29487__$1;
(statearr_29541_29595[(2)] = null);

(statearr_29541_29595[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29488 === (8))){
var inst_29393 = (state_29487[(8)]);
var inst_29410 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29393);
var state_29487__$1 = state_29487;
var statearr_29542_29596 = state_29487__$1;
(statearr_29542_29596[(2)] = inst_29410);

(statearr_29542_29596[(1)] = (10));


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
});})(c__19398__auto___29550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19333__auto__,c__19398__auto___29550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19334__auto__ = null;
var cljs$core$async$mix_$_state_machine__19334__auto____0 = (function (){
var statearr_29546 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29546[(0)] = cljs$core$async$mix_$_state_machine__19334__auto__);

(statearr_29546[(1)] = (1));

return statearr_29546;
});
var cljs$core$async$mix_$_state_machine__19334__auto____1 = (function (state_29487){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_29487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e29547){if((e29547 instanceof Object)){
var ex__19337__auto__ = e29547;
var statearr_29548_29597 = state_29487;
(statearr_29548_29597[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29598 = state_29487;
state_29487 = G__29598;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19334__auto__ = function(state_29487){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19334__auto____1.call(this,state_29487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19334__auto____0;
cljs$core$async$mix_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19334__auto____1;
return cljs$core$async$mix_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___29550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19400__auto__ = (function (){var statearr_29549 = f__19399__auto__.call(null);
(statearr_29549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___29550);

return statearr_29549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___29550,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16974__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v,ch);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29599 = [];
var len__17376__auto___29602 = arguments.length;
var i__17377__auto___29603 = (0);
while(true){
if((i__17377__auto___29603 < len__17376__auto___29602)){
args29599.push((arguments[i__17377__auto___29603]));

var G__29604 = (i__17377__auto___29603 + (1));
i__17377__auto___29603 = G__29604;
continue;
} else {
}
break;
}

var G__29601 = args29599.length;
switch (G__29601) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29599.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16973__auto__ = (((p == null))?null:p);
var m__16974__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16973__auto__)]);
if(!((m__16974__auto__ == null))){
return m__16974__auto__.call(null,p,v);
} else {
var m__16974__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16974__auto____$1 == null))){
return m__16974__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29607 = [];
var len__17376__auto___29732 = arguments.length;
var i__17377__auto___29733 = (0);
while(true){
if((i__17377__auto___29733 < len__17376__auto___29732)){
args29607.push((arguments[i__17377__auto___29733]));

var G__29734 = (i__17377__auto___29733 + (1));
i__17377__auto___29733 = G__29734;
continue;
} else {
}
break;
}

var G__29609 = args29607.length;
switch (G__29609) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29607.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16318__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16318__auto__,mults){
return (function (p1__29606_SHARP_){
if(cljs.core.truth_(p1__29606_SHARP_.call(null,topic))){
return p1__29606_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29606_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16318__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29610 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29610 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29611){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29611 = meta29611;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29612,meta29611__$1){
var self__ = this;
var _29612__$1 = this;
return (new cljs.core.async.t_cljs$core$async29610(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29611__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29612){
var self__ = this;
var _29612__$1 = this;
return self__.meta29611;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29611","meta29611",-1011419145,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29610.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29610.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29610";

cljs.core.async.t_cljs$core$async29610.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async29610");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29610 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29610(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29611){
return (new cljs.core.async.t_cljs$core$async29610(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29611));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29610(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19398__auto___29736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___29736,mults,ensure_mult,p){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___29736,mults,ensure_mult,p){
return (function (state_29684){
var state_val_29685 = (state_29684[(1)]);
if((state_val_29685 === (7))){
var inst_29680 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
var statearr_29686_29737 = state_29684__$1;
(statearr_29686_29737[(2)] = inst_29680);

(statearr_29686_29737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (20))){
var state_29684__$1 = state_29684;
var statearr_29687_29738 = state_29684__$1;
(statearr_29687_29738[(2)] = null);

(statearr_29687_29738[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (1))){
var state_29684__$1 = state_29684;
var statearr_29688_29739 = state_29684__$1;
(statearr_29688_29739[(2)] = null);

(statearr_29688_29739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (24))){
var inst_29663 = (state_29684[(7)]);
var inst_29672 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29663);
var state_29684__$1 = state_29684;
var statearr_29689_29740 = state_29684__$1;
(statearr_29689_29740[(2)] = inst_29672);

(statearr_29689_29740[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (4))){
var inst_29615 = (state_29684[(8)]);
var inst_29615__$1 = (state_29684[(2)]);
var inst_29616 = (inst_29615__$1 == null);
var state_29684__$1 = (function (){var statearr_29690 = state_29684;
(statearr_29690[(8)] = inst_29615__$1);

return statearr_29690;
})();
if(cljs.core.truth_(inst_29616)){
var statearr_29691_29741 = state_29684__$1;
(statearr_29691_29741[(1)] = (5));

} else {
var statearr_29692_29742 = state_29684__$1;
(statearr_29692_29742[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (15))){
var inst_29657 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
var statearr_29693_29743 = state_29684__$1;
(statearr_29693_29743[(2)] = inst_29657);

(statearr_29693_29743[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (21))){
var inst_29677 = (state_29684[(2)]);
var state_29684__$1 = (function (){var statearr_29694 = state_29684;
(statearr_29694[(9)] = inst_29677);

return statearr_29694;
})();
var statearr_29695_29744 = state_29684__$1;
(statearr_29695_29744[(2)] = null);

(statearr_29695_29744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (13))){
var inst_29639 = (state_29684[(10)]);
var inst_29641 = cljs.core.chunked_seq_QMARK_.call(null,inst_29639);
var state_29684__$1 = state_29684;
if(inst_29641){
var statearr_29696_29745 = state_29684__$1;
(statearr_29696_29745[(1)] = (16));

} else {
var statearr_29697_29746 = state_29684__$1;
(statearr_29697_29746[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (22))){
var inst_29669 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
if(cljs.core.truth_(inst_29669)){
var statearr_29698_29747 = state_29684__$1;
(statearr_29698_29747[(1)] = (23));

} else {
var statearr_29699_29748 = state_29684__$1;
(statearr_29699_29748[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (6))){
var inst_29615 = (state_29684[(8)]);
var inst_29663 = (state_29684[(7)]);
var inst_29665 = (state_29684[(11)]);
var inst_29663__$1 = topic_fn.call(null,inst_29615);
var inst_29664 = cljs.core.deref.call(null,mults);
var inst_29665__$1 = cljs.core.get.call(null,inst_29664,inst_29663__$1);
var state_29684__$1 = (function (){var statearr_29700 = state_29684;
(statearr_29700[(7)] = inst_29663__$1);

(statearr_29700[(11)] = inst_29665__$1);

return statearr_29700;
})();
if(cljs.core.truth_(inst_29665__$1)){
var statearr_29701_29749 = state_29684__$1;
(statearr_29701_29749[(1)] = (19));

} else {
var statearr_29702_29750 = state_29684__$1;
(statearr_29702_29750[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (25))){
var inst_29674 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
var statearr_29703_29751 = state_29684__$1;
(statearr_29703_29751[(2)] = inst_29674);

(statearr_29703_29751[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (17))){
var inst_29639 = (state_29684[(10)]);
var inst_29648 = cljs.core.first.call(null,inst_29639);
var inst_29649 = cljs.core.async.muxch_STAR_.call(null,inst_29648);
var inst_29650 = cljs.core.async.close_BANG_.call(null,inst_29649);
var inst_29651 = cljs.core.next.call(null,inst_29639);
var inst_29625 = inst_29651;
var inst_29626 = null;
var inst_29627 = (0);
var inst_29628 = (0);
var state_29684__$1 = (function (){var statearr_29704 = state_29684;
(statearr_29704[(12)] = inst_29650);

(statearr_29704[(13)] = inst_29627);

(statearr_29704[(14)] = inst_29628);

(statearr_29704[(15)] = inst_29625);

(statearr_29704[(16)] = inst_29626);

return statearr_29704;
})();
var statearr_29705_29752 = state_29684__$1;
(statearr_29705_29752[(2)] = null);

(statearr_29705_29752[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (3))){
var inst_29682 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29684__$1,inst_29682);
} else {
if((state_val_29685 === (12))){
var inst_29659 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
var statearr_29706_29753 = state_29684__$1;
(statearr_29706_29753[(2)] = inst_29659);

(statearr_29706_29753[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (2))){
var state_29684__$1 = state_29684;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29684__$1,(4),ch);
} else {
if((state_val_29685 === (23))){
var state_29684__$1 = state_29684;
var statearr_29707_29754 = state_29684__$1;
(statearr_29707_29754[(2)] = null);

(statearr_29707_29754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (19))){
var inst_29615 = (state_29684[(8)]);
var inst_29665 = (state_29684[(11)]);
var inst_29667 = cljs.core.async.muxch_STAR_.call(null,inst_29665);
var state_29684__$1 = state_29684;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29684__$1,(22),inst_29667,inst_29615);
} else {
if((state_val_29685 === (11))){
var inst_29639 = (state_29684[(10)]);
var inst_29625 = (state_29684[(15)]);
var inst_29639__$1 = cljs.core.seq.call(null,inst_29625);
var state_29684__$1 = (function (){var statearr_29708 = state_29684;
(statearr_29708[(10)] = inst_29639__$1);

return statearr_29708;
})();
if(inst_29639__$1){
var statearr_29709_29755 = state_29684__$1;
(statearr_29709_29755[(1)] = (13));

} else {
var statearr_29710_29756 = state_29684__$1;
(statearr_29710_29756[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (9))){
var inst_29661 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
var statearr_29711_29757 = state_29684__$1;
(statearr_29711_29757[(2)] = inst_29661);

(statearr_29711_29757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (5))){
var inst_29622 = cljs.core.deref.call(null,mults);
var inst_29623 = cljs.core.vals.call(null,inst_29622);
var inst_29624 = cljs.core.seq.call(null,inst_29623);
var inst_29625 = inst_29624;
var inst_29626 = null;
var inst_29627 = (0);
var inst_29628 = (0);
var state_29684__$1 = (function (){var statearr_29712 = state_29684;
(statearr_29712[(13)] = inst_29627);

(statearr_29712[(14)] = inst_29628);

(statearr_29712[(15)] = inst_29625);

(statearr_29712[(16)] = inst_29626);

return statearr_29712;
})();
var statearr_29713_29758 = state_29684__$1;
(statearr_29713_29758[(2)] = null);

(statearr_29713_29758[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (14))){
var state_29684__$1 = state_29684;
var statearr_29717_29759 = state_29684__$1;
(statearr_29717_29759[(2)] = null);

(statearr_29717_29759[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (16))){
var inst_29639 = (state_29684[(10)]);
var inst_29643 = cljs.core.chunk_first.call(null,inst_29639);
var inst_29644 = cljs.core.chunk_rest.call(null,inst_29639);
var inst_29645 = cljs.core.count.call(null,inst_29643);
var inst_29625 = inst_29644;
var inst_29626 = inst_29643;
var inst_29627 = inst_29645;
var inst_29628 = (0);
var state_29684__$1 = (function (){var statearr_29718 = state_29684;
(statearr_29718[(13)] = inst_29627);

(statearr_29718[(14)] = inst_29628);

(statearr_29718[(15)] = inst_29625);

(statearr_29718[(16)] = inst_29626);

return statearr_29718;
})();
var statearr_29719_29760 = state_29684__$1;
(statearr_29719_29760[(2)] = null);

(statearr_29719_29760[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (10))){
var inst_29627 = (state_29684[(13)]);
var inst_29628 = (state_29684[(14)]);
var inst_29625 = (state_29684[(15)]);
var inst_29626 = (state_29684[(16)]);
var inst_29633 = cljs.core._nth.call(null,inst_29626,inst_29628);
var inst_29634 = cljs.core.async.muxch_STAR_.call(null,inst_29633);
var inst_29635 = cljs.core.async.close_BANG_.call(null,inst_29634);
var inst_29636 = (inst_29628 + (1));
var tmp29714 = inst_29627;
var tmp29715 = inst_29625;
var tmp29716 = inst_29626;
var inst_29625__$1 = tmp29715;
var inst_29626__$1 = tmp29716;
var inst_29627__$1 = tmp29714;
var inst_29628__$1 = inst_29636;
var state_29684__$1 = (function (){var statearr_29720 = state_29684;
(statearr_29720[(17)] = inst_29635);

(statearr_29720[(13)] = inst_29627__$1);

(statearr_29720[(14)] = inst_29628__$1);

(statearr_29720[(15)] = inst_29625__$1);

(statearr_29720[(16)] = inst_29626__$1);

return statearr_29720;
})();
var statearr_29721_29761 = state_29684__$1;
(statearr_29721_29761[(2)] = null);

(statearr_29721_29761[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (18))){
var inst_29654 = (state_29684[(2)]);
var state_29684__$1 = state_29684;
var statearr_29722_29762 = state_29684__$1;
(statearr_29722_29762[(2)] = inst_29654);

(statearr_29722_29762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29685 === (8))){
var inst_29627 = (state_29684[(13)]);
var inst_29628 = (state_29684[(14)]);
var inst_29630 = (inst_29628 < inst_29627);
var inst_29631 = inst_29630;
var state_29684__$1 = state_29684;
if(cljs.core.truth_(inst_29631)){
var statearr_29723_29763 = state_29684__$1;
(statearr_29723_29763[(1)] = (10));

} else {
var statearr_29724_29764 = state_29684__$1;
(statearr_29724_29764[(1)] = (11));

}

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
});})(c__19398__auto___29736,mults,ensure_mult,p))
;
return ((function (switch__19333__auto__,c__19398__auto___29736,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_29728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29728[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_29728[(1)] = (1));

return statearr_29728;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_29684){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_29684);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e29729){if((e29729 instanceof Object)){
var ex__19337__auto__ = e29729;
var statearr_29730_29765 = state_29684;
(statearr_29730_29765[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29684);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29766 = state_29684;
state_29684 = G__29766;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_29684){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_29684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___29736,mults,ensure_mult,p))
})();
var state__19400__auto__ = (function (){var statearr_29731 = f__19399__auto__.call(null);
(statearr_29731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___29736);

return statearr_29731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___29736,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29767 = [];
var len__17376__auto___29770 = arguments.length;
var i__17377__auto___29771 = (0);
while(true){
if((i__17377__auto___29771 < len__17376__auto___29770)){
args29767.push((arguments[i__17377__auto___29771]));

var G__29772 = (i__17377__auto___29771 + (1));
i__17377__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var G__29769 = args29767.length;
switch (G__29769) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29767.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29774 = [];
var len__17376__auto___29777 = arguments.length;
var i__17377__auto___29778 = (0);
while(true){
if((i__17377__auto___29778 < len__17376__auto___29777)){
args29774.push((arguments[i__17377__auto___29778]));

var G__29779 = (i__17377__auto___29778 + (1));
i__17377__auto___29778 = G__29779;
continue;
} else {
}
break;
}

var G__29776 = args29774.length;
switch (G__29776) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29774.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29781 = [];
var len__17376__auto___29852 = arguments.length;
var i__17377__auto___29853 = (0);
while(true){
if((i__17377__auto___29853 < len__17376__auto___29852)){
args29781.push((arguments[i__17377__auto___29853]));

var G__29854 = (i__17377__auto___29853 + (1));
i__17377__auto___29853 = G__29854;
continue;
} else {
}
break;
}

var G__29783 = args29781.length;
switch (G__29783) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29781.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19398__auto___29856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___29856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___29856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29822){
var state_val_29823 = (state_29822[(1)]);
if((state_val_29823 === (7))){
var state_29822__$1 = state_29822;
var statearr_29824_29857 = state_29822__$1;
(statearr_29824_29857[(2)] = null);

(statearr_29824_29857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (1))){
var state_29822__$1 = state_29822;
var statearr_29825_29858 = state_29822__$1;
(statearr_29825_29858[(2)] = null);

(statearr_29825_29858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (4))){
var inst_29786 = (state_29822[(7)]);
var inst_29788 = (inst_29786 < cnt);
var state_29822__$1 = state_29822;
if(cljs.core.truth_(inst_29788)){
var statearr_29826_29859 = state_29822__$1;
(statearr_29826_29859[(1)] = (6));

} else {
var statearr_29827_29860 = state_29822__$1;
(statearr_29827_29860[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (15))){
var inst_29818 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29828_29861 = state_29822__$1;
(statearr_29828_29861[(2)] = inst_29818);

(statearr_29828_29861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (13))){
var inst_29811 = cljs.core.async.close_BANG_.call(null,out);
var state_29822__$1 = state_29822;
var statearr_29829_29862 = state_29822__$1;
(statearr_29829_29862[(2)] = inst_29811);

(statearr_29829_29862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (6))){
var state_29822__$1 = state_29822;
var statearr_29830_29863 = state_29822__$1;
(statearr_29830_29863[(2)] = null);

(statearr_29830_29863[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (3))){
var inst_29820 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29822__$1,inst_29820);
} else {
if((state_val_29823 === (12))){
var inst_29808 = (state_29822[(8)]);
var inst_29808__$1 = (state_29822[(2)]);
var inst_29809 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29808__$1);
var state_29822__$1 = (function (){var statearr_29831 = state_29822;
(statearr_29831[(8)] = inst_29808__$1);

return statearr_29831;
})();
if(cljs.core.truth_(inst_29809)){
var statearr_29832_29864 = state_29822__$1;
(statearr_29832_29864[(1)] = (13));

} else {
var statearr_29833_29865 = state_29822__$1;
(statearr_29833_29865[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (2))){
var inst_29785 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29786 = (0);
var state_29822__$1 = (function (){var statearr_29834 = state_29822;
(statearr_29834[(9)] = inst_29785);

(statearr_29834[(7)] = inst_29786);

return statearr_29834;
})();
var statearr_29835_29866 = state_29822__$1;
(statearr_29835_29866[(2)] = null);

(statearr_29835_29866[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (11))){
var inst_29786 = (state_29822[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29822,(10),Object,null,(9));
var inst_29795 = chs__$1.call(null,inst_29786);
var inst_29796 = done.call(null,inst_29786);
var inst_29797 = cljs.core.async.take_BANG_.call(null,inst_29795,inst_29796);
var state_29822__$1 = state_29822;
var statearr_29836_29867 = state_29822__$1;
(statearr_29836_29867[(2)] = inst_29797);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (9))){
var inst_29786 = (state_29822[(7)]);
var inst_29799 = (state_29822[(2)]);
var inst_29800 = (inst_29786 + (1));
var inst_29786__$1 = inst_29800;
var state_29822__$1 = (function (){var statearr_29837 = state_29822;
(statearr_29837[(10)] = inst_29799);

(statearr_29837[(7)] = inst_29786__$1);

return statearr_29837;
})();
var statearr_29838_29868 = state_29822__$1;
(statearr_29838_29868[(2)] = null);

(statearr_29838_29868[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (5))){
var inst_29806 = (state_29822[(2)]);
var state_29822__$1 = (function (){var statearr_29839 = state_29822;
(statearr_29839[(11)] = inst_29806);

return statearr_29839;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,(12),dchan);
} else {
if((state_val_29823 === (14))){
var inst_29808 = (state_29822[(8)]);
var inst_29813 = cljs.core.apply.call(null,f,inst_29808);
var state_29822__$1 = state_29822;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29822__$1,(16),out,inst_29813);
} else {
if((state_val_29823 === (16))){
var inst_29815 = (state_29822[(2)]);
var state_29822__$1 = (function (){var statearr_29840 = state_29822;
(statearr_29840[(12)] = inst_29815);

return statearr_29840;
})();
var statearr_29841_29869 = state_29822__$1;
(statearr_29841_29869[(2)] = null);

(statearr_29841_29869[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (10))){
var inst_29790 = (state_29822[(2)]);
var inst_29791 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29822__$1 = (function (){var statearr_29842 = state_29822;
(statearr_29842[(13)] = inst_29790);

return statearr_29842;
})();
var statearr_29843_29870 = state_29822__$1;
(statearr_29843_29870[(2)] = inst_29791);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29823 === (8))){
var inst_29804 = (state_29822[(2)]);
var state_29822__$1 = state_29822;
var statearr_29844_29871 = state_29822__$1;
(statearr_29844_29871[(2)] = inst_29804);

(statearr_29844_29871[(1)] = (5));


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
}
}
});})(c__19398__auto___29856,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19333__auto__,c__19398__auto___29856,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_29848 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29848[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_29848[(1)] = (1));

return statearr_29848;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_29822){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_29822);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e29849){if((e29849 instanceof Object)){
var ex__19337__auto__ = e29849;
var statearr_29850_29872 = state_29822;
(statearr_29850_29872[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29873 = state_29822;
state_29822 = G__29873;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_29822){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_29822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___29856,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19400__auto__ = (function (){var statearr_29851 = f__19399__auto__.call(null);
(statearr_29851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___29856);

return statearr_29851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___29856,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29875 = [];
var len__17376__auto___29931 = arguments.length;
var i__17377__auto___29932 = (0);
while(true){
if((i__17377__auto___29932 < len__17376__auto___29931)){
args29875.push((arguments[i__17377__auto___29932]));

var G__29933 = (i__17377__auto___29932 + (1));
i__17377__auto___29932 = G__29933;
continue;
} else {
}
break;
}

var G__29877 = args29875.length;
switch (G__29877) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29875.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19398__auto___29935 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___29935,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___29935,out){
return (function (state_29907){
var state_val_29908 = (state_29907[(1)]);
if((state_val_29908 === (7))){
var inst_29887 = (state_29907[(7)]);
var inst_29886 = (state_29907[(8)]);
var inst_29886__$1 = (state_29907[(2)]);
var inst_29887__$1 = cljs.core.nth.call(null,inst_29886__$1,(0),null);
var inst_29888 = cljs.core.nth.call(null,inst_29886__$1,(1),null);
var inst_29889 = (inst_29887__$1 == null);
var state_29907__$1 = (function (){var statearr_29909 = state_29907;
(statearr_29909[(9)] = inst_29888);

(statearr_29909[(7)] = inst_29887__$1);

(statearr_29909[(8)] = inst_29886__$1);

return statearr_29909;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29910_29936 = state_29907__$1;
(statearr_29910_29936[(1)] = (8));

} else {
var statearr_29911_29937 = state_29907__$1;
(statearr_29911_29937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (1))){
var inst_29878 = cljs.core.vec.call(null,chs);
var inst_29879 = inst_29878;
var state_29907__$1 = (function (){var statearr_29912 = state_29907;
(statearr_29912[(10)] = inst_29879);

return statearr_29912;
})();
var statearr_29913_29938 = state_29907__$1;
(statearr_29913_29938[(2)] = null);

(statearr_29913_29938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (4))){
var inst_29879 = (state_29907[(10)]);
var state_29907__$1 = state_29907;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29907__$1,(7),inst_29879);
} else {
if((state_val_29908 === (6))){
var inst_29903 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
var statearr_29914_29939 = state_29907__$1;
(statearr_29914_29939[(2)] = inst_29903);

(statearr_29914_29939[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (3))){
var inst_29905 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29907__$1,inst_29905);
} else {
if((state_val_29908 === (2))){
var inst_29879 = (state_29907[(10)]);
var inst_29881 = cljs.core.count.call(null,inst_29879);
var inst_29882 = (inst_29881 > (0));
var state_29907__$1 = state_29907;
if(cljs.core.truth_(inst_29882)){
var statearr_29916_29940 = state_29907__$1;
(statearr_29916_29940[(1)] = (4));

} else {
var statearr_29917_29941 = state_29907__$1;
(statearr_29917_29941[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (11))){
var inst_29879 = (state_29907[(10)]);
var inst_29896 = (state_29907[(2)]);
var tmp29915 = inst_29879;
var inst_29879__$1 = tmp29915;
var state_29907__$1 = (function (){var statearr_29918 = state_29907;
(statearr_29918[(11)] = inst_29896);

(statearr_29918[(10)] = inst_29879__$1);

return statearr_29918;
})();
var statearr_29919_29942 = state_29907__$1;
(statearr_29919_29942[(2)] = null);

(statearr_29919_29942[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (9))){
var inst_29887 = (state_29907[(7)]);
var state_29907__$1 = state_29907;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29907__$1,(11),out,inst_29887);
} else {
if((state_val_29908 === (5))){
var inst_29901 = cljs.core.async.close_BANG_.call(null,out);
var state_29907__$1 = state_29907;
var statearr_29920_29943 = state_29907__$1;
(statearr_29920_29943[(2)] = inst_29901);

(statearr_29920_29943[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (10))){
var inst_29899 = (state_29907[(2)]);
var state_29907__$1 = state_29907;
var statearr_29921_29944 = state_29907__$1;
(statearr_29921_29944[(2)] = inst_29899);

(statearr_29921_29944[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29908 === (8))){
var inst_29888 = (state_29907[(9)]);
var inst_29887 = (state_29907[(7)]);
var inst_29879 = (state_29907[(10)]);
var inst_29886 = (state_29907[(8)]);
var inst_29891 = (function (){var cs = inst_29879;
var vec__29884 = inst_29886;
var v = inst_29887;
var c = inst_29888;
return ((function (cs,vec__29884,v,c,inst_29888,inst_29887,inst_29879,inst_29886,state_val_29908,c__19398__auto___29935,out){
return (function (p1__29874_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29874_SHARP_);
});
;})(cs,vec__29884,v,c,inst_29888,inst_29887,inst_29879,inst_29886,state_val_29908,c__19398__auto___29935,out))
})();
var inst_29892 = cljs.core.filterv.call(null,inst_29891,inst_29879);
var inst_29879__$1 = inst_29892;
var state_29907__$1 = (function (){var statearr_29922 = state_29907;
(statearr_29922[(10)] = inst_29879__$1);

return statearr_29922;
})();
var statearr_29923_29945 = state_29907__$1;
(statearr_29923_29945[(2)] = null);

(statearr_29923_29945[(1)] = (2));


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
});})(c__19398__auto___29935,out))
;
return ((function (switch__19333__auto__,c__19398__auto___29935,out){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_29927 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29927[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_29927[(1)] = (1));

return statearr_29927;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_29907){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_29907);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__19337__auto__ = e29928;
var statearr_29929_29946 = state_29907;
(statearr_29929_29946[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29907);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29947 = state_29907;
state_29907 = G__29947;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_29907){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_29907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___29935,out))
})();
var state__19400__auto__ = (function (){var statearr_29930 = f__19399__auto__.call(null);
(statearr_29930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___29935);

return statearr_29930;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___29935,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29948 = [];
var len__17376__auto___29997 = arguments.length;
var i__17377__auto___29998 = (0);
while(true){
if((i__17377__auto___29998 < len__17376__auto___29997)){
args29948.push((arguments[i__17377__auto___29998]));

var G__29999 = (i__17377__auto___29998 + (1));
i__17377__auto___29998 = G__29999;
continue;
} else {
}
break;
}

var G__29950 = args29948.length;
switch (G__29950) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29948.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19398__auto___30001 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___30001,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___30001,out){
return (function (state_29974){
var state_val_29975 = (state_29974[(1)]);
if((state_val_29975 === (7))){
var inst_29956 = (state_29974[(7)]);
var inst_29956__$1 = (state_29974[(2)]);
var inst_29957 = (inst_29956__$1 == null);
var inst_29958 = cljs.core.not.call(null,inst_29957);
var state_29974__$1 = (function (){var statearr_29976 = state_29974;
(statearr_29976[(7)] = inst_29956__$1);

return statearr_29976;
})();
if(inst_29958){
var statearr_29977_30002 = state_29974__$1;
(statearr_29977_30002[(1)] = (8));

} else {
var statearr_29978_30003 = state_29974__$1;
(statearr_29978_30003[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (1))){
var inst_29951 = (0);
var state_29974__$1 = (function (){var statearr_29979 = state_29974;
(statearr_29979[(8)] = inst_29951);

return statearr_29979;
})();
var statearr_29980_30004 = state_29974__$1;
(statearr_29980_30004[(2)] = null);

(statearr_29980_30004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (4))){
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29974__$1,(7),ch);
} else {
if((state_val_29975 === (6))){
var inst_29969 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29981_30005 = state_29974__$1;
(statearr_29981_30005[(2)] = inst_29969);

(statearr_29981_30005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (3))){
var inst_29971 = (state_29974[(2)]);
var inst_29972 = cljs.core.async.close_BANG_.call(null,out);
var state_29974__$1 = (function (){var statearr_29982 = state_29974;
(statearr_29982[(9)] = inst_29971);

return statearr_29982;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29974__$1,inst_29972);
} else {
if((state_val_29975 === (2))){
var inst_29951 = (state_29974[(8)]);
var inst_29953 = (inst_29951 < n);
var state_29974__$1 = state_29974;
if(cljs.core.truth_(inst_29953)){
var statearr_29983_30006 = state_29974__$1;
(statearr_29983_30006[(1)] = (4));

} else {
var statearr_29984_30007 = state_29974__$1;
(statearr_29984_30007[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (11))){
var inst_29951 = (state_29974[(8)]);
var inst_29961 = (state_29974[(2)]);
var inst_29962 = (inst_29951 + (1));
var inst_29951__$1 = inst_29962;
var state_29974__$1 = (function (){var statearr_29985 = state_29974;
(statearr_29985[(8)] = inst_29951__$1);

(statearr_29985[(10)] = inst_29961);

return statearr_29985;
})();
var statearr_29986_30008 = state_29974__$1;
(statearr_29986_30008[(2)] = null);

(statearr_29986_30008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (9))){
var state_29974__$1 = state_29974;
var statearr_29987_30009 = state_29974__$1;
(statearr_29987_30009[(2)] = null);

(statearr_29987_30009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (5))){
var state_29974__$1 = state_29974;
var statearr_29988_30010 = state_29974__$1;
(statearr_29988_30010[(2)] = null);

(statearr_29988_30010[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (10))){
var inst_29966 = (state_29974[(2)]);
var state_29974__$1 = state_29974;
var statearr_29989_30011 = state_29974__$1;
(statearr_29989_30011[(2)] = inst_29966);

(statearr_29989_30011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29975 === (8))){
var inst_29956 = (state_29974[(7)]);
var state_29974__$1 = state_29974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29974__$1,(11),out,inst_29956);
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
});})(c__19398__auto___30001,out))
;
return ((function (switch__19333__auto__,c__19398__auto___30001,out){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_29993 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29993[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_29993[(1)] = (1));

return statearr_29993;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_29974){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_29974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e29994){if((e29994 instanceof Object)){
var ex__19337__auto__ = e29994;
var statearr_29995_30012 = state_29974;
(statearr_29995_30012[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29994;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30013 = state_29974;
state_29974 = G__30013;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_29974){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_29974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___30001,out))
})();
var state__19400__auto__ = (function (){var statearr_29996 = f__19399__auto__.call(null);
(statearr_29996[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___30001);

return statearr_29996;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___30001,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30021 = (function (map_LT_,f,ch,meta30022){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30022 = meta30022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30023,meta30022__$1){
var self__ = this;
var _30023__$1 = this;
return (new cljs.core.async.t_cljs$core$async30021(self__.map_LT_,self__.f,self__.ch,meta30022__$1));
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30023){
var self__ = this;
var _30023__$1 = this;
return self__.meta30022;
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async30024 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30024 = (function (map_LT_,f,ch,meta30022,_,fn1,meta30025){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta30022 = meta30022;
this._ = _;
this.fn1 = fn1;
this.meta30025 = meta30025;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_30026,meta30025__$1){
var self__ = this;
var _30026__$1 = this;
return (new cljs.core.async.t_cljs$core$async30024(self__.map_LT_,self__.f,self__.ch,self__.meta30022,self__._,self__.fn1,meta30025__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_30026){
var self__ = this;
var _30026__$1 = this;
return self__.meta30025;
});})(___$1))
;

cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30024.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__30014_SHARP_){
return f1.call(null,(((p1__30014_SHARP_ == null))?null:self__.f.call(null,p1__30014_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async30024.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30022","meta30022",-1320907617,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async30021","cljs.core.async/t_cljs$core$async30021",-214765485,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta30025","meta30025",459968698,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async30024.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30024.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30024";

cljs.core.async.t_cljs$core$async30024.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async30024");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async30024 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30024(map_LT___$1,f__$1,ch__$1,meta30022__$1,___$2,fn1__$1,meta30025){
return (new cljs.core.async.t_cljs$core$async30024(map_LT___$1,f__$1,ch__$1,meta30022__$1,___$2,fn1__$1,meta30025));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async30024(self__.map_LT_,self__.f,self__.ch,self__.meta30022,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16306__auto__ = ret;
if(cljs.core.truth_(and__16306__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16306__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30021.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async30021.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30022","meta30022",-1320907617,null)], null);
});

cljs.core.async.t_cljs$core$async30021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30021";

cljs.core.async.t_cljs$core$async30021.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async30021");
});

cljs.core.async.__GT_t_cljs$core$async30021 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async30021(map_LT___$1,f__$1,ch__$1,meta30022){
return (new cljs.core.async.t_cljs$core$async30021(map_LT___$1,f__$1,ch__$1,meta30022));
});

}

return (new cljs.core.async.t_cljs$core$async30021(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async30030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30030 = (function (map_GT_,f,ch,meta30031){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta30031 = meta30031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30032,meta30031__$1){
var self__ = this;
var _30032__$1 = this;
return (new cljs.core.async.t_cljs$core$async30030(self__.map_GT_,self__.f,self__.ch,meta30031__$1));
});

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30032){
var self__ = this;
var _30032__$1 = this;
return self__.meta30031;
});

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async30030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30031","meta30031",-400354916,null)], null);
});

cljs.core.async.t_cljs$core$async30030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30030";

cljs.core.async.t_cljs$core$async30030.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async30030");
});

cljs.core.async.__GT_t_cljs$core$async30030 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async30030(map_GT___$1,f__$1,ch__$1,meta30031){
return (new cljs.core.async.t_cljs$core$async30030(map_GT___$1,f__$1,ch__$1,meta30031));
});

}

return (new cljs.core.async.t_cljs$core$async30030(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async30036 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30036 = (function (filter_GT_,p,ch,meta30037){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta30037 = meta30037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30038,meta30037__$1){
var self__ = this;
var _30038__$1 = this;
return (new cljs.core.async.t_cljs$core$async30036(self__.filter_GT_,self__.p,self__.ch,meta30037__$1));
});

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30038){
var self__ = this;
var _30038__$1 = this;
return self__.meta30037;
});

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async30036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async30036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta30037","meta30037",437874133,null)], null);
});

cljs.core.async.t_cljs$core$async30036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async30036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30036";

cljs.core.async.t_cljs$core$async30036.cljs$lang$ctorPrWriter = (function (this__16916__auto__,writer__16917__auto__,opt__16918__auto__){
return cljs.core._write.call(null,writer__16917__auto__,"cljs.core.async/t_cljs$core$async30036");
});

cljs.core.async.__GT_t_cljs$core$async30036 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async30036(filter_GT___$1,p__$1,ch__$1,meta30037){
return (new cljs.core.async.t_cljs$core$async30036(filter_GT___$1,p__$1,ch__$1,meta30037));
});

}

return (new cljs.core.async.t_cljs$core$async30036(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args30039 = [];
var len__17376__auto___30083 = arguments.length;
var i__17377__auto___30084 = (0);
while(true){
if((i__17377__auto___30084 < len__17376__auto___30083)){
args30039.push((arguments[i__17377__auto___30084]));

var G__30085 = (i__17377__auto___30084 + (1));
i__17377__auto___30084 = G__30085;
continue;
} else {
}
break;
}

var G__30041 = args30039.length;
switch (G__30041) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30039.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19398__auto___30087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___30087,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___30087,out){
return (function (state_30062){
var state_val_30063 = (state_30062[(1)]);
if((state_val_30063 === (7))){
var inst_30058 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
var statearr_30064_30088 = state_30062__$1;
(statearr_30064_30088[(2)] = inst_30058);

(statearr_30064_30088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (1))){
var state_30062__$1 = state_30062;
var statearr_30065_30089 = state_30062__$1;
(statearr_30065_30089[(2)] = null);

(statearr_30065_30089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (4))){
var inst_30044 = (state_30062[(7)]);
var inst_30044__$1 = (state_30062[(2)]);
var inst_30045 = (inst_30044__$1 == null);
var state_30062__$1 = (function (){var statearr_30066 = state_30062;
(statearr_30066[(7)] = inst_30044__$1);

return statearr_30066;
})();
if(cljs.core.truth_(inst_30045)){
var statearr_30067_30090 = state_30062__$1;
(statearr_30067_30090[(1)] = (5));

} else {
var statearr_30068_30091 = state_30062__$1;
(statearr_30068_30091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (6))){
var inst_30044 = (state_30062[(7)]);
var inst_30049 = p.call(null,inst_30044);
var state_30062__$1 = state_30062;
if(cljs.core.truth_(inst_30049)){
var statearr_30069_30092 = state_30062__$1;
(statearr_30069_30092[(1)] = (8));

} else {
var statearr_30070_30093 = state_30062__$1;
(statearr_30070_30093[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (3))){
var inst_30060 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30062__$1,inst_30060);
} else {
if((state_val_30063 === (2))){
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30062__$1,(4),ch);
} else {
if((state_val_30063 === (11))){
var inst_30052 = (state_30062[(2)]);
var state_30062__$1 = state_30062;
var statearr_30071_30094 = state_30062__$1;
(statearr_30071_30094[(2)] = inst_30052);

(statearr_30071_30094[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (9))){
var state_30062__$1 = state_30062;
var statearr_30072_30095 = state_30062__$1;
(statearr_30072_30095[(2)] = null);

(statearr_30072_30095[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (5))){
var inst_30047 = cljs.core.async.close_BANG_.call(null,out);
var state_30062__$1 = state_30062;
var statearr_30073_30096 = state_30062__$1;
(statearr_30073_30096[(2)] = inst_30047);

(statearr_30073_30096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (10))){
var inst_30055 = (state_30062[(2)]);
var state_30062__$1 = (function (){var statearr_30074 = state_30062;
(statearr_30074[(8)] = inst_30055);

return statearr_30074;
})();
var statearr_30075_30097 = state_30062__$1;
(statearr_30075_30097[(2)] = null);

(statearr_30075_30097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30063 === (8))){
var inst_30044 = (state_30062[(7)]);
var state_30062__$1 = state_30062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30062__$1,(11),out,inst_30044);
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
});})(c__19398__auto___30087,out))
;
return ((function (switch__19333__auto__,c__19398__auto___30087,out){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_30079 = [null,null,null,null,null,null,null,null,null];
(statearr_30079[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_30079[(1)] = (1));

return statearr_30079;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_30062){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_30062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e30080){if((e30080 instanceof Object)){
var ex__19337__auto__ = e30080;
var statearr_30081_30098 = state_30062;
(statearr_30081_30098[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30099 = state_30062;
state_30062 = G__30099;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_30062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_30062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___30087,out))
})();
var state__19400__auto__ = (function (){var statearr_30082 = f__19399__auto__.call(null);
(statearr_30082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___30087);

return statearr_30082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___30087,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args30100 = [];
var len__17376__auto___30103 = arguments.length;
var i__17377__auto___30104 = (0);
while(true){
if((i__17377__auto___30104 < len__17376__auto___30103)){
args30100.push((arguments[i__17377__auto___30104]));

var G__30105 = (i__17377__auto___30104 + (1));
i__17377__auto___30104 = G__30105;
continue;
} else {
}
break;
}

var G__30102 = args30100.length;
switch (G__30102) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30100.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__){
return (function (state_30272){
var state_val_30273 = (state_30272[(1)]);
if((state_val_30273 === (7))){
var inst_30268 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30274_30315 = state_30272__$1;
(statearr_30274_30315[(2)] = inst_30268);

(statearr_30274_30315[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (20))){
var inst_30238 = (state_30272[(7)]);
var inst_30249 = (state_30272[(2)]);
var inst_30250 = cljs.core.next.call(null,inst_30238);
var inst_30224 = inst_30250;
var inst_30225 = null;
var inst_30226 = (0);
var inst_30227 = (0);
var state_30272__$1 = (function (){var statearr_30275 = state_30272;
(statearr_30275[(8)] = inst_30249);

(statearr_30275[(9)] = inst_30227);

(statearr_30275[(10)] = inst_30225);

(statearr_30275[(11)] = inst_30224);

(statearr_30275[(12)] = inst_30226);

return statearr_30275;
})();
var statearr_30276_30316 = state_30272__$1;
(statearr_30276_30316[(2)] = null);

(statearr_30276_30316[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (1))){
var state_30272__$1 = state_30272;
var statearr_30277_30317 = state_30272__$1;
(statearr_30277_30317[(2)] = null);

(statearr_30277_30317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (4))){
var inst_30213 = (state_30272[(13)]);
var inst_30213__$1 = (state_30272[(2)]);
var inst_30214 = (inst_30213__$1 == null);
var state_30272__$1 = (function (){var statearr_30278 = state_30272;
(statearr_30278[(13)] = inst_30213__$1);

return statearr_30278;
})();
if(cljs.core.truth_(inst_30214)){
var statearr_30279_30318 = state_30272__$1;
(statearr_30279_30318[(1)] = (5));

} else {
var statearr_30280_30319 = state_30272__$1;
(statearr_30280_30319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (15))){
var state_30272__$1 = state_30272;
var statearr_30284_30320 = state_30272__$1;
(statearr_30284_30320[(2)] = null);

(statearr_30284_30320[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (21))){
var state_30272__$1 = state_30272;
var statearr_30285_30321 = state_30272__$1;
(statearr_30285_30321[(2)] = null);

(statearr_30285_30321[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (13))){
var inst_30227 = (state_30272[(9)]);
var inst_30225 = (state_30272[(10)]);
var inst_30224 = (state_30272[(11)]);
var inst_30226 = (state_30272[(12)]);
var inst_30234 = (state_30272[(2)]);
var inst_30235 = (inst_30227 + (1));
var tmp30281 = inst_30225;
var tmp30282 = inst_30224;
var tmp30283 = inst_30226;
var inst_30224__$1 = tmp30282;
var inst_30225__$1 = tmp30281;
var inst_30226__$1 = tmp30283;
var inst_30227__$1 = inst_30235;
var state_30272__$1 = (function (){var statearr_30286 = state_30272;
(statearr_30286[(9)] = inst_30227__$1);

(statearr_30286[(10)] = inst_30225__$1);

(statearr_30286[(14)] = inst_30234);

(statearr_30286[(11)] = inst_30224__$1);

(statearr_30286[(12)] = inst_30226__$1);

return statearr_30286;
})();
var statearr_30287_30322 = state_30272__$1;
(statearr_30287_30322[(2)] = null);

(statearr_30287_30322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (22))){
var state_30272__$1 = state_30272;
var statearr_30288_30323 = state_30272__$1;
(statearr_30288_30323[(2)] = null);

(statearr_30288_30323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (6))){
var inst_30213 = (state_30272[(13)]);
var inst_30222 = f.call(null,inst_30213);
var inst_30223 = cljs.core.seq.call(null,inst_30222);
var inst_30224 = inst_30223;
var inst_30225 = null;
var inst_30226 = (0);
var inst_30227 = (0);
var state_30272__$1 = (function (){var statearr_30289 = state_30272;
(statearr_30289[(9)] = inst_30227);

(statearr_30289[(10)] = inst_30225);

(statearr_30289[(11)] = inst_30224);

(statearr_30289[(12)] = inst_30226);

return statearr_30289;
})();
var statearr_30290_30324 = state_30272__$1;
(statearr_30290_30324[(2)] = null);

(statearr_30290_30324[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (17))){
var inst_30238 = (state_30272[(7)]);
var inst_30242 = cljs.core.chunk_first.call(null,inst_30238);
var inst_30243 = cljs.core.chunk_rest.call(null,inst_30238);
var inst_30244 = cljs.core.count.call(null,inst_30242);
var inst_30224 = inst_30243;
var inst_30225 = inst_30242;
var inst_30226 = inst_30244;
var inst_30227 = (0);
var state_30272__$1 = (function (){var statearr_30291 = state_30272;
(statearr_30291[(9)] = inst_30227);

(statearr_30291[(10)] = inst_30225);

(statearr_30291[(11)] = inst_30224);

(statearr_30291[(12)] = inst_30226);

return statearr_30291;
})();
var statearr_30292_30325 = state_30272__$1;
(statearr_30292_30325[(2)] = null);

(statearr_30292_30325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (3))){
var inst_30270 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30272__$1,inst_30270);
} else {
if((state_val_30273 === (12))){
var inst_30258 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30293_30326 = state_30272__$1;
(statearr_30293_30326[(2)] = inst_30258);

(statearr_30293_30326[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (2))){
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30272__$1,(4),in$);
} else {
if((state_val_30273 === (23))){
var inst_30266 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30294_30327 = state_30272__$1;
(statearr_30294_30327[(2)] = inst_30266);

(statearr_30294_30327[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (19))){
var inst_30253 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30295_30328 = state_30272__$1;
(statearr_30295_30328[(2)] = inst_30253);

(statearr_30295_30328[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (11))){
var inst_30238 = (state_30272[(7)]);
var inst_30224 = (state_30272[(11)]);
var inst_30238__$1 = cljs.core.seq.call(null,inst_30224);
var state_30272__$1 = (function (){var statearr_30296 = state_30272;
(statearr_30296[(7)] = inst_30238__$1);

return statearr_30296;
})();
if(inst_30238__$1){
var statearr_30297_30329 = state_30272__$1;
(statearr_30297_30329[(1)] = (14));

} else {
var statearr_30298_30330 = state_30272__$1;
(statearr_30298_30330[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (9))){
var inst_30260 = (state_30272[(2)]);
var inst_30261 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30272__$1 = (function (){var statearr_30299 = state_30272;
(statearr_30299[(15)] = inst_30260);

return statearr_30299;
})();
if(cljs.core.truth_(inst_30261)){
var statearr_30300_30331 = state_30272__$1;
(statearr_30300_30331[(1)] = (21));

} else {
var statearr_30301_30332 = state_30272__$1;
(statearr_30301_30332[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (5))){
var inst_30216 = cljs.core.async.close_BANG_.call(null,out);
var state_30272__$1 = state_30272;
var statearr_30302_30333 = state_30272__$1;
(statearr_30302_30333[(2)] = inst_30216);

(statearr_30302_30333[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (14))){
var inst_30238 = (state_30272[(7)]);
var inst_30240 = cljs.core.chunked_seq_QMARK_.call(null,inst_30238);
var state_30272__$1 = state_30272;
if(inst_30240){
var statearr_30303_30334 = state_30272__$1;
(statearr_30303_30334[(1)] = (17));

} else {
var statearr_30304_30335 = state_30272__$1;
(statearr_30304_30335[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (16))){
var inst_30256 = (state_30272[(2)]);
var state_30272__$1 = state_30272;
var statearr_30305_30336 = state_30272__$1;
(statearr_30305_30336[(2)] = inst_30256);

(statearr_30305_30336[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30273 === (10))){
var inst_30227 = (state_30272[(9)]);
var inst_30225 = (state_30272[(10)]);
var inst_30232 = cljs.core._nth.call(null,inst_30225,inst_30227);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30272__$1,(13),out,inst_30232);
} else {
if((state_val_30273 === (18))){
var inst_30238 = (state_30272[(7)]);
var inst_30247 = cljs.core.first.call(null,inst_30238);
var state_30272__$1 = state_30272;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30272__$1,(20),out,inst_30247);
} else {
if((state_val_30273 === (8))){
var inst_30227 = (state_30272[(9)]);
var inst_30226 = (state_30272[(12)]);
var inst_30229 = (inst_30227 < inst_30226);
var inst_30230 = inst_30229;
var state_30272__$1 = state_30272;
if(cljs.core.truth_(inst_30230)){
var statearr_30306_30337 = state_30272__$1;
(statearr_30306_30337[(1)] = (10));

} else {
var statearr_30307_30338 = state_30272__$1;
(statearr_30307_30338[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
});})(c__19398__auto__))
;
return ((function (switch__19333__auto__,c__19398__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19334__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19334__auto____0 = (function (){
var statearr_30311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30311[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19334__auto__);

(statearr_30311[(1)] = (1));

return statearr_30311;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19334__auto____1 = (function (state_30272){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_30272);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e30312){if((e30312 instanceof Object)){
var ex__19337__auto__ = e30312;
var statearr_30313_30339 = state_30272;
(statearr_30313_30339[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30272);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30340 = state_30272;
state_30272 = G__30340;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19334__auto__ = function(state_30272){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19334__auto____1.call(this,state_30272);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19334__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19334__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__))
})();
var state__19400__auto__ = (function (){var statearr_30314 = f__19399__auto__.call(null);
(statearr_30314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_30314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__))
);

return c__19398__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30341 = [];
var len__17376__auto___30344 = arguments.length;
var i__17377__auto___30345 = (0);
while(true){
if((i__17377__auto___30345 < len__17376__auto___30344)){
args30341.push((arguments[i__17377__auto___30345]));

var G__30346 = (i__17377__auto___30345 + (1));
i__17377__auto___30345 = G__30346;
continue;
} else {
}
break;
}

var G__30343 = args30341.length;
switch (G__30343) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30341.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30348 = [];
var len__17376__auto___30351 = arguments.length;
var i__17377__auto___30352 = (0);
while(true){
if((i__17377__auto___30352 < len__17376__auto___30351)){
args30348.push((arguments[i__17377__auto___30352]));

var G__30353 = (i__17377__auto___30352 + (1));
i__17377__auto___30352 = G__30353;
continue;
} else {
}
break;
}

var G__30350 = args30348.length;
switch (G__30350) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30348.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30355 = [];
var len__17376__auto___30406 = arguments.length;
var i__17377__auto___30407 = (0);
while(true){
if((i__17377__auto___30407 < len__17376__auto___30406)){
args30355.push((arguments[i__17377__auto___30407]));

var G__30408 = (i__17377__auto___30407 + (1));
i__17377__auto___30407 = G__30408;
continue;
} else {
}
break;
}

var G__30357 = args30355.length;
switch (G__30357) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30355.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19398__auto___30410 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___30410,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___30410,out){
return (function (state_30381){
var state_val_30382 = (state_30381[(1)]);
if((state_val_30382 === (7))){
var inst_30376 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30383_30411 = state_30381__$1;
(statearr_30383_30411[(2)] = inst_30376);

(statearr_30383_30411[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (1))){
var inst_30358 = null;
var state_30381__$1 = (function (){var statearr_30384 = state_30381;
(statearr_30384[(7)] = inst_30358);

return statearr_30384;
})();
var statearr_30385_30412 = state_30381__$1;
(statearr_30385_30412[(2)] = null);

(statearr_30385_30412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (4))){
var inst_30361 = (state_30381[(8)]);
var inst_30361__$1 = (state_30381[(2)]);
var inst_30362 = (inst_30361__$1 == null);
var inst_30363 = cljs.core.not.call(null,inst_30362);
var state_30381__$1 = (function (){var statearr_30386 = state_30381;
(statearr_30386[(8)] = inst_30361__$1);

return statearr_30386;
})();
if(inst_30363){
var statearr_30387_30413 = state_30381__$1;
(statearr_30387_30413[(1)] = (5));

} else {
var statearr_30388_30414 = state_30381__$1;
(statearr_30388_30414[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (6))){
var state_30381__$1 = state_30381;
var statearr_30389_30415 = state_30381__$1;
(statearr_30389_30415[(2)] = null);

(statearr_30389_30415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (3))){
var inst_30378 = (state_30381[(2)]);
var inst_30379 = cljs.core.async.close_BANG_.call(null,out);
var state_30381__$1 = (function (){var statearr_30390 = state_30381;
(statearr_30390[(9)] = inst_30378);

return statearr_30390;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30381__$1,inst_30379);
} else {
if((state_val_30382 === (2))){
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30381__$1,(4),ch);
} else {
if((state_val_30382 === (11))){
var inst_30361 = (state_30381[(8)]);
var inst_30370 = (state_30381[(2)]);
var inst_30358 = inst_30361;
var state_30381__$1 = (function (){var statearr_30391 = state_30381;
(statearr_30391[(10)] = inst_30370);

(statearr_30391[(7)] = inst_30358);

return statearr_30391;
})();
var statearr_30392_30416 = state_30381__$1;
(statearr_30392_30416[(2)] = null);

(statearr_30392_30416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (9))){
var inst_30361 = (state_30381[(8)]);
var state_30381__$1 = state_30381;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30381__$1,(11),out,inst_30361);
} else {
if((state_val_30382 === (5))){
var inst_30358 = (state_30381[(7)]);
var inst_30361 = (state_30381[(8)]);
var inst_30365 = cljs.core._EQ_.call(null,inst_30361,inst_30358);
var state_30381__$1 = state_30381;
if(inst_30365){
var statearr_30394_30417 = state_30381__$1;
(statearr_30394_30417[(1)] = (8));

} else {
var statearr_30395_30418 = state_30381__$1;
(statearr_30395_30418[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (10))){
var inst_30373 = (state_30381[(2)]);
var state_30381__$1 = state_30381;
var statearr_30396_30419 = state_30381__$1;
(statearr_30396_30419[(2)] = inst_30373);

(statearr_30396_30419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30382 === (8))){
var inst_30358 = (state_30381[(7)]);
var tmp30393 = inst_30358;
var inst_30358__$1 = tmp30393;
var state_30381__$1 = (function (){var statearr_30397 = state_30381;
(statearr_30397[(7)] = inst_30358__$1);

return statearr_30397;
})();
var statearr_30398_30420 = state_30381__$1;
(statearr_30398_30420[(2)] = null);

(statearr_30398_30420[(1)] = (2));


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
});})(c__19398__auto___30410,out))
;
return ((function (switch__19333__auto__,c__19398__auto___30410,out){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_30402 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30402[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_30402[(1)] = (1));

return statearr_30402;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_30381){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_30381);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e30403){if((e30403 instanceof Object)){
var ex__19337__auto__ = e30403;
var statearr_30404_30421 = state_30381;
(statearr_30404_30421[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30381);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30403;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30422 = state_30381;
state_30381 = G__30422;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_30381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_30381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___30410,out))
})();
var state__19400__auto__ = (function (){var statearr_30405 = f__19399__auto__.call(null);
(statearr_30405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___30410);

return statearr_30405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___30410,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30423 = [];
var len__17376__auto___30493 = arguments.length;
var i__17377__auto___30494 = (0);
while(true){
if((i__17377__auto___30494 < len__17376__auto___30493)){
args30423.push((arguments[i__17377__auto___30494]));

var G__30495 = (i__17377__auto___30494 + (1));
i__17377__auto___30494 = G__30495;
continue;
} else {
}
break;
}

var G__30425 = args30423.length;
switch (G__30425) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30423.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19398__auto___30497 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___30497,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___30497,out){
return (function (state_30463){
var state_val_30464 = (state_30463[(1)]);
if((state_val_30464 === (7))){
var inst_30459 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30465_30498 = state_30463__$1;
(statearr_30465_30498[(2)] = inst_30459);

(statearr_30465_30498[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (1))){
var inst_30426 = (new Array(n));
var inst_30427 = inst_30426;
var inst_30428 = (0);
var state_30463__$1 = (function (){var statearr_30466 = state_30463;
(statearr_30466[(7)] = inst_30428);

(statearr_30466[(8)] = inst_30427);

return statearr_30466;
})();
var statearr_30467_30499 = state_30463__$1;
(statearr_30467_30499[(2)] = null);

(statearr_30467_30499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (4))){
var inst_30431 = (state_30463[(9)]);
var inst_30431__$1 = (state_30463[(2)]);
var inst_30432 = (inst_30431__$1 == null);
var inst_30433 = cljs.core.not.call(null,inst_30432);
var state_30463__$1 = (function (){var statearr_30468 = state_30463;
(statearr_30468[(9)] = inst_30431__$1);

return statearr_30468;
})();
if(inst_30433){
var statearr_30469_30500 = state_30463__$1;
(statearr_30469_30500[(1)] = (5));

} else {
var statearr_30470_30501 = state_30463__$1;
(statearr_30470_30501[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (15))){
var inst_30453 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30471_30502 = state_30463__$1;
(statearr_30471_30502[(2)] = inst_30453);

(statearr_30471_30502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (13))){
var state_30463__$1 = state_30463;
var statearr_30472_30503 = state_30463__$1;
(statearr_30472_30503[(2)] = null);

(statearr_30472_30503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (6))){
var inst_30428 = (state_30463[(7)]);
var inst_30449 = (inst_30428 > (0));
var state_30463__$1 = state_30463;
if(cljs.core.truth_(inst_30449)){
var statearr_30473_30504 = state_30463__$1;
(statearr_30473_30504[(1)] = (12));

} else {
var statearr_30474_30505 = state_30463__$1;
(statearr_30474_30505[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (3))){
var inst_30461 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30463__$1,inst_30461);
} else {
if((state_val_30464 === (12))){
var inst_30427 = (state_30463[(8)]);
var inst_30451 = cljs.core.vec.call(null,inst_30427);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30463__$1,(15),out,inst_30451);
} else {
if((state_val_30464 === (2))){
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30463__$1,(4),ch);
} else {
if((state_val_30464 === (11))){
var inst_30443 = (state_30463[(2)]);
var inst_30444 = (new Array(n));
var inst_30427 = inst_30444;
var inst_30428 = (0);
var state_30463__$1 = (function (){var statearr_30475 = state_30463;
(statearr_30475[(7)] = inst_30428);

(statearr_30475[(8)] = inst_30427);

(statearr_30475[(10)] = inst_30443);

return statearr_30475;
})();
var statearr_30476_30506 = state_30463__$1;
(statearr_30476_30506[(2)] = null);

(statearr_30476_30506[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (9))){
var inst_30427 = (state_30463[(8)]);
var inst_30441 = cljs.core.vec.call(null,inst_30427);
var state_30463__$1 = state_30463;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30463__$1,(11),out,inst_30441);
} else {
if((state_val_30464 === (5))){
var inst_30428 = (state_30463[(7)]);
var inst_30436 = (state_30463[(11)]);
var inst_30427 = (state_30463[(8)]);
var inst_30431 = (state_30463[(9)]);
var inst_30435 = (inst_30427[inst_30428] = inst_30431);
var inst_30436__$1 = (inst_30428 + (1));
var inst_30437 = (inst_30436__$1 < n);
var state_30463__$1 = (function (){var statearr_30477 = state_30463;
(statearr_30477[(12)] = inst_30435);

(statearr_30477[(11)] = inst_30436__$1);

return statearr_30477;
})();
if(cljs.core.truth_(inst_30437)){
var statearr_30478_30507 = state_30463__$1;
(statearr_30478_30507[(1)] = (8));

} else {
var statearr_30479_30508 = state_30463__$1;
(statearr_30479_30508[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (14))){
var inst_30456 = (state_30463[(2)]);
var inst_30457 = cljs.core.async.close_BANG_.call(null,out);
var state_30463__$1 = (function (){var statearr_30481 = state_30463;
(statearr_30481[(13)] = inst_30456);

return statearr_30481;
})();
var statearr_30482_30509 = state_30463__$1;
(statearr_30482_30509[(2)] = inst_30457);

(statearr_30482_30509[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (10))){
var inst_30447 = (state_30463[(2)]);
var state_30463__$1 = state_30463;
var statearr_30483_30510 = state_30463__$1;
(statearr_30483_30510[(2)] = inst_30447);

(statearr_30483_30510[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30464 === (8))){
var inst_30436 = (state_30463[(11)]);
var inst_30427 = (state_30463[(8)]);
var tmp30480 = inst_30427;
var inst_30427__$1 = tmp30480;
var inst_30428 = inst_30436;
var state_30463__$1 = (function (){var statearr_30484 = state_30463;
(statearr_30484[(7)] = inst_30428);

(statearr_30484[(8)] = inst_30427__$1);

return statearr_30484;
})();
var statearr_30485_30511 = state_30463__$1;
(statearr_30485_30511[(2)] = null);

(statearr_30485_30511[(1)] = (2));


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
}
});})(c__19398__auto___30497,out))
;
return ((function (switch__19333__auto__,c__19398__auto___30497,out){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_30489 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30489[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_30489[(1)] = (1));

return statearr_30489;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_30463){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_30463);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e30490){if((e30490 instanceof Object)){
var ex__19337__auto__ = e30490;
var statearr_30491_30512 = state_30463;
(statearr_30491_30512[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30463);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30513 = state_30463;
state_30463 = G__30513;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_30463){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_30463);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___30497,out))
})();
var state__19400__auto__ = (function (){var statearr_30492 = f__19399__auto__.call(null);
(statearr_30492[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___30497);

return statearr_30492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___30497,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30514 = [];
var len__17376__auto___30588 = arguments.length;
var i__17377__auto___30589 = (0);
while(true){
if((i__17377__auto___30589 < len__17376__auto___30588)){
args30514.push((arguments[i__17377__auto___30589]));

var G__30590 = (i__17377__auto___30589 + (1));
i__17377__auto___30589 = G__30590;
continue;
} else {
}
break;
}

var G__30516 = args30514.length;
switch (G__30516) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30514.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19398__auto___30592 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___30592,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___30592,out){
return (function (state_30558){
var state_val_30559 = (state_30558[(1)]);
if((state_val_30559 === (7))){
var inst_30554 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30560_30593 = state_30558__$1;
(statearr_30560_30593[(2)] = inst_30554);

(statearr_30560_30593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (1))){
var inst_30517 = [];
var inst_30518 = inst_30517;
var inst_30519 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30558__$1 = (function (){var statearr_30561 = state_30558;
(statearr_30561[(7)] = inst_30518);

(statearr_30561[(8)] = inst_30519);

return statearr_30561;
})();
var statearr_30562_30594 = state_30558__$1;
(statearr_30562_30594[(2)] = null);

(statearr_30562_30594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (4))){
var inst_30522 = (state_30558[(9)]);
var inst_30522__$1 = (state_30558[(2)]);
var inst_30523 = (inst_30522__$1 == null);
var inst_30524 = cljs.core.not.call(null,inst_30523);
var state_30558__$1 = (function (){var statearr_30563 = state_30558;
(statearr_30563[(9)] = inst_30522__$1);

return statearr_30563;
})();
if(inst_30524){
var statearr_30564_30595 = state_30558__$1;
(statearr_30564_30595[(1)] = (5));

} else {
var statearr_30565_30596 = state_30558__$1;
(statearr_30565_30596[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (15))){
var inst_30548 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30566_30597 = state_30558__$1;
(statearr_30566_30597[(2)] = inst_30548);

(statearr_30566_30597[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (13))){
var state_30558__$1 = state_30558;
var statearr_30567_30598 = state_30558__$1;
(statearr_30567_30598[(2)] = null);

(statearr_30567_30598[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (6))){
var inst_30518 = (state_30558[(7)]);
var inst_30543 = inst_30518.length;
var inst_30544 = (inst_30543 > (0));
var state_30558__$1 = state_30558;
if(cljs.core.truth_(inst_30544)){
var statearr_30568_30599 = state_30558__$1;
(statearr_30568_30599[(1)] = (12));

} else {
var statearr_30569_30600 = state_30558__$1;
(statearr_30569_30600[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (3))){
var inst_30556 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30558__$1,inst_30556);
} else {
if((state_val_30559 === (12))){
var inst_30518 = (state_30558[(7)]);
var inst_30546 = cljs.core.vec.call(null,inst_30518);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30558__$1,(15),out,inst_30546);
} else {
if((state_val_30559 === (2))){
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30558__$1,(4),ch);
} else {
if((state_val_30559 === (11))){
var inst_30522 = (state_30558[(9)]);
var inst_30526 = (state_30558[(10)]);
var inst_30536 = (state_30558[(2)]);
var inst_30537 = [];
var inst_30538 = inst_30537.push(inst_30522);
var inst_30518 = inst_30537;
var inst_30519 = inst_30526;
var state_30558__$1 = (function (){var statearr_30570 = state_30558;
(statearr_30570[(7)] = inst_30518);

(statearr_30570[(8)] = inst_30519);

(statearr_30570[(11)] = inst_30536);

(statearr_30570[(12)] = inst_30538);

return statearr_30570;
})();
var statearr_30571_30601 = state_30558__$1;
(statearr_30571_30601[(2)] = null);

(statearr_30571_30601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (9))){
var inst_30518 = (state_30558[(7)]);
var inst_30534 = cljs.core.vec.call(null,inst_30518);
var state_30558__$1 = state_30558;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30558__$1,(11),out,inst_30534);
} else {
if((state_val_30559 === (5))){
var inst_30522 = (state_30558[(9)]);
var inst_30519 = (state_30558[(8)]);
var inst_30526 = (state_30558[(10)]);
var inst_30526__$1 = f.call(null,inst_30522);
var inst_30527 = cljs.core._EQ_.call(null,inst_30526__$1,inst_30519);
var inst_30528 = cljs.core.keyword_identical_QMARK_.call(null,inst_30519,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30529 = (inst_30527) || (inst_30528);
var state_30558__$1 = (function (){var statearr_30572 = state_30558;
(statearr_30572[(10)] = inst_30526__$1);

return statearr_30572;
})();
if(cljs.core.truth_(inst_30529)){
var statearr_30573_30602 = state_30558__$1;
(statearr_30573_30602[(1)] = (8));

} else {
var statearr_30574_30603 = state_30558__$1;
(statearr_30574_30603[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (14))){
var inst_30551 = (state_30558[(2)]);
var inst_30552 = cljs.core.async.close_BANG_.call(null,out);
var state_30558__$1 = (function (){var statearr_30576 = state_30558;
(statearr_30576[(13)] = inst_30551);

return statearr_30576;
})();
var statearr_30577_30604 = state_30558__$1;
(statearr_30577_30604[(2)] = inst_30552);

(statearr_30577_30604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (10))){
var inst_30541 = (state_30558[(2)]);
var state_30558__$1 = state_30558;
var statearr_30578_30605 = state_30558__$1;
(statearr_30578_30605[(2)] = inst_30541);

(statearr_30578_30605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30559 === (8))){
var inst_30522 = (state_30558[(9)]);
var inst_30518 = (state_30558[(7)]);
var inst_30526 = (state_30558[(10)]);
var inst_30531 = inst_30518.push(inst_30522);
var tmp30575 = inst_30518;
var inst_30518__$1 = tmp30575;
var inst_30519 = inst_30526;
var state_30558__$1 = (function (){var statearr_30579 = state_30558;
(statearr_30579[(7)] = inst_30518__$1);

(statearr_30579[(8)] = inst_30519);

(statearr_30579[(14)] = inst_30531);

return statearr_30579;
})();
var statearr_30580_30606 = state_30558__$1;
(statearr_30580_30606[(2)] = null);

(statearr_30580_30606[(1)] = (2));


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
}
});})(c__19398__auto___30592,out))
;
return ((function (switch__19333__auto__,c__19398__auto___30592,out){
return (function() {
var cljs$core$async$state_machine__19334__auto__ = null;
var cljs$core$async$state_machine__19334__auto____0 = (function (){
var statearr_30584 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30584[(0)] = cljs$core$async$state_machine__19334__auto__);

(statearr_30584[(1)] = (1));

return statearr_30584;
});
var cljs$core$async$state_machine__19334__auto____1 = (function (state_30558){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_30558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e30585){if((e30585 instanceof Object)){
var ex__19337__auto__ = e30585;
var statearr_30586_30607 = state_30558;
(statearr_30586_30607[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30585;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30608 = state_30558;
state_30558 = G__30608;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
cljs$core$async$state_machine__19334__auto__ = function(state_30558){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19334__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19334__auto____1.call(this,state_30558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19334__auto____0;
cljs$core$async$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19334__auto____1;
return cljs$core$async$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___30592,out))
})();
var state__19400__auto__ = (function (){var statearr_30587 = f__19399__auto__.call(null);
(statearr_30587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___30592);

return statearr_30587;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___30592,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1445108530187