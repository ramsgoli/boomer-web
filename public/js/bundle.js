/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// first we make sure annyang started succesfully


//----------Module imports ------------

var cal = __webpack_require__(1);
var cats = __webpack_require__(3);
var handleGoogleLogin = __webpack_require__(2);


//-------------------------------------


if (annyang) {
  // define the functions our commands will run.
  //
  var showCats = cats.showCats;
  var showCal = cal.showCal;
  var login = handleGoogleLogin.signIn;

  var hello = function() {
      console.log("hello!");
  };

  var showFlickr = function(tag) {
    $('#flickrGallery').show();
    $('#flickrLoader p').text('Searching for '+tag).fadeIn('fast');
    var url = '//api.flickr.com/services/rest/?method=flickr.photos.search&api_key=a828a6571bb4f0ff8890f7a386d61975&sort=interestingness-desc&per_page=9&format=json&callback=jsonFlickrApi&tags='+tag;
    $.ajax({
      type: 'GET',
      url: url,
      async: false,
      jsonpCallback: 'jsonFlickrApi',
      contentType: "application/json",
      dataType: 'jsonp'
    });
    scrollTo("#section_image_search");
  };
  var jsonFlickrApi = function(results) {
    $('#flickrLoader p').fadeOut('slow');
    var photos = results.photos.photo;
    $.each(photos, function(index, photo) {
      $(document.createElement("img"))
        .attr({ src: '//farm'+photo.farm+'.staticflickr.com/'+photo.server+'/'+photo.id+'_'+photo.secret+'_s.jpg' })
        .addClass("flickrGallery")
        .appendTo(flickrGallery);
    });
  };
  var showTPS = function(type) {
    $('#tpsreport').show().animate({
      bottom: '-100px'
    }).delay('2000').animate({
      bottom: '-500px'
    });
  };
  var getStarted = function() {
    window.location.href = 'https://github.com/TalAter/annyang';
  }
  // define our commands.
  // * The key is the phrase you want your users to say.
  // * The value is the action to do.
  //   You can pass a function, a function name (as a string), or write your function as part of the commands object.
  var commands = {
    'hello (there)':        hello,
    'show me :month':     showCal,
    'show me cats':         showCats,
    'show :type report':    showTPS,
    'let\'s get started':   getStarted

  };
  // OPTIONAL: activate debug mode for detailed logging in the console
  annyang.debug();
  // Add voice commands to respond to
  annyang.addCommands(commands);
  // OPTIONAL: Set a language for speech recognition (defaults to English)
  // For a full list of language codes, see the documentation:
  // https://github.com/TalAter/annyang/blob/master/docs/FAQ.md#what-languages-are-supported
  annyang.setLanguage('en');
  // Start listening. You can call this here, or attach this call to an event, button, etc.
  annyang.start();
} else {
  $(document).ready(function() {
    $('#unsupported').fadeIn('fast');
  });
}
var scrollTo = function(identifier, speed) {
  $('html, body').animate({
      scrollTop: $(identifier).offset().top
  }, speed || 1000);
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var months = {
	"January": 1,
	"February": 2,
	"March": 3,
	"April": 4,
	"May": 5,
	"June": 6,
	"July": 7,
	"August": 8,
	"September": 9,
	"October": 10,
	"November": 11,
	"December": 12
};

module.exports = {
    showCal: function(month) {
		console.log(months[month]);
    }
};


/***/ }),
/* 2 */
/***/ (function(module, exports) {



/***/ }),
/* 3 */
/***/ (function(module, exports) {

var cats = ['dave', 'henry', 'mark'];

module.exports = {
    showCats: function() {
        console.log(cats);
    }
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);