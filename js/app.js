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

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/functions.js */ \"./src/js/modules/functions.js\");\n/* harmony import */ var _modules_choice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/choice.js */ \"./src/js/modules/choice.js\");\n/* harmony import */ var _modules_choice2_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/choice2.js */ \"./src/js/modules/choice2.js\");\n\r\n_modules_functions_js__WEBPACK_IMPORTED_MODULE_0__.isWebp();\r\n/*\r\nimport Swiper, { Navigation, Pagination } from 'swiper';\r\nconst swiper = new Swiper();\r\n*/\r\n\r\n\r\n_modules_choice_js__WEBPACK_IMPORTED_MODULE_1__.choice();\r\n\r\n\r\n_modules_choice2_js__WEBPACK_IMPORTED_MODULE_2__.choice2();\r\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/app.js?");

/***/ }),

/***/ "./src/js/modules/choice.js":
/*!**********************************!*\
  !*** ./src/js/modules/choice.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"choice\": () => (/* binding */ choice)\n/* harmony export */ });\nfunction choice() {\n  const blockChoice = document.querySelector(\".voices\");\n  const clickChoice = document.querySelector(\".voice\");\n  const imgGame = Array.from(document.querySelectorAll(\".voices_img\"));\n  const elementSelection = document.querySelector(\".img_game\");\n  const elementSelections = document.querySelector(\".rival\");\n  const btnGame = document.querySelector(\".btn_start_game\");\n  const imgGameRival = Array.from(\n    document.querySelectorAll(\".rival_voices_img\")\n  );\n  const resultClass = document.querySelector(\".result_arr\");\n  const resultClass2 = document.querySelector(\".result_arr2\");\n\n  // элементы\n  const stoneL = document.querySelector(\".stoneL \");\n  const scissorsL = document.querySelector(\".scissorsL \");\n  const paperL = document.querySelector(\".paperL \");\n\n  const stoneR = document.querySelector(\".stoneR\");\n  const scissorsR = document.querySelector(\".scissorsR\");\n  const paperR = document.querySelector(\".paperR\");\n\n  clickChoice.addEventListener(\"click\", function () {\n    blockChoice.style.display = \"block\";\n  });\n\n  // Выбор элемента\n  function clickBlock() {\n    imgGame.forEach((element) => {\n      element.addEventListener(\"click\", (e) => {\n        imgGame.forEach((el) => {\n          el.classList.remove(\"._active\");\n          blockChoice.style.display = \"none\";\n        });\n        element.classList.toggle(\"._active\");\n        const cloneImg = element.cloneNode(true);\n        elementSelection.replaceChildren(cloneImg);\n      });\n    });\n  }\n\n  clickBlock();\n\n  // Ответ соперника по кнопке\n  // btnGame.onclick = boom;\n  // function boom() {\n  //   function boomArray(array) {\n  //     const rival = (Math.random() * array.length) | 0;\n  //     const outRival = array[rival];\n  //     outRival.style.display = \"block\";\n  //     return outRival;\n  //   }\n  //   const outRival = boomArray(imgGameRival);\n  //   elementSelections.replaceChildren(outRival);\n  // }\n\n  function GameClick() {\n    // resultClass.innerHTML = \"\";\n    imgGame.forEach((element) => {\n      element.addEventListener(\"click\", (e) => {\n        // Ответ соперника по кнопке\n        btnGame.onclick = boom;\n        function boom() {\n          function boomArray(array) {\n            const rival = (Math.random() * array.length) | 0;\n            const outRival = array[rival];\n            outRival.style.display = \"block\";\n            return outRival;\n          }\n          const outRival = boomArray(imgGameRival);\n          elementSelections.replaceChildren(outRival);\n          const cloneImgResult = element.cloneNode(true);\n          resultClass.replaceChildren(cloneImgResult);\n          const outRivalResult = elementSelections.cloneNode(true);\n          resultClass2.replaceChildren(outRivalResult);\n        }\n      });\n    });\n  }\n  GameClick();\n}\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/choice.js?");

/***/ }),

