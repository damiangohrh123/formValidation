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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const content = document.querySelector('.content');\n\nconst createFormField = (labelText, inputType, inputId, inputName) => {\n  const fieldContainer = document.createElement('div');\n  \n  const label = document.createElement('label');\n  label.setAttribute('for', inputId);\n  label.textContent = labelText;\n  fieldContainer.appendChild(label);\n  \n  const input = document.createElement('input');\n  input.setAttribute('type', inputType);\n  input.setAttribute('id', inputId);\n  input.setAttribute('name', inputName);\n  fieldContainer.appendChild(input);\n  \n  return fieldContainer;\n};\n\nconst createForm = () => {\n  const form = document.createElement('form');\n  form.setAttribute('id', 'form');\n  \n  const formFieldData = [\n      ['First Name ', 'text', 'firstName', 'firstName'],\n      ['Last Name ', 'text', 'lastName', 'lastName'],\n      ['Email ', 'email', 'userEmail', 'userEmail'],\n      ['Country ', 'text', 'country', 'country'],\n      ['ZIP Code ', 'text', 'zipCode', 'zipCode'],\n      ['Password ', 'password', 'password', 'password'],\n      ['Password Confirm ', 'password', 'passwordConfirm', 'passwordConfirm']\n  ];\n  \n  for (let i = 0; i < formFieldData.length; i++) {\n    const formField = createFormField(...formFieldData[i]);\n    form.appendChild(formField);\n  }\n\n  content.appendChild(form);\n};\n\ncreateForm();\n\n//# sourceURL=webpack://formvalidation/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;