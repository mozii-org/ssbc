exports.ids = [3];
exports.modules = {

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/log.vue?vue&type=template&id=04e513c8&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('el-page-header',{attrs:{"title":"","content":'Logs Rank ' + _vm.date},on:{"back":_vm.goBack}}),_vm._ssrNode(" "),_c('el-table',{staticStyle:{"width":"100%"},attrs:{"size":"small","data":_vm.tableData}},[_c('el-table-column',{attrs:{"label":"Name","width":"500"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_c('a',{attrs:{"href":'/h/' + scope.row.info.id}},[_vm._v(_vm._s(scope.row.info.name))])]}}])}),_vm._v(" "),_c('el-table-column',{attrs:{"prop":"reqs","label":"Requests","width":"90"}}),_vm._v(" "),_c('el-table-column',{attrs:{"label":"Last Log Time"},scopedSlots:_vm._u([{key:"default",fn:function(scope){return [_vm._v("\n\t        "+_vm._s(_vm._f("datetime")(scope.row.atime))+"\n\t      ")]}}])})],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-04e513c8>","</div>",[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","current-page":_vm.currentPage,"page-size":20,"pager-count":11,"total":2000},on:{"current-change":_vm.handleChangePage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/log.vue?vue&type=template&id=04e513c8&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/log.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var logvue_type_script_lang_js_ = ({
  layout: 'search',

  async asyncData({
    $axios,
    error,
    query
  }) {
    const page = parseInt(query.p || 1);
    const params = {
      start: (page - 1) * 10,
      count: 20
    };
    const res = await $axios.$get('/apis/log', {
      params: params
    });
    return {
      tableData: res.items,
      currentPage: page,
      date: res.date
    };
  },

  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },

    handleChangePage(val) {
      window.location = '/log?p=' + val;
    }

  }
});
// CONCATENATED MODULE: ./pages/log.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_logvue_type_script_lang_js_ = (logvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/log.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(94)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_logvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "04e513c8",
  "7ec14810"
  
)

/* harmony default export */ var log = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(95);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("1f068732", content, true, context)
};

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_style_index_0_id_04e513c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_style_index_0_id_04e513c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_style_index_0_id_04e513c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_style_index_0_id_04e513c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_log_vue_vue_type_style_index_0_id_04e513c8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".el-pagination[data-v-04e513c8]{margin:30px 0 10px}.el-page-header[data-v-04e513c8]{margin:0 0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=log.js.map