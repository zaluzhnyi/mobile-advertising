/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _fonts_stylesheet_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fonts/stylesheet.css */ \"./src/fonts/stylesheet.css\");\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _js_event_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/event.js */ \"./src/js/event.js\");\n/* harmony import */ var _js_event_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_event_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_location_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/location.js */ \"./src/js/location.js\");\n/* harmony import */ var _js_location_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_location_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFnQztBQUNYO0FBQ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0LXRhc2stMTAuMDMuMjMvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vZm9udHMvc3R5bGVzaGVldC5jc3MnO1xyXG5pbXBvcnQgICcuL21haW4uY3NzJztcclxuaW1wb3J0ICcuL2pzL2V2ZW50LmpzJztcclxuaW1wb3J0ICcuL2pzL2xvY2F0aW9uLmpzJztcclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/js/event.js":
/*!*************************!*\
  !*** ./src/js/event.js ***!
  \*************************/
/***/ (() => {

eval("var cards = document.querySelectorAll('.card');\ncards.forEach(function (el) {\n  el.addEventListener('click', function () {\n    var current = document.getElementsByClassName(\"active\");\n    current[0].className = current[0].className.replace(\" active\", \"\");\n    el.className += \" active\";\n    if (el.id === 'month') {\n      document.querySelector('.button-continue').setAttribute(\"href\", \"https://apple.com/\");\n    }\n    if (el.id === 'year') {\n      document.querySelector('.button-continue').setAttribute(\"href\", \"https://google.com/\");\n    }\n  });\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvZXZlbnQuanMuanMiLCJuYW1lcyI6WyJjYXJkcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJlbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXJyZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImNsYXNzTmFtZSIsInJlcGxhY2UiLCJpZCIsInF1ZXJ5U2VsZWN0b3IiLCJzZXRBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay0xMC4wMy4yMy8uL3NyYy9qcy9ldmVudC5qcz9mZDMwIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmQnKVxyXG5jYXJkcy5mb3JFYWNoKGVsPT57XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCk9PntcclxuICAgICAgICBsZXQgY3VycmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgY3VycmVudFswXS5jbGFzc05hbWUgPSBjdXJyZW50WzBdLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgICAgICBlbC5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICAgICAgaWYgKGVsLmlkID09PSdtb250aCcpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNvbnRpbnVlJykuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiaHR0cHM6Ly9hcHBsZS5jb20vXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5pZCA9PT0neWVhcicpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uLWNvbnRpbnVlJykuc2V0QXR0cmlidXRlKFwiaHJlZlwiLFwiaHR0cHM6Ly9nb29nbGUuY29tL1wiKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn0pXHJcbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsS0FBSyxHQUFHQyxRQUFRLENBQUNDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQztBQUNoREYsS0FBSyxDQUFDRyxPQUFPLENBQUMsVUFBQUMsRUFBRSxFQUFFO0VBQ2RBLEVBQUUsQ0FBQ0MsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLFlBQUk7SUFDNUIsSUFBSUMsT0FBTyxHQUFHTCxRQUFRLENBQUNNLHNCQUFzQixDQUFDLFFBQVEsQ0FBQztJQUN2REQsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDRSxTQUFTLEdBQUdGLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQ0UsU0FBUyxDQUFDQyxPQUFPLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQztJQUNsRUwsRUFBRSxDQUFDSSxTQUFTLElBQUksU0FBUztJQUN6QixJQUFJSixFQUFFLENBQUNNLEVBQUUsS0FBSSxPQUFPLEVBQUM7TUFDakJULFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUNDLFlBQVksQ0FBQyxNQUFNLEVBQUMsb0JBQW9CLENBQUM7SUFDeEY7SUFDQSxJQUFJUixFQUFFLENBQUNNLEVBQUUsS0FBSSxNQUFNLEVBQUM7TUFDaEJULFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLGtCQUFrQixDQUFDLENBQUNDLFlBQVksQ0FBQyxNQUFNLEVBQUMscUJBQXFCLENBQUM7SUFDekY7RUFDSixDQUFDLENBQUM7QUFDTixDQUFDLENBQUMifQ==\n//# sourceURL=webpack-internal:///./src/js/event.js\n");

/***/ }),

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/***/ (() => {

eval("var params = new URL(document.location).searchParams;\nvar language = window.navigator ? params.get(\"lang\") || Intl.DateTimeFormat().resolvedOptions().locale : \"en\";\nconsole.log(language);\nfetch(\"./Localizations/\".concat(language, \".json\")).then(function (response) {\n  return response.json();\n}).then(function (data) {\n  console.log(data);\n  document.querySelector('#Restore').innerHTML = data['Restore'];\n  document.querySelector('#UnlimitedAccess').innerHTML = data[\"Unlimited Access<br>to All Features\"];\n  document.querySelector('#UnlimitedDocuments').innerHTML = data[\"Unlimited documents\"];\n  document.querySelector('#ExportCloud').innerHTML = data[\"ExportCloud\"];\n  document.querySelector('#TextRecognition').innerHTML = data[\"Text recognition (OCR)\"];\n  document.querySelector('#Monthly').innerHTML = data[\"Monthly\"];\n  document.querySelector('#priceMonth').innerHTML = data[\"<strong>{{price}}</strong><br>per month\"];\n  document.querySelector('#freeDay').innerHTML = data[\"3 DAYS FREE\"];\n  document.querySelector('#monthPay').innerHTML = data[\"{{price}}/month\"];\n  document.querySelector('#Annually').innerHTML = data[\"Annually\"];\n  document.querySelector('#priceYear').innerHTML = data[\"<strong>{{price}}</strong><br>per year\"];\n  document.querySelector('#popular').innerHTML = data[\"MOST POPULAR\"];\n  document.querySelector('#monthPayYear').innerHTML = data[\"{{price}}/month\"];\n  document.querySelector('#buttonContinue').innerHTML = data[\"Continue\"];\n  document.querySelector('#auto').innerHTML = data[\"Auto-renewable. Cancel anytime.\"];\n  document.querySelector('#terms').innerHTML = data[\"Terms of Use\"];\n  document.querySelector('#privacy').innerHTML = data[\"Privacy Policy\"];\n  if (language === 'fr') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n    document.querySelector('#Monthly').style.fontSize = '14px';\n    document.querySelector('#Annually').style.fontSize = '14px';\n    document.querySelector('#freeDay').style.fontSize = '13px';\n    document.querySelector('#popular').style.fontSize = '13px';\n  }\n  if (language === 'ja') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n    document.querySelector('.card-container').style.marginTop = '20px';\n  }\n  if (language === 'ru') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n    document.querySelector('#freeDay').style.fontSize = '13px';\n    document.querySelector('#popular').style.fontSize = '13px';\n  }\n  if (language === 'es') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n  }\n})[\"catch\"](function (error) {\n  return console.error(error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9jYXRpb24uanMuanMiLCJuYW1lcyI6WyJwYXJhbXMiLCJVUkwiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwic2VhcmNoUGFyYW1zIiwibGFuZ3VhZ2UiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJnZXQiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJyZXNvbHZlZE9wdGlvbnMiLCJsb2NhbGUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzdHlsZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay0xMC4wMy4yMy8uL3NyYy9qcy9sb2NhdGlvbi5qcz80ZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBwYXJhbXMgPSAobmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbikpLnNlYXJjaFBhcmFtcztcclxubGV0IGxhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvciA/IChwYXJhbXMuZ2V0KFwibGFuZ1wiKSB8fFxyXG4gICAgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZSApIDogXCJlblwiO1xyXG5jb25zb2xlLmxvZyhsYW5ndWFnZSlcclxuZmV0Y2goYC4vTG9jYWxpemF0aW9ucy8ke2xhbmd1YWdlfS5qc29uYClcclxuICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgIC50aGVuKGRhdGEgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1Jlc3RvcmUnKS5pbm5lckhUTUwgPSBkYXRhWydSZXN0b3JlJ11cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVW5saW1pdGVkQWNjZXNzJykuaW5uZXJIVE1MID0gZGF0YVtcIlVubGltaXRlZCBBY2Nlc3M8YnI+dG8gQWxsIEZlYXR1cmVzXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1VubGltaXRlZERvY3VtZW50cycpLmlubmVySFRNTCA9IGRhdGFbXCJVbmxpbWl0ZWQgZG9jdW1lbnRzXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0V4cG9ydENsb3VkJykuaW5uZXJIVE1MID0gZGF0YVtcIkV4cG9ydENsb3VkXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1RleHRSZWNvZ25pdGlvbicpLmlubmVySFRNTCA9IGRhdGFbXCJUZXh0IHJlY29nbml0aW9uIChPQ1IpXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI01vbnRobHknKS5pbm5lckhUTUwgPSBkYXRhW1wiTW9udGhseVwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZU1vbnRoJykuaW5uZXJIVE1MID0gZGF0YVtcIjxzdHJvbmc+e3twcmljZX19PC9zdHJvbmc+PGJyPnBlciBtb250aFwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcmVlRGF5JykuaW5uZXJIVE1MID0gZGF0YVtcIjMgREFZUyBGUkVFXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbnRoUGF5JykuaW5uZXJIVE1MID0gZGF0YVtcInt7cHJpY2V9fS9tb250aFwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNBbm51YWxseScpLmlubmVySFRNTCA9IGRhdGFbXCJBbm51YWxseVwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcmljZVllYXInKS5pbm5lckhUTUwgPSBkYXRhW1wiPHN0cm9uZz57e3ByaWNlfX08L3N0cm9uZz48YnI+cGVyIHllYXJcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdWxhcicpLmlubmVySFRNTCA9IGRhdGFbXCJNT1NUIFBPUFVMQVJcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9udGhQYXlZZWFyJykuaW5uZXJIVE1MID0gZGF0YVtcInt7cHJpY2V9fS9tb250aFwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25Db250aW51ZScpLmlubmVySFRNTCA9IGRhdGFbXCJDb250aW51ZVwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhdXRvJykuaW5uZXJIVE1MID0gZGF0YVtcIkF1dG8tcmVuZXdhYmxlLiBDYW5jZWwgYW55dGltZS5cIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGVybXMnKS5pbm5lckhUTUwgPSBkYXRhW1wiVGVybXMgb2YgVXNlXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3ByaXZhY3knKS5pbm5lckhUTUwgPSBkYXRhW1wiUHJpdmFjeSBQb2xpY3lcIl1cclxuICAgICAgICBpZihsYW5ndWFnZT09PSdmcicpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVW5saW1pdGVkQWNjZXNzJykuc3R5bGUuZm9udFNpemUgPSAnMjZweCdcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI01vbnRobHknKS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQW5udWFsbHknKS5zdHlsZS5mb250U2l6ZSA9ICcxNHB4J1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnJlZURheScpLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3B1bGFyJykuc3R5bGUuZm9udFNpemUgPSAnMTNweCdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGFuZ3VhZ2U9PT0namEnKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1VubGltaXRlZEFjY2VzcycpLnN0eWxlLmZvbnRTaXplID0gJzI2cHgnXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRhaW5lcicpLnN0eWxlLm1hcmdpblRvcCA9ICcyMHB4J1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsYW5ndWFnZT09PSdydScpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVW5saW1pdGVkQWNjZXNzJykuc3R5bGUuZm9udFNpemUgPSAnMjZweCdcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZyZWVEYXknKS5zdHlsZS5mb250U2l6ZSA9ICcxM3B4J1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdWxhcicpLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxhbmd1YWdlPT09J2VzJyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNVbmxpbWl0ZWRBY2Nlc3MnKS5zdHlsZS5mb250U2l6ZSA9ICcyNnB4J1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTsiXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU0sR0FBSSxJQUFJQyxHQUFHLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDLENBQUVDLFlBQVk7QUFDdEQsSUFBSUMsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFNBQVMsR0FBSVAsTUFBTSxDQUFDUSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQ2pEQyxJQUFJLENBQUNDLGNBQWMsRUFBRSxDQUFDQyxlQUFlLEVBQUUs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\n//# sourceURL=webpack-internal:///./src/js/location.js\n");

/***/ }),

/***/ "./src/fonts/stylesheet.css":
/*!**********************************!*\
  !*** ./src/fonts/stylesheet.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZm9udHMvc3R5bGVzaGVldC5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC10YXNrLTEwLjAzLjIzLy4vc3JjL2ZvbnRzL3N0eWxlc2hlZXQuY3NzP2NiZDkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/fonts/stylesheet.css\n");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbWFpbi5jc3MuanMiLCJtYXBwaW5ncyI6IjtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdC10YXNrLTEwLjAzLjIzLy4vc3JjL21haW4uY3NzPzc2YmIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/main.css\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;