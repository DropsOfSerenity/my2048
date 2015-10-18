// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16318__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16318__auto__){
return or__16318__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16318__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__31915_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__31915_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__31920 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__31921 = null;
var count__31922 = (0);
var i__31923 = (0);
while(true){
if((i__31923 < count__31922)){
var n = cljs.core._nth.call(null,chunk__31921,i__31923);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31924 = seq__31920;
var G__31925 = chunk__31921;
var G__31926 = count__31922;
var G__31927 = (i__31923 + (1));
seq__31920 = G__31924;
chunk__31921 = G__31925;
count__31922 = G__31926;
i__31923 = G__31927;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31920);
if(temp__4425__auto__){
var seq__31920__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31920__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__31920__$1);
var G__31928 = cljs.core.chunk_rest.call(null,seq__31920__$1);
var G__31929 = c__17121__auto__;
var G__31930 = cljs.core.count.call(null,c__17121__auto__);
var G__31931 = (0);
seq__31920 = G__31928;
chunk__31921 = G__31929;
count__31922 = G__31930;
i__31923 = G__31931;
continue;
} else {
var n = cljs.core.first.call(null,seq__31920__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__31932 = cljs.core.next.call(null,seq__31920__$1);
var G__31933 = null;
var G__31934 = (0);
var G__31935 = (0);
seq__31920 = G__31932;
chunk__31921 = G__31933;
count__31922 = G__31934;
i__31923 = G__31935;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__31974_31981 = cljs.core.seq.call(null,deps);
var chunk__31975_31982 = null;
var count__31976_31983 = (0);
var i__31977_31984 = (0);
while(true){
if((i__31977_31984 < count__31976_31983)){
var dep_31985 = cljs.core._nth.call(null,chunk__31975_31982,i__31977_31984);
topo_sort_helper_STAR_.call(null,dep_31985,(depth + (1)),state);

var G__31986 = seq__31974_31981;
var G__31987 = chunk__31975_31982;
var G__31988 = count__31976_31983;
var G__31989 = (i__31977_31984 + (1));
seq__31974_31981 = G__31986;
chunk__31975_31982 = G__31987;
count__31976_31983 = G__31988;
i__31977_31984 = G__31989;
continue;
} else {
var temp__4425__auto___31990 = cljs.core.seq.call(null,seq__31974_31981);
if(temp__4425__auto___31990){
var seq__31974_31991__$1 = temp__4425__auto___31990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31974_31991__$1)){
var c__17121__auto___31992 = cljs.core.chunk_first.call(null,seq__31974_31991__$1);
var G__31993 = cljs.core.chunk_rest.call(null,seq__31974_31991__$1);
var G__31994 = c__17121__auto___31992;
var G__31995 = cljs.core.count.call(null,c__17121__auto___31992);
var G__31996 = (0);
seq__31974_31981 = G__31993;
chunk__31975_31982 = G__31994;
count__31976_31983 = G__31995;
i__31977_31984 = G__31996;
continue;
} else {
var dep_31997 = cljs.core.first.call(null,seq__31974_31991__$1);
topo_sort_helper_STAR_.call(null,dep_31997,(depth + (1)),state);

var G__31998 = cljs.core.next.call(null,seq__31974_31991__$1);
var G__31999 = null;
var G__32000 = (0);
var G__32001 = (0);
seq__31974_31981 = G__31998;
chunk__31975_31982 = G__31999;
count__31976_31983 = G__32000;
i__31977_31984 = G__32001;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__31978){
var vec__31980 = p__31978;
var x = cljs.core.nth.call(null,vec__31980,(0),null);
var xs = cljs.core.nthnext.call(null,vec__31980,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__31980,x,xs,get_deps__$1){
return (function (p1__31936_SHARP_){
return clojure.set.difference.call(null,p1__31936_SHARP_,x);
});})(vec__31980,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__32014 = cljs.core.seq.call(null,provides);
var chunk__32015 = null;
var count__32016 = (0);
var i__32017 = (0);
while(true){
if((i__32017 < count__32016)){
var prov = cljs.core._nth.call(null,chunk__32015,i__32017);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32018_32026 = cljs.core.seq.call(null,requires);
var chunk__32019_32027 = null;
var count__32020_32028 = (0);
var i__32021_32029 = (0);
while(true){
if((i__32021_32029 < count__32020_32028)){
var req_32030 = cljs.core._nth.call(null,chunk__32019_32027,i__32021_32029);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32030,prov);

var G__32031 = seq__32018_32026;
var G__32032 = chunk__32019_32027;
var G__32033 = count__32020_32028;
var G__32034 = (i__32021_32029 + (1));
seq__32018_32026 = G__32031;
chunk__32019_32027 = G__32032;
count__32020_32028 = G__32033;
i__32021_32029 = G__32034;
continue;
} else {
var temp__4425__auto___32035 = cljs.core.seq.call(null,seq__32018_32026);
if(temp__4425__auto___32035){
var seq__32018_32036__$1 = temp__4425__auto___32035;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32018_32036__$1)){
var c__17121__auto___32037 = cljs.core.chunk_first.call(null,seq__32018_32036__$1);
var G__32038 = cljs.core.chunk_rest.call(null,seq__32018_32036__$1);
var G__32039 = c__17121__auto___32037;
var G__32040 = cljs.core.count.call(null,c__17121__auto___32037);
var G__32041 = (0);
seq__32018_32026 = G__32038;
chunk__32019_32027 = G__32039;
count__32020_32028 = G__32040;
i__32021_32029 = G__32041;
continue;
} else {
var req_32042 = cljs.core.first.call(null,seq__32018_32036__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32042,prov);

var G__32043 = cljs.core.next.call(null,seq__32018_32036__$1);
var G__32044 = null;
var G__32045 = (0);
var G__32046 = (0);
seq__32018_32026 = G__32043;
chunk__32019_32027 = G__32044;
count__32020_32028 = G__32045;
i__32021_32029 = G__32046;
continue;
}
} else {
}
}
break;
}

var G__32047 = seq__32014;
var G__32048 = chunk__32015;
var G__32049 = count__32016;
var G__32050 = (i__32017 + (1));
seq__32014 = G__32047;
chunk__32015 = G__32048;
count__32016 = G__32049;
i__32017 = G__32050;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32014);
if(temp__4425__auto__){
var seq__32014__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32014__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__32014__$1);
var G__32051 = cljs.core.chunk_rest.call(null,seq__32014__$1);
var G__32052 = c__17121__auto__;
var G__32053 = cljs.core.count.call(null,c__17121__auto__);
var G__32054 = (0);
seq__32014 = G__32051;
chunk__32015 = G__32052;
count__32016 = G__32053;
i__32017 = G__32054;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32014__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32022_32055 = cljs.core.seq.call(null,requires);
var chunk__32023_32056 = null;
var count__32024_32057 = (0);
var i__32025_32058 = (0);
while(true){
if((i__32025_32058 < count__32024_32057)){
var req_32059 = cljs.core._nth.call(null,chunk__32023_32056,i__32025_32058);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32059,prov);

var G__32060 = seq__32022_32055;
var G__32061 = chunk__32023_32056;
var G__32062 = count__32024_32057;
var G__32063 = (i__32025_32058 + (1));
seq__32022_32055 = G__32060;
chunk__32023_32056 = G__32061;
count__32024_32057 = G__32062;
i__32025_32058 = G__32063;
continue;
} else {
var temp__4425__auto___32064__$1 = cljs.core.seq.call(null,seq__32022_32055);
if(temp__4425__auto___32064__$1){
var seq__32022_32065__$1 = temp__4425__auto___32064__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32022_32065__$1)){
var c__17121__auto___32066 = cljs.core.chunk_first.call(null,seq__32022_32065__$1);
var G__32067 = cljs.core.chunk_rest.call(null,seq__32022_32065__$1);
var G__32068 = c__17121__auto___32066;
var G__32069 = cljs.core.count.call(null,c__17121__auto___32066);
var G__32070 = (0);
seq__32022_32055 = G__32067;
chunk__32023_32056 = G__32068;
count__32024_32057 = G__32069;
i__32025_32058 = G__32070;
continue;
} else {
var req_32071 = cljs.core.first.call(null,seq__32022_32065__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32071,prov);

var G__32072 = cljs.core.next.call(null,seq__32022_32065__$1);
var G__32073 = null;
var G__32074 = (0);
var G__32075 = (0);
seq__32022_32055 = G__32072;
chunk__32023_32056 = G__32073;
count__32024_32057 = G__32074;
i__32025_32058 = G__32075;
continue;
}
} else {
}
}
break;
}

