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

eval("var params = new URL(document.location).searchParams;\nvar language = window.navigator ? params.get(\"lang\") || Intl.DateTimeFormat().resolvedOptions().locale : \"en\";\nconsole.log(language);\nfetch(\".dist/Localizations/\".concat(language, \".json\")).then(function (response) {\n  return response.json();\n}).then(function (data) {\n  console.log(data);\n  document.querySelector('#Restore').innerHTML = data['Restore'];\n  document.querySelector('#UnlimitedAccess').innerHTML = data[\"Unlimited Access<br>to All Features\"];\n  document.querySelector('#UnlimitedDocuments').innerHTML = data[\"Unlimited documents\"];\n  document.querySelector('#ExportCloud').innerHTML = data[\"ExportCloud\"];\n  document.querySelector('#TextRecognition').innerHTML = data[\"Text recognition (OCR)\"];\n  document.querySelector('#Monthly').innerHTML = data[\"Monthly\"];\n  document.querySelector('#priceMonth').innerHTML = data[\"<strong>{{price}}</strong><br>per month\"];\n  document.querySelector('#freeDay').innerHTML = data[\"3 DAYS FREE\"];\n  document.querySelector('#monthPay').innerHTML = data[\"{{price}}/month\"];\n  document.querySelector('#Annually').innerHTML = data[\"Annually\"];\n  document.querySelector('#priceYear').innerHTML = data[\"<strong>{{price}}</strong><br>per year\"];\n  document.querySelector('#popular').innerHTML = data[\"MOST POPULAR\"];\n  document.querySelector('#monthPayYear').innerHTML = data[\"{{price}}/month\"];\n  document.querySelector('#buttonContinue').innerHTML = data[\"Continue\"];\n  document.querySelector('#auto').innerHTML = data[\"Auto-renewable. Cancel anytime.\"];\n  document.querySelector('#terms').innerHTML = data[\"Terms of Use\"];\n  document.querySelector('#privacy').innerHTML = data[\"Privacy Policy\"];\n  if (language === 'fr') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n    document.querySelector('#Monthly').style.fontSize = '14px';\n    document.querySelector('#Annually').style.fontSize = '14px';\n    document.querySelector('#freeDay').style.fontSize = '13px';\n    document.querySelector('#popular').style.fontSize = '13px';\n  }\n  if (language === 'ja') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n    document.querySelector('.card-container').style.marginTop = '20px';\n  }\n  if (language === 'ru') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n    document.querySelector('#freeDay').style.fontSize = '13px';\n    document.querySelector('#popular').style.fontSize = '13px';\n  }\n  if (language === 'es') {\n    document.querySelector('#UnlimitedAccess').style.fontSize = '26px';\n  }\n})[\"catch\"](function (error) {\n  return console.error(error);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvbG9jYXRpb24uanMuanMiLCJuYW1lcyI6WyJwYXJhbXMiLCJVUkwiLCJkb2N1bWVudCIsImxvY2F0aW9uIiwic2VhcmNoUGFyYW1zIiwibGFuZ3VhZ2UiLCJ3aW5kb3ciLCJuYXZpZ2F0b3IiLCJnZXQiLCJJbnRsIiwiRGF0ZVRpbWVGb3JtYXQiLCJyZXNvbHZlZE9wdGlvbnMiLCJsb2NhbGUiLCJjb25zb2xlIiwibG9nIiwiZmV0Y2giLCJjb25jYXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsInF1ZXJ5U2VsZWN0b3IiLCJpbm5lckhUTUwiLCJzdHlsZSIsImZvbnRTaXplIiwibWFyZ2luVG9wIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3Rlc3QtdGFzay0xMC4wMy4yMy8uL3NyYy9qcy9sb2NhdGlvbi5qcz80ZDE2Il0sInNvdXJjZXNDb250ZW50IjpbImxldCBwYXJhbXMgPSAobmV3IFVSTChkb2N1bWVudC5sb2NhdGlvbikpLnNlYXJjaFBhcmFtcztcclxubGV0IGxhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvciA/IChwYXJhbXMuZ2V0KFwibGFuZ1wiKSB8fFxyXG4gICAgSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLmxvY2FsZSApIDogXCJlblwiO1xyXG5jb25zb2xlLmxvZyhsYW5ndWFnZSlcclxuZmV0Y2goYC5kaXN0L0xvY2FsaXphdGlvbnMvJHtsYW5ndWFnZX0uanNvbmApXHJcbiAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNSZXN0b3JlJykuaW5uZXJIVE1MID0gZGF0YVsnUmVzdG9yZSddXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1VubGltaXRlZEFjY2VzcycpLmlubmVySFRNTCA9IGRhdGFbXCJVbmxpbWl0ZWQgQWNjZXNzPGJyPnRvIEFsbCBGZWF0dXJlc1wiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNVbmxpbWl0ZWREb2N1bWVudHMnKS5pbm5lckhUTUwgPSBkYXRhW1wiVW5saW1pdGVkIGRvY3VtZW50c1wiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNFeHBvcnRDbG91ZCcpLmlubmVySFRNTCA9IGRhdGFbXCJFeHBvcnRDbG91ZFwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNUZXh0UmVjb2duaXRpb24nKS5pbm5lckhUTUwgPSBkYXRhW1wiVGV4dCByZWNvZ25pdGlvbiAoT0NSKVwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNNb250aGx5JykuaW5uZXJIVE1MID0gZGF0YVtcIk1vbnRobHlcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2VNb250aCcpLmlubmVySFRNTCA9IGRhdGFbXCI8c3Ryb25nPnt7cHJpY2V9fTwvc3Ryb25nPjxicj5wZXIgbW9udGhcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnJlZURheScpLmlubmVySFRNTCA9IGRhdGFbXCIzIERBWVMgRlJFRVwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb250aFBheScpLmlubmVySFRNTCA9IGRhdGFbXCJ7e3ByaWNlfX0vbW9udGhcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjQW5udWFsbHknKS5pbm5lckhUTUwgPSBkYXRhW1wiQW5udWFsbHlcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJpY2VZZWFyJykuaW5uZXJIVE1MID0gZGF0YVtcIjxzdHJvbmc+e3twcmljZX19PC9zdHJvbmc+PGJyPnBlciB5ZWFyXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVsYXInKS5pbm5lckhUTUwgPSBkYXRhW1wiTU9TVCBQT1BVTEFSXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vbnRoUGF5WWVhcicpLmlubmVySFRNTCA9IGRhdGFbXCJ7e3ByaWNlfX0vbW9udGhcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uQ29udGludWUnKS5pbm5lckhUTUwgPSBkYXRhW1wiQ29udGludWVcIl1cclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXV0bycpLmlubmVySFRNTCA9IGRhdGFbXCJBdXRvLXJlbmV3YWJsZS4gQ2FuY2VsIGFueXRpbWUuXCJdXHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rlcm1zJykuaW5uZXJIVE1MID0gZGF0YVtcIlRlcm1zIG9mIFVzZVwiXVxyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcml2YWN5JykuaW5uZXJIVE1MID0gZGF0YVtcIlByaXZhY3kgUG9saWN5XCJdXHJcbiAgICAgICAgaWYobGFuZ3VhZ2U9PT0nZnInKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1VubGltaXRlZEFjY2VzcycpLnN0eWxlLmZvbnRTaXplID0gJzI2cHgnXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNNb250aGx5Jykuc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI0FubnVhbGx5Jykuc3R5bGUuZm9udFNpemUgPSAnMTRweCdcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZyZWVEYXknKS5zdHlsZS5mb250U2l6ZSA9ICcxM3B4J1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcG9wdWxhcicpLnN0eWxlLmZvbnRTaXplID0gJzEzcHgnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxhbmd1YWdlPT09J2phJyl7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNVbmxpbWl0ZWRBY2Nlc3MnKS5zdHlsZS5mb250U2l6ZSA9ICcyNnB4J1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250YWluZXInKS5zdHlsZS5tYXJnaW5Ub3AgPSAnMjBweCdcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobGFuZ3VhZ2U9PT0ncnUnKXtcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI1VubGltaXRlZEFjY2VzcycpLnN0eWxlLmZvbnRTaXplID0gJzI2cHgnXHJcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmcmVlRGF5Jykuc3R5bGUuZm9udFNpemUgPSAnMTNweCdcclxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BvcHVsYXInKS5zdHlsZS5mb250U2l6ZSA9ICcxM3B4J1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsYW5ndWFnZT09PSdlcycpe1xyXG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjVW5saW1pdGVkQWNjZXNzJykuc3R5bGUuZm9udFNpemUgPSAnMjZweCdcclxuICAgICAgICB9XHJcblxyXG4gICAgfSlcclxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7Il0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFNLEdBQUksSUFBSUMsR0FBRyxDQUFDQyxRQUFRLENBQUNDLFFBQVEsQ0FBQyxDQUFFQyxZQUFZO0FBQ3RELElBQUlDLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxTQUFTLEdBQUlQLE1BQU0sQ0FBQ1EsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUNqREMsSUFBSSxDQUFDQyxjQUFjLEVBQUUsQ0FBQ0MsZUFBZSxF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\n//# sourceURL=webpack-internal:///./src/js/location.js\n");

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