/***/ "./src/js/modules/choice2.js":
/*!***********************************!*\
  !*** ./src/js/modules/choice2.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"choice2\": () => (/* binding */ choice2)\n/* harmony export */ });\nfunction choice2() {\n  window.addEventListener(\"load\", function () {\n    const countUser = document.querySelector(\".count-user\");\n    const countComp = document.querySelector(\".count-comp\");\n    const userField = document.querySelector(\".user-field\");\n    const compField = document.querySelector(\".comp-field\");\n    const play = document.querySelector(\".play\");\n    const fields = document.querySelectorAll(\".field\");\n    const res = document.querySelector(\".results\");\n\n    let userStep,\n      compStep,\n      countU = 0,\n      countC = 0,\n      blocked = false;\n\n    function choiceUser(e) {\n      if (blocked) return;\n      const target = e.target;\n      if (target.classList.contains(\"field\")) {\n        userStep = target.dataset.field;\n        fields.forEach((item) => item.classList.remove(\"active\", \"error\"));\n        target.classList.add(\"active\");\n\n        choiceComp();\n      }\n    }\n    function choiceComp() {\n      blocked = true;\n      const rand = Math.floor(Math.random() * 3);\n      compField.classList.add(\"blink\");\n      const compFields = compField.querySelectorAll(\".field\");\n\n      setTimeout(() => {\n        compField.classList.remove(\"blink\");\n        compStep = compFields[rand].dataset.field;\n        compFields[rand].classList.add(\"active\");\n        winner();\n      }, 3000);\n    }\n    function winner() {\n      blocked = false;\n      const comb = userStep + compStep;\n      console.log(comb);\n\n      switch (comb) {\n        case \"rr\":\n        case \"ss\":\n        case \"pp\":\n          res.innerText = \"Ничья\";\n          break;\n\n        case \"rs\":\n        case \"sp\":\n        case \"pr\":\n          res.innerText = \"Победа\";\n          countU++;\n          countUser.innerText = countU;\n          compField\n            .querySelector(\"[data-field=\" + compStep + \"]\")\n            .classList.add(\"error\");\n          break;\n\n        case \"sr\":\n        case \"ps\":\n        case \"rp\":\n          res.innerText = \"Проигрыш\";\n          countC++;\n          countComp.innerText = countC;\n          userField\n            .querySelector(\"[data-field=\" + userStep + \"]\")\n            .classList.add(\"error\");\n          break;\n\n        default:\n          break;\n      }\n    }\n    function playGame() {\n      countU = countC = 0;\n      res.innerText = \"Сделайте выбор\";\n      countUser.innerText = \"0\";\n      countComp.innerText = \"0\";\n      fields.forEach((item) => item.classList.remove(\"active\", \"error\"));\n    }\n\n    play.addEventListener(\"click\", playGame);\n    userField.addEventListener(\"click\", choiceUser);\n  });\n}\n\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/choice2.js?");

/***/ }),

/***/ "./src/js/modules/functions.js":
/*!*************************************!*\
  !*** ./src/js/modules/functions.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isWebp\": () => (/* binding */ isWebp)\n/* harmony export */ });\n/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */\r\nfunction isWebp() {\r\n\t// Проверка поддержки webp\r\n\tfunction testWebP(callback) {\r\n\t\tlet webP = new Image();\r\n\t\twebP.onload = webP.onerror = function () {\r\n\t\t\tcallback(webP.height == 2);\r\n\t\t};\r\n\t\twebP.src = \"data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA\";\r\n\t}\r\n\t// Добавление класса _webp или _no-webp для HTML\r\n\ttestWebP(function (support) {\r\n\t\tlet className = support === true ? 'webp' : 'no-webp';\r\n\t\tdocument.documentElement.classList.add(className);\r\n\t});\r\n}\n\n//# sourceURL=webpack://gulp-2022/./src/js/modules/functions.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/app.js");
/******/ 	
/******/ })()
;