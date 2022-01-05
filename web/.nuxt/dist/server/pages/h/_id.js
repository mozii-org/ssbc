exports.ids = [1];
exports.modules = {

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/h/_id.vue?vue&type=template&id=05155485&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div data-v-05155485>","</div>",[_c('el-page-header',{attrs:{"title":"","content":_vm.item.name},on:{"back":_vm.goBack}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-05155485>","</div>",[_c('el-collapse',{on:{"change":_vm.handleChange},model:{value:(_vm.activeNames),callback:function ($$v) {_vm.activeNames=$$v},expression:"activeNames"}},[_c('el-collapse-item',{attrs:{"title":"Hash Information","name":"1"}},[_c('div',[_vm._v("First Log Time: "+_vm._s(_vm._f("datetime")(_vm.item.ctime)))]),_vm._v(" "),_c('div',[_vm._v("Last Log Time: "+_vm._s(_vm._f("datetime")(_vm.item.atime)))]),_vm._v(" "),_c('div',[_vm._v("File Size: "+_vm._s(_vm._f("size")(_vm.item.len)))]),_vm._v(" "),_c('div',[_vm._v("Total Requests: "+_vm._s(_vm.item.reqs))]),_vm._v(" "),_c('div',[_vm._v("\n\t\t    \tMagnet Link:\n\t\t\t      "),_c('a',{attrs:{"rel":"nofollow","href":_vm.magnetLink}},[_vm._v("\n\t\t\t      \tmagnet:?xt=urn:btih:"+_vm._s(_vm.item.hash)+"\n\t\t\t      ")]),_vm._v("\n\t\t\t       \n\t\t\t      "),_c('a',{attrs:{"rel":"nofollow","href":_vm.magnetLink}},[_vm._v("\n\t\t\t      \tDownload\n\t\t\t      ")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":_vm.item.files.length + ' Files',"name":"2"}},_vm._l((_vm.item.files),function(file){return _c('div',[_vm._v(_vm._s(file.path)+" "+_vm._s(_vm._f("size")(file.length)))])}),0),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"Download","name":"4"}},[_c('div',[_vm._v("If you want to get the torrent file or original data of "+_vm._s(_vm.item.name)+", please use uTorrent, BitTorrent or Thunder.\n\t\t    ")]),_vm._v(" "),_c('div',[_c('a',{attrs:{"rel":"nofollow","target":"_blank","href":'http://www.haosou.com/s?q=' + encodeURIComponent(_vm.item.name) + '&src=ssbc'}},[_vm._v("\n\t\t\t\tClick here to locate the torrent file of "+_vm._s(_vm.item.name)+"...\n\t\t\t\t")])])]),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"Related Resources","name":"5"}},_vm._l((_vm.related),function(ritem){return _c('div',[_c('a',{attrs:{"href":'/h/' + ritem.id}},[_vm._v(_vm._s(ritem.name))]),_vm._v(" "+_vm._s(_vm._f("size")(ritem.len))+"\n\t\t    ")])}),0),_vm._v(" "),_c('el-collapse-item',{attrs:{"title":"Copyright Infringement","name":"6"}},[_c('div',[_vm._v("If the content above is not authorized, please contact us via contact[AT]cilibaba.com. Remember to include the full url in your complaint.")])])],1)],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/h/_id.vue?vue&type=template&id=05155485&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/h/_id.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
//
/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  layout: 'search',

  async asyncData({
    params,
    $axios,
    error
  }) {
    try {
      const res = await $axios.$get('/apis/info', {
        params: {
          ids: params.id
        }
      });

      if (!res.items[0]) {
        error({
          statusCode: 404,
          message: 'Hash not found.'
        });
        return;
      }

      const data = {
        item: res.items[0],
        activeNames: ['1', '2', '3', '4', '5', '6']
      };
      const res2 = await $axios.$get('/apis/related', {
        params: {
          keyword: data.item.name,
          count: 11
        }
      });
      data.related = res2.items.filter(x => x.id != params.id);

      if (!data.item.files) {
        data.item.files = [{
          path: data.item.name,
          length: data.item.len
        }];
      }

      data.magnetLink = 'magnet:?xt=urn:btih:' + data.item.hash + '&dn=' + data.item.name;
      return data;
    } catch (e) {
      console.error(new Date(), params, e);
    }
  },

  methods: {
    goBack() {
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/');
    },

    handleChange() {}

  }
});
// CONCATENATED MODULE: ./pages/h/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var h_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/h/_id.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  h_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "05155485",
  "469103df"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map