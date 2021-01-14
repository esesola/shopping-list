(self["webpackChunk"] = self["webpackChunk"] || []).push([["about"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'app',
  data: function data() {
    return {
      newToDo: '',
      existingToDo: []
    };
  },
  created: function created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted: function mounted() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_0___default().get('http://127.0.0.1:8000/api/productos').then(function (response) {
      console.log('Response OK');
      console.log(response.data);
      var list = response.data.map(function (p) {
        return {
          text: p.name,
          completed: p.completed,
          id: p.id
        };
      });
      list.forEach(function (element) {
        _this.existingToDo.push(element);
      });
    })["catch"](function (error) {
      console.log('Mal');
      console.log(error);
    });
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    add: function add() {
      var _this2 = this;

      var post = {
        producto: {
          name: this.newToDo
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().post('http://127.0.0.1:8000/api/producto/store', post).then(function (result) {
        var data = result.data;
        console.log(data);
        var todo = {
          text: data.name,
          id: data.id,
          completed: false
        };

        _this2.existingToDo.push(todo);

        _this2.newToDo = '';
      })["catch"](function (err) {
        console.log(err);
      });
    },
    deleteToDo: function deleteToDo(i, todo) {
      this.existingToDo.splice(i, 1);
      axios__WEBPACK_IMPORTED_MODULE_0___default().delete('http://127.0.0.1:8000/api/producto/' + todo.id);
    },
    checked: function checked(todo) {
      var body = {
        producto: {
          completed: todo.completed
        }
      };
      axios__WEBPACK_IMPORTED_MODULE_0___default().put('http://127.0.0.1:8000/api/producto/' + todo.id, body);
    }
  },
  computed: {
    lista_ordenada: function lista_ordenada() {
      var array = this.existingToDo;
      return array.sort(function (a, b) {
        return a.completed - b.completed;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'app',
  data: function data() {
    return {
      newSuper: '',
      existingSupers: [{
        text: 'Mercadona',
        id: 0
      }, {
        text: 'Lidl',
        id: 1
      }, {
        text: 'Alcampo',
        id: 2
      }]
    };
  },
  methods: {
    add: function add() {
      this.existingSupers.push({
        text: this.newSuper,
        id: new Date().valueOf()
      }), this.newSuper = '';
    },
    deleteSuper: function deleteSuper(i) {
      this.existingSupers.splice(i, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ (() => {

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

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:600&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.body {\n  height: 100vh;\n  margin: 0;\n  display: grid;\n  place-items: center;\n}\nbutton a{\n  text-decoration: none;\n  color: #000000;\n}\n*,\n*:before,\n*:after {\n  box-sizing: border-box;\n}\n.multi-button {\n  margin-left: -0.5rem;\n  margin-right: -0.5rem;\n}\n.multi-button button {\n  background: white;\n  border: 0.125em solid black;\n  cursor: pointer;\n  font: 600 1.5rem/1.25 \"Montserrat\", sans-serif;\n  letter-spacing: 0.125em;\n  margin: 0.5rem;\n  padding: 0.5em 0.75em;\n  position: relative;\n  text-transform: uppercase;\n}\n.multi-button button:before, .multi-button button:after {\n  content: \"\";\n  position: absolute;\n  transition: all 0.125s ease-in-out;\n}\n.multi-button button.user {\n  background: none;\n  border-color: transparent;\n}\n.multi-button button.user:before, .multi-button button.user:after {\n  transition: all 0.175s ease-in-out;\n}\n.multi-button button.user:before {\n  background: black;\n  border: 0px dashed black;\n  left: -0.125em;\n  top: -0.125em;\n  right: -0.125em;\n  bottom: -0.125em;\n  z-index: -1;\n}\n.multi-button button.user:hover:before, .multi-button button.user:focus:before {\n  background: white;\n  border-width: 0.125em;\n}\n.multi-button button.user:after {\n  background: white;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  top: 0;\n  z-index: -1;\n}\n.multi-button button.list:after {\n  border: 0.125em dashed black;\n  bottom: -0.125em;\n  left: -0.125em;\n  right: -0.125em;\n  top: -0.125em;\n  z-index: -1;\n}\n.multi-button button.list:hover:after, .multi-button button.list:focus:after {\n  bottom: -0.375em;\n  left: 0.125em;\n  right: -0.375em;\n  top: 0.125em;\n}\n.multi-button button.super:after {\n  border: 0.125em dashed black;\n  bottom: -0.125em;\n  left: -0.125em;\n  right: -0.125em;\n  top: -0.125em;\n}\n.multi-button button.super:hover:after, .multi-button button.super:focus:after {\n  bottom: 0.125em;\n  left: 0.125em;\n  right: 0.125em;\n  top: 0.125em;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*{\n  outline: 0;\n}\n:root{\n   --font: \"DM Sans\", sans-serif;\n}\n#login-box {\n  font-family: var(--font);\n  position: relative;\n  margin: 5% auto;\n  width: 600px;\n  height: 400px;\n  background: #FFF;\n  color:#668989;\n  border: 0.125em solid black;\n}\n.left {\n  position: absolute;\n  top: 0;\n  left: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n}\nh1 {\n  margin: 0 0 20px 0;\n  font-weight: 300;\n  font-size: 28px;\n  color:#668989;\n}\ninput[type=\"text\"],\ninput[type=\"password\"] {\n  display: block;\n  box-sizing: border-box;\n  margin-bottom: 20px;\n  padding: 4px;\n  width: 220px;\n  height: 32px;\n  border: none;\n  border-bottom: 1px solid #668989;\n;\n  font-weight: 400;\n  font-size: 15px;\n  transition: 0.2s ease;\n}\ninput[type=\"text\"]:focus,\ninput[type=\"password\"]:focus {\n  border-bottom: 2px solid #16a085;\n  color: #16a085;\n  transition: 0.2s ease;\n}\ninput[type=\"submit\"] {\n  margin-top: 28px;\n  width: 120px;\n  height: 32px;\n  background: #16a085;\n  border: none;\n  border-radius: 10px;\n  color: #FFF;\n  font-family: var(--font);\n  font-weight: 500;\n  text-transform: uppercase;\n  transition: 0.1s ease;\n  cursor: pointer;\n}\ninput[type=\"submit\"]:hover,\ninput[type=\"submit\"]:focus {\n  opacity: 0.8;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease;\n}\ninput[type=\"submit\"]:active {\n  opacity: 1;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.1s ease;\n}\n.or {\n  position: absolute;\n  top: 180px;\n  left: 280px;\n  width: 40px;\n  height: 40px;\n  background: #fff;\n  border-radius: 50%;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  line-height: 40px;\n  text-align: center;\n}\n.right {\n  position: absolute;\n  top: 0;\n  right: 0;\n  box-sizing: border-box;\n  padding: 40px;\n  width: 300px;\n  height: 400px;\n  border-radius: 0 2px 2px 0;\n}\n.right .loginwith {\n  display: block;\n  margin-bottom: 40px;\n  font-size: 28px;\n  color: #FFF;\n  text-align: center;\n}\nbutton.social-signin {\n  margin-bottom: 20px;\n  width: 220px;\n  height: 36px;\n  border: none;\n  border-radius: 10px;\n  color: #FFF;\n  font-family: var(--font);\n  font-weight: 500;\n  transition: 0.2s ease;\n  cursor: pointer;\n}\nbutton.social-signin:hover,\nbutton.social-signin:focus {\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease;\n}\nbutton.social-signin:active {\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);\n  transition: 0.2s ease;\n}\nbutton.social-signin.facebook {\n  background: #32508E;\n}\nbutton.social-signin.twitter {\n  background: #55ACEE;\n}\nbutton.social-signin.google {\n  background: #DD4B39;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Montserrat:600&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n*{\n  outline: 0;\n}\n:root{\n   --font: \"DM Sans\", sans-serif;\n}\nbody{\n  background: linear-gradient(102.7deg, #fddaff 8.2%, #dfadfc 19.6%, #adcdfc 36.8%, #adfcf4 73.2%, #caf8d0 90.9%);\n  background-attachment: fixed;\n  font-size: 16px;\n  color: #586b6a;\n  overflow: hidden;\n}\n#app{\n  font-family: var(--font);\n  margin: 2em auto;\n  padding: 1rem 2rem;\n  display: block;\n  background: #fff;\n  width: 600px;\n  border: 0.125em solid black;\n}\n#app ul{\n  margin: 0;\n  padding: 0 .2rem;\n}\n.add-item{\n  padding: 0 0 1rem 0;\n}\n.add-item button{\n  background: none;\n  border: none;\n  display: table-cell;\n  vertical-align: middle;\n  border-radius: 5px;\n  padding: .5rem 0;\n  font-size: 2em;\n  cursor: pointer;\n  color: #668989;\n  transition: all .5s linear;\n  width: 10%;\n  text-align: left;\n  font-weight: 300;\n}\n.add-item button:hover{\n  color: #84AAA9;\n}\n.add-item input{\n  padding: .5rem .7rem;\n  vertical-align: middle;\n  display: table-cell;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  width: 80%;\n}\n.list-item{\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 1s linear;\n  margin: 0 0 .5rem 0;\n  padding: .5rem 0rem;\n  border-radius: 10px 10px 10px 10px;\n  -moz-border-radius: 10px 10px 10px 10px;\n  -webkit-border-radius: 10px 10px 10px 10px;\n  border: lightgray 1px solid;\n}\n.span{\n  position: relative;\n  margin: .3rem .5rem .3rem 1.2rem;\n  cursor: pointer;\n  width: 85%;\n}\n.checkbox{\n  position: relative;\n  top: 0;\n  margin: 0 .7rem 0 0;\n  cursor: pointer;\n  margin-left: 5px;\n  background-color: transparent;\n}.checkbox:before{\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #BFD7D6;\n}\n.checkbox:checked:before {\n\ttransform: rotate(-45deg);\n\theight: .5rem;\n\tborder-color: #668989;\n\tborder-top-style: none;\n\tborder-right-style: none;\n    -webkit-text-decoration: line-through wavy rgba(0, 0, 0, 0.3);\n    text-decoration: line-through wavy rgba(0, 0, 0, 0.3);\n}\n.checkbox:after {\n\tcontent: \"\";\n\tposition: absolute;\n\ttop: -0.1rem;\n\tleft: -0.1rem;\n\twidth: 1.2rem;\n\theight: 1.3rem;\n\tbackground: #fff;\n\tcursor: pointer;\n}\n.delete-button{\n  border: 0;\n  width: 18px;\n  height: 18px;\n  padding: 0;\n  overflow: hidden;\n  background-color: transparent;\n  background-image: url(\"data:image/svg+xml;charset=UTF-8,%3csvg fill='%23dc4771' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 174.239 174.239'%3e%3cpath d='M87.12 0C39.082 0 0 39.082 0 87.12s39.082 87.12 87.12 87.12 87.12-39.082 87.12-87.12S135.157 0 87.12 0zm0 159.305c-39.802 0-72.185-32.383-72.185-72.185S47.318 14.935 87.12 14.935s72.185 32.383 72.185 72.185-32.384 72.185-72.185 72.185z'/%3e%3cpath d='M120.83 53.414c-2.917-2.917-7.647-2.917-10.559 0L87.12 76.568 63.969 53.414c-2.917-2.917-7.642-2.917-10.559 0s-2.917 7.642 0 10.559l23.151 23.153-23.152 23.154a7.464 7.464 0 000 10.559 7.445 7.445 0 005.28 2.188 7.437 7.437 0 005.28-2.188L87.12 97.686l23.151 23.153a7.445 7.445 0 005.28 2.188 7.442 7.442 0 005.28-2.188 7.464 7.464 0 000-10.559L97.679 87.127l23.151-23.153a7.465 7.465 0 000-10.56z'/%3e%3c/svg%3e\");\n  background-repeat: no-repeat;\n  background-size: cover;\n  cursor: pointer;\n  display: none;\n}\n.list-item:hover > .delete-button{\n    display: flex;\n}\n.imput{\n  border-radius: 2em;\n}\n.producto{\n  color: rgba(255, 99, 71, 0.5);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n#app{\n  font-family: var(--font);\n  margin: 2em auto;\n  padding: 1rem 2rem;\n  display: block;\n  background: #fff;\n  width: 600px;\n  border: 0.125em solid black;\n}\n#app ul{\n  margin: 0;\n  padding: 0 .2rem;\n}\n.add-item{\n  padding: 0 0 1rem 0;\n}\n.add-item button{\n  background: none;\n  border: none;\n  display: table-cell;\n  vertical-align: middle;\n  border-radius: 5px;\n  padding: .5rem 0;\n  font-size: 2em;\n  cursor: pointer;\n  color: #668989;\n  transition: all .5s linear;\n  width: 10%;\n  text-align: left;\n  font-weight: 300;\n}\n.add-item button:hover{\n  color: #84AAA9;\n}\n.add-item input{\n  padding: .5rem .7rem;\n  vertical-align: middle;\n  display: table-cell;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  width: 80%;\n}\n.add-item input{\n  padding: .5rem .7rem;\n  vertical-align: middle;\n  display: table-cell;\n  border-radius: 5px;\n  border: 1px solid #ccc;\n  width: 80%;\n}\n.list-item{\n  width: 100%;\n  display: flex;\n  align-items: center;\n  transition: all 1s linear;\n  margin: 0 0 .5rem 0;\n  padding: .5rem 0rem;\n  border-radius: 10px 10px 10px 10px;\n  -moz-border-radius: 10px 10px 10px 10px;\n  -webkit-border-radius: 10px 10px 10px 10px;\n  border: lightgray 1px solid;\n}\n.span{\n  position: relative;\n  margin: .3rem .5rem .3rem 1.2rem;\n  padding: 5px;\n  cursor: pointer;\n  width: 95%;\n  background-color: #fff;\n  border: 1px solid lightgray;\n  border-radius:18px ;\n}\n.delete-button{\n  margin-left: 0.5em;\n  background: none;\n  border: 1px solid;\n  color: inherit;\n  padding: 0;\n  line-height: 1;\n  width: 2em;\n  height: 2em;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  font-size: 80%;\n}\n.warpper{\n  display:flex;\n  flex-direction: column;\n  align-items: center;\n}\n.tab{\n  cursor: pointer;\n  padding:10px 20px;\n  margin:0px 2px;\n  background:#000;\n  display:inline-block;\n  color:#fff;\n  border-radius:3px 3px 0px 0px;\n  box-shadow: 0 0.5rem 0.8rem #00000080;\n}\n.panels{\n  background:#fffffff6;\n  box-shadow: 0 2rem 2rem #00000080;\n  min-height:200px;\n  width:100%;\n  max-width:500px;\n  border-radius:3px;\n  overflow:hidden;\n  padding:20px;\n}\n.panel{\n  display:none;\n  -webkit-animation: fadein .8s;\n          animation: fadein .8s;\n}\n@-webkit-keyframes fadein {\nfrom {\n        opacity:0;\n}\nto {\n        opacity:1;\n}\n}\n@keyframes fadein {\nfrom {\n        opacity:0;\n}\nto {\n        opacity:1;\n}\n}\n.panel-title{\n  font-size:1.5em;\n  font-weight:bold\n}\n.radio{\n  display:none;\n}\n#one:checked ~ .panels #one-panel,\n#two:checked ~ .panels #two-panel,\n#three:checked ~ .panels #three-panel{\n  display:block\n}\n#one:checked ~ .tabs #one-tab,\n#two:checked ~ .tabs #two-tab,\n#three:checked ~ .tabs #three-tab{\n  background:#fffffff6;\n  color:#000;\n  border-top: 3px solid #000;\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=DM+Sans:400,500,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.container{\n    display: flex;\n    flex: 0;\n    flex-direction: column;\n    font-family: var(--font);\n  position: relative;\n  margin: 5% auto;\n  width: 600px;\n  background: #FFF;\n  color:#668989;\n  border: 0.125em solid black;\n  align-items: center;\n  justify-content: center;\n}\n.btn-foto{\n    background-image: url(https://services-media.propertylogic.net/website/1453828797/default_profile.jpg) !important;\n    background-size: contain;\n    cursor: pointer;\n    width: 200px;\n    height: 200px;\n    border-radius: 120px;\n    border: 3px solid black;\n    margin-top: 20px;\n    background-color: #FFF;\n    color: lightgray;\n}\n.dangerZone{\n    background-color: #ff8080;\n    margin: 30px;\n    width: 70%;\n    border-radius: 20px;\n    color: #990000;\n    text-align: center;\n}\n.btn-deleteacount{\n    cursor: pointer;\n    margin:30px;\n    width: 200px;\n    height: 100px;\n    background-color: #e60000;\n    border: 3px solid black;\n    font-size: xx-large;\n}\n.modal-background{\n    background-color: rgba(0, 0, 0, 0.5);\n  width: 100vw;\n  height: 100vh;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  position: fixed;\n  margin: 0;\n  display: none;\n}\n.modal-background .modal {\n  position: fixed;\n  border-radius: 15px;\n  border: 5px solid #EFEFEF;\n  background-color: white;\n  width: 40vw;\n  height: 40vw;\n  margin: 2em auto;\n  color: #000;\n  top: 0;\n  right: 30vw;\n  box-shadow: 10px 50px 30px rgba(0, 0, 0, 0.2);\n  transition: transform 1s;\n}\n.modal-background .modal-close {\n  position: absolute;\n  content: '';\n  color: white;\n  width: 20px;\n  height: 20px;\n  background-color: #fd6c98;\n  border-radius: 10%;\n  margin-right: 10px;\n}\n.modal-background .modal-content {\n  color: red;\n  padding: 4em;\n  text-align: center;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ingreso.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lista.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/views/About.vue":
/*!**************************************!*\
  !*** ./resources/js/views/About.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./About.vue?vue&type=template&id=2995bb7e& */ "./resources/js/views/About.vue?vue&type=template&id=2995bb7e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__.default)(
  script,
  _About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__.render,
  _About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/About.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* harmony import */ var _Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.render,
  _Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Ingreso.vue":
/*!****************************************!*\
  !*** ./resources/js/views/Ingreso.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Ingreso_vue_vue_type_template_id_90b9f33c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ingreso.vue?vue&type=template&id=90b9f33c& */ "./resources/js/views/Ingreso.vue?vue&type=template&id=90b9f33c&");
/* harmony import */ var _Ingreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ingreso.vue?vue&type=script&lang=js& */ "./resources/js/views/Ingreso.vue?vue&type=script&lang=js&");
/* harmony import */ var _Ingreso_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ingreso.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Ingreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Ingreso_vue_vue_type_template_id_90b9f33c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Ingreso_vue_vue_type_template_id_90b9f33c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Ingreso.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Lista.vue":
/*!**************************************!*\
  !*** ./resources/js/views/Lista.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Lista.vue?vue&type=template&id=30871074& */ "./resources/js/views/Lista.vue?vue&type=template&id=30871074&");
/* harmony import */ var _Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Lista.vue?vue&type=script&lang=js& */ "./resources/js/views/Lista.vue?vue&type=script&lang=js&");
/* harmony import */ var _Lista_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Lista.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.render,
  _Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Lista.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Supers.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Supers.vue ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Supers_vue_vue_type_template_id_511f4e37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Supers.vue?vue&type=template&id=511f4e37& */ "./resources/js/views/Supers.vue?vue&type=template&id=511f4e37&");
/* harmony import */ var _Supers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Supers.vue?vue&type=script&lang=js& */ "./resources/js/views/Supers.vue?vue&type=script&lang=js&");
/* harmony import */ var _Supers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Supers.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _Supers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Supers_vue_vue_type_template_id_511f4e37___WEBPACK_IMPORTED_MODULE_0__.render,
  _Supers_vue_vue_type_template_id_511f4e37___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Supers.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/User.vue":
/*!*************************************!*\
  !*** ./resources/js/views/User.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _User_vue_vue_type_template_id_499c242c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User.vue?vue&type=template&id=499c242c& */ "./resources/js/views/User.vue?vue&type=template&id=499c242c&");
/* harmony import */ var _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User.vue?vue&type=script&lang=js& */ "./resources/js/views/User.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _User_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/User.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _User_vue_vue_type_template_id_499c242c___WEBPACK_IMPORTED_MODULE_0__.render,
  _User_vue_vue_type_template_id_499c242c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Ingreso.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./resources/js/views/Ingreso.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ingreso.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Lista.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/views/Lista.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lista.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/Supers.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Supers.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/User.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/User.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== "default") __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default())); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************!*\
  !*** ./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ingreso.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lista.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************!*\
  !*** ./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supers.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/User.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/User.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/views/About.vue?vue&type=template&id=2995bb7e&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/About.vue?vue&type=template&id=2995bb7e& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_About_vue_vue_type_template_id_2995bb7e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./About.vue?vue&type=template&id=2995bb7e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/About.vue?vue&type=template&id=2995bb7e&");


/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!********************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&");


/***/ }),

/***/ "./resources/js/views/Ingreso.vue?vue&type=template&id=90b9f33c&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/Ingreso.vue?vue&type=template&id=90b9f33c& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_template_id_90b9f33c___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_template_id_90b9f33c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ingreso_vue_vue_type_template_id_90b9f33c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ingreso.vue?vue&type=template&id=90b9f33c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=template&id=90b9f33c&");


/***/ }),

