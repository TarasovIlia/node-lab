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

eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\n__webpack_require__(/*! reflect-metadata */ \"reflect-metadata\");\r\nconst express_1 = __importDefault(__webpack_require__(/*! express */ \"express\"));\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst Products_1 = __webpack_require__(/*! ./model/Products */ \"./model/Products.ts\");\r\nconst Categories_1 = __webpack_require__(/*! ./model/Categories */ \"./model/Categories.ts\");\r\nconst app = (0, express_1.default)();\r\nconst config = __webpack_require__(/*! config */ \"config\");\r\nconst HOST = config.get('host');\r\nconst PORT = config.get('port') || 4200;\r\nconst localUrl = (url) => (url ? `${HOST}${PORT}/${url}` : `${HOST}${PORT}`);\r\napp.use('/api/products', __webpack_require__(/*! ./routes/get.all.game */ \"./routes/get.all.game.ts\"));\r\napp.use('/api/products', __webpack_require__(/*! ./routes/get.game */ \"./routes/get.game.ts\"));\r\napp.use('/api/categories', __webpack_require__(/*! ./routes/get.all.categories */ \"./routes/get.all.categories.ts\"));\r\napp.use('/api/categories', __webpack_require__(/*! ./routes/add.categories */ \"./routes/add.categories.ts\"));\r\nfunction start() {\r\n    (0, typeorm_1.createConnection)({\r\n        type: 'postgres',\r\n        host: 'localhost',\r\n        port: 5432,\r\n        username: 'postgres',\r\n        password: '1oviver1',\r\n        database: 'products',\r\n        entities: [\r\n            Products_1.Games,\r\n            Categories_1.Categories\r\n        ],\r\n        synchronize: true,\r\n        logging: false\r\n    });\r\n    app.listen(PORT, () => console.log(`\\n\\nserver run on port ${localUrl('')}`));\r\n}\r\nstart();\r\n\n\n//# sourceURL=webpack:///./main.ts?");

/***/ }),

/***/ "./model/Categories.ts":
/*!*****************************!*\
  !*** ./model/Categories.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Categories = void 0;\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nlet Categories = class Categories {\r\n};\r\n__decorate([\r\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\r\n    __metadata(\"design:type\", Number)\r\n], Categories.prototype, \"id\", void 0);\r\n__decorate([\r\n    (0, typeorm_1.Column)(),\r\n    __metadata(\"design:type\", String)\r\n], Categories.prototype, \"category\", void 0);\r\nCategories = __decorate([\r\n    (0, typeorm_1.Entity)()\r\n], Categories);\r\nexports.Categories = Categories;\r\n\n\n//# sourceURL=webpack:///./model/Categories.ts?");

/***/ }),

/***/ "./model/Products.ts":
/*!***************************!*\
  !*** ./model/Products.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {\r\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\r\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\r\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\r\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\r\n};\r\nvar __metadata = (this && this.__metadata) || function (k, v) {\r\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nexports.Games = void 0;\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nlet Games = class Games {\r\n};\r\n__decorate([\r\n    (0, typeorm_1.PrimaryGeneratedColumn)(),\r\n    __metadata(\"design:type\", Number)\r\n], Games.prototype, \"id\", void 0);\r\n__decorate([\r\n    (0, typeorm_1.Column)(),\r\n    __metadata(\"design:type\", String)\r\n], Games.prototype, \"display_name\", void 0);\r\n__decorate([\r\n    (0, typeorm_1.Column)(),\r\n    __metadata(\"design:type\", Number)\r\n], Games.prototype, \"price\", void 0);\r\n__decorate([\r\n    (0, typeorm_1.Column)(),\r\n    __metadata(\"design:type\", Number)\r\n], Games.prototype, \"total_rating\", void 0);\r\n__decorate([\r\n    (0, typeorm_1.Column)(),\r\n    __metadata(\"design:type\", Date)\r\n], Games.prototype, \"create_at\", void 0);\r\n__decorate([\r\n    (0, typeorm_1.Column)(),\r\n    __metadata(\"design:type\", String)\r\n], Games.prototype, \"category\", void 0);\r\nGames = __decorate([\r\n    (0, typeorm_1.Entity)()\r\n], Games);\r\nexports.Games = Games;\r\n\n\n//# sourceURL=webpack:///./model/Products.ts?");

/***/ }),

