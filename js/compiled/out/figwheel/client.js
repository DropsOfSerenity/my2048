// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__30753 = cljs.core._EQ_;
var expr__30754 = (function (){var or__16318__auto__ = localStorage.getItem("figwheel_autoload");
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__30753.call(null,"true",expr__30754))){
return true;
} else {
if(cljs.core.truth_(pred__30753.call(null,"false",expr__30754))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__30754)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30756__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30756 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30757__i = 0, G__30757__a = new Array(arguments.length -  0);
while (G__30757__i < G__30757__a.length) {G__30757__a[G__30757__i] = arguments[G__30757__i + 0]; ++G__30757__i;}
  args = new cljs.core.IndexedSeq(G__30757__a,0);
} 
return G__30756__delegate.call(this,args);};
G__30756.cljs$lang$maxFixedArity = 0;
G__30756.cljs$lang$applyTo = (function (arglist__30758){
var args = cljs.core.seq(arglist__30758);
return G__30756__delegate(args);
});
G__30756.cljs$core$IFn$_invoke$arity$variadic = G__30756__delegate;
return G__30756;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30759){
var map__30762 = p__30759;
var map__30762__$1 = ((((!((map__30762 == null)))?((((map__30762.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30762.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30762):map__30762);
var message = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30762__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16318__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16318__auto__)){
return or__16318__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16306__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16306__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16306__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19398__auto___30924 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___30924,ch){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___30924,ch){
return (function (state_30893){
var state_val_30894 = (state_30893[(1)]);
if((state_val_30894 === (7))){
var inst_30889 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30895_30925 = state_30893__$1;
(statearr_30895_30925[(2)] = inst_30889);

(statearr_30895_30925[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (1))){
var state_30893__$1 = state_30893;
var statearr_30896_30926 = state_30893__$1;
(statearr_30896_30926[(2)] = null);

(statearr_30896_30926[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (4))){
var inst_30846 = (state_30893[(7)]);
var inst_30846__$1 = (state_30893[(2)]);
var state_30893__$1 = (function (){var statearr_30897 = state_30893;
(statearr_30897[(7)] = inst_30846__$1);

return statearr_30897;
})();
if(cljs.core.truth_(inst_30846__$1)){
var statearr_30898_30927 = state_30893__$1;
(statearr_30898_30927[(1)] = (5));

} else {
var statearr_30899_30928 = state_30893__$1;
(statearr_30899_30928[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (15))){
var inst_30853 = (state_30893[(8)]);
var inst_30868 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30853);
var inst_30869 = cljs.core.first.call(null,inst_30868);
var inst_30870 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30869);
var inst_30871 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_30870)].join('');
var inst_30872 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_30871);
var state_30893__$1 = state_30893;
var statearr_30900_30929 = state_30893__$1;
(statearr_30900_30929[(2)] = inst_30872);

(statearr_30900_30929[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (13))){
var inst_30877 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30901_30930 = state_30893__$1;
(statearr_30901_30930[(2)] = inst_30877);

(statearr_30901_30930[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (6))){
var state_30893__$1 = state_30893;
var statearr_30902_30931 = state_30893__$1;
(statearr_30902_30931[(2)] = null);

(statearr_30902_30931[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (17))){
var inst_30875 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30903_30932 = state_30893__$1;
(statearr_30903_30932[(2)] = inst_30875);

(statearr_30903_30932[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (3))){
var inst_30891 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30893__$1,inst_30891);
} else {
if((state_val_30894 === (12))){
var inst_30852 = (state_30893[(9)]);
var inst_30866 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30852,opts);
var state_30893__$1 = state_30893;
if(cljs.core.truth_(inst_30866)){
var statearr_30904_30933 = state_30893__$1;
(statearr_30904_30933[(1)] = (15));

} else {
var statearr_30905_30934 = state_30893__$1;
(statearr_30905_30934[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (2))){
var state_30893__$1 = state_30893;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30893__$1,(4),ch);
} else {
if((state_val_30894 === (11))){
var inst_30853 = (state_30893[(8)]);
var inst_30858 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30859 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30853);
var inst_30860 = cljs.core.async.timeout.call(null,(1000));
var inst_30861 = [inst_30859,inst_30860];
var inst_30862 = (new cljs.core.PersistentVector(null,2,(5),inst_30858,inst_30861,null));
var state_30893__$1 = state_30893;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30893__$1,(14),inst_30862);
} else {
if((state_val_30894 === (9))){
var inst_30853 = (state_30893[(8)]);
var inst_30879 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_30880 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30853);
var inst_30881 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30880);
var inst_30882 = [cljs.core.str("Not loading: "),cljs.core.str(inst_30881)].join('');
var inst_30883 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_30882);
var state_30893__$1 = (function (){var statearr_30906 = state_30893;
(statearr_30906[(10)] = inst_30879);

return statearr_30906;
})();
var statearr_30907_30935 = state_30893__$1;
(statearr_30907_30935[(2)] = inst_30883);

(statearr_30907_30935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (5))){
var inst_30846 = (state_30893[(7)]);
var inst_30848 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30849 = (new cljs.core.PersistentArrayMap(null,2,inst_30848,null));
var inst_30850 = (new cljs.core.PersistentHashSet(null,inst_30849,null));
var inst_30851 = figwheel.client.focus_msgs.call(null,inst_30850,inst_30846);
var inst_30852 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30851);
var inst_30853 = cljs.core.first.call(null,inst_30851);
var inst_30854 = figwheel.client.autoload_QMARK_.call(null);
var state_30893__$1 = (function (){var statearr_30908 = state_30893;
(statearr_30908[(8)] = inst_30853);

(statearr_30908[(9)] = inst_30852);

return statearr_30908;
})();
if(cljs.core.truth_(inst_30854)){
var statearr_30909_30936 = state_30893__$1;
(statearr_30909_30936[(1)] = (8));

} else {
var statearr_30910_30937 = state_30893__$1;
(statearr_30910_30937[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (14))){
var inst_30864 = (state_30893[(2)]);
var state_30893__$1 = state_30893;
var statearr_30911_30938 = state_30893__$1;
(statearr_30911_30938[(2)] = inst_30864);

(statearr_30911_30938[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (16))){
var state_30893__$1 = state_30893;
var statearr_30912_30939 = state_30893__$1;
(statearr_30912_30939[(2)] = null);

(statearr_30912_30939[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (10))){
var inst_30885 = (state_30893[(2)]);
var state_30893__$1 = (function (){var statearr_30913 = state_30893;
(statearr_30913[(11)] = inst_30885);

return statearr_30913;
})();
var statearr_30914_30940 = state_30893__$1;
(statearr_30914_30940[(2)] = null);

(statearr_30914_30940[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30894 === (8))){
var inst_30852 = (state_30893[(9)]);
var inst_30856 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30852,opts);
var state_30893__$1 = state_30893;
if(cljs.core.truth_(inst_30856)){
var statearr_30915_30941 = state_30893__$1;
(statearr_30915_30941[(1)] = (11));

} else {
var statearr_30916_30942 = state_30893__$1;
(statearr_30916_30942[(1)] = (12));

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
});})(c__19398__auto___30924,ch))
;
return ((function (switch__19333__auto__,c__19398__auto___30924,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19334__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19334__auto____0 = (function (){
var statearr_30920 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30920[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19334__auto__);

(statearr_30920[(1)] = (1));

return statearr_30920;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19334__auto____1 = (function (state_30893){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_30893);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e30921){if((e30921 instanceof Object)){
var ex__19337__auto__ = e30921;
var statearr_30922_30943 = state_30893;
(statearr_30922_30943[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30893);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30921;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30944 = state_30893;
state_30893 = G__30944;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19334__auto__ = function(state_30893){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19334__auto____1.call(this,state_30893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19334__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19334__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___30924,ch))
})();
var state__19400__auto__ = (function (){var statearr_30923 = f__19399__auto__.call(null);
(statearr_30923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___30924);

return statearr_30923;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___30924,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30945_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30945_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_30952 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30952){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30950 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30951 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30950,_STAR_print_newline_STAR_30951,base_path_30952){
return (function() { 
var G__30953__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30953 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30954__i = 0, G__30954__a = new Array(arguments.length -  0);
while (G__30954__i < G__30954__a.length) {G__30954__a[G__30954__i] = arguments[G__30954__i + 0]; ++G__30954__i;}
  args = new cljs.core.IndexedSeq(G__30954__a,0);
} 
return G__30953__delegate.call(this,args);};
G__30953.cljs$lang$maxFixedArity = 0;
G__30953.cljs$lang$applyTo = (function (arglist__30955){
var args = cljs.core.seq(arglist__30955);
return G__30953__delegate(args);
});
G__30953.cljs$core$IFn$_invoke$arity$variadic = G__30953__delegate;
return G__30953;
})()
;})(_STAR_print_fn_STAR_30950,_STAR_print_newline_STAR_30951,base_path_30952))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30951;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30950;
}}catch (e30949){if((e30949 instanceof Error)){
var e = e30949;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30952], null));
} else {
var e = e30949;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30952))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30956){
var map__30963 = p__30956;
var map__30963__$1 = ((((!((map__30963 == null)))?((((map__30963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30963):map__30963);
var opts = map__30963__$1;
var build_id = cljs.core.get.call(null,map__30963__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30963,map__30963__$1,opts,build_id){
return (function (p__30965){
var vec__30966 = p__30965;
var map__30967 = cljs.core.nth.call(null,vec__30966,(0),null);
var map__30967__$1 = ((((!((map__30967 == null)))?((((map__30967.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30967.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30967):map__30967);
var msg = map__30967__$1;
var msg_name = cljs.core.get.call(null,map__30967__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30966,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30966,map__30967,map__30967__$1,msg,msg_name,_,map__30963,map__30963__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30966,map__30967,map__30967__$1,msg,msg_name,_,map__30963,map__30963__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30963,map__30963__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30973){
var vec__30974 = p__30973;
var map__30975 = cljs.core.nth.call(null,vec__30974,(0),null);
var map__30975__$1 = ((((!((map__30975 == null)))?((((map__30975.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30975.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30975):map__30975);
var msg = map__30975__$1;
var msg_name = cljs.core.get.call(null,map__30975__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30974,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30977){
var map__30987 = p__30977;
var map__30987__$1 = ((((!((map__30987 == null)))?((((map__30987.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30987.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30987):map__30987);
var on_compile_warning = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30987__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30987,map__30987__$1,on_compile_warning,on_compile_fail){
return (function (p__30989){
var vec__30990 = p__30989;
var map__30991 = cljs.core.nth.call(null,vec__30990,(0),null);
var map__30991__$1 = ((((!((map__30991 == null)))?((((map__30991.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30991.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30991):map__30991);
var msg = map__30991__$1;
var msg_name = cljs.core.get.call(null,map__30991__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30990,(1));
var pred__30993 = cljs.core._EQ_;
var expr__30994 = msg_name;
if(cljs.core.truth_(pred__30993.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30994))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30993.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30994))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30987,map__30987__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__,msg_hist,msg_names,msg){
return (function (state_31210){
var state_val_31211 = (state_31210[(1)]);
if((state_val_31211 === (7))){
var inst_31134 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31134)){
var statearr_31212_31258 = state_31210__$1;
(statearr_31212_31258[(1)] = (8));

} else {
var statearr_31213_31259 = state_31210__$1;
(statearr_31213_31259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (20))){
var inst_31204 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31214_31260 = state_31210__$1;
(statearr_31214_31260[(2)] = inst_31204);

(statearr_31214_31260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (27))){
var inst_31200 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31215_31261 = state_31210__$1;
(statearr_31215_31261[(2)] = inst_31200);

(statearr_31215_31261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (1))){
var inst_31127 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31127)){
var statearr_31216_31262 = state_31210__$1;
(statearr_31216_31262[(1)] = (2));

} else {
var statearr_31217_31263 = state_31210__$1;
(statearr_31217_31263[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (24))){
var inst_31202 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31218_31264 = state_31210__$1;
(statearr_31218_31264[(2)] = inst_31202);

(statearr_31218_31264[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (4))){
var inst_31208 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31210__$1,inst_31208);
} else {
if((state_val_31211 === (15))){
var inst_31206 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31219_31265 = state_31210__$1;
(statearr_31219_31265[(2)] = inst_31206);

(statearr_31219_31265[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (21))){
var inst_31165 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31220_31266 = state_31210__$1;
(statearr_31220_31266[(2)] = inst_31165);

(statearr_31220_31266[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (31))){
var inst_31189 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31189)){
var statearr_31221_31267 = state_31210__$1;
(statearr_31221_31267[(1)] = (34));

} else {
var statearr_31222_31268 = state_31210__$1;
(statearr_31222_31268[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (32))){
var inst_31198 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31223_31269 = state_31210__$1;
(statearr_31223_31269[(2)] = inst_31198);

(statearr_31223_31269[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (33))){
var inst_31187 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31224_31270 = state_31210__$1;
(statearr_31224_31270[(2)] = inst_31187);

(statearr_31224_31270[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (13))){
var inst_31148 = figwheel.client.heads_up.clear.call(null);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(16),inst_31148);
} else {
if((state_val_31211 === (22))){
var inst_31169 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31170 = figwheel.client.heads_up.append_message.call(null,inst_31169);
var state_31210__$1 = state_31210;
var statearr_31225_31271 = state_31210__$1;
(statearr_31225_31271[(2)] = inst_31170);

(statearr_31225_31271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (36))){
var inst_31196 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31226_31272 = state_31210__$1;
(statearr_31226_31272[(2)] = inst_31196);

(statearr_31226_31272[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (29))){
var inst_31180 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31227_31273 = state_31210__$1;
(statearr_31227_31273[(2)] = inst_31180);

(statearr_31227_31273[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (6))){
var inst_31129 = (state_31210[(7)]);
var state_31210__$1 = state_31210;
var statearr_31228_31274 = state_31210__$1;
(statearr_31228_31274[(2)] = inst_31129);

(statearr_31228_31274[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (28))){
var inst_31176 = (state_31210[(2)]);
var inst_31177 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31178 = figwheel.client.heads_up.display_warning.call(null,inst_31177);
var state_31210__$1 = (function (){var statearr_31229 = state_31210;
(statearr_31229[(8)] = inst_31176);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(29),inst_31178);
} else {
if((state_val_31211 === (25))){
var inst_31174 = figwheel.client.heads_up.clear.call(null);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(28),inst_31174);
} else {
if((state_val_31211 === (34))){
var inst_31191 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(37),inst_31191);
} else {
if((state_val_31211 === (17))){
var inst_31156 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31230_31275 = state_31210__$1;
(statearr_31230_31275[(2)] = inst_31156);

(statearr_31230_31275[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (3))){
var inst_31146 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31146)){
var statearr_31231_31276 = state_31210__$1;
(statearr_31231_31276[(1)] = (13));

} else {
var statearr_31232_31277 = state_31210__$1;
(statearr_31232_31277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (12))){
var inst_31142 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31233_31278 = state_31210__$1;
(statearr_31233_31278[(2)] = inst_31142);

(statearr_31233_31278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (2))){
var inst_31129 = (state_31210[(7)]);
var inst_31129__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31210__$1 = (function (){var statearr_31234 = state_31210;
(statearr_31234[(7)] = inst_31129__$1);

return statearr_31234;
})();
if(cljs.core.truth_(inst_31129__$1)){
var statearr_31235_31279 = state_31210__$1;
(statearr_31235_31279[(1)] = (5));

} else {
var statearr_31236_31280 = state_31210__$1;
(statearr_31236_31280[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (23))){
var inst_31172 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31172)){
var statearr_31237_31281 = state_31210__$1;
(statearr_31237_31281[(1)] = (25));

} else {
var statearr_31238_31282 = state_31210__$1;
(statearr_31238_31282[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (35))){
var state_31210__$1 = state_31210;
var statearr_31239_31283 = state_31210__$1;
(statearr_31239_31283[(2)] = null);

(statearr_31239_31283[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (19))){
var inst_31167 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31167)){
var statearr_31240_31284 = state_31210__$1;
(statearr_31240_31284[(1)] = (22));

} else {
var statearr_31241_31285 = state_31210__$1;
(statearr_31241_31285[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (11))){
var inst_31138 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31242_31286 = state_31210__$1;
(statearr_31242_31286[(2)] = inst_31138);

(statearr_31242_31286[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (9))){
var inst_31140 = figwheel.client.heads_up.clear.call(null);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(12),inst_31140);
} else {
if((state_val_31211 === (5))){
var inst_31131 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31210__$1 = state_31210;
var statearr_31243_31287 = state_31210__$1;
(statearr_31243_31287[(2)] = inst_31131);

(statearr_31243_31287[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (14))){
var inst_31158 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31158)){
var statearr_31244_31288 = state_31210__$1;
(statearr_31244_31288[(1)] = (18));

} else {
var statearr_31245_31289 = state_31210__$1;
(statearr_31245_31289[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (26))){
var inst_31182 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31210__$1 = state_31210;
if(cljs.core.truth_(inst_31182)){
var statearr_31246_31290 = state_31210__$1;
(statearr_31246_31290[(1)] = (30));

} else {
var statearr_31247_31291 = state_31210__$1;
(statearr_31247_31291[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (16))){
var inst_31150 = (state_31210[(2)]);
var inst_31151 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31152 = figwheel.client.format_messages.call(null,inst_31151);
var inst_31153 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31154 = figwheel.client.heads_up.display_error.call(null,inst_31152,inst_31153);
var state_31210__$1 = (function (){var statearr_31248 = state_31210;
(statearr_31248[(9)] = inst_31150);

return statearr_31248;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(17),inst_31154);
} else {
if((state_val_31211 === (30))){
var inst_31184 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31185 = figwheel.client.heads_up.display_warning.call(null,inst_31184);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(33),inst_31185);
} else {
if((state_val_31211 === (10))){
var inst_31144 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31249_31292 = state_31210__$1;
(statearr_31249_31292[(2)] = inst_31144);

(statearr_31249_31292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (18))){
var inst_31160 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31161 = figwheel.client.format_messages.call(null,inst_31160);
var inst_31162 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31163 = figwheel.client.heads_up.display_error.call(null,inst_31161,inst_31162);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(21),inst_31163);
} else {
if((state_val_31211 === (37))){
var inst_31193 = (state_31210[(2)]);
var state_31210__$1 = state_31210;
var statearr_31250_31293 = state_31210__$1;
(statearr_31250_31293[(2)] = inst_31193);

(statearr_31250_31293[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31211 === (8))){
var inst_31136 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31210__$1 = state_31210;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31210__$1,(11),inst_31136);
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
});})(c__19398__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19333__auto__,c__19398__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto____0 = (function (){
var statearr_31254 = [null,null,null,null,null,null,null,null,null,null];
(statearr_31254[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto__);

(statearr_31254[(1)] = (1));

return statearr_31254;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto____1 = (function (state_31210){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_31210);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e31255){if((e31255 instanceof Object)){
var ex__19337__auto__ = e31255;
var statearr_31256_31294 = state_31210;
(statearr_31256_31294[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31210);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31295 = state_31210;
state_31210 = G__31295;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto__ = function(state_31210){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto____1.call(this,state_31210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__,msg_hist,msg_names,msg))
})();
var state__19400__auto__ = (function (){var statearr_31257 = f__19399__auto__.call(null);
(statearr_31257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_31257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__,msg_hist,msg_names,msg))
);

return c__19398__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19398__auto___31358 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto___31358,ch){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto___31358,ch){
return (function (state_31341){
var state_val_31342 = (state_31341[(1)]);
if((state_val_31342 === (1))){
var state_31341__$1 = state_31341;
var statearr_31343_31359 = state_31341__$1;
(statearr_31343_31359[(2)] = null);

(statearr_31343_31359[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (2))){
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31341__$1,(4),ch);
} else {
if((state_val_31342 === (3))){
var inst_31339 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31341__$1,inst_31339);
} else {
if((state_val_31342 === (4))){
var inst_31329 = (state_31341[(7)]);
var inst_31329__$1 = (state_31341[(2)]);
var state_31341__$1 = (function (){var statearr_31344 = state_31341;
(statearr_31344[(7)] = inst_31329__$1);

return statearr_31344;
})();
if(cljs.core.truth_(inst_31329__$1)){
var statearr_31345_31360 = state_31341__$1;
(statearr_31345_31360[(1)] = (5));

} else {
var statearr_31346_31361 = state_31341__$1;
(statearr_31346_31361[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (5))){
var inst_31329 = (state_31341[(7)]);
var inst_31331 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31329);
var state_31341__$1 = state_31341;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31341__$1,(8),inst_31331);
} else {
if((state_val_31342 === (6))){
var state_31341__$1 = state_31341;
var statearr_31347_31362 = state_31341__$1;
(statearr_31347_31362[(2)] = null);

(statearr_31347_31362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (7))){
var inst_31337 = (state_31341[(2)]);
var state_31341__$1 = state_31341;
var statearr_31348_31363 = state_31341__$1;
(statearr_31348_31363[(2)] = inst_31337);

(statearr_31348_31363[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31342 === (8))){
var inst_31333 = (state_31341[(2)]);
var state_31341__$1 = (function (){var statearr_31349 = state_31341;
(statearr_31349[(8)] = inst_31333);

return statearr_31349;
})();
var statearr_31350_31364 = state_31341__$1;
(statearr_31350_31364[(2)] = null);

(statearr_31350_31364[(1)] = (2));


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
});})(c__19398__auto___31358,ch))
;
return ((function (switch__19333__auto__,c__19398__auto___31358,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19334__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19334__auto____0 = (function (){
var statearr_31354 = [null,null,null,null,null,null,null,null,null];
(statearr_31354[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19334__auto__);

(statearr_31354[(1)] = (1));

return statearr_31354;
});
var figwheel$client$heads_up_plugin_$_state_machine__19334__auto____1 = (function (state_31341){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_31341);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e31355){if((e31355 instanceof Object)){
var ex__19337__auto__ = e31355;
var statearr_31356_31365 = state_31341;
(statearr_31356_31365[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31341);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31355;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31366 = state_31341;
state_31341 = G__31366;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19334__auto__ = function(state_31341){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19334__auto____1.call(this,state_31341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19334__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19334__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto___31358,ch))
})();
var state__19400__auto__ = (function (){var statearr_31357 = f__19399__auto__.call(null);
(statearr_31357[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto___31358);

return statearr_31357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto___31358,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19398__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19398__auto__){
return (function (){
var f__19399__auto__ = (function (){var switch__19333__auto__ = ((function (c__19398__auto__){
return (function (state_31387){
var state_val_31388 = (state_31387[(1)]);
if((state_val_31388 === (1))){
var inst_31382 = cljs.core.async.timeout.call(null,(3000));
var state_31387__$1 = state_31387;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31387__$1,(2),inst_31382);
} else {
if((state_val_31388 === (2))){
var inst_31384 = (state_31387[(2)]);
var inst_31385 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31387__$1 = (function (){var statearr_31389 = state_31387;
(statearr_31389[(7)] = inst_31384);

return statearr_31389;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31387__$1,inst_31385);
} else {
return null;
}
}
});})(c__19398__auto__))
;
return ((function (switch__19333__auto__,c__19398__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19334__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19334__auto____0 = (function (){
var statearr_31393 = [null,null,null,null,null,null,null,null];
(statearr_31393[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19334__auto__);

(statearr_31393[(1)] = (1));

return statearr_31393;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19334__auto____1 = (function (state_31387){
while(true){
var ret_value__19335__auto__ = (function (){try{while(true){
var result__19336__auto__ = switch__19333__auto__.call(null,state_31387);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19336__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19336__auto__;
}
break;
}
}catch (e31394){if((e31394 instanceof Object)){
var ex__19337__auto__ = e31394;
var statearr_31395_31397 = state_31387;
(statearr_31395_31397[(5)] = ex__19337__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31387);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31398 = state_31387;
state_31387 = G__31398;
continue;
} else {
return ret_value__19335__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19334__auto__ = function(state_31387){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19334__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19334__auto____1.call(this,state_31387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19334__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19334__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19334__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19334__auto__;
})()
;})(switch__19333__auto__,c__19398__auto__))
})();
var state__19400__auto__ = (function (){var statearr_31396 = f__19399__auto__.call(null);
(statearr_31396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19398__auto__);

return statearr_31396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19400__auto__);
});})(c__19398__auto__))
);

return c__19398__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31399){
var map__31406 = p__31399;
var map__31406__$1 = ((((!((map__31406 == null)))?((((map__31406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31406):map__31406);
var ed = map__31406__$1;
var formatted_exception = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31406__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31408_31412 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31409_31413 = null;
var count__31410_31414 = (0);
var i__31411_31415 = (0);
while(true){
if((i__31411_31415 < count__31410_31414)){
var msg_31416 = cljs.core._nth.call(null,chunk__31409_31413,i__31411_31415);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31416);

var G__31417 = seq__31408_31412;
var G__31418 = chunk__31409_31413;
var G__31419 = count__31410_31414;
var G__31420 = (i__31411_31415 + (1));
seq__31408_31412 = G__31417;
chunk__31409_31413 = G__31418;
count__31410_31414 = G__31419;
i__31411_31415 = G__31420;
continue;
} else {
var temp__4425__auto___31421 = cljs.core.seq.call(null,seq__31408_31412);
if(temp__4425__auto___31421){
var seq__31408_31422__$1 = temp__4425__auto___31421;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31408_31422__$1)){
var c__17121__auto___31423 = cljs.core.chunk_first.call(null,seq__31408_31422__$1);
var G__31424 = cljs.core.chunk_rest.call(null,seq__31408_31422__$1);
var G__31425 = c__17121__auto___31423;
var G__31426 = cljs.core.count.call(null,c__17121__auto___31423);
var G__31427 = (0);
seq__31408_31412 = G__31424;
chunk__31409_31413 = G__31425;
count__31410_31414 = G__31426;
i__31411_31415 = G__31427;
continue;
} else {
var msg_31428 = cljs.core.first.call(null,seq__31408_31422__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31428);

var G__31429 = cljs.core.next.call(null,seq__31408_31422__$1);
var G__31430 = null;
var G__31431 = (0);
var G__31432 = (0);
seq__31408_31412 = G__31429;
chunk__31409_31413 = G__31430;
count__31410_31414 = G__31431;
i__31411_31415 = G__31432;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31433){
var map__31436 = p__31433;
var map__31436__$1 = ((((!((map__31436 == null)))?((((map__31436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31436):map__31436);
var w = map__31436__$1;
var message = cljs.core.get.call(null,map__31436__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16306__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16306__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16306__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31444 = cljs.core.seq.call(null,plugins);
var chunk__31445 = null;
var count__31446 = (0);
var i__31447 = (0);
while(true){
if((i__31447 < count__31446)){
var vec__31448 = cljs.core._nth.call(null,chunk__31445,i__31447);
var k = cljs.core.nth.call(null,vec__31448,(0),null);
var plugin = cljs.core.nth.call(null,vec__31448,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31450 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31444,chunk__31445,count__31446,i__31447,pl_31450,vec__31448,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31450.call(null,msg_hist);
});})(seq__31444,chunk__31445,count__31446,i__31447,pl_31450,vec__31448,k,plugin))
);
} else {
}

var G__31451 = seq__31444;
var G__31452 = chunk__31445;
var G__31453 = count__31446;
var G__31454 = (i__31447 + (1));
seq__31444 = G__31451;
chunk__31445 = G__31452;
count__31446 = G__31453;
i__31447 = G__31454;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31444);
if(temp__4425__auto__){
var seq__31444__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31444__$1)){
var c__17121__auto__ = cljs.core.chunk_first.call(null,seq__31444__$1);
var G__31455 = cljs.core.chunk_rest.call(null,seq__31444__$1);
var G__31456 = c__17121__auto__;
var G__31457 = cljs.core.count.call(null,c__17121__auto__);
var G__31458 = (0);
seq__31444 = G__31455;
chunk__31445 = G__31456;
count__31446 = G__31457;
i__31447 = G__31458;
continue;
} else {
var vec__31449 = cljs.core.first.call(null,seq__31444__$1);
var k = cljs.core.nth.call(null,vec__31449,(0),null);
var plugin = cljs.core.nth.call(null,vec__31449,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31459 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31444,chunk__31445,count__31446,i__31447,pl_31459,vec__31449,k,plugin,seq__31444__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31459.call(null,msg_hist);
});})(seq__31444,chunk__31445,count__31446,i__31447,pl_31459,vec__31449,k,plugin,seq__31444__$1,temp__4425__auto__))
);
} else {
}

var G__31460 = cljs.core.next.call(null,seq__31444__$1);
var G__31461 = null;
var G__31462 = (0);
var G__31463 = (0);
seq__31444 = G__31460;
chunk__31445 = G__31461;
count__31446 = G__31462;
i__31447 = G__31463;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31464 = [];
var len__17376__auto___31467 = arguments.length;
var i__17377__auto___31468 = (0);
while(true){
if((i__17377__auto___31468 < len__17376__auto___31467)){
args31464.push((arguments[i__17377__auto___31468]));

var G__31469 = (i__17377__auto___31468 + (1));
i__17377__auto___31468 = G__31469;
continue;
} else {
}
break;
}

var G__31466 = args31464.length;
switch (G__31466) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31464.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17383__auto__ = [];
var len__17376__auto___31475 = arguments.length;
var i__17377__auto___31476 = (0);
while(true){
if((i__17377__auto___31476 < len__17376__auto___31475)){
args__17383__auto__.push((arguments[i__17377__auto___31476]));

var G__31477 = (i__17377__auto___31476 + (1));
i__17377__auto___31476 = G__31477;
continue;
} else {
}
break;
}

var argseq__17384__auto__ = ((((0) < args__17383__auto__.length))?(new cljs.core.IndexedSeq(args__17383__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17384__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31472){
var map__31473 = p__31472;
var map__31473__$1 = ((((!((map__31473 == null)))?((((map__31473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31473):map__31473);
var opts = map__31473__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31471){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31471));
});

//# sourceMappingURL=client.js.map?rel=1445108531682