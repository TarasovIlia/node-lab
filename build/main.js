/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const express = __webpack_require__(/*! express */ \"express\");\r\nconst mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nconst Product = __webpack_require__(/*! ./schema */ \"./schema.js\");\r\nconst Category = __webpack_require__(/*! ./schema */ \"./schema.js\")\r\n\r\nconst app = express();\r\nconst host = 'http://localhost:'\r\nconst port = process.env.PORT || 4200\r\n\r\nconst localUrl = url => url ?  `${host}${port}/${url}` : `${host}${port}`\r\n\r\nconst newGame = new Product({\r\n    displayName: \"test\",\r\n    category: new Category({displayName:\"TEST\"}),\r\n    createdAt: Date.now(),\r\n    totalRating: 999,\r\n    price: 1\r\n})\r\n\r\nasync function start() {\r\n    try {\r\n        await mongoose.connect('mongodb+srv://IliyaTarasav:1oviver1@cluster0.esyae.mongodb.net/products')\r\n        console.log('\\n\\nConnected');\r\n        const game = await Product.find({})\r\n        //await newGame.save();\r\n        app.get('/', (req,res) => {\r\n            res.send(`<a href=${localUrl(\"products\")}>to products<a>`);\r\n        })\r\n        app.get('/products', (req,res) => {\r\n            res.send(`<h2>All game: ${game[0].displayName}<h2/>`);\r\n        })\r\n        app.listen(port, () => {\r\n            console.log(`\\n\\nserver is listening on ${localUrl()}\\n\\nserver is listening on ${localUrl('products')}`)\r\n        })\r\n    } catch(err) {\r\n        console.log(err)\r\n    }\r\n}\r\n\r\nstart()\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./schema.js":
/*!*******************!*\
  !*** ./schema.js ***!
  \*******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const mongoose = __webpack_require__(/*! mongoose */ \"mongoose\")\r\nconst { Schema } = mongoose;\r\n\r\nconst categorySchema = new Schema({\r\n    displayName: String,\r\n    createdAt: Date,\r\n})\r\nconst productSchema = new Schema({\r\n    displayName: String,\r\n    category: categorySchema,\r\n    createdAt: Date,\r\n    totalRating: Number,\r\n    price: Number,\r\n})\r\n\r\nconst Product = mongoose.model('products', productSchema)\r\nconst Category = mongoose.model('catergry', categorySchema)\r\n\r\nmodule.exports = Product, Category;\n\n//# sourceURL=webpack:///./schema.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = express;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = mongoose;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;