/***/ "./resources/js/views/Lista.vue?vue&type=template&id=30871074&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/Lista.vue?vue&type=template&id=30871074& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Lista_vue_vue_type_template_id_30871074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Lista.vue?vue&type=template&id=30871074& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=template&id=30871074&");


/***/ }),

/***/ "./resources/js/views/Supers.vue?vue&type=template&id=511f4e37&":
/*!**********************************************************************!*\
  !*** ./resources/js/views/Supers.vue?vue&type=template&id=511f4e37& ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_template_id_511f4e37___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_template_id_511f4e37___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Supers_vue_vue_type_template_id_511f4e37___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Supers.vue?vue&type=template&id=511f4e37& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=template&id=511f4e37&");


/***/ }),

/***/ "./resources/js/views/User.vue?vue&type=template&id=499c242c&":
/*!********************************************************************!*\
  !*** ./resources/js/views/User.vue?vue&type=template&id=499c242c& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_499c242c___WEBPACK_IMPORTED_MODULE_0__.render,
/* harmony export */   "staticRenderFns": () => /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_499c242c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_User_vue_vue_type_template_id_499c242c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./User.vue?vue&type=template&id=499c242c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=template&id=499c242c&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/About.vue?vue&type=template&id=2995bb7e&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/About.vue?vue&type=template&id=2995bb7e& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "about" }, [
      _c("h1", [_vm._v("This is an about page")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "body" }, [
      _c("div", { staticClass: "multi-button" }, [
        _c("button", { staticClass: "user" }, [
          _c("a", { attrs: { href: "user" } }, [_vm._v("user")])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "list" }, [
          _c("a", { attrs: { href: "lista" } }, [_vm._v("lists")])
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "supers" }, [
          _c("a", { attrs: { href: "supers" } }, [_vm._v("supers")])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=template&id=90b9f33c&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Ingreso.vue?vue&type=template&id=90b9f33c& ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { id: "login-box" } }, [
      _c("div", { staticClass: "left" }, [
        _c("h1", [_vm._v("Sign up")]),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "text", name: "username", placeholder: "Username" }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "text", name: "email", placeholder: "E-mail" }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "password", name: "password", placeholder: "Password" }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: {
            type: "password",
            name: "password2",
            placeholder: "Retype password"
          }
        }),
        _vm._v(" "),
        _c("input", {
          attrs: { type: "submit", name: "signup_submit", value: "Sign me up" }
        })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "right" }, [
        _c("span", { staticClass: "loginwith" }, [
          _vm._v("Sign in with"),
          _c("br"),
          _vm._v("social network")
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "social-signin facebook" }, [
          _vm._v("Log in with facebook")
        ]),
        _vm._v(" "),
        _c("button", { staticClass: "social-signin google" }, [
          _vm._v("Log in with Google+")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "or" }, [_vm._v("OR")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=template&id=30871074&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Lista.vue?vue&type=template&id=30871074& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "add-item" }, [
        _c(
          "button",
          {
            staticClass: "add-button",
            on: {
              click: function($event) {
                return _vm.add()
              }
            }
          },
          [_vm._v("+")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newToDo,
              expression: "newToDo"
            }
          ],
          staticClass: "imput",
          attrs: { placeholder: "add product" },
          domProps: { value: _vm.newToDo },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.add()
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newToDo = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c("ul", { staticStyle: { "list-style-type": "none" } }, [
        _c(
          "div",
          _vm._l(_vm.lista_ordenada, function(todo, i) {
            return _c(
              "li",
              {
                key: todo.id,
                class: ["list-item", todo.completed ? "producto" : ""]
              },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: todo.completed,
                      expression: "todo.completed"
                    }
                  ],
                  staticClass: "checkbox",
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(todo.completed)
                      ? _vm._i(todo.completed, null) > -1
                      : todo.completed
                  },
                  on: {
                    change: [
                      function($event) {
                        var $$a = todo.completed,
                          $$el = $event.target,
                          $$c = $$el.checked ? true : false
                        if (Array.isArray($$a)) {
                          var $$v = null,
                            $$i = _vm._i($$a, $$v)
                          if ($$el.checked) {
                            $$i < 0 &&
                              _vm.$set(todo, "completed", $$a.concat([$$v]))
                          } else {
                            $$i > -1 &&
                              _vm.$set(
                                todo,
                                "completed",
                                $$a.slice(0, $$i).concat($$a.slice($$i + 1))
                              )
                          }
                        } else {
                          _vm.$set(todo, "completed", $$c)
                        }
                      },
                      function($event) {
                        return _vm.checked(todo)
                      }
                    ]
                  }
                }),
                _vm._v(" "),
                _c("span", { staticClass: "span" }, [
                  _vm._v("\n          " + _vm._s(todo.text) + "\n        ")
                ]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "delete-button",
                  attrs: { type: "button", value: "" },
                  on: {
                    click: function($event) {
                      return _vm.deleteToDo(i, todo)
                    }
                  }
                })
              ]
            )
          }),
          0
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=template&id=511f4e37&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/Supers.vue?vue&type=template&id=511f4e37& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "app" } }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "add-item" }, [
        _c(
          "button",
          {
            staticClass: "add-button",
            on: {
              click: function($event) {
                return _vm.add()
              }
            }
          },
          [_vm._v("+")]
        ),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.newSuper,
              expression: "newSuper"
            }
          ],
          staticClass: "input",
          attrs: { placeholder: "add super" },
          domProps: { value: _vm.newSuper },
          on: {
            keyup: function($event) {
              if (
                !$event.type.indexOf("key") &&
                _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
              ) {
                return null
              }
              return _vm.add()
            },
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.newSuper = $event.target.value
            }
          }
        })
      ]),
      _vm._v(" "),
      _c(
        "ul",
        { staticStyle: { "list-style-type": "none" } },
        _vm._l(_vm.existingSupers, function(supers) {
          return _c("li", { key: supers.id }, [
            _c("button", { staticClass: "span" }, [
              _c("span", [
                _vm._v(
                  "\n                        " +
                    _vm._s(supers.text) +
                    "\n                        "
                )
              ]),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "delete-button",
                  on: {
                    click: function($event) {
                      return _vm.deleteSuper()
                    }
                  }
                },
                [_vm._v("\n                        X\n                    ")]
              )
            ])
          ])
        }),
        0
      )
    ]),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { attrs: { clas: "tabs" } }, [
      _c("div", { staticClass: "warpper" }, [
        _c("input", {
          staticClass: "radio",
          attrs: { id: "one", name: "group", type: "radio", checked: "" }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "radio",
          attrs: { id: "two", name: "group", type: "radio" }
        }),
        _vm._v(" "),
        _c("input", {
          staticClass: "radio",
          attrs: { id: "three", name: "group", type: "radio" }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "tabs" }, [
          _c(
            "label",
            { staticClass: "tab", attrs: { id: "one-tab", for: "one" } },
            [_vm._v("Mercadona")]
          ),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "tab", attrs: { id: "two-tab", for: "two" } },
            [_vm._v("Skills")]
          ),
          _vm._v(" "),
          _c(
            "label",
            { staticClass: "tab", attrs: { id: "three-tab", for: "three" } },
            [_vm._v("Prerequisites")]
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "panels" }, [
          _c("div", { staticClass: "panel", attrs: { id: "one-panel" } }, [
            _c("div", { staticClass: "panel-title" }, [_vm._v("MErcadona")]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "Without CSS, every web page would be drab plain text and images that flowed straight down the page. With CSS, you can add color and background images and change the layout of your page — your web pages can feel like works of art!"
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel", attrs: { id: "two-panel" } }, [
            _c("div", { staticClass: "panel-title" }, [
              _vm._v("Take-Away Skills")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "You will learn many aspects of styling web pages! You’ll be able to set up the correct file structure, edit text and colors, and create attractive layouts. With these skills, you’ll be able to customize the appearance of your web pages to suit your every need!"
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "panel", attrs: { id: "three-panel" } }, [
            _c("div", { staticClass: "panel-title" }, [
              _vm._v("Note on Prerequisites")
            ]),
            _vm._v(" "),
            _c("p", [
              _vm._v(
                "We recommend that you complete Learn HTML before learning CSS."
              )
            ])
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=template&id=499c242c&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/User.vue?vue&type=template&id=499c242c& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => /* binding */ render,
/* harmony export */   "staticRenderFns": () => /* binding */ staticRenderFns
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("button", { staticClass: "btn-foto" }, [
        _vm._v("\n        add foto\n    ")
      ]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("span", [_vm._v("dirección de correo eléctronico")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("span", [_vm._v("nombre de usuario")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("span", [_vm._v("cambiar contraseña")]),
      _vm._v(" "),
      _c("br"),
      _vm._v(" "),
      _c("div", { staticClass: "dangerZone" }, [
        _c("h1", [_vm._v("DANGER ZONE")]),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn-deleteacount",
            on: {
              click: function($event) {
                return _vm.openModal()
              }
            }
          },
          [_vm._v("borrar cuenta")]
        ),
        _vm._v(" "),
        _vm._m(0)
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "modal-background" }, [
      _c("div", { staticClass: "modal" }, [
        _c("button", { staticClass: "modal-close" }, [
          _vm._v("\n                        X\n                    ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "modal-content" }, [
          _c("p", [
            _vm._v(
              "Ahora mismo no esta disponible la acción de borrar la cuenta, "
            ),
            _c("br"),
            _vm._v(
              "\n                        pongase en contacto con nosotros o siga disfrutando de las listas"
            )
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);