/***/ "./routes/add.categories.ts":
/*!**********************************!*\
  !*** ./routes/add.categories.ts ***!
  \**********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst Categories_1 = __webpack_require__(/*! ../model/Categories */ \"./model/Categories.ts\");\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst router = (0, express_1.Router)();\r\nrouter.post('/add', function (req, res) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const category = new Categories_1.Categories();\r\n            category.category = 'Action';\r\n            const categoryRepository = (0, typeorm_1.getRepository)(Categories_1.Categories);\r\n            yield categoryRepository.save(category);\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n        }\r\n    });\r\n});\r\nmodule.exports = router;\r\n\n\n//# sourceURL=webpack:///./routes/add.categories.ts?");

/***/ }),

/***/ "./routes/get.all.categories.ts":
/*!**************************************!*\
  !*** ./routes/get.all.categories.ts ***!
  \**************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst Categories_1 = __webpack_require__(/*! ../model/Categories */ \"./model/Categories.ts\");\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst router = (0, express_1.Router)();\r\nrouter.get('/get/all', function (req, res) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const categoryRepository = (0, typeorm_1.getRepository)(Categories_1.Categories);\r\n            const allGame = yield categoryRepository.find();\r\n            res.send(allGame);\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n        }\r\n    });\r\n});\r\nmodule.exports = router;\r\n//const game = new Games()\r\n// game.display_name = 'The Witcher';\r\n// game.price = 56;\r\n// game.total_rating = 10;\r\n// game.category = 'Action';\r\n// game.create_at = new Date(2013,3,3);\r\n\n\n//# sourceURL=webpack:///./routes/get.all.categories.ts?");

/***/ }),

/***/ "./routes/get.all.game.ts":
/*!********************************!*\
  !*** ./routes/get.all.game.ts ***!
  \********************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst Products_1 = __webpack_require__(/*! ../model/Products */ \"./model/Products.ts\");\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst router = (0, express_1.Router)();\r\nrouter.get('/get/all', function (req, res) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const gameRepository = (0, typeorm_1.getRepository)(Products_1.Games);\r\n            const allGame = yield gameRepository.find();\r\n            res.send(allGame);\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n        }\r\n    });\r\n});\r\nmodule.exports = router;\r\n//const game = new Games()\r\n// game.display_name = 'The Witcher';\r\n// game.price = 56;\r\n// game.total_rating = 10;\r\n// game.category = 'Action';\r\n// game.create_at = new Date(2013,3,3);\r\n\n\n//# sourceURL=webpack:///./routes/get.all.game.ts?");

/***/ }),

/***/ "./routes/get.game.ts":
/*!****************************!*\
  !*** ./routes/get.game.ts ***!
  \****************************/
/***/ (function(module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\r\nconst typeorm_1 = __webpack_require__(/*! typeorm */ \"typeorm\");\r\nconst Products_1 = __webpack_require__(/*! ../model/Products */ \"./model/Products.ts\");\r\nconst express_1 = __webpack_require__(/*! express */ \"express\");\r\nconst router = (0, express_1.Router)();\r\nrouter.get('/get/one', function (req, res) {\r\n    return __awaiter(this, void 0, void 0, function* () {\r\n        try {\r\n            const gameRepository = (0, typeorm_1.getRepository)(Products_1.Games);\r\n            const allGame = yield gameRepository.findOne(5);\r\n            res.send(allGame);\r\n        }\r\n        catch (error) {\r\n            console.log(error);\r\n        }\r\n    });\r\n});\r\nmodule.exports = router;\r\n//const game = new Games()\r\n// game.display_name = 'The Witcher';\r\n// game.price = 56;\r\n// game.total_rating = 10;\r\n// game.category = 'Action';\r\n// game.create_at = new Date(2013,3,3);\r\n\n\n//# sourceURL=webpack:///./routes/get.game.ts?");

/***/ }),

/***/ "config":
/*!*************************!*\
  !*** external "config" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("config");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

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