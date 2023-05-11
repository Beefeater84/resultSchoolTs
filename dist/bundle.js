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

/***/ "./src/reset.scss":
/*!************************!*\
  !*** ./src/reset.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tshomework/./src/reset.scss?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tshomework/./src/styles.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset.scss */ \"./src/reset.scss\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n\n\nvar background = document.getElementById('background');\nvar player = document.querySelector('audio#sound_player');\nvar volumeRatio = document.querySelector('input[type=\"range\"]');\nvar btns = document.querySelectorAll('.box_sound_btn');\nbtns.forEach(function (btn) {\n    btn.addEventListener('click', function () {\n        if (!btn) {\n            console.error('No btn');\n            return;\n        }\n        setBgImage(btn);\n        setSound(btn);\n    });\n});\nif (volumeRatio) {\n    volumeRatio.addEventListener('change', function () {\n        if (!player || !volumeRatio) {\n            console.error('No player or volumeRatio');\n            return;\n        }\n        player.volume = Number(volumeRatio.value) / 100;\n    });\n}\nvar setBgImage = function (btn) {\n    var src = btn.getAttribute('data-imgSrc');\n    if (!src || !background) {\n        console.error('No src or background');\n        return;\n    }\n    if (background.style.backgroundImage !== \"url(\".concat(src, \")\")) {\n        // If background image is not the same as src, set it\n        background.style.backgroundImage = \"url(\".concat(src, \")\");\n    }\n};\nvar setSound = function (btn) {\n    var soundPath = btn.getAttribute('data-sound');\n    if (!soundPath) {\n        console.error('No soundPath');\n        return;\n    }\n    if (!player) {\n        console.error('No player');\n        return;\n    }\n    // Get the current sound to understand - if it is playing\n    var currentSound = player.getAttribute('src');\n    if (currentSound === soundPath && player.paused) {\n        // If we push the button that is playing and audio is paused\n        // we set Pause Icon and continue playing\n        player.play();\n        setPauseIcon(false, btn);\n        return;\n    }\n    if (currentSound === soundPath && !player.paused) {\n        // If we push the button that is playing, we set Pause Icon and pause playing\n        player.pause();\n        setPauseIcon(true, btn);\n        return;\n    }\n    // If it is a new sound - change the path, it will start  from the begining\n    // and\n    player.setAttribute('src', soundPath);\n    removePauseIcon();\n    player.play();\n};\nfunction setPauseIcon(isPlaying, btn) {\n    removePauseIcon();\n    if (isPlaying) {\n        btn.classList.add('pause');\n        var img = document.createElement('img');\n        img.setAttribute('src', './assets/icons/pause.svg');\n        img.setAttribute(\"width\", \"60\");\n        img.setAttribute(\"height\", \"60\");\n        img.setAttribute(\"id\", \"pauseIcon\");\n        btn.appendChild(img);\n    }\n}\nfunction removePauseIcon() {\n    btns.forEach(function (btn) {\n        btn.classList.remove('pause');\n        var pauseIcon = btn.querySelector('#pauseIcon');\n        if (pauseIcon) {\n            btn.removeChild(pauseIcon);\n        }\n    });\n}\n\n\n//# sourceURL=webpack://tshomework/./src/index.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;