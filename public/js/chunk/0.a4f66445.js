(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{LGHm:function(t,e,i){"use strict";i.r(e);var n={preFetch:function(t){var e=t.state,i=t.dispatch,n=(t.commit,e.route.params.id);return Promise.all([i("FETCH_ARTICLE_DETAIL",{id:n})])},beforeMount:function(){var t=this.$store.state.route.params.id;return Promise.all([this.$store.dispatch("FETCH_ARTICLE_DETAIL",{id:t})])}},r=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[this._v("\n  vue-server-render detail\n")])};r._withStripped=!0;var a=i("JFUb"),s=!1;var o=function(t){s||i("Lxzt")},p=Object(a.a)(n,r,[],!1,o,null,null);p.options.__file="app/web/component/app/detail.vue";e.default=p.exports},Lxzt:function(t,e,i){}}]);