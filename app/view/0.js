exports.ids=[0],exports.modules={25:function(t,e,r){(t.exports=r(3)(!1)).push([t.i,"",""])},26:function(t,e,r){var i=r(25);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var s=r(2).default;t.exports.__inject__=function(t){s("45e60979",i,!1,t)}},27:function(t,e,r){"use strict";r.r(e);var i={preFetch:function(t){var e=t.state,r=t.dispatch,i=(t.commit,e.route.params.id);return Promise.all([r("FETCH_ARTICLE_DETAIL",{id:i})])},beforeMount:function(){var t=this.$store.state.route.params.id;return Promise.all([this.$store.dispatch("FETCH_ARTICLE_DETAIL",{id:t})])}},s=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"font-size":"24px","text-align":"center"}},[this._ssrNode("\n  vue-server-render detail\n")])};s._withStripped=!0;var n=r(1);var o=function(t){var e;(e=r(26)).__inject__&&e.__inject__(t)},a=Object(n.a)(i,s,[],!1,o,null,"7f24d8e6");a.options.__file="app/web/component/app/detail.vue";e.default=a.exports}};