var G__32076 = cljs.core.next.call(null,seq__32014__$1);
var G__32077 = null;
var G__32078 = (0);
var G__32079 = (0);
seq__32014 = G__32076;
chunk__32015 = G__32077;
count__32016 = G__32078;
i__32017 = G__32079;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__32084_32088 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32085_32089 = null;
var count__32086_32090 = (0);
var i__32087_32091 = (0);
while(true){
if((i__32087_32091 < count__32086_32090)){
var ns_32092 = cljs.core._nth.call(null,chunk__32085_32089,i__32087_32091);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32092);

var G__32093 = seq__32084_32088;
var G__32094 = chunk__32085_32089;
var G__32095 = count__32086_32090;
var G__32096 = (i__32087_32091 + (1));
seq__32084_32088 = G__32093;
chunk__32085_32089 = G__32094;
count__32086_32090 = G__32095;
i__32087_32091 = G__32096;
continue;
} else {
var temp__4425__auto___32097 = cljs.core.seq.call(null,seq__32084_32088);
if(temp__4425__auto___32097){
var seq__32084_32098__$1 = temp__4425__auto___32097;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32084_32098__$1)){
var c__17121__auto___32099 = cljs.core.chunk_first.call(null,seq__32084_32098__$1);
var G__32100 = cljs.core.chunk_rest.call(null,seq__32084_32098__$1);
var G__32101 = c__17121__auto___32099;
var G__32102 = cljs.core.count.call(null,c__17121__auto___32099);
var G__32103 = (0);
seq__32084_32088 = G__32100;
chunk__32085_32089 = G__32101;
count__32086_32090 = G__32102;
i__32087_32091 = G__32103;
continue;
} else {
var ns_32104 = cljs.core.first.call(null,seq__32084_32098__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32104);

var G__32105 = cljs.core.next.call(null,seq__32084_32098__$1);
var G__32106 = null;
var G__32107 = (0);
var G__32108 = (0);
seq__32084_32088 = G__32105;
chunk__32085_32089 = G__32106;
count__32086_32090 = G__32107;
i__32087_32091 = G__32108;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16318__auto__ = goog.require__;
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__32109__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32109 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32110__i = 0, G__32110__a = new Array(arguments.length -  0);
while (G__32110__i < G__32110__a.length) {G__32110__a[G__32110__i] = arguments[G__32110__i + 0]; ++G__32110__i;}
  args = new cljs.core.IndexedSeq(G__32110__a,0);
} 
return G__32109__delegate.call(this,args);};
G__32109.cljs$lang$maxFixedArity = 0;
G__32109.cljs$lang$applyTo = (function (arglist__32111){
var args = cljs.core.seq(arglist__32111);
return G__32109__delegate(args);
});
G__32109.cljs$core$IFn$_invoke$arity$variadic = G__32109__delegate;
return G__32109;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32113 = cljs.core._EQ_;
var expr__32114 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32113.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32114))){
var path_parts = ((function (pred__32113,expr__32114){
return (function (p1__32112_SHARP_){
return clojure.string.split.call(null,p1__32112_SHARP_,/[\/\\]/);
});})(pred__32113,expr__32114))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__32113,expr__32114){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(clojure.string.join.call(null,"/",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [".","..",request_url], null)));
}catch (e32116){if((e32116 instanceof Error)){
var e = e32116;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32116;

}
}})());
});
;})(path_parts,sep,root,pred__32113,expr__32114))
} else {
if(cljs.core.truth_(pred__32113.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32114))){
return ((function (pred__32113,expr__32114){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__32113,expr__32114){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__32113,expr__32114))
);

return deferred.addErrback(((function (deferred,pred__32113,expr__32114){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__32113,expr__32114))
);
});
;})(pred__32113,expr__32114))
} else {
return ((function (pred__32113,expr__32114){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32113,expr__32114))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32117,callback){
var map__32120 = p__32117;
var map__32120__$1 = ((((!((map__32120 == null)))?((((map__32120.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32120.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32120):map__32120);
var file_msg = map__32120__$1;
var request_url = cljs.core.get.call(null,map__32120__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__32120,map__32120__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32120,map__32120__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__){
return (function (state_32144){
var state_val_32145 = (state_32144[(1)]);
if((state_val_32145 === (7))){
var inst_32140 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
var statearr_32146_32166 = state_32144__$1;
(statearr_32146_32166[(2)] = inst_32140);

(statearr_32146_32166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (1))){
var state_32144__$1 = state_32144;
var statearr_32147_32167 = state_32144__$1;
(statearr_32147_32167[(2)] = null);

(statearr_32147_32167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (4))){
var inst_32124 = (state_32144[(7)]);
var inst_32124__$1 = (state_32144[(2)]);
var state_32144__$1 = (function (){var statearr_32148 = state_32144;
(statearr_32148[(7)] = inst_32124__$1);

return statearr_32148;
})();
if(cljs.core.truth_(inst_32124__$1)){
var statearr_32149_32168 = state_32144__$1;
(statearr_32149_32168[(1)] = (5));

} else {
var statearr_32150_32169 = state_32144__$1;
(statearr_32150_32169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (6))){
var state_32144__$1 = state_32144;
var statearr_32151_32170 = state_32144__$1;
(statearr_32151_32170[(2)] = null);

(statearr_32151_32170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (3))){
var inst_32142 = (state_32144[(2)]);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32144__$1,inst_32142);
} else {
if((state_val_32145 === (2))){
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32144__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32145 === (11))){
var inst_32136 = (state_32144[(2)]);
var state_32144__$1 = (function (){var statearr_32152 = state_32144;
(statearr_32152[(8)] = inst_32136);

return statearr_32152;
})();
var statearr_32153_32171 = state_32144__$1;
(statearr_32153_32171[(2)] = null);

(statearr_32153_32171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (9))){
var inst_32130 = (state_32144[(9)]);
var inst_32128 = (state_32144[(10)]);
var inst_32132 = inst_32130.call(null,inst_32128);
var state_32144__$1 = state_32144;
var statearr_32154_32172 = state_32144__$1;
(statearr_32154_32172[(2)] = inst_32132);

(statearr_32154_32172[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (5))){
var inst_32124 = (state_32144[(7)]);
var inst_32126 = figwheel.client.file_reloading.blocking_load.call(null,inst_32124);
var state_32144__$1 = state_32144;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32144__$1,(8),inst_32126);
} else {
if((state_val_32145 === (10))){
var inst_32128 = (state_32144[(10)]);
var inst_32134 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32128);
var state_32144__$1 = state_32144;
var statearr_32155_32173 = state_32144__$1;
(statearr_32155_32173[(2)] = inst_32134);

(statearr_32155_32173[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32145 === (8))){
var inst_32124 = (state_32144[(7)]);
var inst_32130 = (state_32144[(9)]);
var inst_32128 = (state_32144[(2)]);
var inst_32129 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32130__$1 = cljs.core.get.call(null,inst_32129,inst_32124);
var state_32144__$1 = (function (){var statearr_32156 = state_32144;
(statearr_32156[(9)] = inst_32130__$1);

(statearr_32156[(10)] = inst_32128);

return statearr_32156;
})();
if(cljs.core.truth_(inst_32130__$1)){
var statearr_32157_32174 = state_32144__$1;
(statearr_32157_32174[(1)] = (9));

} else {
var statearr_32158_32175 = state_32144__$1;
(statearr_32158_32175[(1)] = (10));

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
});})(c__19398__auto__))
;
return ((function (switch__19333__auto__,c__19398__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19334__auto__ = null;
var figwheel$client$file_reloading$state_machine__19334__auto____0 = (function (){
var statearr_32162 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32162[(0)] = figwheel$client$file_reloading$state_machine__19334__auto__);

(statearr_32162[(1)] = (1));

return statearr_32162;
});
var figwheel$client$file_reloading$state_machine__19334__auto____1 = (function (state_32144){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_32144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e32163){if((e32163 instanceof Object)){
var ex__19337__auto__ = e32163;
var statearr_32164_32176 = state_32144;
(statearr_32164_32176[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32177 = state_32144;
state_32144 = G__32177;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19334__auto__ = function(state_32144){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19334__auto____1.call(this,state_32144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19334__auto____0;
figwheel$client$file_reloading$state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19334__auto____1;
return figwheel$client$file_reloading$state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__))
})();
var state__19400__auto__ = (function (){var statearr_32165 = f__19399__auto__.call(null);
(statearr_32165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_32165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__))
);

return c__19398__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__32178,callback){
var map__32181 = p__32178;
var map__32181__$1 = ((((!((map__32181 == null)))?((((map__32181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32181):map__32181);
var file_msg = map__32181__$1;
var namespace = cljs.core.get.call(null,map__32181__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__32181,map__32181__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__32181,map__32181__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__32183){
var map__32186 = p__32183;
var map__32186__$1 = ((((!((map__32186 == null)))?((((map__32186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32186):map__32186);
var file_msg = map__32186__$1;
var namespace = cljs.core.get.call(null,map__32186__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16306__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16306__auto__){
var or__16318__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
var or__16318__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16318__auto____$1)){
return or__16318__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16306__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__32188,callback){
var map__32191 = p__32188;
var map__32191__$1 = ((((!((map__32191 == null)))?((((map__32191.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32191.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32191):map__32191);
var file_msg = map__32191__$1;
var request_url = cljs.core.get.call(null,map__32191__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__32191__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19398__auto___32279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___32279,out){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___32279,out){
return (function (state_32261){
var state_val_32262 = (state_32261[(1)]);
if((state_val_32262 === (1))){
var inst_32239 = cljs.core.nth.call(null,files,(0),null);
var inst_32240 = cljs.core.nthnext.call(null,files,(1));
var inst_32241 = files;
var state_32261__$1 = (function (){var statearr_32263 = state_32261;
(statearr_32263[(7)] = inst_32240);

(statearr_32263[(8)] = inst_32241);

(statearr_32263[(9)] = inst_32239);

return statearr_32263;
})();
var statearr_32264_32280 = state_32261__$1;
(statearr_32264_32280[(2)] = null);

(statearr_32264_32280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (2))){
var inst_32244 = (state_32261[(10)]);
var inst_32241 = (state_32261[(8)]);
var inst_32244__$1 = cljs.core.nth.call(null,inst_32241,(0),null);
var inst_32245 = cljs.core.nthnext.call(null,inst_32241,(1));
var inst_32246 = (inst_32244__$1 == null);
var inst_32247 = cljs.core.not.call(null,inst_32246);
var state_32261__$1 = (function (){var statearr_32265 = state_32261;
(statearr_32265[(10)] = inst_32244__$1);

(statearr_32265[(11)] = inst_32245);

return statearr_32265;
})();
if(inst_32247){
var statearr_32266_32281 = state_32261__$1;
(statearr_32266_32281[(1)] = (4));

} else {
var statearr_32267_32282 = state_32261__$1;
(statearr_32267_32282[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (3))){
var inst_32259 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32261__$1,inst_32259);
} else {
if((state_val_32262 === (4))){
var inst_32244 = (state_32261[(10)]);
var inst_32249 = figwheel.client.file_reloading.reload_js_file.call(null,inst_32244);
var state_32261__$1 = state_32261;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32261__$1,(7),inst_32249);
} else {
if((state_val_32262 === (5))){
var inst_32255 = cljs.core.async.close_BANG_.call(null,out);
var state_32261__$1 = state_32261;
var statearr_32268_32283 = state_32261__$1;
(statearr_32268_32283[(2)] = inst_32255);

(statearr_32268_32283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (6))){
var inst_32257 = (state_32261[(2)]);
var state_32261__$1 = state_32261;
var statearr_32269_32284 = state_32261__$1;
(statearr_32269_32284[(2)] = inst_32257);

(statearr_32269_32284[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32262 === (7))){
var inst_32245 = (state_32261[(11)]);
var inst_32251 = (state_32261[(2)]);
var inst_32252 = cljs.core.async.put_BANG_.call(null,out,inst_32251);
var inst_32241 = inst_32245;
var state_32261__$1 = (function (){var statearr_32270 = state_32261;
(statearr_32270[(12)] = inst_32252);

(statearr_32270[(8)] = inst_32241);

return statearr_32270;
})();
var statearr_32271_32285 = state_32261__$1;
(statearr_32271_32285[(2)] = null);

(statearr_32271_32285[(1)] = (2));


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
});})(c__19398__auto___32279,out))
;
return ((function (switch__19333__auto__,c__19398__auto___32279,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto____0 = (function (){
var statearr_32275 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32275[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto__);

(statearr_32275[(1)] = (1));

return statearr_32275;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto____1 = (function (state_32261){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_32261);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e32276){if((e32276 instanceof Object)){
var ex__19337__auto__ = e32276;
var statearr_32277_32286 = state_32261;
(statearr_32277_32286[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32261);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32287 = state_32261;
state_32261 = G__32287;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto__ = function(state_32261){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto____1.call(this,state_32261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___32279,out))
})();
var state__19400__auto__ = (function (){var statearr_32278 = f__19399__auto__.call(null);
(statearr_32278[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___32279);

return statearr_32278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___32279,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__32288,opts){
var map__32292 = p__32288;
var map__32292__$1 = ((((!((map__32292 == null)))?((((map__32292.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32292.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32292):map__32292);
var eval_body__$1 = cljs.core.get.call(null,map__32292__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__32292__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16306__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16306__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16306__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e32294){var e = e32294;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__32295_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32295_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__32300){
var vec__32301 = p__32300;
var k = cljs.core.nth.call(null,vec__32301,(0),null);
var v = cljs.core.nth.call(null,vec__32301,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__32302){
var vec__32303 = p__32302;
var k = cljs.core.nth.call(null,vec__32303,(0),null);
var v = cljs.core.nth.call(null,vec__32303,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__32307,p__32308){
var map__32555 = p__32307;
var map__32555__$1 = ((((!((map__32555 == null)))?((((map__32555.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32555.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32555):map__32555);
var opts = map__32555__$1;
var before_jsload = cljs.core.get.call(null,map__32555__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__32555__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__32555__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__32556 = p__32308;
var map__32556__$1 = ((((!((map__32556 == null)))?((((map__32556.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32556.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32556):map__32556);
var msg = map__32556__$1;
var files = cljs.core.get.call(null,map__32556__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__32556__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__32556__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_32709){
var state_val_32710 = (state_32709[(1)]);
if((state_val_32710 === (7))){
var inst_32572 = (state_32709[(7)]);
var inst_32573 = (state_32709[(8)]);
var inst_32571 = (state_32709[(9)]);
var inst_32570 = (state_32709[(10)]);
var inst_32578 = cljs.core._nth.call(null,inst_32571,inst_32573);
var inst_32579 = figwheel.client.file_reloading.eval_body.call(null,inst_32578,opts);
var inst_32580 = (inst_32573 + (1));
var tmp32711 = inst_32572;
var tmp32712 = inst_32571;
var tmp32713 = inst_32570;
var inst_32570__$1 = tmp32713;
var inst_32571__$1 = tmp32712;
var inst_32572__$1 = tmp32711;
var inst_32573__$1 = inst_32580;
var state_32709__$1 = (function (){var statearr_32714 = state_32709;
(statearr_32714[(11)] = inst_32579);

(statearr_32714[(7)] = inst_32572__$1);

(statearr_32714[(8)] = inst_32573__$1);

(statearr_32714[(9)] = inst_32571__$1);

(statearr_32714[(10)] = inst_32570__$1);

return statearr_32714;
})();
var statearr_32715_32801 = state_32709__$1;
(statearr_32715_32801[(2)] = null);

(statearr_32715_32801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (20))){
var inst_32613 = (state_32709[(12)]);
var inst_32621 = figwheel.client.file_reloading.sort_files.call(null,inst_32613);
var state_32709__$1 = state_32709;
var statearr_32716_32802 = state_32709__$1;
(statearr_32716_32802[(2)] = inst_32621);

(statearr_32716_32802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (27))){
var state_32709__$1 = state_32709;
var statearr_32717_32803 = state_32709__$1;
(statearr_32717_32803[(2)] = null);

(statearr_32717_32803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (1))){
var inst_32562 = (state_32709[(13)]);
var inst_32559 = before_jsload.call(null,files);
var inst_32560 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_32561 = (function (){return ((function (inst_32562,inst_32559,inst_32560,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32304_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32304_SHARP_);
});
;})(inst_32562,inst_32559,inst_32560,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32562__$1 = cljs.core.filter.call(null,inst_32561,files);
var inst_32563 = cljs.core.not_empty.call(null,inst_32562__$1);
var state_32709__$1 = (function (){var statearr_32718 = state_32709;
(statearr_32718[(13)] = inst_32562__$1);

(statearr_32718[(14)] = inst_32559);

(statearr_32718[(15)] = inst_32560);

return statearr_32718;
})();
if(cljs.core.truth_(inst_32563)){
var statearr_32719_32804 = state_32709__$1;
(statearr_32719_32804[(1)] = (2));

} else {
var statearr_32720_32805 = state_32709__$1;
(statearr_32720_32805[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (24))){
var state_32709__$1 = state_32709;
var statearr_32721_32806 = state_32709__$1;
(statearr_32721_32806[(2)] = null);

(statearr_32721_32806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (39))){
var inst_32663 = (state_32709[(16)]);
var state_32709__$1 = state_32709;
var statearr_32722_32807 = state_32709__$1;
(statearr_32722_32807[(2)] = inst_32663);

(statearr_32722_32807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (46))){
var inst_32704 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32723_32808 = state_32709__$1;
(statearr_32723_32808[(2)] = inst_32704);

(statearr_32723_32808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (4))){
var inst_32607 = (state_32709[(2)]);
var inst_32608 = cljs.core.List.EMPTY;
var inst_32609 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_32608);
var inst_32610 = (function (){return ((function (inst_32607,inst_32608,inst_32609,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32305_SHARP_){
var and__16306__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__32305_SHARP_);
if(cljs.core.truth_(and__16306__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__32305_SHARP_));
} else {
return and__16306__auto__;
}
});
;})(inst_32607,inst_32608,inst_32609,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32611 = cljs.core.filter.call(null,inst_32610,files);
var inst_32612 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_32613 = cljs.core.concat.call(null,inst_32611,inst_32612);
var state_32709__$1 = (function (){var statearr_32724 = state_32709;
(statearr_32724[(12)] = inst_32613);

(statearr_32724[(17)] = inst_32609);

(statearr_32724[(18)] = inst_32607);

return statearr_32724;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_32725_32809 = state_32709__$1;
(statearr_32725_32809[(1)] = (16));

} else {
var statearr_32726_32810 = state_32709__$1;
(statearr_32726_32810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (15))){
var inst_32597 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32727_32811 = state_32709__$1;
(statearr_32727_32811[(2)] = inst_32597);

(statearr_32727_32811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (21))){
var inst_32623 = (state_32709[(19)]);
var inst_32623__$1 = (state_32709[(2)]);
var inst_32624 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32623__$1);
var state_32709__$1 = (function (){var statearr_32728 = state_32709;
(statearr_32728[(19)] = inst_32623__$1);

return statearr_32728;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32709__$1,(22),inst_32624);
} else {
if((state_val_32710 === (31))){
var inst_32707 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32709__$1,inst_32707);
} else {
if((state_val_32710 === (32))){
var inst_32663 = (state_32709[(16)]);
var inst_32668 = inst_32663.cljs$lang$protocol_mask$partition0$;
var inst_32669 = (inst_32668 & (64));
var inst_32670 = inst_32663.cljs$core$ISeq$;
var inst_32671 = (inst_32669) || (inst_32670);
var state_32709__$1 = state_32709;
if(cljs.core.truth_(inst_32671)){
var statearr_32729_32812 = state_32709__$1;
(statearr_32729_32812[(1)] = (35));

} else {
var statearr_32730_32813 = state_32709__$1;
(statearr_32730_32813[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (40))){
var inst_32684 = (state_32709[(20)]);
var inst_32683 = (state_32709[(2)]);
var inst_32684__$1 = cljs.core.get.call(null,inst_32683,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32685 = cljs.core.get.call(null,inst_32683,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32686 = cljs.core.not_empty.call(null,inst_32684__$1);
var state_32709__$1 = (function (){var statearr_32731 = state_32709;
(statearr_32731[(20)] = inst_32684__$1);

(statearr_32731[(21)] = inst_32685);

return statearr_32731;
})();
if(cljs.core.truth_(inst_32686)){
var statearr_32732_32814 = state_32709__$1;
(statearr_32732_32814[(1)] = (41));

} else {
var statearr_32733_32815 = state_32709__$1;
(statearr_32733_32815[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (33))){
var state_32709__$1 = state_32709;
var statearr_32734_32816 = state_32709__$1;
(statearr_32734_32816[(2)] = false);

(statearr_32734_32816[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (13))){
var inst_32583 = (state_32709[(22)]);
var inst_32587 = cljs.core.chunk_first.call(null,inst_32583);
var inst_32588 = cljs.core.chunk_rest.call(null,inst_32583);
var inst_32589 = cljs.core.count.call(null,inst_32587);
var inst_32570 = inst_32588;
var inst_32571 = inst_32587;
var inst_32572 = inst_32589;
var inst_32573 = (0);
var state_32709__$1 = (function (){var statearr_32735 = state_32709;
(statearr_32735[(7)] = inst_32572);

(statearr_32735[(8)] = inst_32573);

(statearr_32735[(9)] = inst_32571);

(statearr_32735[(10)] = inst_32570);

return statearr_32735;
})();
var statearr_32736_32817 = state_32709__$1;
(statearr_32736_32817[(2)] = null);

(statearr_32736_32817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (22))){
var inst_32631 = (state_32709[(23)]);
var inst_32627 = (state_32709[(24)]);
var inst_32626 = (state_32709[(25)]);
var inst_32623 = (state_32709[(19)]);
var inst_32626__$1 = (state_32709[(2)]);
var inst_32627__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32626__$1);
var inst_32628 = (function (){var all_files = inst_32623;
var res_SINGLEQUOTE_ = inst_32626__$1;
var res = inst_32627__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_32631,inst_32627,inst_32626,inst_32623,inst_32626__$1,inst_32627__$1,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__32306_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__32306_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_32631,inst_32627,inst_32626,inst_32623,inst_32626__$1,inst_32627__$1,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32629 = cljs.core.filter.call(null,inst_32628,inst_32626__$1);
var inst_32630 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_32631__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32630);
var inst_32632 = cljs.core.not_empty.call(null,inst_32631__$1);
var state_32709__$1 = (function (){var statearr_32737 = state_32709;
(statearr_32737[(23)] = inst_32631__$1);

(statearr_32737[(24)] = inst_32627__$1);

(statearr_32737[(25)] = inst_32626__$1);

(statearr_32737[(26)] = inst_32629);

return statearr_32737;
})();
if(cljs.core.truth_(inst_32632)){
var statearr_32738_32818 = state_32709__$1;
(statearr_32738_32818[(1)] = (23));

} else {
var statearr_32739_32819 = state_32709__$1;
(statearr_32739_32819[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (36))){
var state_32709__$1 = state_32709;
var statearr_32740_32820 = state_32709__$1;
(statearr_32740_32820[(2)] = false);

(statearr_32740_32820[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (41))){
var inst_32684 = (state_32709[(20)]);
var inst_32688 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_32689 = cljs.core.map.call(null,inst_32688,inst_32684);
var inst_32690 = cljs.core.pr_str.call(null,inst_32689);
var inst_32691 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32690)].join('');
var inst_32692 = figwheel.client.utils.log.call(null,inst_32691);
var state_32709__$1 = state_32709;
var statearr_32741_32821 = state_32709__$1;
(statearr_32741_32821[(2)] = inst_32692);

(statearr_32741_32821[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (43))){
var inst_32685 = (state_32709[(21)]);
var inst_32695 = (state_32709[(2)]);
var inst_32696 = cljs.core.not_empty.call(null,inst_32685);
var state_32709__$1 = (function (){var statearr_32742 = state_32709;
(statearr_32742[(27)] = inst_32695);

return statearr_32742;
})();
if(cljs.core.truth_(inst_32696)){
var statearr_32743_32822 = state_32709__$1;
(statearr_32743_32822[(1)] = (44));

} else {
var statearr_32744_32823 = state_32709__$1;
(statearr_32744_32823[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (29))){
var inst_32631 = (state_32709[(23)]);
var inst_32627 = (state_32709[(24)]);
var inst_32663 = (state_32709[(16)]);
var inst_32626 = (state_32709[(25)]);
var inst_32629 = (state_32709[(26)]);
var inst_32623 = (state_32709[(19)]);
var inst_32659 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32662 = (function (){var all_files = inst_32623;
var res_SINGLEQUOTE_ = inst_32626;
var res = inst_32627;
var files_not_loaded = inst_32629;
var dependencies_that_loaded = inst_32631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32663,inst_32626,inst_32629,inst_32623,inst_32659,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32661){
var map__32745 = p__32661;
var map__32745__$1 = ((((!((map__32745 == null)))?((((map__32745.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32745.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32745):map__32745);
var namespace = cljs.core.get.call(null,map__32745__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32663,inst_32626,inst_32629,inst_32623,inst_32659,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32663__$1 = cljs.core.group_by.call(null,inst_32662,inst_32629);
var inst_32665 = (inst_32663__$1 == null);
var inst_32666 = cljs.core.not.call(null,inst_32665);
var state_32709__$1 = (function (){var statearr_32747 = state_32709;
(statearr_32747[(16)] = inst_32663__$1);

(statearr_32747[(28)] = inst_32659);

return statearr_32747;
})();
if(inst_32666){
var statearr_32748_32824 = state_32709__$1;
(statearr_32748_32824[(1)] = (32));

} else {
var statearr_32749_32825 = state_32709__$1;
(statearr_32749_32825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (44))){
var inst_32685 = (state_32709[(21)]);
var inst_32698 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32685);
var inst_32699 = cljs.core.pr_str.call(null,inst_32698);
var inst_32700 = [cljs.core.str("not required: "),cljs.core.str(inst_32699)].join('');
var inst_32701 = figwheel.client.utils.log.call(null,inst_32700);
var state_32709__$1 = state_32709;
var statearr_32750_32826 = state_32709__$1;
(statearr_32750_32826[(2)] = inst_32701);

(statearr_32750_32826[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (6))){
var inst_32604 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32751_32827 = state_32709__$1;
(statearr_32751_32827[(2)] = inst_32604);

(statearr_32751_32827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (28))){
var inst_32629 = (state_32709[(26)]);
var inst_32656 = (state_32709[(2)]);
var inst_32657 = cljs.core.not_empty.call(null,inst_32629);
var state_32709__$1 = (function (){var statearr_32752 = state_32709;
(statearr_32752[(29)] = inst_32656);

return statearr_32752;
})();
if(cljs.core.truth_(inst_32657)){
var statearr_32753_32828 = state_32709__$1;
(statearr_32753_32828[(1)] = (29));

} else {
var statearr_32754_32829 = state_32709__$1;
(statearr_32754_32829[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (25))){
var inst_32627 = (state_32709[(24)]);
var inst_32643 = (state_32709[(2)]);
var inst_32644 = cljs.core.not_empty.call(null,inst_32627);
var state_32709__$1 = (function (){var statearr_32755 = state_32709;
(statearr_32755[(30)] = inst_32643);

return statearr_32755;
})();
if(cljs.core.truth_(inst_32644)){
var statearr_32756_32830 = state_32709__$1;
(statearr_32756_32830[(1)] = (26));

} else {
var statearr_32757_32831 = state_32709__$1;
(statearr_32757_32831[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (34))){
var inst_32678 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
if(cljs.core.truth_(inst_32678)){
var statearr_32758_32832 = state_32709__$1;
(statearr_32758_32832[(1)] = (38));

} else {
var statearr_32759_32833 = state_32709__$1;
(statearr_32759_32833[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (17))){
var state_32709__$1 = state_32709;
var statearr_32760_32834 = state_32709__$1;
(statearr_32760_32834[(2)] = recompile_dependents);

(statearr_32760_32834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (3))){
var state_32709__$1 = state_32709;
var statearr_32761_32835 = state_32709__$1;
(statearr_32761_32835[(2)] = null);

(statearr_32761_32835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (12))){
var inst_32600 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32762_32836 = state_32709__$1;
(statearr_32762_32836[(2)] = inst_32600);

(statearr_32762_32836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (2))){
var inst_32562 = (state_32709[(13)]);
var inst_32569 = cljs.core.seq.call(null,inst_32562);
var inst_32570 = inst_32569;
var inst_32571 = null;
var inst_32572 = (0);
var inst_32573 = (0);
var state_32709__$1 = (function (){var statearr_32763 = state_32709;
(statearr_32763[(7)] = inst_32572);

(statearr_32763[(8)] = inst_32573);

(statearr_32763[(9)] = inst_32571);

(statearr_32763[(10)] = inst_32570);

return statearr_32763;
})();
var statearr_32764_32837 = state_32709__$1;
(statearr_32764_32837[(2)] = null);

(statearr_32764_32837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (23))){
var inst_32631 = (state_32709[(23)]);
var inst_32627 = (state_32709[(24)]);
var inst_32626 = (state_32709[(25)]);
var inst_32629 = (state_32709[(26)]);
var inst_32623 = (state_32709[(19)]);
var inst_32634 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_32636 = (function (){var all_files = inst_32623;
var res_SINGLEQUOTE_ = inst_32626;
var res = inst_32627;
var files_not_loaded = inst_32629;
var dependencies_that_loaded = inst_32631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32626,inst_32629,inst_32623,inst_32634,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32635){
var map__32765 = p__32635;
var map__32765__$1 = ((((!((map__32765 == null)))?((((map__32765.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32765.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32765):map__32765);
var request_url = cljs.core.get.call(null,map__32765__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32626,inst_32629,inst_32623,inst_32634,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32637 = cljs.core.reverse.call(null,inst_32631);
var inst_32638 = cljs.core.map.call(null,inst_32636,inst_32637);
var inst_32639 = cljs.core.pr_str.call(null,inst_32638);
var inst_32640 = figwheel.client.utils.log.call(null,inst_32639);
var state_32709__$1 = (function (){var statearr_32767 = state_32709;
(statearr_32767[(31)] = inst_32634);

return statearr_32767;
})();
var statearr_32768_32838 = state_32709__$1;
(statearr_32768_32838[(2)] = inst_32640);

(statearr_32768_32838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (35))){
var state_32709__$1 = state_32709;
var statearr_32769_32839 = state_32709__$1;
(statearr_32769_32839[(2)] = true);

(statearr_32769_32839[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (19))){
var inst_32613 = (state_32709[(12)]);
var inst_32619 = figwheel.client.file_reloading.expand_files.call(null,inst_32613);
var state_32709__$1 = state_32709;
var statearr_32770_32840 = state_32709__$1;
(statearr_32770_32840[(2)] = inst_32619);

(statearr_32770_32840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (11))){
var state_32709__$1 = state_32709;
var statearr_32771_32841 = state_32709__$1;
(statearr_32771_32841[(2)] = null);

(statearr_32771_32841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (9))){
var inst_32602 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32772_32842 = state_32709__$1;
(statearr_32772_32842[(2)] = inst_32602);

(statearr_32772_32842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (5))){
var inst_32572 = (state_32709[(7)]);
var inst_32573 = (state_32709[(8)]);
var inst_32575 = (inst_32573 < inst_32572);
var inst_32576 = inst_32575;
var state_32709__$1 = state_32709;
if(cljs.core.truth_(inst_32576)){
var statearr_32773_32843 = state_32709__$1;
(statearr_32773_32843[(1)] = (7));

} else {
var statearr_32774_32844 = state_32709__$1;
(statearr_32774_32844[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (14))){
var inst_32583 = (state_32709[(22)]);
var inst_32592 = cljs.core.first.call(null,inst_32583);
var inst_32593 = figwheel.client.file_reloading.eval_body.call(null,inst_32592,opts);
var inst_32594 = cljs.core.next.call(null,inst_32583);
var inst_32570 = inst_32594;
var inst_32571 = null;
var inst_32572 = (0);
var inst_32573 = (0);
var state_32709__$1 = (function (){var statearr_32775 = state_32709;
(statearr_32775[(7)] = inst_32572);

(statearr_32775[(32)] = inst_32593);

(statearr_32775[(8)] = inst_32573);

(statearr_32775[(9)] = inst_32571);

(statearr_32775[(10)] = inst_32570);

return statearr_32775;
})();
var statearr_32776_32845 = state_32709__$1;
(statearr_32776_32845[(2)] = null);

(statearr_32776_32845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (45))){
var state_32709__$1 = state_32709;
var statearr_32777_32846 = state_32709__$1;
(statearr_32777_32846[(2)] = null);

(statearr_32777_32846[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (26))){
var inst_32631 = (state_32709[(23)]);
var inst_32627 = (state_32709[(24)]);
var inst_32626 = (state_32709[(25)]);
var inst_32629 = (state_32709[(26)]);
var inst_32623 = (state_32709[(19)]);
var inst_32646 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32648 = (function (){var all_files = inst_32623;
var res_SINGLEQUOTE_ = inst_32626;
var res = inst_32627;
var files_not_loaded = inst_32629;
var dependencies_that_loaded = inst_32631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32626,inst_32629,inst_32623,inst_32646,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__32647){
var map__32778 = p__32647;
var map__32778__$1 = ((((!((map__32778 == null)))?((((map__32778.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32778.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32778):map__32778);
var namespace = cljs.core.get.call(null,map__32778__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32778__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32626,inst_32629,inst_32623,inst_32646,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32649 = cljs.core.map.call(null,inst_32648,inst_32627);
var inst_32650 = cljs.core.pr_str.call(null,inst_32649);
var inst_32651 = figwheel.client.utils.log.call(null,inst_32650);
var inst_32652 = (function (){var all_files = inst_32623;
var res_SINGLEQUOTE_ = inst_32626;
var res = inst_32627;
var files_not_loaded = inst_32629;
var dependencies_that_loaded = inst_32631;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32626,inst_32629,inst_32623,inst_32646,inst_32648,inst_32649,inst_32650,inst_32651,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_32631,inst_32627,inst_32626,inst_32629,inst_32623,inst_32646,inst_32648,inst_32649,inst_32650,inst_32651,state_val_32710,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_32653 = setTimeout(inst_32652,(10));
var state_32709__$1 = (function (){var statearr_32780 = state_32709;
(statearr_32780[(33)] = inst_32646);

(statearr_32780[(34)] = inst_32651);

return statearr_32780;
})();
var statearr_32781_32847 = state_32709__$1;
(statearr_32781_32847[(2)] = inst_32653);

(statearr_32781_32847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (16))){
var state_32709__$1 = state_32709;
var statearr_32782_32848 = state_32709__$1;
(statearr_32782_32848[(2)] = reload_dependents);

(statearr_32782_32848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (38))){
var inst_32663 = (state_32709[(16)]);
var inst_32680 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32663);
var state_32709__$1 = state_32709;
var statearr_32783_32849 = state_32709__$1;
(statearr_32783_32849[(2)] = inst_32680);

(statearr_32783_32849[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (30))){
var state_32709__$1 = state_32709;
var statearr_32784_32850 = state_32709__$1;
(statearr_32784_32850[(2)] = null);

(statearr_32784_32850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (10))){
var inst_32583 = (state_32709[(22)]);
var inst_32585 = cljs.core.chunked_seq_QMARK_.call(null,inst_32583);
var state_32709__$1 = state_32709;
if(inst_32585){
var statearr_32785_32851 = state_32709__$1;
(statearr_32785_32851[(1)] = (13));

} else {
var statearr_32786_32852 = state_32709__$1;
(statearr_32786_32852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (18))){
var inst_32617 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
if(cljs.core.truth_(inst_32617)){
var statearr_32787_32853 = state_32709__$1;
(statearr_32787_32853[(1)] = (19));

} else {
var statearr_32788_32854 = state_32709__$1;
(statearr_32788_32854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (42))){
var state_32709__$1 = state_32709;
var statearr_32789_32855 = state_32709__$1;
(statearr_32789_32855[(2)] = null);

(statearr_32789_32855[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (37))){
var inst_32675 = (state_32709[(2)]);
var state_32709__$1 = state_32709;
var statearr_32790_32856 = state_32709__$1;
(statearr_32790_32856[(2)] = inst_32675);

(statearr_32790_32856[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32710 === (8))){
var inst_32583 = (state_32709[(22)]);
var inst_32570 = (state_32709[(10)]);
var inst_32583__$1 = cljs.core.seq.call(null,inst_32570);
var state_32709__$1 = (function (){var statearr_32791 = state_32709;
(statearr_32791[(22)] = inst_32583__$1);

return statearr_32791;
})();
if(inst_32583__$1){
var statearr_32792_32857 = state_32709__$1;
(statearr_32792_32857[(1)] = (10));

} else {
var statearr_32793_32858 = state_32709__$1;
(statearr_32793_32858[(1)] = (11));

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
}
});})(c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19333__auto__,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto____0 = (function (){
var statearr_32797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32797[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto__);

(statearr_32797[(1)] = (1));

return statearr_32797;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto____1 = (function (state_32709){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_32709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e32798){if((e32798 instanceof Object)){
var ex__19337__auto__ = e32798;
var statearr_32799_32859 = state_32709;
(statearr_32799_32859[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32860 = state_32709;
state_32709 = G__32860;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto__ = function(state_32709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto____1.call(this,state_32709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19400__auto__ = (function (){var statearr_32800 = f__19399__auto__.call(null);
(statearr_32800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_32800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__,map__32555,map__32555__$1,opts,before_jsload,on_jsload,reload_dependents,map__32556,map__32556__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19398__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32863,link){
var map__32866 = p__32863;
var map__32866__$1 = ((((!((map__32866 == null)))?((((map__32866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32866):map__32866);
var file = cljs.core.get.call(null,map__32866__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32866,map__32866__$1,file){
return (function (p1__32861_SHARP_,p2__32862_SHARP_){
if(cljs.core._EQ_.call(null,p1__32861_SHARP_,p2__32862_SHARP_)){
return p1__32861_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32866,map__32866__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32872){
var map__32873 = p__32872;
var map__32873__$1 = ((((!((map__32873 == null)))?((((map__32873.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32873.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32873):map__32873);
var match_length = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32873__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32868_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32868_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32875 = [];
var len__17376__auto___32878 = arguments.length;
var i__17377__auto___32879 = (0);
while(true){
if((i__17377__auto___32879 < len__17376__auto___32878)){
args32875.push((arguments[i__17377__auto___32879]));

var G__32880 = (i__17377__auto___32879 + (1));
i__17377__auto___32879 = G__32880;
continue;
} else {
}
break;
}

var G__32877 = args32875.length;
switch (G__32877) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32875.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__32882_SHARP_,p2__32883_SHARP_){
return cljs.core.assoc.call(null,p1__32882_SHARP_,cljs.core.get.call(null,p2__32883_SHARP_,key),p2__32883_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32884){
var map__32887 = p__32884;
var map__32887__$1 = ((((!((map__32887 == null)))?((((map__32887.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32887.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32887):map__32887);
var f_data = map__32887__$1;
var file = cljs.core.get.call(null,map__32887__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32889,files_msg){
var map__32896 = p__32889;
var map__32896__$1 = ((((!((map__32896 == null)))?((((map__32896.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32896.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32896):map__32896);
var opts = map__32896__$1;
var on_cssload = cljs.core.get.call(null,map__32896__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32898_32902 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32899_32903 = null;
var count__32900_32904 = (0);
var i__32901_32905 = (0);
while(true){
if((i__32901_32905 < count__32900_32904)){
var f_32906 = cljs.core._nth.call(null,chunk__32899_32903,i__32901_32905);
figwheel.client.file_reloading.reload_css_file.call(null,f_32906);

var G__32907 = seq__32898_32902;
var G__32908 = chunk__32899_32903;
var G__32909 = count__32900_32904;
var G__32910 = (i__32901_32905 + (1));
seq__32898_32902 = G__32907;
chunk__32899_32903 = G__32908;
count__32900_32904 = G__32909;
i__32901_32905 = G__32910;
continue;
} else {
var temp__4425__auto___32911 = cljs.core.seq.call(null,seq__32898_32902);
if(temp__4425__auto___32911){
var seq__32898_32912__$1 = temp__4425__auto___32911;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32898_32912__$1)){
var c__17121__auto___32913 = cljs.core.chunk_first.call(null,seq__32898_32912__$1);
var G__32914 = cljs.core.chunk_rest.call(null,seq__32898_32912__$1);
var G__32915 = c__17121__auto___32913;
var G__32916 = cljs.core.count.call(null,c__17121__auto___32913);
var G__32917 = (0);
seq__32898_32902 = G__32914;
chunk__32899_32903 = G__32915;
count__32900_32904 = G__32916;
i__32901_32905 = G__32917;
continue;
} else {
var f_32918 = cljs.core.first.call(null,seq__32898_32912__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32918);

var G__32919 = cljs.core.next.call(null,seq__32898_32912__$1);
var G__32920 = null;
var G__32921 = (0);
var G__32922 = (0);
seq__32898_32902 = G__32919;
chunk__32899_32903 = G__32920;
count__32900_32904 = G__32921;
i__32901_32905 = G__32922;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__32896,map__32896__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__32896,map__32896__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1445108533129