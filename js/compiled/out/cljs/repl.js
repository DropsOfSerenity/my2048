// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31863_31877 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31864_31878 = null;
var count__31865_31879 = (0);
var i__31866_31880 = (0);
while(true){
if((i__31866_31880 < count__31865_31879)){
var f_31881 = cljs.core._nth.call(null,chunk__31864_31878,i__31866_31880);
cljs.core.println.call(null,"  ",f_31881);

var G__31882 = seq__31863_31877;
var G__31883 = chunk__31864_31878;
var G__31884 = count__31865_31879;
var G__31885 = (i__31866_31880 + (1));
seq__31863_31877 = G__31882;
chunk__31864_31878 = G__31883;
count__31865_31879 = G__31884;
i__31866_31880 = G__31885;
continue;
} else {
var temp__4425__auto___31886 = cljs.core.seq.call(null,seq__31863_31877);
if(temp__4425__auto___31886){
var seq__31863_31887__$1 = temp__4425__auto___31886;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31863_31887__$1)){
var c__17121__auto___31888 = cljs.core.chunk_first.call(null,seq__31863_31887__$1);
var G__31889 = cljs.core.chunk_rest.call(null,seq__31863_31887__$1);
var G__31890 = c__17121__auto___31888;
var G__31891 = cljs.core.count.call(null,c__17121__auto___31888);
var G__31892 = (0);
seq__31863_31877 = G__31889;
chunk__31864_31878 = G__31890;
count__31865_31879 = G__31891;
i__31866_31880 = G__31892;
continue;
} else {
var f_31893 = cljs.core.first.call(null,seq__31863_31887__$1);
cljs.core.println.call(null,"  ",f_31893);

var G__31894 = cljs.core.next.call(null,seq__31863_31887__$1);
var G__31895 = null;
var G__31896 = (0);
var G__31897 = (0);
seq__31863_31877 = G__31894;
chunk__31864_31878 = G__31895;
count__31865_31879 = G__31896;
i__31866_31880 = G__31897;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31898 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16318__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31898);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31898)))?cljs.core.second.call(null,arglists_31898):arglists_31898));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31867 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31868 = null;
var count__31869 = (0);
var i__31870 = (0);
while(true){
if((i__31870 < count__31869)){
var vec__31871 = cljs.core._nth.call(null,chunk__31868,i__31870);
var name = cljs.core.nth.call(null,vec__31871,(0),null);
var map__31872 = cljs.core.nth.call(null,vec__31871,(1),null);
var map__31872__$1 = ((((!((map__31872 == null)))?((((map__31872.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31872.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31872):map__31872);
var doc = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31872__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31899 = seq__31867;
var G__31900 = chunk__31868;
var G__31901 = count__31869;
var G__31902 = (i__31870 + (1));
seq__31867 = G__31899;
chunk__31868 = G__31900;
count__31869 = G__31901;
i__31870 = G__31902;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31867);
if(temp__4425__auto__){
var seq__31867__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31867__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__31867__$1);
var G__31903 = cljs.core.chunk_rest.call(null,seq__31867__$1);
var G__31904 = c__17121__auto__;
var G__31905 = cljs.core.count.call(null,c__17121__auto__);
var G__31906 = (0);
seq__31867 = G__31903;
chunk__31868 = G__31904;
count__31869 = G__31905;
i__31870 = G__31906;
continue;
} else {
var vec__31874 = cljs.core.first.call(null,seq__31867__$1);
var name = cljs.core.nth.call(null,vec__31874,(0),null);
var map__31875 = cljs.core.nth.call(null,vec__31874,(1),null);
var map__31875__$1 = ((((!((map__31875 == null)))?((((map__31875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31875):map__31875);
var doc = cljs.core.get.call(null,map__31875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31907 = cljs.core.next.call(null,seq__31867__$1);
var G__31908 = null;
var G__31909 = (0);
var G__31910 = (0);
seq__31867 = G__31907;
chunk__31868 = G__31908;
count__31869 = G__31909;
i__31870 = G__31910;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1445108532393