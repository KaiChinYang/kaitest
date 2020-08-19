/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _testt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./testt.js */ \"./testt.js\");\n//import * as webmidi from \"../public/webmidi.min.js\";\n//import WebMidi from \"webmidi\";\n//import utils.js WebMidi from 'path/to/webmidi';\n//import * as webmidi from \"./node_modules/webmidi/webmidi.min.js\";\n//import WebMidi from 'path/to/webmidi';\n //console.log(k)  //測試\n\nfunction getRandom(min, max) {\n  return Math.floor(Math.random() * (max - min + 1)) + min;\n}\n\n;\n\nfunction output_midi(playname, num, num2) {\n  playname.playNote([num, num2], 1, {\n    duration: 1000,\n    velocity: 0.87,\n    time: WebMidi.time + 1000\n  });\n}\n\nwindow.onload = function () {\n  var noteReference = new NoteReference();\n  var domPiano = new DomPiano(0, 8, noteReference);\n  var midiAccess = new MIDIAccess(noteReference, domPiano);\n  midiAccess.init(); //domPiano.noteusing2()\n};\n\nWebMidi.enable(function (err) {\n  //啟用Ｗebmidi\n  if (err) console.log(\"An error occurred\", err); //做事囉～\n\n  var noteReference = new NoteReference();\n  var domPiano = new DomPiano(0, 8, noteReference);\n  var midiAccess = new MIDIAccess(noteReference, domPiano);\n  domPiano.noteusing2(); ///\n\n  console.log(WebMidi.inputs); //看有哪些inputs\n\n  console.log(WebMidi.outputs); //看有哪些outputs\n  //抓取midi值\n  //var input = WebMidi.inputs[0];  //a series keyboard...\n\n  var input = WebMidi.getInputByName(\"IAC 驅動程式 IAC 匯流排 1\");\n  var input2 = WebMidi.getInputByName(\"A-Series Keyboard Keyboard\"); //=input[0]\n\n  input.addListener('noteon', \"all\", //抓取 noteon訊息 所有頻道\n  function (midi) {\n    console.log(\" IAC Received 'noteon' message (\" + midi.note.name + midi.note.octave + \").\"); //音名\n\n    console.log(midi.note.number); //midi value\n    //output[0]= iac匯流排\n\n    var output = WebMidi.getOutputByName(\"IAC 驅動程式 IAC 匯流排 1\");\n    /*if (midi.note.number <= 93)\n      output.playNote((midi.note.number + 7), 1, { duration: 1000, velocity: 0.87, time: WebMidi.time + 1000 });*/\n  });\n  input2.addListener('noteon', \"all\", // what keyboard pressed\n  function (midi) {\n    console.log(\"pressing keyboard know\");\n    var output = WebMidi.getOutputByName(\"IAC 驅動程式 IAC 匯流排 1\");\n    var midivalue = midi.note.number;\n\n    if (midivalue < 48) {\n      var rannumber = getRandom(1, 4);\n      var permidi = midivalue % 12; // 1 or 5 \n\n      if (permidi === 0 | permidi % 12 === 7) {\n        /*output.playNote([(midivalue + rannumber * 12 + 4), (midivalue + rannumber * 12 + 7)], 1, { duration: 1000, velocity: 0.87, time: WebMidi.time + 1000 });*/\n        output_midi(output, midivalue + rannumber * 12 + 4, midivalue + rannumber * 12 + 7);\n      } else {\n        switch (permidi) {\n          //2,4,5,9,11 if midi in output the note\n          case 1:\n            break;\n\n          case 3:\n            break;\n\n          case 6:\n            break;\n\n          case 8:\n            break;\n\n          case 10:\n            break;\n\n          case 2:\n            output_midi(output, midivalue + rannumber * 12 + 3, midivalue + rannumber * 12 + 9);\n            break;\n\n          case 4:\n            output_midi(output, midivalue + rannumber * 12 + 3, midivalue + rannumber * 12 + 8);\n            break;\n\n          case 5:\n            output_midi(output, midivalue + rannumber * 12 + 4, midivalue + rannumber * 12 + 9);\n            break;\n\n          case 9:\n            output_midi(output, midivalue + rannumber * 12 + 3, midivalue + rannumber * 12 + 8);\n            break;\n\n          case 11:\n            output_midi(output, midivalue + rannumber * 12 + 3, midivalue + rannumber * 12 + 8);\n            break;\n        }\n      }\n    }\n    /*output.playNote((60), 1, { duration: 1000, velocity: 0.87, time: WebMidi.time + 1000 });*/\n\n  });\n});\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./testt.js":
/*!******************!*\
  !*** ./testt.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n//it can\nWebMidi.enable(function (err) {\n  if (err) console.log(\"An error occurred\", err);\n  var output = WebMidi.getOutputByName(\"IAC 驅動程式 IAC 匯流排 1\");\n  output.playNote(\"C2\", 1, {\n    duration: 1000,\n    velocity: 0.25,\n    time: WebMidi.time + 3000\n  });\n});\nvar k = 11000;\n/* harmony default export */ __webpack_exports__[\"default\"] = (k);\n\n//# sourceURL=webpack:///./testt.js?");

/***/ })

/******/ });