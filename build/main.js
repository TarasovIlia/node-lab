/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nvar app = (0, express_1.default)();\r\nvar Product = __webpack_require__(/*! ./schema */ \"./schema.ts\");\r\nvar Category = __webpack_require__(/*! ./schema */ \"./schema.ts\");\r\nvar host = 'http://localhost:';\r\nvar port = process.env.PORT || 4200;\r\nvar localUrl = function (url) { return url ? \"\" + host + port + \"/\" + url : \"\" + host + port; };\r\nvar newGame = new Product({\r\n    displayName: \"test\",\r\n    category: new Category({ displayName: \"TEST\" }),\r\n    createdAt: Date.now(),\r\n    totalRating: 999,\r\n    price: 1\r\n});\r\nfunction start() {\r\n    return __awaiter(this, void 0, void 0, function () {\r\n        var game_1, err_1;\r\n        return __generator(this, function (_a) {\r\n            switch (_a.label) {\r\n                case 0:\r\n                    _a.trys.push([0, 4, , 5]);\r\n                    return [4 /*yield*/, mongoose_1.default.connect('mongodb+srv://IliyaTarasav:1oviver1@cluster0.esyae.mongodb.net/products')];\r\n                case 1:\r\n                    _a.sent();\r\n                    console.log('\\n\\nConnected');\r\n                    return [4 /*yield*/, Product.find({})];\r\n                case 2:\r\n                    game_1 = _a.sent();\r\n                    return [4 /*yield*/, newGame.save()];\r\n                case 3:\r\n                    _a.sent();\r\n                    app.get('/', function (req, res) {\r\n                        res.send(\"<a href=\" + localUrl(\"products\") + \">to products<a>\");\r\n                    });\r\n                    app.get('/products', function (req, res) {\r\n                        res.send(\"<h2>All game: \" + game_1[0].displayName + \"<h2/>\");\r\n                    });\r\n                    app.listen(port, function () {\r\n                        console.log(\"\\n\\nserver is listening on \" + localUrl('') + \"\\n\\nserver is listening on \" + localUrl('products'));\r\n                    });\r\n                    return [3 /*break*/, 5];\r\n                case 4:\r\n                    err_1 = _a.sent();\r\n                    console.log(err_1);\r\n                    return [3 /*break*/, 5];\r\n                case 5: return [2 /*return*/];\r\n            }\r\n        });\r\n    });\r\n}\r\nstart();\r\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./schema.ts":
/*!*******************!*\
  !*** ./schema.ts ***!
  \*******************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nvar mongoose_1 = __importDefault(__webpack_require__(/*! mongoose */ \"mongoose\"));\r\nvar Schema = mongoose_1.default.Schema;\r\nvar categorySchema = new Schema({\r\n    displayName: String,\r\n    createdAt: Date,\r\n});\r\nvar productSchema = new Schema({\r\n    displayName: String,\r\n    category: categorySchema,\r\n    createdAt: Date,\r\n    totalRating: Number,\r\n    price: Number,\r\n});\r\nvar product = mongoose_1.default.model('products', productSchema);\r\nvar category = mongoose_1.default.model('catergry', categorySchema);\r\nmodule.exports = product, category;\r\n\n\n//# sourceURL=webpack:///./schema.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./main.ts");
/******/ 	
/******/ })()
;