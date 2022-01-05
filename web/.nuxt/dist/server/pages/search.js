exports.ids = [4];
exports.modules = {

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=template&id=4b1c7bf2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<p class=\"total-meta\" data-v-4b1c7bf2>"+_vm._ssrEscape("\n\t\tFound "+_vm._s(_vm.meta.total_found)+" items for "+_vm._s(_vm.keyword)+" in "+_vm._s(_vm.meta.time)+"s.\n\t")+"</p> <div class=\"list\" data-v-4b1c7bf2>"+(_vm._ssrList((_vm.items),function(item){return ("<div class=\"item\" data-v-4b1c7bf2><div class=\"name\" data-v-4b1c7bf2><a"+(_vm._ssrAttr("href",'/h/' + item.id))+" data-v-4b1c7bf2>"+_vm._ssrEscape(_vm._s(item.name))+"</a></div> <div class=\"meta\" data-v-4b1c7bf2>"+_vm._ssrEscape("\n\t\t\t\t"+_vm._s(item.files.length)+" files, "+_vm._s(_vm._f("size")(item.len))+", "+_vm._s(item.reqs)+" requests, logged "+_vm._s(_vm._f("time")(item.atime))+" ago\n\t\t\t")+"</div> <div class=\"files\" data-v-4b1c7bf2>"+(_vm._ssrList((item.files.slice(0, 5)),function(file){return ("<div data-v-4b1c7bf2><p data-v-4b1c7bf2><span data-v-4b1c7bf2>"+(_vm._s(file.path))+"</span>"+_vm._ssrEscape(" "+_vm._s(_vm._f("size")(file.length)))+"</p></div>")}))+" <p data-v-4b1c7bf2>....</p></div></div>")}))+"</div> "),_vm._ssrNode("<div data-v-4b1c7bf2>","</div>",[_c('el-pagination',{attrs:{"background":"","layout":"prev, pager, next","current-page":_vm.currentPage,"page-size":10,"total":Math.min(_vm.meta.total, _vm.meta.total_found)},on:{"current-change":_vm.handleChangePage}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/search.vue?vue&type=template&id=4b1c7bf2&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/search.vue?vue&type=script&lang=js&
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
/* harmony default export */ var searchvue_type_script_lang_js_ = ({
  layout: 'search',

  async asyncData({
    query,
    $axios
  }) {
    try {
      console.log(new Date(), 'search', query.q);
      const page = parseInt(query.p || 1);
      const params = {
        keyword: query.q,
        detail: 1,
        start: (page - 1) * 10,
        count: 10
      };
      const res = await $axios.$get('/apis/search', {
        params: params
      });
      const data = {
        items: res.items,
        meta: res.meta,
        keyword: query.q,
        currentPage: page,
        words: query.q.replace(/。|，|,|！|…|!|《|》|<|>|\"|'|:|：|？|\?|、|\||“|”|‘|’|；|—|（|）|·|\(|\)|　|\.|【|】|『|』|@|&|%|\^|\*|\+|\||<|>|~|`|\[|\]/g, ' ').split(' ').filter(x => x != '')
      };
      data.items.forEach(v => {
        if (!v.files) {
          v.files = [{
            path: v.name,
            length: v.len
          }];
        }

        v.files.sort((a, b) => b.length - a.length);
        v.files = v.files.slice(0, 5);
        v.files.forEach(s => {
          for (const w of data.words) {
            s.path = s.path.replace(new RegExp(w, 'ig'), p1 => {
              return '<span class="highlight">' + p1 + '</span>';
            });
          }
        });
      });
      return data;
    } catch (e) {
      console.error(new Date(), query, e);
    }
  },

  methods: {
    handleChangePage(val) {
      const query = this.$route.query;
      window.location = '/search?q=' + encodeURIComponent(query.q) + '&p=' + val;
    }

  },

  head() {
    return {
      title: this.$route.query.q + ' - Gen'
    };
  }

});
// CONCATENATED MODULE: ./pages/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/search.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(96)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_searchvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4b1c7bf2",
  "034618e8"
  
)

/* harmony default export */ var search = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 91:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(97);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default
module.exports.__inject__ = function (context) {
  add("34988026", content, true, context)
};

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_4b1c7bf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_4b1c7bf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_4b1c7bf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_4b1c7bf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_4b1c7bf2_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".item[data-v-4b1c7bf2]{padding:10px 0}.item .meta[data-v-4b1c7bf2]{font-size:.8em;color:#2b8200;padding:5px 0}.item .files[data-v-4b1c7bf2]{font-size:.8em;color:#555}.el-pagination[data-v-4b1c7bf2]{margin:30px 0 10px}.total-meta[data-v-4b1c7bf2]{margin:0 0 10px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ })

};;
//# sourceMappingURL=search.js.map