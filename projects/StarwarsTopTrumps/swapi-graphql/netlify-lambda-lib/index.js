(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../cache/data.json":
/*!**************************!*\
  !*** ../cache/data.json ***!
  \**************************/
/*! exports provided: https://swapi.co/api/people/, https://swapi.co/api/people/1/, https://swapi.co/api/people/2/, https://swapi.co/api/people/3/, https://swapi.co/api/people/4/, https://swapi.co/api/people/5/, https://swapi.co/api/people/6/, https://swapi.co/api/people/7/, https://swapi.co/api/people/8/, https://swapi.co/api/people/9/, https://swapi.co/api/people/10/, https://swapi.co/api/people/?page=2, https://swapi.co/api/people/11/, https://swapi.co/api/people/12/, https://swapi.co/api/people/13/, https://swapi.co/api/people/14/, https://swapi.co/api/people/15/, https://swapi.co/api/people/16/, https://swapi.co/api/people/18/, https://swapi.co/api/people/19/, https://swapi.co/api/people/20/, https://swapi.co/api/people/21/, https://swapi.co/api/people/?page=3, https://swapi.co/api/people/22/, https://swapi.co/api/people/23/, https://swapi.co/api/people/24/, https://swapi.co/api/people/25/, https://swapi.co/api/people/26/, https://swapi.co/api/people/27/, https://swapi.co/api/people/28/, https://swapi.co/api/people/29/, https://swapi.co/api/people/30/, https://swapi.co/api/people/31/, https://swapi.co/api/people/?page=4, https://swapi.co/api/people/32/, https://swapi.co/api/people/33/, https://swapi.co/api/people/34/, https://swapi.co/api/people/36/, https://swapi.co/api/people/37/, https://swapi.co/api/people/38/, https://swapi.co/api/people/39/, https://swapi.co/api/people/40/, https://swapi.co/api/people/41/, https://swapi.co/api/people/42/, https://swapi.co/api/people/?page=5, https://swapi.co/api/people/43/, https://swapi.co/api/people/44/, https://swapi.co/api/people/45/, https://swapi.co/api/people/46/, https://swapi.co/api/people/48/, https://swapi.co/api/people/49/, https://swapi.co/api/people/50/, https://swapi.co/api/people/51/, https://swapi.co/api/people/52/, https://swapi.co/api/people/53/, https://swapi.co/api/people/?page=6, https://swapi.co/api/people/54/, https://swapi.co/api/people/55/, https://swapi.co/api/people/56/, https://swapi.co/api/people/57/, https://swapi.co/api/people/58/, https://swapi.co/api/people/59/, https://swapi.co/api/people/60/, https://swapi.co/api/people/61/, https://swapi.co/api/people/62/, https://swapi.co/api/people/63/, https://swapi.co/api/people/?page=7, https://swapi.co/api/people/64/, https://swapi.co/api/people/65/, https://swapi.co/api/people/66/, https://swapi.co/api/people/67/, https://swapi.co/api/people/68/, https://swapi.co/api/people/69/, https://swapi.co/api/people/70/, https://swapi.co/api/people/71/, https://swapi.co/api/people/72/, https://swapi.co/api/people/73/, https://swapi.co/api/people/?page=8, https://swapi.co/api/people/74/, https://swapi.co/api/people/47/, https://swapi.co/api/people/75/, https://swapi.co/api/people/76/, https://swapi.co/api/people/77/, https://swapi.co/api/people/78/, https://swapi.co/api/people/79/, https://swapi.co/api/people/80/, https://swapi.co/api/people/81/, https://swapi.co/api/people/82/, https://swapi.co/api/people/?page=9, https://swapi.co/api/people/83/, https://swapi.co/api/people/84/, https://swapi.co/api/people/85/, https://swapi.co/api/people/86/, https://swapi.co/api/people/87/, https://swapi.co/api/people/88/, https://swapi.co/api/people/35/, https://swapi.co/api/starships/, https://swapi.co/api/starships/15/, https://swapi.co/api/starships/5/, https://swapi.co/api/starships/9/, https://swapi.co/api/starships/10/, https://swapi.co/api/starships/11/, https://swapi.co/api/starships/12/, https://swapi.co/api/starships/13/, https://swapi.co/api/starships/21/, https://swapi.co/api/starships/22/, https://swapi.co/api/starships/23/, https://swapi.co/api/starships/?page=2, https://swapi.co/api/starships/27/, https://swapi.co/api/starships/28/, https://swapi.co/api/starships/29/, https://swapi.co/api/starships/31/, https://swapi.co/api/starships/39/, https://swapi.co/api/starships/40/, https://swapi.co/api/starships/41/, https://swapi.co/api/starships/43/, https://swapi.co/api/starships/47/, https://swapi.co/api/starships/48/, https://swapi.co/api/starships/?page=3, https://swapi.co/api/starships/49/, https://swapi.co/api/starships/3/, https://swapi.co/api/starships/59/, https://swapi.co/api/starships/61/, https://swapi.co/api/starships/77/, https://swapi.co/api/starships/17/, https://swapi.co/api/starships/32/, https://swapi.co/api/starships/52/, https://swapi.co/api/starships/58/, https://swapi.co/api/starships/63/, https://swapi.co/api/starships/?page=4, https://swapi.co/api/starships/64/, https://swapi.co/api/starships/65/, https://swapi.co/api/starships/66/, https://swapi.co/api/starships/74/, https://swapi.co/api/starships/75/, https://swapi.co/api/starships/2/, https://swapi.co/api/starships/68/, https://swapi.co/api/vehicles/, https://swapi.co/api/vehicles/4/, https://swapi.co/api/vehicles/6/, https://swapi.co/api/vehicles/7/, https://swapi.co/api/vehicles/8/, https://swapi.co/api/vehicles/14/, https://swapi.co/api/vehicles/16/, https://swapi.co/api/vehicles/18/, https://swapi.co/api/vehicles/19/, https://swapi.co/api/vehicles/20/, https://swapi.co/api/vehicles/24/, https://swapi.co/api/vehicles/?page=2, https://swapi.co/api/vehicles/25/, https://swapi.co/api/vehicles/26/, https://swapi.co/api/vehicles/30/, https://swapi.co/api/vehicles/33/, https://swapi.co/api/vehicles/34/, https://swapi.co/api/vehicles/35/, https://swapi.co/api/vehicles/36/, https://swapi.co/api/vehicles/37/, https://swapi.co/api/vehicles/38/, https://swapi.co/api/vehicles/42/, https://swapi.co/api/vehicles/?page=3, https://swapi.co/api/vehicles/44/, https://swapi.co/api/vehicles/45/, https://swapi.co/api/vehicles/46/, https://swapi.co/api/vehicles/50/, https://swapi.co/api/vehicles/51/, https://swapi.co/api/vehicles/60/, https://swapi.co/api/vehicles/62/, https://swapi.co/api/vehicles/67/, https://swapi.co/api/vehicles/69/, https://swapi.co/api/vehicles/70/, https://swapi.co/api/vehicles/?page=4, https://swapi.co/api/vehicles/71/, https://swapi.co/api/vehicles/72/, https://swapi.co/api/vehicles/73/, https://swapi.co/api/vehicles/76/, https://swapi.co/api/vehicles/53/, https://swapi.co/api/vehicles/54/, https://swapi.co/api/vehicles/55/, https://swapi.co/api/vehicles/56/, https://swapi.co/api/vehicles/57/, https://swapi.co/api/species/, https://swapi.co/api/species/5/, https://swapi.co/api/species/6/, https://swapi.co/api/species/7/, https://swapi.co/api/species/8/, https://swapi.co/api/species/9/, https://swapi.co/api/species/10/, https://swapi.co/api/species/11/, https://swapi.co/api/species/12/, https://swapi.co/api/species/13/, https://swapi.co/api/species/14/, https://swapi.co/api/species/?page=2, https://swapi.co/api/species/15/, https://swapi.co/api/species/16/, https://swapi.co/api/species/17/, https://swapi.co/api/species/18/, https://swapi.co/api/species/19/, https://swapi.co/api/species/20/, https://swapi.co/api/species/21/, https://swapi.co/api/species/22/, https://swapi.co/api/species/23/, https://swapi.co/api/species/24/, https://swapi.co/api/species/?page=3, https://swapi.co/api/species/25/, https://swapi.co/api/species/26/, https://swapi.co/api/species/27/, https://swapi.co/api/species/28/, https://swapi.co/api/species/29/, https://swapi.co/api/species/30/, https://swapi.co/api/species/31/, https://swapi.co/api/species/32/, https://swapi.co/api/species/33/, https://swapi.co/api/species/34/, https://swapi.co/api/species/?page=4, https://swapi.co/api/species/35/, https://swapi.co/api/species/36/, https://swapi.co/api/species/37/, https://swapi.co/api/species/3/, https://swapi.co/api/species/2/, https://swapi.co/api/species/1/, https://swapi.co/api/species/4/, https://swapi.co/api/planets/, https://swapi.co/api/planets/2/, https://swapi.co/api/planets/3/, https://swapi.co/api/planets/4/, https://swapi.co/api/planets/5/, https://swapi.co/api/planets/6/, https://swapi.co/api/planets/7/, https://swapi.co/api/planets/8/, https://swapi.co/api/planets/9/, https://swapi.co/api/planets/10/, https://swapi.co/api/planets/11/, https://swapi.co/api/planets/?page=2, https://swapi.co/api/planets/12/, https://swapi.co/api/planets/13/, https://swapi.co/api/planets/14/, https://swapi.co/api/planets/15/, https://swapi.co/api/planets/16/, https://swapi.co/api/planets/17/, https://swapi.co/api/planets/18/, https://swapi.co/api/planets/19/, https://swapi.co/api/planets/20/, https://swapi.co/api/planets/21/, https://swapi.co/api/planets/?page=3, https://swapi.co/api/planets/22/, https://swapi.co/api/planets/23/, https://swapi.co/api/planets/24/, https://swapi.co/api/planets/25/, https://swapi.co/api/planets/26/, https://swapi.co/api/planets/27/, https://swapi.co/api/planets/28/, https://swapi.co/api/planets/29/, https://swapi.co/api/planets/30/, https://swapi.co/api/planets/31/, https://swapi.co/api/planets/?page=4, https://swapi.co/api/planets/32/, https://swapi.co/api/planets/33/, https://swapi.co/api/planets/34/, https://swapi.co/api/planets/35/, https://swapi.co/api/planets/36/, https://swapi.co/api/planets/37/, https://swapi.co/api/planets/38/, https://swapi.co/api/planets/39/, https://swapi.co/api/planets/40/, https://swapi.co/api/planets/41/, https://swapi.co/api/planets/?page=5, https://swapi.co/api/planets/42/, https://swapi.co/api/planets/43/, https://swapi.co/api/planets/44/, https://swapi.co/api/planets/45/, https://swapi.co/api/planets/46/, https://swapi.co/api/planets/47/, https://swapi.co/api/planets/48/, https://swapi.co/api/planets/49/, https://swapi.co/api/planets/50/, https://swapi.co/api/planets/51/, https://swapi.co/api/planets/?page=6, https://swapi.co/api/planets/52/, https://swapi.co/api/planets/53/, https://swapi.co/api/planets/54/, https://swapi.co/api/planets/55/, https://swapi.co/api/planets/56/, https://swapi.co/api/planets/57/, https://swapi.co/api/planets/58/, https://swapi.co/api/planets/59/, https://swapi.co/api/planets/60/, https://swapi.co/api/planets/1/, https://swapi.co/api/planets/?page=7, https://swapi.co/api/planets/61/, https://swapi.co/api/films/, https://swapi.co/api/films/1/, https://swapi.co/api/films/5/, https://swapi.co/api/films/4/, https://swapi.co/api/films/6/, https://swapi.co/api/films/3/, https://swapi.co/api/films/2/, https://swapi.co/api/films/7/, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"https://swapi.co/api/people/\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=2\",\"previous\":null,\"results\":[{\"name\":\"Luke Skywalker\",\"height\":\"172\",\"mass\":\"77\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"19BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/14/\",\"https://swapi.co/api/vehicles/30/\"],\"starships\":[\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-09T13:50:51.644000Z\",\"edited\":\"2014-12-20T21:17:56.891000Z\",\"url\":\"https://swapi.co/api/people/1/\"},{\"name\":\"C-3PO\",\"height\":\"167\",\"mass\":\"75\",\"hair_color\":\"n/a\",\"skin_color\":\"gold\",\"eye_color\":\"yellow\",\"birth_year\":\"112BBY\",\"gender\":\"n/a\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:10:51.357000Z\",\"edited\":\"2014-12-20T21:17:50.309000Z\",\"url\":\"https://swapi.co/api/people/2/\"},{\"name\":\"R2-D2\",\"height\":\"96\",\"mass\":\"32\",\"hair_color\":\"n/a\",\"skin_color\":\"white, blue\",\"eye_color\":\"red\",\"birth_year\":\"33BBY\",\"gender\":\"n/a\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:11:50.376000Z\",\"edited\":\"2014-12-20T21:17:50.311000Z\",\"url\":\"https://swapi.co/api/people/3/\"},{\"name\":\"Darth Vader\",\"height\":\"202\",\"mass\":\"136\",\"hair_color\":\"none\",\"skin_color\":\"white\",\"eye_color\":\"yellow\",\"birth_year\":\"41.9BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/13/\"],\"created\":\"2014-12-10T15:18:20.704000Z\",\"edited\":\"2014-12-20T21:17:50.313000Z\",\"url\":\"https://swapi.co/api/people/4/\"},{\"name\":\"Leia Organa\",\"height\":\"150\",\"mass\":\"49\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"19BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/2/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/30/\"],\"starships\":[],\"created\":\"2014-12-10T15:20:09.791000Z\",\"edited\":\"2014-12-20T21:17:50.315000Z\",\"url\":\"https://swapi.co/api/people/5/\"},{\"name\":\"Owen Lars\",\"height\":\"178\",\"mass\":\"120\",\"hair_color\":\"brown, grey\",\"skin_color\":\"light\",\"eye_color\":\"blue\",\"birth_year\":\"52BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:52:14.024000Z\",\"edited\":\"2014-12-20T21:17:50.317000Z\",\"url\":\"https://swapi.co/api/people/6/\"},{\"name\":\"Beru Whitesun lars\",\"height\":\"165\",\"mass\":\"75\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"blue\",\"birth_year\":\"47BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:53:41.121000Z\",\"edited\":\"2014-12-20T21:17:50.319000Z\",\"url\":\"https://swapi.co/api/people/7/\"},{\"name\":\"R5-D4\",\"height\":\"97\",\"mass\":\"32\",\"hair_color\":\"n/a\",\"skin_color\":\"white, red\",\"eye_color\":\"red\",\"birth_year\":\"unknown\",\"gender\":\"n/a\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:57:50.959000Z\",\"edited\":\"2014-12-20T21:17:50.321000Z\",\"url\":\"https://swapi.co/api/people/8/\"},{\"name\":\"Biggs Darklighter\",\"height\":\"183\",\"mass\":\"84\",\"hair_color\":\"black\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"24BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/12/\"],\"created\":\"2014-12-10T15:59:50.509000Z\",\"edited\":\"2014-12-20T21:17:50.323000Z\",\"url\":\"https://swapi.co/api/people/9/\"},{\"name\":\"Obi-Wan Kenobi\",\"height\":\"182\",\"mass\":\"77\",\"hair_color\":\"auburn, white\",\"skin_color\":\"fair\",\"eye_color\":\"blue-gray\",\"birth_year\":\"57BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/20/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/38/\"],\"starships\":[\"https://swapi.co/api/starships/48/\",\"https://swapi.co/api/starships/59/\",\"https://swapi.co/api/starships/64/\",\"https://swapi.co/api/starships/65/\",\"https://swapi.co/api/starships/74/\"],\"created\":\"2014-12-10T16:16:29.192000Z\",\"edited\":\"2014-12-20T21:17:50.325000Z\",\"url\":\"https://swapi.co/api/people/10/\"}]},\"https://swapi.co/api/people/1/\":{\"name\":\"Luke Skywalker\",\"height\":\"172\",\"mass\":\"77\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"19BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/14/\",\"https://swapi.co/api/vehicles/30/\"],\"starships\":[\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-09T13:50:51.644000Z\",\"edited\":\"2014-12-20T21:17:56.891000Z\",\"url\":\"https://swapi.co/api/people/1/\"},\"https://swapi.co/api/people/2/\":{\"name\":\"C-3PO\",\"height\":\"167\",\"mass\":\"75\",\"hair_color\":\"n/a\",\"skin_color\":\"gold\",\"eye_color\":\"yellow\",\"birth_year\":\"112BBY\",\"gender\":\"n/a\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:10:51.357000Z\",\"edited\":\"2014-12-20T21:17:50.309000Z\",\"url\":\"https://swapi.co/api/people/2/\"},\"https://swapi.co/api/people/3/\":{\"name\":\"R2-D2\",\"height\":\"96\",\"mass\":\"32\",\"hair_color\":\"n/a\",\"skin_color\":\"white, blue\",\"eye_color\":\"red\",\"birth_year\":\"33BBY\",\"gender\":\"n/a\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:11:50.376000Z\",\"edited\":\"2014-12-20T21:17:50.311000Z\",\"url\":\"https://swapi.co/api/people/3/\"},\"https://swapi.co/api/people/4/\":{\"name\":\"Darth Vader\",\"height\":\"202\",\"mass\":\"136\",\"hair_color\":\"none\",\"skin_color\":\"white\",\"eye_color\":\"yellow\",\"birth_year\":\"41.9BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/13/\"],\"created\":\"2014-12-10T15:18:20.704000Z\",\"edited\":\"2014-12-20T21:17:50.313000Z\",\"url\":\"https://swapi.co/api/people/4/\"},\"https://swapi.co/api/people/5/\":{\"name\":\"Leia Organa\",\"height\":\"150\",\"mass\":\"49\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"19BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/2/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/30/\"],\"starships\":[],\"created\":\"2014-12-10T15:20:09.791000Z\",\"edited\":\"2014-12-20T21:17:50.315000Z\",\"url\":\"https://swapi.co/api/people/5/\"},\"https://swapi.co/api/people/6/\":{\"name\":\"Owen Lars\",\"height\":\"178\",\"mass\":\"120\",\"hair_color\":\"brown, grey\",\"skin_color\":\"light\",\"eye_color\":\"blue\",\"birth_year\":\"52BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:52:14.024000Z\",\"edited\":\"2014-12-20T21:17:50.317000Z\",\"url\":\"https://swapi.co/api/people/6/\"},\"https://swapi.co/api/people/7/\":{\"name\":\"Beru Whitesun lars\",\"height\":\"165\",\"mass\":\"75\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"blue\",\"birth_year\":\"47BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:53:41.121000Z\",\"edited\":\"2014-12-20T21:17:50.319000Z\",\"url\":\"https://swapi.co/api/people/7/\"},\"https://swapi.co/api/people/8/\":{\"name\":\"R5-D4\",\"height\":\"97\",\"mass\":\"32\",\"hair_color\":\"n/a\",\"skin_color\":\"white, red\",\"eye_color\":\"red\",\"birth_year\":\"unknown\",\"gender\":\"n/a\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T15:57:50.959000Z\",\"edited\":\"2014-12-20T21:17:50.321000Z\",\"url\":\"https://swapi.co/api/people/8/\"},\"https://swapi.co/api/people/9/\":{\"name\":\"Biggs Darklighter\",\"height\":\"183\",\"mass\":\"84\",\"hair_color\":\"black\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"24BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/12/\"],\"created\":\"2014-12-10T15:59:50.509000Z\",\"edited\":\"2014-12-20T21:17:50.323000Z\",\"url\":\"https://swapi.co/api/people/9/\"},\"https://swapi.co/api/people/10/\":{\"name\":\"Obi-Wan Kenobi\",\"height\":\"182\",\"mass\":\"77\",\"hair_color\":\"auburn, white\",\"skin_color\":\"fair\",\"eye_color\":\"blue-gray\",\"birth_year\":\"57BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/20/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/38/\"],\"starships\":[\"https://swapi.co/api/starships/48/\",\"https://swapi.co/api/starships/59/\",\"https://swapi.co/api/starships/64/\",\"https://swapi.co/api/starships/65/\",\"https://swapi.co/api/starships/74/\"],\"created\":\"2014-12-10T16:16:29.192000Z\",\"edited\":\"2014-12-20T21:17:50.325000Z\",\"url\":\"https://swapi.co/api/people/10/\"},\"https://swapi.co/api/people/?page=2\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=3\",\"previous\":\"https://swapi.co/api/people/?page=1\",\"results\":[{\"name\":\"Anakin Skywalker\",\"height\":\"188\",\"mass\":\"84\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"41.9BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/44/\",\"https://swapi.co/api/vehicles/46/\"],\"starships\":[\"https://swapi.co/api/starships/59/\",\"https://swapi.co/api/starships/65/\",\"https://swapi.co/api/starships/39/\"],\"created\":\"2014-12-10T16:20:44.310000Z\",\"edited\":\"2014-12-20T21:17:50.327000Z\",\"url\":\"https://swapi.co/api/people/11/\"},{\"name\":\"Wilhuff Tarkin\",\"height\":\"180\",\"mass\":\"unknown\",\"hair_color\":\"auburn, grey\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"64BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/21/\",\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T16:26:56.138000Z\",\"edited\":\"2014-12-20T21:17:50.330000Z\",\"url\":\"https://swapi.co/api/people/12/\"},{\"name\":\"Chewbacca\",\"height\":\"228\",\"mass\":\"112\",\"hair_color\":\"brown\",\"skin_color\":\"unknown\",\"eye_color\":\"blue\",\"birth_year\":\"200BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/14/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/3/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/19/\"],\"starships\":[\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-10T16:42:45.066000Z\",\"edited\":\"2014-12-20T21:17:50.332000Z\",\"url\":\"https://swapi.co/api/people/13/\"},{\"name\":\"Han Solo\",\"height\":\"180\",\"mass\":\"80\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"29BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/22/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-10T16:49:14.582000Z\",\"edited\":\"2014-12-20T21:17:50.334000Z\",\"url\":\"https://swapi.co/api/people/14/\"},{\"name\":\"Greedo\",\"height\":\"173\",\"mass\":\"74\",\"hair_color\":\"n/a\",\"skin_color\":\"green\",\"eye_color\":\"black\",\"birth_year\":\"44BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/23/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/4/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T17:03:30.334000Z\",\"edited\":\"2014-12-20T21:17:50.336000Z\",\"url\":\"https://swapi.co/api/people/15/\"},{\"name\":\"Jabba Desilijic Tiure\",\"height\":\"175\",\"mass\":\"1,358\",\"hair_color\":\"n/a\",\"skin_color\":\"green-tan, brown\",\"eye_color\":\"orange\",\"birth_year\":\"600BBY\",\"gender\":\"hermaphrodite\",\"homeworld\":\"https://swapi.co/api/planets/24/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/5/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T17:11:31.638000Z\",\"edited\":\"2014-12-20T21:17:50.338000Z\",\"url\":\"https://swapi.co/api/people/16/\"},{\"name\":\"Wedge Antilles\",\"height\":\"170\",\"mass\":\"77\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"hazel\",\"birth_year\":\"21BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/22/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/14/\"],\"starships\":[\"https://swapi.co/api/starships/12/\"],\"created\":\"2014-12-12T11:08:06.469000Z\",\"edited\":\"2014-12-20T21:17:50.341000Z\",\"url\":\"https://swapi.co/api/people/18/\"},{\"name\":\"Jek Tono Porkins\",\"height\":\"180\",\"mass\":\"110\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/26/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/12/\"],\"created\":\"2014-12-12T11:16:56.569000Z\",\"edited\":\"2014-12-20T21:17:50.343000Z\",\"url\":\"https://swapi.co/api/people/19/\"},{\"name\":\"Yoda\",\"height\":\"66\",\"mass\":\"17\",\"hair_color\":\"white\",\"skin_color\":\"green\",\"eye_color\":\"brown\",\"birth_year\":\"896BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/6/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:26:01.042000Z\",\"edited\":\"2014-12-20T21:17:50.345000Z\",\"url\":\"https://swapi.co/api/people/20/\"},{\"name\":\"Palpatine\",\"height\":\"170\",\"mass\":\"75\",\"hair_color\":\"grey\",\"skin_color\":\"pale\",\"eye_color\":\"yellow\",\"birth_year\":\"82BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:48:05.971000Z\",\"edited\":\"2014-12-20T21:17:50.347000Z\",\"url\":\"https://swapi.co/api/people/21/\"}]},\"https://swapi.co/api/people/11/\":{\"name\":\"Anakin Skywalker\",\"height\":\"188\",\"mass\":\"84\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"41.9BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/44/\",\"https://swapi.co/api/vehicles/46/\"],\"starships\":[\"https://swapi.co/api/starships/59/\",\"https://swapi.co/api/starships/65/\",\"https://swapi.co/api/starships/39/\"],\"created\":\"2014-12-10T16:20:44.310000Z\",\"edited\":\"2014-12-20T21:17:50.327000Z\",\"url\":\"https://swapi.co/api/people/11/\"},\"https://swapi.co/api/people/12/\":{\"name\":\"Wilhuff Tarkin\",\"height\":\"180\",\"mass\":\"unknown\",\"hair_color\":\"auburn, grey\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"64BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/21/\",\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T16:26:56.138000Z\",\"edited\":\"2014-12-20T21:17:50.330000Z\",\"url\":\"https://swapi.co/api/people/12/\"},\"https://swapi.co/api/people/13/\":{\"name\":\"Chewbacca\",\"height\":\"228\",\"mass\":\"112\",\"hair_color\":\"brown\",\"skin_color\":\"unknown\",\"eye_color\":\"blue\",\"birth_year\":\"200BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/14/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/3/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/19/\"],\"starships\":[\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-10T16:42:45.066000Z\",\"edited\":\"2014-12-20T21:17:50.332000Z\",\"url\":\"https://swapi.co/api/people/13/\"},\"https://swapi.co/api/people/14/\":{\"name\":\"Han Solo\",\"height\":\"180\",\"mass\":\"80\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"29BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/22/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/22/\"],\"created\":\"2014-12-10T16:49:14.582000Z\",\"edited\":\"2014-12-20T21:17:50.334000Z\",\"url\":\"https://swapi.co/api/people/14/\"},\"https://swapi.co/api/people/15/\":{\"name\":\"Greedo\",\"height\":\"173\",\"mass\":\"74\",\"hair_color\":\"n/a\",\"skin_color\":\"green\",\"eye_color\":\"black\",\"birth_year\":\"44BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/23/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/4/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T17:03:30.334000Z\",\"edited\":\"2014-12-20T21:17:50.336000Z\",\"url\":\"https://swapi.co/api/people/15/\"},\"https://swapi.co/api/people/16/\":{\"name\":\"Jabba Desilijic Tiure\",\"height\":\"175\",\"mass\":\"1,358\",\"hair_color\":\"n/a\",\"skin_color\":\"green-tan, brown\",\"eye_color\":\"orange\",\"birth_year\":\"600BBY\",\"gender\":\"hermaphrodite\",\"homeworld\":\"https://swapi.co/api/planets/24/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/5/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-10T17:11:31.638000Z\",\"edited\":\"2014-12-20T21:17:50.338000Z\",\"url\":\"https://swapi.co/api/people/16/\"},\"https://swapi.co/api/people/18/\":{\"name\":\"Wedge Antilles\",\"height\":\"170\",\"mass\":\"77\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"hazel\",\"birth_year\":\"21BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/22/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/14/\"],\"starships\":[\"https://swapi.co/api/starships/12/\"],\"created\":\"2014-12-12T11:08:06.469000Z\",\"edited\":\"2014-12-20T21:17:50.341000Z\",\"url\":\"https://swapi.co/api/people/18/\"},\"https://swapi.co/api/people/19/\":{\"name\":\"Jek Tono Porkins\",\"height\":\"180\",\"mass\":\"110\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/26/\",\"films\":[\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/12/\"],\"created\":\"2014-12-12T11:16:56.569000Z\",\"edited\":\"2014-12-20T21:17:50.343000Z\",\"url\":\"https://swapi.co/api/people/19/\"},\"https://swapi.co/api/people/20/\":{\"name\":\"Yoda\",\"height\":\"66\",\"mass\":\"17\",\"hair_color\":\"white\",\"skin_color\":\"green\",\"eye_color\":\"brown\",\"birth_year\":\"896BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/6/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:26:01.042000Z\",\"edited\":\"2014-12-20T21:17:50.345000Z\",\"url\":\"https://swapi.co/api/people/20/\"},\"https://swapi.co/api/people/21/\":{\"name\":\"Palpatine\",\"height\":\"170\",\"mass\":\"75\",\"hair_color\":\"grey\",\"skin_color\":\"pale\",\"eye_color\":\"yellow\",\"birth_year\":\"82BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:48:05.971000Z\",\"edited\":\"2014-12-20T21:17:50.347000Z\",\"url\":\"https://swapi.co/api/people/21/\"},\"https://swapi.co/api/people/?page=3\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=4\",\"previous\":\"https://swapi.co/api/people/?page=2\",\"results\":[{\"name\":\"Boba Fett\",\"height\":\"183\",\"mass\":\"78.2\",\"hair_color\":\"black\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"31.5BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/21/\"],\"created\":\"2014-12-15T12:49:32.457000Z\",\"edited\":\"2014-12-20T21:17:50.349000Z\",\"url\":\"https://swapi.co/api/people/22/\"},{\"name\":\"IG-88\",\"height\":\"200\",\"mass\":\"140\",\"hair_color\":\"none\",\"skin_color\":\"metal\",\"eye_color\":\"red\",\"birth_year\":\"15BBY\",\"gender\":\"none\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/2/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:51:10.076000Z\",\"edited\":\"2014-12-20T21:17:50.351000Z\",\"url\":\"https://swapi.co/api/people/23/\"},{\"name\":\"Bossk\",\"height\":\"190\",\"mass\":\"113\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"red\",\"birth_year\":\"53BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/29/\",\"films\":[\"https://swapi.co/api/films/2/\"],\"species\":[\"https://swapi.co/api/species/7/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:53:49.297000Z\",\"edited\":\"2014-12-20T21:17:50.355000Z\",\"url\":\"https://swapi.co/api/people/24/\"},{\"name\":\"Lando Calrissian\",\"height\":\"177\",\"mass\":\"79\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"31BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/30/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/10/\"],\"created\":\"2014-12-15T12:56:32.683000Z\",\"edited\":\"2014-12-20T21:17:50.357000Z\",\"url\":\"https://swapi.co/api/people/25/\"},{\"name\":\"Lobot\",\"height\":\"175\",\"mass\":\"79\",\"hair_color\":\"none\",\"skin_color\":\"light\",\"eye_color\":\"blue\",\"birth_year\":\"37BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/6/\",\"films\":[\"https://swapi.co/api/films/2/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T13:01:57.178000Z\",\"edited\":\"2014-12-20T21:17:50.359000Z\",\"url\":\"https://swapi.co/api/people/26/\"},{\"name\":\"Ackbar\",\"height\":\"180\",\"mass\":\"83\",\"hair_color\":\"none\",\"skin_color\":\"brown mottle\",\"eye_color\":\"orange\",\"birth_year\":\"41BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/31/\",\"films\":[\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/8/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-18T11:07:50.584000Z\",\"edited\":\"2014-12-20T21:17:50.362000Z\",\"url\":\"https://swapi.co/api/people/27/\"},{\"name\":\"Mon Mothma\",\"height\":\"150\",\"mass\":\"unknown\",\"hair_color\":\"auburn\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"48BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/32/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-18T11:12:38.895000Z\",\"edited\":\"2014-12-20T21:17:50.364000Z\",\"url\":\"https://swapi.co/api/people/28/\"},{\"name\":\"Arvel Crynyd\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/28/\"],\"created\":\"2014-12-18T11:16:33.020000Z\",\"edited\":\"2014-12-20T21:17:50.367000Z\",\"url\":\"https://swapi.co/api/people/29/\"},{\"name\":\"Wicket Systri Warrick\",\"height\":\"88\",\"mass\":\"20\",\"hair_color\":\"brown\",\"skin_color\":\"brown\",\"eye_color\":\"brown\",\"birth_year\":\"8BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/7/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/9/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-18T11:21:58.954000Z\",\"edited\":\"2014-12-20T21:17:50.369000Z\",\"url\":\"https://swapi.co/api/people/30/\"},{\"name\":\"Nien Nunb\",\"height\":\"160\",\"mass\":\"68\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/33/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/10/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/10/\"],\"created\":\"2014-12-18T11:26:18.541000Z\",\"edited\":\"2014-12-20T21:17:50.371000Z\",\"url\":\"https://swapi.co/api/people/31/\"}]},\"https://swapi.co/api/people/22/\":{\"name\":\"Boba Fett\",\"height\":\"183\",\"mass\":\"78.2\",\"hair_color\":\"black\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"31.5BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/21/\"],\"created\":\"2014-12-15T12:49:32.457000Z\",\"edited\":\"2014-12-20T21:17:50.349000Z\",\"url\":\"https://swapi.co/api/people/22/\"},\"https://swapi.co/api/people/23/\":{\"name\":\"IG-88\",\"height\":\"200\",\"mass\":\"140\",\"hair_color\":\"none\",\"skin_color\":\"metal\",\"eye_color\":\"red\",\"birth_year\":\"15BBY\",\"gender\":\"none\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/2/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:51:10.076000Z\",\"edited\":\"2014-12-20T21:17:50.351000Z\",\"url\":\"https://swapi.co/api/people/23/\"},\"https://swapi.co/api/people/24/\":{\"name\":\"Bossk\",\"height\":\"190\",\"mass\":\"113\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"red\",\"birth_year\":\"53BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/29/\",\"films\":[\"https://swapi.co/api/films/2/\"],\"species\":[\"https://swapi.co/api/species/7/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T12:53:49.297000Z\",\"edited\":\"2014-12-20T21:17:50.355000Z\",\"url\":\"https://swapi.co/api/people/24/\"},\"https://swapi.co/api/people/25/\":{\"name\":\"Lando Calrissian\",\"height\":\"177\",\"mass\":\"79\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"31BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/30/\",\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/10/\"],\"created\":\"2014-12-15T12:56:32.683000Z\",\"edited\":\"2014-12-20T21:17:50.357000Z\",\"url\":\"https://swapi.co/api/people/25/\"},\"https://swapi.co/api/people/26/\":{\"name\":\"Lobot\",\"height\":\"175\",\"mass\":\"79\",\"hair_color\":\"none\",\"skin_color\":\"light\",\"eye_color\":\"blue\",\"birth_year\":\"37BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/6/\",\"films\":[\"https://swapi.co/api/films/2/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-15T13:01:57.178000Z\",\"edited\":\"2014-12-20T21:17:50.359000Z\",\"url\":\"https://swapi.co/api/people/26/\"},\"https://swapi.co/api/people/27/\":{\"name\":\"Ackbar\",\"height\":\"180\",\"mass\":\"83\",\"hair_color\":\"none\",\"skin_color\":\"brown mottle\",\"eye_color\":\"orange\",\"birth_year\":\"41BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/31/\",\"films\":[\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/8/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-18T11:07:50.584000Z\",\"edited\":\"2014-12-20T21:17:50.362000Z\",\"url\":\"https://swapi.co/api/people/27/\"},\"https://swapi.co/api/people/28/\":{\"name\":\"Mon Mothma\",\"height\":\"150\",\"mass\":\"unknown\",\"hair_color\":\"auburn\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"48BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/32/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-18T11:12:38.895000Z\",\"edited\":\"2014-12-20T21:17:50.364000Z\",\"url\":\"https://swapi.co/api/people/28/\"},\"https://swapi.co/api/people/29/\":{\"name\":\"Arvel Crynyd\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/28/\"],\"created\":\"2014-12-18T11:16:33.020000Z\",\"edited\":\"2014-12-20T21:17:50.367000Z\",\"url\":\"https://swapi.co/api/people/29/\"},\"https://swapi.co/api/people/30/\":{\"name\":\"Wicket Systri Warrick\",\"height\":\"88\",\"mass\":\"20\",\"hair_color\":\"brown\",\"skin_color\":\"brown\",\"eye_color\":\"brown\",\"birth_year\":\"8BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/7/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/9/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-18T11:21:58.954000Z\",\"edited\":\"2014-12-20T21:17:50.369000Z\",\"url\":\"https://swapi.co/api/people/30/\"},\"https://swapi.co/api/people/31/\":{\"name\":\"Nien Nunb\",\"height\":\"160\",\"mass\":\"68\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/33/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/10/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/10/\"],\"created\":\"2014-12-18T11:26:18.541000Z\",\"edited\":\"2014-12-20T21:17:50.371000Z\",\"url\":\"https://swapi.co/api/people/31/\"},\"https://swapi.co/api/people/?page=4\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=5\",\"previous\":\"https://swapi.co/api/people/?page=3\",\"results\":[{\"name\":\"Qui-Gon Jinn\",\"height\":\"193\",\"mass\":\"89\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"92BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/38/\"],\"starships\":[],\"created\":\"2014-12-19T16:54:53.618000Z\",\"edited\":\"2014-12-20T21:17:50.375000Z\",\"url\":\"https://swapi.co/api/people/32/\"},{\"name\":\"Nute Gunray\",\"height\":\"191\",\"mass\":\"90\",\"hair_color\":\"none\",\"skin_color\":\"mottled green\",\"eye_color\":\"red\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/18/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/11/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:05:57.357000Z\",\"edited\":\"2014-12-20T21:17:50.377000Z\",\"url\":\"https://swapi.co/api/people/33/\"},{\"name\":\"Finis Valorum\",\"height\":\"170\",\"mass\":\"unknown\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"91BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:21:45.915000Z\",\"edited\":\"2014-12-20T21:17:50.379000Z\",\"url\":\"https://swapi.co/api/people/34/\"},{\"name\":\"Jar Jar Binks\",\"height\":\"196\",\"mass\":\"66\",\"hair_color\":\"none\",\"skin_color\":\"orange\",\"eye_color\":\"orange\",\"birth_year\":\"52BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/12/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:29:32.489000Z\",\"edited\":\"2014-12-20T21:17:50.383000Z\",\"url\":\"https://swapi.co/api/people/36/\"},{\"name\":\"Roos Tarpals\",\"height\":\"224\",\"mass\":\"82\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/12/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:32:56.741000Z\",\"edited\":\"2014-12-20T21:17:50.385000Z\",\"url\":\"https://swapi.co/api/people/37/\"},{\"name\":\"Rugor Nass\",\"height\":\"206\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/12/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:33:38.909000Z\",\"edited\":\"2014-12-20T21:17:50.388000Z\",\"url\":\"https://swapi.co/api/people/38/\"},{\"name\":\"Ric Olié\",\"height\":\"183\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/40/\"],\"created\":\"2014-12-19T17:45:01.522000Z\",\"edited\":\"2014-12-20T21:17:50.392000Z\",\"url\":\"https://swapi.co/api/people/39/\"},{\"name\":\"Watto\",\"height\":\"137\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"blue, grey\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/34/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/13/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:48:54.647000Z\",\"edited\":\"2014-12-20T21:17:50.395000Z\",\"url\":\"https://swapi.co/api/people/40/\"},{\"name\":\"Sebulba\",\"height\":\"112\",\"mass\":\"40\",\"hair_color\":\"none\",\"skin_color\":\"grey, red\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/35/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/14/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:53:02.586000Z\",\"edited\":\"2014-12-20T21:17:50.397000Z\",\"url\":\"https://swapi.co/api/people/41/\"},{\"name\":\"Quarsh Panaka\",\"height\":\"183\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"62BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:55:43.348000Z\",\"edited\":\"2014-12-20T21:17:50.399000Z\",\"url\":\"https://swapi.co/api/people/42/\"}]},\"https://swapi.co/api/people/32/\":{\"name\":\"Qui-Gon Jinn\",\"height\":\"193\",\"mass\":\"89\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"92BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/38/\"],\"starships\":[],\"created\":\"2014-12-19T16:54:53.618000Z\",\"edited\":\"2014-12-20T21:17:50.375000Z\",\"url\":\"https://swapi.co/api/people/32/\"},\"https://swapi.co/api/people/33/\":{\"name\":\"Nute Gunray\",\"height\":\"191\",\"mass\":\"90\",\"hair_color\":\"none\",\"skin_color\":\"mottled green\",\"eye_color\":\"red\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/18/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/11/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:05:57.357000Z\",\"edited\":\"2014-12-20T21:17:50.377000Z\",\"url\":\"https://swapi.co/api/people/33/\"},\"https://swapi.co/api/people/34/\":{\"name\":\"Finis Valorum\",\"height\":\"170\",\"mass\":\"unknown\",\"hair_color\":\"blond\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"91BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:21:45.915000Z\",\"edited\":\"2014-12-20T21:17:50.379000Z\",\"url\":\"https://swapi.co/api/people/34/\"},\"https://swapi.co/api/people/36/\":{\"name\":\"Jar Jar Binks\",\"height\":\"196\",\"mass\":\"66\",\"hair_color\":\"none\",\"skin_color\":\"orange\",\"eye_color\":\"orange\",\"birth_year\":\"52BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/12/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:29:32.489000Z\",\"edited\":\"2014-12-20T21:17:50.383000Z\",\"url\":\"https://swapi.co/api/people/36/\"},\"https://swapi.co/api/people/37/\":{\"name\":\"Roos Tarpals\",\"height\":\"224\",\"mass\":\"82\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/12/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:32:56.741000Z\",\"edited\":\"2014-12-20T21:17:50.385000Z\",\"url\":\"https://swapi.co/api/people/37/\"},\"https://swapi.co/api/people/38/\":{\"name\":\"Rugor Nass\",\"height\":\"206\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/12/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:33:38.909000Z\",\"edited\":\"2014-12-20T21:17:50.388000Z\",\"url\":\"https://swapi.co/api/people/38/\"},\"https://swapi.co/api/people/39/\":{\"name\":\"Ric Olié\",\"height\":\"183\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/40/\"],\"created\":\"2014-12-19T17:45:01.522000Z\",\"edited\":\"2014-12-20T21:17:50.392000Z\",\"url\":\"https://swapi.co/api/people/39/\"},\"https://swapi.co/api/people/40/\":{\"name\":\"Watto\",\"height\":\"137\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"blue, grey\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/34/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/13/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:48:54.647000Z\",\"edited\":\"2014-12-20T21:17:50.395000Z\",\"url\":\"https://swapi.co/api/people/40/\"},\"https://swapi.co/api/people/41/\":{\"name\":\"Sebulba\",\"height\":\"112\",\"mass\":\"40\",\"hair_color\":\"none\",\"skin_color\":\"grey, red\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/35/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/14/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:53:02.586000Z\",\"edited\":\"2014-12-20T21:17:50.397000Z\",\"url\":\"https://swapi.co/api/people/41/\"},\"https://swapi.co/api/people/42/\":{\"name\":\"Quarsh Panaka\",\"height\":\"183\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"62BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:55:43.348000Z\",\"edited\":\"2014-12-20T21:17:50.399000Z\",\"url\":\"https://swapi.co/api/people/42/\"},\"https://swapi.co/api/people/?page=5\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=6\",\"previous\":\"https://swapi.co/api/people/?page=4\",\"results\":[{\"name\":\"Shmi Skywalker\",\"height\":\"163\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"72BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:57:41.191000Z\",\"edited\":\"2014-12-20T21:17:50.401000Z\",\"url\":\"https://swapi.co/api/people/43/\"},{\"name\":\"Darth Maul\",\"height\":\"175\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"red\",\"eye_color\":\"yellow\",\"birth_year\":\"54BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/36/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/22/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/42/\"],\"starships\":[\"https://swapi.co/api/starships/41/\"],\"created\":\"2014-12-19T18:00:41.929000Z\",\"edited\":\"2014-12-20T21:17:50.403000Z\",\"url\":\"https://swapi.co/api/people/44/\"},{\"name\":\"Bib Fortuna\",\"height\":\"180\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"pale\",\"eye_color\":\"pink\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/37/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/15/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:47:02.512000Z\",\"edited\":\"2014-12-20T21:17:50.407000Z\",\"url\":\"https://swapi.co/api/people/45/\"},{\"name\":\"Ayla Secura\",\"height\":\"178\",\"mass\":\"55\",\"hair_color\":\"none\",\"skin_color\":\"blue\",\"eye_color\":\"hazel\",\"birth_year\":\"48BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/37/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/15/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:48:01.172000Z\",\"edited\":\"2014-12-20T21:17:50.409000Z\",\"url\":\"https://swapi.co/api/people/46/\"},{\"name\":\"Dud Bolt\",\"height\":\"94\",\"mass\":\"45\",\"hair_color\":\"none\",\"skin_color\":\"blue, grey\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/39/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/17/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:57:31.858000Z\",\"edited\":\"2014-12-20T21:17:50.414000Z\",\"url\":\"https://swapi.co/api/people/48/\"},{\"name\":\"Gasgano\",\"height\":\"122\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"white, blue\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/40/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/18/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:02:12.223000Z\",\"edited\":\"2014-12-20T21:17:50.416000Z\",\"url\":\"https://swapi.co/api/people/49/\"},{\"name\":\"Ben Quadinaros\",\"height\":\"163\",\"mass\":\"65\",\"hair_color\":\"none\",\"skin_color\":\"grey, green, yellow\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/41/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/19/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:08:33.777000Z\",\"edited\":\"2014-12-20T21:17:50.417000Z\",\"url\":\"https://swapi.co/api/people/50/\"},{\"name\":\"Mace Windu\",\"height\":\"188\",\"mass\":\"84\",\"hair_color\":\"none\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"72BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/42/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:12:30.846000Z\",\"edited\":\"2014-12-20T21:17:50.420000Z\",\"url\":\"https://swapi.co/api/people/51/\"},{\"name\":\"Ki-Adi-Mundi\",\"height\":\"198\",\"mass\":\"82\",\"hair_color\":\"white\",\"skin_color\":\"pale\",\"eye_color\":\"yellow\",\"birth_year\":\"92BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/43/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/20/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:15:32.293000Z\",\"edited\":\"2014-12-20T21:17:50.422000Z\",\"url\":\"https://swapi.co/api/people/52/\"},{\"name\":\"Kit Fisto\",\"height\":\"196\",\"mass\":\"87\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/44/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/21/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:18:57.202000Z\",\"edited\":\"2014-12-20T21:17:50.424000Z\",\"url\":\"https://swapi.co/api/people/53/\"}]},\"https://swapi.co/api/people/43/\":{\"name\":\"Shmi Skywalker\",\"height\":\"163\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"72BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-19T17:57:41.191000Z\",\"edited\":\"2014-12-20T21:17:50.401000Z\",\"url\":\"https://swapi.co/api/people/43/\"},\"https://swapi.co/api/people/44/\":{\"name\":\"Darth Maul\",\"height\":\"175\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"red\",\"eye_color\":\"yellow\",\"birth_year\":\"54BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/36/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/22/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/42/\"],\"starships\":[\"https://swapi.co/api/starships/41/\"],\"created\":\"2014-12-19T18:00:41.929000Z\",\"edited\":\"2014-12-20T21:17:50.403000Z\",\"url\":\"https://swapi.co/api/people/44/\"},\"https://swapi.co/api/people/45/\":{\"name\":\"Bib Fortuna\",\"height\":\"180\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"pale\",\"eye_color\":\"pink\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/37/\",\"films\":[\"https://swapi.co/api/films/3/\"],\"species\":[\"https://swapi.co/api/species/15/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:47:02.512000Z\",\"edited\":\"2014-12-20T21:17:50.407000Z\",\"url\":\"https://swapi.co/api/people/45/\"},\"https://swapi.co/api/people/46/\":{\"name\":\"Ayla Secura\",\"height\":\"178\",\"mass\":\"55\",\"hair_color\":\"none\",\"skin_color\":\"blue\",\"eye_color\":\"hazel\",\"birth_year\":\"48BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/37/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/15/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:48:01.172000Z\",\"edited\":\"2014-12-20T21:17:50.409000Z\",\"url\":\"https://swapi.co/api/people/46/\"},\"https://swapi.co/api/people/48/\":{\"name\":\"Dud Bolt\",\"height\":\"94\",\"mass\":\"45\",\"hair_color\":\"none\",\"skin_color\":\"blue, grey\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/39/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/17/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:57:31.858000Z\",\"edited\":\"2014-12-20T21:17:50.414000Z\",\"url\":\"https://swapi.co/api/people/48/\"},\"https://swapi.co/api/people/49/\":{\"name\":\"Gasgano\",\"height\":\"122\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"white, blue\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/40/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/18/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:02:12.223000Z\",\"edited\":\"2014-12-20T21:17:50.416000Z\",\"url\":\"https://swapi.co/api/people/49/\"},\"https://swapi.co/api/people/50/\":{\"name\":\"Ben Quadinaros\",\"height\":\"163\",\"mass\":\"65\",\"hair_color\":\"none\",\"skin_color\":\"grey, green, yellow\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/41/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/19/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:08:33.777000Z\",\"edited\":\"2014-12-20T21:17:50.417000Z\",\"url\":\"https://swapi.co/api/people/50/\"},\"https://swapi.co/api/people/51/\":{\"name\":\"Mace Windu\",\"height\":\"188\",\"mass\":\"84\",\"hair_color\":\"none\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"72BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/42/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:12:30.846000Z\",\"edited\":\"2014-12-20T21:17:50.420000Z\",\"url\":\"https://swapi.co/api/people/51/\"},\"https://swapi.co/api/people/52/\":{\"name\":\"Ki-Adi-Mundi\",\"height\":\"198\",\"mass\":\"82\",\"hair_color\":\"white\",\"skin_color\":\"pale\",\"eye_color\":\"yellow\",\"birth_year\":\"92BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/43/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/20/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:15:32.293000Z\",\"edited\":\"2014-12-20T21:17:50.422000Z\",\"url\":\"https://swapi.co/api/people/52/\"},\"https://swapi.co/api/people/53/\":{\"name\":\"Kit Fisto\",\"height\":\"196\",\"mass\":\"87\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/44/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/21/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:18:57.202000Z\",\"edited\":\"2014-12-20T21:17:50.424000Z\",\"url\":\"https://swapi.co/api/people/53/\"},\"https://swapi.co/api/people/?page=6\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=7\",\"previous\":\"https://swapi.co/api/people/?page=5\",\"results\":[{\"name\":\"Eeth Koth\",\"height\":\"171\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"brown\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/45/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/22/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:26:47.902000Z\",\"edited\":\"2014-12-20T21:17:50.427000Z\",\"url\":\"https://swapi.co/api/people/54/\"},{\"name\":\"Adi Gallia\",\"height\":\"184\",\"mass\":\"50\",\"hair_color\":\"none\",\"skin_color\":\"dark\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/23/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:29:11.661000Z\",\"edited\":\"2014-12-20T21:17:50.432000Z\",\"url\":\"https://swapi.co/api/people/55/\"},{\"name\":\"Saesee Tiin\",\"height\":\"188\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"pale\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/47/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/24/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:32:11.669000Z\",\"edited\":\"2014-12-20T21:17:50.434000Z\",\"url\":\"https://swapi.co/api/people/56/\"},{\"name\":\"Yarael Poof\",\"height\":\"264\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"white\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/48/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/25/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:34:48.725000Z\",\"edited\":\"2014-12-20T21:17:50.437000Z\",\"url\":\"https://swapi.co/api/people/57/\"},{\"name\":\"Plo Koon\",\"height\":\"188\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"orange\",\"eye_color\":\"black\",\"birth_year\":\"22BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/49/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/26/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/48/\"],\"created\":\"2014-12-20T10:49:19.859000Z\",\"edited\":\"2014-12-20T21:17:50.439000Z\",\"url\":\"https://swapi.co/api/people/58/\"},{\"name\":\"Mas Amedda\",\"height\":\"196\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"blue\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/50/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/27/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:53:26.457000Z\",\"edited\":\"2014-12-20T21:17:50.442000Z\",\"url\":\"https://swapi.co/api/people/59/\"},{\"name\":\"Gregar Typho\",\"height\":\"185\",\"mass\":\"85\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/39/\"],\"created\":\"2014-12-20T11:10:10.381000Z\",\"edited\":\"2014-12-20T21:17:50.445000Z\",\"url\":\"https://swapi.co/api/people/60/\"},{\"name\":\"Cordé\",\"height\":\"157\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T11:11:39.630000Z\",\"edited\":\"2014-12-20T21:17:50.449000Z\",\"url\":\"https://swapi.co/api/people/61/\"},{\"name\":\"Cliegg Lars\",\"height\":\"183\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"82BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T15:59:03.958000Z\",\"edited\":\"2014-12-20T21:17:50.451000Z\",\"url\":\"https://swapi.co/api/people/62/\"},{\"name\":\"Poggle the Lesser\",\"height\":\"183\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/11/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/28/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:40:43.977000Z\",\"edited\":\"2014-12-20T21:17:50.453000Z\",\"url\":\"https://swapi.co/api/people/63/\"}]},\"https://swapi.co/api/people/54/\":{\"name\":\"Eeth Koth\",\"height\":\"171\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"brown\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/45/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/22/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:26:47.902000Z\",\"edited\":\"2014-12-20T21:17:50.427000Z\",\"url\":\"https://swapi.co/api/people/54/\"},\"https://swapi.co/api/people/55/\":{\"name\":\"Adi Gallia\",\"height\":\"184\",\"mass\":\"50\",\"hair_color\":\"none\",\"skin_color\":\"dark\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/23/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:29:11.661000Z\",\"edited\":\"2014-12-20T21:17:50.432000Z\",\"url\":\"https://swapi.co/api/people/55/\"},\"https://swapi.co/api/people/56/\":{\"name\":\"Saesee Tiin\",\"height\":\"188\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"pale\",\"eye_color\":\"orange\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/47/\",\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/24/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:32:11.669000Z\",\"edited\":\"2014-12-20T21:17:50.434000Z\",\"url\":\"https://swapi.co/api/people/56/\"},\"https://swapi.co/api/people/57/\":{\"name\":\"Yarael Poof\",\"height\":\"264\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"white\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/48/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/25/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:34:48.725000Z\",\"edited\":\"2014-12-20T21:17:50.437000Z\",\"url\":\"https://swapi.co/api/people/57/\"},\"https://swapi.co/api/people/58/\":{\"name\":\"Plo Koon\",\"height\":\"188\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"orange\",\"eye_color\":\"black\",\"birth_year\":\"22BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/49/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/26/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/48/\"],\"created\":\"2014-12-20T10:49:19.859000Z\",\"edited\":\"2014-12-20T21:17:50.439000Z\",\"url\":\"https://swapi.co/api/people/58/\"},\"https://swapi.co/api/people/59/\":{\"name\":\"Mas Amedda\",\"height\":\"196\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"blue\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/50/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/27/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T10:53:26.457000Z\",\"edited\":\"2014-12-20T21:17:50.442000Z\",\"url\":\"https://swapi.co/api/people/59/\"},\"https://swapi.co/api/people/60/\":{\"name\":\"Gregar Typho\",\"height\":\"185\",\"mass\":\"85\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/39/\"],\"created\":\"2014-12-20T11:10:10.381000Z\",\"edited\":\"2014-12-20T21:17:50.445000Z\",\"url\":\"https://swapi.co/api/people/60/\"},\"https://swapi.co/api/people/61/\":{\"name\":\"Cordé\",\"height\":\"157\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T11:11:39.630000Z\",\"edited\":\"2014-12-20T21:17:50.449000Z\",\"url\":\"https://swapi.co/api/people/61/\"},\"https://swapi.co/api/people/62/\":{\"name\":\"Cliegg Lars\",\"height\":\"183\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"82BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/1/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T15:59:03.958000Z\",\"edited\":\"2014-12-20T21:17:50.451000Z\",\"url\":\"https://swapi.co/api/people/62/\"},\"https://swapi.co/api/people/63/\":{\"name\":\"Poggle the Lesser\",\"height\":\"183\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"green\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/11/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/28/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:40:43.977000Z\",\"edited\":\"2014-12-20T21:17:50.453000Z\",\"url\":\"https://swapi.co/api/people/63/\"},\"https://swapi.co/api/people/?page=7\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=8\",\"previous\":\"https://swapi.co/api/people/?page=6\",\"results\":[{\"name\":\"Luminara Unduli\",\"height\":\"170\",\"mass\":\"56.2\",\"hair_color\":\"black\",\"skin_color\":\"yellow\",\"eye_color\":\"blue\",\"birth_year\":\"58BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/51/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/29/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:45:53.668000Z\",\"edited\":\"2014-12-20T21:17:50.455000Z\",\"url\":\"https://swapi.co/api/people/64/\"},{\"name\":\"Barriss Offee\",\"height\":\"166\",\"mass\":\"50\",\"hair_color\":\"black\",\"skin_color\":\"yellow\",\"eye_color\":\"blue\",\"birth_year\":\"40BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/51/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/29/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:46:40.440000Z\",\"edited\":\"2014-12-20T21:17:50.457000Z\",\"url\":\"https://swapi.co/api/people/65/\"},{\"name\":\"Dormé\",\"height\":\"165\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:49:14.640000Z\",\"edited\":\"2014-12-20T21:17:50.460000Z\",\"url\":\"https://swapi.co/api/people/66/\"},{\"name\":\"Dooku\",\"height\":\"193\",\"mass\":\"80\",\"hair_color\":\"white\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"102BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/52/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/55/\"],\"starships\":[],\"created\":\"2014-12-20T16:52:14.726000Z\",\"edited\":\"2014-12-20T21:17:50.462000Z\",\"url\":\"https://swapi.co/api/people/67/\"},{\"name\":\"Bail Prestor Organa\",\"height\":\"191\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"tan\",\"eye_color\":\"brown\",\"birth_year\":\"67BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/2/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:53:08.575000Z\",\"edited\":\"2014-12-20T21:17:50.463000Z\",\"url\":\"https://swapi.co/api/people/68/\"},{\"name\":\"Jango Fett\",\"height\":\"183\",\"mass\":\"79\",\"hair_color\":\"black\",\"skin_color\":\"tan\",\"eye_color\":\"brown\",\"birth_year\":\"66BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/53/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:54:41.620000Z\",\"edited\":\"2014-12-20T21:17:50.465000Z\",\"url\":\"https://swapi.co/api/people/69/\"},{\"name\":\"Zam Wesell\",\"height\":\"168\",\"mass\":\"55\",\"hair_color\":\"blonde\",\"skin_color\":\"fair, green, yellow\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/54/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/30/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/45/\"],\"starships\":[],\"created\":\"2014-12-20T16:57:44.471000Z\",\"edited\":\"2014-12-20T21:17:50.468000Z\",\"url\":\"https://swapi.co/api/people/70/\"},{\"name\":\"Dexter Jettster\",\"height\":\"198\",\"mass\":\"102\",\"hair_color\":\"none\",\"skin_color\":\"brown\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/55/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/31/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:28:27.248000Z\",\"edited\":\"2014-12-20T21:17:50.470000Z\",\"url\":\"https://swapi.co/api/people/71/\"},{\"name\":\"Lama Su\",\"height\":\"229\",\"mass\":\"88\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/32/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:30:50.416000Z\",\"edited\":\"2014-12-20T21:17:50.473000Z\",\"url\":\"https://swapi.co/api/people/72/\"},{\"name\":\"Taun We\",\"height\":\"213\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/32/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:31:21.195000Z\",\"edited\":\"2014-12-20T21:17:50.474000Z\",\"url\":\"https://swapi.co/api/people/73/\"}]},\"https://swapi.co/api/people/64/\":{\"name\":\"Luminara Unduli\",\"height\":\"170\",\"mass\":\"56.2\",\"hair_color\":\"black\",\"skin_color\":\"yellow\",\"eye_color\":\"blue\",\"birth_year\":\"58BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/51/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/29/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:45:53.668000Z\",\"edited\":\"2014-12-20T21:17:50.455000Z\",\"url\":\"https://swapi.co/api/people/64/\"},\"https://swapi.co/api/people/65/\":{\"name\":\"Barriss Offee\",\"height\":\"166\",\"mass\":\"50\",\"hair_color\":\"black\",\"skin_color\":\"yellow\",\"eye_color\":\"blue\",\"birth_year\":\"40BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/51/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/29/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:46:40.440000Z\",\"edited\":\"2014-12-20T21:17:50.457000Z\",\"url\":\"https://swapi.co/api/people/65/\"},\"https://swapi.co/api/people/66/\":{\"name\":\"Dormé\",\"height\":\"165\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:49:14.640000Z\",\"edited\":\"2014-12-20T21:17:50.460000Z\",\"url\":\"https://swapi.co/api/people/66/\"},\"https://swapi.co/api/people/67/\":{\"name\":\"Dooku\",\"height\":\"193\",\"mass\":\"80\",\"hair_color\":\"white\",\"skin_color\":\"fair\",\"eye_color\":\"brown\",\"birth_year\":\"102BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/52/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/55/\"],\"starships\":[],\"created\":\"2014-12-20T16:52:14.726000Z\",\"edited\":\"2014-12-20T21:17:50.462000Z\",\"url\":\"https://swapi.co/api/people/67/\"},\"https://swapi.co/api/people/68/\":{\"name\":\"Bail Prestor Organa\",\"height\":\"191\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"tan\",\"eye_color\":\"brown\",\"birth_year\":\"67BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/2/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:53:08.575000Z\",\"edited\":\"2014-12-20T21:17:50.463000Z\",\"url\":\"https://swapi.co/api/people/68/\"},\"https://swapi.co/api/people/69/\":{\"name\":\"Jango Fett\",\"height\":\"183\",\"mass\":\"79\",\"hair_color\":\"black\",\"skin_color\":\"tan\",\"eye_color\":\"brown\",\"birth_year\":\"66BBY\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/53/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T16:54:41.620000Z\",\"edited\":\"2014-12-20T21:17:50.465000Z\",\"url\":\"https://swapi.co/api/people/69/\"},\"https://swapi.co/api/people/70/\":{\"name\":\"Zam Wesell\",\"height\":\"168\",\"mass\":\"55\",\"hair_color\":\"blonde\",\"skin_color\":\"fair, green, yellow\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/54/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/30/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/45/\"],\"starships\":[],\"created\":\"2014-12-20T16:57:44.471000Z\",\"edited\":\"2014-12-20T21:17:50.468000Z\",\"url\":\"https://swapi.co/api/people/70/\"},\"https://swapi.co/api/people/71/\":{\"name\":\"Dexter Jettster\",\"height\":\"198\",\"mass\":\"102\",\"hair_color\":\"none\",\"skin_color\":\"brown\",\"eye_color\":\"yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/55/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/31/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:28:27.248000Z\",\"edited\":\"2014-12-20T21:17:50.470000Z\",\"url\":\"https://swapi.co/api/people/71/\"},\"https://swapi.co/api/people/72/\":{\"name\":\"Lama Su\",\"height\":\"229\",\"mass\":\"88\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/32/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:30:50.416000Z\",\"edited\":\"2014-12-20T21:17:50.473000Z\",\"url\":\"https://swapi.co/api/people/72/\"},\"https://swapi.co/api/people/73/\":{\"name\":\"Taun We\",\"height\":\"213\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/32/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:31:21.195000Z\",\"edited\":\"2014-12-20T21:17:50.474000Z\",\"url\":\"https://swapi.co/api/people/73/\"},\"https://swapi.co/api/people/?page=8\":{\"count\":87,\"next\":\"https://swapi.co/api/people/?page=9\",\"previous\":\"https://swapi.co/api/people/?page=7\",\"results\":[{\"name\":\"Jocasta Nu\",\"height\":\"167\",\"mass\":\"unknown\",\"hair_color\":\"white\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:32:51.996000Z\",\"edited\":\"2014-12-20T21:17:50.476000Z\",\"url\":\"https://swapi.co/api/people/74/\"},{\"name\":\"Ratts Tyerell\",\"height\":\"79\",\"mass\":\"15\",\"hair_color\":\"none\",\"skin_color\":\"grey, blue\",\"eye_color\":\"unknown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/38/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/16/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:53:15.086000Z\",\"edited\":\"2016-06-30T12:52:19.604868Z\",\"url\":\"https://swapi.co/api/people/47/\"},{\"name\":\"R4-P17\",\"height\":\"96\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"silver, red\",\"eye_color\":\"red, blue\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:43:36.409000Z\",\"edited\":\"2014-12-20T21:17:50.478000Z\",\"url\":\"https://swapi.co/api/people/75/\"},{\"name\":\"Wat Tambor\",\"height\":\"193\",\"mass\":\"48\",\"hair_color\":\"none\",\"skin_color\":\"green, grey\",\"eye_color\":\"unknown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/56/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/33/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:53:52.607000Z\",\"edited\":\"2014-12-20T21:17:50.481000Z\",\"url\":\"https://swapi.co/api/people/76/\"},{\"name\":\"San Hill\",\"height\":\"191\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"gold\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/57/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/34/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:58:17.049000Z\",\"edited\":\"2014-12-20T21:17:50.484000Z\",\"url\":\"https://swapi.co/api/people/77/\"},{\"name\":\"Shaak Ti\",\"height\":\"178\",\"mass\":\"57\",\"hair_color\":\"none\",\"skin_color\":\"red, blue, white\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/58/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/35/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T18:44:01.103000Z\",\"edited\":\"2014-12-20T21:17:50.486000Z\",\"url\":\"https://swapi.co/api/people/78/\"},{\"name\":\"Grievous\",\"height\":\"216\",\"mass\":\"159\",\"hair_color\":\"none\",\"skin_color\":\"brown, white\",\"eye_color\":\"green, yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/59/\",\"films\":[\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/36/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/60/\"],\"starships\":[\"https://swapi.co/api/starships/74/\"],\"created\":\"2014-12-20T19:43:53.348000Z\",\"edited\":\"2014-12-20T21:17:50.488000Z\",\"url\":\"https://swapi.co/api/people/79/\"},{\"name\":\"Tarfful\",\"height\":\"234\",\"mass\":\"136\",\"hair_color\":\"brown\",\"skin_color\":\"brown\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/14/\",\"films\":[\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/3/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T19:46:34.209000Z\",\"edited\":\"2014-12-20T21:17:50.491000Z\",\"url\":\"https://swapi.co/api/people/80/\"},{\"name\":\"Raymus Antilles\",\"height\":\"188\",\"mass\":\"79\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/2/\",\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T19:49:35.583000Z\",\"edited\":\"2014-12-20T21:17:50.493000Z\",\"url\":\"https://swapi.co/api/people/81/\"},{\"name\":\"Sly Moore\",\"height\":\"178\",\"mass\":\"48\",\"hair_color\":\"none\",\"skin_color\":\"pale\",\"eye_color\":\"white\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/60/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T20:18:37.619000Z\",\"edited\":\"2014-12-20T21:17:50.496000Z\",\"url\":\"https://swapi.co/api/people/82/\"}]},\"https://swapi.co/api/people/74/\":{\"name\":\"Jocasta Nu\",\"height\":\"167\",\"mass\":\"unknown\",\"hair_color\":\"white\",\"skin_color\":\"fair\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:32:51.996000Z\",\"edited\":\"2014-12-20T21:17:50.476000Z\",\"url\":\"https://swapi.co/api/people/74/\"},\"https://swapi.co/api/people/47/\":{\"name\":\"Ratts Tyerell\",\"height\":\"79\",\"mass\":\"15\",\"hair_color\":\"none\",\"skin_color\":\"grey, blue\",\"eye_color\":\"unknown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/38/\",\"films\":[\"https://swapi.co/api/films/4/\"],\"species\":[\"https://swapi.co/api/species/16/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T09:53:15.086000Z\",\"edited\":\"2016-06-30T12:52:19.604868Z\",\"url\":\"https://swapi.co/api/people/47/\"},\"https://swapi.co/api/people/75/\":{\"name\":\"R4-P17\",\"height\":\"96\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"silver, red\",\"eye_color\":\"red, blue\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:43:36.409000Z\",\"edited\":\"2014-12-20T21:17:50.478000Z\",\"url\":\"https://swapi.co/api/people/75/\"},\"https://swapi.co/api/people/76/\":{\"name\":\"Wat Tambor\",\"height\":\"193\",\"mass\":\"48\",\"hair_color\":\"none\",\"skin_color\":\"green, grey\",\"eye_color\":\"unknown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/56/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/33/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:53:52.607000Z\",\"edited\":\"2014-12-20T21:17:50.481000Z\",\"url\":\"https://swapi.co/api/people/76/\"},\"https://swapi.co/api/people/77/\":{\"name\":\"San Hill\",\"height\":\"191\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"gold\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/57/\",\"films\":[\"https://swapi.co/api/films/5/\"],\"species\":[\"https://swapi.co/api/species/34/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T17:58:17.049000Z\",\"edited\":\"2014-12-20T21:17:50.484000Z\",\"url\":\"https://swapi.co/api/people/77/\"},\"https://swapi.co/api/people/78/\":{\"name\":\"Shaak Ti\",\"height\":\"178\",\"mass\":\"57\",\"hair_color\":\"none\",\"skin_color\":\"red, blue, white\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/58/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/35/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T18:44:01.103000Z\",\"edited\":\"2014-12-20T21:17:50.486000Z\",\"url\":\"https://swapi.co/api/people/78/\"},\"https://swapi.co/api/people/79/\":{\"name\":\"Grievous\",\"height\":\"216\",\"mass\":\"159\",\"hair_color\":\"none\",\"skin_color\":\"brown, white\",\"eye_color\":\"green, yellow\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/59/\",\"films\":[\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/36/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/60/\"],\"starships\":[\"https://swapi.co/api/starships/74/\"],\"created\":\"2014-12-20T19:43:53.348000Z\",\"edited\":\"2014-12-20T21:17:50.488000Z\",\"url\":\"https://swapi.co/api/people/79/\"},\"https://swapi.co/api/people/80/\":{\"name\":\"Tarfful\",\"height\":\"234\",\"mass\":\"136\",\"hair_color\":\"brown\",\"skin_color\":\"brown\",\"eye_color\":\"blue\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/14/\",\"films\":[\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/3/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T19:46:34.209000Z\",\"edited\":\"2014-12-20T21:17:50.491000Z\",\"url\":\"https://swapi.co/api/people/80/\"},\"https://swapi.co/api/people/81/\":{\"name\":\"Raymus Antilles\",\"height\":\"188\",\"mass\":\"79\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/2/\",\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T19:49:35.583000Z\",\"edited\":\"2014-12-20T21:17:50.493000Z\",\"url\":\"https://swapi.co/api/people/81/\"},\"https://swapi.co/api/people/82/\":{\"name\":\"Sly Moore\",\"height\":\"178\",\"mass\":\"48\",\"hair_color\":\"none\",\"skin_color\":\"pale\",\"eye_color\":\"white\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/60/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T20:18:37.619000Z\",\"edited\":\"2014-12-20T21:17:50.496000Z\",\"url\":\"https://swapi.co/api/people/82/\"},\"https://swapi.co/api/people/?page=9\":{\"count\":87,\"next\":null,\"previous\":\"https://swapi.co/api/people/?page=8\",\"results\":[{\"name\":\"Tion Medon\",\"height\":\"206\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/12/\",\"films\":[\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/37/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T20:35:04.260000Z\",\"edited\":\"2014-12-20T21:17:50.498000Z\",\"url\":\"https://swapi.co/api/people/83/\"},{\"name\":\"Finn\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"dark\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2015-04-17T06:52:40.793621Z\",\"edited\":\"2015-04-17T06:52:40.793674Z\",\"url\":\"https://swapi.co/api/people/84/\"},{\"name\":\"Rey\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"hazel\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2015-04-17T06:54:01.495077Z\",\"edited\":\"2015-04-17T06:54:01.495128Z\",\"url\":\"https://swapi.co/api/people/85/\"},{\"name\":\"Poe Dameron\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/77/\"],\"created\":\"2015-04-17T06:55:21.622786Z\",\"edited\":\"2015-04-17T06:55:21.622835Z\",\"url\":\"https://swapi.co/api/people/86/\"},{\"name\":\"BB8\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"none\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"none\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2015-04-17T06:57:38.061346Z\",\"edited\":\"2015-04-17T06:57:38.061453Z\",\"url\":\"https://swapi.co/api/people/87/\"},{\"name\":\"Captain Phasma\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"unknown\",\"skin_color\":\"unknown\",\"eye_color\":\"unknown\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2015-10-13T10:35:39.229823Z\",\"edited\":\"2015-10-13T10:35:39.229894Z\",\"url\":\"https://swapi.co/api/people/88/\"},{\"name\":\"Padmé Amidala\",\"height\":\"165\",\"mass\":\"45\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"46BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/49/\",\"https://swapi.co/api/starships/64/\",\"https://swapi.co/api/starships/39/\"],\"created\":\"2014-12-19T17:28:26.926000Z\",\"edited\":\"2016-04-20T17:06:31.502555Z\",\"url\":\"https://swapi.co/api/people/35/\"}]},\"https://swapi.co/api/people/83/\":{\"name\":\"Tion Medon\",\"height\":\"206\",\"mass\":\"80\",\"hair_color\":\"none\",\"skin_color\":\"grey\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/12/\",\"films\":[\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/37/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2014-12-20T20:35:04.260000Z\",\"edited\":\"2014-12-20T21:17:50.498000Z\",\"url\":\"https://swapi.co/api/people/83/\"},\"https://swapi.co/api/people/84/\":{\"name\":\"Finn\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"black\",\"skin_color\":\"dark\",\"eye_color\":\"dark\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2015-04-17T06:52:40.793621Z\",\"edited\":\"2015-04-17T06:52:40.793674Z\",\"url\":\"https://swapi.co/api/people/84/\"},\"https://swapi.co/api/people/85/\":{\"name\":\"Rey\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"hazel\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2015-04-17T06:54:01.495077Z\",\"edited\":\"2015-04-17T06:54:01.495128Z\",\"url\":\"https://swapi.co/api/people/85/\"},\"https://swapi.co/api/people/86/\":{\"name\":\"Poe Dameron\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"unknown\",\"gender\":\"male\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/77/\"],\"created\":\"2015-04-17T06:55:21.622786Z\",\"edited\":\"2015-04-17T06:55:21.622835Z\",\"url\":\"https://swapi.co/api/people/86/\"},\"https://swapi.co/api/people/87/\":{\"name\":\"BB8\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"none\",\"skin_color\":\"none\",\"eye_color\":\"black\",\"birth_year\":\"unknown\",\"gender\":\"none\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[\"https://swapi.co/api/species/2/\"],\"vehicles\":[],\"starships\":[],\"created\":\"2015-04-17T06:57:38.061346Z\",\"edited\":\"2015-04-17T06:57:38.061453Z\",\"url\":\"https://swapi.co/api/people/87/\"},\"https://swapi.co/api/people/88/\":{\"name\":\"Captain Phasma\",\"height\":\"unknown\",\"mass\":\"unknown\",\"hair_color\":\"unknown\",\"skin_color\":\"unknown\",\"eye_color\":\"unknown\",\"birth_year\":\"unknown\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"films\":[\"https://swapi.co/api/films/7/\"],\"species\":[],\"vehicles\":[],\"starships\":[],\"created\":\"2015-10-13T10:35:39.229823Z\",\"edited\":\"2015-10-13T10:35:39.229894Z\",\"url\":\"https://swapi.co/api/people/88/\"},\"https://swapi.co/api/people/35/\":{\"name\":\"Padmé Amidala\",\"height\":\"165\",\"mass\":\"45\",\"hair_color\":\"brown\",\"skin_color\":\"light\",\"eye_color\":\"brown\",\"birth_year\":\"46BBY\",\"gender\":\"female\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"species\":[\"https://swapi.co/api/species/1/\"],\"vehicles\":[],\"starships\":[\"https://swapi.co/api/starships/49/\",\"https://swapi.co/api/starships/64/\",\"https://swapi.co/api/starships/39/\"],\"created\":\"2014-12-19T17:28:26.926000Z\",\"edited\":\"2016-04-20T17:06:31.502555Z\",\"url\":\"https://swapi.co/api/people/35/\"},\"https://swapi.co/api/starships/\":{\"count\":37,\"next\":\"https://swapi.co/api/starships/?page=2\",\"previous\":null,\"results\":[{\"name\":\"Executor\",\"model\":\"Executor-class star dreadnought\",\"manufacturer\":\"Kuat Drive Yards, Fondor Shipyards\",\"cost_in_credits\":\"1143350000\",\"length\":\"19000\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"279144\",\"passengers\":\"38000\",\"cargo_capacity\":\"250000000\",\"consumables\":\"6 years\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"40\",\"starship_class\":\"Star dreadnought\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:31:42.547000Z\",\"edited\":\"2017-04-19T10:56:06.685592Z\",\"url\":\"https://swapi.co/api/starships/15/\"},{\"name\":\"Sentinel-class landing craft\",\"model\":\"Sentinel-class landing craft\",\"manufacturer\":\"Sienar Fleet Systems, Cyngus Spaceworks\",\"cost_in_credits\":\"240000\",\"length\":\"38\",\"max_atmosphering_speed\":\"1000\",\"crew\":\"5\",\"passengers\":\"75\",\"cargo_capacity\":\"180000\",\"consumables\":\"1 month\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"70\",\"starship_class\":\"landing craft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:48:00.586000Z\",\"edited\":\"2014-12-22T17:35:44.431407Z\",\"url\":\"https://swapi.co/api/starships/5/\"},{\"name\":\"Death Star\",\"model\":\"DS-1 Orbital Battle Station\",\"manufacturer\":\"Imperial Department of Military Research, Sienar Fleet Systems\",\"cost_in_credits\":\"1000000000000\",\"length\":\"120000\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"342953\",\"passengers\":\"843342\",\"cargo_capacity\":\"1000000000000\",\"consumables\":\"3 years\",\"hyperdrive_rating\":\"4.0\",\"MGLT\":\"10\",\"starship_class\":\"Deep Space Mobile Battlestation\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:36:50.509000Z\",\"edited\":\"2014-12-22T17:35:44.452589Z\",\"url\":\"https://swapi.co/api/starships/9/\"},{\"name\":\"Millennium Falcon\",\"model\":\"YT-1300 light freighter\",\"manufacturer\":\"Corellian Engineering Corporation\",\"cost_in_credits\":\"100000\",\"length\":\"34.37\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"4\",\"passengers\":\"6\",\"cargo_capacity\":\"100000\",\"consumables\":\"2 months\",\"hyperdrive_rating\":\"0.5\",\"MGLT\":\"75\",\"starship_class\":\"Light freighter\",\"pilots\":[\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/31/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:59:45.094000Z\",\"edited\":\"2014-12-22T17:35:44.464156Z\",\"url\":\"https://swapi.co/api/starships/10/\"},{\"name\":\"Y-wing\",\"model\":\"BTL Y-wing\",\"manufacturer\":\"Koensayr Manufacturing\",\"cost_in_credits\":\"134999\",\"length\":\"14\",\"max_atmosphering_speed\":\"1000km\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"110\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"80\",\"starship_class\":\"assault starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-12T11:00:39.817000Z\",\"edited\":\"2014-12-22T17:35:44.479706Z\",\"url\":\"https://swapi.co/api/starships/11/\"},{\"name\":\"X-wing\",\"model\":\"T-65 X-wing\",\"manufacturer\":\"Incom Corporation\",\"cost_in_credits\":\"149999\",\"length\":\"12.5\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"110\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"100\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/19/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-12T11:19:05.340000Z\",\"edited\":\"2014-12-22T17:35:44.491233Z\",\"url\":\"https://swapi.co/api/starships/12/\"},{\"name\":\"TIE Advanced x1\",\"model\":\"Twin Ion Engine Advanced x1\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"9.2\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"150\",\"consumables\":\"5 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"105\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/4/\"],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-12T11:21:32.991000Z\",\"edited\":\"2014-12-22T17:35:44.549047Z\",\"url\":\"https://swapi.co/api/starships/13/\"},{\"name\":\"Slave 1\",\"model\":\"Firespray-31-class patrol and attack\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"21.5\",\"max_atmosphering_speed\":\"1000\",\"crew\":\"1\",\"passengers\":\"6\",\"cargo_capacity\":\"70000\",\"consumables\":\"1 month\",\"hyperdrive_rating\":\"3.0\",\"MGLT\":\"70\",\"starship_class\":\"Patrol craft\",\"pilots\":[\"https://swapi.co/api/people/22/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-15T13:00:56.332000Z\",\"edited\":\"2014-12-22T17:35:44.716273Z\",\"url\":\"https://swapi.co/api/starships/21/\"},{\"name\":\"Imperial shuttle\",\"model\":\"Lambda-class T-4a shuttle\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"240000\",\"length\":\"20\",\"max_atmosphering_speed\":\"850\",\"crew\":\"6\",\"passengers\":\"20\",\"cargo_capacity\":\"80000\",\"consumables\":\"2 months\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"50\",\"starship_class\":\"Armed government transport\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T13:04:47.235000Z\",\"edited\":\"2014-12-22T17:35:44.795405Z\",\"url\":\"https://swapi.co/api/starships/22/\"},{\"name\":\"EF76 Nebulon-B escort frigate\",\"model\":\"EF76 Nebulon-B escort frigate\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"8500000\",\"length\":\"300\",\"max_atmosphering_speed\":\"800\",\"crew\":\"854\",\"passengers\":\"75\",\"cargo_capacity\":\"6000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"40\",\"starship_class\":\"Escort ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T13:06:30.813000Z\",\"edited\":\"2014-12-22T17:35:44.848329Z\",\"url\":\"https://swapi.co/api/starships/23/\"}]},\"https://swapi.co/api/starships/15/\":{\"name\":\"Executor\",\"model\":\"Executor-class star dreadnought\",\"manufacturer\":\"Kuat Drive Yards, Fondor Shipyards\",\"cost_in_credits\":\"1143350000\",\"length\":\"19000\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"279144\",\"passengers\":\"38000\",\"cargo_capacity\":\"250000000\",\"consumables\":\"6 years\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"40\",\"starship_class\":\"Star dreadnought\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:31:42.547000Z\",\"edited\":\"2017-04-19T10:56:06.685592Z\",\"url\":\"https://swapi.co/api/starships/15/\"},\"https://swapi.co/api/starships/5/\":{\"name\":\"Sentinel-class landing craft\",\"model\":\"Sentinel-class landing craft\",\"manufacturer\":\"Sienar Fleet Systems, Cyngus Spaceworks\",\"cost_in_credits\":\"240000\",\"length\":\"38\",\"max_atmosphering_speed\":\"1000\",\"crew\":\"5\",\"passengers\":\"75\",\"cargo_capacity\":\"180000\",\"consumables\":\"1 month\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"70\",\"starship_class\":\"landing craft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:48:00.586000Z\",\"edited\":\"2014-12-22T17:35:44.431407Z\",\"url\":\"https://swapi.co/api/starships/5/\"},\"https://swapi.co/api/starships/9/\":{\"name\":\"Death Star\",\"model\":\"DS-1 Orbital Battle Station\",\"manufacturer\":\"Imperial Department of Military Research, Sienar Fleet Systems\",\"cost_in_credits\":\"1000000000000\",\"length\":\"120000\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"342953\",\"passengers\":\"843342\",\"cargo_capacity\":\"1000000000000\",\"consumables\":\"3 years\",\"hyperdrive_rating\":\"4.0\",\"MGLT\":\"10\",\"starship_class\":\"Deep Space Mobile Battlestation\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:36:50.509000Z\",\"edited\":\"2014-12-22T17:35:44.452589Z\",\"url\":\"https://swapi.co/api/starships/9/\"},\"https://swapi.co/api/starships/10/\":{\"name\":\"Millennium Falcon\",\"model\":\"YT-1300 light freighter\",\"manufacturer\":\"Corellian Engineering Corporation\",\"cost_in_credits\":\"100000\",\"length\":\"34.37\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"4\",\"passengers\":\"6\",\"cargo_capacity\":\"100000\",\"consumables\":\"2 months\",\"hyperdrive_rating\":\"0.5\",\"MGLT\":\"75\",\"starship_class\":\"Light freighter\",\"pilots\":[\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/31/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:59:45.094000Z\",\"edited\":\"2014-12-22T17:35:44.464156Z\",\"url\":\"https://swapi.co/api/starships/10/\"},\"https://swapi.co/api/starships/11/\":{\"name\":\"Y-wing\",\"model\":\"BTL Y-wing\",\"manufacturer\":\"Koensayr Manufacturing\",\"cost_in_credits\":\"134999\",\"length\":\"14\",\"max_atmosphering_speed\":\"1000km\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"110\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"80\",\"starship_class\":\"assault starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-12T11:00:39.817000Z\",\"edited\":\"2014-12-22T17:35:44.479706Z\",\"url\":\"https://swapi.co/api/starships/11/\"},\"https://swapi.co/api/starships/12/\":{\"name\":\"X-wing\",\"model\":\"T-65 X-wing\",\"manufacturer\":\"Incom Corporation\",\"cost_in_credits\":\"149999\",\"length\":\"12.5\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"110\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"100\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/19/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-12T11:19:05.340000Z\",\"edited\":\"2014-12-22T17:35:44.491233Z\",\"url\":\"https://swapi.co/api/starships/12/\"},\"https://swapi.co/api/starships/13/\":{\"name\":\"TIE Advanced x1\",\"model\":\"Twin Ion Engine Advanced x1\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"9.2\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"150\",\"consumables\":\"5 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"105\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/4/\"],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-12T11:21:32.991000Z\",\"edited\":\"2014-12-22T17:35:44.549047Z\",\"url\":\"https://swapi.co/api/starships/13/\"},\"https://swapi.co/api/starships/21/\":{\"name\":\"Slave 1\",\"model\":\"Firespray-31-class patrol and attack\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"21.5\",\"max_atmosphering_speed\":\"1000\",\"crew\":\"1\",\"passengers\":\"6\",\"cargo_capacity\":\"70000\",\"consumables\":\"1 month\",\"hyperdrive_rating\":\"3.0\",\"MGLT\":\"70\",\"starship_class\":\"Patrol craft\",\"pilots\":[\"https://swapi.co/api/people/22/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-15T13:00:56.332000Z\",\"edited\":\"2014-12-22T17:35:44.716273Z\",\"url\":\"https://swapi.co/api/starships/21/\"},\"https://swapi.co/api/starships/22/\":{\"name\":\"Imperial shuttle\",\"model\":\"Lambda-class T-4a shuttle\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"240000\",\"length\":\"20\",\"max_atmosphering_speed\":\"850\",\"crew\":\"6\",\"passengers\":\"20\",\"cargo_capacity\":\"80000\",\"consumables\":\"2 months\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"50\",\"starship_class\":\"Armed government transport\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T13:04:47.235000Z\",\"edited\":\"2014-12-22T17:35:44.795405Z\",\"url\":\"https://swapi.co/api/starships/22/\"},\"https://swapi.co/api/starships/23/\":{\"name\":\"EF76 Nebulon-B escort frigate\",\"model\":\"EF76 Nebulon-B escort frigate\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"8500000\",\"length\":\"300\",\"max_atmosphering_speed\":\"800\",\"crew\":\"854\",\"passengers\":\"75\",\"cargo_capacity\":\"6000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"40\",\"starship_class\":\"Escort ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T13:06:30.813000Z\",\"edited\":\"2014-12-22T17:35:44.848329Z\",\"url\":\"https://swapi.co/api/starships/23/\"},\"https://swapi.co/api/starships/?page=2\":{\"count\":37,\"next\":\"https://swapi.co/api/starships/?page=3\",\"previous\":\"https://swapi.co/api/starships/?page=1\",\"results\":[{\"name\":\"Calamari Cruiser\",\"model\":\"MC80 Liberty type Star Cruiser\",\"manufacturer\":\"Mon Calamari shipyards\",\"cost_in_credits\":\"104000000\",\"length\":\"1200\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"5400\",\"passengers\":\"1200\",\"cargo_capacity\":\"unknown\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"60\",\"starship_class\":\"Star Cruiser\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:54:57.804000Z\",\"edited\":\"2014-12-22T17:35:44.957852Z\",\"url\":\"https://swapi.co/api/starships/27/\"},{\"name\":\"A-wing\",\"model\":\"RZ-1 A-wing Interceptor\",\"manufacturer\":\"Alliance Underground Engineering, Incom Corporation\",\"cost_in_credits\":\"175000\",\"length\":\"9.6\",\"max_atmosphering_speed\":\"1300\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"40\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"120\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/29/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:16:34.542000Z\",\"edited\":\"2014-12-22T17:35:44.978754Z\",\"url\":\"https://swapi.co/api/starships/28/\"},{\"name\":\"B-wing\",\"model\":\"A/SF-01 B-wing starfighter\",\"manufacturer\":\"Slayn & Korpil\",\"cost_in_credits\":\"220000\",\"length\":\"16.9\",\"max_atmosphering_speed\":\"950\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"45\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"91\",\"starship_class\":\"Assault Starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:18:04.763000Z\",\"edited\":\"2014-12-22T17:35:45.011193Z\",\"url\":\"https://swapi.co/api/starships/29/\"},{\"name\":\"Republic Cruiser\",\"model\":\"Consular-class cruiser\",\"manufacturer\":\"Corellian Engineering Corporation\",\"cost_in_credits\":\"unknown\",\"length\":\"115\",\"max_atmosphering_speed\":\"900\",\"crew\":\"9\",\"passengers\":\"16\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Space cruiser\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:01:31.488000Z\",\"edited\":\"2014-12-22T17:35:45.027308Z\",\"url\":\"https://swapi.co/api/starships/31/\"},{\"name\":\"Naboo fighter\",\"model\":\"N-1 starfighter\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps\",\"cost_in_credits\":\"200000\",\"length\":\"11\",\"max_atmosphering_speed\":\"1100\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"65\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:39:17.582000Z\",\"edited\":\"2014-12-22T17:35:45.079452Z\",\"url\":\"https://swapi.co/api/starships/39/\"},{\"name\":\"Naboo Royal Starship\",\"model\":\"J-type 327 Nubian royal starship\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps, Nubia Star Drives\",\"cost_in_credits\":\"unknown\",\"length\":\"76\",\"max_atmosphering_speed\":\"920\",\"crew\":\"8\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"1.8\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[\"https://swapi.co/api/people/39/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:45:03.506000Z\",\"edited\":\"2014-12-22T17:35:45.091925Z\",\"url\":\"https://swapi.co/api/starships/40/\"},{\"name\":\"Scimitar\",\"model\":\"Star Courier\",\"manufacturer\":\"Republic Sienar Systems\",\"cost_in_credits\":\"55000000\",\"length\":\"26.5\",\"max_atmosphering_speed\":\"1180\",\"crew\":\"1\",\"passengers\":\"6\",\"cargo_capacity\":\"2500000\",\"consumables\":\"30 days\",\"hyperdrive_rating\":\"1.5\",\"MGLT\":\"unknown\",\"starship_class\":\"Space Transport\",\"pilots\":[\"https://swapi.co/api/people/44/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T09:39:56.116000Z\",\"edited\":\"2014-12-22T17:35:45.105522Z\",\"url\":\"https://swapi.co/api/starships/41/\"},{\"name\":\"J-type diplomatic barge\",\"model\":\"J-type diplomatic barge\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps, Nubia Star Drives\",\"cost_in_credits\":\"2000000\",\"length\":\"39\",\"max_atmosphering_speed\":\"2000\",\"crew\":\"5\",\"passengers\":\"10\",\"cargo_capacity\":\"unknown\",\"consumables\":\"1 year\",\"hyperdrive_rating\":\"0.7\",\"MGLT\":\"unknown\",\"starship_class\":\"Diplomatic barge\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T11:05:51.237000Z\",\"edited\":\"2014-12-22T17:35:45.124386Z\",\"url\":\"https://swapi.co/api/starships/43/\"},{\"name\":\"AA-9 Coruscant freighter\",\"model\":\"Botajef AA-9 Freighter-Liner\",\"manufacturer\":\"Botajef Shipyards\",\"cost_in_credits\":\"unknown\",\"length\":\"390\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"unknown\",\"passengers\":\"30000\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"unknown\",\"MGLT\":\"unknown\",\"starship_class\":\"freighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:24:23.509000Z\",\"edited\":\"2014-12-22T17:35:45.135987Z\",\"url\":\"https://swapi.co/api/starships/47/\"},{\"name\":\"Jedi starfighter\",\"model\":\"Delta-7 Aethersprite-class interceptor\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"180000\",\"length\":\"8\",\"max_atmosphering_speed\":\"1150\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"60\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/58/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T17:35:23.906000Z\",\"edited\":\"2014-12-22T17:35:45.147746Z\",\"url\":\"https://swapi.co/api/starships/48/\"}]},\"https://swapi.co/api/starships/27/\":{\"name\":\"Calamari Cruiser\",\"model\":\"MC80 Liberty type Star Cruiser\",\"manufacturer\":\"Mon Calamari shipyards\",\"cost_in_credits\":\"104000000\",\"length\":\"1200\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"5400\",\"passengers\":\"1200\",\"cargo_capacity\":\"unknown\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"60\",\"starship_class\":\"Star Cruiser\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:54:57.804000Z\",\"edited\":\"2014-12-22T17:35:44.957852Z\",\"url\":\"https://swapi.co/api/starships/27/\"},\"https://swapi.co/api/starships/28/\":{\"name\":\"A-wing\",\"model\":\"RZ-1 A-wing Interceptor\",\"manufacturer\":\"Alliance Underground Engineering, Incom Corporation\",\"cost_in_credits\":\"175000\",\"length\":\"9.6\",\"max_atmosphering_speed\":\"1300\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"40\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"120\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/29/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:16:34.542000Z\",\"edited\":\"2014-12-22T17:35:44.978754Z\",\"url\":\"https://swapi.co/api/starships/28/\"},\"https://swapi.co/api/starships/29/\":{\"name\":\"B-wing\",\"model\":\"A/SF-01 B-wing starfighter\",\"manufacturer\":\"Slayn & Korpil\",\"cost_in_credits\":\"220000\",\"length\":\"16.9\",\"max_atmosphering_speed\":\"950\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"45\",\"consumables\":\"1 week\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"91\",\"starship_class\":\"Assault Starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:18:04.763000Z\",\"edited\":\"2014-12-22T17:35:45.011193Z\",\"url\":\"https://swapi.co/api/starships/29/\"},\"https://swapi.co/api/starships/31/\":{\"name\":\"Republic Cruiser\",\"model\":\"Consular-class cruiser\",\"manufacturer\":\"Corellian Engineering Corporation\",\"cost_in_credits\":\"unknown\",\"length\":\"115\",\"max_atmosphering_speed\":\"900\",\"crew\":\"9\",\"passengers\":\"16\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Space cruiser\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:01:31.488000Z\",\"edited\":\"2014-12-22T17:35:45.027308Z\",\"url\":\"https://swapi.co/api/starships/31/\"},\"https://swapi.co/api/starships/39/\":{\"name\":\"Naboo fighter\",\"model\":\"N-1 starfighter\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps\",\"cost_in_credits\":\"200000\",\"length\":\"11\",\"max_atmosphering_speed\":\"1100\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"65\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:39:17.582000Z\",\"edited\":\"2014-12-22T17:35:45.079452Z\",\"url\":\"https://swapi.co/api/starships/39/\"},\"https://swapi.co/api/starships/40/\":{\"name\":\"Naboo Royal Starship\",\"model\":\"J-type 327 Nubian royal starship\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps, Nubia Star Drives\",\"cost_in_credits\":\"unknown\",\"length\":\"76\",\"max_atmosphering_speed\":\"920\",\"crew\":\"8\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"1.8\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[\"https://swapi.co/api/people/39/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:45:03.506000Z\",\"edited\":\"2014-12-22T17:35:45.091925Z\",\"url\":\"https://swapi.co/api/starships/40/\"},\"https://swapi.co/api/starships/41/\":{\"name\":\"Scimitar\",\"model\":\"Star Courier\",\"manufacturer\":\"Republic Sienar Systems\",\"cost_in_credits\":\"55000000\",\"length\":\"26.5\",\"max_atmosphering_speed\":\"1180\",\"crew\":\"1\",\"passengers\":\"6\",\"cargo_capacity\":\"2500000\",\"consumables\":\"30 days\",\"hyperdrive_rating\":\"1.5\",\"MGLT\":\"unknown\",\"starship_class\":\"Space Transport\",\"pilots\":[\"https://swapi.co/api/people/44/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T09:39:56.116000Z\",\"edited\":\"2014-12-22T17:35:45.105522Z\",\"url\":\"https://swapi.co/api/starships/41/\"},\"https://swapi.co/api/starships/43/\":{\"name\":\"J-type diplomatic barge\",\"model\":\"J-type diplomatic barge\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps, Nubia Star Drives\",\"cost_in_credits\":\"2000000\",\"length\":\"39\",\"max_atmosphering_speed\":\"2000\",\"crew\":\"5\",\"passengers\":\"10\",\"cargo_capacity\":\"unknown\",\"consumables\":\"1 year\",\"hyperdrive_rating\":\"0.7\",\"MGLT\":\"unknown\",\"starship_class\":\"Diplomatic barge\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T11:05:51.237000Z\",\"edited\":\"2014-12-22T17:35:45.124386Z\",\"url\":\"https://swapi.co/api/starships/43/\"},\"https://swapi.co/api/starships/47/\":{\"name\":\"AA-9 Coruscant freighter\",\"model\":\"Botajef AA-9 Freighter-Liner\",\"manufacturer\":\"Botajef Shipyards\",\"cost_in_credits\":\"unknown\",\"length\":\"390\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"unknown\",\"passengers\":\"30000\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"unknown\",\"MGLT\":\"unknown\",\"starship_class\":\"freighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:24:23.509000Z\",\"edited\":\"2014-12-22T17:35:45.135987Z\",\"url\":\"https://swapi.co/api/starships/47/\"},\"https://swapi.co/api/starships/48/\":{\"name\":\"Jedi starfighter\",\"model\":\"Delta-7 Aethersprite-class interceptor\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"180000\",\"length\":\"8\",\"max_atmosphering_speed\":\"1150\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"60\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Starfighter\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/58/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T17:35:23.906000Z\",\"edited\":\"2014-12-22T17:35:45.147746Z\",\"url\":\"https://swapi.co/api/starships/48/\"},\"https://swapi.co/api/starships/?page=3\":{\"count\":37,\"next\":\"https://swapi.co/api/starships/?page=4\",\"previous\":\"https://swapi.co/api/starships/?page=2\",\"results\":[{\"name\":\"H-type Nubian yacht\",\"model\":\"H-type Nubian yacht\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps\",\"cost_in_credits\":\"unknown\",\"length\":\"47.9\",\"max_atmosphering_speed\":\"8000\",\"crew\":\"4\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"0.9\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:46:46.847000Z\",\"edited\":\"2014-12-22T17:35:45.158969Z\",\"url\":\"https://swapi.co/api/starships/49/\"},{\"name\":\"Star Destroyer\",\"model\":\"Imperial I-class Star Destroyer\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"150000000\",\"length\":\"1,600\",\"max_atmosphering_speed\":\"975\",\"crew\":\"47060\",\"passengers\":\"0\",\"cargo_capacity\":\"36000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"60\",\"starship_class\":\"Star Destroyer\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:08:19.848000Z\",\"edited\":\"2014-12-22T17:35:44.410941Z\",\"url\":\"https://swapi.co/api/starships/3/\"},{\"name\":\"Trade Federation cruiser\",\"model\":\"Providence-class carrier/destroyer\",\"manufacturer\":\"Rendili StarDrive, Free Dac Volunteers Engineering corps.\",\"cost_in_credits\":\"125000000\",\"length\":\"1088\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"600\",\"passengers\":\"48247\",\"cargo_capacity\":\"50000000\",\"consumables\":\"4 years\",\"hyperdrive_rating\":\"1.5\",\"MGLT\":\"unknown\",\"starship_class\":\"capital ship\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:40:21.902000Z\",\"edited\":\"2014-12-22T17:35:45.195165Z\",\"url\":\"https://swapi.co/api/starships/59/\"},{\"name\":\"Theta-class T-2c shuttle\",\"model\":\"Theta-class T-2c shuttle\",\"manufacturer\":\"Cygnus Spaceworks\",\"cost_in_credits\":\"1000000\",\"length\":\"18.5\",\"max_atmosphering_speed\":\"2000\",\"crew\":\"5\",\"passengers\":\"16\",\"cargo_capacity\":\"50000\",\"consumables\":\"56 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"transport\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:48:40.409000Z\",\"edited\":\"2014-12-22T17:35:45.208584Z\",\"url\":\"https://swapi.co/api/starships/61/\"},{\"name\":\"T-70 X-wing fighter\",\"model\":\"T-70 X-wing fighter\",\"manufacturer\":\"Incom\",\"cost_in_credits\":\"unknown\",\"length\":\"unknown\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"1\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"unknown\",\"MGLT\":\"unknown\",\"starship_class\":\"fighter\",\"pilots\":[\"https://swapi.co/api/people/86/\"],\"films\":[\"https://swapi.co/api/films/7/\"],\"created\":\"2015-04-17T06:58:50.614475Z\",\"edited\":\"2015-04-17T06:58:50.614528Z\",\"url\":\"https://swapi.co/api/starships/77/\"},{\"name\":\"Rebel transport\",\"model\":\"GR-75 medium transport\",\"manufacturer\":\"Gallofree Yards, Inc.\",\"cost_in_credits\":\"unknown\",\"length\":\"90\",\"max_atmosphering_speed\":\"650\",\"crew\":\"6\",\"passengers\":\"90\",\"cargo_capacity\":\"19000000\",\"consumables\":\"6 months\",\"hyperdrive_rating\":\"4.0\",\"MGLT\":\"20\",\"starship_class\":\"Medium transport\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:34:52.264000Z\",\"edited\":\"2014-12-22T17:35:44.680838Z\",\"url\":\"https://swapi.co/api/starships/17/\"},{\"name\":\"Droid control ship\",\"model\":\"Lucrehulk-class Droid Control Ship\",\"manufacturer\":\"Hoersch-Kessel Drive, Inc.\",\"cost_in_credits\":\"unknown\",\"length\":\"3170\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"175\",\"passengers\":\"139000\",\"cargo_capacity\":\"4000000000\",\"consumables\":\"500 days\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Droid control ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-19T17:04:06.323000Z\",\"edited\":\"2014-12-22T17:35:45.042900Z\",\"url\":\"https://swapi.co/api/starships/32/\"},{\"name\":\"Republic Assault ship\",\"model\":\"Acclamator I-class assault ship\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"752\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"700\",\"passengers\":\"16000\",\"cargo_capacity\":\"11250000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"0.6\",\"MGLT\":\"unknown\",\"starship_class\":\"assault ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:08:42.926000Z\",\"edited\":\"2014-12-22T17:35:45.171653Z\",\"url\":\"https://swapi.co/api/starships/52/\"},{\"name\":\"Solar Sailer\",\"model\":\"Punworcca 116-class interstellar sloop\",\"manufacturer\":\"Huppla Pasa Tisc Shipwrights Collective\",\"cost_in_credits\":\"35700\",\"length\":\"15.2\",\"max_atmosphering_speed\":\"1600\",\"crew\":\"3\",\"passengers\":\"11\",\"cargo_capacity\":\"240\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"1.5\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:37:56.969000Z\",\"edited\":\"2014-12-22T17:35:45.183075Z\",\"url\":\"https://swapi.co/api/starships/58/\"},{\"name\":\"Republic attack cruiser\",\"model\":\"Senator-class Star Destroyer\",\"manufacturer\":\"Kuat Drive Yards, Allanteen Six shipyards\",\"cost_in_credits\":\"59000000\",\"length\":\"1137\",\"max_atmosphering_speed\":\"975\",\"crew\":\"7400\",\"passengers\":\"2000\",\"cargo_capacity\":\"20000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"star destroyer\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:52:56.232000Z\",\"edited\":\"2014-12-22T17:35:45.224540Z\",\"url\":\"https://swapi.co/api/starships/63/\"}]},\"https://swapi.co/api/starships/49/\":{\"name\":\"H-type Nubian yacht\",\"model\":\"H-type Nubian yacht\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps\",\"cost_in_credits\":\"unknown\",\"length\":\"47.9\",\"max_atmosphering_speed\":\"8000\",\"crew\":\"4\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"0.9\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:46:46.847000Z\",\"edited\":\"2014-12-22T17:35:45.158969Z\",\"url\":\"https://swapi.co/api/starships/49/\"},\"https://swapi.co/api/starships/3/\":{\"name\":\"Star Destroyer\",\"model\":\"Imperial I-class Star Destroyer\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"150000000\",\"length\":\"1,600\",\"max_atmosphering_speed\":\"975\",\"crew\":\"47060\",\"passengers\":\"0\",\"cargo_capacity\":\"36000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"60\",\"starship_class\":\"Star Destroyer\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:08:19.848000Z\",\"edited\":\"2014-12-22T17:35:44.410941Z\",\"url\":\"https://swapi.co/api/starships/3/\"},\"https://swapi.co/api/starships/59/\":{\"name\":\"Trade Federation cruiser\",\"model\":\"Providence-class carrier/destroyer\",\"manufacturer\":\"Rendili StarDrive, Free Dac Volunteers Engineering corps.\",\"cost_in_credits\":\"125000000\",\"length\":\"1088\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"600\",\"passengers\":\"48247\",\"cargo_capacity\":\"50000000\",\"consumables\":\"4 years\",\"hyperdrive_rating\":\"1.5\",\"MGLT\":\"unknown\",\"starship_class\":\"capital ship\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:40:21.902000Z\",\"edited\":\"2014-12-22T17:35:45.195165Z\",\"url\":\"https://swapi.co/api/starships/59/\"},\"https://swapi.co/api/starships/61/\":{\"name\":\"Theta-class T-2c shuttle\",\"model\":\"Theta-class T-2c shuttle\",\"manufacturer\":\"Cygnus Spaceworks\",\"cost_in_credits\":\"1000000\",\"length\":\"18.5\",\"max_atmosphering_speed\":\"2000\",\"crew\":\"5\",\"passengers\":\"16\",\"cargo_capacity\":\"50000\",\"consumables\":\"56 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"transport\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:48:40.409000Z\",\"edited\":\"2014-12-22T17:35:45.208584Z\",\"url\":\"https://swapi.co/api/starships/61/\"},\"https://swapi.co/api/starships/77/\":{\"name\":\"T-70 X-wing fighter\",\"model\":\"T-70 X-wing fighter\",\"manufacturer\":\"Incom\",\"cost_in_credits\":\"unknown\",\"length\":\"unknown\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"1\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"unknown\",\"MGLT\":\"unknown\",\"starship_class\":\"fighter\",\"pilots\":[\"https://swapi.co/api/people/86/\"],\"films\":[\"https://swapi.co/api/films/7/\"],\"created\":\"2015-04-17T06:58:50.614475Z\",\"edited\":\"2015-04-17T06:58:50.614528Z\",\"url\":\"https://swapi.co/api/starships/77/\"},\"https://swapi.co/api/starships/17/\":{\"name\":\"Rebel transport\",\"model\":\"GR-75 medium transport\",\"manufacturer\":\"Gallofree Yards, Inc.\",\"cost_in_credits\":\"unknown\",\"length\":\"90\",\"max_atmosphering_speed\":\"650\",\"crew\":\"6\",\"passengers\":\"90\",\"cargo_capacity\":\"19000000\",\"consumables\":\"6 months\",\"hyperdrive_rating\":\"4.0\",\"MGLT\":\"20\",\"starship_class\":\"Medium transport\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:34:52.264000Z\",\"edited\":\"2014-12-22T17:35:44.680838Z\",\"url\":\"https://swapi.co/api/starships/17/\"},\"https://swapi.co/api/starships/32/\":{\"name\":\"Droid control ship\",\"model\":\"Lucrehulk-class Droid Control Ship\",\"manufacturer\":\"Hoersch-Kessel Drive, Inc.\",\"cost_in_credits\":\"unknown\",\"length\":\"3170\",\"max_atmosphering_speed\":\"n/a\",\"crew\":\"175\",\"passengers\":\"139000\",\"cargo_capacity\":\"4000000000\",\"consumables\":\"500 days\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"unknown\",\"starship_class\":\"Droid control ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-19T17:04:06.323000Z\",\"edited\":\"2014-12-22T17:35:45.042900Z\",\"url\":\"https://swapi.co/api/starships/32/\"},\"https://swapi.co/api/starships/52/\":{\"name\":\"Republic Assault ship\",\"model\":\"Acclamator I-class assault ship\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"752\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"700\",\"passengers\":\"16000\",\"cargo_capacity\":\"11250000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"0.6\",\"MGLT\":\"unknown\",\"starship_class\":\"assault ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:08:42.926000Z\",\"edited\":\"2014-12-22T17:35:45.171653Z\",\"url\":\"https://swapi.co/api/starships/52/\"},\"https://swapi.co/api/starships/58/\":{\"name\":\"Solar Sailer\",\"model\":\"Punworcca 116-class interstellar sloop\",\"manufacturer\":\"Huppla Pasa Tisc Shipwrights Collective\",\"cost_in_credits\":\"35700\",\"length\":\"15.2\",\"max_atmosphering_speed\":\"1600\",\"crew\":\"3\",\"passengers\":\"11\",\"cargo_capacity\":\"240\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"1.5\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:37:56.969000Z\",\"edited\":\"2014-12-22T17:35:45.183075Z\",\"url\":\"https://swapi.co/api/starships/58/\"},\"https://swapi.co/api/starships/63/\":{\"name\":\"Republic attack cruiser\",\"model\":\"Senator-class Star Destroyer\",\"manufacturer\":\"Kuat Drive Yards, Allanteen Six shipyards\",\"cost_in_credits\":\"59000000\",\"length\":\"1137\",\"max_atmosphering_speed\":\"975\",\"crew\":\"7400\",\"passengers\":\"2000\",\"cargo_capacity\":\"20000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"star destroyer\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:52:56.232000Z\",\"edited\":\"2014-12-22T17:35:45.224540Z\",\"url\":\"https://swapi.co/api/starships/63/\"},\"https://swapi.co/api/starships/?page=4\":{\"count\":37,\"next\":null,\"previous\":\"https://swapi.co/api/starships/?page=3\",\"results\":[{\"name\":\"Naboo star skiff\",\"model\":\"J-type star skiff\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated\",\"cost_in_credits\":\"unknown\",\"length\":\"29.2\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"3\",\"passengers\":\"3\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"0.5\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:55:15.396000Z\",\"edited\":\"2014-12-22T17:35:45.258859Z\",\"url\":\"https://swapi.co/api/starships/64/\"},{\"name\":\"Jedi Interceptor\",\"model\":\"Eta-2 Actis-class light interceptor\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"320000\",\"length\":\"5.47\",\"max_atmosphering_speed\":\"1500\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"60\",\"consumables\":\"2 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"starfighter\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:56:57.468000Z\",\"edited\":\"2014-12-22T17:35:45.272349Z\",\"url\":\"https://swapi.co/api/starships/65/\"},{\"name\":\"arc-170\",\"model\":\"Aggressive Reconnaissance-170 starfighte\",\"manufacturer\":\"Incom Corporation, Subpro Corporation\",\"cost_in_credits\":\"155000\",\"length\":\"14.5\",\"max_atmosphering_speed\":\"1000\",\"crew\":\"3\",\"passengers\":\"0\",\"cargo_capacity\":\"110\",\"consumables\":\"5 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"100\",\"starship_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:03:48.603000Z\",\"edited\":\"2014-12-22T17:35:45.287214Z\",\"url\":\"https://swapi.co/api/starships/66/\"},{\"name\":\"Belbullab-22 starfighter\",\"model\":\"Belbullab-22 starfighter\",\"manufacturer\":\"Feethan Ottraw Scalable Assemblies\",\"cost_in_credits\":\"168000\",\"length\":\"6.71\",\"max_atmosphering_speed\":\"1100\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"140\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"6\",\"MGLT\":\"unknown\",\"starship_class\":\"starfighter\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/79/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:38:05.031000Z\",\"edited\":\"2014-12-22T17:35:45.381900Z\",\"url\":\"https://swapi.co/api/starships/74/\"},{\"name\":\"V-wing\",\"model\":\"Alpha-3 Nimbus-class V-wing starfighter\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"102500\",\"length\":\"7.9\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"60\",\"consumables\":\"15 hours\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:43:04.349000Z\",\"edited\":\"2014-12-22T17:35:45.396711Z\",\"url\":\"https://swapi.co/api/starships/75/\"},{\"name\":\"CR90 corvette\",\"model\":\"CR90 corvette\",\"manufacturer\":\"Corellian Engineering Corporation\",\"cost_in_credits\":\"3500000\",\"length\":\"150\",\"max_atmosphering_speed\":\"950\",\"crew\":\"165\",\"passengers\":\"600\",\"cargo_capacity\":\"3000000\",\"consumables\":\"1 year\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"60\",\"starship_class\":\"corvette\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T14:20:33.369000Z\",\"edited\":\"2014-12-22T17:35:45.408368Z\",\"url\":\"https://swapi.co/api/starships/2/\"},{\"name\":\"Banking clan frigate\",\"model\":\"Munificent-class star frigate\",\"manufacturer\":\"Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries\",\"cost_in_credits\":\"57000000\",\"length\":\"825\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"200\",\"passengers\":\"unknown\",\"cargo_capacity\":\"40000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"cruiser\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:07:11.538000Z\",\"edited\":\"2017-04-19T10:53:32.700283Z\",\"url\":\"https://swapi.co/api/starships/68/\"}]},\"https://swapi.co/api/starships/64/\":{\"name\":\"Naboo star skiff\",\"model\":\"J-type star skiff\",\"manufacturer\":\"Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated\",\"cost_in_credits\":\"unknown\",\"length\":\"29.2\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"3\",\"passengers\":\"3\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"hyperdrive_rating\":\"0.5\",\"MGLT\":\"unknown\",\"starship_class\":\"yacht\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:55:15.396000Z\",\"edited\":\"2014-12-22T17:35:45.258859Z\",\"url\":\"https://swapi.co/api/starships/64/\"},\"https://swapi.co/api/starships/65/\":{\"name\":\"Jedi Interceptor\",\"model\":\"Eta-2 Actis-class light interceptor\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"320000\",\"length\":\"5.47\",\"max_atmosphering_speed\":\"1500\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"60\",\"consumables\":\"2 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"starfighter\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:56:57.468000Z\",\"edited\":\"2014-12-22T17:35:45.272349Z\",\"url\":\"https://swapi.co/api/starships/65/\"},\"https://swapi.co/api/starships/66/\":{\"name\":\"arc-170\",\"model\":\"Aggressive Reconnaissance-170 starfighte\",\"manufacturer\":\"Incom Corporation, Subpro Corporation\",\"cost_in_credits\":\"155000\",\"length\":\"14.5\",\"max_atmosphering_speed\":\"1000\",\"crew\":\"3\",\"passengers\":\"0\",\"cargo_capacity\":\"110\",\"consumables\":\"5 days\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"100\",\"starship_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:03:48.603000Z\",\"edited\":\"2014-12-22T17:35:45.287214Z\",\"url\":\"https://swapi.co/api/starships/66/\"},\"https://swapi.co/api/starships/74/\":{\"name\":\"Belbullab-22 starfighter\",\"model\":\"Belbullab-22 starfighter\",\"manufacturer\":\"Feethan Ottraw Scalable Assemblies\",\"cost_in_credits\":\"168000\",\"length\":\"6.71\",\"max_atmosphering_speed\":\"1100\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"140\",\"consumables\":\"7 days\",\"hyperdrive_rating\":\"6\",\"MGLT\":\"unknown\",\"starship_class\":\"starfighter\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/79/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:38:05.031000Z\",\"edited\":\"2014-12-22T17:35:45.381900Z\",\"url\":\"https://swapi.co/api/starships/74/\"},\"https://swapi.co/api/starships/75/\":{\"name\":\"V-wing\",\"model\":\"Alpha-3 Nimbus-class V-wing starfighter\",\"manufacturer\":\"Kuat Systems Engineering\",\"cost_in_credits\":\"102500\",\"length\":\"7.9\",\"max_atmosphering_speed\":\"1050\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"60\",\"consumables\":\"15 hours\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:43:04.349000Z\",\"edited\":\"2014-12-22T17:35:45.396711Z\",\"url\":\"https://swapi.co/api/starships/75/\"},\"https://swapi.co/api/starships/2/\":{\"name\":\"CR90 corvette\",\"model\":\"CR90 corvette\",\"manufacturer\":\"Corellian Engineering Corporation\",\"cost_in_credits\":\"3500000\",\"length\":\"150\",\"max_atmosphering_speed\":\"950\",\"crew\":\"165\",\"passengers\":\"600\",\"cargo_capacity\":\"3000000\",\"consumables\":\"1 year\",\"hyperdrive_rating\":\"2.0\",\"MGLT\":\"60\",\"starship_class\":\"corvette\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T14:20:33.369000Z\",\"edited\":\"2014-12-22T17:35:45.408368Z\",\"url\":\"https://swapi.co/api/starships/2/\"},\"https://swapi.co/api/starships/68/\":{\"name\":\"Banking clan frigate\",\"model\":\"Munificent-class star frigate\",\"manufacturer\":\"Hoersch-Kessel Drive, Inc, Gwori Revolutionary Industries\",\"cost_in_credits\":\"57000000\",\"length\":\"825\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"200\",\"passengers\":\"unknown\",\"cargo_capacity\":\"40000000\",\"consumables\":\"2 years\",\"hyperdrive_rating\":\"1.0\",\"MGLT\":\"unknown\",\"starship_class\":\"cruiser\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:07:11.538000Z\",\"edited\":\"2017-04-19T10:53:32.700283Z\",\"url\":\"https://swapi.co/api/starships/68/\"},\"https://swapi.co/api/vehicles/\":{\"count\":39,\"next\":\"https://swapi.co/api/vehicles/?page=2\",\"previous\":null,\"results\":[{\"name\":\"Sand Crawler\",\"model\":\"Digger Crawler\",\"manufacturer\":\"Corellia Mining Corporation\",\"cost_in_credits\":\"150000\",\"length\":\"36.8\",\"max_atmosphering_speed\":\"30\",\"crew\":\"46\",\"passengers\":\"30\",\"cargo_capacity\":\"50000\",\"consumables\":\"2 months\",\"vehicle_class\":\"wheeled\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:36:25.724000Z\",\"edited\":\"2014-12-22T18:21:15.523587Z\",\"url\":\"https://swapi.co/api/vehicles/4/\"},{\"name\":\"T-16 skyhopper\",\"model\":\"T-16 skyhopper\",\"manufacturer\":\"Incom Corporation\",\"cost_in_credits\":\"14500\",\"length\":\"10.4\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"50\",\"consumables\":\"0\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:01:52.434000Z\",\"edited\":\"2014-12-22T18:21:15.552614Z\",\"url\":\"https://swapi.co/api/vehicles/6/\"},{\"name\":\"X-34 landspeeder\",\"model\":\"X-34 landspeeder\",\"manufacturer\":\"SoroSuub Corporation\",\"cost_in_credits\":\"10550\",\"length\":\"3.4\",\"max_atmosphering_speed\":\"250\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"5\",\"consumables\":\"unknown\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:13:52.586000Z\",\"edited\":\"2014-12-22T18:21:15.583700Z\",\"url\":\"https://swapi.co/api/vehicles/7/\"},{\"name\":\"TIE/LN starfighter\",\"model\":\"Twin Ion Engine/Ln Starfighter\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"6.4\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"65\",\"consumables\":\"2 days\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:33:52.860000Z\",\"edited\":\"2014-12-22T18:21:15.606149Z\",\"url\":\"https://swapi.co/api/vehicles/8/\"},{\"name\":\"Snowspeeder\",\"model\":\"t-47 airspeeder\",\"manufacturer\":\"Incom corporation\",\"cost_in_credits\":\"unknown\",\"length\":\"4.5\",\"max_atmosphering_speed\":\"650\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"10\",\"consumables\":\"none\",\"vehicle_class\":\"airspeeder\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/18/\"],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T12:22:12Z\",\"edited\":\"2014-12-22T18:21:15.623033Z\",\"url\":\"https://swapi.co/api/vehicles/14/\"},{\"name\":\"TIE bomber\",\"model\":\"TIE/sa bomber\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"7.8\",\"max_atmosphering_speed\":\"850\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"none\",\"consumables\":\"2 days\",\"vehicle_class\":\"space/planetary bomber\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:33:15.838000Z\",\"edited\":\"2014-12-22T18:21:15.667730Z\",\"url\":\"https://swapi.co/api/vehicles/16/\"},{\"name\":\"AT-AT\",\"model\":\"All Terrain Armored Transport\",\"manufacturer\":\"Kuat Drive Yards, Imperial Department of Military Research\",\"cost_in_credits\":\"unknown\",\"length\":\"20\",\"max_atmosphering_speed\":\"60\",\"crew\":\"5\",\"passengers\":\"40\",\"cargo_capacity\":\"1000\",\"consumables\":\"unknown\",\"vehicle_class\":\"assault walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:38:25.937000Z\",\"edited\":\"2014-12-22T18:21:15.714673Z\",\"url\":\"https://swapi.co/api/vehicles/18/\"},{\"name\":\"AT-ST\",\"model\":\"All Terrain Scout Transport\",\"manufacturer\":\"Kuat Drive Yards, Imperial Department of Military Research\",\"cost_in_credits\":\"unknown\",\"length\":\"2\",\"max_atmosphering_speed\":\"90\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"200\",\"consumables\":\"none\",\"vehicle_class\":\"walker\",\"pilots\":[\"https://swapi.co/api/people/13/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:46:42.384000Z\",\"edited\":\"2014-12-22T18:21:15.761584Z\",\"url\":\"https://swapi.co/api/vehicles/19/\"},{\"name\":\"Storm IV Twin-Pod cloud car\",\"model\":\"Storm IV Twin-Pod\",\"manufacturer\":\"Bespin Motors\",\"cost_in_credits\":\"75000\",\"length\":\"7\",\"max_atmosphering_speed\":\"1500\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"10\",\"consumables\":\"1 day\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T12:58:50.530000Z\",\"edited\":\"2014-12-22T18:21:15.783232Z\",\"url\":\"https://swapi.co/api/vehicles/20/\"},{\"name\":\"Sail barge\",\"model\":\"Modified Luxury Sail Barge\",\"manufacturer\":\"Ubrikkian Industries Custom Vehicle Division\",\"cost_in_credits\":\"285000\",\"length\":\"30\",\"max_atmosphering_speed\":\"100\",\"crew\":\"26\",\"passengers\":\"500\",\"cargo_capacity\":\"2000000\",\"consumables\":\"Live food tanks\",\"vehicle_class\":\"sail barge\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:44:14.217000Z\",\"edited\":\"2014-12-22T18:21:15.807906Z\",\"url\":\"https://swapi.co/api/vehicles/24/\"}]},\"https://swapi.co/api/vehicles/4/\":{\"name\":\"Sand Crawler\",\"model\":\"Digger Crawler\",\"manufacturer\":\"Corellia Mining Corporation\",\"cost_in_credits\":\"150000\",\"length\":\"36.8\",\"max_atmosphering_speed\":\"30\",\"crew\":\"46\",\"passengers\":\"30\",\"cargo_capacity\":\"50000\",\"consumables\":\"2 months\",\"vehicle_class\":\"wheeled\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:36:25.724000Z\",\"edited\":\"2014-12-22T18:21:15.523587Z\",\"url\":\"https://swapi.co/api/vehicles/4/\"},\"https://swapi.co/api/vehicles/6/\":{\"name\":\"T-16 skyhopper\",\"model\":\"T-16 skyhopper\",\"manufacturer\":\"Incom Corporation\",\"cost_in_credits\":\"14500\",\"length\":\"10.4\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"50\",\"consumables\":\"0\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:01:52.434000Z\",\"edited\":\"2014-12-22T18:21:15.552614Z\",\"url\":\"https://swapi.co/api/vehicles/6/\"},\"https://swapi.co/api/vehicles/7/\":{\"name\":\"X-34 landspeeder\",\"model\":\"X-34 landspeeder\",\"manufacturer\":\"SoroSuub Corporation\",\"cost_in_credits\":\"10550\",\"length\":\"3.4\",\"max_atmosphering_speed\":\"250\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"5\",\"consumables\":\"unknown\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:13:52.586000Z\",\"edited\":\"2014-12-22T18:21:15.583700Z\",\"url\":\"https://swapi.co/api/vehicles/7/\"},\"https://swapi.co/api/vehicles/8/\":{\"name\":\"TIE/LN starfighter\",\"model\":\"Twin Ion Engine/Ln Starfighter\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"6.4\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"65\",\"consumables\":\"2 days\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:33:52.860000Z\",\"edited\":\"2014-12-22T18:21:15.606149Z\",\"url\":\"https://swapi.co/api/vehicles/8/\"},\"https://swapi.co/api/vehicles/14/\":{\"name\":\"Snowspeeder\",\"model\":\"t-47 airspeeder\",\"manufacturer\":\"Incom corporation\",\"cost_in_credits\":\"unknown\",\"length\":\"4.5\",\"max_atmosphering_speed\":\"650\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"10\",\"consumables\":\"none\",\"vehicle_class\":\"airspeeder\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/18/\"],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T12:22:12Z\",\"edited\":\"2014-12-22T18:21:15.623033Z\",\"url\":\"https://swapi.co/api/vehicles/14/\"},\"https://swapi.co/api/vehicles/16/\":{\"name\":\"TIE bomber\",\"model\":\"TIE/sa bomber\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"7.8\",\"max_atmosphering_speed\":\"850\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"none\",\"consumables\":\"2 days\",\"vehicle_class\":\"space/planetary bomber\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:33:15.838000Z\",\"edited\":\"2014-12-22T18:21:15.667730Z\",\"url\":\"https://swapi.co/api/vehicles/16/\"},\"https://swapi.co/api/vehicles/18/\":{\"name\":\"AT-AT\",\"model\":\"All Terrain Armored Transport\",\"manufacturer\":\"Kuat Drive Yards, Imperial Department of Military Research\",\"cost_in_credits\":\"unknown\",\"length\":\"20\",\"max_atmosphering_speed\":\"60\",\"crew\":\"5\",\"passengers\":\"40\",\"cargo_capacity\":\"1000\",\"consumables\":\"unknown\",\"vehicle_class\":\"assault walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:38:25.937000Z\",\"edited\":\"2014-12-22T18:21:15.714673Z\",\"url\":\"https://swapi.co/api/vehicles/18/\"},\"https://swapi.co/api/vehicles/19/\":{\"name\":\"AT-ST\",\"model\":\"All Terrain Scout Transport\",\"manufacturer\":\"Kuat Drive Yards, Imperial Department of Military Research\",\"cost_in_credits\":\"unknown\",\"length\":\"2\",\"max_atmosphering_speed\":\"90\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"200\",\"consumables\":\"none\",\"vehicle_class\":\"walker\",\"pilots\":[\"https://swapi.co/api/people/13/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:46:42.384000Z\",\"edited\":\"2014-12-22T18:21:15.761584Z\",\"url\":\"https://swapi.co/api/vehicles/19/\"},\"https://swapi.co/api/vehicles/20/\":{\"name\":\"Storm IV Twin-Pod cloud car\",\"model\":\"Storm IV Twin-Pod\",\"manufacturer\":\"Bespin Motors\",\"cost_in_credits\":\"75000\",\"length\":\"7\",\"max_atmosphering_speed\":\"1500\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"10\",\"consumables\":\"1 day\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T12:58:50.530000Z\",\"edited\":\"2014-12-22T18:21:15.783232Z\",\"url\":\"https://swapi.co/api/vehicles/20/\"},\"https://swapi.co/api/vehicles/24/\":{\"name\":\"Sail barge\",\"model\":\"Modified Luxury Sail Barge\",\"manufacturer\":\"Ubrikkian Industries Custom Vehicle Division\",\"cost_in_credits\":\"285000\",\"length\":\"30\",\"max_atmosphering_speed\":\"100\",\"crew\":\"26\",\"passengers\":\"500\",\"cargo_capacity\":\"2000000\",\"consumables\":\"Live food tanks\",\"vehicle_class\":\"sail barge\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:44:14.217000Z\",\"edited\":\"2014-12-22T18:21:15.807906Z\",\"url\":\"https://swapi.co/api/vehicles/24/\"},\"https://swapi.co/api/vehicles/?page=2\":{\"count\":39,\"next\":\"https://swapi.co/api/vehicles/?page=3\",\"previous\":\"https://swapi.co/api/vehicles/?page=1\",\"results\":[{\"name\":\"Bantha-II cargo skiff\",\"model\":\"Bantha-II\",\"manufacturer\":\"Ubrikkian Industries\",\"cost_in_credits\":\"8000\",\"length\":\"9.5\",\"max_atmosphering_speed\":\"250\",\"crew\":\"5\",\"passengers\":\"16\",\"cargo_capacity\":\"135000\",\"consumables\":\"1 day\",\"vehicle_class\":\"repulsorcraft cargo skiff\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:48:03.208000Z\",\"edited\":\"2014-12-22T18:21:15.845988Z\",\"url\":\"https://swapi.co/api/vehicles/25/\"},{\"name\":\"TIE/IN interceptor\",\"model\":\"Twin Ion Engine Interceptor\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"9.6\",\"max_atmosphering_speed\":\"1250\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"75\",\"consumables\":\"2 days\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:50:28.225000Z\",\"edited\":\"2014-12-22T18:21:15.882388Z\",\"url\":\"https://swapi.co/api/vehicles/26/\"},{\"name\":\"Imperial Speeder Bike\",\"model\":\"74-Z speeder bike\",\"manufacturer\":\"Aratech Repulsor Company\",\"cost_in_credits\":\"8000\",\"length\":\"3\",\"max_atmosphering_speed\":\"360\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"4\",\"consumables\":\"1 day\",\"vehicle_class\":\"speeder\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/5/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:20:04.625000Z\",\"edited\":\"2014-12-22T18:21:15.920537Z\",\"url\":\"https://swapi.co/api/vehicles/30/\"},{\"name\":\"Vulture Droid\",\"model\":\"Vulture-class droid starfighter\",\"manufacturer\":\"Haor Chall Engineering, Baktoid Armor Workshop\",\"cost_in_credits\":\"unknown\",\"length\":\"3.5\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"0\",\"passengers\":\"0\",\"cargo_capacity\":\"0\",\"consumables\":\"none\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-19T17:09:53.584000Z\",\"edited\":\"2014-12-22T18:21:15.953870Z\",\"url\":\"https://swapi.co/api/vehicles/33/\"},{\"name\":\"Multi-Troop Transport\",\"model\":\"Multi-Troop Transport\",\"manufacturer\":\"Baktoid Armor Workshop\",\"cost_in_credits\":\"138000\",\"length\":\"31\",\"max_atmosphering_speed\":\"35\",\"crew\":\"4\",\"passengers\":\"112\",\"cargo_capacity\":\"12000\",\"consumables\":\"unknown\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:12:04.400000Z\",\"edited\":\"2014-12-22T18:21:15.975171Z\",\"url\":\"https://swapi.co/api/vehicles/34/\"},{\"name\":\"Armored Assault Tank\",\"model\":\"Armoured Assault Tank\",\"manufacturer\":\"Baktoid Armor Workshop\",\"cost_in_credits\":\"unknown\",\"length\":\"9.75\",\"max_atmosphering_speed\":\"55\",\"crew\":\"4\",\"passengers\":\"6\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:13:29.799000Z\",\"edited\":\"2014-12-22T18:21:15.984817Z\",\"url\":\"https://swapi.co/api/vehicles/35/\"},{\"name\":\"Single Trooper Aerial Platform\",\"model\":\"Single Trooper Aerial Platform\",\"manufacturer\":\"Baktoid Armor Workshop\",\"cost_in_credits\":\"2500\",\"length\":\"2\",\"max_atmosphering_speed\":\"400\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"none\",\"consumables\":\"none\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:15:09.511000Z\",\"edited\":\"2014-12-22T18:21:16.008594Z\",\"url\":\"https://swapi.co/api/vehicles/36/\"},{\"name\":\"C-9979 landing craft\",\"model\":\"C-9979 landing craft\",\"manufacturer\":\"Haor Chall Engineering\",\"cost_in_credits\":\"200000\",\"length\":\"210\",\"max_atmosphering_speed\":\"587\",\"crew\":\"140\",\"passengers\":\"284\",\"cargo_capacity\":\"1800000\",\"consumables\":\"1 day\",\"vehicle_class\":\"landing craft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:20:36.373000Z\",\"edited\":\"2014-12-22T18:21:16.033738Z\",\"url\":\"https://swapi.co/api/vehicles/37/\"},{\"name\":\"Tribubble bongo\",\"model\":\"Tribubble bongo\",\"manufacturer\":\"Otoh Gunga Bongameken Cooperative\",\"cost_in_credits\":\"unknown\",\"length\":\"15\",\"max_atmosphering_speed\":\"85\",\"crew\":\"1\",\"passengers\":\"2\",\"cargo_capacity\":\"1600\",\"consumables\":\"unknown\",\"vehicle_class\":\"submarine\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/32/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:37:37.924000Z\",\"edited\":\"2014-12-22T18:21:16.072083Z\",\"url\":\"https://swapi.co/api/vehicles/38/\"},{\"name\":\"Sith speeder\",\"model\":\"FC-20 speeder bike\",\"manufacturer\":\"Razalon\",\"cost_in_credits\":\"4000\",\"length\":\"1.5\",\"max_atmosphering_speed\":\"180\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"2\",\"consumables\":\"unknown\",\"vehicle_class\":\"speeder\",\"pilots\":[\"https://swapi.co/api/people/44/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:09:56.095000Z\",\"edited\":\"2014-12-22T18:21:16.095041Z\",\"url\":\"https://swapi.co/api/vehicles/42/\"}]},\"https://swapi.co/api/vehicles/25/\":{\"name\":\"Bantha-II cargo skiff\",\"model\":\"Bantha-II\",\"manufacturer\":\"Ubrikkian Industries\",\"cost_in_credits\":\"8000\",\"length\":\"9.5\",\"max_atmosphering_speed\":\"250\",\"crew\":\"5\",\"passengers\":\"16\",\"cargo_capacity\":\"135000\",\"consumables\":\"1 day\",\"vehicle_class\":\"repulsorcraft cargo skiff\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:48:03.208000Z\",\"edited\":\"2014-12-22T18:21:15.845988Z\",\"url\":\"https://swapi.co/api/vehicles/25/\"},\"https://swapi.co/api/vehicles/26/\":{\"name\":\"TIE/IN interceptor\",\"model\":\"Twin Ion Engine Interceptor\",\"manufacturer\":\"Sienar Fleet Systems\",\"cost_in_credits\":\"unknown\",\"length\":\"9.6\",\"max_atmosphering_speed\":\"1250\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"75\",\"consumables\":\"2 days\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T10:50:28.225000Z\",\"edited\":\"2014-12-22T18:21:15.882388Z\",\"url\":\"https://swapi.co/api/vehicles/26/\"},\"https://swapi.co/api/vehicles/30/\":{\"name\":\"Imperial Speeder Bike\",\"model\":\"74-Z speeder bike\",\"manufacturer\":\"Aratech Repulsor Company\",\"cost_in_credits\":\"8000\",\"length\":\"3\",\"max_atmosphering_speed\":\"360\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"4\",\"consumables\":\"1 day\",\"vehicle_class\":\"speeder\",\"pilots\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/5/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:20:04.625000Z\",\"edited\":\"2014-12-22T18:21:15.920537Z\",\"url\":\"https://swapi.co/api/vehicles/30/\"},\"https://swapi.co/api/vehicles/33/\":{\"name\":\"Vulture Droid\",\"model\":\"Vulture-class droid starfighter\",\"manufacturer\":\"Haor Chall Engineering, Baktoid Armor Workshop\",\"cost_in_credits\":\"unknown\",\"length\":\"3.5\",\"max_atmosphering_speed\":\"1200\",\"crew\":\"0\",\"passengers\":\"0\",\"cargo_capacity\":\"0\",\"consumables\":\"none\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-19T17:09:53.584000Z\",\"edited\":\"2014-12-22T18:21:15.953870Z\",\"url\":\"https://swapi.co/api/vehicles/33/\"},\"https://swapi.co/api/vehicles/34/\":{\"name\":\"Multi-Troop Transport\",\"model\":\"Multi-Troop Transport\",\"manufacturer\":\"Baktoid Armor Workshop\",\"cost_in_credits\":\"138000\",\"length\":\"31\",\"max_atmosphering_speed\":\"35\",\"crew\":\"4\",\"passengers\":\"112\",\"cargo_capacity\":\"12000\",\"consumables\":\"unknown\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:12:04.400000Z\",\"edited\":\"2014-12-22T18:21:15.975171Z\",\"url\":\"https://swapi.co/api/vehicles/34/\"},\"https://swapi.co/api/vehicles/35/\":{\"name\":\"Armored Assault Tank\",\"model\":\"Armoured Assault Tank\",\"manufacturer\":\"Baktoid Armor Workshop\",\"cost_in_credits\":\"unknown\",\"length\":\"9.75\",\"max_atmosphering_speed\":\"55\",\"crew\":\"4\",\"passengers\":\"6\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:13:29.799000Z\",\"edited\":\"2014-12-22T18:21:15.984817Z\",\"url\":\"https://swapi.co/api/vehicles/35/\"},\"https://swapi.co/api/vehicles/36/\":{\"name\":\"Single Trooper Aerial Platform\",\"model\":\"Single Trooper Aerial Platform\",\"manufacturer\":\"Baktoid Armor Workshop\",\"cost_in_credits\":\"2500\",\"length\":\"2\",\"max_atmosphering_speed\":\"400\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"none\",\"consumables\":\"none\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:15:09.511000Z\",\"edited\":\"2014-12-22T18:21:16.008594Z\",\"url\":\"https://swapi.co/api/vehicles/36/\"},\"https://swapi.co/api/vehicles/37/\":{\"name\":\"C-9979 landing craft\",\"model\":\"C-9979 landing craft\",\"manufacturer\":\"Haor Chall Engineering\",\"cost_in_credits\":\"200000\",\"length\":\"210\",\"max_atmosphering_speed\":\"587\",\"crew\":\"140\",\"passengers\":\"284\",\"cargo_capacity\":\"1800000\",\"consumables\":\"1 day\",\"vehicle_class\":\"landing craft\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:20:36.373000Z\",\"edited\":\"2014-12-22T18:21:16.033738Z\",\"url\":\"https://swapi.co/api/vehicles/37/\"},\"https://swapi.co/api/vehicles/38/\":{\"name\":\"Tribubble bongo\",\"model\":\"Tribubble bongo\",\"manufacturer\":\"Otoh Gunga Bongameken Cooperative\",\"cost_in_credits\":\"unknown\",\"length\":\"15\",\"max_atmosphering_speed\":\"85\",\"crew\":\"1\",\"passengers\":\"2\",\"cargo_capacity\":\"1600\",\"consumables\":\"unknown\",\"vehicle_class\":\"submarine\",\"pilots\":[\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/32/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:37:37.924000Z\",\"edited\":\"2014-12-22T18:21:16.072083Z\",\"url\":\"https://swapi.co/api/vehicles/38/\"},\"https://swapi.co/api/vehicles/42/\":{\"name\":\"Sith speeder\",\"model\":\"FC-20 speeder bike\",\"manufacturer\":\"Razalon\",\"cost_in_credits\":\"4000\",\"length\":\"1.5\",\"max_atmosphering_speed\":\"180\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"2\",\"consumables\":\"unknown\",\"vehicle_class\":\"speeder\",\"pilots\":[\"https://swapi.co/api/people/44/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:09:56.095000Z\",\"edited\":\"2014-12-22T18:21:16.095041Z\",\"url\":\"https://swapi.co/api/vehicles/42/\"},\"https://swapi.co/api/vehicles/?page=3\":{\"count\":39,\"next\":\"https://swapi.co/api/vehicles/?page=4\",\"previous\":\"https://swapi.co/api/vehicles/?page=2\",\"results\":[{\"name\":\"Zephyr-G swoop bike\",\"model\":\"Zephyr-G swoop bike\",\"manufacturer\":\"Mobquet Swoops and Speeders\",\"cost_in_credits\":\"5750\",\"length\":\"3.68\",\"max_atmosphering_speed\":\"350\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"200\",\"consumables\":\"none\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T16:24:16.026000Z\",\"edited\":\"2014-12-22T18:21:16.117652Z\",\"url\":\"https://swapi.co/api/vehicles/44/\"},{\"name\":\"Koro-2 Exodrive airspeeder\",\"model\":\"Koro-2 Exodrive airspeeder\",\"manufacturer\":\"Desler Gizh Outworld Mobility Corporation\",\"cost_in_credits\":\"unknown\",\"length\":\"6.6\",\"max_atmosphering_speed\":\"800\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"80\",\"consumables\":\"unknown\",\"vehicle_class\":\"airspeeder\",\"pilots\":[\"https://swapi.co/api/people/70/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:17:33.526000Z\",\"edited\":\"2014-12-22T18:21:16.140018Z\",\"url\":\"https://swapi.co/api/vehicles/45/\"},{\"name\":\"XJ-6 airspeeder\",\"model\":\"XJ-6 airspeeder\",\"manufacturer\":\"Narglatch AirTech prefabricated kit\",\"cost_in_credits\":\"unknown\",\"length\":\"6.23\",\"max_atmosphering_speed\":\"720\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"airspeeder\",\"pilots\":[\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:19:19.991000Z\",\"edited\":\"2014-12-22T18:21:16.150194Z\",\"url\":\"https://swapi.co/api/vehicles/46/\"},{\"name\":\"LAAT/i\",\"model\":\"Low Altitude Assault Transport/infrantry\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"17.4\",\"max_atmosphering_speed\":\"620\",\"crew\":\"6\",\"passengers\":\"30\",\"cargo_capacity\":\"170\",\"consumables\":\"unknown\",\"vehicle_class\":\"gunship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:01:21.014000Z\",\"edited\":\"2014-12-22T18:21:16.181363Z\",\"url\":\"https://swapi.co/api/vehicles/50/\"},{\"name\":\"LAAT/c\",\"model\":\"Low Altitude Assault Transport/carrier\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"28.82\",\"max_atmosphering_speed\":\"620\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"40000\",\"consumables\":\"unknown\",\"vehicle_class\":\"gunship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:02:46.802000Z\",\"edited\":\"2014-12-22T18:21:16.229733Z\",\"url\":\"https://swapi.co/api/vehicles/51/\"},{\"name\":\"Tsmeu-6 personal wheel bike\",\"model\":\"Tsmeu-6 personal wheel bike\",\"manufacturer\":\"Z-Gomot Ternbuell Guppat Corporation\",\"cost_in_credits\":\"15000\",\"length\":\"3.5\",\"max_atmosphering_speed\":\"330\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"10\",\"consumables\":\"none\",\"vehicle_class\":\"wheeled walker\",\"pilots\":[\"https://swapi.co/api/people/79/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:43:54.870000Z\",\"edited\":\"2014-12-22T18:21:16.422662Z\",\"url\":\"https://swapi.co/api/vehicles/60/\"},{\"name\":\"Emergency Firespeeder\",\"model\":\"Fire suppression speeder\",\"manufacturer\":\"unknown\",\"cost_in_credits\":\"unknown\",\"length\":\"unknown\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"2\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"fire suppression ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:50:58.559000Z\",\"edited\":\"2014-12-22T18:21:16.450655Z\",\"url\":\"https://swapi.co/api/vehicles/62/\"},{\"name\":\"Droid tri-fighter\",\"model\":\"tri-fighter\",\"manufacturer\":\"Colla Designs, Phlac-Arphocc Automata Industries\",\"cost_in_credits\":\"20000\",\"length\":\"5.4\",\"max_atmosphering_speed\":\"1180\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"0\",\"consumables\":\"none\",\"vehicle_class\":\"droid starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:05:19.992000Z\",\"edited\":\"2014-12-22T18:21:16.478901Z\",\"url\":\"https://swapi.co/api/vehicles/67/\"},{\"name\":\"Oevvaor jet catamaran\",\"model\":\"Oevvaor jet catamaran\",\"manufacturer\":\"Appazanna Engineering Works\",\"cost_in_credits\":\"12125\",\"length\":\"15.1\",\"max_atmosphering_speed\":\"420\",\"crew\":\"2\",\"passengers\":\"2\",\"cargo_capacity\":\"50\",\"consumables\":\"3 days\",\"vehicle_class\":\"airspeeder\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:20:53.931000Z\",\"edited\":\"2014-12-22T18:21:16.517049Z\",\"url\":\"https://swapi.co/api/vehicles/69/\"},{\"name\":\"Raddaugh Gnasp fluttercraft\",\"model\":\"Raddaugh Gnasp fluttercraft\",\"manufacturer\":\"Appazanna Engineering Works\",\"cost_in_credits\":\"14750\",\"length\":\"7\",\"max_atmosphering_speed\":\"310\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"20\",\"consumables\":\"none\",\"vehicle_class\":\"air speeder\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:21:55.648000Z\",\"edited\":\"2014-12-22T18:21:16.547708Z\",\"url\":\"https://swapi.co/api/vehicles/70/\"}]},\"https://swapi.co/api/vehicles/44/\":{\"name\":\"Zephyr-G swoop bike\",\"model\":\"Zephyr-G swoop bike\",\"manufacturer\":\"Mobquet Swoops and Speeders\",\"cost_in_credits\":\"5750\",\"length\":\"3.68\",\"max_atmosphering_speed\":\"350\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"200\",\"consumables\":\"none\",\"vehicle_class\":\"repulsorcraft\",\"pilots\":[\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T16:24:16.026000Z\",\"edited\":\"2014-12-22T18:21:16.117652Z\",\"url\":\"https://swapi.co/api/vehicles/44/\"},\"https://swapi.co/api/vehicles/45/\":{\"name\":\"Koro-2 Exodrive airspeeder\",\"model\":\"Koro-2 Exodrive airspeeder\",\"manufacturer\":\"Desler Gizh Outworld Mobility Corporation\",\"cost_in_credits\":\"unknown\",\"length\":\"6.6\",\"max_atmosphering_speed\":\"800\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"80\",\"consumables\":\"unknown\",\"vehicle_class\":\"airspeeder\",\"pilots\":[\"https://swapi.co/api/people/70/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:17:33.526000Z\",\"edited\":\"2014-12-22T18:21:16.140018Z\",\"url\":\"https://swapi.co/api/vehicles/45/\"},\"https://swapi.co/api/vehicles/46/\":{\"name\":\"XJ-6 airspeeder\",\"model\":\"XJ-6 airspeeder\",\"manufacturer\":\"Narglatch AirTech prefabricated kit\",\"cost_in_credits\":\"unknown\",\"length\":\"6.23\",\"max_atmosphering_speed\":\"720\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"airspeeder\",\"pilots\":[\"https://swapi.co/api/people/11/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:19:19.991000Z\",\"edited\":\"2014-12-22T18:21:16.150194Z\",\"url\":\"https://swapi.co/api/vehicles/46/\"},\"https://swapi.co/api/vehicles/50/\":{\"name\":\"LAAT/i\",\"model\":\"Low Altitude Assault Transport/infrantry\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"17.4\",\"max_atmosphering_speed\":\"620\",\"crew\":\"6\",\"passengers\":\"30\",\"cargo_capacity\":\"170\",\"consumables\":\"unknown\",\"vehicle_class\":\"gunship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:01:21.014000Z\",\"edited\":\"2014-12-22T18:21:16.181363Z\",\"url\":\"https://swapi.co/api/vehicles/50/\"},\"https://swapi.co/api/vehicles/51/\":{\"name\":\"LAAT/c\",\"model\":\"Low Altitude Assault Transport/carrier\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"28.82\",\"max_atmosphering_speed\":\"620\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"40000\",\"consumables\":\"unknown\",\"vehicle_class\":\"gunship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:02:46.802000Z\",\"edited\":\"2014-12-22T18:21:16.229733Z\",\"url\":\"https://swapi.co/api/vehicles/51/\"},\"https://swapi.co/api/vehicles/60/\":{\"name\":\"Tsmeu-6 personal wheel bike\",\"model\":\"Tsmeu-6 personal wheel bike\",\"manufacturer\":\"Z-Gomot Ternbuell Guppat Corporation\",\"cost_in_credits\":\"15000\",\"length\":\"3.5\",\"max_atmosphering_speed\":\"330\",\"crew\":\"1\",\"passengers\":\"1\",\"cargo_capacity\":\"10\",\"consumables\":\"none\",\"vehicle_class\":\"wheeled walker\",\"pilots\":[\"https://swapi.co/api/people/79/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:43:54.870000Z\",\"edited\":\"2014-12-22T18:21:16.422662Z\",\"url\":\"https://swapi.co/api/vehicles/60/\"},\"https://swapi.co/api/vehicles/62/\":{\"name\":\"Emergency Firespeeder\",\"model\":\"Fire suppression speeder\",\"manufacturer\":\"unknown\",\"cost_in_credits\":\"unknown\",\"length\":\"unknown\",\"max_atmosphering_speed\":\"unknown\",\"crew\":\"2\",\"passengers\":\"unknown\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"fire suppression ship\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:50:58.559000Z\",\"edited\":\"2014-12-22T18:21:16.450655Z\",\"url\":\"https://swapi.co/api/vehicles/62/\"},\"https://swapi.co/api/vehicles/67/\":{\"name\":\"Droid tri-fighter\",\"model\":\"tri-fighter\",\"manufacturer\":\"Colla Designs, Phlac-Arphocc Automata Industries\",\"cost_in_credits\":\"20000\",\"length\":\"5.4\",\"max_atmosphering_speed\":\"1180\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"0\",\"consumables\":\"none\",\"vehicle_class\":\"droid starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:05:19.992000Z\",\"edited\":\"2014-12-22T18:21:16.478901Z\",\"url\":\"https://swapi.co/api/vehicles/67/\"},\"https://swapi.co/api/vehicles/69/\":{\"name\":\"Oevvaor jet catamaran\",\"model\":\"Oevvaor jet catamaran\",\"manufacturer\":\"Appazanna Engineering Works\",\"cost_in_credits\":\"12125\",\"length\":\"15.1\",\"max_atmosphering_speed\":\"420\",\"crew\":\"2\",\"passengers\":\"2\",\"cargo_capacity\":\"50\",\"consumables\":\"3 days\",\"vehicle_class\":\"airspeeder\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:20:53.931000Z\",\"edited\":\"2014-12-22T18:21:16.517049Z\",\"url\":\"https://swapi.co/api/vehicles/69/\"},\"https://swapi.co/api/vehicles/70/\":{\"name\":\"Raddaugh Gnasp fluttercraft\",\"model\":\"Raddaugh Gnasp fluttercraft\",\"manufacturer\":\"Appazanna Engineering Works\",\"cost_in_credits\":\"14750\",\"length\":\"7\",\"max_atmosphering_speed\":\"310\",\"crew\":\"2\",\"passengers\":\"0\",\"cargo_capacity\":\"20\",\"consumables\":\"none\",\"vehicle_class\":\"air speeder\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:21:55.648000Z\",\"edited\":\"2014-12-22T18:21:16.547708Z\",\"url\":\"https://swapi.co/api/vehicles/70/\"},\"https://swapi.co/api/vehicles/?page=4\":{\"count\":39,\"next\":null,\"previous\":\"https://swapi.co/api/vehicles/?page=3\",\"results\":[{\"name\":\"Clone turbo tank\",\"model\":\"HAVw A6 Juggernaut\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"350000\",\"length\":\"49.4\",\"max_atmosphering_speed\":\"160\",\"crew\":\"20\",\"passengers\":\"300\",\"cargo_capacity\":\"30000\",\"consumables\":\"20 days\",\"vehicle_class\":\"wheeled walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:24:45.587000Z\",\"edited\":\"2014-12-22T18:21:16.571079Z\",\"url\":\"https://swapi.co/api/vehicles/71/\"},{\"name\":\"Corporate Alliance tank droid\",\"model\":\"NR-N99 Persuader-class droid enforcer\",\"manufacturer\":\"Techno Union\",\"cost_in_credits\":\"49000\",\"length\":\"10.96\",\"max_atmosphering_speed\":\"100\",\"crew\":\"0\",\"passengers\":\"4\",\"cargo_capacity\":\"none\",\"consumables\":\"none\",\"vehicle_class\":\"droid tank\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:26:55.522000Z\",\"edited\":\"2014-12-22T18:21:16.612902Z\",\"url\":\"https://swapi.co/api/vehicles/72/\"},{\"name\":\"Droid gunship\",\"model\":\"HMP droid gunship\",\"manufacturer\":\"Baktoid Fleet Ordnance, Haor Chall Engineering\",\"cost_in_credits\":\"60000\",\"length\":\"12.3\",\"max_atmosphering_speed\":\"820\",\"crew\":\"0\",\"passengers\":\"0\",\"cargo_capacity\":\"0\",\"consumables\":\"none\",\"vehicle_class\":\"airspeeder\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:32:05.687000Z\",\"edited\":\"2014-12-22T18:21:16.643329Z\",\"url\":\"https://swapi.co/api/vehicles/73/\"},{\"name\":\"AT-RT\",\"model\":\"All Terrain Recon Transport\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"40000\",\"length\":\"3.2\",\"max_atmosphering_speed\":\"90\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"20\",\"consumables\":\"1 day\",\"vehicle_class\":\"walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:47:49.189000Z\",\"edited\":\"2014-12-22T18:21:16.672821Z\",\"url\":\"https://swapi.co/api/vehicles/76/\"},{\"name\":\"AT-TE\",\"model\":\"All Terrain Tactical Enforcer\",\"manufacturer\":\"Rothana Heavy Engineering, Kuat Drive Yards\",\"cost_in_credits\":\"unknown\",\"length\":\"13.2\",\"max_atmosphering_speed\":\"60\",\"crew\":\"6\",\"passengers\":\"36\",\"cargo_capacity\":\"10000\",\"consumables\":\"21 days\",\"vehicle_class\":\"walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:10:07.560000Z\",\"edited\":\"2014-12-22T18:21:16.293771Z\",\"url\":\"https://swapi.co/api/vehicles/53/\"},{\"name\":\"SPHA\",\"model\":\"Self-Propelled Heavy Artillery\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"140\",\"max_atmosphering_speed\":\"35\",\"crew\":\"25\",\"passengers\":\"30\",\"cargo_capacity\":\"500\",\"consumables\":\"7 days\",\"vehicle_class\":\"walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:12:32.315000Z\",\"edited\":\"2014-12-22T18:21:16.311761Z\",\"url\":\"https://swapi.co/api/vehicles/54/\"},{\"name\":\"Flitknot speeder\",\"model\":\"Flitknot speeder\",\"manufacturer\":\"Huppla Pasa Tisc Shipwrights Collective\",\"cost_in_credits\":\"8000\",\"length\":\"2\",\"max_atmosphering_speed\":\"634\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"speeder\",\"pilots\":[\"https://swapi.co/api/people/67/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:15:20.312000Z\",\"edited\":\"2014-12-22T18:21:16.335005Z\",\"url\":\"https://swapi.co/api/vehicles/55/\"},{\"name\":\"Neimoidian shuttle\",\"model\":\"Sheathipede-class transport shuttle\",\"manufacturer\":\"Haor Chall Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"20\",\"max_atmosphering_speed\":\"880\",\"crew\":\"2\",\"passengers\":\"6\",\"cargo_capacity\":\"1000\",\"consumables\":\"7 days\",\"vehicle_class\":\"transport\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:25:44.912000Z\",\"edited\":\"2014-12-22T18:21:16.366134Z\",\"url\":\"https://swapi.co/api/vehicles/56/\"},{\"name\":\"Geonosian starfighter\",\"model\":\"Nantex-class territorial defense\",\"manufacturer\":\"Huppla Pasa Tisc Shipwrights Collective\",\"cost_in_credits\":\"unknown\",\"length\":\"9.8\",\"max_atmosphering_speed\":\"20000\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:34:12.541000Z\",\"edited\":\"2014-12-22T18:21:16.390980Z\",\"url\":\"https://swapi.co/api/vehicles/57/\"}]},\"https://swapi.co/api/vehicles/71/\":{\"name\":\"Clone turbo tank\",\"model\":\"HAVw A6 Juggernaut\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"350000\",\"length\":\"49.4\",\"max_atmosphering_speed\":\"160\",\"crew\":\"20\",\"passengers\":\"300\",\"cargo_capacity\":\"30000\",\"consumables\":\"20 days\",\"vehicle_class\":\"wheeled walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:24:45.587000Z\",\"edited\":\"2014-12-22T18:21:16.571079Z\",\"url\":\"https://swapi.co/api/vehicles/71/\"},\"https://swapi.co/api/vehicles/72/\":{\"name\":\"Corporate Alliance tank droid\",\"model\":\"NR-N99 Persuader-class droid enforcer\",\"manufacturer\":\"Techno Union\",\"cost_in_credits\":\"49000\",\"length\":\"10.96\",\"max_atmosphering_speed\":\"100\",\"crew\":\"0\",\"passengers\":\"4\",\"cargo_capacity\":\"none\",\"consumables\":\"none\",\"vehicle_class\":\"droid tank\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:26:55.522000Z\",\"edited\":\"2014-12-22T18:21:16.612902Z\",\"url\":\"https://swapi.co/api/vehicles/72/\"},\"https://swapi.co/api/vehicles/73/\":{\"name\":\"Droid gunship\",\"model\":\"HMP droid gunship\",\"manufacturer\":\"Baktoid Fleet Ordnance, Haor Chall Engineering\",\"cost_in_credits\":\"60000\",\"length\":\"12.3\",\"max_atmosphering_speed\":\"820\",\"crew\":\"0\",\"passengers\":\"0\",\"cargo_capacity\":\"0\",\"consumables\":\"none\",\"vehicle_class\":\"airspeeder\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:32:05.687000Z\",\"edited\":\"2014-12-22T18:21:16.643329Z\",\"url\":\"https://swapi.co/api/vehicles/73/\"},\"https://swapi.co/api/vehicles/76/\":{\"name\":\"AT-RT\",\"model\":\"All Terrain Recon Transport\",\"manufacturer\":\"Kuat Drive Yards\",\"cost_in_credits\":\"40000\",\"length\":\"3.2\",\"max_atmosphering_speed\":\"90\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"20\",\"consumables\":\"1 day\",\"vehicle_class\":\"walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:47:49.189000Z\",\"edited\":\"2014-12-22T18:21:16.672821Z\",\"url\":\"https://swapi.co/api/vehicles/76/\"},\"https://swapi.co/api/vehicles/53/\":{\"name\":\"AT-TE\",\"model\":\"All Terrain Tactical Enforcer\",\"manufacturer\":\"Rothana Heavy Engineering, Kuat Drive Yards\",\"cost_in_credits\":\"unknown\",\"length\":\"13.2\",\"max_atmosphering_speed\":\"60\",\"crew\":\"6\",\"passengers\":\"36\",\"cargo_capacity\":\"10000\",\"consumables\":\"21 days\",\"vehicle_class\":\"walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:10:07.560000Z\",\"edited\":\"2014-12-22T18:21:16.293771Z\",\"url\":\"https://swapi.co/api/vehicles/53/\"},\"https://swapi.co/api/vehicles/54/\":{\"name\":\"SPHA\",\"model\":\"Self-Propelled Heavy Artillery\",\"manufacturer\":\"Rothana Heavy Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"140\",\"max_atmosphering_speed\":\"35\",\"crew\":\"25\",\"passengers\":\"30\",\"cargo_capacity\":\"500\",\"consumables\":\"7 days\",\"vehicle_class\":\"walker\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:12:32.315000Z\",\"edited\":\"2014-12-22T18:21:16.311761Z\",\"url\":\"https://swapi.co/api/vehicles/54/\"},\"https://swapi.co/api/vehicles/55/\":{\"name\":\"Flitknot speeder\",\"model\":\"Flitknot speeder\",\"manufacturer\":\"Huppla Pasa Tisc Shipwrights Collective\",\"cost_in_credits\":\"8000\",\"length\":\"2\",\"max_atmosphering_speed\":\"634\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"speeder\",\"pilots\":[\"https://swapi.co/api/people/67/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:15:20.312000Z\",\"edited\":\"2014-12-22T18:21:16.335005Z\",\"url\":\"https://swapi.co/api/vehicles/55/\"},\"https://swapi.co/api/vehicles/56/\":{\"name\":\"Neimoidian shuttle\",\"model\":\"Sheathipede-class transport shuttle\",\"manufacturer\":\"Haor Chall Engineering\",\"cost_in_credits\":\"unknown\",\"length\":\"20\",\"max_atmosphering_speed\":\"880\",\"crew\":\"2\",\"passengers\":\"6\",\"cargo_capacity\":\"1000\",\"consumables\":\"7 days\",\"vehicle_class\":\"transport\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:25:44.912000Z\",\"edited\":\"2014-12-22T18:21:16.366134Z\",\"url\":\"https://swapi.co/api/vehicles/56/\"},\"https://swapi.co/api/vehicles/57/\":{\"name\":\"Geonosian starfighter\",\"model\":\"Nantex-class territorial defense\",\"manufacturer\":\"Huppla Pasa Tisc Shipwrights Collective\",\"cost_in_credits\":\"unknown\",\"length\":\"9.8\",\"max_atmosphering_speed\":\"20000\",\"crew\":\"1\",\"passengers\":\"0\",\"cargo_capacity\":\"unknown\",\"consumables\":\"unknown\",\"vehicle_class\":\"starfighter\",\"pilots\":[],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T18:34:12.541000Z\",\"edited\":\"2014-12-22T18:21:16.390980Z\",\"url\":\"https://swapi.co/api/vehicles/57/\"},\"https://swapi.co/api/species/\":{\"count\":37,\"next\":\"https://swapi.co/api/species/?page=2\",\"previous\":null,\"results\":[{\"name\":\"Hutt\",\"classification\":\"gastropod\",\"designation\":\"sentient\",\"average_height\":\"300\",\"skin_colors\":\"green, brown, tan\",\"hair_colors\":\"n/a\",\"eye_colors\":\"yellow, red\",\"average_lifespan\":\"1000\",\"homeworld\":\"https://swapi.co/api/planets/24/\",\"language\":\"Huttese\",\"people\":[\"https://swapi.co/api/people/16/\"],\"films\":[\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T17:12:50.410000Z\",\"edited\":\"2014-12-20T21:36:42.146000Z\",\"url\":\"https://swapi.co/api/species/5/\"},{\"name\":\"Yoda's species\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"66\",\"skin_colors\":\"green, yellow\",\"hair_colors\":\"brown, white\",\"eye_colors\":\"brown, green, yellow\",\"average_lifespan\":\"900\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"language\":\"Galactic basic\",\"people\":[\"https://swapi.co/api/people/20/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:27:22.877000Z\",\"edited\":\"2014-12-20T21:36:42.148000Z\",\"url\":\"https://swapi.co/api/species/6/\"},{\"name\":\"Trandoshan\",\"classification\":\"reptile\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"brown, green\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow, orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/29/\",\"language\":\"Dosh\",\"people\":[\"https://swapi.co/api/people/24/\"],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T13:07:47.704000Z\",\"edited\":\"2014-12-20T21:36:42.151000Z\",\"url\":\"https://swapi.co/api/species/7/\"},{\"name\":\"Mon Calamari\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"160\",\"skin_colors\":\"red, blue, brown, magenta\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/31/\",\"language\":\"Mon Calamarian\",\"people\":[\"https://swapi.co/api/people/27/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:09:52.263000Z\",\"edited\":\"2014-12-20T21:36:42.153000Z\",\"url\":\"https://swapi.co/api/species/8/\"},{\"name\":\"Ewok\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"100\",\"skin_colors\":\"brown\",\"hair_colors\":\"white, brown, black\",\"eye_colors\":\"orange, brown\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/7/\",\"language\":\"Ewokese\",\"people\":[\"https://swapi.co/api/people/30/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:22:00.285000Z\",\"edited\":\"2014-12-20T21:36:42.155000Z\",\"url\":\"https://swapi.co/api/species/9/\"},{\"name\":\"Sullustan\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"pale\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/33/\",\"language\":\"Sullutese\",\"people\":[\"https://swapi.co/api/people/31/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:26:20.103000Z\",\"edited\":\"2014-12-20T21:36:42.157000Z\",\"url\":\"https://swapi.co/api/species/10/\"},{\"name\":\"Neimodian\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"grey, green\",\"hair_colors\":\"none\",\"eye_colors\":\"red, pink\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/18/\",\"language\":\"Neimoidia\",\"people\":[\"https://swapi.co/api/people/33/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:07:31.319000Z\",\"edited\":\"2014-12-20T21:36:42.160000Z\",\"url\":\"https://swapi.co/api/species/11/\"},{\"name\":\"Gungan\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"brown, green\",\"hair_colors\":\"none\",\"eye_colors\":\"orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"language\":\"Gungan basic\",\"people\":[\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/37/\",\"https://swapi.co/api/people/38/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:30:37.341000Z\",\"edited\":\"2014-12-20T21:36:42.163000Z\",\"url\":\"https://swapi.co/api/species/12/\"},{\"name\":\"Toydarian\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"120\",\"skin_colors\":\"blue, green, grey\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"91\",\"homeworld\":\"https://swapi.co/api/planets/34/\",\"language\":\"Toydarian\",\"people\":[\"https://swapi.co/api/people/40/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:48:56.893000Z\",\"edited\":\"2014-12-20T21:36:42.165000Z\",\"url\":\"https://swapi.co/api/species/13/\"},{\"name\":\"Dug\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"100\",\"skin_colors\":\"brown, purple, grey, red\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow, blue\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/35/\",\"language\":\"Dugese\",\"people\":[\"https://swapi.co/api/people/41/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:53:11.214000Z\",\"edited\":\"2014-12-20T21:36:42.167000Z\",\"url\":\"https://swapi.co/api/species/14/\"}]},\"https://swapi.co/api/species/5/\":{\"name\":\"Hutt\",\"classification\":\"gastropod\",\"designation\":\"sentient\",\"average_height\":\"300\",\"skin_colors\":\"green, brown, tan\",\"hair_colors\":\"n/a\",\"eye_colors\":\"yellow, red\",\"average_lifespan\":\"1000\",\"homeworld\":\"https://swapi.co/api/planets/24/\",\"language\":\"Huttese\",\"people\":[\"https://swapi.co/api/people/16/\"],\"films\":[\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T17:12:50.410000Z\",\"edited\":\"2014-12-20T21:36:42.146000Z\",\"url\":\"https://swapi.co/api/species/5/\"},\"https://swapi.co/api/species/6/\":{\"name\":\"Yoda's species\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"66\",\"skin_colors\":\"green, yellow\",\"hair_colors\":\"brown, white\",\"eye_colors\":\"brown, green, yellow\",\"average_lifespan\":\"900\",\"homeworld\":\"https://swapi.co/api/planets/28/\",\"language\":\"Galactic basic\",\"people\":[\"https://swapi.co/api/people/20/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-15T12:27:22.877000Z\",\"edited\":\"2014-12-20T21:36:42.148000Z\",\"url\":\"https://swapi.co/api/species/6/\"},\"https://swapi.co/api/species/7/\":{\"name\":\"Trandoshan\",\"classification\":\"reptile\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"brown, green\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow, orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/29/\",\"language\":\"Dosh\",\"people\":[\"https://swapi.co/api/people/24/\"],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T13:07:47.704000Z\",\"edited\":\"2014-12-20T21:36:42.151000Z\",\"url\":\"https://swapi.co/api/species/7/\"},\"https://swapi.co/api/species/8/\":{\"name\":\"Mon Calamari\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"160\",\"skin_colors\":\"red, blue, brown, magenta\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/31/\",\"language\":\"Mon Calamarian\",\"people\":[\"https://swapi.co/api/people/27/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:09:52.263000Z\",\"edited\":\"2014-12-20T21:36:42.153000Z\",\"url\":\"https://swapi.co/api/species/8/\"},\"https://swapi.co/api/species/9/\":{\"name\":\"Ewok\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"100\",\"skin_colors\":\"brown\",\"hair_colors\":\"white, brown, black\",\"eye_colors\":\"orange, brown\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/7/\",\"language\":\"Ewokese\",\"people\":[\"https://swapi.co/api/people/30/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:22:00.285000Z\",\"edited\":\"2014-12-20T21:36:42.155000Z\",\"url\":\"https://swapi.co/api/species/9/\"},\"https://swapi.co/api/species/10/\":{\"name\":\"Sullustan\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"pale\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/33/\",\"language\":\"Sullutese\",\"people\":[\"https://swapi.co/api/people/31/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-18T11:26:20.103000Z\",\"edited\":\"2014-12-20T21:36:42.157000Z\",\"url\":\"https://swapi.co/api/species/10/\"},\"https://swapi.co/api/species/11/\":{\"name\":\"Neimodian\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"grey, green\",\"hair_colors\":\"none\",\"eye_colors\":\"red, pink\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/18/\",\"language\":\"Neimoidia\",\"people\":[\"https://swapi.co/api/people/33/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:07:31.319000Z\",\"edited\":\"2014-12-20T21:36:42.160000Z\",\"url\":\"https://swapi.co/api/species/11/\"},\"https://swapi.co/api/species/12/\":{\"name\":\"Gungan\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"brown, green\",\"hair_colors\":\"none\",\"eye_colors\":\"orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/8/\",\"language\":\"Gungan basic\",\"people\":[\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/37/\",\"https://swapi.co/api/people/38/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:30:37.341000Z\",\"edited\":\"2014-12-20T21:36:42.163000Z\",\"url\":\"https://swapi.co/api/species/12/\"},\"https://swapi.co/api/species/13/\":{\"name\":\"Toydarian\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"120\",\"skin_colors\":\"blue, green, grey\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"91\",\"homeworld\":\"https://swapi.co/api/planets/34/\",\"language\":\"Toydarian\",\"people\":[\"https://swapi.co/api/people/40/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:48:56.893000Z\",\"edited\":\"2014-12-20T21:36:42.165000Z\",\"url\":\"https://swapi.co/api/species/13/\"},\"https://swapi.co/api/species/14/\":{\"name\":\"Dug\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"100\",\"skin_colors\":\"brown, purple, grey, red\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow, blue\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/35/\",\"language\":\"Dugese\",\"people\":[\"https://swapi.co/api/people/41/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-19T17:53:11.214000Z\",\"edited\":\"2014-12-20T21:36:42.167000Z\",\"url\":\"https://swapi.co/api/species/14/\"},\"https://swapi.co/api/species/?page=2\":{\"count\":37,\"next\":\"https://swapi.co/api/species/?page=3\",\"previous\":\"https://swapi.co/api/species/?page=1\",\"results\":[{\"name\":\"Twi'lek\",\"classification\":\"mammals\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"orange, yellow, blue, green, pink, purple, tan\",\"hair_colors\":\"none\",\"eye_colors\":\"blue, brown, orange, pink\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/37/\",\"language\":\"Twi'leki\",\"people\":[\"https://swapi.co/api/people/45/\",\"https://swapi.co/api/people/46/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-20T09:48:02.406000Z\",\"edited\":\"2014-12-20T21:36:42.169000Z\",\"url\":\"https://swapi.co/api/species/15/\"},{\"name\":\"Aleena\",\"classification\":\"reptile\",\"designation\":\"sentient\",\"average_height\":\"80\",\"skin_colors\":\"blue, gray\",\"hair_colors\":\"none\",\"eye_colors\":\"unknown\",\"average_lifespan\":\"79\",\"homeworld\":\"https://swapi.co/api/planets/38/\",\"language\":\"Aleena\",\"people\":[\"https://swapi.co/api/people/47/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T09:53:16.481000Z\",\"edited\":\"2014-12-20T21:36:42.171000Z\",\"url\":\"https://swapi.co/api/species/16/\"},{\"name\":\"Vulptereen\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"100\",\"skin_colors\":\"grey\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/39/\",\"language\":\"vulpterish\",\"people\":[\"https://swapi.co/api/people/48/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T09:57:33.128000Z\",\"edited\":\"2014-12-20T21:36:42.173000Z\",\"url\":\"https://swapi.co/api/species/17/\"},{\"name\":\"Xexto\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"125\",\"skin_colors\":\"grey, yellow, purple\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/40/\",\"language\":\"Xextese\",\"people\":[\"https://swapi.co/api/people/49/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:02:13.915000Z\",\"edited\":\"2014-12-20T21:36:42.175000Z\",\"url\":\"https://swapi.co/api/species/18/\"},{\"name\":\"Toong\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"grey, green, yellow\",\"hair_colors\":\"none\",\"eye_colors\":\"orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/41/\",\"language\":\"Tundan\",\"people\":[\"https://swapi.co/api/people/50/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:08:36.795000Z\",\"edited\":\"2014-12-20T21:36:42.177000Z\",\"url\":\"https://swapi.co/api/species/19/\"},{\"name\":\"Cerean\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"pale pink\",\"hair_colors\":\"red, blond, black, white\",\"eye_colors\":\"hazel\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/43/\",\"language\":\"Cerean\",\"people\":[\"https://swapi.co/api/people/52/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:15:33.765000Z\",\"edited\":\"2014-12-20T21:36:42.179000Z\",\"url\":\"https://swapi.co/api/species/20/\"},{\"name\":\"Nautolan\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"green, blue, brown, red\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"70\",\"homeworld\":\"https://swapi.co/api/planets/44/\",\"language\":\"Nautila\",\"people\":[\"https://swapi.co/api/people/53/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:18:58.610000Z\",\"edited\":\"2014-12-20T21:36:42.181000Z\",\"url\":\"https://swapi.co/api/species/21/\"},{\"name\":\"Zabrak\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"pale, brown, red, orange, yellow\",\"hair_colors\":\"black\",\"eye_colors\":\"brown, orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/45/\",\"language\":\"Zabraki\",\"people\":[\"https://swapi.co/api/people/44/\",\"https://swapi.co/api/people/54/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:26:59.894000Z\",\"edited\":\"2014-12-20T21:36:42.183000Z\",\"url\":\"https://swapi.co/api/species/22/\"},{\"name\":\"Tholothian\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"unknown\",\"skin_colors\":\"dark\",\"hair_colors\":\"unknown\",\"eye_colors\":\"blue, indigo\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/46/\",\"language\":\"unknown\",\"people\":[\"https://swapi.co/api/people/55/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:29:13.798000Z\",\"edited\":\"2014-12-20T21:36:42.186000Z\",\"url\":\"https://swapi.co/api/species/23/\"},{\"name\":\"Iktotchi\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"pink\",\"hair_colors\":\"none\",\"eye_colors\":\"orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/47/\",\"language\":\"Iktotchese\",\"people\":[\"https://swapi.co/api/people/56/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:32:13.046000Z\",\"edited\":\"2014-12-20T21:36:42.188000Z\",\"url\":\"https://swapi.co/api/species/24/\"}]},\"https://swapi.co/api/species/15/\":{\"name\":\"Twi'lek\",\"classification\":\"mammals\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"orange, yellow, blue, green, pink, purple, tan\",\"hair_colors\":\"none\",\"eye_colors\":\"blue, brown, orange, pink\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/37/\",\"language\":\"Twi'leki\",\"people\":[\"https://swapi.co/api/people/45/\",\"https://swapi.co/api/people/46/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-20T09:48:02.406000Z\",\"edited\":\"2014-12-20T21:36:42.169000Z\",\"url\":\"https://swapi.co/api/species/15/\"},\"https://swapi.co/api/species/16/\":{\"name\":\"Aleena\",\"classification\":\"reptile\",\"designation\":\"sentient\",\"average_height\":\"80\",\"skin_colors\":\"blue, gray\",\"hair_colors\":\"none\",\"eye_colors\":\"unknown\",\"average_lifespan\":\"79\",\"homeworld\":\"https://swapi.co/api/planets/38/\",\"language\":\"Aleena\",\"people\":[\"https://swapi.co/api/people/47/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T09:53:16.481000Z\",\"edited\":\"2014-12-20T21:36:42.171000Z\",\"url\":\"https://swapi.co/api/species/16/\"},\"https://swapi.co/api/species/17/\":{\"name\":\"Vulptereen\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"100\",\"skin_colors\":\"grey\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/39/\",\"language\":\"vulpterish\",\"people\":[\"https://swapi.co/api/people/48/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T09:57:33.128000Z\",\"edited\":\"2014-12-20T21:36:42.173000Z\",\"url\":\"https://swapi.co/api/species/17/\"},\"https://swapi.co/api/species/18/\":{\"name\":\"Xexto\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"125\",\"skin_colors\":\"grey, yellow, purple\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/40/\",\"language\":\"Xextese\",\"people\":[\"https://swapi.co/api/people/49/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:02:13.915000Z\",\"edited\":\"2014-12-20T21:36:42.175000Z\",\"url\":\"https://swapi.co/api/species/18/\"},\"https://swapi.co/api/species/19/\":{\"name\":\"Toong\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"grey, green, yellow\",\"hair_colors\":\"none\",\"eye_colors\":\"orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/41/\",\"language\":\"Tundan\",\"people\":[\"https://swapi.co/api/people/50/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:08:36.795000Z\",\"edited\":\"2014-12-20T21:36:42.177000Z\",\"url\":\"https://swapi.co/api/species/19/\"},\"https://swapi.co/api/species/20/\":{\"name\":\"Cerean\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"200\",\"skin_colors\":\"pale pink\",\"hair_colors\":\"red, blond, black, white\",\"eye_colors\":\"hazel\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/43/\",\"language\":\"Cerean\",\"people\":[\"https://swapi.co/api/people/52/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:15:33.765000Z\",\"edited\":\"2014-12-20T21:36:42.179000Z\",\"url\":\"https://swapi.co/api/species/20/\"},\"https://swapi.co/api/species/21/\":{\"name\":\"Nautolan\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"green, blue, brown, red\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"70\",\"homeworld\":\"https://swapi.co/api/planets/44/\",\"language\":\"Nautila\",\"people\":[\"https://swapi.co/api/people/53/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:18:58.610000Z\",\"edited\":\"2014-12-20T21:36:42.181000Z\",\"url\":\"https://swapi.co/api/species/21/\"},\"https://swapi.co/api/species/22/\":{\"name\":\"Zabrak\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"pale, brown, red, orange, yellow\",\"hair_colors\":\"black\",\"eye_colors\":\"brown, orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/45/\",\"language\":\"Zabraki\",\"people\":[\"https://swapi.co/api/people/44/\",\"https://swapi.co/api/people/54/\"],\"films\":[\"https://swapi.co/api/films/4/\"],\"created\":\"2014-12-20T10:26:59.894000Z\",\"edited\":\"2014-12-20T21:36:42.183000Z\",\"url\":\"https://swapi.co/api/species/22/\"},\"https://swapi.co/api/species/23/\":{\"name\":\"Tholothian\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"unknown\",\"skin_colors\":\"dark\",\"hair_colors\":\"unknown\",\"eye_colors\":\"blue, indigo\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/46/\",\"language\":\"unknown\",\"people\":[\"https://swapi.co/api/people/55/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:29:13.798000Z\",\"edited\":\"2014-12-20T21:36:42.186000Z\",\"url\":\"https://swapi.co/api/species/23/\"},\"https://swapi.co/api/species/24/\":{\"name\":\"Iktotchi\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"pink\",\"hair_colors\":\"none\",\"eye_colors\":\"orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/47/\",\"language\":\"Iktotchese\",\"people\":[\"https://swapi.co/api/people/56/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:32:13.046000Z\",\"edited\":\"2014-12-20T21:36:42.188000Z\",\"url\":\"https://swapi.co/api/species/24/\"},\"https://swapi.co/api/species/?page=3\":{\"count\":37,\"next\":\"https://swapi.co/api/species/?page=4\",\"previous\":\"https://swapi.co/api/species/?page=2\",\"results\":[{\"name\":\"Quermian\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"240\",\"skin_colors\":\"white\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"86\",\"homeworld\":\"https://swapi.co/api/planets/48/\",\"language\":\"Quermian\",\"people\":[\"https://swapi.co/api/people/57/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:34:50.827000Z\",\"edited\":\"2014-12-20T21:36:42.189000Z\",\"url\":\"https://swapi.co/api/species/25/\"},{\"name\":\"Kel Dor\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"peach, orange, red\",\"hair_colors\":\"none\",\"eye_colors\":\"black, silver\",\"average_lifespan\":\"70\",\"homeworld\":\"https://swapi.co/api/planets/49/\",\"language\":\"Kel Dor\",\"people\":[\"https://swapi.co/api/people/58/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:49:21.692000Z\",\"edited\":\"2014-12-20T21:36:42.191000Z\",\"url\":\"https://swapi.co/api/species/26/\"},{\"name\":\"Chagrian\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"blue\",\"hair_colors\":\"none\",\"eye_colors\":\"blue\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/50/\",\"language\":\"Chagria\",\"people\":[\"https://swapi.co/api/people/59/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:53:28.795000Z\",\"edited\":\"2014-12-20T21:36:42.193000Z\",\"url\":\"https://swapi.co/api/species/27/\"},{\"name\":\"Geonosian\",\"classification\":\"insectoid\",\"designation\":\"sentient\",\"average_height\":\"178\",\"skin_colors\":\"green, brown\",\"hair_colors\":\"none\",\"eye_colors\":\"green, hazel\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/11/\",\"language\":\"Geonosian\",\"people\":[\"https://swapi.co/api/people/63/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T16:40:45.618000Z\",\"edited\":\"2014-12-20T21:36:42.195000Z\",\"url\":\"https://swapi.co/api/species/28/\"},{\"name\":\"Mirialan\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"yellow, green\",\"hair_colors\":\"black, brown\",\"eye_colors\":\"blue, green, red, yellow, brown, orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/51/\",\"language\":\"Mirialan\",\"people\":[\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/65/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T16:46:48.290000Z\",\"edited\":\"2014-12-20T21:36:42.197000Z\",\"url\":\"https://swapi.co/api/species/29/\"},{\"name\":\"Clawdite\",\"classification\":\"reptilian\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"green, yellow\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"70\",\"homeworld\":\"https://swapi.co/api/planets/54/\",\"language\":\"Clawdite\",\"people\":[\"https://swapi.co/api/people/70/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T16:57:46.171000Z\",\"edited\":\"2014-12-20T21:36:42.199000Z\",\"url\":\"https://swapi.co/api/species/30/\"},{\"name\":\"Besalisk\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"178\",\"skin_colors\":\"brown\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"75\",\"homeworld\":\"https://swapi.co/api/planets/55/\",\"language\":\"besalisk\",\"people\":[\"https://swapi.co/api/people/71/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:28:28.821000Z\",\"edited\":\"2014-12-20T21:36:42.200000Z\",\"url\":\"https://swapi.co/api/species/31/\"},{\"name\":\"Kaminoan\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"220\",\"skin_colors\":\"grey, blue\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"80\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"language\":\"Kaminoan\",\"people\":[\"https://swapi.co/api/people/72/\",\"https://swapi.co/api/people/73/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:31:24.838000Z\",\"edited\":\"2014-12-20T21:36:42.202000Z\",\"url\":\"https://swapi.co/api/species/32/\"},{\"name\":\"Skakoan\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"unknown\",\"skin_colors\":\"grey, green\",\"hair_colors\":\"none\",\"eye_colors\":\"unknown\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/56/\",\"language\":\"Skakoan\",\"people\":[\"https://swapi.co/api/people/76/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T17:53:54.515000Z\",\"edited\":\"2014-12-20T21:36:42.204000Z\",\"url\":\"https://swapi.co/api/species/33/\"},{\"name\":\"Muun\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"grey, white\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"100\",\"homeworld\":\"https://swapi.co/api/planets/57/\",\"language\":\"Muun\",\"people\":[\"https://swapi.co/api/people/77/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T17:58:19.088000Z\",\"edited\":\"2014-12-20T21:36:42.207000Z\",\"url\":\"https://swapi.co/api/species/34/\"}]},\"https://swapi.co/api/species/25/\":{\"name\":\"Quermian\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"240\",\"skin_colors\":\"white\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"86\",\"homeworld\":\"https://swapi.co/api/planets/48/\",\"language\":\"Quermian\",\"people\":[\"https://swapi.co/api/people/57/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:34:50.827000Z\",\"edited\":\"2014-12-20T21:36:42.189000Z\",\"url\":\"https://swapi.co/api/species/25/\"},\"https://swapi.co/api/species/26/\":{\"name\":\"Kel Dor\",\"classification\":\"unknown\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"peach, orange, red\",\"hair_colors\":\"none\",\"eye_colors\":\"black, silver\",\"average_lifespan\":\"70\",\"homeworld\":\"https://swapi.co/api/planets/49/\",\"language\":\"Kel Dor\",\"people\":[\"https://swapi.co/api/people/58/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:49:21.692000Z\",\"edited\":\"2014-12-20T21:36:42.191000Z\",\"url\":\"https://swapi.co/api/species/26/\"},\"https://swapi.co/api/species/27/\":{\"name\":\"Chagrian\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"blue\",\"hair_colors\":\"none\",\"eye_colors\":\"blue\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/50/\",\"language\":\"Chagria\",\"people\":[\"https://swapi.co/api/people/59/\"],\"films\":[\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T10:53:28.795000Z\",\"edited\":\"2014-12-20T21:36:42.193000Z\",\"url\":\"https://swapi.co/api/species/27/\"},\"https://swapi.co/api/species/28/\":{\"name\":\"Geonosian\",\"classification\":\"insectoid\",\"designation\":\"sentient\",\"average_height\":\"178\",\"skin_colors\":\"green, brown\",\"hair_colors\":\"none\",\"eye_colors\":\"green, hazel\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/11/\",\"language\":\"Geonosian\",\"people\":[\"https://swapi.co/api/people/63/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T16:40:45.618000Z\",\"edited\":\"2014-12-20T21:36:42.195000Z\",\"url\":\"https://swapi.co/api/species/28/\"},\"https://swapi.co/api/species/29/\":{\"name\":\"Mirialan\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"yellow, green\",\"hair_colors\":\"black, brown\",\"eye_colors\":\"blue, green, red, yellow, brown, orange\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/51/\",\"language\":\"Mirialan\",\"people\":[\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/65/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T16:46:48.290000Z\",\"edited\":\"2014-12-20T21:36:42.197000Z\",\"url\":\"https://swapi.co/api/species/29/\"},\"https://swapi.co/api/species/30/\":{\"name\":\"Clawdite\",\"classification\":\"reptilian\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"green, yellow\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"70\",\"homeworld\":\"https://swapi.co/api/planets/54/\",\"language\":\"Clawdite\",\"people\":[\"https://swapi.co/api/people/70/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T16:57:46.171000Z\",\"edited\":\"2014-12-20T21:36:42.199000Z\",\"url\":\"https://swapi.co/api/species/30/\"},\"https://swapi.co/api/species/31/\":{\"name\":\"Besalisk\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"178\",\"skin_colors\":\"brown\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"75\",\"homeworld\":\"https://swapi.co/api/planets/55/\",\"language\":\"besalisk\",\"people\":[\"https://swapi.co/api/people/71/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:28:28.821000Z\",\"edited\":\"2014-12-20T21:36:42.200000Z\",\"url\":\"https://swapi.co/api/species/31/\"},\"https://swapi.co/api/species/32/\":{\"name\":\"Kaminoan\",\"classification\":\"amphibian\",\"designation\":\"sentient\",\"average_height\":\"220\",\"skin_colors\":\"grey, blue\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"80\",\"homeworld\":\"https://swapi.co/api/planets/10/\",\"language\":\"Kaminoan\",\"people\":[\"https://swapi.co/api/people/72/\",\"https://swapi.co/api/people/73/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-20T17:31:24.838000Z\",\"edited\":\"2014-12-20T21:36:42.202000Z\",\"url\":\"https://swapi.co/api/species/32/\"},\"https://swapi.co/api/species/33/\":{\"name\":\"Skakoan\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"unknown\",\"skin_colors\":\"grey, green\",\"hair_colors\":\"none\",\"eye_colors\":\"unknown\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/56/\",\"language\":\"Skakoan\",\"people\":[\"https://swapi.co/api/people/76/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T17:53:54.515000Z\",\"edited\":\"2014-12-20T21:36:42.204000Z\",\"url\":\"https://swapi.co/api/species/33/\"},\"https://swapi.co/api/species/34/\":{\"name\":\"Muun\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"grey, white\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"100\",\"homeworld\":\"https://swapi.co/api/planets/57/\",\"language\":\"Muun\",\"people\":[\"https://swapi.co/api/people/77/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T17:58:19.088000Z\",\"edited\":\"2014-12-20T21:36:42.207000Z\",\"url\":\"https://swapi.co/api/species/34/\"},\"https://swapi.co/api/species/?page=4\":{\"count\":37,\"next\":null,\"previous\":\"https://swapi.co/api/species/?page=3\",\"results\":[{\"name\":\"Togruta\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"red, white, orange, yellow, green, blue\",\"hair_colors\":\"none\",\"eye_colors\":\"red, orange, yellow, green, blue, black\",\"average_lifespan\":\"94\",\"homeworld\":\"https://swapi.co/api/planets/58/\",\"language\":\"Togruti\",\"people\":[\"https://swapi.co/api/people/78/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:44:03.246000Z\",\"edited\":\"2014-12-20T21:36:42.209000Z\",\"url\":\"https://swapi.co/api/species/35/\"},{\"name\":\"Kaleesh\",\"classification\":\"reptile\",\"designation\":\"sentient\",\"average_height\":\"170\",\"skin_colors\":\"brown, orange, tan\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"80\",\"homeworld\":\"https://swapi.co/api/planets/59/\",\"language\":\"Kaleesh\",\"people\":[\"https://swapi.co/api/people/79/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:45:42.537000Z\",\"edited\":\"2014-12-20T21:36:42.210000Z\",\"url\":\"https://swapi.co/api/species/36/\"},{\"name\":\"Pau'an\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"grey\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"700\",\"homeworld\":\"https://swapi.co/api/planets/12/\",\"language\":\"Utapese\",\"people\":[\"https://swapi.co/api/people/83/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:35:06.777000Z\",\"edited\":\"2014-12-20T21:36:42.212000Z\",\"url\":\"https://swapi.co/api/species/37/\"},{\"name\":\"Wookiee\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"210\",\"skin_colors\":\"gray\",\"hair_colors\":\"black, brown\",\"eye_colors\":\"blue, green, yellow, brown, golden, red\",\"average_lifespan\":\"400\",\"homeworld\":\"https://swapi.co/api/planets/14/\",\"language\":\"Shyriiwook\",\"people\":[\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/80/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:44:31.486000Z\",\"edited\":\"2015-01-30T21:23:03.074598Z\",\"url\":\"https://swapi.co/api/species/3/\"},{\"name\":\"Droid\",\"classification\":\"artificial\",\"designation\":\"sentient\",\"average_height\":\"n/a\",\"skin_colors\":\"n/a\",\"hair_colors\":\"n/a\",\"eye_colors\":\"n/a\",\"average_lifespan\":\"indefinite\",\"homeworld\":null,\"language\":\"n/a\",\"people\":[\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/8/\",\"https://swapi.co/api/people/23/\",\"https://swapi.co/api/people/87/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:16:16.259000Z\",\"edited\":\"2015-04-17T06:59:43.869528Z\",\"url\":\"https://swapi.co/api/species/2/\"},{\"name\":\"Human\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"caucasian, black, asian, hispanic\",\"hair_colors\":\"blonde, brown, black, red\",\"eye_colors\":\"brown, blue, green, hazel, grey, amber\",\"average_lifespan\":\"120\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"language\":\"Galactic Basic\",\"people\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/12/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/19/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/26/\",\"https://swapi.co/api/people/28/\",\"https://swapi.co/api/people/29/\",\"https://swapi.co/api/people/32/\",\"https://swapi.co/api/people/34/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/61/\",\"https://swapi.co/api/people/62/\",\"https://swapi.co/api/people/66/\",\"https://swapi.co/api/people/67/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/69/\",\"https://swapi.co/api/people/74/\",\"https://swapi.co/api/people/81/\",\"https://swapi.co/api/people/84/\",\"https://swapi.co/api/people/85/\",\"https://swapi.co/api/people/86/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T13:52:11.567000Z\",\"edited\":\"2015-04-17T06:59:55.850671Z\",\"url\":\"https://swapi.co/api/species/1/\"},{\"name\":\"Rodian\",\"classification\":\"sentient\",\"designation\":\"reptilian\",\"average_height\":\"170\",\"skin_colors\":\"green, blue\",\"hair_colors\":\"n/a\",\"eye_colors\":\"black\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/23/\",\"language\":\"Galactic Basic\",\"people\":[\"https://swapi.co/api/people/15/\"],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T17:05:26.471000Z\",\"edited\":\"2016-07-19T13:27:03.156498Z\",\"url\":\"https://swapi.co/api/species/4/\"}]},\"https://swapi.co/api/species/35/\":{\"name\":\"Togruta\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"red, white, orange, yellow, green, blue\",\"hair_colors\":\"none\",\"eye_colors\":\"red, orange, yellow, green, blue, black\",\"average_lifespan\":\"94\",\"homeworld\":\"https://swapi.co/api/planets/58/\",\"language\":\"Togruti\",\"people\":[\"https://swapi.co/api/people/78/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T18:44:03.246000Z\",\"edited\":\"2014-12-20T21:36:42.209000Z\",\"url\":\"https://swapi.co/api/species/35/\"},\"https://swapi.co/api/species/36/\":{\"name\":\"Kaleesh\",\"classification\":\"reptile\",\"designation\":\"sentient\",\"average_height\":\"170\",\"skin_colors\":\"brown, orange, tan\",\"hair_colors\":\"none\",\"eye_colors\":\"yellow\",\"average_lifespan\":\"80\",\"homeworld\":\"https://swapi.co/api/planets/59/\",\"language\":\"Kaleesh\",\"people\":[\"https://swapi.co/api/people/79/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T19:45:42.537000Z\",\"edited\":\"2014-12-20T21:36:42.210000Z\",\"url\":\"https://swapi.co/api/species/36/\"},\"https://swapi.co/api/species/37/\":{\"name\":\"Pau'an\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"190\",\"skin_colors\":\"grey\",\"hair_colors\":\"none\",\"eye_colors\":\"black\",\"average_lifespan\":\"700\",\"homeworld\":\"https://swapi.co/api/planets/12/\",\"language\":\"Utapese\",\"people\":[\"https://swapi.co/api/people/83/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-20T20:35:06.777000Z\",\"edited\":\"2014-12-20T21:36:42.212000Z\",\"url\":\"https://swapi.co/api/species/37/\"},\"https://swapi.co/api/species/3/\":{\"name\":\"Wookiee\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"210\",\"skin_colors\":\"gray\",\"hair_colors\":\"black, brown\",\"eye_colors\":\"blue, green, yellow, brown, golden, red\",\"average_lifespan\":\"400\",\"homeworld\":\"https://swapi.co/api/planets/14/\",\"language\":\"Shyriiwook\",\"people\":[\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/80/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T16:44:31.486000Z\",\"edited\":\"2015-01-30T21:23:03.074598Z\",\"url\":\"https://swapi.co/api/species/3/\"},\"https://swapi.co/api/species/2/\":{\"name\":\"Droid\",\"classification\":\"artificial\",\"designation\":\"sentient\",\"average_height\":\"n/a\",\"skin_colors\":\"n/a\",\"hair_colors\":\"n/a\",\"eye_colors\":\"n/a\",\"average_lifespan\":\"indefinite\",\"homeworld\":null,\"language\":\"n/a\",\"people\":[\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/8/\",\"https://swapi.co/api/people/23/\",\"https://swapi.co/api/people/87/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T15:16:16.259000Z\",\"edited\":\"2015-04-17T06:59:43.869528Z\",\"url\":\"https://swapi.co/api/species/2/\"},\"https://swapi.co/api/species/1/\":{\"name\":\"Human\",\"classification\":\"mammal\",\"designation\":\"sentient\",\"average_height\":\"180\",\"skin_colors\":\"caucasian, black, asian, hispanic\",\"hair_colors\":\"blonde, brown, black, red\",\"eye_colors\":\"brown, blue, green, hazel, grey, amber\",\"average_lifespan\":\"120\",\"homeworld\":\"https://swapi.co/api/planets/9/\",\"language\":\"Galactic Basic\",\"people\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/12/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/19/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/26/\",\"https://swapi.co/api/people/28/\",\"https://swapi.co/api/people/29/\",\"https://swapi.co/api/people/32/\",\"https://swapi.co/api/people/34/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/61/\",\"https://swapi.co/api/people/62/\",\"https://swapi.co/api/people/66/\",\"https://swapi.co/api/people/67/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/69/\",\"https://swapi.co/api/people/74/\",\"https://swapi.co/api/people/81/\",\"https://swapi.co/api/people/84/\",\"https://swapi.co/api/people/85/\",\"https://swapi.co/api/people/86/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/7/\",\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T13:52:11.567000Z\",\"edited\":\"2015-04-17T06:59:55.850671Z\",\"url\":\"https://swapi.co/api/species/1/\"},\"https://swapi.co/api/species/4/\":{\"name\":\"Rodian\",\"classification\":\"sentient\",\"designation\":\"reptilian\",\"average_height\":\"170\",\"skin_colors\":\"green, blue\",\"hair_colors\":\"n/a\",\"eye_colors\":\"black\",\"average_lifespan\":\"unknown\",\"homeworld\":\"https://swapi.co/api/planets/23/\",\"language\":\"Galactic Basic\",\"people\":[\"https://swapi.co/api/people/15/\"],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T17:05:26.471000Z\",\"edited\":\"2016-07-19T13:27:03.156498Z\",\"url\":\"https://swapi.co/api/species/4/\"},\"https://swapi.co/api/planets/\":{\"count\":61,\"next\":\"https://swapi.co/api/planets/?page=2\",\"previous\":null,\"results\":[{\"name\":\"Alderaan\",\"rotation_period\":\"24\",\"orbital_period\":\"364\",\"diameter\":\"12500\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"grasslands, mountains\",\"surface_water\":\"40\",\"population\":\"2000000000\",\"residents\":[\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/81/\"],\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T11:35:48.479000Z\",\"edited\":\"2014-12-20T20:58:18.420000Z\",\"url\":\"https://swapi.co/api/planets/2/\"},{\"name\":\"Yavin IV\",\"rotation_period\":\"24\",\"orbital_period\":\"4818\",\"diameter\":\"10200\",\"climate\":\"temperate, tropical\",\"gravity\":\"1 standard\",\"terrain\":\"jungle, rainforests\",\"surface_water\":\"8\",\"population\":\"1000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T11:37:19.144000Z\",\"edited\":\"2014-12-20T20:58:18.421000Z\",\"url\":\"https://swapi.co/api/planets/3/\"},{\"name\":\"Hoth\",\"rotation_period\":\"23\",\"orbital_period\":\"549\",\"diameter\":\"7200\",\"climate\":\"frozen\",\"gravity\":\"1.1 standard\",\"terrain\":\"tundra, ice caves, mountain ranges\",\"surface_water\":\"100\",\"population\":\"unknown\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-10T11:39:13.934000Z\",\"edited\":\"2014-12-20T20:58:18.423000Z\",\"url\":\"https://swapi.co/api/planets/4/\"},{\"name\":\"Dagobah\",\"rotation_period\":\"23\",\"orbital_period\":\"341\",\"diameter\":\"8900\",\"climate\":\"murky\",\"gravity\":\"N/A\",\"terrain\":\"swamp, jungles\",\"surface_water\":\"8\",\"population\":\"unknown\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:42:22.590000Z\",\"edited\":\"2014-12-20T20:58:18.425000Z\",\"url\":\"https://swapi.co/api/planets/5/\"},{\"name\":\"Bespin\",\"rotation_period\":\"12\",\"orbital_period\":\"5110\",\"diameter\":\"118000\",\"climate\":\"temperate\",\"gravity\":\"1.5 (surface), 1 standard (Cloud City)\",\"terrain\":\"gas giant\",\"surface_water\":\"0\",\"population\":\"6000000\",\"residents\":[\"https://swapi.co/api/people/26/\"],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-10T11:43:55.240000Z\",\"edited\":\"2014-12-20T20:58:18.427000Z\",\"url\":\"https://swapi.co/api/planets/6/\"},{\"name\":\"Endor\",\"rotation_period\":\"18\",\"orbital_period\":\"402\",\"diameter\":\"4900\",\"climate\":\"temperate\",\"gravity\":\"0.85 standard\",\"terrain\":\"forests, mountains, lakes\",\"surface_water\":\"8\",\"population\":\"30000000\",\"residents\":[\"https://swapi.co/api/people/30/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:50:29.349000Z\",\"edited\":\"2014-12-20T20:58:18.429000Z\",\"url\":\"https://swapi.co/api/planets/7/\"},{\"name\":\"Naboo\",\"rotation_period\":\"26\",\"orbital_period\":\"312\",\"diameter\":\"12120\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"grassy hills, swamps, forests, mountains\",\"surface_water\":\"12\",\"population\":\"4500000000\",\"residents\":[\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/37/\",\"https://swapi.co/api/people/38/\",\"https://swapi.co/api/people/39/\",\"https://swapi.co/api/people/42/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/61/\",\"https://swapi.co/api/people/66/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:52:31.066000Z\",\"edited\":\"2014-12-20T20:58:18.430000Z\",\"url\":\"https://swapi.co/api/planets/8/\"},{\"name\":\"Coruscant\",\"rotation_period\":\"24\",\"orbital_period\":\"368\",\"diameter\":\"12240\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"cityscape, mountains\",\"surface_water\":\"unknown\",\"population\":\"1000000000000\",\"residents\":[\"https://swapi.co/api/people/34/\",\"https://swapi.co/api/people/55/\",\"https://swapi.co/api/people/74/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:54:13.921000Z\",\"edited\":\"2014-12-20T20:58:18.432000Z\",\"url\":\"https://swapi.co/api/planets/9/\"},{\"name\":\"Kamino\",\"rotation_period\":\"27\",\"orbital_period\":\"463\",\"diameter\":\"19720\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"ocean\",\"surface_water\":\"100\",\"population\":\"1000000000\",\"residents\":[\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/72/\",\"https://swapi.co/api/people/73/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-10T12:45:06.577000Z\",\"edited\":\"2014-12-20T20:58:18.434000Z\",\"url\":\"https://swapi.co/api/planets/10/\"},{\"name\":\"Geonosis\",\"rotation_period\":\"30\",\"orbital_period\":\"256\",\"diameter\":\"11370\",\"climate\":\"temperate, arid\",\"gravity\":\"0.9 standard\",\"terrain\":\"rock, desert, mountain, barren\",\"surface_water\":\"5\",\"population\":\"100000000000\",\"residents\":[\"https://swapi.co/api/people/63/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-10T12:47:22.350000Z\",\"edited\":\"2014-12-20T20:58:18.437000Z\",\"url\":\"https://swapi.co/api/planets/11/\"}]},\"https://swapi.co/api/planets/2/\":{\"name\":\"Alderaan\",\"rotation_period\":\"24\",\"orbital_period\":\"364\",\"diameter\":\"12500\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"grasslands, mountains\",\"surface_water\":\"40\",\"population\":\"2000000000\",\"residents\":[\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/81/\"],\"films\":[\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T11:35:48.479000Z\",\"edited\":\"2014-12-20T20:58:18.420000Z\",\"url\":\"https://swapi.co/api/planets/2/\"},\"https://swapi.co/api/planets/3/\":{\"name\":\"Yavin IV\",\"rotation_period\":\"24\",\"orbital_period\":\"4818\",\"diameter\":\"10200\",\"climate\":\"temperate, tropical\",\"gravity\":\"1 standard\",\"terrain\":\"jungle, rainforests\",\"surface_water\":\"8\",\"population\":\"1000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-10T11:37:19.144000Z\",\"edited\":\"2014-12-20T20:58:18.421000Z\",\"url\":\"https://swapi.co/api/planets/3/\"},\"https://swapi.co/api/planets/4/\":{\"name\":\"Hoth\",\"rotation_period\":\"23\",\"orbital_period\":\"549\",\"diameter\":\"7200\",\"climate\":\"frozen\",\"gravity\":\"1.1 standard\",\"terrain\":\"tundra, ice caves, mountain ranges\",\"surface_water\":\"100\",\"population\":\"unknown\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-10T11:39:13.934000Z\",\"edited\":\"2014-12-20T20:58:18.423000Z\",\"url\":\"https://swapi.co/api/planets/4/\"},\"https://swapi.co/api/planets/5/\":{\"name\":\"Dagobah\",\"rotation_period\":\"23\",\"orbital_period\":\"341\",\"diameter\":\"8900\",\"climate\":\"murky\",\"gravity\":\"N/A\",\"terrain\":\"swamp, jungles\",\"surface_water\":\"8\",\"population\":\"unknown\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/2/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:42:22.590000Z\",\"edited\":\"2014-12-20T20:58:18.425000Z\",\"url\":\"https://swapi.co/api/planets/5/\"},\"https://swapi.co/api/planets/6/\":{\"name\":\"Bespin\",\"rotation_period\":\"12\",\"orbital_period\":\"5110\",\"diameter\":\"118000\",\"climate\":\"temperate\",\"gravity\":\"1.5 (surface), 1 standard (Cloud City)\",\"terrain\":\"gas giant\",\"surface_water\":\"0\",\"population\":\"6000000\",\"residents\":[\"https://swapi.co/api/people/26/\"],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-10T11:43:55.240000Z\",\"edited\":\"2014-12-20T20:58:18.427000Z\",\"url\":\"https://swapi.co/api/planets/6/\"},\"https://swapi.co/api/planets/7/\":{\"name\":\"Endor\",\"rotation_period\":\"18\",\"orbital_period\":\"402\",\"diameter\":\"4900\",\"climate\":\"temperate\",\"gravity\":\"0.85 standard\",\"terrain\":\"forests, mountains, lakes\",\"surface_water\":\"8\",\"population\":\"30000000\",\"residents\":[\"https://swapi.co/api/people/30/\"],\"films\":[\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:50:29.349000Z\",\"edited\":\"2014-12-20T20:58:18.429000Z\",\"url\":\"https://swapi.co/api/planets/7/\"},\"https://swapi.co/api/planets/8/\":{\"name\":\"Naboo\",\"rotation_period\":\"26\",\"orbital_period\":\"312\",\"diameter\":\"12120\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"grassy hills, swamps, forests, mountains\",\"surface_water\":\"12\",\"population\":\"4500000000\",\"residents\":[\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/37/\",\"https://swapi.co/api/people/38/\",\"https://swapi.co/api/people/39/\",\"https://swapi.co/api/people/42/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/61/\",\"https://swapi.co/api/people/66/\",\"https://swapi.co/api/people/35/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:52:31.066000Z\",\"edited\":\"2014-12-20T20:58:18.430000Z\",\"url\":\"https://swapi.co/api/planets/8/\"},\"https://swapi.co/api/planets/9/\":{\"name\":\"Coruscant\",\"rotation_period\":\"24\",\"orbital_period\":\"368\",\"diameter\":\"12240\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"cityscape, mountains\",\"surface_water\":\"unknown\",\"population\":\"1000000000000\",\"residents\":[\"https://swapi.co/api/people/34/\",\"https://swapi.co/api/people/55/\",\"https://swapi.co/api/people/74/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\"],\"created\":\"2014-12-10T11:54:13.921000Z\",\"edited\":\"2014-12-20T20:58:18.432000Z\",\"url\":\"https://swapi.co/api/planets/9/\"},\"https://swapi.co/api/planets/10/\":{\"name\":\"Kamino\",\"rotation_period\":\"27\",\"orbital_period\":\"463\",\"diameter\":\"19720\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"ocean\",\"surface_water\":\"100\",\"population\":\"1000000000\",\"residents\":[\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/72/\",\"https://swapi.co/api/people/73/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-10T12:45:06.577000Z\",\"edited\":\"2014-12-20T20:58:18.434000Z\",\"url\":\"https://swapi.co/api/planets/10/\"},\"https://swapi.co/api/planets/11/\":{\"name\":\"Geonosis\",\"rotation_period\":\"30\",\"orbital_period\":\"256\",\"diameter\":\"11370\",\"climate\":\"temperate, arid\",\"gravity\":\"0.9 standard\",\"terrain\":\"rock, desert, mountain, barren\",\"surface_water\":\"5\",\"population\":\"100000000000\",\"residents\":[\"https://swapi.co/api/people/63/\"],\"films\":[\"https://swapi.co/api/films/5/\"],\"created\":\"2014-12-10T12:47:22.350000Z\",\"edited\":\"2014-12-20T20:58:18.437000Z\",\"url\":\"https://swapi.co/api/planets/11/\"},\"https://swapi.co/api/planets/?page=2\":{\"count\":61,\"next\":\"https://swapi.co/api/planets/?page=3\",\"previous\":\"https://swapi.co/api/planets/?page=1\",\"results\":[{\"name\":\"Utapau\",\"rotation_period\":\"27\",\"orbital_period\":\"351\",\"diameter\":\"12900\",\"climate\":\"temperate, arid, windy\",\"gravity\":\"1 standard\",\"terrain\":\"scrublands, savanna, canyons, sinkholes\",\"surface_water\":\"0.9\",\"population\":\"95000000\",\"residents\":[\"https://swapi.co/api/people/83/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T12:49:01.491000Z\",\"edited\":\"2014-12-20T20:58:18.439000Z\",\"url\":\"https://swapi.co/api/planets/12/\"},{\"name\":\"Mustafar\",\"rotation_period\":\"36\",\"orbital_period\":\"412\",\"diameter\":\"4200\",\"climate\":\"hot\",\"gravity\":\"1 standard\",\"terrain\":\"volcanoes, lava rivers, mountains, caves\",\"surface_water\":\"0\",\"population\":\"20000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T12:50:16.526000Z\",\"edited\":\"2014-12-20T20:58:18.440000Z\",\"url\":\"https://swapi.co/api/planets/13/\"},{\"name\":\"Kashyyyk\",\"rotation_period\":\"26\",\"orbital_period\":\"381\",\"diameter\":\"12765\",\"climate\":\"tropical\",\"gravity\":\"1 standard\",\"terrain\":\"jungle, forests, lakes, rivers\",\"surface_water\":\"60\",\"population\":\"45000000\",\"residents\":[\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/80/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:32:00.124000Z\",\"edited\":\"2014-12-20T20:58:18.442000Z\",\"url\":\"https://swapi.co/api/planets/14/\"},{\"name\":\"Polis Massa\",\"rotation_period\":\"24\",\"orbital_period\":\"590\",\"diameter\":\"0\",\"climate\":\"artificial temperate \",\"gravity\":\"0.56 standard\",\"terrain\":\"airless asteroid\",\"surface_water\":\"0\",\"population\":\"1000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:33:46.405000Z\",\"edited\":\"2014-12-20T20:58:18.444000Z\",\"url\":\"https://swapi.co/api/planets/15/\"},{\"name\":\"Mygeeto\",\"rotation_period\":\"12\",\"orbital_period\":\"167\",\"diameter\":\"10088\",\"climate\":\"frigid\",\"gravity\":\"1 standard\",\"terrain\":\"glaciers, mountains, ice canyons\",\"surface_water\":\"unknown\",\"population\":\"19000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:43:39.139000Z\",\"edited\":\"2014-12-20T20:58:18.446000Z\",\"url\":\"https://swapi.co/api/planets/16/\"},{\"name\":\"Felucia\",\"rotation_period\":\"34\",\"orbital_period\":\"231\",\"diameter\":\"9100\",\"climate\":\"hot, humid\",\"gravity\":\"0.75 standard\",\"terrain\":\"fungus forests\",\"surface_water\":\"unknown\",\"population\":\"8500000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:44:50.397000Z\",\"edited\":\"2014-12-20T20:58:18.447000Z\",\"url\":\"https://swapi.co/api/planets/17/\"},{\"name\":\"Cato Neimoidia\",\"rotation_period\":\"25\",\"orbital_period\":\"278\",\"diameter\":\"0\",\"climate\":\"temperate, moist\",\"gravity\":\"1 standard\",\"terrain\":\"mountains, fields, forests, rock arches\",\"surface_water\":\"unknown\",\"population\":\"10000000\",\"residents\":[\"https://swapi.co/api/people/33/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:46:28.704000Z\",\"edited\":\"2014-12-20T20:58:18.449000Z\",\"url\":\"https://swapi.co/api/planets/18/\"},{\"name\":\"Saleucami\",\"rotation_period\":\"26\",\"orbital_period\":\"392\",\"diameter\":\"14920\",\"climate\":\"hot\",\"gravity\":\"unknown\",\"terrain\":\"caves, desert, mountains, volcanoes\",\"surface_water\":\"unknown\",\"population\":\"1400000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:47:46.874000Z\",\"edited\":\"2014-12-20T20:58:18.450000Z\",\"url\":\"https://swapi.co/api/planets/19/\"},{\"name\":\"Stewjon\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"0\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"grass\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/10/\"],\"films\":[],\"created\":\"2014-12-10T16:16:26.566000Z\",\"edited\":\"2014-12-20T20:58:18.452000Z\",\"url\":\"https://swapi.co/api/planets/20/\"},{\"name\":\"Eriadu\",\"rotation_period\":\"24\",\"orbital_period\":\"360\",\"diameter\":\"13490\",\"climate\":\"polluted\",\"gravity\":\"1 standard\",\"terrain\":\"cityscape\",\"surface_water\":\"unknown\",\"population\":\"22000000000\",\"residents\":[\"https://swapi.co/api/people/12/\"],\"films\":[],\"created\":\"2014-12-10T16:26:54.384000Z\",\"edited\":\"2014-12-20T20:58:18.454000Z\",\"url\":\"https://swapi.co/api/planets/21/\"}]},\"https://swapi.co/api/planets/12/\":{\"name\":\"Utapau\",\"rotation_period\":\"27\",\"orbital_period\":\"351\",\"diameter\":\"12900\",\"climate\":\"temperate, arid, windy\",\"gravity\":\"1 standard\",\"terrain\":\"scrublands, savanna, canyons, sinkholes\",\"surface_water\":\"0.9\",\"population\":\"95000000\",\"residents\":[\"https://swapi.co/api/people/83/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T12:49:01.491000Z\",\"edited\":\"2014-12-20T20:58:18.439000Z\",\"url\":\"https://swapi.co/api/planets/12/\"},\"https://swapi.co/api/planets/13/\":{\"name\":\"Mustafar\",\"rotation_period\":\"36\",\"orbital_period\":\"412\",\"diameter\":\"4200\",\"climate\":\"hot\",\"gravity\":\"1 standard\",\"terrain\":\"volcanoes, lava rivers, mountains, caves\",\"surface_water\":\"0\",\"population\":\"20000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T12:50:16.526000Z\",\"edited\":\"2014-12-20T20:58:18.440000Z\",\"url\":\"https://swapi.co/api/planets/13/\"},\"https://swapi.co/api/planets/14/\":{\"name\":\"Kashyyyk\",\"rotation_period\":\"26\",\"orbital_period\":\"381\",\"diameter\":\"12765\",\"climate\":\"tropical\",\"gravity\":\"1 standard\",\"terrain\":\"jungle, forests, lakes, rivers\",\"surface_water\":\"60\",\"population\":\"45000000\",\"residents\":[\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/80/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:32:00.124000Z\",\"edited\":\"2014-12-20T20:58:18.442000Z\",\"url\":\"https://swapi.co/api/planets/14/\"},\"https://swapi.co/api/planets/15/\":{\"name\":\"Polis Massa\",\"rotation_period\":\"24\",\"orbital_period\":\"590\",\"diameter\":\"0\",\"climate\":\"artificial temperate \",\"gravity\":\"0.56 standard\",\"terrain\":\"airless asteroid\",\"surface_water\":\"0\",\"population\":\"1000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:33:46.405000Z\",\"edited\":\"2014-12-20T20:58:18.444000Z\",\"url\":\"https://swapi.co/api/planets/15/\"},\"https://swapi.co/api/planets/16/\":{\"name\":\"Mygeeto\",\"rotation_period\":\"12\",\"orbital_period\":\"167\",\"diameter\":\"10088\",\"climate\":\"frigid\",\"gravity\":\"1 standard\",\"terrain\":\"glaciers, mountains, ice canyons\",\"surface_water\":\"unknown\",\"population\":\"19000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:43:39.139000Z\",\"edited\":\"2014-12-20T20:58:18.446000Z\",\"url\":\"https://swapi.co/api/planets/16/\"},\"https://swapi.co/api/planets/17/\":{\"name\":\"Felucia\",\"rotation_period\":\"34\",\"orbital_period\":\"231\",\"diameter\":\"9100\",\"climate\":\"hot, humid\",\"gravity\":\"0.75 standard\",\"terrain\":\"fungus forests\",\"surface_water\":\"unknown\",\"population\":\"8500000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:44:50.397000Z\",\"edited\":\"2014-12-20T20:58:18.447000Z\",\"url\":\"https://swapi.co/api/planets/17/\"},\"https://swapi.co/api/planets/18/\":{\"name\":\"Cato Neimoidia\",\"rotation_period\":\"25\",\"orbital_period\":\"278\",\"diameter\":\"0\",\"climate\":\"temperate, moist\",\"gravity\":\"1 standard\",\"terrain\":\"mountains, fields, forests, rock arches\",\"surface_water\":\"unknown\",\"population\":\"10000000\",\"residents\":[\"https://swapi.co/api/people/33/\"],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:46:28.704000Z\",\"edited\":\"2014-12-20T20:58:18.449000Z\",\"url\":\"https://swapi.co/api/planets/18/\"},\"https://swapi.co/api/planets/19/\":{\"name\":\"Saleucami\",\"rotation_period\":\"26\",\"orbital_period\":\"392\",\"diameter\":\"14920\",\"climate\":\"hot\",\"gravity\":\"unknown\",\"terrain\":\"caves, desert, mountains, volcanoes\",\"surface_water\":\"unknown\",\"population\":\"1400000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/6/\"],\"created\":\"2014-12-10T13:47:46.874000Z\",\"edited\":\"2014-12-20T20:58:18.450000Z\",\"url\":\"https://swapi.co/api/planets/19/\"},\"https://swapi.co/api/planets/20/\":{\"name\":\"Stewjon\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"0\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"grass\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/10/\"],\"films\":[],\"created\":\"2014-12-10T16:16:26.566000Z\",\"edited\":\"2014-12-20T20:58:18.452000Z\",\"url\":\"https://swapi.co/api/planets/20/\"},\"https://swapi.co/api/planets/21/\":{\"name\":\"Eriadu\",\"rotation_period\":\"24\",\"orbital_period\":\"360\",\"diameter\":\"13490\",\"climate\":\"polluted\",\"gravity\":\"1 standard\",\"terrain\":\"cityscape\",\"surface_water\":\"unknown\",\"population\":\"22000000000\",\"residents\":[\"https://swapi.co/api/people/12/\"],\"films\":[],\"created\":\"2014-12-10T16:26:54.384000Z\",\"edited\":\"2014-12-20T20:58:18.454000Z\",\"url\":\"https://swapi.co/api/planets/21/\"},\"https://swapi.co/api/planets/?page=3\":{\"count\":61,\"next\":\"https://swapi.co/api/planets/?page=4\",\"previous\":\"https://swapi.co/api/planets/?page=2\",\"results\":[{\"name\":\"Corellia\",\"rotation_period\":\"25\",\"orbital_period\":\"329\",\"diameter\":\"11000\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"plains, urban, hills, forests\",\"surface_water\":\"70\",\"population\":\"3000000000\",\"residents\":[\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/18/\"],\"films\":[],\"created\":\"2014-12-10T16:49:12.453000Z\",\"edited\":\"2014-12-20T20:58:18.456000Z\",\"url\":\"https://swapi.co/api/planets/22/\"},{\"name\":\"Rodia\",\"rotation_period\":\"29\",\"orbital_period\":\"305\",\"diameter\":\"7549\",\"climate\":\"hot\",\"gravity\":\"1 standard\",\"terrain\":\"jungles, oceans, urban, swamps\",\"surface_water\":\"60\",\"population\":\"1300000000\",\"residents\":[\"https://swapi.co/api/people/15/\"],\"films\":[],\"created\":\"2014-12-10T17:03:28.110000Z\",\"edited\":\"2014-12-20T20:58:18.458000Z\",\"url\":\"https://swapi.co/api/planets/23/\"},{\"name\":\"Nal Hutta\",\"rotation_period\":\"87\",\"orbital_period\":\"413\",\"diameter\":\"12150\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"urban, oceans, swamps, bogs\",\"surface_water\":\"unknown\",\"population\":\"7000000000\",\"residents\":[\"https://swapi.co/api/people/16/\"],\"films\":[],\"created\":\"2014-12-10T17:11:29.452000Z\",\"edited\":\"2014-12-20T20:58:18.460000Z\",\"url\":\"https://swapi.co/api/planets/24/\"},{\"name\":\"Dantooine\",\"rotation_period\":\"25\",\"orbital_period\":\"378\",\"diameter\":\"9830\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"oceans, savannas, mountains, grasslands\",\"surface_water\":\"unknown\",\"population\":\"1000\",\"residents\":[],\"films\":[],\"created\":\"2014-12-10T17:23:29.896000Z\",\"edited\":\"2014-12-20T20:58:18.461000Z\",\"url\":\"https://swapi.co/api/planets/25/\"},{\"name\":\"Bestine IV\",\"rotation_period\":\"26\",\"orbital_period\":\"680\",\"diameter\":\"6400\",\"climate\":\"temperate\",\"gravity\":\"unknown\",\"terrain\":\"rocky islands, oceans\",\"surface_water\":\"98\",\"population\":\"62000000\",\"residents\":[\"https://swapi.co/api/people/19/\"],\"films\":[],\"created\":\"2014-12-12T11:16:55.078000Z\",\"edited\":\"2014-12-20T20:58:18.463000Z\",\"url\":\"https://swapi.co/api/planets/26/\"},{\"name\":\"Ord Mantell\",\"rotation_period\":\"26\",\"orbital_period\":\"334\",\"diameter\":\"14050\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"plains, seas, mesas\",\"surface_water\":\"10\",\"population\":\"4000000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T12:23:41.661000Z\",\"edited\":\"2014-12-20T20:58:18.464000Z\",\"url\":\"https://swapi.co/api/planets/27/\"},{\"name\":\"unknown\",\"rotation_period\":\"0\",\"orbital_period\":\"0\",\"diameter\":\"0\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/23/\",\"https://swapi.co/api/people/29/\",\"https://swapi.co/api/people/32/\",\"https://swapi.co/api/people/75/\",\"https://swapi.co/api/people/84/\",\"https://swapi.co/api/people/85/\",\"https://swapi.co/api/people/86/\",\"https://swapi.co/api/people/87/\",\"https://swapi.co/api/people/88/\"],\"films\":[],\"created\":\"2014-12-15T12:25:59.569000Z\",\"edited\":\"2014-12-20T20:58:18.466000Z\",\"url\":\"https://swapi.co/api/planets/28/\"},{\"name\":\"Trandosha\",\"rotation_period\":\"25\",\"orbital_period\":\"371\",\"diameter\":\"0\",\"climate\":\"arid\",\"gravity\":\"0.62 standard\",\"terrain\":\"mountains, seas, grasslands, deserts\",\"surface_water\":\"unknown\",\"population\":\"42000000\",\"residents\":[\"https://swapi.co/api/people/24/\"],\"films\":[],\"created\":\"2014-12-15T12:53:47.695000Z\",\"edited\":\"2014-12-20T20:58:18.468000Z\",\"url\":\"https://swapi.co/api/planets/29/\"},{\"name\":\"Socorro\",\"rotation_period\":\"20\",\"orbital_period\":\"326\",\"diameter\":\"0\",\"climate\":\"arid\",\"gravity\":\"1 standard\",\"terrain\":\"deserts, mountains\",\"surface_water\":\"unknown\",\"population\":\"300000000\",\"residents\":[\"https://swapi.co/api/people/25/\"],\"films\":[],\"created\":\"2014-12-15T12:56:31.121000Z\",\"edited\":\"2014-12-20T20:58:18.469000Z\",\"url\":\"https://swapi.co/api/planets/30/\"},{\"name\":\"Mon Cala\",\"rotation_period\":\"21\",\"orbital_period\":\"398\",\"diameter\":\"11030\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"oceans, reefs, islands\",\"surface_water\":\"100\",\"population\":\"27000000000\",\"residents\":[\"https://swapi.co/api/people/27/\"],\"films\":[],\"created\":\"2014-12-18T11:07:01.792000Z\",\"edited\":\"2014-12-20T20:58:18.471000Z\",\"url\":\"https://swapi.co/api/planets/31/\"}]},\"https://swapi.co/api/planets/22/\":{\"name\":\"Corellia\",\"rotation_period\":\"25\",\"orbital_period\":\"329\",\"diameter\":\"11000\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"plains, urban, hills, forests\",\"surface_water\":\"70\",\"population\":\"3000000000\",\"residents\":[\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/18/\"],\"films\":[],\"created\":\"2014-12-10T16:49:12.453000Z\",\"edited\":\"2014-12-20T20:58:18.456000Z\",\"url\":\"https://swapi.co/api/planets/22/\"},\"https://swapi.co/api/planets/23/\":{\"name\":\"Rodia\",\"rotation_period\":\"29\",\"orbital_period\":\"305\",\"diameter\":\"7549\",\"climate\":\"hot\",\"gravity\":\"1 standard\",\"terrain\":\"jungles, oceans, urban, swamps\",\"surface_water\":\"60\",\"population\":\"1300000000\",\"residents\":[\"https://swapi.co/api/people/15/\"],\"films\":[],\"created\":\"2014-12-10T17:03:28.110000Z\",\"edited\":\"2014-12-20T20:58:18.458000Z\",\"url\":\"https://swapi.co/api/planets/23/\"},\"https://swapi.co/api/planets/24/\":{\"name\":\"Nal Hutta\",\"rotation_period\":\"87\",\"orbital_period\":\"413\",\"diameter\":\"12150\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"urban, oceans, swamps, bogs\",\"surface_water\":\"unknown\",\"population\":\"7000000000\",\"residents\":[\"https://swapi.co/api/people/16/\"],\"films\":[],\"created\":\"2014-12-10T17:11:29.452000Z\",\"edited\":\"2014-12-20T20:58:18.460000Z\",\"url\":\"https://swapi.co/api/planets/24/\"},\"https://swapi.co/api/planets/25/\":{\"name\":\"Dantooine\",\"rotation_period\":\"25\",\"orbital_period\":\"378\",\"diameter\":\"9830\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"oceans, savannas, mountains, grasslands\",\"surface_water\":\"unknown\",\"population\":\"1000\",\"residents\":[],\"films\":[],\"created\":\"2014-12-10T17:23:29.896000Z\",\"edited\":\"2014-12-20T20:58:18.461000Z\",\"url\":\"https://swapi.co/api/planets/25/\"},\"https://swapi.co/api/planets/26/\":{\"name\":\"Bestine IV\",\"rotation_period\":\"26\",\"orbital_period\":\"680\",\"diameter\":\"6400\",\"climate\":\"temperate\",\"gravity\":\"unknown\",\"terrain\":\"rocky islands, oceans\",\"surface_water\":\"98\",\"population\":\"62000000\",\"residents\":[\"https://swapi.co/api/people/19/\"],\"films\":[],\"created\":\"2014-12-12T11:16:55.078000Z\",\"edited\":\"2014-12-20T20:58:18.463000Z\",\"url\":\"https://swapi.co/api/planets/26/\"},\"https://swapi.co/api/planets/27/\":{\"name\":\"Ord Mantell\",\"rotation_period\":\"26\",\"orbital_period\":\"334\",\"diameter\":\"14050\",\"climate\":\"temperate\",\"gravity\":\"1 standard\",\"terrain\":\"plains, seas, mesas\",\"surface_water\":\"10\",\"population\":\"4000000000\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/2/\"],\"created\":\"2014-12-15T12:23:41.661000Z\",\"edited\":\"2014-12-20T20:58:18.464000Z\",\"url\":\"https://swapi.co/api/planets/27/\"},\"https://swapi.co/api/planets/28/\":{\"name\":\"unknown\",\"rotation_period\":\"0\",\"orbital_period\":\"0\",\"diameter\":\"0\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/23/\",\"https://swapi.co/api/people/29/\",\"https://swapi.co/api/people/32/\",\"https://swapi.co/api/people/75/\",\"https://swapi.co/api/people/84/\",\"https://swapi.co/api/people/85/\",\"https://swapi.co/api/people/86/\",\"https://swapi.co/api/people/87/\",\"https://swapi.co/api/people/88/\"],\"films\":[],\"created\":\"2014-12-15T12:25:59.569000Z\",\"edited\":\"2014-12-20T20:58:18.466000Z\",\"url\":\"https://swapi.co/api/planets/28/\"},\"https://swapi.co/api/planets/29/\":{\"name\":\"Trandosha\",\"rotation_period\":\"25\",\"orbital_period\":\"371\",\"diameter\":\"0\",\"climate\":\"arid\",\"gravity\":\"0.62 standard\",\"terrain\":\"mountains, seas, grasslands, deserts\",\"surface_water\":\"unknown\",\"population\":\"42000000\",\"residents\":[\"https://swapi.co/api/people/24/\"],\"films\":[],\"created\":\"2014-12-15T12:53:47.695000Z\",\"edited\":\"2014-12-20T20:58:18.468000Z\",\"url\":\"https://swapi.co/api/planets/29/\"},\"https://swapi.co/api/planets/30/\":{\"name\":\"Socorro\",\"rotation_period\":\"20\",\"orbital_period\":\"326\",\"diameter\":\"0\",\"climate\":\"arid\",\"gravity\":\"1 standard\",\"terrain\":\"deserts, mountains\",\"surface_water\":\"unknown\",\"population\":\"300000000\",\"residents\":[\"https://swapi.co/api/people/25/\"],\"films\":[],\"created\":\"2014-12-15T12:56:31.121000Z\",\"edited\":\"2014-12-20T20:58:18.469000Z\",\"url\":\"https://swapi.co/api/planets/30/\"},\"https://swapi.co/api/planets/31/\":{\"name\":\"Mon Cala\",\"rotation_period\":\"21\",\"orbital_period\":\"398\",\"diameter\":\"11030\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"oceans, reefs, islands\",\"surface_water\":\"100\",\"population\":\"27000000000\",\"residents\":[\"https://swapi.co/api/people/27/\"],\"films\":[],\"created\":\"2014-12-18T11:07:01.792000Z\",\"edited\":\"2014-12-20T20:58:18.471000Z\",\"url\":\"https://swapi.co/api/planets/31/\"},\"https://swapi.co/api/planets/?page=4\":{\"count\":61,\"next\":\"https://swapi.co/api/planets/?page=5\",\"previous\":\"https://swapi.co/api/planets/?page=3\",\"results\":[{\"name\":\"Chandrila\",\"rotation_period\":\"20\",\"orbital_period\":\"368\",\"diameter\":\"13500\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"plains, forests\",\"surface_water\":\"40\",\"population\":\"1200000000\",\"residents\":[\"https://swapi.co/api/people/28/\"],\"films\":[],\"created\":\"2014-12-18T11:11:51.872000Z\",\"edited\":\"2014-12-20T20:58:18.472000Z\",\"url\":\"https://swapi.co/api/planets/32/\"},{\"name\":\"Sullust\",\"rotation_period\":\"20\",\"orbital_period\":\"263\",\"diameter\":\"12780\",\"climate\":\"superheated\",\"gravity\":\"1\",\"terrain\":\"mountains, volcanoes, rocky deserts\",\"surface_water\":\"5\",\"population\":\"18500000000\",\"residents\":[\"https://swapi.co/api/people/31/\"],\"films\":[],\"created\":\"2014-12-18T11:25:40.243000Z\",\"edited\":\"2014-12-20T20:58:18.474000Z\",\"url\":\"https://swapi.co/api/planets/33/\"},{\"name\":\"Toydaria\",\"rotation_period\":\"21\",\"orbital_period\":\"184\",\"diameter\":\"7900\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"swamps, lakes\",\"surface_water\":\"unknown\",\"population\":\"11000000\",\"residents\":[\"https://swapi.co/api/people/40/\"],\"films\":[],\"created\":\"2014-12-19T17:47:54.403000Z\",\"edited\":\"2014-12-20T20:58:18.476000Z\",\"url\":\"https://swapi.co/api/planets/34/\"},{\"name\":\"Malastare\",\"rotation_period\":\"26\",\"orbital_period\":\"201\",\"diameter\":\"18880\",\"climate\":\"arid, temperate, tropical\",\"gravity\":\"1.56\",\"terrain\":\"swamps, deserts, jungles, mountains\",\"surface_water\":\"unknown\",\"population\":\"2000000000\",\"residents\":[\"https://swapi.co/api/people/41/\"],\"films\":[],\"created\":\"2014-12-19T17:52:13.106000Z\",\"edited\":\"2014-12-20T20:58:18.478000Z\",\"url\":\"https://swapi.co/api/planets/35/\"},{\"name\":\"Dathomir\",\"rotation_period\":\"24\",\"orbital_period\":\"491\",\"diameter\":\"10480\",\"climate\":\"temperate\",\"gravity\":\"0.9\",\"terrain\":\"forests, deserts, savannas\",\"surface_water\":\"unknown\",\"population\":\"5200\",\"residents\":[\"https://swapi.co/api/people/44/\"],\"films\":[],\"created\":\"2014-12-19T18:00:40.142000Z\",\"edited\":\"2014-12-20T20:58:18.480000Z\",\"url\":\"https://swapi.co/api/planets/36/\"},{\"name\":\"Ryloth\",\"rotation_period\":\"30\",\"orbital_period\":\"305\",\"diameter\":\"10600\",\"climate\":\"temperate, arid, subartic\",\"gravity\":\"1\",\"terrain\":\"mountains, valleys, deserts, tundra\",\"surface_water\":\"5\",\"population\":\"1500000000\",\"residents\":[\"https://swapi.co/api/people/45/\",\"https://swapi.co/api/people/46/\"],\"films\":[],\"created\":\"2014-12-20T09:46:25.740000Z\",\"edited\":\"2014-12-20T20:58:18.481000Z\",\"url\":\"https://swapi.co/api/planets/37/\"},{\"name\":\"Aleen Minor\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/47/\"],\"films\":[],\"created\":\"2014-12-20T09:52:23.452000Z\",\"edited\":\"2014-12-20T20:58:18.483000Z\",\"url\":\"https://swapi.co/api/planets/38/\"},{\"name\":\"Vulpter\",\"rotation_period\":\"22\",\"orbital_period\":\"391\",\"diameter\":\"14900\",\"climate\":\"temperate, artic\",\"gravity\":\"1\",\"terrain\":\"urban, barren\",\"surface_water\":\"unknown\",\"population\":\"421000000\",\"residents\":[\"https://swapi.co/api/people/48/\"],\"films\":[],\"created\":\"2014-12-20T09:56:58.874000Z\",\"edited\":\"2014-12-20T20:58:18.485000Z\",\"url\":\"https://swapi.co/api/planets/39/\"},{\"name\":\"Troiken\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"desert, tundra, rainforests, mountains\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/49/\"],\"films\":[],\"created\":\"2014-12-20T10:01:37.395000Z\",\"edited\":\"2014-12-20T20:58:18.487000Z\",\"url\":\"https://swapi.co/api/planets/40/\"},{\"name\":\"Tund\",\"rotation_period\":\"48\",\"orbital_period\":\"1770\",\"diameter\":\"12190\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"barren, ash\",\"surface_water\":\"unknown\",\"population\":\"0\",\"residents\":[\"https://swapi.co/api/people/50/\"],\"films\":[],\"created\":\"2014-12-20T10:07:29.578000Z\",\"edited\":\"2014-12-20T20:58:18.489000Z\",\"url\":\"https://swapi.co/api/planets/41/\"}]},\"https://swapi.co/api/planets/32/\":{\"name\":\"Chandrila\",\"rotation_period\":\"20\",\"orbital_period\":\"368\",\"diameter\":\"13500\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"plains, forests\",\"surface_water\":\"40\",\"population\":\"1200000000\",\"residents\":[\"https://swapi.co/api/people/28/\"],\"films\":[],\"created\":\"2014-12-18T11:11:51.872000Z\",\"edited\":\"2014-12-20T20:58:18.472000Z\",\"url\":\"https://swapi.co/api/planets/32/\"},\"https://swapi.co/api/planets/33/\":{\"name\":\"Sullust\",\"rotation_period\":\"20\",\"orbital_period\":\"263\",\"diameter\":\"12780\",\"climate\":\"superheated\",\"gravity\":\"1\",\"terrain\":\"mountains, volcanoes, rocky deserts\",\"surface_water\":\"5\",\"population\":\"18500000000\",\"residents\":[\"https://swapi.co/api/people/31/\"],\"films\":[],\"created\":\"2014-12-18T11:25:40.243000Z\",\"edited\":\"2014-12-20T20:58:18.474000Z\",\"url\":\"https://swapi.co/api/planets/33/\"},\"https://swapi.co/api/planets/34/\":{\"name\":\"Toydaria\",\"rotation_period\":\"21\",\"orbital_period\":\"184\",\"diameter\":\"7900\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"swamps, lakes\",\"surface_water\":\"unknown\",\"population\":\"11000000\",\"residents\":[\"https://swapi.co/api/people/40/\"],\"films\":[],\"created\":\"2014-12-19T17:47:54.403000Z\",\"edited\":\"2014-12-20T20:58:18.476000Z\",\"url\":\"https://swapi.co/api/planets/34/\"},\"https://swapi.co/api/planets/35/\":{\"name\":\"Malastare\",\"rotation_period\":\"26\",\"orbital_period\":\"201\",\"diameter\":\"18880\",\"climate\":\"arid, temperate, tropical\",\"gravity\":\"1.56\",\"terrain\":\"swamps, deserts, jungles, mountains\",\"surface_water\":\"unknown\",\"population\":\"2000000000\",\"residents\":[\"https://swapi.co/api/people/41/\"],\"films\":[],\"created\":\"2014-12-19T17:52:13.106000Z\",\"edited\":\"2014-12-20T20:58:18.478000Z\",\"url\":\"https://swapi.co/api/planets/35/\"},\"https://swapi.co/api/planets/36/\":{\"name\":\"Dathomir\",\"rotation_period\":\"24\",\"orbital_period\":\"491\",\"diameter\":\"10480\",\"climate\":\"temperate\",\"gravity\":\"0.9\",\"terrain\":\"forests, deserts, savannas\",\"surface_water\":\"unknown\",\"population\":\"5200\",\"residents\":[\"https://swapi.co/api/people/44/\"],\"films\":[],\"created\":\"2014-12-19T18:00:40.142000Z\",\"edited\":\"2014-12-20T20:58:18.480000Z\",\"url\":\"https://swapi.co/api/planets/36/\"},\"https://swapi.co/api/planets/37/\":{\"name\":\"Ryloth\",\"rotation_period\":\"30\",\"orbital_period\":\"305\",\"diameter\":\"10600\",\"climate\":\"temperate, arid, subartic\",\"gravity\":\"1\",\"terrain\":\"mountains, valleys, deserts, tundra\",\"surface_water\":\"5\",\"population\":\"1500000000\",\"residents\":[\"https://swapi.co/api/people/45/\",\"https://swapi.co/api/people/46/\"],\"films\":[],\"created\":\"2014-12-20T09:46:25.740000Z\",\"edited\":\"2014-12-20T20:58:18.481000Z\",\"url\":\"https://swapi.co/api/planets/37/\"},\"https://swapi.co/api/planets/38/\":{\"name\":\"Aleen Minor\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/47/\"],\"films\":[],\"created\":\"2014-12-20T09:52:23.452000Z\",\"edited\":\"2014-12-20T20:58:18.483000Z\",\"url\":\"https://swapi.co/api/planets/38/\"},\"https://swapi.co/api/planets/39/\":{\"name\":\"Vulpter\",\"rotation_period\":\"22\",\"orbital_period\":\"391\",\"diameter\":\"14900\",\"climate\":\"temperate, artic\",\"gravity\":\"1\",\"terrain\":\"urban, barren\",\"surface_water\":\"unknown\",\"population\":\"421000000\",\"residents\":[\"https://swapi.co/api/people/48/\"],\"films\":[],\"created\":\"2014-12-20T09:56:58.874000Z\",\"edited\":\"2014-12-20T20:58:18.485000Z\",\"url\":\"https://swapi.co/api/planets/39/\"},\"https://swapi.co/api/planets/40/\":{\"name\":\"Troiken\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"desert, tundra, rainforests, mountains\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/49/\"],\"films\":[],\"created\":\"2014-12-20T10:01:37.395000Z\",\"edited\":\"2014-12-20T20:58:18.487000Z\",\"url\":\"https://swapi.co/api/planets/40/\"},\"https://swapi.co/api/planets/41/\":{\"name\":\"Tund\",\"rotation_period\":\"48\",\"orbital_period\":\"1770\",\"diameter\":\"12190\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"barren, ash\",\"surface_water\":\"unknown\",\"population\":\"0\",\"residents\":[\"https://swapi.co/api/people/50/\"],\"films\":[],\"created\":\"2014-12-20T10:07:29.578000Z\",\"edited\":\"2014-12-20T20:58:18.489000Z\",\"url\":\"https://swapi.co/api/planets/41/\"},\"https://swapi.co/api/planets/?page=5\":{\"count\":61,\"next\":\"https://swapi.co/api/planets/?page=6\",\"previous\":\"https://swapi.co/api/planets/?page=4\",\"results\":[{\"name\":\"Haruun Kal\",\"rotation_period\":\"25\",\"orbital_period\":\"383\",\"diameter\":\"10120\",\"climate\":\"temperate\",\"gravity\":\"0.98\",\"terrain\":\"toxic cloudsea, plateaus, volcanoes\",\"surface_water\":\"unknown\",\"population\":\"705300\",\"residents\":[\"https://swapi.co/api/people/51/\"],\"films\":[],\"created\":\"2014-12-20T10:12:28.980000Z\",\"edited\":\"2014-12-20T20:58:18.491000Z\",\"url\":\"https://swapi.co/api/planets/42/\"},{\"name\":\"Cerea\",\"rotation_period\":\"27\",\"orbital_period\":\"386\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"verdant\",\"surface_water\":\"20\",\"population\":\"450000000\",\"residents\":[\"https://swapi.co/api/people/52/\"],\"films\":[],\"created\":\"2014-12-20T10:14:48.178000Z\",\"edited\":\"2014-12-20T20:58:18.493000Z\",\"url\":\"https://swapi.co/api/planets/43/\"},{\"name\":\"Glee Anselm\",\"rotation_period\":\"33\",\"orbital_period\":\"206\",\"diameter\":\"15600\",\"climate\":\"tropical, temperate\",\"gravity\":\"1\",\"terrain\":\"lakes, islands, swamps, seas\",\"surface_water\":\"80\",\"population\":\"500000000\",\"residents\":[\"https://swapi.co/api/people/53/\"],\"films\":[],\"created\":\"2014-12-20T10:18:26.110000Z\",\"edited\":\"2014-12-20T20:58:18.495000Z\",\"url\":\"https://swapi.co/api/planets/44/\"},{\"name\":\"Iridonia\",\"rotation_period\":\"29\",\"orbital_period\":\"413\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"rocky canyons, acid pools\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/54/\"],\"films\":[],\"created\":\"2014-12-20T10:26:05.788000Z\",\"edited\":\"2014-12-20T20:58:18.497000Z\",\"url\":\"https://swapi.co/api/planets/45/\"},{\"name\":\"Tholoth\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[],\"films\":[],\"created\":\"2014-12-20T10:28:31.117000Z\",\"edited\":\"2014-12-20T20:58:18.498000Z\",\"url\":\"https://swapi.co/api/planets/46/\"},{\"name\":\"Iktotch\",\"rotation_period\":\"22\",\"orbital_period\":\"481\",\"diameter\":\"unknown\",\"climate\":\"arid, rocky, windy\",\"gravity\":\"1\",\"terrain\":\"rocky\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/56/\"],\"films\":[],\"created\":\"2014-12-20T10:31:32.413000Z\",\"edited\":\"2014-12-20T20:58:18.500000Z\",\"url\":\"https://swapi.co/api/planets/47/\"},{\"name\":\"Quermia\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/57/\"],\"films\":[],\"created\":\"2014-12-20T10:34:08.249000Z\",\"edited\":\"2014-12-20T20:58:18.502000Z\",\"url\":\"https://swapi.co/api/planets/48/\"},{\"name\":\"Dorin\",\"rotation_period\":\"22\",\"orbital_period\":\"409\",\"diameter\":\"13400\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/58/\"],\"films\":[],\"created\":\"2014-12-20T10:48:36.141000Z\",\"edited\":\"2014-12-20T20:58:18.504000Z\",\"url\":\"https://swapi.co/api/planets/49/\"},{\"name\":\"Champala\",\"rotation_period\":\"27\",\"orbital_period\":\"318\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"oceans, rainforests, plateaus\",\"surface_water\":\"unknown\",\"population\":\"3500000000\",\"residents\":[\"https://swapi.co/api/people/59/\"],\"films\":[],\"created\":\"2014-12-20T10:52:51.524000Z\",\"edited\":\"2014-12-20T20:58:18.506000Z\",\"url\":\"https://swapi.co/api/planets/50/\"},{\"name\":\"Mirial\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"deserts\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/65/\"],\"films\":[],\"created\":\"2014-12-20T16:44:46.318000Z\",\"edited\":\"2014-12-20T20:58:18.508000Z\",\"url\":\"https://swapi.co/api/planets/51/\"}]},\"https://swapi.co/api/planets/42/\":{\"name\":\"Haruun Kal\",\"rotation_period\":\"25\",\"orbital_period\":\"383\",\"diameter\":\"10120\",\"climate\":\"temperate\",\"gravity\":\"0.98\",\"terrain\":\"toxic cloudsea, plateaus, volcanoes\",\"surface_water\":\"unknown\",\"population\":\"705300\",\"residents\":[\"https://swapi.co/api/people/51/\"],\"films\":[],\"created\":\"2014-12-20T10:12:28.980000Z\",\"edited\":\"2014-12-20T20:58:18.491000Z\",\"url\":\"https://swapi.co/api/planets/42/\"},\"https://swapi.co/api/planets/43/\":{\"name\":\"Cerea\",\"rotation_period\":\"27\",\"orbital_period\":\"386\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"verdant\",\"surface_water\":\"20\",\"population\":\"450000000\",\"residents\":[\"https://swapi.co/api/people/52/\"],\"films\":[],\"created\":\"2014-12-20T10:14:48.178000Z\",\"edited\":\"2014-12-20T20:58:18.493000Z\",\"url\":\"https://swapi.co/api/planets/43/\"},\"https://swapi.co/api/planets/44/\":{\"name\":\"Glee Anselm\",\"rotation_period\":\"33\",\"orbital_period\":\"206\",\"diameter\":\"15600\",\"climate\":\"tropical, temperate\",\"gravity\":\"1\",\"terrain\":\"lakes, islands, swamps, seas\",\"surface_water\":\"80\",\"population\":\"500000000\",\"residents\":[\"https://swapi.co/api/people/53/\"],\"films\":[],\"created\":\"2014-12-20T10:18:26.110000Z\",\"edited\":\"2014-12-20T20:58:18.495000Z\",\"url\":\"https://swapi.co/api/planets/44/\"},\"https://swapi.co/api/planets/45/\":{\"name\":\"Iridonia\",\"rotation_period\":\"29\",\"orbital_period\":\"413\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"rocky canyons, acid pools\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/54/\"],\"films\":[],\"created\":\"2014-12-20T10:26:05.788000Z\",\"edited\":\"2014-12-20T20:58:18.497000Z\",\"url\":\"https://swapi.co/api/planets/45/\"},\"https://swapi.co/api/planets/46/\":{\"name\":\"Tholoth\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[],\"films\":[],\"created\":\"2014-12-20T10:28:31.117000Z\",\"edited\":\"2014-12-20T20:58:18.498000Z\",\"url\":\"https://swapi.co/api/planets/46/\"},\"https://swapi.co/api/planets/47/\":{\"name\":\"Iktotch\",\"rotation_period\":\"22\",\"orbital_period\":\"481\",\"diameter\":\"unknown\",\"climate\":\"arid, rocky, windy\",\"gravity\":\"1\",\"terrain\":\"rocky\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/56/\"],\"films\":[],\"created\":\"2014-12-20T10:31:32.413000Z\",\"edited\":\"2014-12-20T20:58:18.500000Z\",\"url\":\"https://swapi.co/api/planets/47/\"},\"https://swapi.co/api/planets/48/\":{\"name\":\"Quermia\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/57/\"],\"films\":[],\"created\":\"2014-12-20T10:34:08.249000Z\",\"edited\":\"2014-12-20T20:58:18.502000Z\",\"url\":\"https://swapi.co/api/planets/48/\"},\"https://swapi.co/api/planets/49/\":{\"name\":\"Dorin\",\"rotation_period\":\"22\",\"orbital_period\":\"409\",\"diameter\":\"13400\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/58/\"],\"films\":[],\"created\":\"2014-12-20T10:48:36.141000Z\",\"edited\":\"2014-12-20T20:58:18.504000Z\",\"url\":\"https://swapi.co/api/planets/49/\"},\"https://swapi.co/api/planets/50/\":{\"name\":\"Champala\",\"rotation_period\":\"27\",\"orbital_period\":\"318\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"oceans, rainforests, plateaus\",\"surface_water\":\"unknown\",\"population\":\"3500000000\",\"residents\":[\"https://swapi.co/api/people/59/\"],\"films\":[],\"created\":\"2014-12-20T10:52:51.524000Z\",\"edited\":\"2014-12-20T20:58:18.506000Z\",\"url\":\"https://swapi.co/api/planets/50/\"},\"https://swapi.co/api/planets/51/\":{\"name\":\"Mirial\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"deserts\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/65/\"],\"films\":[],\"created\":\"2014-12-20T16:44:46.318000Z\",\"edited\":\"2014-12-20T20:58:18.508000Z\",\"url\":\"https://swapi.co/api/planets/51/\"},\"https://swapi.co/api/planets/?page=6\":{\"count\":61,\"next\":\"https://swapi.co/api/planets/?page=7\",\"previous\":\"https://swapi.co/api/planets/?page=5\",\"results\":[{\"name\":\"Serenno\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"rainforests, rivers, mountains\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/67/\"],\"films\":[],\"created\":\"2014-12-20T16:52:13.357000Z\",\"edited\":\"2014-12-20T20:58:18.510000Z\",\"url\":\"https://swapi.co/api/planets/52/\"},{\"name\":\"Concord Dawn\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"jungles, forests, deserts\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/69/\"],\"films\":[],\"created\":\"2014-12-20T16:54:39.909000Z\",\"edited\":\"2014-12-20T20:58:18.512000Z\",\"url\":\"https://swapi.co/api/planets/53/\"},{\"name\":\"Zolan\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/70/\"],\"films\":[],\"created\":\"2014-12-20T16:56:37.250000Z\",\"edited\":\"2014-12-20T20:58:18.514000Z\",\"url\":\"https://swapi.co/api/planets/54/\"},{\"name\":\"Ojom\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"frigid\",\"gravity\":\"unknown\",\"terrain\":\"oceans, glaciers\",\"surface_water\":\"100\",\"population\":\"500000000\",\"residents\":[\"https://swapi.co/api/people/71/\"],\"films\":[],\"created\":\"2014-12-20T17:27:41.286000Z\",\"edited\":\"2014-12-20T20:58:18.516000Z\",\"url\":\"https://swapi.co/api/planets/55/\"},{\"name\":\"Skako\",\"rotation_period\":\"27\",\"orbital_period\":\"384\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"urban, vines\",\"surface_water\":\"unknown\",\"population\":\"500000000000\",\"residents\":[\"https://swapi.co/api/people/76/\"],\"films\":[],\"created\":\"2014-12-20T17:50:47.864000Z\",\"edited\":\"2014-12-20T20:58:18.517000Z\",\"url\":\"https://swapi.co/api/planets/56/\"},{\"name\":\"Muunilinst\",\"rotation_period\":\"28\",\"orbital_period\":\"412\",\"diameter\":\"13800\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"plains, forests, hills, mountains\",\"surface_water\":\"25\",\"population\":\"5000000000\",\"residents\":[\"https://swapi.co/api/people/77/\"],\"films\":[],\"created\":\"2014-12-20T17:57:47.420000Z\",\"edited\":\"2014-12-20T20:58:18.519000Z\",\"url\":\"https://swapi.co/api/planets/57/\"},{\"name\":\"Shili\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"cities, savannahs, seas, plains\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/78/\"],\"films\":[],\"created\":\"2014-12-20T18:43:14.049000Z\",\"edited\":\"2014-12-20T20:58:18.521000Z\",\"url\":\"https://swapi.co/api/planets/58/\"},{\"name\":\"Kalee\",\"rotation_period\":\"23\",\"orbital_period\":\"378\",\"diameter\":\"13850\",\"climate\":\"arid, temperate, tropical\",\"gravity\":\"1\",\"terrain\":\"rainforests, cliffs, canyons, seas\",\"surface_water\":\"unknown\",\"population\":\"4000000000\",\"residents\":[\"https://swapi.co/api/people/79/\"],\"films\":[],\"created\":\"2014-12-20T19:43:51.278000Z\",\"edited\":\"2014-12-20T20:58:18.523000Z\",\"url\":\"https://swapi.co/api/planets/59/\"},{\"name\":\"Umbara\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/82/\"],\"films\":[],\"created\":\"2014-12-20T20:18:36.256000Z\",\"edited\":\"2014-12-20T20:58:18.525000Z\",\"url\":\"https://swapi.co/api/planets/60/\"},{\"name\":\"Tatooine\",\"rotation_period\":\"23\",\"orbital_period\":\"304\",\"diameter\":\"10465\",\"climate\":\"arid\",\"gravity\":\"1 standard\",\"terrain\":\"desert\",\"surface_water\":\"1\",\"population\":\"200000\",\"residents\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/8/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/62/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-09T13:50:49.641000Z\",\"edited\":\"2014-12-21T20:48:04.175778Z\",\"url\":\"https://swapi.co/api/planets/1/\"}]},\"https://swapi.co/api/planets/52/\":{\"name\":\"Serenno\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"rainforests, rivers, mountains\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/67/\"],\"films\":[],\"created\":\"2014-12-20T16:52:13.357000Z\",\"edited\":\"2014-12-20T20:58:18.510000Z\",\"url\":\"https://swapi.co/api/planets/52/\"},\"https://swapi.co/api/planets/53/\":{\"name\":\"Concord Dawn\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"jungles, forests, deserts\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/69/\"],\"films\":[],\"created\":\"2014-12-20T16:54:39.909000Z\",\"edited\":\"2014-12-20T20:58:18.512000Z\",\"url\":\"https://swapi.co/api/planets/53/\"},\"https://swapi.co/api/planets/54/\":{\"name\":\"Zolan\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/70/\"],\"films\":[],\"created\":\"2014-12-20T16:56:37.250000Z\",\"edited\":\"2014-12-20T20:58:18.514000Z\",\"url\":\"https://swapi.co/api/planets/54/\"},\"https://swapi.co/api/planets/55/\":{\"name\":\"Ojom\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"frigid\",\"gravity\":\"unknown\",\"terrain\":\"oceans, glaciers\",\"surface_water\":\"100\",\"population\":\"500000000\",\"residents\":[\"https://swapi.co/api/people/71/\"],\"films\":[],\"created\":\"2014-12-20T17:27:41.286000Z\",\"edited\":\"2014-12-20T20:58:18.516000Z\",\"url\":\"https://swapi.co/api/planets/55/\"},\"https://swapi.co/api/planets/56/\":{\"name\":\"Skako\",\"rotation_period\":\"27\",\"orbital_period\":\"384\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"urban, vines\",\"surface_water\":\"unknown\",\"population\":\"500000000000\",\"residents\":[\"https://swapi.co/api/people/76/\"],\"films\":[],\"created\":\"2014-12-20T17:50:47.864000Z\",\"edited\":\"2014-12-20T20:58:18.517000Z\",\"url\":\"https://swapi.co/api/planets/56/\"},\"https://swapi.co/api/planets/57/\":{\"name\":\"Muunilinst\",\"rotation_period\":\"28\",\"orbital_period\":\"412\",\"diameter\":\"13800\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"plains, forests, hills, mountains\",\"surface_water\":\"25\",\"population\":\"5000000000\",\"residents\":[\"https://swapi.co/api/people/77/\"],\"films\":[],\"created\":\"2014-12-20T17:57:47.420000Z\",\"edited\":\"2014-12-20T20:58:18.519000Z\",\"url\":\"https://swapi.co/api/planets/57/\"},\"https://swapi.co/api/planets/58/\":{\"name\":\"Shili\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"temperate\",\"gravity\":\"1\",\"terrain\":\"cities, savannahs, seas, plains\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/78/\"],\"films\":[],\"created\":\"2014-12-20T18:43:14.049000Z\",\"edited\":\"2014-12-20T20:58:18.521000Z\",\"url\":\"https://swapi.co/api/planets/58/\"},\"https://swapi.co/api/planets/59/\":{\"name\":\"Kalee\",\"rotation_period\":\"23\",\"orbital_period\":\"378\",\"diameter\":\"13850\",\"climate\":\"arid, temperate, tropical\",\"gravity\":\"1\",\"terrain\":\"rainforests, cliffs, canyons, seas\",\"surface_water\":\"unknown\",\"population\":\"4000000000\",\"residents\":[\"https://swapi.co/api/people/79/\"],\"films\":[],\"created\":\"2014-12-20T19:43:51.278000Z\",\"edited\":\"2014-12-20T20:58:18.523000Z\",\"url\":\"https://swapi.co/api/planets/59/\"},\"https://swapi.co/api/planets/60/\":{\"name\":\"Umbara\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"unknown\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[\"https://swapi.co/api/people/82/\"],\"films\":[],\"created\":\"2014-12-20T20:18:36.256000Z\",\"edited\":\"2014-12-20T20:58:18.525000Z\",\"url\":\"https://swapi.co/api/planets/60/\"},\"https://swapi.co/api/planets/1/\":{\"name\":\"Tatooine\",\"rotation_period\":\"23\",\"orbital_period\":\"304\",\"diameter\":\"10465\",\"climate\":\"arid\",\"gravity\":\"1 standard\",\"terrain\":\"desert\",\"surface_water\":\"1\",\"population\":\"200000\",\"residents\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/8/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/62/\"],\"films\":[\"https://swapi.co/api/films/5/\",\"https://swapi.co/api/films/4/\",\"https://swapi.co/api/films/6/\",\"https://swapi.co/api/films/3/\",\"https://swapi.co/api/films/1/\"],\"created\":\"2014-12-09T13:50:49.641000Z\",\"edited\":\"2014-12-21T20:48:04.175778Z\",\"url\":\"https://swapi.co/api/planets/1/\"},\"https://swapi.co/api/planets/?page=7\":{\"count\":61,\"next\":null,\"previous\":\"https://swapi.co/api/planets/?page=6\",\"results\":[{\"name\":\"Jakku\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"deserts\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/7/\"],\"created\":\"2015-04-17T06:55:57.556495Z\",\"edited\":\"2015-04-17T06:55:57.556551Z\",\"url\":\"https://swapi.co/api/planets/61/\"}]},\"https://swapi.co/api/planets/61/\":{\"name\":\"Jakku\",\"rotation_period\":\"unknown\",\"orbital_period\":\"unknown\",\"diameter\":\"unknown\",\"climate\":\"unknown\",\"gravity\":\"unknown\",\"terrain\":\"deserts\",\"surface_water\":\"unknown\",\"population\":\"unknown\",\"residents\":[],\"films\":[\"https://swapi.co/api/films/7/\"],\"created\":\"2015-04-17T06:55:57.556495Z\",\"edited\":\"2015-04-17T06:55:57.556551Z\",\"url\":\"https://swapi.co/api/planets/61/\"},\"https://swapi.co/api/films/\":{\"count\":7,\"next\":null,\"previous\":null,\"results\":[{\"title\":\"A New Hope\",\"episode_id\":4,\"opening_crawl\":\"It is a period of civil war.\\r\\nRebel spaceships, striking\\r\\nfrom a hidden base, have won\\r\\ntheir first victory against\\r\\nthe evil Galactic Empire.\\r\\n\\r\\nDuring the battle, Rebel\\r\\nspies managed to steal secret\\r\\nplans to the Empire's\\r\\nultimate weapon, the DEATH\\r\\nSTAR, an armored space\\r\\nstation with enough power\\r\\nto destroy an entire planet.\\r\\n\\r\\nPursued by the Empire's\\r\\nsinister agents, Princess\\r\\nLeia races home aboard her\\r\\nstarship, custodian of the\\r\\nstolen plans that can save her\\r\\npeople and restore\\r\\nfreedom to the galaxy....\",\"director\":\"George Lucas\",\"producer\":\"Gary Kurtz, Rick McCallum\",\"release_date\":\"1977-05-25\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/8/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/12/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/15/\",\"https://swapi.co/api/people/16/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/19/\",\"https://swapi.co/api/people/81/\"],\"planets\":[\"https://swapi.co/api/planets/2/\",\"https://swapi.co/api/planets/3/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/2/\",\"https://swapi.co/api/starships/3/\",\"https://swapi.co/api/starships/5/\",\"https://swapi.co/api/starships/9/\",\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/11/\",\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/13/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/4/\",\"https://swapi.co/api/vehicles/6/\",\"https://swapi.co/api/vehicles/7/\",\"https://swapi.co/api/vehicles/8/\"],\"species\":[\"https://swapi.co/api/species/5/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/4/\"],\"created\":\"2014-12-10T14:23:31.880000Z\",\"edited\":\"2015-04-11T09:46:52.774897Z\",\"url\":\"https://swapi.co/api/films/1/\"},{\"title\":\"Attack of the Clones\",\"episode_id\":2,\"opening_crawl\":\"There is unrest in the Galactic\\r\\nSenate. Several thousand solar\\r\\nsystems have declared their\\r\\nintentions to leave the Republic.\\r\\n\\r\\nThis separatist movement,\\r\\nunder the leadership of the\\r\\nmysterious Count Dooku, has\\r\\nmade it difficult for the limited\\r\\nnumber of Jedi Knights to maintain \\r\\npeace and order in the galaxy.\\r\\n\\r\\nSenator Amidala, the former\\r\\nQueen of Naboo, is returning\\r\\nto the Galactic Senate to vote\\r\\non the critical issue of creating\\r\\nan ARMY OF THE REPUBLIC\\r\\nto assist the overwhelmed\\r\\nJedi....\",\"director\":\"George Lucas\",\"producer\":\"Rick McCallum\",\"release_date\":\"2002-05-16\",\"characters\":[\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/33/\",\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/40/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/46/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/52/\",\"https://swapi.co/api/people/53/\",\"https://swapi.co/api/people/58/\",\"https://swapi.co/api/people/59/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/61/\",\"https://swapi.co/api/people/62/\",\"https://swapi.co/api/people/63/\",\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/65/\",\"https://swapi.co/api/people/66/\",\"https://swapi.co/api/people/67/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/69/\",\"https://swapi.co/api/people/70/\",\"https://swapi.co/api/people/71/\",\"https://swapi.co/api/people/72/\",\"https://swapi.co/api/people/73/\",\"https://swapi.co/api/people/74/\",\"https://swapi.co/api/people/75/\",\"https://swapi.co/api/people/76/\",\"https://swapi.co/api/people/77/\",\"https://swapi.co/api/people/78/\",\"https://swapi.co/api/people/82/\",\"https://swapi.co/api/people/35/\"],\"planets\":[\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/10/\",\"https://swapi.co/api/planets/11/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/21/\",\"https://swapi.co/api/starships/39/\",\"https://swapi.co/api/starships/43/\",\"https://swapi.co/api/starships/47/\",\"https://swapi.co/api/starships/48/\",\"https://swapi.co/api/starships/49/\",\"https://swapi.co/api/starships/32/\",\"https://swapi.co/api/starships/52/\",\"https://swapi.co/api/starships/58/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/4/\",\"https://swapi.co/api/vehicles/44/\",\"https://swapi.co/api/vehicles/45/\",\"https://swapi.co/api/vehicles/46/\",\"https://swapi.co/api/vehicles/50/\",\"https://swapi.co/api/vehicles/51/\",\"https://swapi.co/api/vehicles/53/\",\"https://swapi.co/api/vehicles/54/\",\"https://swapi.co/api/vehicles/55/\",\"https://swapi.co/api/vehicles/56/\",\"https://swapi.co/api/vehicles/57/\"],\"species\":[\"https://swapi.co/api/species/32/\",\"https://swapi.co/api/species/33/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/35/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/12/\",\"https://swapi.co/api/species/34/\",\"https://swapi.co/api/species/13/\",\"https://swapi.co/api/species/15/\",\"https://swapi.co/api/species/28/\",\"https://swapi.co/api/species/29/\",\"https://swapi.co/api/species/30/\",\"https://swapi.co/api/species/31/\"],\"created\":\"2014-12-20T10:57:57.886000Z\",\"edited\":\"2015-04-11T09:45:01.623982Z\",\"url\":\"https://swapi.co/api/films/5/\"},{\"title\":\"The Phantom Menace\",\"episode_id\":1,\"opening_crawl\":\"Turmoil has engulfed the\\r\\nGalactic Republic. The taxation\\r\\nof trade routes to outlying star\\r\\nsystems is in dispute.\\r\\n\\r\\nHoping to resolve the matter\\r\\nwith a blockade of deadly\\r\\nbattleships, the greedy Trade\\r\\nFederation has stopped all\\r\\nshipping to the small planet\\r\\nof Naboo.\\r\\n\\r\\nWhile the Congress of the\\r\\nRepublic endlessly debates\\r\\nthis alarming chain of events,\\r\\nthe Supreme Chancellor has\\r\\nsecretly dispatched two Jedi\\r\\nKnights, the guardians of\\r\\npeace and justice in the\\r\\ngalaxy, to settle the conflict....\",\"director\":\"George Lucas\",\"producer\":\"Rick McCallum\",\"release_date\":\"1999-05-19\",\"characters\":[\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/16/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/32/\",\"https://swapi.co/api/people/33/\",\"https://swapi.co/api/people/34/\",\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/37/\",\"https://swapi.co/api/people/38/\",\"https://swapi.co/api/people/39/\",\"https://swapi.co/api/people/40/\",\"https://swapi.co/api/people/41/\",\"https://swapi.co/api/people/42/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/44/\",\"https://swapi.co/api/people/46/\",\"https://swapi.co/api/people/48/\",\"https://swapi.co/api/people/49/\",\"https://swapi.co/api/people/50/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/52/\",\"https://swapi.co/api/people/53/\",\"https://swapi.co/api/people/54/\",\"https://swapi.co/api/people/55/\",\"https://swapi.co/api/people/56/\",\"https://swapi.co/api/people/57/\",\"https://swapi.co/api/people/58/\",\"https://swapi.co/api/people/59/\",\"https://swapi.co/api/people/47/\",\"https://swapi.co/api/people/35/\"],\"planets\":[\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/40/\",\"https://swapi.co/api/starships/41/\",\"https://swapi.co/api/starships/31/\",\"https://swapi.co/api/starships/32/\",\"https://swapi.co/api/starships/39/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/33/\",\"https://swapi.co/api/vehicles/34/\",\"https://swapi.co/api/vehicles/35/\",\"https://swapi.co/api/vehicles/36/\",\"https://swapi.co/api/vehicles/37/\",\"https://swapi.co/api/vehicles/38/\",\"https://swapi.co/api/vehicles/42/\"],\"species\":[\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/11/\",\"https://swapi.co/api/species/12/\",\"https://swapi.co/api/species/13/\",\"https://swapi.co/api/species/14/\",\"https://swapi.co/api/species/15/\",\"https://swapi.co/api/species/16/\",\"https://swapi.co/api/species/17/\",\"https://swapi.co/api/species/18/\",\"https://swapi.co/api/species/19/\",\"https://swapi.co/api/species/20/\",\"https://swapi.co/api/species/21/\",\"https://swapi.co/api/species/22/\",\"https://swapi.co/api/species/23/\",\"https://swapi.co/api/species/24/\",\"https://swapi.co/api/species/25/\",\"https://swapi.co/api/species/26/\",\"https://swapi.co/api/species/27/\"],\"created\":\"2014-12-19T16:52:55.740000Z\",\"edited\":\"2015-04-11T09:45:18.689301Z\",\"url\":\"https://swapi.co/api/films/4/\"},{\"title\":\"Revenge of the Sith\",\"episode_id\":3,\"opening_crawl\":\"War! The Republic is crumbling\\r\\nunder attacks by the ruthless\\r\\nSith Lord, Count Dooku.\\r\\nThere are heroes on both sides.\\r\\nEvil is everywhere.\\r\\n\\r\\nIn a stunning move, the\\r\\nfiendish droid leader, General\\r\\nGrievous, has swept into the\\r\\nRepublic capital and kidnapped\\r\\nChancellor Palpatine, leader of\\r\\nthe Galactic Senate.\\r\\n\\r\\nAs the Separatist Droid Army\\r\\nattempts to flee the besieged\\r\\ncapital with their valuable\\r\\nhostage, two Jedi Knights lead a\\r\\ndesperate mission to rescue the\\r\\ncaptive Chancellor....\",\"director\":\"George Lucas\",\"producer\":\"Rick McCallum\",\"release_date\":\"2005-05-19\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/12/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/33/\",\"https://swapi.co/api/people/46/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/52/\",\"https://swapi.co/api/people/53/\",\"https://swapi.co/api/people/54/\",\"https://swapi.co/api/people/55/\",\"https://swapi.co/api/people/56/\",\"https://swapi.co/api/people/58/\",\"https://swapi.co/api/people/63/\",\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/67/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/75/\",\"https://swapi.co/api/people/78/\",\"https://swapi.co/api/people/79/\",\"https://swapi.co/api/people/80/\",\"https://swapi.co/api/people/81/\",\"https://swapi.co/api/people/82/\",\"https://swapi.co/api/people/83/\",\"https://swapi.co/api/people/35/\"],\"planets\":[\"https://swapi.co/api/planets/2/\",\"https://swapi.co/api/planets/5/\",\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/12/\",\"https://swapi.co/api/planets/13/\",\"https://swapi.co/api/planets/14/\",\"https://swapi.co/api/planets/15/\",\"https://swapi.co/api/planets/16/\",\"https://swapi.co/api/planets/17/\",\"https://swapi.co/api/planets/18/\",\"https://swapi.co/api/planets/19/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/48/\",\"https://swapi.co/api/starships/59/\",\"https://swapi.co/api/starships/61/\",\"https://swapi.co/api/starships/32/\",\"https://swapi.co/api/starships/63/\",\"https://swapi.co/api/starships/64/\",\"https://swapi.co/api/starships/65/\",\"https://swapi.co/api/starships/66/\",\"https://swapi.co/api/starships/74/\",\"https://swapi.co/api/starships/75/\",\"https://swapi.co/api/starships/2/\",\"https://swapi.co/api/starships/68/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/33/\",\"https://swapi.co/api/vehicles/50/\",\"https://swapi.co/api/vehicles/53/\",\"https://swapi.co/api/vehicles/56/\",\"https://swapi.co/api/vehicles/60/\",\"https://swapi.co/api/vehicles/62/\",\"https://swapi.co/api/vehicles/67/\",\"https://swapi.co/api/vehicles/69/\",\"https://swapi.co/api/vehicles/70/\",\"https://swapi.co/api/vehicles/71/\",\"https://swapi.co/api/vehicles/72/\",\"https://swapi.co/api/vehicles/73/\",\"https://swapi.co/api/vehicles/76/\"],\"species\":[\"https://swapi.co/api/species/19/\",\"https://swapi.co/api/species/33/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/36/\",\"https://swapi.co/api/species/37/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/34/\",\"https://swapi.co/api/species/15/\",\"https://swapi.co/api/species/35/\",\"https://swapi.co/api/species/20/\",\"https://swapi.co/api/species/23/\",\"https://swapi.co/api/species/24/\",\"https://swapi.co/api/species/25/\",\"https://swapi.co/api/species/26/\",\"https://swapi.co/api/species/27/\",\"https://swapi.co/api/species/28/\",\"https://swapi.co/api/species/29/\",\"https://swapi.co/api/species/30/\"],\"created\":\"2014-12-20T18:49:38.403000Z\",\"edited\":\"2015-04-11T09:45:44.862122Z\",\"url\":\"https://swapi.co/api/films/6/\"},{\"title\":\"Return of the Jedi\",\"episode_id\":6,\"opening_crawl\":\"Luke Skywalker has returned to\\r\\nhis home planet of Tatooine in\\r\\nan attempt to rescue his\\r\\nfriend Han Solo from the\\r\\nclutches of the vile gangster\\r\\nJabba the Hutt.\\r\\n\\r\\nLittle does Luke know that the\\r\\nGALACTIC EMPIRE has secretly\\r\\nbegun construction on a new\\r\\narmored space station even\\r\\nmore powerful than the first\\r\\ndreaded Death Star.\\r\\n\\r\\nWhen completed, this ultimate\\r\\nweapon will spell certain doom\\r\\nfor the small band of rebels\\r\\nstruggling to restore freedom\\r\\nto the galaxy...\",\"director\":\"Richard Marquand\",\"producer\":\"Howard G. Kazanjian, George Lucas, Rick McCallum\",\"release_date\":\"1983-05-25\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/16/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/27/\",\"https://swapi.co/api/people/28/\",\"https://swapi.co/api/people/29/\",\"https://swapi.co/api/people/30/\",\"https://swapi.co/api/people/31/\",\"https://swapi.co/api/people/45/\"],\"planets\":[\"https://swapi.co/api/planets/5/\",\"https://swapi.co/api/planets/7/\",\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/15/\",\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/11/\",\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/22/\",\"https://swapi.co/api/starships/23/\",\"https://swapi.co/api/starships/27/\",\"https://swapi.co/api/starships/28/\",\"https://swapi.co/api/starships/29/\",\"https://swapi.co/api/starships/3/\",\"https://swapi.co/api/starships/17/\",\"https://swapi.co/api/starships/2/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/8/\",\"https://swapi.co/api/vehicles/16/\",\"https://swapi.co/api/vehicles/18/\",\"https://swapi.co/api/vehicles/19/\",\"https://swapi.co/api/vehicles/24/\",\"https://swapi.co/api/vehicles/25/\",\"https://swapi.co/api/vehicles/26/\",\"https://swapi.co/api/vehicles/30/\"],\"species\":[\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/5/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/8/\",\"https://swapi.co/api/species/9/\",\"https://swapi.co/api/species/10/\",\"https://swapi.co/api/species/15/\"],\"created\":\"2014-12-18T10:39:33.255000Z\",\"edited\":\"2015-04-11T09:46:05.220365Z\",\"url\":\"https://swapi.co/api/films/3/\"},{\"title\":\"The Empire Strikes Back\",\"episode_id\":5,\"opening_crawl\":\"It is a dark time for the\\r\\nRebellion. Although the Death\\r\\nStar has been destroyed,\\r\\nImperial troops have driven the\\r\\nRebel forces from their hidden\\r\\nbase and pursued them across\\r\\nthe galaxy.\\r\\n\\r\\nEvading the dreaded Imperial\\r\\nStarfleet, a group of freedom\\r\\nfighters led by Luke Skywalker\\r\\nhas established a new secret\\r\\nbase on the remote ice world\\r\\nof Hoth.\\r\\n\\r\\nThe evil lord Darth Vader,\\r\\nobsessed with finding young\\r\\nSkywalker, has dispatched\\r\\nthousands of remote probes into\\r\\nthe far reaches of space....\",\"director\":\"Irvin Kershner\",\"producer\":\"Gary Kurtz, Rick McCallum\",\"release_date\":\"1980-05-17\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/23/\",\"https://swapi.co/api/people/24/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/26/\"],\"planets\":[\"https://swapi.co/api/planets/4/\",\"https://swapi.co/api/planets/5/\",\"https://swapi.co/api/planets/6/\",\"https://swapi.co/api/planets/27/\"],\"starships\":[\"https://swapi.co/api/starships/15/\",\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/11/\",\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/21/\",\"https://swapi.co/api/starships/22/\",\"https://swapi.co/api/starships/23/\",\"https://swapi.co/api/starships/3/\",\"https://swapi.co/api/starships/17/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/8/\",\"https://swapi.co/api/vehicles/14/\",\"https://swapi.co/api/vehicles/16/\",\"https://swapi.co/api/vehicles/18/\",\"https://swapi.co/api/vehicles/19/\",\"https://swapi.co/api/vehicles/20/\"],\"species\":[\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/7/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/1/\"],\"created\":\"2014-12-12T11:26:24.656000Z\",\"edited\":\"2017-04-19T10:57:29.544256Z\",\"url\":\"https://swapi.co/api/films/2/\"},{\"title\":\"The Force Awakens\",\"episode_id\":7,\"opening_crawl\":\"Luke Skywalker has vanished.\\r\\nIn his absence, the sinister\\r\\nFIRST ORDER has risen from\\r\\nthe ashes of the Empire\\r\\nand will not rest until\\r\\nSkywalker, the last Jedi,\\r\\nhas been destroyed.\\r\\n \\r\\nWith the support of the\\r\\nREPUBLIC, General Leia Organa\\r\\nleads a brave RESISTANCE.\\r\\nShe is desperate to find her\\r\\nbrother Luke and gain his\\r\\nhelp in restoring peace and\\r\\njustice to the galaxy.\\r\\n \\r\\nLeia has sent her most daring\\r\\npilot on a secret mission\\r\\nto Jakku, where an old ally\\r\\nhas discovered a clue to\\r\\nLuke's whereabouts....\",\"director\":\"J. J. Abrams\",\"producer\":\"Kathleen Kennedy, J. J. Abrams, Bryan Burk\",\"release_date\":\"2015-12-11\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/27/\",\"https://swapi.co/api/people/84/\",\"https://swapi.co/api/people/85/\",\"https://swapi.co/api/people/86/\",\"https://swapi.co/api/people/87/\",\"https://swapi.co/api/people/88/\"],\"planets\":[\"https://swapi.co/api/planets/61/\"],\"starships\":[\"https://swapi.co/api/starships/77/\",\"https://swapi.co/api/starships/10/\"],\"vehicles\":[],\"species\":[\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/1/\"],\"created\":\"2015-04-17T06:51:30.504780Z\",\"edited\":\"2015-12-17T14:31:47.617768Z\",\"url\":\"https://swapi.co/api/films/7/\"}]},\"https://swapi.co/api/films/1/\":{\"title\":\"A New Hope\",\"episode_id\":4,\"opening_crawl\":\"It is a period of civil war.\\r\\nRebel spaceships, striking\\r\\nfrom a hidden base, have won\\r\\ntheir first victory against\\r\\nthe evil Galactic Empire.\\r\\n\\r\\nDuring the battle, Rebel\\r\\nspies managed to steal secret\\r\\nplans to the Empire's\\r\\nultimate weapon, the DEATH\\r\\nSTAR, an armored space\\r\\nstation with enough power\\r\\nto destroy an entire planet.\\r\\n\\r\\nPursued by the Empire's\\r\\nsinister agents, Princess\\r\\nLeia races home aboard her\\r\\nstarship, custodian of the\\r\\nstolen plans that can save her\\r\\npeople and restore\\r\\nfreedom to the galaxy....\",\"director\":\"George Lucas\",\"producer\":\"Gary Kurtz, Rick McCallum\",\"release_date\":\"1977-05-25\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/8/\",\"https://swapi.co/api/people/9/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/12/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/15/\",\"https://swapi.co/api/people/16/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/19/\",\"https://swapi.co/api/people/81/\"],\"planets\":[\"https://swapi.co/api/planets/2/\",\"https://swapi.co/api/planets/3/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/2/\",\"https://swapi.co/api/starships/3/\",\"https://swapi.co/api/starships/5/\",\"https://swapi.co/api/starships/9/\",\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/11/\",\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/13/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/4/\",\"https://swapi.co/api/vehicles/6/\",\"https://swapi.co/api/vehicles/7/\",\"https://swapi.co/api/vehicles/8/\"],\"species\":[\"https://swapi.co/api/species/5/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/4/\"],\"created\":\"2014-12-10T14:23:31.880000Z\",\"edited\":\"2015-04-11T09:46:52.774897Z\",\"url\":\"https://swapi.co/api/films/1/\"},\"https://swapi.co/api/films/5/\":{\"title\":\"Attack of the Clones\",\"episode_id\":2,\"opening_crawl\":\"There is unrest in the Galactic\\r\\nSenate. Several thousand solar\\r\\nsystems have declared their\\r\\nintentions to leave the Republic.\\r\\n\\r\\nThis separatist movement,\\r\\nunder the leadership of the\\r\\nmysterious Count Dooku, has\\r\\nmade it difficult for the limited\\r\\nnumber of Jedi Knights to maintain \\r\\npeace and order in the galaxy.\\r\\n\\r\\nSenator Amidala, the former\\r\\nQueen of Naboo, is returning\\r\\nto the Galactic Senate to vote\\r\\non the critical issue of creating\\r\\nan ARMY OF THE REPUBLIC\\r\\nto assist the overwhelmed\\r\\nJedi....\",\"director\":\"George Lucas\",\"producer\":\"Rick McCallum\",\"release_date\":\"2002-05-16\",\"characters\":[\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/33/\",\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/40/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/46/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/52/\",\"https://swapi.co/api/people/53/\",\"https://swapi.co/api/people/58/\",\"https://swapi.co/api/people/59/\",\"https://swapi.co/api/people/60/\",\"https://swapi.co/api/people/61/\",\"https://swapi.co/api/people/62/\",\"https://swapi.co/api/people/63/\",\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/65/\",\"https://swapi.co/api/people/66/\",\"https://swapi.co/api/people/67/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/69/\",\"https://swapi.co/api/people/70/\",\"https://swapi.co/api/people/71/\",\"https://swapi.co/api/people/72/\",\"https://swapi.co/api/people/73/\",\"https://swapi.co/api/people/74/\",\"https://swapi.co/api/people/75/\",\"https://swapi.co/api/people/76/\",\"https://swapi.co/api/people/77/\",\"https://swapi.co/api/people/78/\",\"https://swapi.co/api/people/82/\",\"https://swapi.co/api/people/35/\"],\"planets\":[\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/10/\",\"https://swapi.co/api/planets/11/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/21/\",\"https://swapi.co/api/starships/39/\",\"https://swapi.co/api/starships/43/\",\"https://swapi.co/api/starships/47/\",\"https://swapi.co/api/starships/48/\",\"https://swapi.co/api/starships/49/\",\"https://swapi.co/api/starships/32/\",\"https://swapi.co/api/starships/52/\",\"https://swapi.co/api/starships/58/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/4/\",\"https://swapi.co/api/vehicles/44/\",\"https://swapi.co/api/vehicles/45/\",\"https://swapi.co/api/vehicles/46/\",\"https://swapi.co/api/vehicles/50/\",\"https://swapi.co/api/vehicles/51/\",\"https://swapi.co/api/vehicles/53/\",\"https://swapi.co/api/vehicles/54/\",\"https://swapi.co/api/vehicles/55/\",\"https://swapi.co/api/vehicles/56/\",\"https://swapi.co/api/vehicles/57/\"],\"species\":[\"https://swapi.co/api/species/32/\",\"https://swapi.co/api/species/33/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/35/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/12/\",\"https://swapi.co/api/species/34/\",\"https://swapi.co/api/species/13/\",\"https://swapi.co/api/species/15/\",\"https://swapi.co/api/species/28/\",\"https://swapi.co/api/species/29/\",\"https://swapi.co/api/species/30/\",\"https://swapi.co/api/species/31/\"],\"created\":\"2014-12-20T10:57:57.886000Z\",\"edited\":\"2015-04-11T09:45:01.623982Z\",\"url\":\"https://swapi.co/api/films/5/\"},\"https://swapi.co/api/films/4/\":{\"title\":\"The Phantom Menace\",\"episode_id\":1,\"opening_crawl\":\"Turmoil has engulfed the\\r\\nGalactic Republic. The taxation\\r\\nof trade routes to outlying star\\r\\nsystems is in dispute.\\r\\n\\r\\nHoping to resolve the matter\\r\\nwith a blockade of deadly\\r\\nbattleships, the greedy Trade\\r\\nFederation has stopped all\\r\\nshipping to the small planet\\r\\nof Naboo.\\r\\n\\r\\nWhile the Congress of the\\r\\nRepublic endlessly debates\\r\\nthis alarming chain of events,\\r\\nthe Supreme Chancellor has\\r\\nsecretly dispatched two Jedi\\r\\nKnights, the guardians of\\r\\npeace and justice in the\\r\\ngalaxy, to settle the conflict....\",\"director\":\"George Lucas\",\"producer\":\"Rick McCallum\",\"release_date\":\"1999-05-19\",\"characters\":[\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/16/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/32/\",\"https://swapi.co/api/people/33/\",\"https://swapi.co/api/people/34/\",\"https://swapi.co/api/people/36/\",\"https://swapi.co/api/people/37/\",\"https://swapi.co/api/people/38/\",\"https://swapi.co/api/people/39/\",\"https://swapi.co/api/people/40/\",\"https://swapi.co/api/people/41/\",\"https://swapi.co/api/people/42/\",\"https://swapi.co/api/people/43/\",\"https://swapi.co/api/people/44/\",\"https://swapi.co/api/people/46/\",\"https://swapi.co/api/people/48/\",\"https://swapi.co/api/people/49/\",\"https://swapi.co/api/people/50/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/52/\",\"https://swapi.co/api/people/53/\",\"https://swapi.co/api/people/54/\",\"https://swapi.co/api/people/55/\",\"https://swapi.co/api/people/56/\",\"https://swapi.co/api/people/57/\",\"https://swapi.co/api/people/58/\",\"https://swapi.co/api/people/59/\",\"https://swapi.co/api/people/47/\",\"https://swapi.co/api/people/35/\"],\"planets\":[\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/40/\",\"https://swapi.co/api/starships/41/\",\"https://swapi.co/api/starships/31/\",\"https://swapi.co/api/starships/32/\",\"https://swapi.co/api/starships/39/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/33/\",\"https://swapi.co/api/vehicles/34/\",\"https://swapi.co/api/vehicles/35/\",\"https://swapi.co/api/vehicles/36/\",\"https://swapi.co/api/vehicles/37/\",\"https://swapi.co/api/vehicles/38/\",\"https://swapi.co/api/vehicles/42/\"],\"species\":[\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/11/\",\"https://swapi.co/api/species/12/\",\"https://swapi.co/api/species/13/\",\"https://swapi.co/api/species/14/\",\"https://swapi.co/api/species/15/\",\"https://swapi.co/api/species/16/\",\"https://swapi.co/api/species/17/\",\"https://swapi.co/api/species/18/\",\"https://swapi.co/api/species/19/\",\"https://swapi.co/api/species/20/\",\"https://swapi.co/api/species/21/\",\"https://swapi.co/api/species/22/\",\"https://swapi.co/api/species/23/\",\"https://swapi.co/api/species/24/\",\"https://swapi.co/api/species/25/\",\"https://swapi.co/api/species/26/\",\"https://swapi.co/api/species/27/\"],\"created\":\"2014-12-19T16:52:55.740000Z\",\"edited\":\"2015-04-11T09:45:18.689301Z\",\"url\":\"https://swapi.co/api/films/4/\"},\"https://swapi.co/api/films/6/\":{\"title\":\"Revenge of the Sith\",\"episode_id\":3,\"opening_crawl\":\"War! The Republic is crumbling\\r\\nunder attacks by the ruthless\\r\\nSith Lord, Count Dooku.\\r\\nThere are heroes on both sides.\\r\\nEvil is everywhere.\\r\\n\\r\\nIn a stunning move, the\\r\\nfiendish droid leader, General\\r\\nGrievous, has swept into the\\r\\nRepublic capital and kidnapped\\r\\nChancellor Palpatine, leader of\\r\\nthe Galactic Senate.\\r\\n\\r\\nAs the Separatist Droid Army\\r\\nattempts to flee the besieged\\r\\ncapital with their valuable\\r\\nhostage, two Jedi Knights lead a\\r\\ndesperate mission to rescue the\\r\\ncaptive Chancellor....\",\"director\":\"George Lucas\",\"producer\":\"Rick McCallum\",\"release_date\":\"2005-05-19\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/6/\",\"https://swapi.co/api/people/7/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/11/\",\"https://swapi.co/api/people/12/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/33/\",\"https://swapi.co/api/people/46/\",\"https://swapi.co/api/people/51/\",\"https://swapi.co/api/people/52/\",\"https://swapi.co/api/people/53/\",\"https://swapi.co/api/people/54/\",\"https://swapi.co/api/people/55/\",\"https://swapi.co/api/people/56/\",\"https://swapi.co/api/people/58/\",\"https://swapi.co/api/people/63/\",\"https://swapi.co/api/people/64/\",\"https://swapi.co/api/people/67/\",\"https://swapi.co/api/people/68/\",\"https://swapi.co/api/people/75/\",\"https://swapi.co/api/people/78/\",\"https://swapi.co/api/people/79/\",\"https://swapi.co/api/people/80/\",\"https://swapi.co/api/people/81/\",\"https://swapi.co/api/people/82/\",\"https://swapi.co/api/people/83/\",\"https://swapi.co/api/people/35/\"],\"planets\":[\"https://swapi.co/api/planets/2/\",\"https://swapi.co/api/planets/5/\",\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/12/\",\"https://swapi.co/api/planets/13/\",\"https://swapi.co/api/planets/14/\",\"https://swapi.co/api/planets/15/\",\"https://swapi.co/api/planets/16/\",\"https://swapi.co/api/planets/17/\",\"https://swapi.co/api/planets/18/\",\"https://swapi.co/api/planets/19/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/48/\",\"https://swapi.co/api/starships/59/\",\"https://swapi.co/api/starships/61/\",\"https://swapi.co/api/starships/32/\",\"https://swapi.co/api/starships/63/\",\"https://swapi.co/api/starships/64/\",\"https://swapi.co/api/starships/65/\",\"https://swapi.co/api/starships/66/\",\"https://swapi.co/api/starships/74/\",\"https://swapi.co/api/starships/75/\",\"https://swapi.co/api/starships/2/\",\"https://swapi.co/api/starships/68/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/33/\",\"https://swapi.co/api/vehicles/50/\",\"https://swapi.co/api/vehicles/53/\",\"https://swapi.co/api/vehicles/56/\",\"https://swapi.co/api/vehicles/60/\",\"https://swapi.co/api/vehicles/62/\",\"https://swapi.co/api/vehicles/67/\",\"https://swapi.co/api/vehicles/69/\",\"https://swapi.co/api/vehicles/70/\",\"https://swapi.co/api/vehicles/71/\",\"https://swapi.co/api/vehicles/72/\",\"https://swapi.co/api/vehicles/73/\",\"https://swapi.co/api/vehicles/76/\"],\"species\":[\"https://swapi.co/api/species/19/\",\"https://swapi.co/api/species/33/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/36/\",\"https://swapi.co/api/species/37/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/34/\",\"https://swapi.co/api/species/15/\",\"https://swapi.co/api/species/35/\",\"https://swapi.co/api/species/20/\",\"https://swapi.co/api/species/23/\",\"https://swapi.co/api/species/24/\",\"https://swapi.co/api/species/25/\",\"https://swapi.co/api/species/26/\",\"https://swapi.co/api/species/27/\",\"https://swapi.co/api/species/28/\",\"https://swapi.co/api/species/29/\",\"https://swapi.co/api/species/30/\"],\"created\":\"2014-12-20T18:49:38.403000Z\",\"edited\":\"2015-04-11T09:45:44.862122Z\",\"url\":\"https://swapi.co/api/films/6/\"},\"https://swapi.co/api/films/3/\":{\"title\":\"Return of the Jedi\",\"episode_id\":6,\"opening_crawl\":\"Luke Skywalker has returned to\\r\\nhis home planet of Tatooine in\\r\\nan attempt to rescue his\\r\\nfriend Han Solo from the\\r\\nclutches of the vile gangster\\r\\nJabba the Hutt.\\r\\n\\r\\nLittle does Luke know that the\\r\\nGALACTIC EMPIRE has secretly\\r\\nbegun construction on a new\\r\\narmored space station even\\r\\nmore powerful than the first\\r\\ndreaded Death Star.\\r\\n\\r\\nWhen completed, this ultimate\\r\\nweapon will spell certain doom\\r\\nfor the small band of rebels\\r\\nstruggling to restore freedom\\r\\nto the galaxy...\",\"director\":\"Richard Marquand\",\"producer\":\"Howard G. Kazanjian, George Lucas, Rick McCallum\",\"release_date\":\"1983-05-25\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/16/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/27/\",\"https://swapi.co/api/people/28/\",\"https://swapi.co/api/people/29/\",\"https://swapi.co/api/people/30/\",\"https://swapi.co/api/people/31/\",\"https://swapi.co/api/people/45/\"],\"planets\":[\"https://swapi.co/api/planets/5/\",\"https://swapi.co/api/planets/7/\",\"https://swapi.co/api/planets/8/\",\"https://swapi.co/api/planets/9/\",\"https://swapi.co/api/planets/1/\"],\"starships\":[\"https://swapi.co/api/starships/15/\",\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/11/\",\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/22/\",\"https://swapi.co/api/starships/23/\",\"https://swapi.co/api/starships/27/\",\"https://swapi.co/api/starships/28/\",\"https://swapi.co/api/starships/29/\",\"https://swapi.co/api/starships/3/\",\"https://swapi.co/api/starships/17/\",\"https://swapi.co/api/starships/2/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/8/\",\"https://swapi.co/api/vehicles/16/\",\"https://swapi.co/api/vehicles/18/\",\"https://swapi.co/api/vehicles/19/\",\"https://swapi.co/api/vehicles/24/\",\"https://swapi.co/api/vehicles/25/\",\"https://swapi.co/api/vehicles/26/\",\"https://swapi.co/api/vehicles/30/\"],\"species\":[\"https://swapi.co/api/species/1/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/5/\",\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/8/\",\"https://swapi.co/api/species/9/\",\"https://swapi.co/api/species/10/\",\"https://swapi.co/api/species/15/\"],\"created\":\"2014-12-18T10:39:33.255000Z\",\"edited\":\"2015-04-11T09:46:05.220365Z\",\"url\":\"https://swapi.co/api/films/3/\"},\"https://swapi.co/api/films/2/\":{\"title\":\"The Empire Strikes Back\",\"episode_id\":5,\"opening_crawl\":\"It is a dark time for the\\r\\nRebellion. Although the Death\\r\\nStar has been destroyed,\\r\\nImperial troops have driven the\\r\\nRebel forces from their hidden\\r\\nbase and pursued them across\\r\\nthe galaxy.\\r\\n\\r\\nEvading the dreaded Imperial\\r\\nStarfleet, a group of freedom\\r\\nfighters led by Luke Skywalker\\r\\nhas established a new secret\\r\\nbase on the remote ice world\\r\\nof Hoth.\\r\\n\\r\\nThe evil lord Darth Vader,\\r\\nobsessed with finding young\\r\\nSkywalker, has dispatched\\r\\nthousands of remote probes into\\r\\nthe far reaches of space....\",\"director\":\"Irvin Kershner\",\"producer\":\"Gary Kurtz, Rick McCallum\",\"release_date\":\"1980-05-17\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/2/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/4/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/10/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/18/\",\"https://swapi.co/api/people/20/\",\"https://swapi.co/api/people/21/\",\"https://swapi.co/api/people/22/\",\"https://swapi.co/api/people/23/\",\"https://swapi.co/api/people/24/\",\"https://swapi.co/api/people/25/\",\"https://swapi.co/api/people/26/\"],\"planets\":[\"https://swapi.co/api/planets/4/\",\"https://swapi.co/api/planets/5/\",\"https://swapi.co/api/planets/6/\",\"https://swapi.co/api/planets/27/\"],\"starships\":[\"https://swapi.co/api/starships/15/\",\"https://swapi.co/api/starships/10/\",\"https://swapi.co/api/starships/11/\",\"https://swapi.co/api/starships/12/\",\"https://swapi.co/api/starships/21/\",\"https://swapi.co/api/starships/22/\",\"https://swapi.co/api/starships/23/\",\"https://swapi.co/api/starships/3/\",\"https://swapi.co/api/starships/17/\"],\"vehicles\":[\"https://swapi.co/api/vehicles/8/\",\"https://swapi.co/api/vehicles/14/\",\"https://swapi.co/api/vehicles/16/\",\"https://swapi.co/api/vehicles/18/\",\"https://swapi.co/api/vehicles/19/\",\"https://swapi.co/api/vehicles/20/\"],\"species\":[\"https://swapi.co/api/species/6/\",\"https://swapi.co/api/species/7/\",\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/1/\"],\"created\":\"2014-12-12T11:26:24.656000Z\",\"edited\":\"2017-04-19T10:57:29.544256Z\",\"url\":\"https://swapi.co/api/films/2/\"},\"https://swapi.co/api/films/7/\":{\"title\":\"The Force Awakens\",\"episode_id\":7,\"opening_crawl\":\"Luke Skywalker has vanished.\\r\\nIn his absence, the sinister\\r\\nFIRST ORDER has risen from\\r\\nthe ashes of the Empire\\r\\nand will not rest until\\r\\nSkywalker, the last Jedi,\\r\\nhas been destroyed.\\r\\n \\r\\nWith the support of the\\r\\nREPUBLIC, General Leia Organa\\r\\nleads a brave RESISTANCE.\\r\\nShe is desperate to find her\\r\\nbrother Luke and gain his\\r\\nhelp in restoring peace and\\r\\njustice to the galaxy.\\r\\n \\r\\nLeia has sent her most daring\\r\\npilot on a secret mission\\r\\nto Jakku, where an old ally\\r\\nhas discovered a clue to\\r\\nLuke's whereabouts....\",\"director\":\"J. J. Abrams\",\"producer\":\"Kathleen Kennedy, J. J. Abrams, Bryan Burk\",\"release_date\":\"2015-12-11\",\"characters\":[\"https://swapi.co/api/people/1/\",\"https://swapi.co/api/people/3/\",\"https://swapi.co/api/people/5/\",\"https://swapi.co/api/people/13/\",\"https://swapi.co/api/people/14/\",\"https://swapi.co/api/people/27/\",\"https://swapi.co/api/people/84/\",\"https://swapi.co/api/people/85/\",\"https://swapi.co/api/people/86/\",\"https://swapi.co/api/people/87/\",\"https://swapi.co/api/people/88/\"],\"planets\":[\"https://swapi.co/api/planets/61/\"],\"starships\":[\"https://swapi.co/api/starships/77/\",\"https://swapi.co/api/starships/10/\"],\"vehicles\":[],\"species\":[\"https://swapi.co/api/species/3/\",\"https://swapi.co/api/species/2/\",\"https://swapi.co/api/species/1/\"],\"created\":\"2015-04-17T06:51:30.504780Z\",\"edited\":\"2015-12-17T14:31:47.617768Z\",\"url\":\"https://swapi.co/api/films/7/\"}}");

/***/ }),

/***/ "../lib/api/index.js":
/*!***************************!*\
  !*** ../lib/api/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _local = __webpack_require__(/*! ./local */ "../lib/api/local.js");

Object.defineProperty(exports, 'getFromLocalUrl', {
  enumerable: true,
  get: function () {
    return _local.getFromLocalUrl;
  }
});

/***/ }),

/***/ "../lib/api/local.js":
/*!***************************!*\
  !*** ../lib/api/local.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFromLocalUrl = getFromLocalUrl;

var _data = __webpack_require__(/*! ../../cache/data */ "../cache/data.json");

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Given a URL of an object in the SWAPI, return the data
 * from our local cache.
 */


async function getFromLocalUrl(url) {
  const text = _data2.default[url];

  if (!text) {
    throw new Error(`No entry in local cache for ${url}`);
  }

  if (true) {
    // eslint-disable-next-line no-console
    console.log(`Hit the local cache for ${url}.`);
  }

  return text;
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */

/***/ }),

/***/ "../lib/schema/apiHelper.js":
/*!**********************************!*\
  !*** ../lib/schema/apiHelper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getObjectFromUrl = getObjectFromUrl;
exports.getObjectFromTypeAndId = getObjectFromTypeAndId;
exports.getObjectsByType = getObjectsByType;
exports.getObjectsFromUrls = getObjectsFromUrls;
exports.convertToNumber = convertToNumber;

var _dataloader = __webpack_require__(/*! dataloader */ "../node_modules/dataloader/index.js");

var _dataloader2 = _interopRequireDefault(_dataloader);

var _api = __webpack_require__(/*! ../api */ "../lib/api/index.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Copyright (c) 2015-present, Facebook Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


const localUrlLoader = new _dataloader2.default(urls => Promise.all(urls.map(_api.getFromLocalUrl)));
/**
 * Objects returned from SWAPI don't have an ID field, so add one.
 */

function objectWithId(obj) {
  obj.id = parseInt(obj.url.split('/')[5], 10);
  return obj;
}
/**
 * Given an object URL, fetch it, append the ID to it, and return it.
 */


async function getObjectFromUrl(url) {
  const data = await localUrlLoader.load(url);
  return objectWithId(data);
}
/**
 * Given a type and ID, get the object with the ID.
 */


async function getObjectFromTypeAndId(type, id) {
  return await getObjectFromUrl(`https://swapi.co/api/${type}/${id}/`);
}
/**
 * Given a type, fetch all of the pages, and join the objects together
 */


async function getObjectsByType(type) {
  let objects = [];
  let nextUrl = `https://swapi.co/api/${type}/`;

  while (nextUrl) {
    // eslint-disable-next-line no-await-in-loop
    const pageData = await localUrlLoader.load(nextUrl);
    objects = objects.concat(pageData.results.map(objectWithId));
    nextUrl = pageData.next;
  }

  objects = sortObjectsById(objects);
  return {
    objects,
    totalCount: objects.length
  };
}

async function getObjectsFromUrls(urls) {
  const array = await Promise.all(urls.map(getObjectFromUrl));
  return sortObjectsById(array);
}

function sortObjectsById(array) {
  return array.sort((a, b) => a.id - b.id);
}
/**
 * Given a string, convert it to a number
 */


function convertToNumber(value) {
  if (['unknown', 'n/a'].indexOf(value) !== -1) {
    return null;
  } // remove digit grouping


  const numberString = value.replace(/,/, '');
  return Number(numberString);
}

/***/ }),

/***/ "../lib/schema/commonFields.js":
/*!*************************************!*\
  !*** ../lib/schema/commonFields.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createdField = createdField;
exports.editedField = editedField;

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs"); // These two fields appear on all types, so let's only write them once.


function createdField() {
  return {
    type: _graphql.GraphQLString,
    description: 'The ISO 8601 date format of the time that this resource was created.'
  };
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


function editedField() {
  return {
    type: _graphql.GraphQLString,
    description: 'The ISO 8601 date format of the time that this resource was edited.'
  };
}

/***/ }),

/***/ "../lib/schema/connections.js":
/*!************************************!*\
  !*** ../lib/schema/connections.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionFromUrls = connectionFromUrls;

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _apiHelper = __webpack_require__(/*! ./apiHelper */ "../lib/schema/apiHelper.js");

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");
/**
 * Constructs a GraphQL connection field config; it is assumed
 * that the object has a property named `prop`, and that property
 * contains a list of URLs.
 */


function connectionFromUrls(name, prop, type) {
  const {
    connectionType
  } = (0, _graphqlRelay.connectionDefinitions)({
    name,
    nodeType: type,
    resolveNode: edge => edge.node,
    connectionFields: () => ({
      totalCount: {
        type: _graphql.GraphQLInt,
        resolve: conn => conn.totalCount,
        description: `A count of the total number of objects in this connection, ignoring pagination.
This allows a client to fetch the first five objects by passing "5" as the
argument to "first", then fetch the total count so it could display "5 of 83",
for example.`
      },
      [prop]: {
        type: new _graphql.GraphQLList(type),
        resolve: conn => conn.edges.map(edge => edge.node),
        description: `A list of all of the objects returned in the connection. This is a convenience
field provided for quickly exploring the API; rather than querying for
"{ edges { node } }" when no edge data is needed, this field can be be used
instead. Note that when clients like Relay need to fetch the "cursor" field on
the edge to enable efficient pagination, this shortcut cannot be used, and the
full "{ edges { node } }" version should be used instead.`
      }
    })
  });
  return {
    type: connectionType,
    args: _graphqlRelay.connectionArgs,
    resolve: async (obj, args) => {
      const array = await (0, _apiHelper.getObjectsFromUrls)(obj[prop] || []);
      return { ...(0, _graphqlRelay.connectionFromArray)(array, args),
        totalCount: array.length
      };
    }
  };
}
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */

/***/ }),

/***/ "../lib/schema/index.js":
/*!******************************!*\
  !*** ../lib/schema/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _apiHelper = __webpack_require__(/*! ./apiHelper */ "../lib/schema/apiHelper.js");

var _relayNode = __webpack_require__(/*! ./relayNode */ "../lib/schema/relayNode.js");
/**
 * Creates a root field to get an object of a given type.
 * Accepts either `id`, the globally unique ID used in GraphQL,
 * or `idName`, the per-type ID used in SWAPI.
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


function rootFieldByID(idName, swapiType) {
  const getter = id => (0, _apiHelper.getObjectFromTypeAndId)(swapiType, id);

  const argDefs = {};
  argDefs.id = {
    type: _graphql.GraphQLID
  };
  argDefs[idName] = {
    type: _graphql.GraphQLID
  };
  return {
    type: (0, _relayNode.swapiTypeToGraphQLType)(swapiType),
    args: argDefs,
    resolve: (_, args) => {
      if (args[idName] !== undefined && args[idName] !== null) {
        return getter(args[idName]);
      }

      if (args.id !== undefined && args.id !== null) {
        const globalId = (0, _graphqlRelay.fromGlobalId)(args.id);

        if (globalId.id === null || globalId.id === undefined || globalId.id === '') {
          throw new Error('No valid ID extracted from ' + args.id);
        }

        return getter(globalId.id);
      }

      throw new Error('must provide id or ' + idName);
    }
  };
}
/**
 * Creates a connection that will return all objects of the given
 * `swapiType`; the connection will be named using `name`.
 */


function rootConnection(name, swapiType) {
  const graphqlType = (0, _relayNode.swapiTypeToGraphQLType)(swapiType);
  const {
    connectionType
  } = (0, _graphqlRelay.connectionDefinitions)({
    name,
    nodeType: graphqlType,
    connectionFields: () => ({
      totalCount: {
        type: _graphql.GraphQLInt,
        resolve: conn => conn.totalCount,
        description: `A count of the total number of objects in this connection, ignoring pagination.
This allows a client to fetch the first five objects by passing "5" as the
argument to "first", then fetch the total count so it could display "5 of 83",
for example.`
      },
      [swapiType]: {
        type: new _graphql.GraphQLList(graphqlType),
        resolve: conn => conn.edges.map(edge => edge.node),
        description: `A list of all of the objects returned in the connection. This is a convenience
field provided for quickly exploring the API; rather than querying for
"{ edges { node } }" when no edge data is needed, this field can be be used
instead. Note that when clients like Relay need to fetch the "cursor" field on
the edge to enable efficient pagination, this shortcut cannot be used, and the
full "{ edges { node } }" version should be used instead.`
      }
    })
  });
  return {
    type: connectionType,
    args: _graphqlRelay.connectionArgs,
    resolve: async (_, args) => {
      const {
        objects,
        totalCount
      } = await (0, _apiHelper.getObjectsByType)(swapiType);
      return { ...(0, _graphqlRelay.connectionFromArray)(objects, args),
        totalCount
      };
    }
  };
}
/**
 * The GraphQL type equivalent of the Root resource
 */


const rootType = new _graphql.GraphQLObjectType({
  name: 'Root',
  fields: () => ({
    allFilms: rootConnection('Films', 'films'),
    film: rootFieldByID('filmID', 'films'),
    allPeople: rootConnection('People', 'people'),
    person: rootFieldByID('personID', 'people'),
    allPlanets: rootConnection('Planets', 'planets'),
    planet: rootFieldByID('planetID', 'planets'),
    allSpecies: rootConnection('Species', 'species'),
    species: rootFieldByID('speciesID', 'species'),
    allStarships: rootConnection('Starships', 'starships'),
    starship: rootFieldByID('starshipID', 'starships'),
    allVehicles: rootConnection('Vehicles', 'vehicles'),
    vehicle: rootFieldByID('vehicleID', 'vehicles'),
    node: _relayNode.nodeField
  })
});
exports.default = new _graphql.GraphQLSchema({
  query: rootType
});

/***/ }),

/***/ "../lib/schema/relayNode.js":
/*!**********************************!*\
  !*** ../lib/schema/relayNode.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeField = exports.nodeInterface = undefined;
exports.swapiTypeToGraphQLType = swapiTypeToGraphQLType;

var _apiHelper = __webpack_require__(/*! ./apiHelper */ "../lib/schema/apiHelper.js");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");
/**
 * Given a "type" in SWAPI, returns the corresponding GraphQL type.
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


function swapiTypeToGraphQLType(swapiType) {
  const FilmType = __webpack_require__(/*! ./types/film */ "../lib/schema/types/film.js").default;

  const PersonType = __webpack_require__(/*! ./types/person */ "../lib/schema/types/person.js").default;

  const PlanetType = __webpack_require__(/*! ./types/planet */ "../lib/schema/types/planet.js").default;

  const SpeciesType = __webpack_require__(/*! ./types/species */ "../lib/schema/types/species.js").default;

  const StarshipType = __webpack_require__(/*! ./types/starship */ "../lib/schema/types/starship.js").default;

  const VehicleType = __webpack_require__(/*! ./types/vehicle */ "../lib/schema/types/vehicle.js").default;

  switch (swapiType) {
    case 'films':
      return FilmType;

    case 'people':
      return PersonType;

    case 'planets':
      return PlanetType;

    case 'starships':
      return StarshipType;

    case 'vehicles':
      return VehicleType;

    case 'species':
      return SpeciesType;

    default:
      throw new Error('Unrecognized type `' + swapiType + '`.');
  }
}

const {
  nodeInterface,
  nodeField
} = (0, _graphqlRelay.nodeDefinitions)(globalId => {
  const {
    type,
    id
  } = (0, _graphqlRelay.fromGlobalId)(globalId);
  return (0, _apiHelper.getObjectFromTypeAndId)(type, id);
}, obj => {
  const parts = obj.url.split('/');
  return swapiTypeToGraphQLType(parts[parts.length - 3]);
});
exports.nodeInterface = nodeInterface;
exports.nodeField = nodeField;

/***/ }),

/***/ "../lib/schema/types/film.js":
/*!***********************************!*\
  !*** ../lib/schema/types/film.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _relayNode = __webpack_require__(/*! ../relayNode */ "../lib/schema/relayNode.js");

var _commonFields = __webpack_require__(/*! ../commonFields */ "../lib/schema/commonFields.js");

var _connections = __webpack_require__(/*! ../connections */ "../lib/schema/connections.js");

var _person = __webpack_require__(/*! ./person */ "../lib/schema/types/person.js");

var _person2 = _interopRequireDefault(_person);

var _planet = __webpack_require__(/*! ./planet */ "../lib/schema/types/planet.js");

var _planet2 = _interopRequireDefault(_planet);

var _species = __webpack_require__(/*! ./species */ "../lib/schema/types/species.js");

var _species2 = _interopRequireDefault(_species);

var _starship = __webpack_require__(/*! ./starship */ "../lib/schema/types/starship.js");

var _starship2 = _interopRequireDefault(_starship);

var _vehicle = __webpack_require__(/*! ./vehicle */ "../lib/schema/types/vehicle.js");

var _vehicle2 = _interopRequireDefault(_vehicle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The GraphQL type equivalent of the Film resource
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


const FilmType = new _graphql.GraphQLObjectType({
  name: 'Film',
  description: 'A single film.',
  fields: () => ({
    title: {
      type: _graphql.GraphQLString,
      description: 'The title of this film.'
    },
    episodeID: {
      type: _graphql.GraphQLInt,
      resolve: film => film.episode_id,
      description: 'The episode number of this film.'
    },
    openingCrawl: {
      type: _graphql.GraphQLString,
      resolve: film => film.opening_crawl,
      description: 'The opening paragraphs at the beginning of this film.'
    },
    director: {
      type: _graphql.GraphQLString,
      description: 'The name of the director of this film.'
    },
    producers: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: film => {
        return film.producer.split(',').map(s => s.trim());
      },
      description: 'The name(s) of the producer(s) of this film.'
    },
    releaseDate: {
      type: _graphql.GraphQLString,
      resolve: film => film.release_date,
      description: 'The ISO 8601 date format of film release at original creator country.'
    },
    speciesConnection: (0, _connections.connectionFromUrls)('FilmSpecies', 'species', _species2.default),
    starshipConnection: (0, _connections.connectionFromUrls)('FilmStarships', 'starships', _starship2.default),
    vehicleConnection: (0, _connections.connectionFromUrls)('FilmVehicles', 'vehicles', _vehicle2.default),
    characterConnection: (0, _connections.connectionFromUrls)('FilmCharacters', 'characters', _person2.default),
    planetConnection: (0, _connections.connectionFromUrls)('FilmPlanets', 'planets', _planet2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('films')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
exports.default = FilmType;

/***/ }),

/***/ "../lib/schema/types/person.js":
/*!*************************************!*\
  !*** ../lib/schema/types/person.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _relayNode = __webpack_require__(/*! ../relayNode */ "../lib/schema/relayNode.js");

var _commonFields = __webpack_require__(/*! ../commonFields */ "../lib/schema/commonFields.js");

var _connections = __webpack_require__(/*! ../connections */ "../lib/schema/connections.js");

var _apiHelper = __webpack_require__(/*! ../apiHelper */ "../lib/schema/apiHelper.js");

var _film = __webpack_require__(/*! ./film */ "../lib/schema/types/film.js");

var _film2 = _interopRequireDefault(_film);

var _planet = __webpack_require__(/*! ./planet */ "../lib/schema/types/planet.js");

var _planet2 = _interopRequireDefault(_planet);

var _species = __webpack_require__(/*! ./species */ "../lib/schema/types/species.js");

var _species2 = _interopRequireDefault(_species);

var _starship = __webpack_require__(/*! ./starship */ "../lib/schema/types/starship.js");

var _starship2 = _interopRequireDefault(_starship);

var _vehicle = __webpack_require__(/*! ./vehicle */ "../lib/schema/types/vehicle.js");

var _vehicle2 = _interopRequireDefault(_vehicle);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The GraphQL type equivalent of the People resource
 */


const PersonType = new _graphql.GraphQLObjectType({
  name: 'Person',
  description: 'An individual person or character within the Star Wars universe.',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this person.'
    },
    birthYear: {
      type: _graphql.GraphQLString,
      resolve: person => person.birth_year,
      description: `The birth year of the person, using the in-universe standard of BBY or ABY -
Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
a battle that occurs at the end of Star Wars episode IV: A New Hope.`
    },
    eyeColor: {
      type: _graphql.GraphQLString,
      resolve: person => person.eye_color,
      description: `The eye color of this person. Will be "unknown" if not known or "n/a" if the
person does not have an eye.`
    },
    gender: {
      type: _graphql.GraphQLString,
      description: `The gender of this person. Either "Male", "Female" or "unknown",
"n/a" if the person does not have a gender.`
    },
    hairColor: {
      type: _graphql.GraphQLString,
      resolve: person => person.hair_color,
      description: `The hair color of this person. Will be "unknown" if not known or "n/a" if the
person does not have hair.`
    },
    height: {
      type: _graphql.GraphQLInt,
      resolve: person => (0, _apiHelper.convertToNumber)(person.height),
      description: 'The height of the person in centimeters.'
    },
    mass: {
      type: _graphql.GraphQLFloat,
      resolve: person => (0, _apiHelper.convertToNumber)(person.mass),
      description: 'The mass of the person in kilograms.'
    },
    skinColor: {
      type: _graphql.GraphQLString,
      resolve: person => person.skin_color,
      description: 'The skin color of this person.'
    },
    homeworld: {
      type: _planet2.default,
      resolve: person => person.homeworld ? (0, _apiHelper.getObjectFromUrl)(person.homeworld) : null,
      description: 'A planet that this person was born on or inhabits.'
    },
    filmConnection: (0, _connections.connectionFromUrls)('PersonFilms', 'films', _film2.default),
    species: {
      type: _species2.default,
      resolve: person => {
        if (!person.species || person.species.length === 0) {
          return null;
        }

        return (0, _apiHelper.getObjectFromUrl)(person.species[0]);
      },
      description: 'The species that this person belongs to, or null if unknown.'
    },
    starshipConnection: (0, _connections.connectionFromUrls)('PersonStarships', 'starships', _starship2.default),
    vehicleConnection: (0, _connections.connectionFromUrls)('PersonVehicles', 'vehicles', _vehicle2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('people')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */

exports.default = PersonType;

/***/ }),

/***/ "../lib/schema/types/planet.js":
/*!*************************************!*\
  !*** ../lib/schema/types/planet.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _relayNode = __webpack_require__(/*! ../relayNode */ "../lib/schema/relayNode.js");

var _commonFields = __webpack_require__(/*! ../commonFields */ "../lib/schema/commonFields.js");

var _connections = __webpack_require__(/*! ../connections */ "../lib/schema/connections.js");

var _apiHelper = __webpack_require__(/*! ../apiHelper */ "../lib/schema/apiHelper.js");

var _film = __webpack_require__(/*! ./film */ "../lib/schema/types/film.js");

var _film2 = _interopRequireDefault(_film);

var _person = __webpack_require__(/*! ./person */ "../lib/schema/types/person.js");

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The GraphQL type equivalent of the Planet resource
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


const PlanetType = new _graphql.GraphQLObjectType({
  name: 'Planet',
  description: `A large mass, planet or planetoid in the Star Wars Universe, at the time of
0 ABY.`,
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this planet.'
    },
    diameter: {
      type: _graphql.GraphQLInt,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.diameter),
      description: 'The diameter of this planet in kilometers.'
    },
    rotationPeriod: {
      type: _graphql.GraphQLInt,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.rotation_period),
      description: `The number of standard hours it takes for this planet to complete a single
rotation on its axis.`
    },
    orbitalPeriod: {
      type: _graphql.GraphQLInt,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.orbital_period),
      description: `The number of standard days it takes for this planet to complete a single orbit
of its local star.`
    },
    gravity: {
      type: _graphql.GraphQLString,
      description: `A number denoting the gravity of this planet, where "1" is normal or 1 standard
G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.`
    },
    population: {
      type: _graphql.GraphQLFloat,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.population),
      description: 'The average population of sentient beings inhabiting this planet.'
    },
    climates: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: planet => {
        return planet.climate.split(',').map(s => s.trim());
      },
      description: 'The climates of this planet.'
    },
    terrains: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: planet => {
        return planet.terrain.split(',').map(s => s.trim());
      },
      description: 'The terrains of this planet.'
    },
    surfaceWater: {
      type: _graphql.GraphQLFloat,
      resolve: planet => (0, _apiHelper.convertToNumber)(planet.surface_water),
      description: `The percentage of the planet surface that is naturally occuring water or bodies
of water.`
    },
    residentConnection: (0, _connections.connectionFromUrls)('PlanetResidents', 'residents', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('PlanetFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('planets')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
exports.default = PlanetType;

/***/ }),

/***/ "../lib/schema/types/species.js":
/*!**************************************!*\
  !*** ../lib/schema/types/species.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _relayNode = __webpack_require__(/*! ../relayNode */ "../lib/schema/relayNode.js");

var _commonFields = __webpack_require__(/*! ../commonFields */ "../lib/schema/commonFields.js");

var _connections = __webpack_require__(/*! ../connections */ "../lib/schema/connections.js");

var _apiHelper = __webpack_require__(/*! ../apiHelper */ "../lib/schema/apiHelper.js");

var _film = __webpack_require__(/*! ./film */ "../lib/schema/types/film.js");

var _film2 = _interopRequireDefault(_film);

var _person = __webpack_require__(/*! ./person */ "../lib/schema/types/person.js");

var _person2 = _interopRequireDefault(_person);

var _planet = __webpack_require__(/*! ./planet */ "../lib/schema/types/planet.js");

var _planet2 = _interopRequireDefault(_planet);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The GraphQL type equivalent of the Species resource
 */


const SpeciesType = new _graphql.GraphQLObjectType({
  name: 'Species',
  description: 'A type of person or character within the Star Wars Universe.',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this species.'
    },
    classification: {
      type: _graphql.GraphQLString,
      description: 'The classification of this species, such as "mammal" or "reptile".'
    },
    designation: {
      type: _graphql.GraphQLString,
      description: 'The designation of this species, such as "sentient".'
    },
    averageHeight: {
      type: _graphql.GraphQLFloat,
      resolve: species => (0, _apiHelper.convertToNumber)(species.average_height),
      description: 'The average height of this species in centimeters.'
    },
    averageLifespan: {
      type: _graphql.GraphQLInt,
      resolve: species => (0, _apiHelper.convertToNumber)(species.average_lifespan),
      description: 'The average lifespan of this species in years, null if unknown.'
    },
    eyeColors: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: species => {
        return species.eye_colors.split(',').map(s => s.trim());
      },
      description: `Common eye colors for this species, null if this species does not typically
have eyes.`
    },
    hairColors: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: species => {
        if (species.hair_colors === 'none') {
          return [];
        }

        return species.hair_colors.split(',').map(s => s.trim());
      },
      description: `Common hair colors for this species, null if this species does not typically
have hair.`
    },
    skinColors: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: species => {
        return species.skin_colors.split(',').map(s => s.trim());
      },
      description: `Common skin colors for this species, null if this species does not typically
have skin.`
    },
    language: {
      type: _graphql.GraphQLString,
      description: 'The language commonly spoken by this species.'
    },
    homeworld: {
      type: _planet2.default,
      resolve: species => species.homeworld ? (0, _apiHelper.getObjectFromUrl)(species.homeworld) : null,
      description: 'A planet that this species originates from.'
    },
    personConnection: (0, _connections.connectionFromUrls)('SpeciesPeople', 'people', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('SpeciesFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('species')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */

exports.default = SpeciesType;

/***/ }),

/***/ "../lib/schema/types/starship.js":
/*!***************************************!*\
  !*** ../lib/schema/types/starship.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _relayNode = __webpack_require__(/*! ../relayNode */ "../lib/schema/relayNode.js");

var _commonFields = __webpack_require__(/*! ../commonFields */ "../lib/schema/commonFields.js");

var _connections = __webpack_require__(/*! ../connections */ "../lib/schema/connections.js");

var _apiHelper = __webpack_require__(/*! ../apiHelper */ "../lib/schema/apiHelper.js");

var _film = __webpack_require__(/*! ./film */ "../lib/schema/types/film.js");

var _film2 = _interopRequireDefault(_film);

var _person = __webpack_require__(/*! ./person */ "../lib/schema/types/person.js");

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The GraphQL type equivalent of the Starship resource
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


const StarshipType = new _graphql.GraphQLObjectType({
  name: 'Starship',
  description: 'A single transport craft that has hyperdrive capability.',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: 'The name of this starship. The common name, such as "Death Star".'
    },
    model: {
      type: _graphql.GraphQLString,
      description: `The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
Orbital Battle Station".`
    },
    starshipClass: {
      type: _graphql.GraphQLString,
      resolve: ship => ship.starship_class,
      description: `The class of this starship, such as "Starfighter" or "Deep Space Mobile
Battlestation"`
    },
    manufacturers: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: ship => {
        return ship.manufacturer.split(',').map(s => s.trim());
      },
      description: 'The manufacturers of this starship.'
    },
    costInCredits: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.cost_in_credits),
      description: 'The cost of this starship new, in galactic credits.'
    },
    length: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.length),
      description: 'The length of this starship in meters.'
    },
    crew: {
      type: _graphql.GraphQLString,
      description: 'The number of personnel needed to run or pilot this starship.'
    },
    passengers: {
      type: _graphql.GraphQLString,
      description: 'The number of non-essential people this starship can transport.'
    },
    maxAtmospheringSpeed: {
      type: _graphql.GraphQLInt,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.max_atmosphering_speed),
      description: `The maximum speed of this starship in atmosphere. null if this starship is
incapable of atmosphering flight.`
    },
    hyperdriveRating: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.hyperdrive_rating),
      description: 'The class of this starships hyperdrive.'
    },
    MGLT: {
      type: _graphql.GraphQLInt,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.MGLT),
      description: `The Maximum number of Megalights this starship can travel in a standard hour.
A "Megalight" is a standard unit of distance and has never been defined before
within the Star Wars universe. This figure is only really useful for measuring
the difference in speed of starships. We can assume it is similar to AU, the
distance between our Sun (Sol) and Earth.`
    },
    cargoCapacity: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.cargo_capacity),
      description: 'The maximum number of kilograms that this starship can transport.'
    },
    consumables: {
      type: _graphql.GraphQLString,
      description: `The maximum length of time that this starship can provide consumables for its
entire crew without having to resupply.`
    },
    pilotConnection: (0, _connections.connectionFromUrls)('StarshipPilots', 'pilots', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('StarshipFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('starships')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
exports.default = StarshipType;

/***/ }),

/***/ "../lib/schema/types/vehicle.js":
/*!**************************************!*\
  !*** ../lib/schema/types/vehicle.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _graphqlRelay = __webpack_require__(/*! graphql-relay */ "../node_modules/graphql-relay/lib/index.js");

var _relayNode = __webpack_require__(/*! ../relayNode */ "../lib/schema/relayNode.js");

var _commonFields = __webpack_require__(/*! ../commonFields */ "../lib/schema/commonFields.js");

var _connections = __webpack_require__(/*! ../connections */ "../lib/schema/connections.js");

var _apiHelper = __webpack_require__(/*! ../apiHelper */ "../lib/schema/apiHelper.js");

var _film = __webpack_require__(/*! ./film */ "../lib/schema/types/film.js");

var _film2 = _interopRequireDefault(_film);

var _person = __webpack_require__(/*! ./person */ "../lib/schema/types/person.js");

var _person2 = _interopRequireDefault(_person);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * The GraphQL type equivalent of the Vehicle resource
 */

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 *  strict
 */


const VehicleType = new _graphql.GraphQLObjectType({
  name: 'Vehicle',
  description: 'A single transport craft that does not have hyperdrive capability',
  fields: () => ({
    name: {
      type: _graphql.GraphQLString,
      description: `The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
bike".`
    },
    model: {
      type: _graphql.GraphQLString,
      description: `The model or official name of this vehicle. Such as "All-Terrain Attack
Transport".`
    },
    vehicleClass: {
      type: _graphql.GraphQLString,
      resolve: vehicle => vehicle.vehicle_class,
      description: 'The class of this vehicle, such as "Wheeled" or "Repulsorcraft".'
    },
    manufacturers: {
      type: new _graphql.GraphQLList(_graphql.GraphQLString),
      resolve: vehicle => {
        return vehicle.manufacturer.split(',').map(s => s.trim());
      },
      description: 'The manufacturers of this vehicle.'
    },
    costInCredits: {
      type: _graphql.GraphQLFloat,
      resolve: vehicle => (0, _apiHelper.convertToNumber)(vehicle.cost_in_credits),
      description: 'The cost of this vehicle new, in Galactic Credits.'
    },
    length: {
      type: _graphql.GraphQLFloat,
      resolve: vehicle => (0, _apiHelper.convertToNumber)(vehicle.length),
      description: 'The length of this vehicle in meters.'
    },
    crew: {
      type: _graphql.GraphQLString,
      description: 'The number of personnel needed to run or pilot this vehicle.'
    },
    passengers: {
      type: _graphql.GraphQLString,
      description: 'The number of non-essential people this vehicle can transport.'
    },
    maxAtmospheringSpeed: {
      type: _graphql.GraphQLInt,
      resolve: vehicle => (0, _apiHelper.convertToNumber)(vehicle.max_atmosphering_speed),
      description: 'The maximum speed of this vehicle in atmosphere.'
    },
    cargoCapacity: {
      type: _graphql.GraphQLFloat,
      resolve: ship => (0, _apiHelper.convertToNumber)(ship.cargo_capacity),
      description: 'The maximum number of kilograms that this vehicle can transport.'
    },
    consumables: {
      type: _graphql.GraphQLString,
      description: `The maximum length of time that this vehicle can provide consumables for its
entire crew without having to resupply.`
    },
    pilotConnection: (0, _connections.connectionFromUrls)('VehiclePilots', 'pilots', _person2.default),
    filmConnection: (0, _connections.connectionFromUrls)('VehicleFilms', 'films', _film2.default),
    created: (0, _commonFields.createdField)(),
    edited: (0, _commonFields.editedField)(),
    id: (0, _graphqlRelay.globalIdField)('vehicles')
  }),
  interfaces: () => [_relayNode.nodeInterface]
});
exports.default = VehicleType;

/***/ }),

/***/ "../lib/service.js":
/*!*************************!*\
  !*** ../lib/service.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _cors = __webpack_require__(/*! cors */ "../node_modules/cors/lib/index.js");

var _cors2 = _interopRequireDefault(_cors);

var _fs = __webpack_require__(/*! fs */ "fs");

var _fs2 = _interopRequireDefault(_fs);

var _express = __webpack_require__(/*! express */ "../node_modules/express/index.js");

var _express2 = _interopRequireDefault(_express);

var _expressGraphql = __webpack_require__(/*! express-graphql */ "../node_modules/express-graphql/index.js");

var _expressGraphql2 = _interopRequireDefault(_expressGraphql);

var _index = __webpack_require__(/*! ./schema/index */ "../lib/schema/index.js");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const app = (0, _express2.default)();
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the
 * LICENSE-examples file in the root directory of this source tree.
 *
 */

app.use((0, _cors2.default)({
  origin: '*'
})); // Requests to /graphql redirect to /

app.all('/graphql', (req, res) => res.redirect('/')); // Load our own GraphiQL (since express-graphql has an older graphiql version)

app.use('/graphiql', _express2.default.static('./public')); // Provide the static schema for reference in a few formats

app.get('/schema', (req, res) => {
  res.set('Content-Type', 'text');

  _fs2.default.readFile('./schema.graphql', 'utf-8', (err, file) => {
    res.write(Buffer.from(file));
    res.end();
  });
}); // octet-stream

app.use('/schema.graphql', _express2.default.static('./schema.graphql')); // Finally, serve up the GraphQL Schema itself

app.use('/', (0, _expressGraphql2.default)(() => ({
  schema: _index2.default
})));
module.exports = app;

/***/ }),

/***/ "../node_modules/accepts/index.js":
/*!****************************************!*\
  !*** ../node_modules/accepts/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * accepts
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Negotiator = __webpack_require__(/*! negotiator */ "../node_modules/negotiator/index.js")
var mime = __webpack_require__(/*! mime-types */ "../node_modules/mime-types/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = Accepts

/**
 * Create a new Accepts object for the given req.
 *
 * @param {object} req
 * @public
 */

function Accepts (req) {
  if (!(this instanceof Accepts)) {
    return new Accepts(req)
  }

  this.headers = req.headers
  this.negotiator = new Negotiator(req)
}

/**
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single mime type string
 * such as "application/json", the extension name
 * such as "json" or an array `["json", "html", "text/plain"]`. When a list
 * or array is given the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     this.types('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     this.types('html');
 *     // => "html"
 *     this.types('text/html');
 *     // => "text/html"
 *     this.types('json', 'text');
 *     // => "json"
 *     this.types('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     this.types('image/png');
 *     this.types('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     this.types(['html', 'json']);
 *     this.types('html', 'json');
 *     // => "json"
 *
 * @param {String|Array} types...
 * @return {String|Array|Boolean}
 * @public
 */

Accepts.prototype.type =
Accepts.prototype.types = function (types_) {
  var types = types_

  // support flattened arguments
  if (types && !Array.isArray(types)) {
    types = new Array(arguments.length)
    for (var i = 0; i < types.length; i++) {
      types[i] = arguments[i]
    }
  }

  // no types, return all requested types
  if (!types || types.length === 0) {
    return this.negotiator.mediaTypes()
  }

  // no accept header, return first given type
  if (!this.headers.accept) {
    return types[0]
  }

  var mimes = types.map(extToMime)
  var accepts = this.negotiator.mediaTypes(mimes.filter(validMime))
  var first = accepts[0]

  return first
    ? types[mimes.indexOf(first)]
    : false
}

/**
 * Return accepted encodings or best fit based on `encodings`.
 *
 * Given `Accept-Encoding: gzip, deflate`
 * an array sorted by quality is returned:
 *
 *     ['gzip', 'deflate']
 *
 * @param {String|Array} encodings...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.encoding =
Accepts.prototype.encodings = function (encodings_) {
  var encodings = encodings_

  // support flattened arguments
  if (encodings && !Array.isArray(encodings)) {
    encodings = new Array(arguments.length)
    for (var i = 0; i < encodings.length; i++) {
      encodings[i] = arguments[i]
    }
  }

  // no encodings, return all requested encodings
  if (!encodings || encodings.length === 0) {
    return this.negotiator.encodings()
  }

  return this.negotiator.encodings(encodings)[0] || false
}

/**
 * Return accepted charsets or best fit based on `charsets`.
 *
 * Given `Accept-Charset: utf-8, iso-8859-1;q=0.2, utf-7;q=0.5`
 * an array sorted by quality is returned:
 *
 *     ['utf-8', 'utf-7', 'iso-8859-1']
 *
 * @param {String|Array} charsets...
 * @return {String|Array}
 * @public
 */

Accepts.prototype.charset =
Accepts.prototype.charsets = function (charsets_) {
  var charsets = charsets_

  // support flattened arguments
  if (charsets && !Array.isArray(charsets)) {
    charsets = new Array(arguments.length)
    for (var i = 0; i < charsets.length; i++) {
      charsets[i] = arguments[i]
    }
  }

  // no charsets, return all requested charsets
  if (!charsets || charsets.length === 0) {
    return this.negotiator.charsets()
  }

  return this.negotiator.charsets(charsets)[0] || false
}

/**
 * Return accepted languages or best fit based on `langs`.
 *
 * Given `Accept-Language: en;q=0.8, es, pt`
 * an array sorted by quality is returned:
 *
 *     ['es', 'pt', 'en']
 *
 * @param {String|Array} langs...
 * @return {Array|String}
 * @public
 */

Accepts.prototype.lang =
Accepts.prototype.langs =
Accepts.prototype.language =
Accepts.prototype.languages = function (languages_) {
  var languages = languages_

  // support flattened arguments
  if (languages && !Array.isArray(languages)) {
    languages = new Array(arguments.length)
    for (var i = 0; i < languages.length; i++) {
      languages[i] = arguments[i]
    }
  }

  // no languages, return all requested languages
  if (!languages || languages.length === 0) {
    return this.negotiator.languages()
  }

  return this.negotiator.languages(languages)[0] || false
}

/**
 * Convert extnames to mime.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function extToMime (type) {
  return type.indexOf('/') === -1
    ? mime.lookup(type)
    : type
}

/**
 * Check if mime is valid.
 *
 * @param {String} type
 * @return {String}
 * @private
 */

function validMime (type) {
  return typeof type === 'string'
}


/***/ }),

/***/ "../node_modules/array-flatten/array-flatten.js":
/*!******************************************************!*\
  !*** ../node_modules/array-flatten/array-flatten.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Expose `arrayFlatten`.
 */
module.exports = arrayFlatten

/**
 * Recursive flatten function with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {Number} depth
 * @return {Array}
 */
function flattenWithDepth (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > 0 && Array.isArray(value)) {
      flattenWithDepth(value, result, depth - 1)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Recursive flatten function. Omitting depth is slightly faster.
 *
 * @param  {Array} array
 * @param  {Array} result
 * @return {Array}
 */
function flattenForever (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenForever(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array, with the ability to define a depth.
 *
 * @param  {Array}  array
 * @param  {Number} depth
 * @return {Array}
 */
function arrayFlatten (array, depth) {
  if (depth == null) {
    return flattenForever(array, [])
  }

  return flattenWithDepth(array, [], depth)
}


/***/ }),

/***/ "../node_modules/aws-serverless-express/index.js":
/*!*******************************************************!*\
  !*** ../node_modules/aws-serverless-express/index.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */


module.exports = __webpack_require__(/*! ./src/index */ "../node_modules/aws-serverless-express/src/index.js")


/***/ }),

/***/ "../node_modules/aws-serverless-express/src/index.js":
/*!***********************************************************!*\
  !*** ../node_modules/aws-serverless-express/src/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
 * Copyright 2016-2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file.
 * This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

const http = __webpack_require__(/*! http */ "http")
const url = __webpack_require__(/*! url */ "url")
const binarycase = __webpack_require__(/*! binary-case */ "../node_modules/binary-case/index.js")
const isType = __webpack_require__(/*! type-is */ "../node_modules/type-is/index.js")

function getPathWithQueryStringParams (event) {
  return url.format({ pathname: event.path, query: event.queryStringParameters })
}
function getEventBody (event) {
  return Buffer.from(event.body, event.isBase64Encoded ? 'base64' : 'utf8')
}

function clone (json) {
  return JSON.parse(JSON.stringify(json))
}

function getContentType (params) {
  // only compare mime type; ignore encoding part
  return params.contentTypeHeader ? params.contentTypeHeader.split(';')[0] : ''
}

function isContentTypeBinaryMimeType (params) {
  return params.binaryMimeTypes.length > 0 && !!isType.is(params.contentType, params.binaryMimeTypes)
}

function mapApiGatewayEventToHttpRequest (event, context, socketPath) {
  const headers = Object.assign({}, event.headers)

  // NOTE: API Gateway is not setting Content-Length header on requests even when they have a body
  if (event.body && !headers['Content-Length']) {
    const body = getEventBody(event)
    headers['Content-Length'] = Buffer.byteLength(body)
  }

  const clonedEventWithoutBody = clone(event)
  delete clonedEventWithoutBody.body

  headers['x-apigateway-event'] = encodeURIComponent(JSON.stringify(clonedEventWithoutBody))
  headers['x-apigateway-context'] = encodeURIComponent(JSON.stringify(context))

  return {
    method: event.httpMethod,
    path: getPathWithQueryStringParams(event),
    headers,
    socketPath
    // protocol: `${headers['X-Forwarded-Proto']}:`,
    // host: headers.Host,
    // hostname: headers.Host, // Alias for host
    // port: headers['X-Forwarded-Port']
  }
}

function forwardResponseToApiGateway (server, response, resolver) {
  let buf = []

  response
    .on('data', (chunk) => buf.push(chunk))
    .on('end', () => {
      const bodyBuffer = Buffer.concat(buf)
      const statusCode = response.statusCode
      const headers = response.headers

      // chunked transfer not currently supported by API Gateway
      /* istanbul ignore else */
      if (headers['transfer-encoding'] === 'chunked') {
        delete headers['transfer-encoding']
      }

      // HACK: modifies header casing to get around API Gateway's limitation of not allowing multiple
      // headers with the same name, as discussed on the AWS Forum https://forums.aws.amazon.com/message.jspa?messageID=725953#725953
      Object.keys(headers)
        .forEach(h => {
          if (Array.isArray(headers[h])) {
            if (h.toLowerCase() === 'set-cookie') {
              headers[h].forEach((value, i) => {
                headers[binarycase(h, i + 1)] = value
              })
              delete headers[h]
            } else {
              headers[h] = headers[h].join(',')
            }
          }
        })

      const contentType = getContentType({ contentTypeHeader: headers['content-type'] })
      const isBase64Encoded = isContentTypeBinaryMimeType({ contentType, binaryMimeTypes: server._binaryTypes })
      const body = bodyBuffer.toString(isBase64Encoded ? 'base64' : 'utf8')
      const successResponse = {statusCode, body, headers, isBase64Encoded}

      resolver.succeed({ response: successResponse })
    })
}

function forwardConnectionErrorResponseToApiGateway (error, resolver) {
  console.log('ERROR: aws-serverless-express connection error')
  console.error(error)
  const errorResponse = {
    statusCode: 502, // "DNS resolution, TCP level errors, or actual HTTP parse errors" - https://nodejs.org/api/http.html#http_http_request_options_callback
    body: '',
    headers: {}
  }

  resolver.succeed({ response: errorResponse })
}

function forwardLibraryErrorResponseToApiGateway (error, resolver) {
  console.log('ERROR: aws-serverless-express error')
  console.error(error)
  const errorResponse = {
    statusCode: 500,
    body: '',
    headers: {}
  }

  resolver.succeed({ response: errorResponse })
}

function forwardRequestToNodeServer (server, event, context, resolver) {
  try {
    const requestOptions = mapApiGatewayEventToHttpRequest(event, context, getSocketPath(server._socketPathSuffix))
    const req = http.request(requestOptions, (response) => forwardResponseToApiGateway(server, response, resolver))
    if (event.body) {
      const body = getEventBody(event)

      req.write(body)
    }

    req.on('error', (error) => forwardConnectionErrorResponseToApiGateway(error, resolver))
      .end()
  } catch (error) {
    forwardLibraryErrorResponseToApiGateway(error, resolver)
    return server
  }
}

function startServer (server) {
  return server.listen(getSocketPath(server._socketPathSuffix))
}

function getSocketPath (socketPathSuffix) {
  /* istanbul ignore if */ /* only running tests on Linux; Window support is for local dev only */
  if (/^win/.test(process.platform)) {
    const path = __webpack_require__(/*! path */ "path")
    return path.join('\\\\?\\pipe', process.cwd(), `server-${socketPathSuffix}`)
  } else {
    return `/tmp/server-${socketPathSuffix}.sock`
  }
}

function getRandomString () {
  return Math.random().toString(36).substring(2, 15)
}

function createServer (requestListener, serverListenCallback, binaryTypes) {
  const server = http.createServer(requestListener)

  server._socketPathSuffix = getRandomString()
  server._binaryTypes = binaryTypes ? binaryTypes.slice() : []
  server.on('listening', () => {
    server._isListening = true

    if (serverListenCallback) serverListenCallback()
  })
  server.on('close', () => {
    server._isListening = false
  })
    .on('error', (error) => {
      /* istanbul ignore else */
      if (error.code === 'EADDRINUSE') {
        console.warn(`WARNING: Attempting to listen on socket ${getSocketPath(server._socketPathSuffix)}, but it is already in use. This is likely as a result of a previous invocation error or timeout. Check the logs for the invocation(s) immediately prior to this for root cause, and consider increasing the timeout and/or cpu/memory allocation if this is purely as a result of a timeout. aws-serverless-express will restart the Node.js server listening on a new port and continue with this request.`)
        server._socketPathSuffix = getRandomString()
        return server.close(() => startServer(server))
      } else {
        console.log('ERROR: server error')
        console.error(error)
      }
    })

  return server
}

function proxy (server, event, context, resolutionMode, callback) {
  // DEPRECATED: Legacy support
  if (!resolutionMode) {
    const resolver = makeResolver({ context, resolutionMode: 'CONTEXT_SUCCEED' })
    if (server._isListening) {
      forwardRequestToNodeServer(server, event, context, resolver)
      return server
    } else {
      return startServer(server)
        .on('listening', () => proxy(server, event, context))
    }
  }

  return {
    promise: new Promise((resolve, reject) => {
      const promise = {
        resolve,
        reject
      }
      const resolver = makeResolver({
        context,
        callback,
        promise,
        resolutionMode
      })

      if (server._isListening) {
        forwardRequestToNodeServer(server, event, context, resolver)
      } else {
        startServer(server)
          .on('listening', () => forwardRequestToNodeServer(server, event, context, resolver))
      }
    })
  }
}

function makeResolver (params/* {
  context,
  callback,
  promise,
  resolutionMode
} */) {
  return {
    succeed: (params2/* {
      response
    } */) => {
      if (params.resolutionMode === 'CONTEXT_SUCCEED') return params.context.succeed(params2.response)
      if (params.resolutionMode === 'CALLBACK') return params.callback(null, params2.response)
      if (params.resolutionMode === 'PROMISE') return params.promise.resolve(params2.response)
    }
  }
}

exports.createServer = createServer
exports.proxy = proxy

/* istanbul ignore else */
if (false) {}


/***/ }),

/***/ "../node_modules/binary-case/index.js":
/*!********************************************!*\
  !*** ../node_modules/binary-case/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 *  @license
 *    Copyright 2018 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/


/**
 * Toggle the case of a string based on the number value passed in.
 * @param {string} string
 * @param {number} number
 * @param {object} [options={allowOverflow: true}]
 * @returns {string|boolean}
 */
module.exports = binaryCase;

function binaryCase(string, number, options) {
    if (!options || typeof options !== 'object') options = {};
    if (!options.hasOwnProperty('allowOverflow')) options.allowOverflow = true;

    if (number > binaryCase.maxNumber(string) && !options.allowOverflow) return false;

    return getBinaryCase(string, number);
}

binaryCase.iterator = function(string, options) {
    const max = binaryCase.maxNumber(string);

    if (!options || typeof options !== 'object') options = {};
    if (!options.hasOwnProperty('startIndex')) options.startIndex = 0;
    if (typeof options.startIndex !== 'number' || !Number.isInteger(options.startIndex) || options.startIndex < 0) throw Error('Option startIndex must be a non-negative integer.');

    let index = options.startIndex;
    return {
        next: function() {
            return index > max
                ? { done: true }
                : { done: false, value: getBinaryCase(string, index++) };
        }
    };
};

/**
 * Get the maximum number that can be used before causing overflow.
 * @param {string} string
 * @returns {number}
 */
binaryCase.maxNumber = function(string) {
    const pow = string.match(/[a-z]/ig).length;
    return Math.pow(2, pow) - 1;
};

/**
 * Get an array of all possible variations.
 * @param {string} string
 * @returns {string[]}
 */
binaryCase.variations = function(string) {
    const results = [];
    const max = binaryCase.maxNumber(string);
    for (let i = 0; i <= max; i++) {
        results.push(binaryCase(string, i));
    }
    return results;
};

/**
 * A performance improved method for acquiring the binary case, provided by Blake Embrey with very minor modification by James Speirs.
 * @author Blake Embrey | https://github.com/blakeembrey
 * @author James Speirs | https://github.com/gi60s
 * @param {string} str
 * @param {number} val
 * @returns {string}
 */
function getBinaryCase (str, val) {
    let res = '';

    for (let i = 0; i < str.length; i++) {
        const code = str.charCodeAt(i);

        if (code >= 65 && code <= 90) {
            res += val & 1 ? String.fromCharCode(code + 32) : String.fromCharCode(code);
            val >>>= 1;
        } else if (code >= 97 && code <= 122) {
            res += val & 1 ? String.fromCharCode(code - 32) : String.fromCharCode(code);
            val >>>= 1;
        } else {
            res += String.fromCharCode(code);
        }

        if (val === 0) {
            return res + str.substr(i + 1);
        }
    }

    return res;
}

/***/ }),

/***/ "../node_modules/body-parser/index.js":
/*!********************************************!*\
  !*** ../node_modules/body-parser/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('body-parser')

/**
 * Cache of loaded parsers.
 * @private
 */

var parsers = Object.create(null)

/**
 * @typedef Parsers
 * @type {function}
 * @property {function} json
 * @property {function} raw
 * @property {function} text
 * @property {function} urlencoded
 */

/**
 * Module exports.
 * @type {Parsers}
 */

exports = module.exports = deprecate.function(bodyParser,
  'bodyParser: use individual json/urlencoded middlewares')

/**
 * JSON parser.
 * @public
 */

Object.defineProperty(exports, 'json', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('json')
})

/**
 * Raw parser.
 * @public
 */

Object.defineProperty(exports, 'raw', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('raw')
})

/**
 * Text parser.
 * @public
 */

Object.defineProperty(exports, 'text', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('text')
})

/**
 * URL-encoded parser.
 * @public
 */

Object.defineProperty(exports, 'urlencoded', {
  configurable: true,
  enumerable: true,
  get: createParserGetter('urlencoded')
})

/**
 * Create a middleware to parse json and urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @deprecated
 * @public
 */

function bodyParser (options) {
  var opts = {}

  // exclude type option
  if (options) {
    for (var prop in options) {
      if (prop !== 'type') {
        opts[prop] = options[prop]
      }
    }
  }

  var _urlencoded = exports.urlencoded(opts)
  var _json = exports.json(opts)

  return function bodyParser (req, res, next) {
    _json(req, res, function (err) {
      if (err) return next(err)
      _urlencoded(req, res, next)
    })
  }
}

/**
 * Create a getter for loading a parser.
 * @private
 */

function createParserGetter (name) {
  return function get () {
    return loadParser(name)
  }
}

/**
 * Load a parser module.
 * @private
 */

function loadParser (parserName) {
  var parser = parsers[parserName]

  if (parser !== undefined) {
    return parser
  }

  // this uses a switch for static require analysis
  switch (parserName) {
    case 'json':
      parser = __webpack_require__(/*! ./lib/types/json */ "../node_modules/body-parser/lib/types/json.js")
      break
    case 'raw':
      parser = __webpack_require__(/*! ./lib/types/raw */ "../node_modules/body-parser/lib/types/raw.js")
      break
    case 'text':
      parser = __webpack_require__(/*! ./lib/types/text */ "../node_modules/body-parser/lib/types/text.js")
      break
    case 'urlencoded':
      parser = __webpack_require__(/*! ./lib/types/urlencoded */ "../node_modules/body-parser/lib/types/urlencoded.js")
      break
  }

  // store to prevent invoking require()
  return (parsers[parserName] = parser)
}


/***/ }),

/***/ "../node_modules/body-parser/lib/read.js":
/*!***********************************************!*\
  !*** ../node_modules/body-parser/lib/read.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var createError = __webpack_require__(/*! http-errors */ "../node_modules/body-parser/node_modules/http-errors/index.js")
var getBody = __webpack_require__(/*! raw-body */ "../node_modules/body-parser/node_modules/raw-body/index.js")
var iconv = __webpack_require__(/*! iconv-lite */ "../node_modules/iconv-lite/lib/index.js")
var onFinished = __webpack_require__(/*! on-finished */ "../node_modules/on-finished/index.js")
var zlib = __webpack_require__(/*! zlib */ "zlib")

/**
 * Module exports.
 */

module.exports = read

/**
 * Read a request into a buffer and parse.
 *
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @param {function} parse
 * @param {function} debug
 * @param {object} options
 * @private
 */

function read (req, res, next, parse, debug, options) {
  var length
  var opts = options
  var stream

  // flag as parsed
  req._body = true

  // read options
  var encoding = opts.encoding !== null
    ? opts.encoding
    : null
  var verify = opts.verify

  try {
    // get the content stream
    stream = contentstream(req, debug, opts.inflate)
    length = stream.length
    stream.length = undefined
  } catch (err) {
    return next(err)
  }

  // set raw-body options
  opts.length = length
  opts.encoding = verify
    ? null
    : encoding

  // assert charset is supported
  if (opts.encoding === null && encoding !== null && !iconv.encodingExists(encoding)) {
    return next(createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
      charset: encoding.toLowerCase(),
      type: 'charset.unsupported'
    }))
  }

  // read body
  debug('read body')
  getBody(stream, opts, function (error, body) {
    if (error) {
      var _error

      if (error.type === 'encoding.unsupported') {
        // echo back charset
        _error = createError(415, 'unsupported charset "' + encoding.toUpperCase() + '"', {
          charset: encoding.toLowerCase(),
          type: 'charset.unsupported'
        })
      } else {
        // set status code on error
        _error = createError(400, error)
      }

      // read off entire request
      stream.resume()
      onFinished(req, function onfinished () {
        next(createError(400, _error))
      })
      return
    }

    // verify
    if (verify) {
      try {
        debug('verify body')
        verify(req, res, body, encoding)
      } catch (err) {
        next(createError(403, err, {
          body: body,
          type: err.type || 'entity.verify.failed'
        }))
        return
      }
    }

    // parse
    var str = body
    try {
      debug('parse body')
      str = typeof body !== 'string' && encoding !== null
        ? iconv.decode(body, encoding)
        : body
      req.body = parse(str)
    } catch (err) {
      next(createError(400, err, {
        body: str,
        type: err.type || 'entity.parse.failed'
      }))
      return
    }

    next()
  })
}

/**
 * Get the content stream of the request.
 *
 * @param {object} req
 * @param {function} debug
 * @param {boolean} [inflate=true]
 * @return {object}
 * @api private
 */

function contentstream (req, debug, inflate) {
  var encoding = (req.headers['content-encoding'] || 'identity').toLowerCase()
  var length = req.headers['content-length']
  var stream

  debug('content-encoding "%s"', encoding)

  if (inflate === false && encoding !== 'identity') {
    throw createError(415, 'content encoding unsupported', {
      encoding: encoding,
      type: 'encoding.unsupported'
    })
  }

  switch (encoding) {
    case 'deflate':
      stream = zlib.createInflate()
      debug('inflate body')
      req.pipe(stream)
      break
    case 'gzip':
      stream = zlib.createGunzip()
      debug('gunzip body')
      req.pipe(stream)
      break
    case 'identity':
      stream = req
      stream.length = length
      break
    default:
      throw createError(415, 'unsupported content encoding "' + encoding + '"', {
        encoding: encoding,
        type: 'encoding.unsupported'
      })
  }

  return stream
}


/***/ }),

/***/ "../node_modules/body-parser/lib/types/json.js":
/*!*****************************************************!*\
  !*** ../node_modules/body-parser/lib/types/json.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var bytes = __webpack_require__(/*! bytes */ "../node_modules/bytes/index.js")
var contentType = __webpack_require__(/*! content-type */ "../node_modules/content-type/index.js")
var createError = __webpack_require__(/*! http-errors */ "../node_modules/body-parser/node_modules/http-errors/index.js")
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('body-parser:json')
var read = __webpack_require__(/*! ../read */ "../node_modules/body-parser/lib/read.js")
var typeis = __webpack_require__(/*! type-is */ "../node_modules/type-is/index.js")

/**
 * Module exports.
 */

module.exports = json

/**
 * RegExp to match the first non-space in a string.
 *
 * Allowed whitespace is defined in RFC 7159:
 *
 *    ws = *(
 *            %x20 /              ; Space
 *            %x09 /              ; Horizontal tab
 *            %x0A /              ; Line feed or New line
 *            %x0D )              ; Carriage return
 */

var FIRST_CHAR_REGEXP = /^[\x20\x09\x0a\x0d]*(.)/ // eslint-disable-line no-control-regex

/**
 * Create a middleware to parse JSON bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */

function json (options) {
  var opts = options || {}

  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var inflate = opts.inflate !== false
  var reviver = opts.reviver
  var strict = opts.strict !== false
  var type = opts.type || 'application/json'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (body) {
    if (body.length === 0) {
      // special-case empty json body, as it's a common client-side mistake
      // TODO: maybe make this configurable or part of "strict" option
      return {}
    }

    if (strict) {
      var first = firstchar(body)

      if (first !== '{' && first !== '[') {
        debug('strict violation')
        throw createStrictSyntaxError(body, first)
      }
    }

    try {
      debug('parse json')
      return JSON.parse(body, reviver)
    } catch (e) {
      throw normalizeJsonSyntaxError(e, {
        message: e.message,
        stack: e.stack
      })
    }
  }

  return function jsonParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // assert charset per RFC 7159 sec 8.1
    var charset = getCharset(req) || 'utf-8'
    if (charset.substr(0, 4) !== 'utf-') {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
        charset: charset,
        type: 'charset.unsupported'
      }))
      return
    }

    // read
    read(req, res, next, parse, debug, {
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Create strict violation syntax error matching native error.
 *
 * @param {string} str
 * @param {string} char
 * @return {Error}
 * @private
 */

function createStrictSyntaxError (str, char) {
  var index = str.indexOf(char)
  var partial = str.substring(0, index) + '#'

  try {
    JSON.parse(partial); /* istanbul ignore next */ throw new SyntaxError('strict violation')
  } catch (e) {
    return normalizeJsonSyntaxError(e, {
      message: e.message.replace('#', char),
      stack: e.stack
    })
  }
}

/**
 * Get the first non-whitespace character in a string.
 *
 * @param {string} str
 * @return {function}
 * @private
 */

function firstchar (str) {
  return FIRST_CHAR_REGEXP.exec(str)[1]
}

/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */

function getCharset (req) {
  try {
    return (contentType.parse(req).parameters.charset || '').toLowerCase()
  } catch (e) {
    return undefined
  }
}

/**
 * Normalize a SyntaxError for JSON.parse.
 *
 * @param {SyntaxError} error
 * @param {object} obj
 * @return {SyntaxError}
 */

function normalizeJsonSyntaxError (error, obj) {
  var keys = Object.getOwnPropertyNames(error)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    if (key !== 'stack' && key !== 'message') {
      delete error[key]
    }
  }

  // replace stack before message for Node.js 0.10 and below
  error.stack = obj.stack.replace(error.message, obj.message)
  error.message = obj.message

  return error
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),

/***/ "../node_modules/body-parser/lib/types/raw.js":
/*!****************************************************!*\
  !*** ../node_modules/body-parser/lib/types/raw.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var bytes = __webpack_require__(/*! bytes */ "../node_modules/bytes/index.js")
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('body-parser:raw')
var read = __webpack_require__(/*! ../read */ "../node_modules/body-parser/lib/read.js")
var typeis = __webpack_require__(/*! type-is */ "../node_modules/type-is/index.js")

/**
 * Module exports.
 */

module.exports = raw

/**
 * Create a middleware to parse raw bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */

function raw (options) {
  var opts = options || {}

  var inflate = opts.inflate !== false
  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var type = opts.type || 'application/octet-stream'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (buf) {
    return buf
  }

  return function rawParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // read
    read(req, res, next, parse, debug, {
      encoding: null,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),

/***/ "../node_modules/body-parser/lib/types/text.js":
/*!*****************************************************!*\
  !*** ../node_modules/body-parser/lib/types/text.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var bytes = __webpack_require__(/*! bytes */ "../node_modules/bytes/index.js")
var contentType = __webpack_require__(/*! content-type */ "../node_modules/content-type/index.js")
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('body-parser:text')
var read = __webpack_require__(/*! ../read */ "../node_modules/body-parser/lib/read.js")
var typeis = __webpack_require__(/*! type-is */ "../node_modules/type-is/index.js")

/**
 * Module exports.
 */

module.exports = text

/**
 * Create a middleware to parse text bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @api public
 */

function text (options) {
  var opts = options || {}

  var defaultCharset = opts.defaultCharset || 'utf-8'
  var inflate = opts.inflate !== false
  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var type = opts.type || 'text/plain'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (buf) {
    return buf
  }

  return function textParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // get charset
    var charset = getCharset(req) || defaultCharset

    // read
    read(req, res, next, parse, debug, {
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */

function getCharset (req) {
  try {
    return (contentType.parse(req).parameters.charset || '').toLowerCase()
  } catch (e) {
    return undefined
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),

/***/ "../node_modules/body-parser/lib/types/urlencoded.js":
/*!***********************************************************!*\
  !*** ../node_modules/body-parser/lib/types/urlencoded.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * body-parser
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var bytes = __webpack_require__(/*! bytes */ "../node_modules/bytes/index.js")
var contentType = __webpack_require__(/*! content-type */ "../node_modules/content-type/index.js")
var createError = __webpack_require__(/*! http-errors */ "../node_modules/body-parser/node_modules/http-errors/index.js")
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('body-parser:urlencoded')
var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('body-parser')
var read = __webpack_require__(/*! ../read */ "../node_modules/body-parser/lib/read.js")
var typeis = __webpack_require__(/*! type-is */ "../node_modules/type-is/index.js")

/**
 * Module exports.
 */

module.exports = urlencoded

/**
 * Cache of parser modules.
 */

var parsers = Object.create(null)

/**
 * Create a middleware to parse urlencoded bodies.
 *
 * @param {object} [options]
 * @return {function}
 * @public
 */

function urlencoded (options) {
  var opts = options || {}

  // notice because option default will flip in next major
  if (opts.extended === undefined) {
    deprecate('undefined extended: provide extended option')
  }

  var extended = opts.extended !== false
  var inflate = opts.inflate !== false
  var limit = typeof opts.limit !== 'number'
    ? bytes.parse(opts.limit || '100kb')
    : opts.limit
  var type = opts.type || 'application/x-www-form-urlencoded'
  var verify = opts.verify || false

  if (verify !== false && typeof verify !== 'function') {
    throw new TypeError('option verify must be function')
  }

  // create the appropriate query parser
  var queryparse = extended
    ? extendedparser(opts)
    : simpleparser(opts)

  // create the appropriate type checking function
  var shouldParse = typeof type !== 'function'
    ? typeChecker(type)
    : type

  function parse (body) {
    return body.length
      ? queryparse(body)
      : {}
  }

  return function urlencodedParser (req, res, next) {
    if (req._body) {
      debug('body already parsed')
      next()
      return
    }

    req.body = req.body || {}

    // skip requests without bodies
    if (!typeis.hasBody(req)) {
      debug('skip empty body')
      next()
      return
    }

    debug('content-type %j', req.headers['content-type'])

    // determine if request should be parsed
    if (!shouldParse(req)) {
      debug('skip parsing')
      next()
      return
    }

    // assert charset
    var charset = getCharset(req) || 'utf-8'
    if (charset !== 'utf-8') {
      debug('invalid charset')
      next(createError(415, 'unsupported charset "' + charset.toUpperCase() + '"', {
        charset: charset,
        type: 'charset.unsupported'
      }))
      return
    }

    // read
    read(req, res, next, parse, debug, {
      debug: debug,
      encoding: charset,
      inflate: inflate,
      limit: limit,
      verify: verify
    })
  }
}

/**
 * Get the extended query parser.
 *
 * @param {object} options
 */

function extendedparser (options) {
  var parameterLimit = options.parameterLimit !== undefined
    ? options.parameterLimit
    : 1000
  var parse = parser('qs')

  if (isNaN(parameterLimit) || parameterLimit < 1) {
    throw new TypeError('option parameterLimit must be a positive number')
  }

  if (isFinite(parameterLimit)) {
    parameterLimit = parameterLimit | 0
  }

  return function queryparse (body) {
    var paramCount = parameterCount(body, parameterLimit)

    if (paramCount === undefined) {
      debug('too many parameters')
      throw createError(413, 'too many parameters', {
        type: 'parameters.too.many'
      })
    }

    var arrayLimit = Math.max(100, paramCount)

    debug('parse extended urlencoding')
    return parse(body, {
      allowPrototypes: true,
      arrayLimit: arrayLimit,
      depth: Infinity,
      parameterLimit: parameterLimit
    })
  }
}

/**
 * Get the charset of a request.
 *
 * @param {object} req
 * @api private
 */

function getCharset (req) {
  try {
    return (contentType.parse(req).parameters.charset || '').toLowerCase()
  } catch (e) {
    return undefined
  }
}

/**
 * Count the number of parameters, stopping once limit reached
 *
 * @param {string} body
 * @param {number} limit
 * @api private
 */

function parameterCount (body, limit) {
  var count = 0
  var index = 0

  while ((index = body.indexOf('&', index)) !== -1) {
    count++
    index++

    if (count === limit) {
      return undefined
    }
  }

  return count
}

/**
 * Get parser for module name dynamically.
 *
 * @param {string} name
 * @return {function}
 * @api private
 */

function parser (name) {
  var mod = parsers[name]

  if (mod !== undefined) {
    return mod.parse
  }

  // this uses a switch for static require analysis
  switch (name) {
    case 'qs':
      mod = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js")
      break
    case 'querystring':
      mod = __webpack_require__(/*! querystring */ "querystring")
      break
  }

  // store to prevent invoking require()
  parsers[name] = mod

  return mod.parse
}

/**
 * Get the simple query parser.
 *
 * @param {object} options
 */

function simpleparser (options) {
  var parameterLimit = options.parameterLimit !== undefined
    ? options.parameterLimit
    : 1000
  var parse = parser('querystring')

  if (isNaN(parameterLimit) || parameterLimit < 1) {
    throw new TypeError('option parameterLimit must be a positive number')
  }

  if (isFinite(parameterLimit)) {
    parameterLimit = parameterLimit | 0
  }

  return function queryparse (body) {
    var paramCount = parameterCount(body, parameterLimit)

    if (paramCount === undefined) {
      debug('too many parameters')
      throw createError(413, 'too many parameters', {
        type: 'parameters.too.many'
      })
    }

    debug('parse urlencoding')
    return parse(body, undefined, undefined, { maxKeys: parameterLimit })
  }
}

/**
 * Get the simple type checker.
 *
 * @param {string} type
 * @return {function}
 */

function typeChecker (type) {
  return function checkType (req) {
    return Boolean(typeis(req, type))
  }
}


/***/ }),

/***/ "../node_modules/body-parser/node_modules/http-errors/index.js":
/*!*********************************************************************!*\
  !*** ../node_modules/body-parser/node_modules/http-errors/index.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * http-errors
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('http-errors')
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "../node_modules/setprototypeof/index.js")
var statuses = __webpack_require__(/*! statuses */ "../node_modules/statuses/index.js")
var inherits = __webpack_require__(/*! inherits */ "../node_modules/body-parser/node_modules/inherits/inherits.js")
var toIdentifier = __webpack_require__(/*! toidentifier */ "../node_modules/toidentifier/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = createError
module.exports.HttpError = createHttpErrorConstructor()

// Populate exports for all constructors
populateConstructorExports(module.exports, statuses.codes, module.exports.HttpError)

/**
 * Get the code class of a status code.
 * @private
 */

function codeClass (status) {
  return Number(String(status).charAt(0) + '00')
}

/**
 * Create a new HTTP Error.
 *
 * @returns {Error}
 * @public
 */

function createError () {
  // so much arity going on ~_~
  var err
  var msg
  var status = 500
  var props = {}
  for (var i = 0; i < arguments.length; i++) {
    var arg = arguments[i]
    if (arg instanceof Error) {
      err = arg
      status = err.status || err.statusCode || status
      continue
    }
    switch (typeof arg) {
      case 'string':
        msg = arg
        break
      case 'number':
        status = arg
        if (i !== 0) {
          deprecate('non-first-argument status code; replace with createError(' + arg + ', ...)')
        }
        break
      case 'object':
        props = arg
        break
    }
  }

  if (typeof status === 'number' && (status < 400 || status >= 600)) {
    deprecate('non-error status code; use only 4xx or 5xx status codes')
  }

  if (typeof status !== 'number' ||
    (!statuses[status] && (status < 400 || status >= 600))) {
    status = 500
  }

  // constructor
  var HttpError = createError[status] || createError[codeClass(status)]

  if (!err) {
    // create error
    err = HttpError
      ? new HttpError(msg)
      : new Error(msg || statuses[status])
    Error.captureStackTrace(err, createError)
  }

  if (!HttpError || !(err instanceof HttpError) || err.status !== status) {
    // add properties to generic error
    err.expose = status < 500
    err.status = err.statusCode = status
  }

  for (var key in props) {
    if (key !== 'status' && key !== 'statusCode') {
      err[key] = props[key]
    }
  }

  return err
}

/**
 * Create HTTP error abstract base class.
 * @private
 */

function createHttpErrorConstructor () {
  function HttpError () {
    throw new TypeError('cannot construct abstract class')
  }

  inherits(HttpError, Error)

  return HttpError
}

/**
 * Create a constructor for a client error.
 * @private
 */

function createClientErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ClientError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ClientError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ClientError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ClientError, HttpError)
  nameFunc(ClientError, className)

  ClientError.prototype.status = code
  ClientError.prototype.statusCode = code
  ClientError.prototype.expose = true

  return ClientError
}

/**
 * Create a constructor for a server error.
 * @private
 */

function createServerErrorConstructor (HttpError, name, code) {
  var className = name.match(/Error$/) ? name : name + 'Error'

  function ServerError (message) {
    // create the error object
    var msg = message != null ? message : statuses[code]
    var err = new Error(msg)

    // capture a stack trace to the construction point
    Error.captureStackTrace(err, ServerError)

    // adjust the [[Prototype]]
    setPrototypeOf(err, ServerError.prototype)

    // redefine the error message
    Object.defineProperty(err, 'message', {
      enumerable: true,
      configurable: true,
      value: msg,
      writable: true
    })

    // redefine the error name
    Object.defineProperty(err, 'name', {
      enumerable: false,
      configurable: true,
      value: className,
      writable: true
    })

    return err
  }

  inherits(ServerError, HttpError)
  nameFunc(ServerError, className)

  ServerError.prototype.status = code
  ServerError.prototype.statusCode = code
  ServerError.prototype.expose = false

  return ServerError
}

/**
 * Set the name of a function, if possible.
 * @private
 */

function nameFunc (func, name) {
  var desc = Object.getOwnPropertyDescriptor(func, 'name')

  if (desc && desc.configurable) {
    desc.value = name
    Object.defineProperty(func, 'name', desc)
  }
}

/**
 * Populate the exports object with constructors for every error class.
 * @private
 */

function populateConstructorExports (exports, codes, HttpError) {
  codes.forEach(function forEachCode (code) {
    var CodeError
    var name = toIdentifier(statuses[code])

    switch (codeClass(code)) {
      case 400:
        CodeError = createClientErrorConstructor(HttpError, name, code)
        break
      case 500:
        CodeError = createServerErrorConstructor(HttpError, name, code)
        break
    }

    if (CodeError) {
      // export the constructor
      exports[code] = CodeError
      exports[name] = CodeError
    }
  })

  // backwards-compatibility
  exports["I'mateapot"] = deprecate.function(exports.ImATeapot,
    '"I\'mateapot"; use "ImATeapot" instead')
}


/***/ }),

/***/ "../node_modules/body-parser/node_modules/inherits/inherits.js":
/*!*********************************************************************!*\
  !*** ../node_modules/body-parser/node_modules/inherits/inherits.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

try {
  var util = __webpack_require__(/*! util */ "util");
  if (typeof util.inherits !== 'function') throw '';
  module.exports = util.inherits;
} catch (e) {
  module.exports = __webpack_require__(/*! ./inherits_browser.js */ "../node_modules/body-parser/node_modules/inherits/inherits_browser.js");
}


/***/ }),

/***/ "../node_modules/body-parser/node_modules/inherits/inherits_browser.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/body-parser/node_modules/inherits/inherits_browser.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if (typeof Object.create === 'function') {
  // implementation from standard node.js 'util' module
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    ctor.prototype = Object.create(superCtor.prototype, {
      constructor: {
        value: ctor,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
  };
} else {
  // old school shim for old browsers
  module.exports = function inherits(ctor, superCtor) {
    ctor.super_ = superCtor
    var TempCtor = function () {}
    TempCtor.prototype = superCtor.prototype
    ctor.prototype = new TempCtor()
    ctor.prototype.constructor = ctor
  }
}


/***/ }),

/***/ "../node_modules/body-parser/node_modules/raw-body/index.js":
/*!******************************************************************!*\
  !*** ../node_modules/body-parser/node_modules/raw-body/index.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * raw-body
 * Copyright(c) 2013-2014 Jonathan Ong
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var bytes = __webpack_require__(/*! bytes */ "../node_modules/bytes/index.js")
var createError = __webpack_require__(/*! http-errors */ "../node_modules/body-parser/node_modules/http-errors/index.js")
var iconv = __webpack_require__(/*! iconv-lite */ "../node_modules/iconv-lite/lib/index.js")
var unpipe = __webpack_require__(/*! unpipe */ "../node_modules/unpipe/index.js")

/**
 * Module exports.
 * @public
 */

module.exports = getRawBody

/**
 * Module variables.
 * @private
 */

var ICONV_ENCODING_MESSAGE_REGEXP = /^Encoding not recognized: /

/**
 * Get the decoder for a given encoding.
 *
 * @param {string} encoding
 * @private
 */

function getDecoder (encoding) {
  if (!encoding) return null

  try {
    return iconv.getDecoder(encoding)
  } catch (e) {
    // error getting decoder
    if (!ICONV_ENCODING_MESSAGE_REGEXP.test(e.message)) throw e

    // the encoding was not found
    throw createError(415, 'specified encoding unsupported', {
      encoding: encoding,
      type: 'encoding.unsupported'
    })
  }
}

/**
 * Get the raw body of a stream (typically HTTP).
 *
 * @param {object} stream
 * @param {object|string|function} [options]
 * @param {function} [callback]
 * @public
 */

function getRawBody (stream, options, callback) {
  var done = callback
  var opts = options || {}

  if (options === true || typeof options === 'string') {
    // short cut for encoding
    opts = {
      encoding: options
    }
  }

  if (typeof options === 'function') {
    done = options
    opts = {}
  }

  // validate callback is a function, if provided
  if (done !== undefined && typeof done !== 'function') {
    throw new TypeError('argument callback must be a function')
  }

  // require the callback without promises
  if (!done && !global.Promise) {
    throw new TypeError('argument callback is required')
  }

  // get encoding
  var encoding = opts.encoding !== true
    ? opts.encoding
    : 'utf-8'

  // convert the limit to an integer
  var limit = bytes.parse(opts.limit)

  // convert the expected length to an integer
  var length = opts.length != null && !isNaN(opts.length)
    ? parseInt(opts.length, 10)
    : null

  if (done) {
    // classic callback style
    return readStream(stream, encoding, length, limit, done)
  }

  return new Promise(function executor (resolve, reject) {
    readStream(stream, encoding, length, limit, function onRead (err, buf) {
      if (err) return reject(err)
      resolve(buf)
    })
  })
}

/**
 * Halt a stream.
 *
 * @param {Object} stream
 * @private
 */

function halt (stream) {
  // unpipe everything from the stream
  unpipe(stream)

  // pause stream
  if (typeof stream.pause === 'function') {
    stream.pause()
  }
}

/**
 * Read the data from the stream.
 *
 * @param {object} stream
 * @param {string} encoding
 * @param {number} length
 * @param {number} limit
 * @param {function} callback
 * @public
 */

function readStream (stream, encoding, length, limit, callback) {
  var complete = false
  var sync = true

  // check the length and limit options.
  // note: we intentionally leave the stream paused,
  // so users should handle the stream themselves.
  if (limit !== null && length !== null && length > limit) {
    return done(createError(413, 'request entity too large', {
      expected: length,
      length: length,
      limit: limit,
      type: 'entity.too.large'
    }))
  }

  // streams1: assert request encoding is buffer.
  // streams2+: assert the stream encoding is buffer.
  //   stream._decoder: streams1
  //   state.encoding: streams2
  //   state.decoder: streams2, specifically < 0.10.6
  var state = stream._readableState
  if (stream._decoder || (state && (state.encoding || state.decoder))) {
    // developer error
    return done(createError(500, 'stream encoding should not be set', {
      type: 'stream.encoding.set'
    }))
  }

  var received = 0
  var decoder

  try {
    decoder = getDecoder(encoding)
  } catch (err) {
    return done(err)
  }

  var buffer = decoder
    ? ''
    : []

  // attach listeners
  stream.on('aborted', onAborted)
  stream.on('close', cleanup)
  stream.on('data', onData)
  stream.on('end', onEnd)
  stream.on('error', onEnd)

  // mark sync section complete
  sync = false

  function done () {
    var args = new Array(arguments.length)

    // copy arguments
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }

    // mark complete
    complete = true

    if (sync) {
      process.nextTick(invokeCallback)
    } else {
      invokeCallback()
    }

    function invokeCallback () {
      cleanup()

      if (args[0]) {
        // halt the stream on error
        halt(stream)
      }

      callback.apply(null, args)
    }
  }

  function onAborted () {
    if (complete) return

    done(createError(400, 'request aborted', {
      code: 'ECONNABORTED',
      expected: length,
      length: length,
      received: received,
      type: 'request.aborted'
    }))
  }

  function onData (chunk) {
    if (complete) return

    received += chunk.length

    if (limit !== null && received > limit) {
      done(createError(413, 'request entity too large', {
        limit: limit,
        received: received,
        type: 'entity.too.large'
      }))
    } else if (decoder) {
      buffer += decoder.write(chunk)
    } else {
      buffer.push(chunk)
    }
  }

  function onEnd (err) {
    if (complete) return
    if (err) return done(err)

    if (length !== null && received !== length) {
      done(createError(400, 'request size did not match content length', {
        expected: length,
        length: length,
        received: received,
        type: 'request.size.invalid'
      }))
    } else {
      var string = decoder
        ? buffer + (decoder.end() || '')
        : Buffer.concat(buffer)
      done(null, string)
    }
  }

  function cleanup () {
    buffer = null

    stream.removeListener('aborted', onAborted)
    stream.removeListener('data', onData)
    stream.removeListener('end', onEnd)
    stream.removeListener('error', onEnd)
    stream.removeListener('close', cleanup)
  }
}


/***/ }),

/***/ "../node_modules/bytes/index.js":
/*!**************************************!*\
  !*** ../node_modules/bytes/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * bytes
 * Copyright(c) 2012-2014 TJ Holowaychuk
 * Copyright(c) 2015 Jed Watson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = bytes;
module.exports.format = format;
module.exports.parse = parse;

/**
 * Module variables.
 * @private
 */

var formatThousandsRegExp = /\B(?=(\d{3})+(?!\d))/g;

var formatDecimalsRegExp = /(?:\.0*|(\.[^0]+)0+)$/;

var map = {
  b:  1,
  kb: 1 << 10,
  mb: 1 << 20,
  gb: 1 << 30,
  tb: Math.pow(1024, 4),
  pb: Math.pow(1024, 5),
};

var parseRegExp = /^((-|\+)?(\d+(?:\.\d+)?)) *(kb|mb|gb|tb|pb)$/i;

/**
 * Convert the given value in bytes into a string or parse to string to an integer in bytes.
 *
 * @param {string|number} value
 * @param {{
 *  case: [string],
 *  decimalPlaces: [number]
 *  fixedDecimals: [boolean]
 *  thousandsSeparator: [string]
 *  unitSeparator: [string]
 *  }} [options] bytes options.
 *
 * @returns {string|number|null}
 */

function bytes(value, options) {
  if (typeof value === 'string') {
    return parse(value);
  }

  if (typeof value === 'number') {
    return format(value, options);
  }

  return null;
}

/**
 * Format the given value in bytes into a string.
 *
 * If the value is negative, it is kept as such. If it is a float,
 * it is rounded.
 *
 * @param {number} value
 * @param {object} [options]
 * @param {number} [options.decimalPlaces=2]
 * @param {number} [options.fixedDecimals=false]
 * @param {string} [options.thousandsSeparator=]
 * @param {string} [options.unit=]
 * @param {string} [options.unitSeparator=]
 *
 * @returns {string|null}
 * @public
 */

function format(value, options) {
  if (!Number.isFinite(value)) {
    return null;
  }

  var mag = Math.abs(value);
  var thousandsSeparator = (options && options.thousandsSeparator) || '';
  var unitSeparator = (options && options.unitSeparator) || '';
  var decimalPlaces = (options && options.decimalPlaces !== undefined) ? options.decimalPlaces : 2;
  var fixedDecimals = Boolean(options && options.fixedDecimals);
  var unit = (options && options.unit) || '';

  if (!unit || !map[unit.toLowerCase()]) {
    if (mag >= map.pb) {
      unit = 'PB';
    } else if (mag >= map.tb) {
      unit = 'TB';
    } else if (mag >= map.gb) {
      unit = 'GB';
    } else if (mag >= map.mb) {
      unit = 'MB';
    } else if (mag >= map.kb) {
      unit = 'KB';
    } else {
      unit = 'B';
    }
  }

  var val = value / map[unit.toLowerCase()];
  var str = val.toFixed(decimalPlaces);

  if (!fixedDecimals) {
    str = str.replace(formatDecimalsRegExp, '$1');
  }

  if (thousandsSeparator) {
    str = str.replace(formatThousandsRegExp, thousandsSeparator);
  }

  return str + unitSeparator + unit;
}

/**
 * Parse the string value into an integer in bytes.
 *
 * If no unit is given, it is assumed the value is in bytes.
 *
 * @param {number|string} val
 *
 * @returns {number|null}
 * @public
 */

function parse(val) {
  if (typeof val === 'number' && !isNaN(val)) {
    return val;
  }

  if (typeof val !== 'string') {
    return null;
  }

  // Test if the string passed is valid
  var results = parseRegExp.exec(val);
  var floatValue;
  var unit = 'b';

  if (!results) {
    // Nothing could be extracted from the given string
    floatValue = parseInt(val, 10);
    unit = 'b'
  } else {
    // Retrieve the value and the unit
    floatValue = parseFloat(results[1]);
    unit = results[4].toLowerCase();
  }

  return Math.floor(map[unit] * floatValue);
}


/***/ }),

/***/ "../node_modules/content-disposition/index.js":
/*!****************************************************!*\
  !*** ../node_modules/content-disposition/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-disposition
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = contentDisposition
module.exports.parse = parse

/**
 * Module dependencies.
 * @private
 */

var basename = __webpack_require__(/*! path */ "path").basename
var Buffer = __webpack_require__(/*! safe-buffer */ "../node_modules/content-disposition/node_modules/safe-buffer/index.js").Buffer

/**
 * RegExp to match non attr-char, *after* encodeURIComponent (i.e. not including "%")
 * @private
 */

var ENCODE_URL_ATTR_CHAR_REGEXP = /[\x00-\x20"'()*,/:;<=>?@[\\\]{}\x7f]/g // eslint-disable-line no-control-regex

/**
 * RegExp to match percent encoding escape.
 * @private
 */

var HEX_ESCAPE_REGEXP = /%[0-9A-Fa-f]{2}/
var HEX_ESCAPE_REPLACE_REGEXP = /%([0-9A-Fa-f]{2})/g

/**
 * RegExp to match non-latin1 characters.
 * @private
 */

var NON_LATIN1_REGEXP = /[^\x20-\x7e\xa0-\xff]/g

/**
 * RegExp to match quoted-pair in RFC 2616
 *
 * quoted-pair = "\" CHAR
 * CHAR        = <any US-ASCII character (octets 0 - 127)>
 * @private
 */

var QESC_REGEXP = /\\([\u0000-\u007f])/g // eslint-disable-line no-control-regex

/**
 * RegExp to match chars that must be quoted-pair in RFC 2616
 * @private
 */

var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp for various RFC 2616 grammar
 *
 * parameter     = token "=" ( token | quoted-string )
 * token         = 1*<any CHAR except CTLs or separators>
 * separators    = "(" | ")" | "<" | ">" | "@"
 *               | "," | ";" | ":" | "\" | <">
 *               | "/" | "[" | "]" | "?" | "="
 *               | "{" | "}" | SP | HT
 * quoted-string = ( <"> *(qdtext | quoted-pair ) <"> )
 * qdtext        = <any TEXT except <">>
 * quoted-pair   = "\" CHAR
 * CHAR          = <any US-ASCII character (octets 0 - 127)>
 * TEXT          = <any OCTET except CTLs, but including LWS>
 * LWS           = [CRLF] 1*( SP | HT )
 * CRLF          = CR LF
 * CR            = <US-ASCII CR, carriage return (13)>
 * LF            = <US-ASCII LF, linefeed (10)>
 * SP            = <US-ASCII SP, space (32)>
 * HT            = <US-ASCII HT, horizontal-tab (9)>
 * CTL           = <any US-ASCII control character (octets 0 - 31) and DEL (127)>
 * OCTET         = <any 8-bit sequence of data>
 * @private
 */

var PARAM_REGEXP = /;[\x09\x20]*([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*=[\x09\x20]*("(?:[\x20!\x23-\x5b\x5d-\x7e\x80-\xff]|\\[\x20-\x7e])*"|[!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*/g // eslint-disable-line no-control-regex
var TEXT_REGEXP = /^[\x20-\x7e\x80-\xff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.0-9A-Z^_`a-z|~-]+$/

/**
 * RegExp for various RFC 5987 grammar
 *
 * ext-value     = charset  "'" [ language ] "'" value-chars
 * charset       = "UTF-8" / "ISO-8859-1" / mime-charset
 * mime-charset  = 1*mime-charsetc
 * mime-charsetc = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "%" / "&"
 *               / "+" / "-" / "^" / "_" / "`"
 *               / "{" / "}" / "~"
 * language      = ( 2*3ALPHA [ extlang ] )
 *               / 4ALPHA
 *               / 5*8ALPHA
 * extlang       = *3( "-" 3ALPHA )
 * value-chars   = *( pct-encoded / attr-char )
 * pct-encoded   = "%" HEXDIG HEXDIG
 * attr-char     = ALPHA / DIGIT
 *               / "!" / "#" / "$" / "&" / "+" / "-" / "."
 *               / "^" / "_" / "`" / "|" / "~"
 * @private
 */

var EXT_VALUE_REGEXP = /^([A-Za-z0-9!#$%&+\-^_`{}~]+)'(?:[A-Za-z]{2,3}(?:-[A-Za-z]{3}){0,3}|[A-Za-z]{4,8}|)'((?:%[0-9A-Fa-f]{2}|[A-Za-z0-9!#$&+.^_`|~-])+)$/

/**
 * RegExp for various RFC 6266 grammar
 *
 * disposition-type = "inline" | "attachment" | disp-ext-type
 * disp-ext-type    = token
 * disposition-parm = filename-parm | disp-ext-parm
 * filename-parm    = "filename" "=" value
 *                  | "filename*" "=" ext-value
 * disp-ext-parm    = token "=" value
 *                  | ext-token "=" ext-value
 * ext-token        = <the characters in token, followed by "*">
 * @private
 */

var DISPOSITION_TYPE_REGEXP = /^([!#$%&'*+.0-9A-Z^_`a-z|~-]+)[\x09\x20]*(?:$|;)/ // eslint-disable-line no-control-regex

/**
 * Create an attachment Content-Disposition header.
 *
 * @param {string} [filename]
 * @param {object} [options]
 * @param {string} [options.type=attachment]
 * @param {string|boolean} [options.fallback=true]
 * @return {string}
 * @public
 */

function contentDisposition (filename, options) {
  var opts = options || {}

  // get type
  var type = opts.type || 'attachment'

  // get parameters
  var params = createparams(filename, opts.fallback)

  // format into string
  return format(new ContentDisposition(type, params))
}

/**
 * Create parameters object from filename and fallback.
 *
 * @param {string} [filename]
 * @param {string|boolean} [fallback=true]
 * @return {object}
 * @private
 */

function createparams (filename, fallback) {
  if (filename === undefined) {
    return
  }

  var params = {}

  if (typeof filename !== 'string') {
    throw new TypeError('filename must be a string')
  }

  // fallback defaults to true
  if (fallback === undefined) {
    fallback = true
  }

  if (typeof fallback !== 'string' && typeof fallback !== 'boolean') {
    throw new TypeError('fallback must be a string or boolean')
  }

  if (typeof fallback === 'string' && NON_LATIN1_REGEXP.test(fallback)) {
    throw new TypeError('fallback must be ISO-8859-1 string')
  }

  // restrict to file base name
  var name = basename(filename)

  // determine if name is suitable for quoted string
  var isQuotedString = TEXT_REGEXP.test(name)

  // generate fallback name
  var fallbackName = typeof fallback !== 'string'
    ? fallback && getlatin1(name)
    : basename(fallback)
  var hasFallback = typeof fallbackName === 'string' && fallbackName !== name

  // set extended filename parameter
  if (hasFallback || !isQuotedString || HEX_ESCAPE_REGEXP.test(name)) {
    params['filename*'] = name
  }

  // set filename parameter
  if (isQuotedString || hasFallback) {
    params.filename = hasFallback
      ? fallbackName
      : name
  }

  return params
}

/**
 * Format object to Content-Disposition header.
 *
 * @param {object} obj
 * @param {string} obj.type
 * @param {object} [obj.parameters]
 * @return {string}
 * @private
 */

function format (obj) {
  var parameters = obj.parameters
  var type = obj.type

  if (!type || typeof type !== 'string' || !TOKEN_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  // start with normalized type
  var string = String(type).toLowerCase()

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      var val = param.substr(-1) === '*'
        ? ustring(parameters[param])
        : qstring(parameters[param])

      string += '; ' + param + '=' + val
    }
  }

  return string
}

/**
 * Decode a RFC 6987 field value (gracefully).
 *
 * @param {string} str
 * @return {string}
 * @private
 */

function decodefield (str) {
  var match = EXT_VALUE_REGEXP.exec(str)

  if (!match) {
    throw new TypeError('invalid extended field value')
  }

  var charset = match[1].toLowerCase()
  var encoded = match[2]
  var value

  // to binary string
  var binary = encoded.replace(HEX_ESCAPE_REPLACE_REGEXP, pdecode)

  switch (charset) {
    case 'iso-8859-1':
      value = getlatin1(binary)
      break
    case 'utf-8':
      value = Buffer.from(binary, 'binary').toString('utf8')
      break
    default:
      throw new TypeError('unsupported charset in extended field')
  }

  return value
}

/**
 * Get ISO-8859-1 version of string.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function getlatin1 (val) {
  // simple Unicode -> ISO-8859-1 transformation
  return String(val).replace(NON_LATIN1_REGEXP, '?')
}

/**
 * Parse Content-Disposition header string.
 *
 * @param {string} string
 * @return {object}
 * @public
 */

function parse (string) {
  if (!string || typeof string !== 'string') {
    throw new TypeError('argument string is required')
  }

  var match = DISPOSITION_TYPE_REGEXP.exec(string)

  if (!match) {
    throw new TypeError('invalid type format')
  }

  // normalize type
  var index = match[0].length
  var type = match[1].toLowerCase()

  var key
  var names = []
  var params = {}
  var value

  // calculate index to start at
  index = PARAM_REGEXP.lastIndex = match[0].substr(-1) === ';'
    ? index - 1
    : index

  // match parameters
  while ((match = PARAM_REGEXP.exec(string))) {
    if (match.index !== index) {
      throw new TypeError('invalid parameter format')
    }

    index += match[0].length
    key = match[1].toLowerCase()
    value = match[2]

    if (names.indexOf(key) !== -1) {
      throw new TypeError('invalid duplicate parameter')
    }

    names.push(key)

    if (key.indexOf('*') + 1 === key.length) {
      // decode extended value
      key = key.slice(0, -1)
      value = decodefield(value)

      // overwrite existing value
      params[key] = value
      continue
    }

    if (typeof params[key] === 'string') {
      continue
    }

    if (value[0] === '"') {
      // remove quotes and escapes
      value = value
        .substr(1, value.length - 2)
        .replace(QESC_REGEXP, '$1')
    }

    params[key] = value
  }

  if (index !== -1 && index !== string.length) {
    throw new TypeError('invalid parameter format')
  }

  return new ContentDisposition(type, params)
}

/**
 * Percent decode a single character.
 *
 * @param {string} str
 * @param {string} hex
 * @return {string}
 * @private
 */

function pdecode (str, hex) {
  return String.fromCharCode(parseInt(hex, 16))
}

/**
 * Percent encode a single character.
 *
 * @param {string} char
 * @return {string}
 * @private
 */

function pencode (char) {
  return '%' + String(char)
    .charCodeAt(0)
    .toString(16)
    .toUpperCase()
}

/**
 * Quote a string for HTTP.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Encode a Unicode string for HTTP (RFC 5987).
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function ustring (val) {
  var str = String(val)

  // percent encode as UTF-8
  var encoded = encodeURIComponent(str)
    .replace(ENCODE_URL_ATTR_CHAR_REGEXP, pencode)

  return 'UTF-8\'\'' + encoded
}

/**
 * Class for parsed Content-Disposition header for v8 optimization
 *
 * @public
 * @param {string} type
 * @param {object} parameters
 * @constructor
 */

function ContentDisposition (type, parameters) {
  this.type = type
  this.parameters = parameters
}


/***/ }),

/***/ "../node_modules/content-disposition/node_modules/safe-buffer/index.js":
/*!*****************************************************************************!*\
  !*** ../node_modules/content-disposition/node_modules/safe-buffer/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "buffer")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "../node_modules/content-type/index.js":
/*!*********************************************!*\
  !*** ../node_modules/content-type/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * content-type
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to match *( ";" parameter ) in RFC 7231 sec 3.1.1.1
 *
 * parameter     = token "=" ( token / quoted-string )
 * token         = 1*tchar
 * tchar         = "!" / "#" / "$" / "%" / "&" / "'" / "*"
 *               / "+" / "-" / "." / "^" / "_" / "`" / "|" / "~"
 *               / DIGIT / ALPHA
 *               ; any VCHAR, except delimiters
 * quoted-string = DQUOTE *( qdtext / quoted-pair ) DQUOTE
 * qdtext        = HTAB / SP / %x21 / %x23-5B / %x5D-7E / obs-text
 * obs-text      = %x80-FF
 * quoted-pair   = "\" ( HTAB / SP / VCHAR / obs-text )
 */
var PARAM_REGEXP = /; *([!#$%&'*+.^_`|~0-9A-Za-z-]+) *= *("(?:[\u000b\u0020\u0021\u0023-\u005b\u005d-\u007e\u0080-\u00ff]|\\[\u000b\u0020-\u00ff])*"|[!#$%&'*+.^_`|~0-9A-Za-z-]+) */g
var TEXT_REGEXP = /^[\u000b\u0020-\u007e\u0080-\u00ff]+$/
var TOKEN_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * RegExp to match quoted-pair in RFC 7230 sec 3.2.6
 *
 * quoted-pair = "\" ( HTAB / SP / VCHAR / obs-text )
 * obs-text    = %x80-FF
 */
var QESC_REGEXP = /\\([\u000b\u0020-\u00ff])/g

/**
 * RegExp to match chars that must be quoted-pair in RFC 7230 sec 3.2.6
 */
var QUOTE_REGEXP = /([\\"])/g

/**
 * RegExp to match type in RFC 7231 sec 3.1.1.1
 *
 * media-type = type "/" subtype
 * type       = token
 * subtype    = token
 */
var TYPE_REGEXP = /^[!#$%&'*+.^_`|~0-9A-Za-z-]+\/[!#$%&'*+.^_`|~0-9A-Za-z-]+$/

/**
 * Module exports.
 * @public
 */

exports.format = format
exports.parse = parse

/**
 * Format object to media type.
 *
 * @param {object} obj
 * @return {string}
 * @public
 */

function format (obj) {
  if (!obj || typeof obj !== 'object') {
    throw new TypeError('argument obj is required')
  }

  var parameters = obj.parameters
  var type = obj.type

  if (!type || !TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid type')
  }

  var string = type

  // append parameters
  if (parameters && typeof parameters === 'object') {
    var param
    var params = Object.keys(parameters).sort()

    for (var i = 0; i < params.length; i++) {
      param = params[i]

      if (!TOKEN_REGEXP.test(param)) {
        throw new TypeError('invalid parameter name')
      }

      string += '; ' + param + '=' + qstring(parameters[param])
    }
  }

  return string
}

/**
 * Parse media type to object.
 *
 * @param {string|object} string
 * @return {Object}
 * @public
 */

function parse (string) {
  if (!string) {
    throw new TypeError('argument string is required')
  }

  // support req/res-like objects as argument
  var header = typeof string === 'object'
    ? getcontenttype(string)
    : string

  if (typeof header !== 'string') {
    throw new TypeError('argument string is required to be a string')
  }

  var index = header.indexOf(';')
  var type = index !== -1
    ? header.substr(0, index).trim()
    : header.trim()

  if (!TYPE_REGEXP.test(type)) {
    throw new TypeError('invalid media type')
  }

  var obj = new ContentType(type.toLowerCase())

  // parse parameters
  if (index !== -1) {
    var key
    var match
    var value

    PARAM_REGEXP.lastIndex = index

    while ((match = PARAM_REGEXP.exec(header))) {
      if (match.index !== index) {
        throw new TypeError('invalid parameter format')
      }

      index += match[0].length
      key = match[1].toLowerCase()
      value = match[2]

      if (value[0] === '"') {
        // remove quotes and escapes
        value = value
          .substr(1, value.length - 2)
          .replace(QESC_REGEXP, '$1')
      }

      obj.parameters[key] = value
    }

    if (index !== header.length) {
      throw new TypeError('invalid parameter format')
    }
  }

  return obj
}

/**
 * Get content-type from req/res objects.
 *
 * @param {object}
 * @return {Object}
 * @private
 */

function getcontenttype (obj) {
  var header

  if (typeof obj.getHeader === 'function') {
    // res-like
    header = obj.getHeader('content-type')
  } else if (typeof obj.headers === 'object') {
    // req-like
    header = obj.headers && obj.headers['content-type']
  }

  if (typeof header !== 'string') {
    throw new TypeError('content-type header is missing from object')
  }

  return header
}

/**
 * Quote a string if necessary.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function qstring (val) {
  var str = String(val)

  // no need to quote tokens
  if (TOKEN_REGEXP.test(str)) {
    return str
  }

  if (str.length > 0 && !TEXT_REGEXP.test(str)) {
    throw new TypeError('invalid parameter value')
  }

  return '"' + str.replace(QUOTE_REGEXP, '\\$1') + '"'
}

/**
 * Class to represent a content type.
 * @private
 */
function ContentType (type) {
  this.parameters = Object.create(null)
  this.type = type
}


/***/ }),

/***/ "../node_modules/cookie-signature/index.js":
/*!*************************************************!*\
  !*** ../node_modules/cookie-signature/index.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var crypto = __webpack_require__(/*! crypto */ "crypto");

/**
 * Sign the given `val` with `secret`.
 *
 * @param {String} val
 * @param {String} secret
 * @return {String}
 * @api private
 */

exports.sign = function(val, secret){
  if ('string' != typeof val) throw new TypeError("Cookie value must be provided as a string.");
  if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
  return val + '.' + crypto
    .createHmac('sha256', secret)
    .update(val)
    .digest('base64')
    .replace(/\=+$/, '');
};

/**
 * Unsign and decode the given `val` with `secret`,
 * returning `false` if the signature is invalid.
 *
 * @param {String} val
 * @param {String} secret
 * @return {String|Boolean}
 * @api private
 */

exports.unsign = function(val, secret){
  if ('string' != typeof val) throw new TypeError("Signed cookie string must be provided.");
  if ('string' != typeof secret) throw new TypeError("Secret string must be provided.");
  var str = val.slice(0, val.lastIndexOf('.'))
    , mac = exports.sign(str, secret);
  
  return sha1(mac) == sha1(val) ? str : false;
};

/**
 * Private
 */

function sha1(str){
  return crypto.createHash('sha1').update(str).digest('hex');
}


/***/ }),

/***/ "../node_modules/cookie/index.js":
/*!***************************************!*\
  !*** ../node_modules/cookie/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;
    if (isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ "../node_modules/cors/lib/index.js":
/*!*****************************************!*\
  !*** ../node_modules/cors/lib/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {

  'use strict';

  var assign = __webpack_require__(/*! object-assign */ "../node_modules/object-assign/index.js");
  var vary = __webpack_require__(/*! vary */ "../node_modules/vary/index.js");

  var defaults = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
  };

  function isString(s) {
    return typeof s === 'string' || s instanceof String;
  }

  function isOriginAllowed(origin, allowedOrigin) {
    if (Array.isArray(allowedOrigin)) {
      for (var i = 0; i < allowedOrigin.length; ++i) {
        if (isOriginAllowed(origin, allowedOrigin[i])) {
          return true;
        }
      }
      return false;
    } else if (isString(allowedOrigin)) {
      return origin === allowedOrigin;
    } else if (allowedOrigin instanceof RegExp) {
      return allowedOrigin.test(origin);
    } else {
      return !!allowedOrigin;
    }
  }

  function configureOrigin(options, req) {
    var requestOrigin = req.headers.origin,
      headers = [],
      isAllowed;

    if (!options.origin || options.origin === '*') {
      // allow any origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: '*'
      }]);
    } else if (isString(options.origin)) {
      // fixed origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: options.origin
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    } else {
      isAllowed = isOriginAllowed(requestOrigin, options.origin);
      // reflect origin
      headers.push([{
        key: 'Access-Control-Allow-Origin',
        value: isAllowed ? requestOrigin : false
      }]);
      headers.push([{
        key: 'Vary',
        value: 'Origin'
      }]);
    }

    return headers;
  }

  function configureMethods(options) {
    var methods = options.methods;
    if (methods.join) {
      methods = options.methods.join(','); // .methods is an array, so turn it into a string
    }
    return {
      key: 'Access-Control-Allow-Methods',
      value: methods
    };
  }

  function configureCredentials(options) {
    if (options.credentials === true) {
      return {
        key: 'Access-Control-Allow-Credentials',
        value: 'true'
      };
    }
    return null;
  }

  function configureAllowedHeaders(options, req) {
    var allowedHeaders = options.allowedHeaders || options.headers;
    var headers = [];

    if (!allowedHeaders) {
      allowedHeaders = req.headers['access-control-request-headers']; // .headers wasn't specified, so reflect the request headers
      headers.push([{
        key: 'Vary',
        value: 'Access-Control-Request-Headers'
      }]);
    } else if (allowedHeaders.join) {
      allowedHeaders = allowedHeaders.join(','); // .headers is an array, so turn it into a string
    }
    if (allowedHeaders && allowedHeaders.length) {
      headers.push([{
        key: 'Access-Control-Allow-Headers',
        value: allowedHeaders
      }]);
    }

    return headers;
  }

  function configureExposedHeaders(options) {
    var headers = options.exposedHeaders;
    if (!headers) {
      return null;
    } else if (headers.join) {
      headers = headers.join(','); // .headers is an array, so turn it into a string
    }
    if (headers && headers.length) {
      return {
        key: 'Access-Control-Expose-Headers',
        value: headers
      };
    }
    return null;
  }

  function configureMaxAge(options) {
    var maxAge = (typeof options.maxAge === 'number' || options.maxAge) && options.maxAge.toString()
    if (maxAge && maxAge.length) {
      return {
        key: 'Access-Control-Max-Age',
        value: maxAge
      };
    }
    return null;
  }

  function applyHeaders(headers, res) {
    for (var i = 0, n = headers.length; i < n; i++) {
      var header = headers[i];
      if (header) {
        if (Array.isArray(header)) {
          applyHeaders(header, res);
        } else if (header.key === 'Vary' && header.value) {
          vary(res, header.value);
        } else if (header.value) {
          res.setHeader(header.key, header.value);
        }
      }
    }
  }

  function cors(options, req, res, next) {
    var headers = [],
      method = req.method && req.method.toUpperCase && req.method.toUpperCase();

    if (method === 'OPTIONS') {
      // preflight
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureMethods(options, req));
      headers.push(configureAllowedHeaders(options, req));
      headers.push(configureMaxAge(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);

      if (options.preflightContinue) {
        next();
      } else {
        // Safari (and potentially other browsers) need content-length 0,
        //   for 204 or they just hang waiting for a body
        res.statusCode = options.optionsSuccessStatus;
        res.setHeader('Content-Length', '0');
        res.end();
      }
    } else {
      // actual response
      headers.push(configureOrigin(options, req));
      headers.push(configureCredentials(options, req));
      headers.push(configureExposedHeaders(options, req));
      applyHeaders(headers, res);
      next();
    }
  }

  function middlewareWrapper(o) {
    // if options are static (either via defaults or custom options passed in), wrap in a function
    var optionsCallback = null;
    if (typeof o === 'function') {
      optionsCallback = o;
    } else {
      optionsCallback = function (req, cb) {
        cb(null, o);
      };
    }

    return function corsMiddleware(req, res, next) {
      optionsCallback(req, function (err, options) {
        if (err) {
          next(err);
        } else {
          var corsOptions = assign({}, defaults, options);
          var originCallback = null;
          if (corsOptions.origin && typeof corsOptions.origin === 'function') {
            originCallback = corsOptions.origin;
          } else if (corsOptions.origin) {
            originCallback = function (origin, cb) {
              cb(null, corsOptions.origin);
            };
          }

          if (originCallback) {
            originCallback(req.headers.origin, function (err2, origin) {
              if (err2 || !origin) {
                next(err2);
              } else {
                corsOptions.origin = origin;
                cors(corsOptions, req, res, next);
              }
            });
          } else {
            next();
          }
        }
      });
    };
  }

  // can pass either an options hash, an options delegate, or nothing
  module.exports = middlewareWrapper;

}());


/***/ }),

/***/ "../node_modules/dataloader/index.js":
/*!*******************************************!*\
  !*** ../node_modules/dataloader/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * A `DataLoader` creates a public API for loading data from a particular
 * data back-end with unique keys such as the `id` column of a SQL table or
 * document name in a MongoDB database, given a batch loading function.
 *
 * Each `DataLoader` instance contains a unique memoized cache. Use caution when
 * used in long-lived applications or those which serve many users with
 * different access permissions and consider creating a new instance per
 * web request.
 */


// Optionally turn off batching or caching or provide a cache key function or a
// custom cache instance.
var DataLoader = function () {
  function DataLoader(batchLoadFn, options) {
    _classCallCheck(this, DataLoader);

    if (typeof batchLoadFn !== 'function') {
      throw new TypeError('DataLoader must be constructed with a function which accepts ' + ('Array<key> and returns Promise<Array<value>>, but got: ' + batchLoadFn + '.'));
    }
    this._batchLoadFn = batchLoadFn;
    this._options = options;
    this._promiseCache = getValidCacheMap(options);
    this._queue = [];
  }

  // Private


  /**
   * Loads a key, returning a `Promise` for the value represented by that key.
   */
  DataLoader.prototype.load = function load(key) {
    var _this = this;

    if (key === null || key === undefined) {
      throw new TypeError('The loader.load() function must be called with a value,' + ('but got: ' + String(key) + '.'));
    }

    // Determine options
    var options = this._options;
    var shouldBatch = !options || options.batch !== false;
    var shouldCache = !options || options.cache !== false;
    var cacheKeyFn = options && options.cacheKeyFn;
    var cacheKey = cacheKeyFn ? cacheKeyFn(key) : key;

    // If caching and there is a cache-hit, return cached Promise.
    if (shouldCache) {
      var cachedPromise = this._promiseCache.get(cacheKey);
      if (cachedPromise) {
        return cachedPromise;
      }
    }

    // Otherwise, produce a new Promise for this value.
    var promise = new Promise(function (resolve, reject) {
      // Enqueue this Promise to be dispatched.
      _this._queue.push({ key: key, resolve: resolve, reject: reject });

      // Determine if a dispatch of this queue should be scheduled.
      // A single dispatch should be scheduled per queue at the time when the
      // queue changes from "empty" to "full".
      if (_this._queue.length === 1) {
        if (shouldBatch) {
          // If batching, schedule a task to dispatch the queue.
          enqueuePostPromiseJob(function () {
            return dispatchQueue(_this);
          });
        } else {
          // Otherwise dispatch the (queue of one) immediately.
          dispatchQueue(_this);
        }
      }
    });

    // If caching, cache this promise.
    if (shouldCache) {
      this._promiseCache.set(cacheKey, promise);
    }

    return promise;
  };

  /**
   * Loads multiple keys, promising an array of values:
   *
   *     var [ a, b ] = await myLoader.loadMany([ 'a', 'b' ]);
   *
   * This is equivalent to the more verbose:
   *
   *     var [ a, b ] = await Promise.all([
   *       myLoader.load('a'),
   *       myLoader.load('b')
   *     ]);
   *
   */


  DataLoader.prototype.loadMany = function loadMany(keys) {
    var _this2 = this;

    if (!Array.isArray(keys)) {
      throw new TypeError('The loader.loadMany() function must be called with Array<key> ' + ('but got: ' + keys + '.'));
    }
    return Promise.all(keys.map(function (key) {
      return _this2.load(key);
    }));
  };

  /**
   * Clears the value at `key` from the cache, if it exists. Returns itself for
   * method chaining.
   */


  DataLoader.prototype.clear = function clear(key) {
    var cacheKeyFn = this._options && this._options.cacheKeyFn;
    var cacheKey = cacheKeyFn ? cacheKeyFn(key) : key;
    this._promiseCache.delete(cacheKey);
    return this;
  };

  /**
   * Clears the entire cache. To be used when some event results in unknown
   * invalidations across this particular `DataLoader`. Returns itself for
   * method chaining.
   */


  DataLoader.prototype.clearAll = function clearAll() {
    this._promiseCache.clear();
    return this;
  };

  /**
   * Adds the provided key and value to the cache. If the key already
   * exists, no change is made. Returns itself for method chaining.
   */


  DataLoader.prototype.prime = function prime(key, value) {
    var cacheKeyFn = this._options && this._options.cacheKeyFn;
    var cacheKey = cacheKeyFn ? cacheKeyFn(key) : key;

    // Only add the key if it does not already exist.
    if (this._promiseCache.get(cacheKey) === undefined) {
      // Cache a rejected promise if the value is an Error, in order to match
      // the behavior of load(key).
      var promise = value instanceof Error ? Promise.reject(value) : Promise.resolve(value);

      this._promiseCache.set(cacheKey, promise);
    }

    return this;
  };

  return DataLoader;
}();

// Private: Enqueue a Job to be executed after all "PromiseJobs" Jobs.
//
// ES6 JavaScript uses the concepts Job and JobQueue to schedule work to occur
// after the current execution context has completed:
// http://www.ecma-international.org/ecma-262/6.0/#sec-jobs-and-job-queues
//
// Node.js uses the `process.nextTick` mechanism to implement the concept of a
// Job, maintaining a global FIFO JobQueue for all Jobs, which is flushed after
// the current call stack ends.
//
// When calling `then` on a Promise, it enqueues a Job on a specific
// "PromiseJobs" JobQueue which is flushed in Node as a single Job on the
// global JobQueue.
//
// DataLoader batches all loads which occur in a single frame of execution, but
// should include in the batch all loads which occur during the flushing of the
// "PromiseJobs" JobQueue after that same execution frame.
//
// In order to avoid the DataLoader dispatch Job occuring before "PromiseJobs",
// A Promise Job is created with the sole purpose of enqueuing a global Job,
// ensuring that it always occurs after "PromiseJobs" ends.
//
// Node.js's job queue is unique. Browsers do not have an equivalent mechanism
// for enqueuing a job to be performed after promise microtasks and before the
// next macrotask. For browser environments, a macrotask is used (via
// setImmediate or setTimeout) at a potential performance penalty.


// If a custom cache is provided, it must be of this type (a subset of ES6 Map).

/**
 *  Copyright (c) 2015, Facebook, Inc.
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree. An additional grant
 *  of patent rights can be found in the PATENTS file in the same directory.
 */

// A Function, which when given an Array of keys, returns a Promise of an Array
// of values or Errors.


var enqueuePostPromiseJob = typeof process === 'object' && typeof process.nextTick === 'function' ? function (fn) {
  if (!resolvedPromise) {
    resolvedPromise = Promise.resolve();
  }
  resolvedPromise.then(function () {
    return process.nextTick(fn);
  });
} : setImmediate || setTimeout;

// Private: cached resolved Promise instance
var resolvedPromise;

// Private: given the current state of a Loader instance, perform a batch load
// from its current queue.
function dispatchQueue(loader) {
  // Take the current loader queue, replacing it with an empty queue.
  var queue = loader._queue;
  loader._queue = [];

  // If a maxBatchSize was provided and the queue is longer, then segment the
  // queue into multiple batches, otherwise treat the queue as a single batch.
  var maxBatchSize = loader._options && loader._options.maxBatchSize;
  if (maxBatchSize && maxBatchSize > 0 && maxBatchSize < queue.length) {
    for (var i = 0; i < queue.length / maxBatchSize; i++) {
      dispatchQueueBatch(loader, queue.slice(i * maxBatchSize, (i + 1) * maxBatchSize));
    }
  } else {
    dispatchQueueBatch(loader, queue);
  }
}

function dispatchQueueBatch(loader, queue) {
  // Collect all keys to be loaded in this dispatch
  var keys = queue.map(function (_ref) {
    var key = _ref.key;
    return key;
  });

  // Call the provided batchLoadFn for this loader with the loader queue's keys.
  var batchLoadFn = loader._batchLoadFn;
  var batchPromise = batchLoadFn(keys);

  // Assert the expected response from batchLoadFn
  if (!batchPromise || typeof batchPromise.then !== 'function') {
    return failedDispatch(loader, queue, new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ('not return a Promise: ' + String(batchPromise) + '.')));
  }

  // Await the resolution of the call to batchLoadFn.
  batchPromise.then(function (values) {

    // Assert the expected resolution from batchLoadFn.
    if (!Array.isArray(values)) {
      throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + ('not return a Promise of an Array: ' + String(values) + '.'));
    }
    if (values.length !== keys.length) {
      throw new TypeError('DataLoader must be constructed with a function which accepts ' + 'Array<key> and returns Promise<Array<value>>, but the function did ' + 'not return a Promise of an Array of the same length as the Array ' + 'of keys.' + ('\n\nKeys:\n' + String(keys)) + ('\n\nValues:\n' + String(values)));
    }

    // Step through the values, resolving or rejecting each Promise in the
    // loaded queue.
    queue.forEach(function (_ref2, index) {
      var resolve = _ref2.resolve,
          reject = _ref2.reject;

      var value = values[index];
      if (value instanceof Error) {
        reject(value);
      } else {
        resolve(value);
      }
    });
  }).catch(function (error) {
    return failedDispatch(loader, queue, error);
  });
}

// Private: do not cache individual loads if the entire batch dispatch fails,
// but still reject each request so they do not hang.
function failedDispatch(loader, queue, error) {
  queue.forEach(function (_ref3) {
    var key = _ref3.key,
        reject = _ref3.reject;

    loader.clear(key);
    reject(error);
  });
}

// Private: given the DataLoader's options, produce a CacheMap to be used.
function getValidCacheMap(options) {
  var cacheMap = options && options.cacheMap;
  if (!cacheMap) {
    return new Map();
  }
  var cacheFunctions = ['get', 'set', 'delete', 'clear'];
  var missingFunctions = cacheFunctions.filter(function (fnName) {
    return cacheMap && typeof cacheMap[fnName] !== 'function';
  });
  if (missingFunctions.length !== 0) {
    throw new TypeError('Custom cacheMap missing methods: ' + missingFunctions.join(', '));
  }
  return cacheMap;
}

// Private


module.exports = DataLoader;

/***/ }),

/***/ "../node_modules/debug/node_modules/ms/index.js":
/*!******************************************************!*\
  !*** ../node_modules/debug/node_modules/ms/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "../node_modules/debug/src/browser.js":
/*!********************************************!*\
  !*** ../node_modules/debug/src/browser.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "../node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}


/***/ }),

/***/ "../node_modules/debug/src/debug.js":
/*!******************************************!*\
  !*** ../node_modules/debug/src/debug.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "../node_modules/debug/node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ }),

/***/ "../node_modules/debug/src/index.js":
/*!******************************************!*\
  !*** ../node_modules/debug/src/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Detect Electron renderer process, which is node, but we should
 * treat as a browser.
 */

if (typeof process !== 'undefined' && process.type === 'renderer') {
  module.exports = __webpack_require__(/*! ./browser.js */ "../node_modules/debug/src/browser.js");
} else {
  module.exports = __webpack_require__(/*! ./node.js */ "../node_modules/debug/src/node.js");
}


/***/ }),

/***/ "../node_modules/debug/src/node.js":
/*!*****************************************!*\
  !*** ../node_modules/debug/src/node.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Module dependencies.
 */

var tty = __webpack_require__(/*! tty */ "tty");
var util = __webpack_require__(/*! util */ "util");

/**
 * This is the Node.js implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "../node_modules/debug/src/debug.js");
exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(function (key) {
  return /^debug_/i.test(key);
}).reduce(function (obj, key) {
  // camel-case
  var prop = key
    .substring(6)
    .toLowerCase()
    .replace(/_([a-z])/g, function (_, k) { return k.toUpperCase() });

  // coerce string value into JS value
  var val = process.env[key];
  if (/^(yes|on|true|enabled)$/i.test(val)) val = true;
  else if (/^(no|off|false|disabled)$/i.test(val)) val = false;
  else if (val === 'null') val = null;
  else val = Number(val);

  obj[prop] = val;
  return obj;
}, {});

/**
 * The file descriptor to write the `debug()` calls to.
 * Set the `DEBUG_FD` env variable to override with another value. i.e.:
 *
 *   $ DEBUG_FD=3 node script.js 3>debug.log
 */

var fd = parseInt(process.env.DEBUG_FD, 10) || 2;

if (1 !== fd && 2 !== fd) {
  util.deprecate(function(){}, 'except for stderr(2) and stdout(1), any other usage of DEBUG_FD is deprecated. Override debug.log if you want to use a different log function (https://git.io/debug_fd)')()
}

var stream = 1 === fd ? process.stdout :
             2 === fd ? process.stderr :
             createWritableStdioStream(fd);

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
  return 'colors' in exports.inspectOpts
    ? Boolean(exports.inspectOpts.colors)
    : tty.isatty(fd);
}

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

exports.formatters.o = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts)
    .split('\n').map(function(str) {
      return str.trim()
    }).join(' ');
};

/**
 * Map %o to `util.inspect()`, allowing multiple lines if needed.
 */

exports.formatters.O = function(v) {
  this.inspectOpts.colors = this.useColors;
  return util.inspect(v, this.inspectOpts);
};

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var name = this.namespace;
  var useColors = this.useColors;

  if (useColors) {
    var c = this.color;
    var prefix = '  \u001b[3' + c + ';1m' + name + ' ' + '\u001b[0m';

    args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    args.push('\u001b[3' + c + 'm+' + exports.humanize(this.diff) + '\u001b[0m');
  } else {
    args[0] = new Date().toUTCString()
      + ' ' + name + ' ' + args[0];
  }
}

/**
 * Invokes `util.format()` with the specified arguments and writes to `stream`.
 */

function log() {
  return stream.write(util.format.apply(util, arguments) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  if (null == namespaces) {
    // If you set a process.env field to null or undefined, it gets cast to the
    // string 'null' or 'undefined'. Just delete instead.
    delete process.env.DEBUG;
  } else {
    process.env.DEBUG = namespaces;
  }
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  return process.env.DEBUG;
}

/**
 * Copied from `node/src/node.js`.
 *
 * XXX: It's lame that node doesn't expose this API out-of-the-box. It also
 * relies on the undocumented `tty_wrap.guessHandleType()` which is also lame.
 */

function createWritableStdioStream (fd) {
  var stream;
  var tty_wrap = process.binding('tty_wrap');

  // Note stream._type is used for test-module-load-list.js

  switch (tty_wrap.guessHandleType(fd)) {
    case 'TTY':
      stream = new tty.WriteStream(fd);
      stream._type = 'tty';

      // Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    case 'FILE':
      var fs = __webpack_require__(/*! fs */ "fs");
      stream = new fs.SyncWriteStream(fd, { autoClose: false });
      stream._type = 'fs';
      break;

    case 'PIPE':
    case 'TCP':
      var net = __webpack_require__(/*! net */ "net");
      stream = new net.Socket({
        fd: fd,
        readable: false,
        writable: true
      });

      // FIXME Should probably have an option in net.Socket to create a
      // stream from an existing fd which is writable only. But for now
      // we'll just add this hack and set the `readable` member to false.
      // Test: ./node test/fixtures/echo.js < /etc/passwd
      stream.readable = false;
      stream.read = null;
      stream._type = 'pipe';

      // FIXME Hack to have stream not keep the event loop alive.
      // See https://github.com/joyent/node/issues/1726
      if (stream._handle && stream._handle.unref) {
        stream._handle.unref();
      }
      break;

    default:
      // Probably an error on in uv_guess_handle()
      throw new Error('Implement me. Unknown stream file type!');
  }

  // For supporting legacy API we put the FD here.
  stream.fd = fd;

  stream._isStdio = true;

  return stream;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init (debug) {
  debug.inspectOpts = {};

  var keys = Object.keys(exports.inspectOpts);
  for (var i = 0; i < keys.length; i++) {
    debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
  }
}

/**
 * Enable namespaces listed in `process.env.DEBUG` initially.
 */

exports.enable(load());


/***/ }),

/***/ "../node_modules/depd/index.js":
/*!*************************************!*\
  !*** ../node_modules/depd/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * depd
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */

/**
 * Module dependencies.
 */

var callSiteToString = __webpack_require__(/*! ./lib/compat */ "../node_modules/depd/lib/compat/index.js").callSiteToString
var eventListenerCount = __webpack_require__(/*! ./lib/compat */ "../node_modules/depd/lib/compat/index.js").eventListenerCount
var relative = __webpack_require__(/*! path */ "path").relative

/**
 * Module exports.
 */

module.exports = depd

/**
 * Get the path to base files on.
 */

var basePath = process.cwd()

/**
 * Determine if namespace is contained in the string.
 */

function containsNamespace (str, namespace) {
  var vals = str.split(/[ ,]+/)
  var ns = String(namespace).toLowerCase()

  for (var i = 0; i < vals.length; i++) {
    var val = vals[i]

    // namespace contained
    if (val && (val === '*' || val.toLowerCase() === ns)) {
      return true
    }
  }

  return false
}

/**
 * Convert a data descriptor to accessor descriptor.
 */

function convertDataDescriptorToAccessor (obj, prop, message) {
  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)
  var value = descriptor.value

  descriptor.get = function getter () { return value }

  if (descriptor.writable) {
    descriptor.set = function setter (val) { return (value = val) }
  }

  delete descriptor.value
  delete descriptor.writable

  Object.defineProperty(obj, prop, descriptor)

  return descriptor
}

/**
 * Create arguments string to keep arity.
 */

function createArgumentsString (arity) {
  var str = ''

  for (var i = 0; i < arity; i++) {
    str += ', arg' + i
  }

  return str.substr(2)
}

/**
 * Create stack string from stack.
 */

function createStackString (stack) {
  var str = this.name + ': ' + this.namespace

  if (this.message) {
    str += ' deprecated ' + this.message
  }

  for (var i = 0; i < stack.length; i++) {
    str += '\n    at ' + callSiteToString(stack[i])
  }

  return str
}

/**
 * Create deprecate for namespace in caller.
 */

function depd (namespace) {
  if (!namespace) {
    throw new TypeError('argument namespace is required')
  }

  var stack = getStack()
  var site = callSiteLocation(stack[1])
  var file = site[0]

  function deprecate (message) {
    // call to self as log
    log.call(deprecate, message)
  }

  deprecate._file = file
  deprecate._ignored = isignored(namespace)
  deprecate._namespace = namespace
  deprecate._traced = istraced(namespace)
  deprecate._warned = Object.create(null)

  deprecate.function = wrapfunction
  deprecate.property = wrapproperty

  return deprecate
}

/**
 * Determine if namespace is ignored.
 */

function isignored (namespace) {
  /* istanbul ignore next: tested in a child processs */
  if (process.noDeprecation) {
    // --no-deprecation support
    return true
  }

  var str = process.env.NO_DEPRECATION || ''

  // namespace ignored
  return containsNamespace(str, namespace)
}

/**
 * Determine if namespace is traced.
 */

function istraced (namespace) {
  /* istanbul ignore next: tested in a child processs */
  if (process.traceDeprecation) {
    // --trace-deprecation support
    return true
  }

  var str = process.env.TRACE_DEPRECATION || ''

  // namespace traced
  return containsNamespace(str, namespace)
}

/**
 * Display deprecation message.
 */

function log (message, site) {
  var haslisteners = eventListenerCount(process, 'deprecation') !== 0

  // abort early if no destination
  if (!haslisteners && this._ignored) {
    return
  }

  var caller
  var callFile
  var callSite
  var depSite
  var i = 0
  var seen = false
  var stack = getStack()
  var file = this._file

  if (site) {
    // provided site
    depSite = site
    callSite = callSiteLocation(stack[1])
    callSite.name = depSite.name
    file = callSite[0]
  } else {
    // get call site
    i = 2
    depSite = callSiteLocation(stack[i])
    callSite = depSite
  }

  // get caller of deprecated thing in relation to file
  for (; i < stack.length; i++) {
    caller = callSiteLocation(stack[i])
    callFile = caller[0]

    if (callFile === file) {
      seen = true
    } else if (callFile === this._file) {
      file = this._file
    } else if (seen) {
      break
    }
  }

  var key = caller
    ? depSite.join(':') + '__' + caller.join(':')
    : undefined

  if (key !== undefined && key in this._warned) {
    // already warned
    return
  }

  this._warned[key] = true

  // generate automatic message from call site
  var msg = message
  if (!msg) {
    msg = callSite === depSite || !callSite.name
      ? defaultMessage(depSite)
      : defaultMessage(callSite)
  }

  // emit deprecation if listeners exist
  if (haslisteners) {
    var err = DeprecationError(this._namespace, msg, stack.slice(i))
    process.emit('deprecation', err)
    return
  }

  // format and write message
  var format = process.stderr.isTTY
    ? formatColor
    : formatPlain
  var output = format.call(this, msg, caller, stack.slice(i))
  process.stderr.write(output + '\n', 'utf8')
}

/**
 * Get call site location as array.
 */

function callSiteLocation (callSite) {
  var file = callSite.getFileName() || '<anonymous>'
  var line = callSite.getLineNumber()
  var colm = callSite.getColumnNumber()

  if (callSite.isEval()) {
    file = callSite.getEvalOrigin() + ', ' + file
  }

  var site = [file, line, colm]

  site.callSite = callSite
  site.name = callSite.getFunctionName()

  return site
}

/**
 * Generate a default message from the site.
 */

function defaultMessage (site) {
  var callSite = site.callSite
  var funcName = site.name

  // make useful anonymous name
  if (!funcName) {
    funcName = '<anonymous@' + formatLocation(site) + '>'
  }

  var context = callSite.getThis()
  var typeName = context && callSite.getTypeName()

  // ignore useless type name
  if (typeName === 'Object') {
    typeName = undefined
  }

  // make useful type name
  if (typeName === 'Function') {
    typeName = context.name || typeName
  }

  return typeName && callSite.getMethodName()
    ? typeName + '.' + funcName
    : funcName
}

/**
 * Format deprecation message without color.
 */

function formatPlain (msg, caller, stack) {
  var timestamp = new Date().toUTCString()

  var formatted = timestamp +
    ' ' + this._namespace +
    ' deprecated ' + msg

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    at ' + callSiteToString(stack[i])
    }

    return formatted
  }

  if (caller) {
    formatted += ' at ' + formatLocation(caller)
  }

  return formatted
}

/**
 * Format deprecation message with color.
 */

function formatColor (msg, caller, stack) {
  var formatted = '\x1b[36;1m' + this._namespace + '\x1b[22;39m' + // bold cyan
    ' \x1b[33;1mdeprecated\x1b[22;39m' + // bold yellow
    ' \x1b[0m' + msg + '\x1b[39m' // reset

  // add stack trace
  if (this._traced) {
    for (var i = 0; i < stack.length; i++) {
      formatted += '\n    \x1b[36mat ' + callSiteToString(stack[i]) + '\x1b[39m' // cyan
    }

    return formatted
  }

  if (caller) {
    formatted += ' \x1b[36m' + formatLocation(caller) + '\x1b[39m' // cyan
  }

  return formatted
}

/**
 * Format call site location.
 */

function formatLocation (callSite) {
  return relative(basePath, callSite[0]) +
    ':' + callSite[1] +
    ':' + callSite[2]
}

/**
 * Get the stack as array of call sites.
 */

function getStack () {
  var limit = Error.stackTraceLimit
  var obj = {}
  var prep = Error.prepareStackTrace

  Error.prepareStackTrace = prepareObjectStackTrace
  Error.stackTraceLimit = Math.max(10, limit)

  // capture the stack
  Error.captureStackTrace(obj)

  // slice this function off the top
  var stack = obj.stack.slice(1)

  Error.prepareStackTrace = prep
  Error.stackTraceLimit = limit

  return stack
}

/**
 * Capture call site stack from v8.
 */

function prepareObjectStackTrace (obj, stack) {
  return stack
}

/**
 * Return a wrapped function in a deprecation message.
 */

function wrapfunction (fn, message) {
  if (typeof fn !== 'function') {
    throw new TypeError('argument fn must be a function')
  }

  var args = createArgumentsString(fn.length)
  var deprecate = this // eslint-disable-line no-unused-vars
  var stack = getStack()
  var site = callSiteLocation(stack[1])

  site.name = fn.name

   // eslint-disable-next-line no-eval
  var deprecatedfn = eval('(function (' + args + ') {\n' +
    '"use strict"\n' +
    'log.call(deprecate, message, site)\n' +
    'return fn.apply(this, arguments)\n' +
    '})')

  return deprecatedfn
}

/**
 * Wrap property in a deprecation message.
 */

function wrapproperty (obj, prop, message) {
  if (!obj || (typeof obj !== 'object' && typeof obj !== 'function')) {
    throw new TypeError('argument obj must be object')
  }

  var descriptor = Object.getOwnPropertyDescriptor(obj, prop)

  if (!descriptor) {
    throw new TypeError('must call property on owner object')
  }

  if (!descriptor.configurable) {
    throw new TypeError('property must be configurable')
  }

  var deprecate = this
  var stack = getStack()
  var site = callSiteLocation(stack[1])

  // set site name
  site.name = prop

  // convert data descriptor
  if ('value' in descriptor) {
    descriptor = convertDataDescriptorToAccessor(obj, prop, message)
  }

  var get = descriptor.get
  var set = descriptor.set

  // wrap getter
  if (typeof get === 'function') {
    descriptor.get = function getter () {
      log.call(deprecate, message, site)
      return get.apply(this, arguments)
    }
  }

  // wrap setter
  if (typeof set === 'function') {
    descriptor.set = function setter () {
      log.call(deprecate, message, site)
      return set.apply(this, arguments)
    }
  }

  Object.defineProperty(obj, prop, descriptor)
}

/**
 * Create DeprecationError for deprecation
 */

function DeprecationError (namespace, message, stack) {
  var error = new Error()
  var stackString

  Object.defineProperty(error, 'constructor', {
    value: DeprecationError
  })

  Object.defineProperty(error, 'message', {
    configurable: true,
    enumerable: false,
    value: message,
    writable: true
  })

  Object.defineProperty(error, 'name', {
    enumerable: false,
    configurable: true,
    value: 'DeprecationError',
    writable: true
  })

  Object.defineProperty(error, 'namespace', {
    configurable: true,
    enumerable: false,
    value: namespace,
    writable: true
  })

  Object.defineProperty(error, 'stack', {
    configurable: true,
    enumerable: false,
    get: function () {
      if (stackString !== undefined) {
        return stackString
      }

      // prepare stack trace
      return (stackString = createStackString.call(this, stack))
    },
    set: function setter (val) {
      stackString = val
    }
  })

  return error
}


/***/ }),

/***/ "../node_modules/depd/lib/compat/callsite-tostring.js":
/*!************************************************************!*\
  !*** ../node_modules/depd/lib/compat/callsite-tostring.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2014 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 */

module.exports = callSiteToString

/**
 * Format a CallSite file location to a string.
 */

function callSiteFileLocation (callSite) {
  var fileName
  var fileLocation = ''

  if (callSite.isNative()) {
    fileLocation = 'native'
  } else if (callSite.isEval()) {
    fileName = callSite.getScriptNameOrSourceURL()
    if (!fileName) {
      fileLocation = callSite.getEvalOrigin()
    }
  } else {
    fileName = callSite.getFileName()
  }

  if (fileName) {
    fileLocation += fileName

    var lineNumber = callSite.getLineNumber()
    if (lineNumber != null) {
      fileLocation += ':' + lineNumber

      var columnNumber = callSite.getColumnNumber()
      if (columnNumber) {
        fileLocation += ':' + columnNumber
      }
    }
  }

  return fileLocation || 'unknown source'
}

/**
 * Format a CallSite to a string.
 */

function callSiteToString (callSite) {
  var addSuffix = true
  var fileLocation = callSiteFileLocation(callSite)
  var functionName = callSite.getFunctionName()
  var isConstructor = callSite.isConstructor()
  var isMethodCall = !(callSite.isToplevel() || isConstructor)
  var line = ''

  if (isMethodCall) {
    var methodName = callSite.getMethodName()
    var typeName = getConstructorName(callSite)

    if (functionName) {
      if (typeName && functionName.indexOf(typeName) !== 0) {
        line += typeName + '.'
      }

      line += functionName

      if (methodName && functionName.lastIndexOf('.' + methodName) !== functionName.length - methodName.length - 1) {
        line += ' [as ' + methodName + ']'
      }
    } else {
      line += typeName + '.' + (methodName || '<anonymous>')
    }
  } else if (isConstructor) {
    line += 'new ' + (functionName || '<anonymous>')
  } else if (functionName) {
    line += functionName
  } else {
    addSuffix = false
    line += fileLocation
  }

  if (addSuffix) {
    line += ' (' + fileLocation + ')'
  }

  return line
}

/**
 * Get constructor name of reviver.
 */

function getConstructorName (obj) {
  var receiver = obj.receiver
  return (receiver.constructor && receiver.constructor.name) || null
}


/***/ }),

/***/ "../node_modules/depd/lib/compat/event-listener-count.js":
/*!***************************************************************!*\
  !*** ../node_modules/depd/lib/compat/event-listener-count.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = eventListenerCount

/**
 * Get the count of listeners on an event emitter of a specific type.
 */

function eventListenerCount (emitter, type) {
  return emitter.listeners(type).length
}


/***/ }),

/***/ "../node_modules/depd/lib/compat/index.js":
/*!************************************************!*\
  !*** ../node_modules/depd/lib/compat/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * depd
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter

/**
 * Module exports.
 * @public
 */

lazyProperty(module.exports, 'callSiteToString', function callSiteToString () {
  var limit = Error.stackTraceLimit
  var obj = {}
  var prep = Error.prepareStackTrace

  function prepareObjectStackTrace (obj, stack) {
    return stack
  }

  Error.prepareStackTrace = prepareObjectStackTrace
  Error.stackTraceLimit = 2

  // capture the stack
  Error.captureStackTrace(obj)

  // slice the stack
  var stack = obj.stack.slice()

  Error.prepareStackTrace = prep
  Error.stackTraceLimit = limit

  return stack[0].toString ? toString : __webpack_require__(/*! ./callsite-tostring */ "../node_modules/depd/lib/compat/callsite-tostring.js")
})

lazyProperty(module.exports, 'eventListenerCount', function eventListenerCount () {
  return EventEmitter.listenerCount || __webpack_require__(/*! ./event-listener-count */ "../node_modules/depd/lib/compat/event-listener-count.js")
})

/**
 * Define a lazy property.
 */

function lazyProperty (obj, prop, getter) {
  function get () {
    var val = getter()

    Object.defineProperty(obj, prop, {
      configurable: true,
      enumerable: true,
      value: val
    })

    return val
  }

  Object.defineProperty(obj, prop, {
    configurable: true,
    enumerable: true,
    get: get
  })
}

/**
 * Call toString() on the obj
 */

function toString (obj) {
  return obj.toString()
}


/***/ }),

/***/ "../node_modules/destroy/index.js":
/*!****************************************!*\
  !*** ../node_modules/destroy/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * destroy
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var ReadStream = __webpack_require__(/*! fs */ "fs").ReadStream
var Stream = __webpack_require__(/*! stream */ "stream")

/**
 * Module exports.
 * @public
 */

module.exports = destroy

/**
 * Destroy a stream.
 *
 * @param {object} stream
 * @public
 */

function destroy(stream) {
  if (stream instanceof ReadStream) {
    return destroyReadStream(stream)
  }

  if (!(stream instanceof Stream)) {
    return stream
  }

  if (typeof stream.destroy === 'function') {
    stream.destroy()
  }

  return stream
}

/**
 * Destroy a ReadStream.
 *
 * @param {object} stream
 * @private
 */

function destroyReadStream(stream) {
  stream.destroy()

  if (typeof stream.close === 'function') {
    // node.js core bug work-around
    stream.on('open', onOpenClose)
  }

  return stream
}

/**
 * On open handler to close stream.
 * @private
 */

function onOpenClose() {
  if (typeof this.fd === 'number') {
    // actually close down the fd
    this.close()
  }
}


/***/ }),

/***/ "../node_modules/ee-first/index.js":
/*!*****************************************!*\
  !*** ../node_modules/ee-first/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * ee-first
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = first

/**
 * Get the first event in a set of event emitters and event pairs.
 *
 * @param {array} stuff
 * @param {function} done
 * @public
 */

function first(stuff, done) {
  if (!Array.isArray(stuff))
    throw new TypeError('arg must be an array of [ee, events...] arrays')

  var cleanups = []

  for (var i = 0; i < stuff.length; i++) {
    var arr = stuff[i]

    if (!Array.isArray(arr) || arr.length < 2)
      throw new TypeError('each array member must be [ee, events...]')

    var ee = arr[0]

    for (var j = 1; j < arr.length; j++) {
      var event = arr[j]
      var fn = listener(event, callback)

      // listen to the event
      ee.on(event, fn)
      // push this listener to the list of cleanups
      cleanups.push({
        ee: ee,
        event: event,
        fn: fn,
      })
    }
  }

  function callback() {
    cleanup()
    done.apply(null, arguments)
  }

  function cleanup() {
    var x
    for (var i = 0; i < cleanups.length; i++) {
      x = cleanups[i]
      x.ee.removeListener(x.event, x.fn)
    }
  }

  function thunk(fn) {
    done = fn
  }

  thunk.cancel = cleanup

  return thunk
}

/**
 * Create the event listener.
 * @private
 */

function listener(event, done) {
  return function onevent(arg1) {
    var args = new Array(arguments.length)
    var ee = this
    var err = event === 'error'
      ? arg1
      : null

    // copy args to prevent arguments escaping scope
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i]
    }

    done(err, ee, event, args)
  }
}


/***/ }),

/***/ "../node_modules/encodeurl/index.js":
/*!******************************************!*\
  !*** ../node_modules/encodeurl/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * encodeurl
 * Copyright(c) 2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = encodeUrl

/**
 * RegExp to match non-URL code points, *after* encoding (i.e. not including "%")
 * and including invalid escape sequences.
 * @private
 */

var ENCODE_CHARS_REGEXP = /(?:[^\x21\x25\x26-\x3B\x3D\x3F-\x5B\x5D\x5F\x61-\x7A\x7E]|%(?:[^0-9A-Fa-f]|[0-9A-Fa-f][^0-9A-Fa-f]|$))+/g

/**
 * RegExp to match unmatched surrogate pair.
 * @private
 */

var UNMATCHED_SURROGATE_PAIR_REGEXP = /(^|[^\uD800-\uDBFF])[\uDC00-\uDFFF]|[\uD800-\uDBFF]([^\uDC00-\uDFFF]|$)/g

/**
 * String to replace unmatched surrogate pair with.
 * @private
 */

var UNMATCHED_SURROGATE_PAIR_REPLACE = '$1\uFFFD$2'

/**
 * Encode a URL to a percent-encoded form, excluding already-encoded sequences.
 *
 * This function will take an already-encoded URL and encode all the non-URL
 * code points. This function will not encode the "%" character unless it is
 * not part of a valid sequence (`%20` will be left as-is, but `%foo` will
 * be encoded as `%25foo`).
 *
 * This encode is meant to be "safe" and does not throw errors. It will try as
 * hard as it can to properly encode the given URL, including replacing any raw,
 * unpaired surrogate pairs with the Unicode replacement character prior to
 * encoding.
 *
 * @param {string} url
 * @return {string}
 * @public
 */

function encodeUrl (url) {
  return String(url)
    .replace(UNMATCHED_SURROGATE_PAIR_REGEXP, UNMATCHED_SURROGATE_PAIR_REPLACE)
    .replace(ENCODE_CHARS_REGEXP, encodeURI)
}


/***/ }),

/***/ "../node_modules/escape-html/index.js":
/*!********************************************!*\
  !*** ../node_modules/escape-html/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ "../node_modules/etag/index.js":
/*!*************************************!*\
  !*** ../node_modules/etag/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * etag
 * Copyright(c) 2014-2016 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = etag

/**
 * Module dependencies.
 * @private
 */

var crypto = __webpack_require__(/*! crypto */ "crypto")
var Stats = __webpack_require__(/*! fs */ "fs").Stats

/**
 * Module variables.
 * @private
 */

var toString = Object.prototype.toString

/**
 * Generate an entity tag.
 *
 * @param {Buffer|string} entity
 * @return {string}
 * @private
 */

function entitytag (entity) {
  if (entity.length === 0) {
    // fast-path empty
    return '"0-2jmj7l5rSw0yVb/vlWAYkK/YBwk"'
  }

  // compute hash of entity
  var hash = crypto
    .createHash('sha1')
    .update(entity, 'utf8')
    .digest('base64')
    .substring(0, 27)

  // compute length of entity
  var len = typeof entity === 'string'
    ? Buffer.byteLength(entity, 'utf8')
    : entity.length

  return '"' + len.toString(16) + '-' + hash + '"'
}

/**
 * Create a simple ETag.
 *
 * @param {string|Buffer|Stats} entity
 * @param {object} [options]
 * @param {boolean} [options.weak]
 * @return {String}
 * @public
 */

function etag (entity, options) {
  if (entity == null) {
    throw new TypeError('argument entity is required')
  }

  // support fs.Stats object
  var isStats = isstats(entity)
  var weak = options && typeof options.weak === 'boolean'
    ? options.weak
    : isStats

  // validate argument
  if (!isStats && typeof entity !== 'string' && !Buffer.isBuffer(entity)) {
    throw new TypeError('argument entity must be string, Buffer, or fs.Stats')
  }

  // generate entity tag
  var tag = isStats
    ? stattag(entity)
    : entitytag(entity)

  return weak
    ? 'W/' + tag
    : tag
}

/**
 * Determine if object is a Stats object.
 *
 * @param {object} obj
 * @return {boolean}
 * @api private
 */

function isstats (obj) {
  // genuine fs.Stats
  if (typeof Stats === 'function' && obj instanceof Stats) {
    return true
  }

  // quack quack
  return obj && typeof obj === 'object' &&
    'ctime' in obj && toString.call(obj.ctime) === '[object Date]' &&
    'mtime' in obj && toString.call(obj.mtime) === '[object Date]' &&
    'ino' in obj && typeof obj.ino === 'number' &&
    'size' in obj && typeof obj.size === 'number'
}

/**
 * Generate a tag for a stat.
 *
 * @param {object} stat
 * @return {string}
 * @private
 */

function stattag (stat) {
  var mtime = stat.mtime.getTime().toString(16)
  var size = stat.size.toString(16)

  return '"' + size + '-' + mtime + '"'
}


/***/ }),

/***/ "../node_modules/express-graphql/index.js":
/*!************************************************!*\
  !*** ../node_modules/express-graphql/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _url = _interopRequireDefault(__webpack_require__(/*! url */ "url"));

var _accepts = _interopRequireDefault(__webpack_require__(/*! accepts */ "../node_modules/accepts/index.js"));

var _httpErrors = _interopRequireDefault(__webpack_require__(/*! http-errors */ "../node_modules/http-errors/index.js"));

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _parseBody = __webpack_require__(/*! ./parseBody */ "../node_modules/express-graphql/parseBody.js");

var _renderGraphiQL = __webpack_require__(/*! ./renderGraphiQL */ "../node_modules/express-graphql/renderGraphiQL.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Middleware for express; takes an options object or function as input to
 * configure behavior, and returns an express middleware.
 */
module.exports = graphqlHTTP;

function graphqlHTTP(options) {
  if (!options) {
    throw new Error('GraphQL middleware requires options.');
  }

  return function graphqlMiddleware(request, response) {
    // Higher scoped variables are referred to at various stages in the
    // asynchronous state machine below.
    let context;
    let params;
    let pretty;
    let formatErrorFn = _graphql.formatError;
    let validateFn = _graphql.validate;
    let executeFn = _graphql.execute;
    let parseFn = _graphql.parse;
    let extensionsFn;
    let showGraphiQL = false;
    let query;
    let documentAST;
    let variables;
    let operationName; // Promises are used as a mechanism for capturing any thrown errors during
    // the asynchronous process below.
    // Parse the Request to get GraphQL request parameters.

    return getGraphQLParams(request).then(graphQLParams => {
      params = graphQLParams; // Then, resolve the Options to get OptionsData.

      return resolveOptions(params);
    }, error => {
      // When we failed to parse the GraphQL parameters, we still need to get
      // the options object, so make an options call to resolve just that.
      const dummyParams = {
        query: null,
        variables: null,
        operationName: null,
        raw: null
      };
      return resolveOptions(dummyParams).then(() => Promise.reject(error));
    }).then(optionsData => {
      // Assert that schema is required.
      if (!optionsData.schema) {
        throw new Error('GraphQL middleware options must contain a schema.');
      } // Collect information from the options data object.


      const schema = optionsData.schema;
      const rootValue = optionsData.rootValue;
      const fieldResolver = optionsData.fieldResolver;
      const typeResolver = optionsData.typeResolver;
      const validationRules = optionsData.validationRules || [];
      const graphiql = optionsData.graphiql;
      context = optionsData.context || request; // GraphQL HTTP only supports GET and POST methods.

      if (request.method !== 'GET' && request.method !== 'POST') {
        response.setHeader('Allow', 'GET, POST');
        throw (0, _httpErrors.default)(405, 'GraphQL only supports GET and POST requests.');
      } // Get GraphQL params from the request and POST body data.


      query = params.query;
      variables = params.variables;
      operationName = params.operationName;
      showGraphiQL = canDisplayGraphiQL(request, params) && graphiql; // If there is no query, but GraphiQL will be displayed, do not produce
      // a result, otherwise return a 400: Bad Request.

      if (!query) {
        if (showGraphiQL) {
          return null;
        }

        throw (0, _httpErrors.default)(400, 'Must provide query string.');
      } // Validate Schema


      const schemaValidationErrors = (0, _graphql.validateSchema)(schema);

      if (schemaValidationErrors.length > 0) {
        // Return 500: Internal Server Error if invalid schema.
        response.statusCode = 500;
        return {
          errors: schemaValidationErrors
        };
      } //  GraphQL source.


      const source = new _graphql.Source(query, 'GraphQL request'); // Parse source to AST, reporting any syntax error.

      try {
        documentAST = parseFn(source);
      } catch (syntaxError) {
        // Return 400: Bad Request if any syntax errors errors exist.
        response.statusCode = 400;
        return {
          errors: [syntaxError]
        };
      } // Validate AST, reporting any errors.


      const validationErrors = validateFn(schema, documentAST, [..._graphql.specifiedRules, ...validationRules]);

      if (validationErrors.length > 0) {
        // Return 400: Bad Request if any validation errors exist.
        response.statusCode = 400;
        return {
          errors: validationErrors
        };
      } // Only query operations are allowed on GET requests.


      if (request.method === 'GET') {
        // Determine if this GET request will perform a non-query.
        const operationAST = (0, _graphql.getOperationAST)(documentAST, operationName);

        if (operationAST && operationAST.operation !== 'query') {
          // If GraphiQL can be shown, do not perform this query, but
          // provide it to GraphiQL so that the requester may perform it
          // themselves if desired.
          if (showGraphiQL) {
            return null;
          } // Otherwise, report a 405: Method Not Allowed error.


          response.setHeader('Allow', 'POST');
          throw (0, _httpErrors.default)(405, `Can only perform a ${operationAST.operation} operation from a POST request.`);
        }
      } // Perform the execution, reporting any errors creating the context.


      try {
        return executeFn({
          schema,
          document: documentAST,
          rootValue,
          contextValue: context,
          variableValues: variables,
          operationName,
          fieldResolver,
          typeResolver
        });
      } catch (contextError) {
        // Return 400: Bad Request if any execution context errors exist.
        response.statusCode = 400;
        return {
          errors: [contextError]
        };
      }
    }).then(result => {
      // Collect and apply any metadata extensions if a function was provided.
      // https://graphql.github.io/graphql-spec/#sec-Response-Format
      if (result && extensionsFn) {
        return Promise.resolve(extensionsFn({
          document: documentAST,
          variables,
          operationName,
          result,
          context
        })).then(extensions => {
          if (extensions && typeof extensions === 'object') {
            result.extensions = extensions;
          }

          return result;
        });
      }

      return result;
    }).catch(error => {
      // If an error was caught, report the httpError status, or 500.
      response.statusCode = error.status || 500;
      return {
        errors: [error]
      };
    }).then(result => {
      // If no data was included in the result, that indicates a runtime query
      // error, indicate as such with a generic status code.
      // Note: Information about the error itself will still be contained in
      // the resulting JSON payload.
      // https://graphql.github.io/graphql-spec/#sec-Data
      if (response.statusCode === 200 && result && !result.data) {
        response.statusCode = 500;
      } // Format any encountered errors.


      if (result && result.errors) {
        result.errors = result.errors.map(formatErrorFn);
      } // If allowed to show GraphiQL, present it instead of JSON.


      if (showGraphiQL) {
        const payload = (0, _renderGraphiQL.renderGraphiQL)({
          query,
          variables,
          operationName,
          result,
          options: typeof showGraphiQL !== 'boolean' ? showGraphiQL : {}
        });
        return sendResponse(response, 'text/html', payload);
      } // At this point, result is guaranteed to exist, as the only scenario
      // where it will not is when showGraphiQL is true.


      if (!result) {
        throw (0, _httpErrors.default)(500, 'Internal Error');
      } // If "pretty" JSON isn't requested, and the server provides a
      // response.json method (express), use that directly.
      // Otherwise use the simplified sendResponse method.


      if (!pretty && typeof response.json === 'function') {
        response.json(result);
      } else {
        const payload = JSON.stringify(result, null, pretty ? 2 : 0);
        sendResponse(response, 'application/json', payload);
      }
    });

    async function resolveOptions(requestParams) {
      const optionsResult = typeof options === 'function' ? options(request, response, requestParams) : options;
      const optionsData = await optionsResult; // Assert that optionsData is in fact an Object.

      if (!optionsData || typeof optionsData !== 'object') {
        throw new Error('GraphQL middleware option function must return an options object or a promise which will be resolved to an options object.');
      }

      if (optionsData.formatError) {
        // eslint-disable-next-line no-console
        console.warn('`formatError` is deprecated and replaced by `customFormatErrorFn`. It will be removed in version 1.0.0.');
      }

      validateFn = optionsData.customValidateFn || validateFn;
      executeFn = optionsData.customExecuteFn || executeFn;
      parseFn = optionsData.customParseFn || parseFn;
      formatErrorFn = optionsData.customFormatErrorFn || optionsData.formatError || formatErrorFn;
      extensionsFn = optionsData.extensions;
      pretty = optionsData.pretty;
      return optionsData;
    }
  };
}

/**
 * Provided a "Request" provided by express or connect (typically a node style
 * HTTPClientRequest), Promise the GraphQL request parameters.
 */
module.exports.getGraphQLParams = getGraphQLParams;

async function getGraphQLParams(request) {
  const bodyData = await (0, _parseBody.parseBody)(request);
  const urlData = request.url && _url.default.parse(request.url, true).query || {};
  return parseGraphQLParams(urlData, bodyData);
}
/**
 * Helper function to get the GraphQL params from the request.
 */


function parseGraphQLParams(urlData, bodyData) {
  // GraphQL Query string.
  let query = urlData.query || bodyData.query;

  if (typeof query !== 'string') {
    query = null;
  } // Parse the variables if needed.


  let variables = urlData.variables || bodyData.variables;

  if (variables && typeof variables === 'string') {
    try {
      variables = JSON.parse(variables);
    } catch (error) {
      throw (0, _httpErrors.default)(400, 'Variables are invalid JSON.');
    }
  } else if (typeof variables !== 'object') {
    variables = null;
  } // Name of GraphQL operation to execute.


  let operationName = urlData.operationName || bodyData.operationName;

  if (typeof operationName !== 'string') {
    operationName = null;
  }

  const raw = urlData.raw !== undefined || bodyData.raw !== undefined;
  return {
    query,
    variables,
    operationName,
    raw
  };
}
/**
 * Helper function to determine if GraphiQL can be displayed.
 */


function canDisplayGraphiQL(request, params) {
  // If `raw` exists, GraphiQL mode is not enabled.
  // Allowed to show GraphiQL if not requested as raw and this request
  // prefers HTML over JSON.
  return !params.raw && (0, _accepts.default)(request).types(['json', 'html']) === 'html';
}
/**
 * Helper function for sending a response using only the core Node server APIs.
 */


function sendResponse(response, type, data) {
  const chunk = Buffer.from(data, 'utf8');
  response.setHeader('Content-Type', type + '; charset=utf-8');
  response.setHeader('Content-Length', String(chunk.length));
  response.end(chunk);
}


/***/ }),

/***/ "../node_modules/express-graphql/parseBody.js":
/*!****************************************************!*\
  !*** ../node_modules/express-graphql/parseBody.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseBody = parseBody;

var _zlib = _interopRequireDefault(__webpack_require__(/*! zlib */ "zlib"));

var _rawBody = _interopRequireDefault(__webpack_require__(/*! raw-body */ "../node_modules/raw-body/index.js"));

var _httpErrors = _interopRequireDefault(__webpack_require__(/*! http-errors */ "../node_modules/http-errors/index.js"));

var _querystring = _interopRequireDefault(__webpack_require__(/*! querystring */ "querystring"));

var _contentType = _interopRequireDefault(__webpack_require__(/*! content-type */ "../node_modules/content-type/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Provided a "Request" provided by express or connect (typically a node style
 * HTTPClientRequest), Promise the body data contained.
 */
async function parseBody(req) {
  const {
    body
  } = req; // If express has already parsed a body as a keyed object, use it.

  if (typeof body === 'object' && !(body instanceof Buffer)) {
    return body;
  } // Skip requests without content types.


  if (req.headers['content-type'] === undefined) {
    return {};
  }

  const typeInfo = _contentType.default.parse(req); // If express has already parsed a body as a string, and the content-type
  // was application/graphql, parse the string body.


  if (typeof body === 'string' && typeInfo.type === 'application/graphql') {
    return {
      query: body
    };
  } // Already parsed body we didn't recognise? Parse nothing.


  if (body) {
    return {};
  }

  const rawBody = await readBody(req, typeInfo); // Use the correct body parser based on Content-Type header.

  switch (typeInfo.type) {
    case 'application/graphql':
      return {
        query: rawBody
      };

    case 'application/json':
      if (jsonObjRegex.test(rawBody)) {
        /* eslint-disable no-empty */
        try {
          return JSON.parse(rawBody);
        } catch (error) {} // Do nothing

        /* eslint-enable no-empty */

      }

      throw (0, _httpErrors.default)(400, 'POST body sent invalid JSON.');

    case 'application/x-www-form-urlencoded':
      return _querystring.default.parse(rawBody);
  } // If no Content-Type header matches, parse nothing.


  return {};
}
/**
 * RegExp to match an Object-opening brace "{" as the first non-space
 * in a string. Allowed whitespace is defined in RFC 7159:
 *
 *     ' '   Space
 *     '\t'  Horizontal tab
 *     '\n'  Line feed or New line
 *     '\r'  Carriage return
 */


const jsonObjRegex = /^[ \t\n\r]*\{/; // Read and parse a request body.

async function readBody(req, typeInfo) {
  const charset = (typeInfo.parameters.charset || 'utf-8').toLowerCase(); // Assert charset encoding per JSON RFC 7159 sec 8.1

  if (charset.slice(0, 4) !== 'utf-') {
    throw (0, _httpErrors.default)(415, `Unsupported charset "${charset.toUpperCase()}".`);
  } // Get content-encoding (e.g. gzip)


  const contentEncoding = req.headers['content-encoding'];
  const encoding = typeof contentEncoding === 'string' ? contentEncoding.toLowerCase() : 'identity';
  const length = encoding === 'identity' ? req.headers['content-length'] : null;
  const limit = 100 * 1024; // 100kb

  const stream = decompressed(req, encoding); // Read body from stream.

  try {
    return await (0, _rawBody.default)(stream, {
      encoding: charset,
      length,
      limit
    });
  } catch (err) {
    throw err.type === 'encoding.unsupported' ? (0, _httpErrors.default)(415, `Unsupported charset "${charset.toUpperCase()}".`) : (0, _httpErrors.default)(400, `Invalid body: ${err.message}.`);
  }
} // Return a decompressed stream, given an encoding.


function decompressed(req, encoding) {
  switch (encoding) {
    case 'identity':
      return req;

    case 'deflate':
      return req.pipe(_zlib.default.createInflate());

    case 'gzip':
      return req.pipe(_zlib.default.createGunzip());
  }

  throw (0, _httpErrors.default)(415, `Unsupported content-encoding "${encoding}".`);
}


/***/ }),

/***/ "../node_modules/express-graphql/renderGraphiQL.js":
/*!*********************************************************!*\
  !*** ../node_modules/express-graphql/renderGraphiQL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderGraphiQL = renderGraphiQL;

// Ensures string values are safe to be used within a <script> tag.
function safeSerialize(data) {
  return data ? JSON.stringify(data).replace(/\//g, '\\/') : 'undefined';
} // Implemented as Babel transformation, see ../resources/load-staticly-from-npm.js


/**
 * When express-graphql receives a request which does not Accept JSON, but does
 * Accept HTML, it may present GraphiQL, the in-browser GraphQL explorer IDE.
 *
 * When shown, it will be pre-populated with the result of having executed the
 * requested query.
 */
function renderGraphiQL(data) {
  const queryString = data.query;
  const variablesString = data.variables ? JSON.stringify(data.variables, null, 2) : null;
  const resultString = data.result ? JSON.stringify(data.result, null, 2) : null;
  const operationName = data.operationName;
  const defaultQuery = data.options.defaultQuery;
  return `<!--
The request to this GraphQL server provided the header "Accept: text/html"
and as a result has been presented GraphiQL - an in-browser IDE for
exploring GraphQL.

If you wish to receive JSON, provide the header "Accept: application/json" or
add "&raw" to the end of the URL within a browser.
-->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <title>GraphiQL</title>
  <meta name="robots" content="noindex" />
  <meta name="referrer" content="origin" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
    #graphiql {
      height: 100vh;
    }
  </style>
  <style>
    // graphiql/graphiql.css
    ${".graphiql-container,\n.graphiql-container button,\n.graphiql-container input {\n  color: #141823;\n  font-family:\n    system,\n    -apple-system,\n    'San Francisco',\n    '.SFNSDisplay-Regular',\n    'Segoe UI',\n    Segoe,\n    'Segoe WP',\n    'Helvetica Neue',\n    helvetica,\n    'Lucida Grande',\n    arial,\n    sans-serif;\n  font-size: 14px;\n}\n\n.graphiql-container {\n  display: flex;\n  flex-direction: row;\n  height: 100%;\n  margin: 0;\n  overflow: hidden;\n  width: 100%;\n}\n\n.graphiql-container .editorWrap {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  overflow-x: hidden;\n}\n\n.graphiql-container .title {\n  font-size: 18px;\n}\n\n.graphiql-container .title em {\n  font-family: georgia;\n  font-size: 19px;\n}\n\n.graphiql-container .topBarWrap {\n  display: flex;\n  flex-direction: row;\n}\n\n.graphiql-container .topBar {\n  align-items: center;\n  background: linear-gradient(#f7f7f7, #e2e2e2);\n  border-bottom: 1px solid #d0d0d0;\n  cursor: default;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n  height: 34px;\n  overflow-y: visible;\n  padding: 7px 14px 6px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .toolbar {\n  overflow-x: visible;\n  display: flex;\n}\n\n.graphiql-container .docExplorerShow,\n.graphiql-container .historyShow {\n  background: linear-gradient(#f7f7f7, #e2e2e2);\n  border-radius: 0;\n  border-bottom: 1px solid #d0d0d0;\n  border-right: none;\n  border-top: none;\n  color: #3B5998;\n  cursor: pointer;\n  font-size: 14px;\n  margin: 0;\n  outline: 0;\n  padding: 2px 20px 0 18px;\n}\n\n.graphiql-container .docExplorerShow {\n  border-left: 1px solid rgba(0, 0, 0, 0.2);\n}\n\n.graphiql-container .historyShow {\n  border-right: 1px solid rgba(0, 0, 0, 0.2);\n  border-left: 0;\n}\n\n.graphiql-container .docExplorerShow:before {\n  border-left: 2px solid #3B5998;\n  border-top: 2px solid #3B5998;\n  content: '';\n  display: inline-block;\n  height: 9px;\n  margin: 0 3px -1px 0;\n  position: relative;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  width: 9px;\n}\n\n.graphiql-container .editorBar {\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n\n.graphiql-container .queryWrap {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.graphiql-container .resultWrap {\n  border-left: solid 1px #e0e0e0;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  position: relative;\n}\n\n.graphiql-container .docExplorerWrap,\n.graphiql-container .historyPaneWrap {\n  background: white;\n  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 3;\n}\n\n.graphiql-container .historyPaneWrap {\n  min-width: 230px;\n  z-index: 5;\n}\n\n.graphiql-container .docExplorerResizer {\n  cursor: col-resize;\n  height: 100%;\n  left: -5px;\n  position: absolute;\n  top: 0;\n  width: 10px;\n  z-index: 10;\n}\n\n.graphiql-container .docExplorerHide {\n  cursor: pointer;\n  font-size: 18px;\n  margin: -7px -8px -6px 0;\n  padding: 18px 16px 15px 12px;\n}\n\n.graphiql-container div .query-editor {\n  flex: 1;\n  position: relative;\n}\n\n.graphiql-container .variable-editor {\n  display: flex;\n  flex-direction: column;\n  height: 30px;\n  position: relative;\n}\n\n.graphiql-container .variable-editor-title {\n  background: #eeeeee;\n  border-bottom: 1px solid #d6d6d6;\n  border-top: 1px solid #e0e0e0;\n  color: #777;\n  font-variant: small-caps;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 14px;\n  padding: 6px 0 8px 43px;\n  text-transform: lowercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .codemirrorWrap {\n  flex: 1;\n  height: 100%;\n  position: relative;\n}\n\n.graphiql-container .result-window {\n  flex: 1;\n  height: 100%;\n  position: relative;\n}\n\n.graphiql-container .footer {\n  background: #f6f7f8;\n  border-left: 1px solid #e0e0e0;\n  border-top: 1px solid #e0e0e0;\n  margin-left: 12px;\n  position: relative;\n}\n\n.graphiql-container .footer:before {\n  background: #eeeeee;\n  bottom: 0;\n  content: \" \";\n  left: -13px;\n  position: absolute;\n  top: -1px;\n  width: 12px;\n}\n\n/* No `.graphiql-container` here so themes can overwrite */\n.result-window .CodeMirror {\n  background: #f6f7f8;\n}\n\n.graphiql-container .result-window .CodeMirror-gutters {\n  background-color: #eeeeee;\n  border-color: #e0e0e0;\n  cursor: col-resize;\n}\n\n.graphiql-container .result-window .CodeMirror-foldgutter,\n.graphiql-container .result-window .CodeMirror-foldgutter-open:after,\n.graphiql-container .result-window .CodeMirror-foldgutter-folded:after {\n  padding-left: 3px;\n}\n\n.graphiql-container .toolbar-button {\n  background: #fdfdfd;\n  background: linear-gradient(#f9f9f9, #ececec);\n  border-radius: 3px;\n  box-shadow:\n    inset 0 0 0 1px rgba(0,0,0,0.20),\n    0 1px 0 rgba(255,255,255, 0.7),\n    inset 0 1px #fff;\n  color: #555;\n  cursor: pointer;\n  display: inline-block;\n  margin: 0 5px;\n  padding: 3px 11px 5px;\n  text-decoration: none;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  max-width: 150px;\n}\n\n.graphiql-container .toolbar-button:active {\n  background: linear-gradient(#ececec, #d5d5d5);\n  box-shadow:\n    0 1px 0 rgba(255, 255, 255, 0.7),\n    inset 0 0 0 1px rgba(0,0,0,0.10),\n    inset 0 1px 1px 1px rgba(0, 0, 0, 0.12),\n    inset 0 0 5px rgba(0, 0, 0, 0.1);\n}\n\n.graphiql-container .toolbar-button.error {\n  background: linear-gradient(#fdf3f3, #e6d6d7);\n  color: #b00;\n}\n\n.graphiql-container .toolbar-button-group {\n  margin: 0 5px;\n  white-space: nowrap;\n}\n\n.graphiql-container .toolbar-button-group > * {\n  margin: 0;\n}\n\n.graphiql-container .toolbar-button-group > *:not(:last-child) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.graphiql-container .toolbar-button-group > *:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n  margin-left: -1px;\n}\n\n.graphiql-container .execute-button-wrap {\n  height: 34px;\n  margin: 0 14px 0 28px;\n  position: relative;\n}\n\n.graphiql-container .execute-button {\n  background: linear-gradient(#fdfdfd, #d2d3d6);\n  border-radius: 17px;\n  border: 1px solid rgba(0,0,0,0.25);\n  box-shadow: 0 1px 0 #fff;\n  cursor: pointer;\n  fill: #444;\n  height: 34px;\n  margin: 0;\n  padding: 0;\n  width: 34px;\n}\n\n.graphiql-container .execute-button svg {\n  pointer-events: none;\n}\n\n.graphiql-container .execute-button:active {\n  background: linear-gradient(#e6e6e6, #c3c3c3);\n  box-shadow:\n    0 1px 0 #fff,\n    inset 0 0 2px rgba(0, 0, 0, 0.2),\n    inset 0 0 6px rgba(0, 0, 0, 0.1);\n}\n\n.graphiql-container .execute-button:focus {\n  outline: 0;\n}\n\n.graphiql-container .toolbar-menu,\n.graphiql-container .toolbar-select {\n  position: relative;\n}\n\n.graphiql-container .execute-options,\n.graphiql-container .toolbar-menu-items,\n.graphiql-container .toolbar-select-options {\n  background: #fff;\n  box-shadow:\n    0 0 0 1px rgba(0,0,0,0.1),\n    0 2px 4px rgba(0,0,0,0.25);\n  margin: 0;\n  padding: 6px 0;\n  position: absolute;\n  z-index: 100;\n}\n\n.graphiql-container .execute-options {\n  min-width: 100px;\n  top: 37px;\n  left: -1px;\n}\n\n.graphiql-container .toolbar-menu-items {\n  left: 1px;\n  margin-top: -1px;\n  min-width: 110%;\n  top: 100%;\n  visibility: hidden;\n}\n\n.graphiql-container .toolbar-menu-items.open {\n  visibility: visible;\n}\n\n.graphiql-container .toolbar-select-options {\n  left: 0;\n  min-width: 100%;\n  top: -5px;\n  visibility: hidden;\n}\n\n.graphiql-container .toolbar-select-options.open {\n  visibility: visible;\n}\n\n.graphiql-container .execute-options > li,\n.graphiql-container .toolbar-menu-items > li,\n.graphiql-container .toolbar-select-options > li {\n  cursor: pointer;\n  display: block;\n  margin: none;\n  max-width: 300px;\n  overflow: hidden;\n  padding: 2px 20px 4px 11px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.graphiql-container .execute-options > li.selected,\n.graphiql-container .toolbar-menu-items > li.hover,\n.graphiql-container .toolbar-menu-items > li:active,\n.graphiql-container .toolbar-menu-items > li:hover,\n.graphiql-container .toolbar-select-options > li.hover,\n.graphiql-container .toolbar-select-options > li:active,\n.graphiql-container .toolbar-select-options > li:hover,\n.graphiql-container .history-contents > p:hover,\n.graphiql-container .history-contents > p:active {\n  background: #e10098;\n  color: #fff;\n}\n\n.graphiql-container .toolbar-select-options > li > svg {\n  display: inline;\n  fill: #666;\n  margin: 0 -6px 0 6px;\n  pointer-events: none;\n  vertical-align: middle;\n}\n\n.graphiql-container .toolbar-select-options > li.hover > svg,\n.graphiql-container .toolbar-select-options > li:active > svg,\n.graphiql-container .toolbar-select-options > li:hover > svg {\n  fill: #fff;\n}\n\n.graphiql-container .CodeMirror-scroll {\n  overflow-scrolling: touch;\n}\n\n.graphiql-container .CodeMirror {\n  color: #141823;\n  font-family:\n    'Consolas',\n    'Inconsolata',\n    'Droid Sans Mono',\n    'Monaco',\n    monospace;\n  font-size: 13px;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n\n.graphiql-container .CodeMirror-lines {\n  padding: 20px 0;\n}\n\n.CodeMirror-hint-information .content {\n  box-orient: vertical;\n  color: #141823;\n  display: flex;\n  font-family: system, -apple-system, 'San Francisco', '.SFNSDisplay-Regular', 'Segoe UI', Segoe, 'Segoe WP', 'Helvetica Neue', helvetica, 'Lucida Grande', arial, sans-serif;\n  font-size: 13px;\n  line-clamp: 3;\n  line-height: 16px;\n  max-height: 48px;\n  overflow: hidden;\n  text-overflow: -o-ellipsis-lastline;\n}\n\n.CodeMirror-hint-information .content p:first-child {\n  margin-top: 0;\n}\n\n.CodeMirror-hint-information .content p:last-child {\n  margin-bottom: 0;\n}\n\n.CodeMirror-hint-information .infoType {\n  color: #CA9800;\n  cursor: pointer;\n  display: inline;\n  margin-right: 0.5em;\n}\n\n.autoInsertedLeaf.cm-property {\n  animation-duration: 6s;\n  animation-name: insertionFade;\n  border-bottom: 2px solid rgba(255, 255, 255, 0);\n  border-radius: 2px;\n  margin: -2px -4px -1px;\n  padding: 2px 4px 1px;\n}\n\n@keyframes insertionFade {\n  from, to {\n    background: rgba(255, 255, 255, 0);\n    border-color: rgba(255, 255, 255, 0);\n  }\n\n  15%, 85% {\n    background: #fbffc9;\n    border-color: #f0f3c0;\n  }\n}\n\ndiv.CodeMirror-lint-tooltip {\n  background-color: white;\n  border-radius: 2px;\n  border: 0;\n  color: #141823;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);\n  font-size: 13px;\n  line-height: 16px;\n  max-width: 430px;\n  opacity: 0;\n  padding: 8px 10px;\n  transition: opacity 0.15s;\n  white-space: pre-wrap;\n}\n\ndiv.CodeMirror-lint-tooltip > * {\n  padding-left: 23px;\n}\n\ndiv.CodeMirror-lint-tooltip > * + * {\n  margin-top: 12px;\n}\n\n/* COLORS */\n\n.graphiql-container .CodeMirror-foldmarker {\n  border-radius: 4px;\n  background: #08f;\n  background: linear-gradient(#43A8FF, #0F83E8);\n  box-shadow:\n    0 1px 1px rgba(0, 0, 0, 0.2),\n    inset 0 0 0 1px rgba(0, 0, 0, 0.1);\n  color: white;\n  font-family: arial;\n  font-size: 12px;\n  line-height: 0;\n  margin: 0 3px;\n  padding: 0px 4px 1px;\n  text-shadow: 0 -1px rgba(0, 0, 0, 0.1);\n}\n\n.graphiql-container div.CodeMirror span.CodeMirror-matchingbracket {\n  color: #555;\n  text-decoration: underline;\n}\n\n.graphiql-container div.CodeMirror span.CodeMirror-nonmatchingbracket {\n  color: #f00;\n}\n\n/* Comment */\n.cm-comment {\n  color: #999;\n}\n\n/* Punctuation */\n.cm-punctuation {\n  color: #555;\n}\n\n/* Keyword */\n.cm-keyword {\n  color: #B11A04;\n}\n\n/* OperationName, FragmentName */\n.cm-def {\n  color: #D2054E;\n}\n\n/* FieldName */\n.cm-property {\n  color: #1F61A0;\n}\n\n/* FieldAlias */\n.cm-qualifier {\n  color: #1C92A9;\n}\n\n/* ArgumentName and ObjectFieldName */\n.cm-attribute {\n  color: #8B2BB9;\n}\n\n/* Number */\n.cm-number {\n  color: #2882F9;\n}\n\n/* String */\n.cm-string {\n  color: #D64292;\n}\n\n/* Boolean */\n.cm-builtin {\n  color: #D47509;\n}\n\n/* EnumValue */\n.cm-string-2 {\n  color: #0B7FC7;\n}\n\n/* Variable */\n.cm-variable {\n  color: #397D13;\n}\n\n/* Directive */\n.cm-meta {\n  color: #B33086;\n}\n\n/* Type */\n.cm-atom {\n  color: #CA9800;\n}\n/* BASICS */\n\n.CodeMirror {\n  /* Set height, width, borders, and global font properties here */\n  color: black;\n  font-family: monospace;\n  height: 300px;\n}\n\n/* PADDING */\n\n.CodeMirror-lines {\n  padding: 4px 0; /* Vertical padding around content */\n}\n.CodeMirror pre {\n  padding: 0 4px; /* Horizontal padding of content */\n}\n\n.CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  background-color: white; /* The little square between H and V scrollbars */\n}\n\n/* GUTTER */\n\n.CodeMirror-gutters {\n  border-right: 1px solid #ddd;\n  background-color: #f7f7f7;\n  white-space: nowrap;\n}\n.CodeMirror-linenumbers {}\n.CodeMirror-linenumber {\n  color: #999;\n  min-width: 20px;\n  padding: 0 3px 0 5px;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.CodeMirror-guttermarker { color: black; }\n.CodeMirror-guttermarker-subtle { color: #999; }\n\n/* CURSOR */\n\n.CodeMirror .CodeMirror-cursor {\n  border-left: 1px solid black;\n}\n/* Shown when moving in bi-directional text */\n.CodeMirror div.CodeMirror-secondarycursor {\n  border-left: 1px solid silver;\n}\n.CodeMirror.cm-fat-cursor div.CodeMirror-cursor {\n  background: #7e7;\n  border: 0;\n  width: auto;\n}\n.CodeMirror.cm-fat-cursor div.CodeMirror-cursors {\n  z-index: 1;\n}\n\n.cm-animate-fat-cursor {\n  animation: blink 1.06s steps(1) infinite;\n  border: 0;\n  width: auto;\n}\n@keyframes blink {\n  0% { background: #7e7; }\n  50% { background: none; }\n  100% { background: #7e7; }\n}\n\n/* Can style cursor different in overwrite (non-insert) mode */\ndiv.CodeMirror-overwrite div.CodeMirror-cursor {}\n\n.cm-tab { display: inline-block; text-decoration: inherit; }\n\n.CodeMirror-ruler {\n  border-left: 1px solid #ccc;\n  position: absolute;\n}\n\n/* DEFAULT THEME */\n\n.cm-s-default .cm-keyword {color: #708;}\n.cm-s-default .cm-atom {color: #219;}\n.cm-s-default .cm-number {color: #164;}\n.cm-s-default .cm-def {color: #00f;}\n.cm-s-default .cm-variable,\n.cm-s-default .cm-punctuation,\n.cm-s-default .cm-property,\n.cm-s-default .cm-operator {}\n.cm-s-default .cm-variable-2 {color: #05a;}\n.cm-s-default .cm-variable-3 {color: #085;}\n.cm-s-default .cm-comment {color: #a50;}\n.cm-s-default .cm-string {color: #a11;}\n.cm-s-default .cm-string-2 {color: #f50;}\n.cm-s-default .cm-meta {color: #555;}\n.cm-s-default .cm-qualifier {color: #555;}\n.cm-s-default .cm-builtin {color: #30a;}\n.cm-s-default .cm-bracket {color: #997;}\n.cm-s-default .cm-tag {color: #170;}\n.cm-s-default .cm-attribute {color: #00c;}\n.cm-s-default .cm-header {color: blue;}\n.cm-s-default .cm-quote {color: #090;}\n.cm-s-default .cm-hr {color: #999;}\n.cm-s-default .cm-link {color: #00c;}\n\n.cm-negative {color: #d44;}\n.cm-positive {color: #292;}\n.cm-header, .cm-strong {font-weight: bold;}\n.cm-em {font-style: italic;}\n.cm-link {text-decoration: underline;}\n.cm-strikethrough {text-decoration: line-through;}\n\n.cm-s-default .cm-error {color: #f00;}\n.cm-invalidchar {color: #f00;}\n\n.CodeMirror-composing { border-bottom: 2px solid; }\n\n/* Default styles for common addons */\n\ndiv.CodeMirror span.CodeMirror-matchingbracket {color: #0f0;}\ndiv.CodeMirror span.CodeMirror-nonmatchingbracket {color: #f22;}\n.CodeMirror-matchingtag { background: rgba(255, 150, 0, .3); }\n.CodeMirror-activeline-background {background: #e8f2ff;}\n\n/* STOP */\n\n/* The rest of this file contains styles related to the mechanics of\n   the editor. You probably shouldn't touch them. */\n\n.CodeMirror {\n  background: white;\n  overflow: hidden;\n  position: relative;\n}\n\n.CodeMirror-scroll {\n  height: 100%;\n  /* 30px is the magic margin used to hide the element's real scrollbars */\n  /* See overflow: hidden in .CodeMirror */\n  margin-bottom: -30px; margin-right: -30px;\n  outline: none; /* Prevent dragging from highlighting the element */\n  overflow: scroll !important; /* Things will break if this is overridden */\n  padding-bottom: 30px;\n  position: relative;\n}\n.CodeMirror-sizer {\n  border-right: 30px solid transparent;\n  position: relative;\n}\n\n/* The fake, visible scrollbars. Used to force redraw during scrolling\n   before actual scrolling happens, thus preventing shaking and\n   flickering artifacts. */\n.CodeMirror-vscrollbar, .CodeMirror-hscrollbar, .CodeMirror-scrollbar-filler, .CodeMirror-gutter-filler {\n  display: none;\n  position: absolute;\n  z-index: 6;\n}\n.CodeMirror-vscrollbar {\n  overflow-x: hidden;\n  overflow-y: scroll;\n  right: 0; top: 0;\n}\n.CodeMirror-hscrollbar {\n  bottom: 0; left: 0;\n  overflow-x: scroll;\n  overflow-y: hidden;\n}\n.CodeMirror-scrollbar-filler {\n  right: 0; bottom: 0;\n}\n.CodeMirror-gutter-filler {\n  left: 0; bottom: 0;\n}\n\n.CodeMirror-gutters {\n  min-height: 100%;\n  position: absolute; left: 0; top: 0;\n  z-index: 3;\n}\n.CodeMirror-gutter {\n  display: inline-block;\n  height: 100%;\n  margin-bottom: -30px;\n  vertical-align: top;\n  white-space: normal;\n  /* Hack to make IE7 behave */\n  *zoom:1;\n  *display:inline;\n}\n.CodeMirror-gutter-wrapper {\n  background: none !important;\n  border: none !important;\n  position: absolute;\n  z-index: 4;\n}\n.CodeMirror-gutter-background {\n  position: absolute;\n  top: 0; bottom: 0;\n  z-index: 4;\n}\n.CodeMirror-gutter-elt {\n  cursor: default;\n  position: absolute;\n  z-index: 4;\n}\n.CodeMirror-gutter-wrapper {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CodeMirror-lines {\n  cursor: text;\n  min-height: 1px; /* prevents collapsing before first draw */\n}\n.CodeMirror pre {\n  -webkit-tap-highlight-color: transparent;\n  /* Reset some styles that the rest of the page might have set */\n  background: transparent;\n  border-radius: 0;\n  border-width: 0;\n  color: inherit;\n  font-family: inherit;\n  font-size: inherit;\n  font-variant-ligatures: none;\n  line-height: inherit;\n  margin: 0;\n  overflow: visible;\n  position: relative;\n  white-space: pre;\n  word-wrap: normal;\n  z-index: 2;\n}\n.CodeMirror-wrap pre {\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  word-break: normal;\n}\n\n.CodeMirror-linebackground {\n  position: absolute;\n  left: 0; right: 0; top: 0; bottom: 0;\n  z-index: 0;\n}\n\n.CodeMirror-linewidget {\n  overflow: auto;\n  position: relative;\n  z-index: 2;\n}\n\n.CodeMirror-widget {}\n\n.CodeMirror-code {\n  outline: none;\n}\n\n/* Force content-box sizing for the elements where we expect it */\n.CodeMirror-scroll,\n.CodeMirror-sizer,\n.CodeMirror-gutter,\n.CodeMirror-gutters,\n.CodeMirror-linenumber {\n  box-sizing: content-box;\n}\n\n.CodeMirror-measure {\n  height: 0;\n  overflow: hidden;\n  position: absolute;\n  visibility: hidden;\n  width: 100%;\n}\n\n.CodeMirror-cursor { position: absolute; }\n.CodeMirror-measure pre { position: static; }\n\ndiv.CodeMirror-cursors {\n  position: relative;\n  visibility: hidden;\n  z-index: 3;\n}\ndiv.CodeMirror-dragcursors {\n  visibility: visible;\n}\n\n.CodeMirror-focused div.CodeMirror-cursors {\n  visibility: visible;\n}\n\n.CodeMirror-selected { background: #d9d9d9; }\n.CodeMirror-focused .CodeMirror-selected { background: #d7d4f0; }\n.CodeMirror-crosshair { cursor: crosshair; }\n.CodeMirror-line::selection, .CodeMirror-line > span::selection, .CodeMirror-line > span > span::selection { background: #d7d4f0; }\n.CodeMirror-line::-moz-selection, .CodeMirror-line > span::-moz-selection, .CodeMirror-line > span > span::-moz-selection { background: #d7d4f0; }\n\n.cm-searching {\n  background: #ffa;\n  background: rgba(255, 255, 0, .4);\n}\n\n/* IE7 hack to prevent it from returning funny offsetTops on the spans */\n.CodeMirror span { *vertical-align: text-bottom; }\n\n/* Used to force a border model for a node */\n.cm-force-border { padding-right: .1px; }\n\n@media print {\n  /* Hide the cursor when printing */\n  .CodeMirror div.CodeMirror-cursors {\n    visibility: hidden;\n  }\n}\n\n/* See issue #2901 */\n.cm-tab-wrap-hack:after { content: ''; }\n\n/* Help users use markselection to safely style text background */\nspan.CodeMirror-selectedtext { background: none; }\n\n.CodeMirror-dialog {\n  background: inherit;\n  color: inherit;\n  left: 0; right: 0;\n  overflow: hidden;\n  padding: .1em .8em;\n  position: absolute;\n  z-index: 15;\n}\n\n.CodeMirror-dialog-top {\n  border-bottom: 1px solid #eee;\n  top: 0;\n}\n\n.CodeMirror-dialog-bottom {\n  border-top: 1px solid #eee;\n  bottom: 0;\n}\n\n.CodeMirror-dialog input {\n  background: transparent;\n  border: 1px solid #d3d6db;\n  color: inherit;\n  font-family: monospace;\n  outline: none;\n  width: 20em;\n}\n\n.CodeMirror-dialog button {\n  font-size: 70%;\n}\n.graphiql-container .doc-explorer {\n  background: white;\n}\n\n.graphiql-container .doc-explorer-title-bar,\n.graphiql-container .history-title-bar {\n  cursor: default;\n  display: flex;\n  height: 34px;\n  line-height: 14px;\n  padding: 8px 8px 5px;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .doc-explorer-title,\n.graphiql-container .history-title {\n  flex: 1;\n  font-weight: bold;\n  overflow-x: hidden;\n  padding: 10px 0 10px 10px;\n  text-align: center;\n  text-overflow: ellipsis;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  white-space: nowrap;\n}\n\n.graphiql-container .doc-explorer-back {\n  color: #3B5998;\n  cursor: pointer;\n  margin: -7px 0 -6px -8px;\n  overflow-x: hidden;\n  padding: 17px 12px 16px 16px;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.doc-explorer-narrow .doc-explorer-back {\n  width: 0;\n}\n\n.graphiql-container .doc-explorer-back:before {\n  border-left: 2px solid #3B5998;\n  border-top: 2px solid #3B5998;\n  content: '';\n  display: inline-block;\n  height: 9px;\n  margin: 0 3px -1px 0;\n  position: relative;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  width: 9px;\n}\n\n.graphiql-container .doc-explorer-rhs {\n  position: relative;\n}\n\n.graphiql-container .doc-explorer-contents,\n.graphiql-container .history-contents {\n  background-color: #ffffff;\n  border-top: 1px solid #d6d6d6;\n  bottom: 0;\n  left: 0;\n  overflow-y: auto;\n  padding: 20px 15px;\n  position: absolute;\n  right: 0;\n  top: 47px;\n}\n\n.graphiql-container .doc-explorer-contents {\n  min-width: 300px;\n}\n\n.graphiql-container .doc-type-description p:first-child ,\n.graphiql-container .doc-type-description blockquote:first-child {\n  margin-top: 0;\n}\n\n.graphiql-container .doc-explorer-contents a {\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.graphiql-container .doc-explorer-contents a:hover {\n  text-decoration: underline;\n}\n\n.graphiql-container .doc-value-description > :first-child {\n  margin-top: 4px;\n}\n\n.graphiql-container .doc-value-description > :last-child {\n  margin-bottom: 4px;\n}\n\n.graphiql-container .doc-category {\n  margin: 20px 0;\n}\n\n.graphiql-container .doc-category-title {\n  border-bottom: 1px solid #e0e0e0;\n  color: #777;\n  cursor: default;\n  font-size: 14px;\n  font-variant: small-caps;\n  font-weight: bold;\n  letter-spacing: 1px;\n  margin: 0 -15px 10px 0;\n  padding: 10px 0;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .doc-category-item {\n  margin: 12px 0;\n  color: #555;\n}\n\n.graphiql-container .keyword {\n  color: #B11A04;\n}\n\n.graphiql-container .type-name {\n  color: #CA9800;\n}\n\n.graphiql-container .field-name {\n  color: #1F61A0;\n}\n\n.graphiql-container .field-short-description {\n  color: #999;\n  margin-left: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.graphiql-container .enum-value {\n  color: #0B7FC7;\n}\n\n.graphiql-container .arg-name {\n  color: #8B2BB9;\n}\n\n.graphiql-container .arg {\n  display: block;\n  margin-left: 1em;\n}\n\n.graphiql-container .arg:first-child:last-child,\n.graphiql-container .arg:first-child:nth-last-child(2),\n.graphiql-container .arg:first-child:nth-last-child(2) ~ .arg {\n  display: inherit;\n  margin: inherit;\n}\n\n.graphiql-container .arg:first-child:nth-last-child(2):after {\n  content: ', ';\n}\n\n.graphiql-container .arg-default-value {\n  color: #43A047;\n}\n\n.graphiql-container .doc-deprecation {\n  background: #fffae8;\n  box-shadow: inset 0 0 1px #bfb063;\n  color: #867F70;\n  line-height: 16px;\n  margin: 8px -8px;\n  max-height: 80px;\n  overflow: hidden;\n  padding: 8px;\n  border-radius: 3px;\n}\n\n.graphiql-container .doc-deprecation:before {\n  content: 'Deprecated:';\n  color: #c79b2e;\n  cursor: default;\n  display: block;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 1;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .doc-deprecation > :first-child {\n  margin-top: 0;\n}\n\n.graphiql-container .doc-deprecation > :last-child {\n  margin-bottom: 0;\n}\n\n.graphiql-container .show-btn {\n  -webkit-appearance: initial;\n  display: block;\n  border-radius: 3px;\n  border: solid 1px #ccc;\n  text-align: center;\n  padding: 8px 12px 10px;\n  width: 100%;\n  box-sizing: border-box;\n  background: #fbfcfc;\n  color: #555;\n  cursor: pointer;\n}\n\n.graphiql-container .search-box {\n  border-bottom: 1px solid #d3d6db;\n  display: block;\n  font-size: 14px;\n  margin: -15px -15px 12px 0;\n  position: relative;\n}\n\n.graphiql-container .search-box:before {\n  content: '\\26b2';\n  cursor: pointer;\n  display: block;\n  font-size: 24px;\n  position: absolute;\n  top: -2px;\n  -ms-transform: rotate(-45deg);\n      transform: rotate(-45deg);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .search-box .search-box-clear {\n  background-color: #d0d0d0;\n  border-radius: 12px;\n  color: #fff;\n  cursor: pointer;\n  font-size: 11px;\n  padding: 1px 5px 2px;\n  position: absolute;\n  right: 3px;\n  top: 8px;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.graphiql-container .search-box .search-box-clear:hover {\n  background-color: #b9b9b9;\n}\n\n.graphiql-container .search-box > input {\n  border: none;\n  box-sizing: border-box;\n  font-size: 14px;\n  outline: none;\n  padding: 6px 24px 8px 20px;\n  width: 100%;\n}\n\n.graphiql-container .error-container {\n  font-weight: bold;\n  left: 0;\n  letter-spacing: 1px;\n  opacity: 0.5;\n  position: absolute;\n  right: 0;\n  text-align: center;\n  text-transform: uppercase;\n  top: 50%;\n  -ms-transform: translate(0, -50%);\n      transform: translate(0, -50%);\n}\n.CodeMirror-foldmarker {\n  color: blue;\n  cursor: pointer;\n  font-family: arial;\n  line-height: .3;\n  text-shadow: #b9f 1px 1px 2px, #b9f -1px -1px 2px, #b9f 1px -1px 2px, #b9f -1px 1px 2px;\n}\n.CodeMirror-foldgutter {\n  width: .7em;\n}\n.CodeMirror-foldgutter-open,\n.CodeMirror-foldgutter-folded {\n  cursor: pointer;\n}\n.CodeMirror-foldgutter-open:after {\n  content: \"\\25BE\";\n}\n.CodeMirror-foldgutter-folded:after {\n  content: \"\\25B8\";\n}\n.graphiql-container .history-contents,\n.graphiql-container .history-contents input {\n  font-family: 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace;\n  padding: 0;\n}\n\n.graphiql-container .history-contents p {\n  align-items: center;\n  display: flex;\n  font-size: 12px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  margin: 0;\n  padding: 8px;\n  border-bottom: 1px solid #e0e0e0;\n}\n\n.graphiql-container .history-contents p.editable {\n  padding-bottom: 6px;\n  padding-top: 7px;\n}\n\n.graphiql-container .history-contents input {\n  flex-grow: 1;\n  font-size: 12px;\n}\n\n.graphiql-container .history-contents p:hover {\n  cursor: pointer;\n}\n\n.graphiql-container .history-contents p span.history-label {\n  flex-grow: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}.CodeMirror-info {\n  background: white;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);\n  box-sizing: border-box;\n  color: #555;\n  font-family:\n    system,\n    -apple-system,\n    'San Francisco',\n    '.SFNSDisplay-Regular',\n    'Segoe UI',\n    Segoe,\n    'Segoe WP',\n    'Helvetica Neue',\n    helvetica,\n    'Lucida Grande',\n    arial,\n    sans-serif;\n  font-size: 13px;\n  line-height: 16px;\n  margin: 8px -8px;\n  max-width: 400px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 8px 8px;\n  position: fixed;\n  transition: opacity 0.15s;\n  z-index: 50;\n}\n\n.CodeMirror-info :first-child {\n  margin-top: 0;\n}\n\n.CodeMirror-info :last-child {\n  margin-bottom: 0;\n}\n\n.CodeMirror-info p {\n  margin: 1em 0;\n}\n\n.CodeMirror-info .info-description {\n  color: #777;\n  line-height: 16px;\n  margin-top: 1em;\n  max-height: 80px;\n  overflow: hidden;\n}\n\n.CodeMirror-info .info-deprecation {\n  background: #fffae8;\n  box-shadow: inset 0 1px 1px -1px #bfb063;\n  color: #867F70;\n  line-height: 16px;\n  margin: -8px;\n  margin-top: 8px;\n  max-height: 80px;\n  overflow: hidden;\n  padding: 8px;\n}\n\n.CodeMirror-info .info-deprecation-label {\n  color: #c79b2e;\n  cursor: default;\n  display: block;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 1;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CodeMirror-info .info-deprecation-label + * {\n  margin-top: 0;\n}\n\n.CodeMirror-info a {\n  text-decoration: none;\n}\n\n.CodeMirror-info a:hover {\n  text-decoration: underline;\n}\n\n.CodeMirror-info .type-name {\n  color: #CA9800;\n}\n\n.CodeMirror-info .field-name {\n  color: #1F61A0;\n}\n\n.CodeMirror-info .enum-value {\n  color: #0B7FC7;\n}\n\n.CodeMirror-info .arg-name {\n  color: #8B2BB9;\n}\n\n.CodeMirror-info .directive-name {\n  color: #B33086;\n}\n.CodeMirror-jump-token {\n  text-decoration: underline;\n  cursor: pointer;\n}\n/* The lint marker gutter */\n.CodeMirror-lint-markers {\n  width: 16px;\n}\n\n.CodeMirror-lint-tooltip {\n  background-color: infobackground;\n  border-radius: 4px 4px 4px 4px;\n  border: 1px solid black;\n  color: infotext;\n  font-family: monospace;\n  font-size: 10pt;\n  max-width: 600px;\n  opacity: 0;\n  overflow: hidden;\n  padding: 2px 5px;\n  position: fixed;\n  transition: opacity .4s;\n  white-space: pre-wrap;\n  z-index: 100;\n}\n\n.CodeMirror-lint-mark-error, .CodeMirror-lint-mark-warning {\n  background-position: left bottom;\n  background-repeat: repeat-x;\n}\n\n.CodeMirror-lint-mark-error {\n  background-image:\n  url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJDw4cOCW1/KIAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAHElEQVQI12NggIL/DAz/GdA5/xkY/qPKMDAwAADLZwf5rvm+LQAAAABJRU5ErkJggg==\")\n  ;\n}\n\n.CodeMirror-lint-mark-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAADCAYAAAC09K7GAAAAAXNSR0IArs4c6QAAAAZiS0dEAP8A/wD/oL2nkwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB9sJFhQXEbhTg7YAAAAZdEVYdENvbW1lbnQAQ3JlYXRlZCB3aXRoIEdJTVBXgQ4XAAAAMklEQVQI12NkgIIvJ3QXMjAwdDN+OaEbysDA4MPAwNDNwMCwiOHLCd1zX07o6kBVGQEAKBANtobskNMAAAAASUVORK5CYII=\");\n}\n\n.CodeMirror-lint-marker-error, .CodeMirror-lint-marker-warning {\n  background-position: center center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n  display: inline-block;\n  height: 16px;\n  position: relative;\n  vertical-align: middle;\n  width: 16px;\n}\n\n.CodeMirror-lint-message-error, .CodeMirror-lint-message-warning {\n  background-position: top left;\n  background-repeat: no-repeat;\n  padding-left: 18px;\n}\n\n.CodeMirror-lint-marker-error, .CodeMirror-lint-message-error {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAHlBMVEW7AAC7AACxAAC7AAC7AAAAAAC4AAC5AAD///+7AAAUdclpAAAABnRSTlMXnORSiwCK0ZKSAAAATUlEQVR42mWPOQ7AQAgDuQLx/z8csYRmPRIFIwRGnosRrpamvkKi0FTIiMASR3hhKW+hAN6/tIWhu9PDWiTGNEkTtIOucA5Oyr9ckPgAWm0GPBog6v4AAAAASUVORK5CYII=\");\n}\n\n.CodeMirror-lint-marker-warning, .CodeMirror-lint-message-warning {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAANlBMVEX/uwDvrwD/uwD/uwD/uwD/uwD/uwD/uwD/uwD6twD/uwAAAADurwD2tQD7uAD+ugAAAAD/uwDhmeTRAAAADHRSTlMJ8mN1EYcbmiixgACm7WbuAAAAVklEQVR42n3PUQqAIBBFUU1LLc3u/jdbOJoW1P08DA9Gba8+YWJ6gNJoNYIBzAA2chBth5kLmG9YUoG0NHAUwFXwO9LuBQL1giCQb8gC9Oro2vp5rncCIY8L8uEx5ZkAAAAASUVORK5CYII=\");\n}\n\n.CodeMirror-lint-marker-multiple {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAMAAADzjKfhAAAACVBMVEUAAAAAAAC/v7914kyHAAAAAXRSTlMAQObYZgAAACNJREFUeNo1ioEJAAAIwmz/H90iFFSGJgFMe3gaLZ0od+9/AQZ0ADosbYraAAAAAElFTkSuQmCC\");\n  background-position: right bottom;\n  background-repeat: no-repeat;\n  width: 100%; height: 100%;\n}\n.graphiql-container .spinner-container {\n  height: 36px;\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  -ms-transform: translate(-50%, -50%);\n      transform: translate(-50%, -50%);\n  width: 36px;\n  z-index: 10;\n}\n\n.graphiql-container .spinner {\n  animation: rotation .6s infinite linear;\n  border-bottom: 6px solid rgba(150, 150, 150, .15);\n  border-left: 6px solid rgba(150, 150, 150, .15);\n  border-radius: 100%;\n  border-right: 6px solid rgba(150, 150, 150, .15);\n  border-top: 6px solid rgba(150, 150, 150, .8);\n  display: inline-block;\n  height: 24px;\n  position: absolute;\n  vertical-align: middle;\n  width: 24px;\n}\n\n@keyframes rotation {\n  from { transform: rotate(0deg); }\n  to { transform: rotate(359deg); }\n}\n.CodeMirror-hints {\n  background: white;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);\n  font-family: 'Consolas', 'Inconsolata', 'Droid Sans Mono', 'Monaco', monospace;\n  font-size: 13px;\n  list-style: none;\n  margin-left: -6px;\n  margin: 0;\n  max-height: 14.5em;\n  overflow-y: auto;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  z-index: 10;\n}\n\n.CodeMirror-hint {\n  border-top: solid 1px #f7f7f7;\n  color: #141823;\n  cursor: pointer;\n  margin: 0;\n  max-width: 300px;\n  overflow: hidden;\n  padding: 2px 6px;\n  white-space: pre;\n}\n\nli.CodeMirror-hint-active {\n  background-color: #08f;\n  border-top-color: white;\n  color: white;\n}\n\n.CodeMirror-hint-information {\n  border-top: solid 1px #c0c0c0;\n  max-width: 300px;\n  padding: 4px 6px;\n  position: relative;\n  z-index: 1;\n}\n\n.CodeMirror-hint-information:first-child {\n  border-bottom: solid 1px #c0c0c0;\n  border-top: none;\n  margin-bottom: -1px;\n}\n\n.CodeMirror-hint-deprecation {\n  background: #fffae8;\n  box-shadow: inset 0 1px 1px -1px #bfb063;\n  color: #867F70;\n  font-family:\n    system,\n    -apple-system,\n    'San Francisco',\n    '.SFNSDisplay-Regular',\n    'Segoe UI',\n    Segoe,\n    'Segoe WP',\n    'Helvetica Neue',\n    helvetica,\n    'Lucida Grande',\n    arial,\n    sans-serif;\n  font-size: 13px;\n  line-height: 16px;\n  margin-top: 4px;\n  max-height: 80px;\n  overflow: hidden;\n  padding: 6px;\n}\n\n.CodeMirror-hint-deprecation .deprecation-label {\n  color: #c79b2e;\n  cursor: default;\n  display: block;\n  font-size: 9px;\n  font-weight: bold;\n  letter-spacing: 1px;\n  line-height: 1;\n  padding-bottom: 5px;\n  text-transform: uppercase;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.CodeMirror-hint-deprecation .deprecation-label + * {\n  margin-top: 0;\n}\n\n.CodeMirror-hint-deprecation :last-child {\n  margin-bottom: 0;\n}\n"}
  </style>
  <script>
    // promise-polyfill/dist/polyfill.min.js
    ${"!function(e,n){\"object\"==typeof exports&&\"undefined\"!=typeof module?n():\"function\"==typeof define&&define.amd?define(n):n()}(0,function(){\"use strict\";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return!(!e||\"undefined\"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError(\"Promises must be constructed via new\");if(\"function\"!=typeof e)throw new TypeError(\"not a function\");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this)}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(r){return void f(n.promise,r)}i(n.promise,o)}else(1===e._state?i:f)(n.promise,e._value)})):e._deferreds.push(n)}function i(e,n){try{if(n===e)throw new TypeError(\"A promise cannot be resolved with itself.\");if(n&&(\"object\"==typeof n||\"function\"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if(\"function\"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,u(e)}catch(r){f(e,r)}}function f(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,f(n,e))})}catch(o){if(t)return;t=!0,f(n,o)}}var a=setTimeout;o.prototype[\"catch\"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled=\"function\"==typeof e?e:null,this.onRejected=\"function\"==typeof n?n:null,this.promise=t}(e,n,o)),o},o.prototype[\"finally\"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&(\"object\"==typeof n||\"function\"==typeof n)){var u=n.then;if(\"function\"==typeof u)return void u.call(n,function(n){r(e,n)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError(\"Promise.all accepts an array\"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},o.resolve=function(e){return e&&\"object\"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError(\"Promise.race accepts an array\"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r)})},o._immediateFn=\"function\"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn(\"Possible Unhandled Promise Rejection:\",e)};var l=function(){if(\"undefined\"!=typeof self)return self;if(\"undefined\"!=typeof window)return window;if(\"undefined\"!=typeof global)return global;throw Error(\"unable to locate global object\")}();\"Promise\"in l?l.Promise.prototype[\"finally\"]||(l.Promise.prototype[\"finally\"]=e):l.Promise=o});\n"}
  </script>
  <script>
    // unfetch/dist/unfetch.umd.js
    ${"!function(e,n){\"object\"==typeof exports&&\"undefined\"!=typeof module?module.exports=n():\"function\"==typeof define&&define.amd?define(n):e.unfetch=n()}(this,function(){return function(e,n){return n=n||{},new Promise(function(t,o){var r=new XMLHttpRequest,s=[],u=[],i={},f=function(){return{ok:2==(r.status/100|0),statusText:r.statusText,status:r.status,url:r.responseURL,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(JSON.parse(r.responseText))},blob:function(){return Promise.resolve(new Blob([r.response]))},clone:f,headers:{keys:function(){return s},entries:function(){return u},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}};for(var a in r.open(n.method||\"get\",e,!0),r.onload=function(){r.getAllResponseHeaders().replace(/^(.*?):[^\\S\\n]*([\\s\\S]*?)$/gm,function(e,n,t){s.push(n=n.toLowerCase()),u.push([n,t]),i[n]=i[n]?i[n]+\",\"+t:t}),t(f())},r.onerror=o,r.withCredentials=\"include\"==n.credentials,n.headers)r.setRequestHeader(a,n.headers[a]);r.send(n.body||null)})}});\n//# sourceMappingURL=unfetch.umd.js.map\n"}
  </script>
  <script>
    // react/umd/react.production.min.js
    ${"/** @license React v16.8.6\n * react.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n'use strict';(function(N,q){\"object\"===typeof exports&&\"undefined\"!==typeof module?module.exports=q():\"function\"===typeof define&&define.amd?define(q):N.React=q()})(this,function(){function N(a,b,d,g,p,c,e,h){if(!a){a=void 0;if(void 0===b)a=Error(\"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.\");else{var n=[d,g,p,c,e,h],f=0;a=Error(b.replace(/%s/g,function(){return n[f++]}));a.name=\"Invariant Violation\"}a.framesToPop=1;\nthrow a;}}function q(a){for(var b=arguments.length-1,d=\"https://reactjs.org/docs/error-decoder.html?invariant=\"+a,g=0;g<b;g++)d+=\"&args[]=\"+encodeURIComponent(arguments[g+1]);N(!1,\"Minified React error #\"+a+\"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. \",d)}function t(a,b,d){this.props=a;this.context=b;this.refs=ba;this.updater=d||ca}function da(){}function O(a,b,d){this.props=a;this.context=b;this.refs=ba;this.updater=d||\nca}function u(){if(!x){var a=c.expirationTime;C?P():C=!0;D(ta,a)}}function Q(){var a=c,b=c.next;if(c===b)c=null;else{var d=c.previous;c=d.next=b;b.previous=d}a.next=a.previous=null;d=a.callback;b=a.expirationTime;a=a.priorityLevel;var g=f,p=E;f=a;E=b;try{var n=d()}finally{f=g,E=p}if(\"function\"===typeof n)if(n={callback:n,priorityLevel:a,expirationTime:b,next:null,previous:null},null===c)c=n.next=n.previous=n;else{d=null;a=c;do{if(a.expirationTime>=b){d=a;break}a=a.next}while(a!==c);null===d?d=c:d===\nc&&(c=n,u());b=d.previous;b.next=d.previous=n;n.next=d;n.previous=b}}function F(){if(-1===k&&null!==c&&1===c.priorityLevel){x=!0;try{do Q();while(null!==c&&1===c.priorityLevel)}finally{x=!1,null!==c?u():C=!1}}}function ta(a){x=!0;var b=G;G=a;try{if(a)for(;null!==c;){var d=l();if(c.expirationTime<=d){do Q();while(null!==c&&c.expirationTime<=d)}else break}else if(null!==c){do Q();while(null!==c&&!H())}}finally{x=!1,G=b,null!==c?u():C=!1,F()}}function ea(a,b,d){var g=void 0,p={},c=null,e=null;if(null!=\nb)for(g in void 0!==b.ref&&(e=b.ref),void 0!==b.key&&(c=\"\"+b.key),b)fa.call(b,g)&&!ha.hasOwnProperty(g)&&(p[g]=b[g]);var h=arguments.length-2;if(1===h)p.children=d;else if(1<h){for(var f=Array(h),k=0;k<h;k++)f[k]=arguments[k+2];p.children=f}if(a&&a.defaultProps)for(g in h=a.defaultProps,h)void 0===p[g]&&(p[g]=h[g]);return{$$typeof:y,type:a,key:c,ref:e,props:p,_owner:R.current}}function ua(a,b){return{$$typeof:y,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function S(a){return\"object\"===\ntypeof a&&null!==a&&a.$$typeof===y}function va(a){var b={\"=\":\"=0\",\":\":\"=2\"};return\"$\"+(\"\"+a).replace(/[=:]/g,function(a){return b[a]})}function ia(a,b,d,g){if(I.length){var c=I.pop();c.result=a;c.keyPrefix=b;c.func=d;c.context=g;c.count=0;return c}return{result:a,keyPrefix:b,func:d,context:g,count:0}}function ja(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>I.length&&I.push(a)}function T(a,b,d,g){var c=typeof a;if(\"undefined\"===c||\"boolean\"===c)a=null;var e=!1;if(null===\na)e=!0;else switch(c){case \"string\":case \"number\":e=!0;break;case \"object\":switch(a.$$typeof){case y:case wa:e=!0}}if(e)return d(g,a,\"\"===b?\".\"+U(a,0):b),1;e=0;b=\"\"===b?\".\":b+\":\";if(Array.isArray(a))for(var f=0;f<a.length;f++){c=a[f];var h=b+U(c,f);e+=T(c,h,d,g)}else if(null===a||\"object\"!==typeof a?h=null:(h=ka&&a[ka]||a[\"@@iterator\"],h=\"function\"===typeof h?h:null),\"function\"===typeof h)for(a=h.call(a),f=0;!(c=a.next()).done;)c=c.value,h=b+U(c,f++),e+=T(c,h,d,g);else\"object\"===c&&(d=\"\"+a,q(\"31\",\n\"[object Object]\"===d?\"object with keys {\"+Object.keys(a).join(\", \")+\"}\":d,\"\"));return e}function V(a,b,d){return null==a?0:T(a,\"\",b,d)}function U(a,b){return\"object\"===typeof a&&null!==a&&null!=a.key?va(a.key):b.toString(36)}function xa(a,b,d){a.func.call(a.context,b,a.count++)}function ya(a,b,d){var g=a.result,c=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?W(a,g,d,function(a){return a}):null!=a&&(S(a)&&(a=ua(a,c+(!a.key||b&&b.key===a.key?\"\":(\"\"+a.key).replace(la,\"$&/\")+\"/\")+\nd)),g.push(a))}function W(a,b,d,g,c){var e=\"\";null!=d&&(e=(\"\"+d).replace(la,\"$&/\")+\"/\");b=ia(b,e,g,c);V(a,ya,b);ja(b)}function m(){var a=ma.current;null===a?q(\"321\"):void 0;return a}var e=\"function\"===typeof Symbol&&Symbol.for,y=e?Symbol.for(\"react.element\"):60103,wa=e?Symbol.for(\"react.portal\"):60106,r=e?Symbol.for(\"react.fragment\"):60107,X=e?Symbol.for(\"react.strict_mode\"):60108,za=e?Symbol.for(\"react.profiler\"):60114,Aa=e?Symbol.for(\"react.provider\"):60109,Ba=e?Symbol.for(\"react.context\"):60110,\nCa=e?Symbol.for(\"react.concurrent_mode\"):60111,Da=e?Symbol.for(\"react.forward_ref\"):60112,Ea=e?Symbol.for(\"react.suspense\"):60113,Fa=e?Symbol.for(\"react.memo\"):60115,Ga=e?Symbol.for(\"react.lazy\"):60116,ka=\"function\"===typeof Symbol&&Symbol.iterator,na=Object.getOwnPropertySymbols,Ha=Object.prototype.hasOwnProperty,Ia=Object.prototype.propertyIsEnumerable,J=function(){try{if(!Object.assign)return!1;var a=new String(\"abc\");a[5]=\"de\";if(\"5\"===Object.getOwnPropertyNames(a)[0])return!1;var b={};for(a=\n0;10>a;a++)b[\"_\"+String.fromCharCode(a)]=a;if(\"0123456789\"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(\"\"))return!1;var d={};\"abcdefghijklmnopqrst\".split(\"\").forEach(function(a){d[a]=a});return\"abcdefghijklmnopqrst\"!==Object.keys(Object.assign({},d)).join(\"\")?!1:!0}catch(g){return!1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError(\"Object.assign cannot be called with null or undefined\");var d=Object(a);for(var c,e=1;e<arguments.length;e++){var f=Object(arguments[e]);\nfor(var k in f)Ha.call(f,k)&&(d[k]=f[k]);if(na){c=na(f);for(var h=0;h<c.length;h++)Ia.call(f,c[h])&&(d[c[h]]=f[c[h]])}}return d},ca={isMounted:function(a){return!1},enqueueForceUpdate:function(a,b,d){},enqueueReplaceState:function(a,b,d,c){},enqueueSetState:function(a,b,d,c){}},ba={};t.prototype.isReactComponent={};t.prototype.setState=function(a,b){\"object\"!==typeof a&&\"function\"!==typeof a&&null!=a?q(\"85\"):void 0;this.updater.enqueueSetState(this,a,b,\"setState\")};t.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,\na,\"forceUpdate\")};da.prototype=t.prototype;e=O.prototype=new da;e.constructor=O;J(e,t.prototype);e.isPureReactComponent=!0;var c=null,G=!1,f=3,k=-1,E=-1,x=!1,C=!1,Ja=Date,Ka=\"function\"===typeof setTimeout?setTimeout:void 0,La=\"function\"===typeof clearTimeout?clearTimeout:void 0,oa=\"function\"===typeof requestAnimationFrame?requestAnimationFrame:void 0,pa=\"function\"===typeof cancelAnimationFrame?cancelAnimationFrame:void 0,qa,ra,Y=function(a){qa=oa(function(b){La(ra);a(b)});ra=Ka(function(){pa(qa);\na(l())},100)};if(\"object\"===typeof performance&&\"function\"===typeof performance.now){var Ma=performance;var l=function(){return Ma.now()}}else l=function(){return Ja.now()};e=null;\"undefined\"!==typeof window?e=window:\"undefined\"!==typeof global&&(e=global);if(e&&e._schedMock){e=e._schedMock;var D=e[0];var P=e[1];var H=e[2];l=e[3]}else if(\"undefined\"===typeof window||\"function\"!==typeof MessageChannel){var v=null,Na=function(a){if(null!==v)try{v(a)}finally{v=null}};D=function(a,b){null!==v?setTimeout(D,\n0,a):(v=a,setTimeout(Na,0,!1))};P=function(){v=null};H=function(){return!1}}else{\"undefined\"!==typeof console&&(\"function\"!==typeof oa&&console.error(\"This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills\"),\"function\"!==typeof pa&&console.error(\"This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills\"));var w=null,K=!1,z=-1,A=!1,Z=!1,L=0,\nM=33,B=33;H=function(){return L<=l()};e=new MessageChannel;var sa=e.port2;e.port1.onmessage=function(a){K=!1;a=w;var b=z;w=null;z=-1;var d=l(),c=!1;if(0>=L-d)if(-1!==b&&b<=d)c=!0;else{A||(A=!0,Y(aa));w=a;z=b;return}if(null!==a){Z=!0;try{a(c)}finally{Z=!1}}};var aa=function(a){if(null!==w){Y(aa);var b=a-L+B;b<B&&M<B?(8>b&&(b=8),B=b<M?M:b):M=b;L=a+B;K||(K=!0,sa.postMessage(void 0))}else A=!1};D=function(a,b){w=a;z=b;Z||0>b?sa.postMessage(void 0):A||(A=!0,Y(aa))};P=function(){w=null;K=!1;z=-1}}var Oa=\n0,ma={current:null},R={current:null};e={ReactCurrentDispatcher:ma,ReactCurrentOwner:R,assign:J};J(e,{Scheduler:{unstable_cancelCallback:function(a){var b=a.next;if(null!==b){if(b===a)c=null;else{a===c&&(c=b);var d=a.previous;d.next=b;b.previous=d}a.next=a.previous=null}},unstable_shouldYield:function(){return!G&&(null!==c&&c.expirationTime<E||H())},unstable_now:l,unstable_scheduleCallback:function(a,b){var d=-1!==k?k:l();if(\"object\"===typeof b&&null!==b&&\"number\"===typeof b.timeout)b=d+b.timeout;\nelse switch(f){case 1:b=d+-1;break;case 2:b=d+250;break;case 5:b=d+1073741823;break;case 4:b=d+1E4;break;default:b=d+5E3}a={callback:a,priorityLevel:f,expirationTime:b,next:null,previous:null};if(null===c)c=a.next=a.previous=a,u();else{d=null;var g=c;do{if(g.expirationTime>b){d=g;break}g=g.next}while(g!==c);null===d?d=c:d===c&&(c=a,u());b=d.previous;b.next=d.previous=a;a.next=d;a.previous=b}return a},unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=\n3}var d=f,c=k;f=a;k=l();try{return b()}finally{f=d,k=c,F()}},unstable_next:function(a){switch(f){case 1:case 2:case 3:var b=3;break;default:b=f}var d=f,c=k;f=b;k=l();try{return a()}finally{f=d,k=c,F()}},unstable_wrapCallback:function(a){var b=f;return function(){var d=f,c=k;f=b;k=l();try{return a.apply(this,arguments)}finally{f=d,k=c,F()}}},unstable_getFirstCallbackNode:function(){return c},unstable_pauseExecution:function(){},unstable_continueExecution:function(){null!==c&&u()},unstable_getCurrentPriorityLevel:function(){return f},\nunstable_IdlePriority:5,unstable_ImmediatePriority:1,unstable_LowPriority:4,unstable_NormalPriority:3,unstable_UserBlockingPriority:2},SchedulerTracing:{__interactionsRef:null,__subscriberRef:null,unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return++Oa},unstable_subscribe:function(a){},unstable_trace:function(a,b,d){return d()},unstable_unsubscribe:function(a){},unstable_wrap:function(a){return a}}});var fa=Object.prototype.hasOwnProperty,\nha={key:!0,ref:!0,__self:!0,__source:!0},la=/\\/+/g,I=[];r={Children:{map:function(a,b,d){if(null==a)return a;var c=[];W(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=ia(null,null,b,d);V(a,xa,b);ja(b)},count:function(a){return V(a,function(){return null},null)},toArray:function(a){var b=[];W(a,b,null,function(a){return a});return b},only:function(a){S(a)?void 0:q(\"143\");return a}},createRef:function(){return{current:null}},Component:t,PureComponent:O,createContext:function(a,\nb){void 0===b&&(b=null);a={$$typeof:Ba,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Aa,_context:a};return a.Consumer=a},forwardRef:function(a){return{$$typeof:Da,render:a}},lazy:function(a){return{$$typeof:Ga,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return{$$typeof:Fa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return m().useCallback(a,b)},useContext:function(a,b){return m().useContext(a,b)},\nuseEffect:function(a,b){return m().useEffect(a,b)},useImperativeHandle:function(a,b,d){return m().useImperativeHandle(a,b,d)},useDebugValue:function(a,b){},useLayoutEffect:function(a,b){return m().useLayoutEffect(a,b)},useMemo:function(a,b){return m().useMemo(a,b)},useReducer:function(a,b,d){return m().useReducer(a,b,d)},useRef:function(a){return m().useRef(a)},useState:function(a){return m().useState(a)},Fragment:r,StrictMode:X,Suspense:Ea,createElement:ea,cloneElement:function(a,b,d){null===a||\nvoid 0===a?q(\"267\",a):void 0;var c=void 0,e=J({},a.props),f=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=R.current);void 0!==b.key&&(f=\"\"+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)fa.call(b,c)&&!ha.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c])}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l}return{$$typeof:y,type:a.type,key:f,ref:k,props:e,_owner:h}},\ncreateFactory:function(a){var b=ea.bind(null,a);b.type=a;return b},isValidElement:S,version:\"16.8.6\",unstable_ConcurrentMode:Ca,unstable_Profiler:za,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:e};r=(X={default:r},r)||X;return r.default||r});\n"}
  </script>
  <script>
    // react-dom/umd/react-dom.production.min.js
    ${"/** @license React v16.8.6\n * react-dom.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n/*\n Modernizr 3.0.0pre (Custom Build) | MIT\n*/\n'use strict';(function(da,pb){\"object\"===typeof exports&&\"undefined\"!==typeof module?module.exports=pb(require(\"react\")):\"function\"===typeof define&&define.amd?define([\"react\"],pb):da.ReactDOM=pb(da.React)})(this,function(da){function pb(a,b,c,d,e,f,g,h){if(!a){a=void 0;if(void 0===b)a=Error(\"Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.\");else{var l=[c,d,e,f,g,h],k=0;a=Error(b.replace(/%s/g,function(){return l[k++]}));\na.name=\"Invariant Violation\"}a.framesToPop=1;throw a;}}function n(a){for(var b=arguments.length-1,c=\"https://reactjs.org/docs/error-decoder.html?invariant=\"+a,d=0;d<b;d++)c+=\"&args[]=\"+encodeURIComponent(arguments[d+1]);pb(!1,\"Minified React error #\"+a+\"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. \",c)}function rh(a,b,c,d,e,f,g,h,l){qb=!1;$b=null;sh.apply(th,arguments)}function uh(a,b,c,d,e,f,g,h,l){rh.apply(this,arguments);\nif(qb){if(qb){var k=$b;qb=!1;$b=null}else n(\"198\"),k=void 0;ac||(ac=!0,Yc=k)}}function Ee(){if(bc)for(var a in Na){var b=Na[a],c=bc.indexOf(a);-1<c?void 0:n(\"96\",a);if(!cc[c]){b.extractEvents?void 0:n(\"97\",a);cc[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;Zc.hasOwnProperty(h)?n(\"99\",h):void 0;Zc[h]=f;var l=f.phasedRegistrationNames;if(l){for(e in l)l.hasOwnProperty(e)&&Fe(l[e],g,h);e=!0}else f.registrationName?(Fe(f.registrationName,g,h),e=!0):e=!1;e?void 0:n(\"98\",d,a)}}}}\nfunction Fe(a,b,c){Oa[a]?n(\"100\",a):void 0;Oa[a]=b;$c[a]=b.eventTypes[c].dependencies}function Ge(a,b,c){var d=a.type||\"unknown-event\";a.currentTarget=He(c);uh(d,b,void 0,a);a.currentTarget=null}function Pa(a,b){null==b?n(\"30\"):void 0;if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function ad(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a)}function Ie(a,b){var c=a.stateNode;if(!c)return null;\nvar d=bd(c);if(!d)return null;c=d[b];a:switch(b){case \"onClick\":case \"onClickCapture\":case \"onDoubleClick\":case \"onDoubleClickCapture\":case \"onMouseDown\":case \"onMouseDownCapture\":case \"onMouseMove\":case \"onMouseMoveCapture\":case \"onMouseUp\":case \"onMouseUpCapture\":(d=!d.disabled)||(a=a.type,d=!(\"button\"===a||\"input\"===a||\"select\"===a||\"textarea\"===a));a=!d;break a;default:a=!1}if(a)return null;c&&\"function\"!==typeof c?n(\"231\",b,typeof c):void 0;return c}function cd(a){null!==a&&(rb=Pa(rb,a));a=rb;\nrb=null;if(a&&(ad(a,vh),rb?n(\"95\"):void 0,ac))throw a=Yc,ac=!1,Yc=null,a;}function dc(a){if(a[ea])return a[ea];for(;!a[ea];)if(a.parentNode)a=a.parentNode;else return null;a=a[ea];return 5===a.tag||6===a.tag?a:null}function Je(a){a=a[ea];return!a||5!==a.tag&&6!==a.tag?null:a}function Da(a){if(5===a.tag||6===a.tag)return a.stateNode;n(\"33\")}function dd(a){return a[ec]||null}function fa(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function Ke(a,b,c){if(b=Ie(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=\nPa(c._dispatchListeners,b),c._dispatchInstances=Pa(c._dispatchInstances,a)}function wh(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=fa(b);for(b=c.length;0<b--;)Ke(c[b],\"captured\",a);for(b=0;b<c.length;b++)Ke(c[b],\"bubbled\",a)}}function ed(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=Ie(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=Pa(c._dispatchListeners,b),c._dispatchInstances=Pa(c._dispatchInstances,a))}function xh(a){a&&a.dispatchConfig.registrationName&&\ned(a._targetInst,null,a)}function Qa(a){ad(a,wh)}function fc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c[\"Webkit\"+a]=\"webkit\"+b;c[\"Moz\"+a]=\"moz\"+b;return c}function gc(a){if(fd[a])return fd[a];if(!Ra[a])return a;var b=Ra[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Le)return fd[a]=b[c];return a}function Me(){if(hc)return hc;var a,b=gd,c=b.length,d,e=\"value\"in qa?qa.value:qa.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return hc=e.slice(a,\n1<d?1-d:void 0)}function ic(){return!0}function jc(){return!1}function J(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):\"target\"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?ic:jc;this.isPropagationStopped=jc;return this}function yh(a,b,c,d){if(this.eventPool.length){var e=this.eventPool.pop();this.call(e,a,b,c,d);\nreturn e}return new this(a,b,c,d)}function zh(a){a instanceof this?void 0:n(\"279\");a.destructor();10>this.eventPool.length&&this.eventPool.push(a)}function Ne(a){a.eventPool=[];a.getPooled=yh;a.release=zh}function Oe(a,b){switch(a){case \"keyup\":return-1!==Ah.indexOf(b.keyCode);case \"keydown\":return 229!==b.keyCode;case \"keypress\":case \"mousedown\":case \"blur\":return!0;default:return!1}}function Pe(a){a=a.detail;return\"object\"===typeof a&&\"data\"in a?a.data:null}function Bh(a,b){switch(a){case \"compositionend\":return Pe(b);\ncase \"keypress\":if(32!==b.which)return null;Qe=!0;return Re;case \"textInput\":return a=b.data,a===Re&&Qe?null:a;default:return null}}function Ch(a,b){if(Sa)return\"compositionend\"===a||!hd&&Oe(a,b)?(a=Me(),hc=gd=qa=null,Sa=!1,a):null;switch(a){case \"paste\":return null;case \"keypress\":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case \"compositionend\":return Se&&\"ko\"!==b.locale?null:b.data;\ndefault:return null}}function Te(a){if(a=Ue(a)){\"function\"!==typeof id?n(\"280\"):void 0;var b=bd(a.stateNode);id(a.stateNode,a.type,b)}}function Ve(a){Ta?Ua?Ua.push(a):Ua=[a]:Ta=a}function We(){if(Ta){var a=Ta,b=Ua;Ua=Ta=null;Te(a);if(b)for(a=0;a<b.length;a++)Te(b[a])}}function Xe(a,b){if(jd)return a(b);jd=!0;try{return Ye(a,b)}finally{if(jd=!1,null!==Ta||null!==Ua)Ze(),We()}}function $e(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return\"input\"===b?!!Dh[a.type]:\"textarea\"===b?!0:!1}function kd(a){a=\na.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}function af(a){if(!ra)return!1;a=\"on\"+a;var b=a in document;b||(b=document.createElement(\"div\"),b.setAttribute(a,\"return;\"),b=\"function\"===typeof b[a]);return b}function bf(a){var b=a.type;return(a=a.nodeName)&&\"input\"===a.toLowerCase()&&(\"checkbox\"===b||\"radio\"===b)}function Eh(a){var b=bf(a)?\"checked\":\"value\",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=\n\"\"+a[b];if(!a.hasOwnProperty(b)&&\"undefined\"!==typeof c&&\"function\"===typeof c.get&&\"function\"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=\"\"+a;f.call(this,a)}});Object.defineProperty(a,b,{enumerable:c.enumerable});return{getValue:function(){return d},setValue:function(a){d=\"\"+a},stopTracking:function(){a._valueTracker=null;delete a[b]}}}}function kc(a){a._valueTracker||(a._valueTracker=Eh(a))}function cf(a){if(!a)return!1;\nvar b=a._valueTracker;if(!b)return!0;var c=b.getValue();var d=\"\";a&&(d=bf(a)?a.checked?\"true\":\"false\":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function sb(a){if(null===a||\"object\"!==typeof a)return null;a=df&&a[df]||a[\"@@iterator\"];return\"function\"===typeof a?a:null}function sa(a){if(null==a)return null;if(\"function\"===typeof a)return a.displayName||a.name||null;if(\"string\"===typeof a)return a;switch(a){case ld:return\"ConcurrentMode\";case ta:return\"Fragment\";case Va:return\"Portal\";case lc:return\"Profiler\";\ncase md:return\"StrictMode\";case nd:return\"Suspense\"}if(\"object\"===typeof a)switch(a.$$typeof){case ef:return\"Context.Consumer\";case ff:return\"Context.Provider\";case od:var b=a.render;b=b.displayName||b.name||\"\";return a.displayName||(\"\"!==b?\"ForwardRef(\"+b+\")\":\"ForwardRef\");case pd:return sa(a.type);case gf:if(a=1===a._status?a._result:null)return sa(a)}return null}function qd(a){var b=\"\";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c=\"\";break a;default:var d=a._debugOwner,e=\na._debugSource,f=sa(a.type);c=null;d&&(c=sa(d.type));d=f;f=\"\";e?f=\" (at \"+e.fileName.replace(Fh,\"\")+\":\"+e.lineNumber+\")\":c&&(f=\" (created by \"+c+\")\");c=\"\\n    in \"+(d||\"Unknown\")+f}b+=c;a=a.return}while(a);return b}function Gh(a){if(hf.call(jf,a))return!0;if(hf.call(kf,a))return!1;if(Hh.test(a))return jf[a]=!0;kf[a]=!0;return!1}function Ih(a,b,c,d){if(null!==c&&0===c.type)return!1;switch(typeof b){case \"function\":case \"symbol\":return!0;case \"boolean\":if(d)return!1;if(null!==c)return!c.acceptsBooleans;\na=a.toLowerCase().slice(0,5);return\"data-\"!==a&&\"aria-\"!==a;default:return!1}}function Jh(a,b,c,d){if(null===b||\"undefined\"===typeof b||Ih(a,b,c,d))return!0;if(d)return!1;if(null!==c)switch(c.type){case 3:return!b;case 4:return!1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return!1}function K(a,b,c,d,e){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b}function rd(a,b,c,d){var e=A.hasOwnProperty(b)?\nA[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||\"o\"!==b[0]&&\"O\"!==b[0]||\"n\"!==b[1]&&\"N\"!==b[1]?!1:!0;f||(Jh(b,c,e,d)&&(c=null),d||null===e?Gh(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,\"\"+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:\"\":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?\"\":\"\"+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))))}function ua(a){switch(typeof a){case \"boolean\":case \"number\":case \"object\":case \"string\":case \"undefined\":return a;\ndefault:return\"\"}}function sd(a,b){var c=b.checked;return B({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function lf(a,b){var c=null==b.defaultValue?\"\":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=ua(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:\"checkbox\"===b.type||\"radio\"===b.type?null!=b.checked:null!=b.value}}function mf(a,b){b=b.checked;null!=b&&rd(a,\"checked\",b,!1)}function td(a,\nb){mf(a,b);var c=ua(b.value),d=b.type;if(null!=c)if(\"number\"===d){if(0===c&&\"\"===a.value||a.value!=c)a.value=\"\"+c}else a.value!==\"\"+c&&(a.value=\"\"+c);else if(\"submit\"===d||\"reset\"===d){a.removeAttribute(\"value\");return}b.hasOwnProperty(\"value\")?ud(a,b.type,c):b.hasOwnProperty(\"defaultValue\")&&ud(a,b.type,ua(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked)}function nf(a,b,c){if(b.hasOwnProperty(\"value\")||b.hasOwnProperty(\"defaultValue\")){var d=b.type;\nif(!(\"submit\"!==d&&\"reset\"!==d||void 0!==b.value&&null!==b.value))return;b=\"\"+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b}c=a.name;\"\"!==c&&(a.name=\"\");a.defaultChecked=!a.defaultChecked;a.defaultChecked=!!a._wrapperState.initialChecked;\"\"!==c&&(a.name=c)}function ud(a,b,c){if(\"number\"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=\"\"+a._wrapperState.initialValue:a.defaultValue!==\"\"+c&&(a.defaultValue=\"\"+c)}function of(a,b,c){a=J.getPooled(pf.change,a,b,\nc);a.type=\"change\";Ve(c);Qa(a);return a}function Kh(a){cd(a)}function mc(a){var b=Da(a);if(cf(b))return a}function Lh(a,b){if(\"change\"===a)return b}function qf(){tb&&(tb.detachEvent(\"onpropertychange\",rf),ub=tb=null)}function rf(a){\"value\"===a.propertyName&&mc(ub)&&(a=of(ub,a,kd(a)),Xe(Kh,a))}function Mh(a,b,c){\"focus\"===a?(qf(),tb=b,ub=c,tb.attachEvent(\"onpropertychange\",rf)):\"blur\"===a&&qf()}function Nh(a,b){if(\"selectionchange\"===a||\"keyup\"===a||\"keydown\"===a)return mc(ub)}function Oh(a,b){if(\"click\"===\na)return mc(b)}function Ph(a,b){if(\"input\"===a||\"change\"===a)return mc(b)}function Qh(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Rh[a])?!!b[a]:!1}function vd(a){return Qh}function Ea(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function vb(a,b){if(Ea(a,b))return!0;if(\"object\"!==typeof a||null===a||\"object\"!==typeof b||null===b)return!1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return!1;for(d=0;d<c.length;d++)if(!Sh.call(b,c[d])||!Ea(a[c[d]],\nb[c[d]]))return!1;return!0}function wb(a){var b=a;if(a.alternate)for(;b.return;)b=b.return;else{if(0!==(b.effectTag&2))return 1;for(;b.return;)if(b=b.return,0!==(b.effectTag&2))return 1}return 3===b.tag?2:3}function sf(a){2!==wb(a)?n(\"188\"):void 0}function Th(a){var b=a.alternate;if(!b)return b=wb(a),3===b?n(\"188\"):void 0,1===b?null:a;for(var c=a,d=b;;){var e=c.return,f=e?e.alternate:null;if(!e||!f)break;if(e.child===f.child){for(var g=e.child;g;){if(g===c)return sf(e),a;if(g===d)return sf(e),b;g=\ng.sibling}n(\"188\")}if(c.return!==d.return)c=e,d=f;else{g=!1;for(var h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling}if(!g){for(h=f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling}g?void 0:n(\"189\")}}c.alternate!==d?n(\"190\"):void 0}3!==c.tag?n(\"188\"):void 0;return c.stateNode.current===c?a:b}function tf(a){a=Th(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else{if(b===a)break;\nfor(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return}b.sibling.return=b.return;b=b.sibling}}return null}function nc(a){var b=a.keyCode;\"charCode\"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function uf(a,b){var c=a[0];a=a[1];var d=\"on\"+(a[0].toUpperCase()+a.slice(1));b={phasedRegistrationNames:{bubbled:d,captured:d+\"Capture\"},dependencies:[c],isInteractive:b};vf[a]=b;wd[c]=b}function Uh(a){var b=a.targetInst,c=b;do{if(!c){a.ancestors.push(c);\nbreak}var d;for(d=c;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;if(!d)break;a.ancestors.push(c);c=dc(d)}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=kd(a.nativeEvent);d=a.topLevelType;for(var f=a.nativeEvent,g=null,h=0;h<cc.length;h++){var l=cc[h];l&&(l=l.extractEvents(d,b,f,e))&&(g=Pa(g,l))}cd(g)}}function r(a,b){if(!b)return null;var c=(wf(a)?xf:oc).bind(null,a);b.addEventListener(a,c,!1)}function pc(a,b){if(!b)return null;var c=(wf(a)?xf:oc).bind(null,a);\nb.addEventListener(a,c,!0)}function xf(a,b){yf(oc,a,b)}function oc(a,b){if(qc){var c=kd(b);c=dc(c);null===c||\"number\"!==typeof c.tag||2===wb(c)||(c=null);if(rc.length){var d=rc.pop();d.topLevelType=a;d.nativeEvent=b;d.targetInst=c;a=d}else a={topLevelType:a,nativeEvent:b,targetInst:c,ancestors:[]};try{Xe(Uh,a)}finally{a.topLevelType=null,a.nativeEvent=null,a.targetInst=null,a.ancestors.length=0,10>rc.length&&rc.push(a)}}}function zf(a){Object.prototype.hasOwnProperty.call(a,sc)||(a[sc]=Vh++,Af[a[sc]]=\n{});return Af[a[sc]]}function xd(a){a=a||(\"undefined\"!==typeof document?document:void 0);if(\"undefined\"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function Bf(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function Cf(a,b){var c=Bf(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return{node:c,offset:b-a};a=d}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode}c=void 0}c=Bf(c)}}function Df(a,b){return a&&b?a===\nb?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Df(a,b.parentNode):\"contains\"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function Ef(){for(var a=window,b=xd();b instanceof a.HTMLIFrameElement;){try{var c=\"string\"===typeof b.contentWindow.location.href}catch(d){c=!1}if(c)a=b.contentWindow;else break;b=xd(a.document)}return b}function yd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&(\"input\"===b&&(\"text\"===a.type||\"search\"===a.type||\"tel\"===a.type||\n\"url\"===a.type||\"password\"===a.type)||\"textarea\"===b||\"true\"===a.contentEditable)}function Wh(){var a=Ef();if(yd(a)){if(\"selectionStart\"in a)var b={start:a.selectionStart,end:a.selectionEnd};else a:{b=(b=a.ownerDocument)&&b.defaultView||window;var c=b.getSelection&&b.getSelection();if(c&&0!==c.rangeCount){b=c.anchorNode;var d=c.anchorOffset,e=c.focusNode;c=c.focusOffset;try{b.nodeType,e.nodeType}catch(cj){b=null;break a}var f=0,g=-1,h=-1,l=0,k=0,m=a,n=null;b:for(;;){for(var p;;){m!==b||0!==d&&3!==\nm.nodeType||(g=f+d);m!==e||0!==c&&3!==m.nodeType||(h=f+c);3===m.nodeType&&(f+=m.nodeValue.length);if(null===(p=m.firstChild))break;n=m;m=p}for(;;){if(m===a)break b;n===b&&++l===d&&(g=f);n===e&&++k===c&&(h=f);if(null!==(p=m.nextSibling))break;m=n;n=m.parentNode}m=p}b=-1===g||-1===h?null:{start:g,end:h}}else b=null}b=b||{start:0,end:0}}else b=null;return{focusedElem:a,selectionRange:b}}function Xh(a){var b=Ef(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Df(c.ownerDocument.documentElement,\nc)){if(null!==d&&yd(c))if(b=d.start,a=d.end,void 0===a&&(a=b),\"selectionStart\"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Cf(c,f);var g=Cf(c,d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&\n(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)))}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});\"function\"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}function Gf(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(zd||null==Wa||Wa!==xd(c))return null;c=\nWa;\"selectionStart\"in c&&yd(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return xb&&vb(xb,c)?null:(xb=c,a=J.getPooled(Hf.select,Ad,a,b),a.type=\"select\",a.target=Wa,Qa(a),a)}function Yh(a){var b=\"\";da.Children.forEach(a,function(a){null!=a&&(b+=a)});return b}function Bd(a,b){a=B({children:void 0},b);if(b=Yh(b.children))a.children=\nb;return a}function Xa(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b[\"$\"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty(\"$\"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0)}else{c=\"\"+ua(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e])}null!==b&&(b.selected=!0)}}function Cd(a,b){null!=b.dangerouslySetInnerHTML?n(\"91\"):void 0;return B({},b,{value:void 0,defaultValue:void 0,\nchildren:\"\"+a._wrapperState.initialValue})}function If(a,b){var c=b.value;null==c&&(c=b.defaultValue,b=b.children,null!=b&&(null!=c?n(\"92\"):void 0,Array.isArray(b)&&(1>=b.length?void 0:n(\"93\"),b=b[0]),c=b),null==c&&(c=\"\"));a._wrapperState={initialValue:ua(c)}}function Jf(a,b){var c=ua(b.value),d=ua(b.defaultValue);null!=c&&(c=\"\"+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=\"\"+d)}function Kf(a){switch(a){case \"svg\":return\"http://www.w3.org/2000/svg\";\ncase \"math\":return\"http://www.w3.org/1998/Math/MathML\";default:return\"http://www.w3.org/1999/xhtml\"}}function Dd(a,b){return null==a||\"http://www.w3.org/1999/xhtml\"===a?Kf(b):\"http://www.w3.org/2000/svg\"===a&&\"foreignObject\"===b?\"http://www.w3.org/1999/xhtml\":a}function Lf(a,b,c){return null==b||\"boolean\"===typeof b||\"\"===b?\"\":c||\"number\"!==typeof b||0===b||yb.hasOwnProperty(a)&&yb[a]?(\"\"+b).trim():b+\"px\"}function Mf(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf(\"--\"),\ne=Lf(c,b[c],d);\"float\"===c&&(c=\"cssFloat\");d?a.setProperty(c,e):a[c]=e}}function Ed(a,b){b&&(Zh[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML?n(\"137\",a,\"\"):void 0),null!=b.dangerouslySetInnerHTML&&(null!=b.children?n(\"60\"):void 0,\"object\"===typeof b.dangerouslySetInnerHTML&&\"__html\"in b.dangerouslySetInnerHTML?void 0:n(\"61\")),null!=b.style&&\"object\"!==typeof b.style?n(\"62\",\"\"):void 0)}function Fd(a,b){if(-1===a.indexOf(\"-\"))return\"string\"===typeof b.is;switch(a){case \"annotation-xml\":case \"color-profile\":case \"font-face\":case \"font-face-src\":case \"font-face-uri\":case \"font-face-format\":case \"font-face-name\":case \"missing-glyph\":return!1;\ndefault:return!0}}function ha(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=zf(a);b=$c[b];for(var d=0;d<b.length;d++){var e=b[d];if(!c.hasOwnProperty(e)||!c[e]){switch(e){case \"scroll\":pc(\"scroll\",a);break;case \"focus\":case \"blur\":pc(\"focus\",a);pc(\"blur\",a);c.blur=!0;c.focus=!0;break;case \"cancel\":case \"close\":af(e)&&pc(e,a);break;case \"invalid\":case \"submit\":case \"reset\":break;default:-1===zb.indexOf(e)&&r(e,a)}c[e]=!0}}}function tc(){}function Nf(a,b){switch(a){case \"button\":case \"input\":case \"select\":case \"textarea\":return!!b.autoFocus}return!1}\nfunction Gd(a,b){return\"textarea\"===a||\"option\"===a||\"noscript\"===a||\"string\"===typeof b.children||\"number\"===typeof b.children||\"object\"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function $h(a,b,c,d,e,f){a[ec]=e;\"input\"===c&&\"radio\"===e.type&&null!=e.name&&mf(a,e);Fd(c,d);d=Fd(c,e);for(f=0;f<b.length;f+=2){var g=b[f],h=b[f+1];\"style\"===g?Mf(a,h):\"dangerouslySetInnerHTML\"===g?Of(a,h):\"children\"===g?Ab(a,h):rd(a,g,h,d)}switch(c){case \"input\":td(a,\ne);break;case \"textarea\":Jf(a,e);break;case \"select\":b=a._wrapperState.wasMultiple,a._wrapperState.wasMultiple=!!e.multiple,c=e.value,null!=c?Xa(a,!!e.multiple,c,!1):b!==!!e.multiple&&(null!=e.defaultValue?Xa(a,!!e.multiple,e.defaultValue,!0):Xa(a,!!e.multiple,e.multiple?[]:\"\",!1))}}function Hd(a){for(a=a.nextSibling;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function Pf(a){for(a=a.firstChild;a&&1!==a.nodeType&&3!==a.nodeType;)a=a.nextSibling;return a}function D(a,b){0>Ya||(a.current=\nId[Ya],Id[Ya]=null,Ya--)}function L(a,b,c){Ya++;Id[Ya]=a.current;a.current=b}function Za(a,b){var c=a.type.contextTypes;if(!c)return va;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function E(a){a=a.childContextTypes;return null!==a&&void 0!==a}function uc(a){D(M,a);\nD(F,a)}function Jd(a){D(M,a);D(F,a)}function Qf(a,b,c){F.current!==va?n(\"168\"):void 0;L(F,b,a);L(M,c,a)}function Rf(a,b,c){var d=a.stateNode;a=b.childContextTypes;if(\"function\"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)e in a?void 0:n(\"108\",sa(b)||\"Unknown\",e);return B({},c,d)}function vc(a){var b=a.stateNode;b=b&&b.__reactInternalMemoizedMergedChildContext||va;Fa=F.current;L(F,b,a);L(M,M.current,a);return!0}function Sf(a,b,c){var d=a.stateNode;d?void 0:n(\"169\");c?(b=\nRf(a,b,Fa),d.__reactInternalMemoizedMergedChildContext=b,D(M,a),D(F,a),L(F,b,a)):D(M,a);L(M,c,a)}function Tf(a){return function(b){try{return a(b)}catch(c){}}}function ai(a){if(\"undefined\"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return!1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return!0;try{var c=b.inject(a);Kd=Tf(function(a){return b.onCommitFiberRoot(c,a)});Ld=Tf(function(a){return b.onCommitFiberUnmount(c,a)})}catch(d){}return!0}function bi(a,b,c,d){this.tag=a;this.key=\nc;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.contextDependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=null;this.childExpirationTime=this.expirationTime=0;this.alternate=null}function Md(a){a=a.prototype;return!(!a||!a.isReactComponent)}function ci(a){if(\"function\"===typeof a)return Md(a)?1:0;if(void 0!==a&&\nnull!==a){a=a.$$typeof;if(a===od)return 11;if(a===pd)return 14}return 2}function Ga(a,b,c){c=a.alternate;null===c?(c=S(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;\nc.contextDependencies=a.contextDependencies;c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function wc(a,b,c,d,e,f){var g=2;d=a;if(\"function\"===typeof a)Md(a)&&(g=1);else if(\"string\"===typeof a)g=5;else a:switch(a){case ta:return wa(c.children,e,f,b);case ld:return Uf(c,e|3,f,b);case md:return Uf(c,e|2,f,b);case lc:return a=S(12,c,b,e|4),a.elementType=lc,a.type=lc,a.expirationTime=f,a;case nd:return a=S(13,c,b,e),b=nd,a.elementType=b,a.type=b,a.expirationTime=f,a;default:if(\"object\"===typeof a&&\nnull!==a)switch(a.$$typeof){case ff:g=10;break a;case ef:g=9;break a;case od:g=11;break a;case pd:g=14;break a;case gf:g=16;d=null;break a}n(\"130\",null==a?a:typeof a,\"\")}b=S(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function wa(a,b,c,d){a=S(7,a,d,b);a.expirationTime=c;return a}function Uf(a,b,c,d){a=S(8,a,d,b);b=0===(b&1)?md:ld;a.elementType=b;a.type=b;a.expirationTime=c;return a}function Nd(a,b,c){a=S(6,a,null,b);a.expirationTime=c;return a}function Od(a,b,c){b=S(4,null!==a.children?\na.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Bb(a,b){a.didError=!1;var c=a.earliestPendingTime;0===c?a.earliestPendingTime=a.latestPendingTime=b:c<b?a.earliestPendingTime=b:a.latestPendingTime>b&&(a.latestPendingTime=b);xc(b,a)}function di(a,b){a.didError=!1;if(0===b)a.earliestPendingTime=0,a.latestPendingTime=0,a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0;else{b<\na.latestPingedTime&&(a.latestPingedTime=0);var c=a.latestPendingTime;0!==c&&(c>b?a.earliestPendingTime=a.latestPendingTime=0:a.earliestPendingTime>b&&(a.earliestPendingTime=a.latestPendingTime));c=a.earliestSuspendedTime;0===c?Bb(a,b):b<a.latestSuspendedTime?(a.earliestSuspendedTime=0,a.latestSuspendedTime=0,a.latestPingedTime=0,Bb(a,b)):b>c&&Bb(a,b)}xc(0,a)}function Vf(a,b){a.didError=!1;a.latestPingedTime>=b&&(a.latestPingedTime=0);var c=a.earliestPendingTime,d=a.latestPendingTime;c===b?a.earliestPendingTime=\nd===b?a.latestPendingTime=0:d:d===b&&(a.latestPendingTime=c);c=a.earliestSuspendedTime;d=a.latestSuspendedTime;0===c?a.earliestSuspendedTime=a.latestSuspendedTime=b:c<b?a.earliestSuspendedTime=b:d>b&&(a.latestSuspendedTime=b);xc(b,a)}function Wf(a,b){var c=a.earliestPendingTime;a=a.earliestSuspendedTime;c>b&&(b=c);a>b&&(b=a);return b}function xc(a,b){var c=b.earliestSuspendedTime,d=b.latestSuspendedTime,e=b.earliestPendingTime,f=b.latestPingedTime;e=0!==e?e:f;0===e&&(0===a||d<a)&&(e=d);a=e;0!==a&&\nc>a&&(a=c);b.nextExpirationTimeToWorkOn=e;b.expirationTime=a}function P(a,b){if(a&&a.defaultProps){b=B({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c])}return b}function ei(a){var b=a._result;switch(a._status){case 1:return b;case 2:throw b;case 0:throw b;default:a._status=0;b=a._ctor;b=b();b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b)},function(b){0===a._status&&(a._status=2,a._result=b)});switch(a._status){case 1:return a._result;case 2:throw a._result;\n}a._result=b;throw b;}}function yc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:B({},b,c);a.memoizedState=c;d=a.updateQueue;null!==d&&0===a.expirationTime&&(d.baseState=c)}function Xf(a,b,c,d,e,f,g){a=a.stateNode;return\"function\"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!vb(c,d)||!vb(e,f):!0}function Yf(a,b,c,d){var e=!1;d=va;var f=b.contextType;\"object\"===typeof f&&null!==f?f=T(f):(d=E(b)?Fa:F.current,e=b.contextTypes,\nf=(e=null!==e&&void 0!==e)?Za(a,d):va);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=zc;a.stateNode=b;b._reactInternalFiber=a;e&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=d,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Zf(a,b,c,d){a=b.state;\"function\"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);\"function\"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==\na&&zc.enqueueReplaceState(b,b.state,null)}function Pd(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=$f;var f=b.contextType;\"object\"===typeof f&&null!==f?e.context=T(f):(f=E(b)?Fa:F.current,e.context=Za(a,f));f=a.updateQueue;null!==f&&(Cb(a,f,c,e,d),e.state=a.memoizedState);f=b.getDerivedStateFromProps;\"function\"===typeof f&&(yc(a,b,f,c),e.state=a.memoizedState);\"function\"===typeof b.getDerivedStateFromProps||\"function\"===typeof e.getSnapshotBeforeUpdate||\"function\"!==typeof e.UNSAFE_componentWillMount&&\n\"function\"!==typeof e.componentWillMount||(b=e.state,\"function\"===typeof e.componentWillMount&&e.componentWillMount(),\"function\"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&zc.enqueueReplaceState(e,e.state,null),f=a.updateQueue,null!==f&&(Cb(a,f,c,e,d),e.state=a.memoizedState));\"function\"===typeof e.componentDidMount&&(a.effectTag|=4)}function Db(a,b,c){a=c.ref;if(null!==a&&\"function\"!==typeof a&&\"object\"!==typeof a){if(c._owner){c=c._owner;var d=void 0;c&&(1!==\nc.tag?n(\"309\"):void 0,d=c.stateNode);d?void 0:n(\"147\",a);var e=\"\"+a;if(null!==b&&null!==b.ref&&\"function\"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===$f&&(b=d.refs={});null===a?delete b[e]:b[e]=a};b._stringRef=e;return b}\"string\"!==typeof a?n(\"284\"):void 0;c._owner?void 0:n(\"290\",a)}return a}function Ac(a,b){\"textarea\"!==a.type&&n(\"31\",\"[object Object]\"===Object.prototype.toString.call(b)?\"object with keys {\"+Object.keys(b).join(\", \")+\"}\":b,\"\")}function ag(a){function b(b,\nc){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b,c){a=Ga(a,b,c);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=\n2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Nd(c,a.mode,d),b.return=a,b;b=e(b,c,d);b.return=a;return b}function l(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props,d),d.ref=Db(a,b,c),d.return=a,d;d=wc(c.type,c.key,c.props,null,a.mode,d);d.ref=Db(a,b,c);d.return=a;return d}function k(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=\nOd(c,a.mode,d),b.return=a,b;b=e(b,c.children||[],d);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=wa(c,a.mode,d,f),b.return=a,b;b=e(b,c,d);b.return=a;return b}function Ff(a,b,c){if(\"string\"===typeof b||\"number\"===typeof b)return b=Nd(\"\"+b,a.mode,c),b.return=a,b;if(\"object\"===typeof b&&null!==b){switch(b.$$typeof){case Bc:return c=wc(b.type,b.key,b.props,null,a.mode,c),c.ref=Db(a,null,b),c.return=a,c;case Va:return b=Od(b,a.mode,c),b.return=a,b}if(Cc(b)||sb(b))return b=\nwa(b,a.mode,c,null),b.return=a,b;Ac(a,b)}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if(\"string\"===typeof c||\"number\"===typeof c)return null!==e?null:h(a,b,\"\"+c,d);if(\"object\"===typeof c&&null!==c){switch(c.$$typeof){case Bc:return c.key===e?c.type===ta?m(a,b,c.props.children,d,e):l(a,b,c,d):null;case Va:return c.key===e?k(a,b,c,d):null}if(Cc(c)||sb(c))return null!==e?null:m(a,b,c,d,null);Ac(a,c)}return null}function r(a,b,c,d,e){if(\"string\"===typeof d||\"number\"===typeof d)return a=\na.get(c)||null,h(b,a,\"\"+d,e);if(\"object\"===typeof d&&null!==d){switch(d.$$typeof){case Bc:return a=a.get(null===d.key?c:d.key)||null,d.type===ta?m(b,a,d.props.children,e,d.key):l(b,a,d,e);case Va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e)}if(Cc(d)||sb(d))return a=a.get(c)||null,m(b,a,d,e,null);Ac(b,d)}return null}function u(e,g,h,k){for(var l=null,m=null,n=g,q=g=0,v=null;null!==n&&q<h.length;q++){n.index>q?(v=n,n=null):v=n.sibling;var Q=p(e,n,h[q],k);if(null===Q){null===n&&(n=v);break}a&&\nn&&null===Q.alternate&&b(e,n);g=f(Q,g,q);null===m?l=Q:m.sibling=Q;m=Q;n=v}if(q===h.length)return c(e,n),l;if(null===n){for(;q<h.length;q++)if(n=Ff(e,h[q],k))g=f(n,g,q),null===m?l=n:m.sibling=n,m=n;return l}for(n=d(e,n);q<h.length;q++)if(v=r(n,e,q,h[q],k))a&&null!==v.alternate&&n.delete(null===v.key?q:v.key),g=f(v,g,q),null===m?l=v:m.sibling=v,m=v;a&&n.forEach(function(a){return b(e,a)});return l}function x(e,g,h,k){var l=sb(h);\"function\"!==typeof l?n(\"150\"):void 0;h=l.call(h);null==h?n(\"151\"):void 0;\nfor(var m=l=null,q=g,v=g=0,Q=null,t=h.next();null!==q&&!t.done;v++,t=h.next()){q.index>v?(Q=q,q=null):Q=q.sibling;var u=p(e,q,t.value,k);if(null===u){q||(q=Q);break}a&&q&&null===u.alternate&&b(e,q);g=f(u,g,v);null===m?l=u:m.sibling=u;m=u;q=Q}if(t.done)return c(e,q),l;if(null===q){for(;!t.done;v++,t=h.next())t=Ff(e,t.value,k),null!==t&&(g=f(t,g,v),null===m?l=t:m.sibling=t,m=t);return l}for(q=d(e,q);!t.done;v++,t=h.next())t=r(q,e,v,t.value,k),null!==t&&(a&&null!==t.alternate&&q.delete(null===t.key?\nv:t.key),g=f(t,g,v),null===m?l=t:m.sibling=t,m=t);a&&q.forEach(function(a){return b(e,a)});return l}return function(a,d,f,h){var k=\"object\"===typeof f&&null!==f&&f.type===ta&&null===f.key;k&&(f=f.props.children);var l=\"object\"===typeof f&&null!==f;if(l)switch(f.$$typeof){case Bc:a:{l=f.key;for(k=d;null!==k;){if(k.key===l)if(7===k.tag?f.type===ta:k.elementType===f.type){c(a,k.sibling);d=e(k,f.type===ta?f.props.children:f.props,h);d.ref=Db(a,k,f);d.return=a;a=d;break a}else{c(a,k);break}else b(a,k);\nk=k.sibling}f.type===ta?(d=wa(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=wc(f.type,f.key,f.props,null,a.mode,h),h.ref=Db(a,d,f),h.return=a,a=h)}return g(a);case Va:a:{for(k=f.key;null!==d;){if(d.key===k)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[],h);d.return=a;a=d;break a}else{c(a,d);break}else b(a,d);d=d.sibling}d=Od(f,a.mode,h);d.return=a;a=d}return g(a)}if(\"string\"===typeof f||\"number\"===\ntypeof f)return f=\"\"+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f,h),d.return=a,a=d):(c(a,d),d=Nd(f,a.mode,h),d.return=a,a=d),g(a);if(Cc(f))return u(a,d,f,h);if(sb(f))return x(a,d,f,h);l&&Ac(a,f);if(\"undefined\"===typeof f&&!k)switch(a.tag){case 1:case 0:h=a.type,n(\"152\",h.displayName||h.name||\"Component\")}return c(a,d)}}function Ha(a){a===Eb?n(\"174\"):void 0;return a}function Qd(a,b){L(Fb,b,a);L(Gb,a,a);L(U,Eb,a);var c=b.nodeType;switch(c){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Dd(null,\n\"\");break;default:c=8===c?b.parentNode:b,b=c.namespaceURI||null,c=c.tagName,b=Dd(b,c)}D(U,a);L(U,b,a)}function $a(a){D(U,a);D(Gb,a);D(Fb,a)}function bg(a){Ha(Fb.current);var b=Ha(U.current);var c=Dd(b,a.type);b!==c&&(L(Gb,a,a),L(U,c,a))}function Rd(a){Gb.current===a&&(D(U,a),D(Gb,a))}function V(){n(\"321\")}function Sd(a,b){if(null===b)return!1;for(var c=0;c<b.length&&c<a.length;c++)if(!Ea(a[c],b[c]))return!1;return!0}function Td(a,b,c,d,e,f){Hb=f;xa=b;W=null!==a?a.memoizedState:null;Dc.current=null===\nW?fi:cg;b=c(d,e);if(Ib){do Ib=!1,Jb+=1,W=null!==a?a.memoizedState:null,ab=bb,X=G=y=null,Dc.current=cg,b=c(d,e);while(Ib);ia=null;Jb=0}Dc.current=Ud;a=xa;a.memoizedState=bb;a.expirationTime=Kb;a.updateQueue=X;a.effectTag|=Lb;a=null!==y&&null!==y.next;Hb=0;ab=G=bb=W=y=xa=null;Kb=0;X=null;Lb=0;a?n(\"300\"):void 0;return b}function Vd(){Dc.current=Ud;Hb=0;ab=G=bb=W=y=xa=null;Kb=0;X=null;Lb=0;Ib=!1;ia=null;Jb=0}function cb(){var a={memoizedState:null,baseState:null,queue:null,baseUpdate:null,next:null};\nnull===G?bb=G=a:G=G.next=a;return G}function Mb(){if(null!==ab)G=ab,ab=G.next,y=W,W=null!==y?y.next:null;else{null===W?n(\"310\"):void 0;y=W;var a={memoizedState:y.memoizedState,baseState:y.baseState,queue:y.queue,baseUpdate:y.baseUpdate,next:null};G=null===G?bb=a:G.next=a;W=y.next}return G}function dg(a,b){return\"function\"===typeof b?b(a):b}function eg(a,b,c){b=Mb();c=b.queue;null===c?n(\"311\"):void 0;c.lastRenderedReducer=a;if(0<Jb){var d=c.dispatch;if(null!==ia){var e=ia.get(c);if(void 0!==e){ia.delete(c);\nvar f=b.memoizedState;do f=a(f,e.action),e=e.next;while(null!==e);Ea(f,b.memoizedState)||(ja=!0);b.memoizedState=f;b.baseUpdate===c.last&&(b.baseState=f);c.lastRenderedState=f;return[f,d]}}return[b.memoizedState,d]}d=c.last;var g=b.baseUpdate;f=b.baseState;null!==g?(null!==d&&(d.next=null),d=g.next):d=null!==d?d.next:null;if(null!==d){var h=e=null,l=d,k=!1;do{var m=l.expirationTime;m<Hb?(k||(k=!0,h=g,e=f),m>Kb&&(Kb=m)):f=l.eagerReducer===a?l.eagerState:a(f,l.action);g=l;l=l.next}while(null!==l&&l!==\nd);k||(h=g,e=f);Ea(f,b.memoizedState)||(ja=!0);b.memoizedState=f;b.baseUpdate=h;b.baseState=e;c.lastRenderedState=f}return[b.memoizedState,c.dispatch]}function Wd(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};null===X?(X={lastEffect:null},X.lastEffect=a.next=a):(b=X.lastEffect,null===b?X.lastEffect=a.next=a:(c=b.next,b.next=a,a.next=c,X.lastEffect=a));return a}function Xd(a,b,c,d){var e=cb();Lb|=a;e.memoizedState=Wd(b,c,void 0,void 0===d?null:d)}function Yd(a,b,c,d){var e=Mb();d=void 0===\nd?null:d;var f=void 0;if(null!==y){var g=y.memoizedState;f=g.destroy;if(null!==d&&Sd(d,g.deps)){Wd(db,c,f,d);return}}Lb|=a;e.memoizedState=Wd(b,c,f,d)}function fg(a,b){if(\"function\"===typeof b)return a=a(),b(a),function(){b(null)};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null}}function gg(a,b){}function hg(a,b,c){25>Jb?void 0:n(\"301\");var d=a.alternate;if(a===xa||null!==d&&d===xa)if(Ib=!0,a={expirationTime:Hb,action:c,eagerReducer:null,eagerState:null,next:null},null===\nia&&(ia=new Map),c=ia.get(b),void 0===c)ia.set(b,a);else{for(b=c;null!==b.next;)b=b.next;b.next=a}else{eb();var e=ka();e=fb(e,a);var f={expirationTime:e,action:c,eagerReducer:null,eagerState:null,next:null},g=b.last;if(null===g)f.next=f;else{var h=g.next;null!==h&&(f.next=h);g.next=f}b.last=f;if(0===a.expirationTime&&(null===d||0===d.expirationTime)&&(d=b.lastRenderedReducer,null!==d))try{var l=b.lastRenderedState,k=d(l,c);f.eagerReducer=d;f.eagerState=k;if(Ea(k,l))return}catch(m){}finally{}ya(a,\ne)}}function ig(a,b){var c=S(5,null,null,0);c.elementType=\"DELETED\";c.type=\"DELETED\";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c}function jg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=\"\"===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return!1;default:return!1}}function kg(a){if(Ia){var b=\ngb;if(b){var c=b;if(!jg(a,b)){b=Hd(c);if(!b||!jg(a,b)){a.effectTag|=2;Ia=!1;la=a;return}ig(la,c)}la=a;gb=Pf(b)}else a.effectTag|=2,Ia=!1,la=a}}function lg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&18!==a.tag;)a=a.return;la=a}function Zd(a){if(a!==la)return!1;if(!Ia)return lg(a),Ia=!0,!1;var b=a.type;if(5!==a.tag||\"head\"!==b&&\"body\"!==b&&!Gd(b,a.memoizedProps))for(b=gb;b;)ig(a,b),b=Hd(b);lg(a);gb=la?Hd(a.stateNode):null;return!0}function $d(){gb=la=null;Ia=!1}function N(a,b,c,d){b.child=null===\na?ae(b,null,c,d):hb(b,a.child,c,d)}function mg(a,b,c,d,e){c=c.render;var f=b.ref;ib(b,e);d=Td(a,b,c,d,f,e);if(null!==a&&!ja)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),ma(a,b,e);b.effectTag|=1;N(a,b,d,e);return b.child}function ng(a,b,c,d,e,f){if(null===a){var g=c.type;if(\"function\"===typeof g&&!Md(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,og(a,b,g,d,e,f);a=wc(c.type,null,d,null,b.mode,f);a.ref=\nb.ref;a.return=b;return b.child=a}g=a.child;if(e<f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:vb,c(e,d)&&a.ref===b.ref))return ma(a,b,f);b.effectTag|=1;a=Ga(g,d,f);a.ref=b.ref;a.return=b;return b.child=a}function og(a,b,c,d,e,f){return null!==a&&vb(a.memoizedProps,d)&&a.ref===b.ref&&(ja=!1,e<f)?ma(a,b,f):be(a,b,c,d,f)}function pg(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128}function be(a,b,c,d,e){var f=E(c)?Fa:F.current;f=Za(b,f);ib(b,e);c=Td(a,b,c,d,f,e);if(null!==\na&&!ja)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),ma(a,b,e);b.effectTag|=1;N(a,b,c,e);return b.child}function qg(a,b,c,d,e){if(E(c)){var f=!0;vc(b)}else f=!1;ib(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Yf(b,c,d,e),Pd(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var l=g.context,k=c.contextType;\"object\"===typeof k&&null!==k?k=T(k):(k=E(c)?Fa:F.current,k=Za(b,k));var m=\nc.getDerivedStateFromProps,n=\"function\"===typeof m||\"function\"===typeof g.getSnapshotBeforeUpdate;n||\"function\"!==typeof g.UNSAFE_componentWillReceiveProps&&\"function\"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&Zf(b,g,d,k);za=!1;var p=b.memoizedState;l=g.state=p;var r=b.updateQueue;null!==r&&(Cb(b,r,d,g,e),l=b.memoizedState);h!==d||p!==l||M.current||za?(\"function\"===typeof m&&(yc(b,c,m,d),l=b.memoizedState),(h=za||Xf(b,c,h,d,p,l,k))?(n||\"function\"!==typeof g.UNSAFE_componentWillMount&&\n\"function\"!==typeof g.componentWillMount||(\"function\"===typeof g.componentWillMount&&g.componentWillMount(),\"function\"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),\"function\"===typeof g.componentDidMount&&(b.effectTag|=4)):(\"function\"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=l),g.props=d,g.state=l,g.context=k,d=h):(\"function\"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1)}else g=b.stateNode,h=b.memoizedProps,g.props=b.type===b.elementType?\nh:P(b.type,h),l=g.context,k=c.contextType,\"object\"===typeof k&&null!==k?k=T(k):(k=E(c)?Fa:F.current,k=Za(b,k)),m=c.getDerivedStateFromProps,(n=\"function\"===typeof m||\"function\"===typeof g.getSnapshotBeforeUpdate)||\"function\"!==typeof g.UNSAFE_componentWillReceiveProps&&\"function\"!==typeof g.componentWillReceiveProps||(h!==d||l!==k)&&Zf(b,g,d,k),za=!1,l=b.memoizedState,p=g.state=l,r=b.updateQueue,null!==r&&(Cb(b,r,d,g,e),p=b.memoizedState),h!==d||l!==p||M.current||za?(\"function\"===typeof m&&(yc(b,\nc,m,d),p=b.memoizedState),(m=za||Xf(b,c,h,d,l,p,k))?(n||\"function\"!==typeof g.UNSAFE_componentWillUpdate&&\"function\"!==typeof g.componentWillUpdate||(\"function\"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,p,k),\"function\"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,p,k)),\"function\"===typeof g.componentDidUpdate&&(b.effectTag|=4),\"function\"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):(\"function\"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===\na.memoizedState||(b.effectTag|=4),\"function\"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=p),g.props=d,g.state=p,g.context=k,d=m):(\"function\"!==typeof g.componentDidUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=4),\"function\"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&l===a.memoizedState||(b.effectTag|=256),d=!1);return ce(a,b,c,d,f,e)}function ce(a,b,c,d,e,f){pg(a,b);var g=0!==(b.effectTag&\n64);if(!d&&!g)return e&&Sf(b,c,!1),ma(a,b,f);d=b.stateNode;gi.current=b;var h=g&&\"function\"!==typeof c.getDerivedStateFromError?null:d.render();b.effectTag|=1;null!==a&&g?(b.child=hb(b,a.child,null,f),b.child=hb(b,null,h,f)):N(a,b,h,f);b.memoizedState=d.state;e&&Sf(b,c,!0);return b.child}function rg(a){var b=a.stateNode;b.pendingContext?Qf(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Qf(a,b.context,!1);Qd(a,b.containerInfo)}function sg(a,b,c){var d=b.mode,e=b.pendingProps,f=b.memoizedState;\nif(0===(b.effectTag&64)){f=null;var g=!1}else f={timedOutAt:null!==f?f.timedOutAt:0},g=!0,b.effectTag&=-65;if(null===a)if(g){var h=e.fallback;a=wa(null,d,0,null);0===(b.mode&1)&&(a.child=null!==b.memoizedState?b.child.child:b.child);d=wa(h,d,c,null);a.sibling=d;c=a;c.return=d.return=b}else c=d=ae(b,null,e.children,c);else null!==a.memoizedState?(d=a.child,h=d.sibling,g?(c=e.fallback,e=Ga(d,d.pendingProps,0),0===(b.mode&1)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==d.child&&(e.child=g)),\nd=e.sibling=Ga(h,c,h.expirationTime),c=e,e.childExpirationTime=0,c.return=d.return=b):c=d=hb(b,d.child,e.children,c)):(h=a.child,g?(g=e.fallback,e=wa(null,d,0,null),e.child=h,0===(b.mode&1)&&(e.child=null!==b.memoizedState?b.child.child:b.child),d=e.sibling=wa(g,d,c,null),d.effectTag|=2,c=e,e.childExpirationTime=0,c.return=d.return=b):d=c=hb(b,h,e.children,c)),b.stateNode=a.stateNode;b.memoizedState=f;b.child=c;return d}function ma(a,b,c){null!==a&&(b.contextDependencies=a.contextDependencies);if(b.childExpirationTime<\nc)return null;null!==a&&b.child!==a.child?n(\"153\"):void 0;if(null!==b.child){a=b.child;c=Ga(a,a.pendingProps,a.expirationTime);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Ga(a,a.pendingProps,a.expirationTime),c.return=b;c.sibling=null}return b.child}function hi(a,b,c){var d=b.expirationTime;if(null!==a)if(a.memoizedProps!==b.pendingProps||M.current)ja=!0;else{if(d<c){ja=!1;switch(b.tag){case 3:rg(b);$d();break;case 5:bg(b);break;case 1:E(b.type)&&vc(b);break;case 4:Qd(b,b.stateNode.containerInfo);\nbreak;case 10:tg(b,b.memoizedProps.value);break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;if(0!==d&&d>=c)return sg(a,b,c);b=ma(a,b,c);return null!==b?b.sibling:null}}return ma(a,b,c)}}else ja=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;var e=Za(b,F.current);ib(b,c);e=Td(null,b,d,a,e,c);b.effectTag|=1;if(\"object\"===typeof e&&null!==e&&\"function\"===typeof e.render&&void 0===e.$$typeof){b.tag=\n1;Vd();if(E(d)){var f=!0;vc(b)}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;var g=d.getDerivedStateFromProps;\"function\"===typeof g&&yc(b,d,g,a);e.updater=zc;b.stateNode=e;e._reactInternalFiber=b;Pd(b,d,a,c);b=ce(null,b,d,!0,f,c)}else b.tag=0,N(null,b,e,c),b=b.child;return b;case 16:e=b.elementType;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);f=b.pendingProps;a=ei(e);b.type=a;e=b.tag=ci(a);f=P(a,f);g=void 0;switch(e){case 0:g=be(null,b,a,f,c);break;case 1:g=\nqg(null,b,a,f,c);break;case 11:g=mg(null,b,a,f,c);break;case 14:g=ng(null,b,a,P(a.type,f),d,c);break;default:n(\"306\",a,\"\")}return g;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),be(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),qg(a,b,d,e,c);case 3:rg(b);d=b.updateQueue;null===d?n(\"282\"):void 0;e=b.memoizedState;e=null!==e?e.element:null;Cb(b,d,b.pendingProps,null,c);d=b.memoizedState.element;if(d===e)$d(),b=ma(a,b,c);else{e=b.stateNode;if(e=\n(null===a||null===a.child)&&e.hydrate)gb=Pf(b.stateNode.containerInfo),la=b,e=Ia=!0;e?(b.effectTag|=2,b.child=ae(b,null,d,c)):(N(a,b,d,c),$d());b=b.child}return b;case 5:return bg(b),null===a&&kg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Gd(d,e)?g=null:null!==f&&Gd(d,f)&&(b.effectTag|=16),pg(a,b),1!==c&&b.mode&1&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(N(a,b,g,c),b=b.child),b;case 6:return null===a&&kg(b),null;case 13:return sg(a,b,c);case 4:return Qd(b,\nb.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=hb(b,null,d,c):N(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),mg(a,b,d,e,c);case 7:return N(a,b,b.pendingProps,c),b.child;case 8:return N(a,b,b.pendingProps.children,c),b.child;case 12:return N(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;tg(b,f);if(null!==g){var h=g.value;f=Ea(h,f)?0:(\"function\"===typeof d._calculateChangedBits?\nd._calculateChangedBits(h,f):1073741823)|0;if(0===f){if(g.children===e.children&&!M.current){b=ma(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var l=h.contextDependencies;if(null!==l){g=h.child;for(var k=l.first;null!==k;){if(k.context===d&&0!==(k.observedBits&f)){1===h.tag&&(k=Aa(c),k.tag=Ec,na(h,k));h.expirationTime<c&&(h.expirationTime=c);k=h.alternate;null!==k&&k.expirationTime<c&&(k.expirationTime=c);k=c;for(var m=h.return;null!==m;){var p=m.alternate;if(m.childExpirationTime<\nk)m.childExpirationTime=k,null!==p&&p.childExpirationTime<k&&(p.childExpirationTime=k);else if(null!==p&&p.childExpirationTime<k)p.childExpirationTime=k;else break;m=m.return}l.expirationTime<c&&(l.expirationTime=c);break}k=k.next}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return}h=g}}N(a,b,e.children,c);b=b.child}return b;case 9:return e=b.type,f=b.pendingProps,\nd=f.children,ib(b,c),e=T(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,N(a,b,d,c),b.child;case 14:return e=b.type,f=P(e,b.pendingProps),f=P(e.type,f),ng(a,b,e,f,d,c);case 15:return og(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:P(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,E(d)?(a=!0,vc(b)):a=!1,ib(b,c),Yf(b,d,e,c),Pd(b,d,e,c),ce(null,b,d,!0,a,c)}n(\"156\")}function tg(a,b){var c=a.type._context;L(de,c._currentValue,\na);c._currentValue=b}function ee(a){var b=de.current;D(de,a);a.type._context._currentValue=b}function ib(a,b){Nb=a;Ob=Ja=null;var c=a.contextDependencies;null!==c&&c.expirationTime>=b&&(ja=!0);a.contextDependencies=null}function T(a,b){if(Ob!==a&&!1!==b&&0!==b){if(\"number\"!==typeof b||1073741823===b)Ob=a,b=1073741823;b={context:a,observedBits:b,next:null};null===Ja?(null===Nb?n(\"308\"):void 0,Ja=b,Nb.contextDependencies={first:b,expirationTime:0}):Ja=Ja.next=b}return a._currentValue}function Fc(a){return{baseState:a,\nfirstUpdate:null,lastUpdate:null,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function fe(a){return{baseState:a.baseState,firstUpdate:a.firstUpdate,lastUpdate:a.lastUpdate,firstCapturedUpdate:null,lastCapturedUpdate:null,firstEffect:null,lastEffect:null,firstCapturedEffect:null,lastCapturedEffect:null}}function Aa(a){return{expirationTime:a,tag:ug,payload:null,callback:null,next:null,nextEffect:null}}function Gc(a,\nb){null===a.lastUpdate?a.firstUpdate=a.lastUpdate=b:(a.lastUpdate.next=b,a.lastUpdate=b)}function na(a,b){var c=a.alternate;if(null===c){var d=a.updateQueue;var e=null;null===d&&(d=a.updateQueue=Fc(a.memoizedState))}else d=a.updateQueue,e=c.updateQueue,null===d?null===e?(d=a.updateQueue=Fc(a.memoizedState),e=c.updateQueue=Fc(c.memoizedState)):d=a.updateQueue=fe(e):null===e&&(e=c.updateQueue=fe(d));null===e||d===e?Gc(d,b):null===d.lastUpdate||null===e.lastUpdate?(Gc(d,b),Gc(e,b)):(Gc(d,b),e.lastUpdate=\nb)}function vg(a,b){var c=a.updateQueue;c=null===c?a.updateQueue=Fc(a.memoizedState):wg(a,c);null===c.lastCapturedUpdate?c.firstCapturedUpdate=c.lastCapturedUpdate=b:(c.lastCapturedUpdate.next=b,c.lastCapturedUpdate=b)}function wg(a,b){var c=a.alternate;null!==c&&b===c.updateQueue&&(b=a.updateQueue=fe(b));return b}function xg(a,b,c,d,e,f){switch(c.tag){case yg:return a=c.payload,\"function\"===typeof a?a.call(f,d,e):a;case ge:a.effectTag=a.effectTag&-2049|64;case ug:a=c.payload;e=\"function\"===typeof a?\na.call(f,d,e):a;if(null===e||void 0===e)break;return B({},d,e);case Ec:za=!0}return d}function Cb(a,b,c,d,e){za=!1;b=wg(a,b);for(var f=b.baseState,g=null,h=0,l=b.firstUpdate,k=f;null!==l;){var m=l.expirationTime;m<e?(null===g&&(g=l,f=k),h<m&&(h=m)):(k=xg(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastEffect?b.firstEffect=b.lastEffect=l:(b.lastEffect.nextEffect=l,b.lastEffect=l)));l=l.next}m=null;for(l=b.firstCapturedUpdate;null!==l;){var n=l.expirationTime;n<e?(null===\nm&&(m=l,null===g&&(f=k)),h<n&&(h=n)):(k=xg(a,b,l,k,c,d),null!==l.callback&&(a.effectTag|=32,l.nextEffect=null,null===b.lastCapturedEffect?b.firstCapturedEffect=b.lastCapturedEffect=l:(b.lastCapturedEffect.nextEffect=l,b.lastCapturedEffect=l)));l=l.next}null===g&&(b.lastUpdate=null);null===m?b.lastCapturedUpdate=null:a.effectTag|=32;null===g&&null===m&&(f=k);b.baseState=f;b.firstUpdate=g;b.firstCapturedUpdate=m;a.expirationTime=h;a.memoizedState=k}function zg(a,b,c,d){null!==b.firstCapturedUpdate&&\n(null!==b.lastUpdate&&(b.lastUpdate.next=b.firstCapturedUpdate,b.lastUpdate=b.lastCapturedUpdate),b.firstCapturedUpdate=b.lastCapturedUpdate=null);Ag(b.firstEffect,c);b.firstEffect=b.lastEffect=null;Ag(b.firstCapturedEffect,c);b.firstCapturedEffect=b.lastCapturedEffect=null}function Ag(a,b){for(;null!==a;){var c=a.callback;if(null!==c){a.callback=null;var d=b;\"function\"!==typeof c?n(\"191\",c):void 0;c.call(d)}a=a.nextEffect}}function Hc(a,b){return{value:a,source:b,stack:qd(b)}}function Pb(a){a.effectTag|=\n4}function Bg(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=qd(c));null!==c&&sa(c.type);b=b.value;null!==a&&1===a.tag&&sa(a.type);try{console.error(b)}catch(e){setTimeout(function(){throw e;})}}function Cg(a){var b=a.ref;if(null!==b)if(\"function\"===typeof b)try{b(null)}catch(c){Ka(a,c)}else b.current=null}function Qb(a,b,c){c=c.updateQueue;c=null!==c?c.lastEffect:null;if(null!==c){var d=c=c.next;do{if((d.tag&a)!==db){var e=d.destroy;d.destroy=void 0;void 0!==e&&e()}(d.tag&b)!==db&&(e=d.create,\nd.destroy=e());d=d.next}while(d!==c)}}function ii(a,b){for(var c=a;;){if(5===c.tag){var d=c.stateNode;if(b)d.style.display=\"none\";else{d=c.stateNode;var e=c.memoizedProps.style;e=void 0!==e&&null!==e&&e.hasOwnProperty(\"display\")?e.display:null;d.style.display=Lf(\"display\",e)}}else if(6===c.tag)c.stateNode.nodeValue=b?\"\":c.memoizedProps;else if(13===c.tag&&null!==c.memoizedState){d=c.child.sibling;d.return=c;c=d;continue}else if(null!==c.child){c.child.return=c;c=c.child;continue}if(c===a)break;for(;null===\nc.sibling;){if(null===c.return||c.return===a)return;c=c.return}c.sibling.return=c.return;c=c.sibling}}function Dg(a){\"function\"===typeof Ld&&Ld(a);switch(a.tag){case 0:case 11:case 14:case 15:var b=a.updateQueue;if(null!==b&&(b=b.lastEffect,null!==b)){var c=b=b.next;do{var d=c.destroy;if(void 0!==d){var e=a;try{d()}catch(f){Ka(e,f)}}c=c.next}while(c!==b)}break;case 1:Cg(a);b=a.stateNode;if(\"function\"===typeof b.componentWillUnmount)try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount()}catch(f){Ka(a,\nf)}break;case 5:Cg(a);break;case 4:Eg(a)}}function Fg(a){return 5===a.tag||3===a.tag||4===a.tag}function Gg(a){a:{for(var b=a.return;null!==b;){if(Fg(b)){var c=b;break a}b=b.return}n(\"160\");c=void 0}var d=b=void 0;switch(c.tag){case 5:b=c.stateNode;d=!1;break;case 3:b=c.stateNode.containerInfo;d=!0;break;case 4:b=c.stateNode.containerInfo;d=!0;break;default:n(\"161\")}c.effectTag&16&&(Ab(b,\"\"),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Fg(c.return)){c=null;break a}c=\nc.return}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;else c.child.return=c,c=c.child}if(!(c.effectTag&2)){c=c.stateNode;break a}}for(var e=a;;){if(5===e.tag||6===e.tag)if(c)if(d){var f=b,g=e.stateNode,h=c;8===f.nodeType?f.parentNode.insertBefore(g,h):f.insertBefore(g,h)}else b.insertBefore(e.stateNode,c);else d?(g=b,h=e.stateNode,8===g.nodeType?(f=g.parentNode,f.insertBefore(h,g)):(f=g,f.appendChild(h)),\ng=g._reactRootContainer,null!==g&&void 0!==g||null!==f.onclick||(f.onclick=tc)):b.appendChild(e.stateNode);else if(4!==e.tag&&null!==e.child){e.child.return=e;e=e.child;continue}if(e===a)break;for(;null===e.sibling;){if(null===e.return||e.return===a)return;e=e.return}e.sibling.return=e.return;e=e.sibling}}function Eg(a){for(var b=a,c=!1,d=void 0,e=void 0;;){if(!c){c=b.return;a:for(;;){null===c?n(\"160\"):void 0;switch(c.tag){case 5:d=c.stateNode;e=!1;break a;case 3:d=c.stateNode.containerInfo;e=!0;\nbreak a;case 4:d=c.stateNode.containerInfo;e=!0;break a}c=c.return}c=!0}if(5===b.tag||6===b.tag){a:for(var f=b,g=f;;)if(Dg(g),null!==g.child&&4!==g.tag)g.child.return=g,g=g.child;else{if(g===f)break;for(;null===g.sibling;){if(null===g.return||g.return===f)break a;g=g.return}g.sibling.return=g.return;g=g.sibling}e?(f=d,g=b.stateNode,8===f.nodeType?f.parentNode.removeChild(g):f.removeChild(g)):d.removeChild(b.stateNode)}else if(4===b.tag){if(null!==b.child){d=b.stateNode.containerInfo;e=!0;b.child.return=\nb;b=b.child;continue}}else if(Dg(b),null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return;b=b.return;4===b.tag&&(c=!1)}b.sibling.return=b.return;b=b.sibling}}function Hg(a,b){switch(b.tag){case 0:case 11:case 14:case 15:Qb(Rb,ji,b);break;case 1:break;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps;a=null!==a?a.memoizedProps:d;var e=b.type,f=b.updateQueue;b.updateQueue=null;null!==f&&$h(c,f,e,a,d,b)}break;case 6:null===\nb.stateNode?n(\"162\"):void 0;b.stateNode.nodeValue=b.memoizedProps;break;case 3:break;case 12:break;case 13:c=b.memoizedState;d=void 0;a=b;null===c?d=!1:(d=!0,a=b.child,0===c.timedOutAt&&(c.timedOutAt=ka()));null!==a&&ii(a,d);c=b.updateQueue;if(null!==c){b.updateQueue=null;var g=b.stateNode;null===g&&(g=b.stateNode=new ki);c.forEach(function(a){var c=li.bind(null,b,a);g.has(a)||(g.add(a),a.then(c,c))})}break;case 17:break;default:n(\"163\")}}function he(a,b,c){c=Aa(c);c.tag=ge;c.payload={element:null};\nvar d=b.value;c.callback=function(){ie(d);Bg(a,b)};return c}function Ig(a,b,c){c=Aa(c);c.tag=ge;var d=a.type.getDerivedStateFromError;if(\"function\"===typeof d){var e=b.value;c.payload=function(){return d(e)}}var f=a.stateNode;null!==f&&\"function\"===typeof f.componentDidCatch&&(c.callback=function(){\"function\"!==typeof d&&(null===Ba?Ba=new Set([this]):Ba.add(this));var c=b.value,e=b.stack;Bg(a,b);this.componentDidCatch(c,{componentStack:null!==e?e:\"\"})});return c}function mi(a,b){switch(a.tag){case 1:return E(a.type)&&\nuc(a),b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 3:return $a(a),Jd(a),b=a.effectTag,0!==(b&64)?n(\"285\"):void 0,a.effectTag=b&-2049|64,a;case 5:return Rd(a),null;case 13:return b=a.effectTag,b&2048?(a.effectTag=b&-2049|64,a):null;case 18:return null;case 4:return $a(a),null;case 10:return ee(a),null;default:return null}}function Jg(){if(null!==x)for(var a=x.return;null!==a;){var b=a;switch(b.tag){case 1:var c=b.type.childContextTypes;null!==c&&void 0!==c&&uc(b);break;case 3:$a(b);Jd(b);\nbreak;case 5:Rd(b);break;case 4:$a(b);break;case 10:ee(b)}a=a.return}Y=null;H=0;La=-1;je=!1;x=null}function ni(){for(;null!==p;){var a=p.effectTag;a&16&&Ab(p.stateNode,\"\");if(a&128){var b=p.alternate;null!==b&&(b=b.ref,null!==b&&(\"function\"===typeof b?b(null):b.current=null))}switch(a&14){case 2:Gg(p);p.effectTag&=-3;break;case 6:Gg(p);p.effectTag&=-3;Hg(p.alternate,p);break;case 4:Hg(p.alternate,p);break;case 8:a=p,Eg(a),a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null,a=a.alternate,\nnull!==a&&(a.return=null,a.child=null,a.memoizedState=null,a.updateQueue=null)}p=p.nextEffect}}function oi(){for(;null!==p;){if(p.effectTag&256)a:{var a=p.alternate,b=p;switch(b.tag){case 0:case 11:case 15:Qb(pi,db,b);break a;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===b.type?c:P(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b}break a;case 3:case 5:case 6:case 4:case 17:break a;default:n(\"163\")}}p=p.nextEffect}}\nfunction qi(a,b){for(;null!==p;){var c=p.effectTag;if(c&36){var d=p.alternate,e=p,f=b;switch(e.tag){case 0:case 11:case 15:Qb(ri,Sb,e);break;case 1:var g=e.stateNode;if(e.effectTag&4)if(null===d)g.componentDidMount();else{var h=e.elementType===e.type?d.memoizedProps:P(e.type,d.memoizedProps);g.componentDidUpdate(h,d.memoizedState,g.__reactInternalSnapshotBeforeUpdate)}d=e.updateQueue;null!==d&&zg(e,d,g,f);break;case 3:d=e.updateQueue;if(null!==d){g=null;if(null!==e.child)switch(e.child.tag){case 5:g=\ne.child.stateNode;break;case 1:g=e.child.stateNode}zg(e,d,g,f)}break;case 5:f=e.stateNode;null===d&&e.effectTag&4&&Nf(e.type,e.memoizedProps)&&f.focus();break;case 6:break;case 4:break;case 12:break;case 13:break;case 17:break;default:n(\"163\")}}c&128&&(e=p.ref,null!==e&&(f=p.stateNode,\"function\"===typeof e?e(f):e.current=f));c&512&&(ke=a);p=p.nextEffect}}function si(a,b){Ic=Jc=ke=null;var c=w;w=!0;do{if(b.effectTag&512){var d=!1,e=void 0;try{var f=b;Qb(le,db,f);Qb(db,me,f)}catch(g){d=!0,e=g}d&&Ka(b,\ne)}b=b.nextEffect}while(null!==b);w=c;c=a.expirationTime;0!==c&&Kc(a,c);z||w||Z(1073741823,!1)}function eb(){null!==Jc&&ti(Jc);null!==Ic&&Ic()}function ui(a,b){Lc=Ca=!0;a.current===b?n(\"177\"):void 0;var c=a.pendingCommitExpirationTime;0===c?n(\"261\"):void 0;a.pendingCommitExpirationTime=0;var d=b.expirationTime,e=b.childExpirationTime;di(a,e>d?e:d);Kg.current=null;d=void 0;1<b.effectTag?null!==b.lastEffect?(b.lastEffect.nextEffect=b,d=b.firstEffect):d=b:d=b.firstEffect;ne=qc;oe=Wh();qc=!1;for(p=d;null!==\np;){e=!1;var f=void 0;try{oi()}catch(h){e=!0,f=h}e&&(null===p?n(\"178\"):void 0,Ka(p,f),null!==p&&(p=p.nextEffect))}for(p=d;null!==p;){e=!1;f=void 0;try{ni()}catch(h){e=!0,f=h}e&&(null===p?n(\"178\"):void 0,Ka(p,f),null!==p&&(p=p.nextEffect))}Xh(oe);oe=null;qc=!!ne;ne=null;a.current=b;for(p=d;null!==p;){e=!1;f=void 0;try{qi(a,c)}catch(h){e=!0,f=h}e&&(null===p?n(\"178\"):void 0,Ka(p,f),null!==p&&(p=p.nextEffect))}if(null!==d&&null!==ke){var g=si.bind(null,a,d);Jc=Mc(Lg,function(){return vi(g)});Ic=g}Ca=\nLc=!1;\"function\"===typeof Kd&&Kd(b.stateNode);c=b.expirationTime;b=b.childExpirationTime;b=b>c?b:c;0===b&&(Ba=null);wi(a,b)}function Mg(a){for(;;){var b=a.alternate,c=a.return,d=a.sibling;if(0===(a.effectTag&1024)){x=a;a:{var e=b;b=a;var f=H;var g=b.pendingProps;switch(b.tag){case 2:break;case 16:break;case 15:case 0:break;case 1:E(b.type)&&uc(b);break;case 3:$a(b);Jd(b);g=b.stateNode;g.pendingContext&&(g.context=g.pendingContext,g.pendingContext=null);if(null===e||null===e.child)Zd(b),b.effectTag&=\n-3;pe(b);break;case 5:Rd(b);var h=Ha(Fb.current);f=b.type;if(null!==e&&null!=b.stateNode)Ng(e,b,f,g,h),e.ref!==b.ref&&(b.effectTag|=128);else if(g){var l=Ha(U.current);if(Zd(b)){g=b;e=g.stateNode;var k=g.type,m=g.memoizedProps,p=h;e[ea]=g;e[ec]=m;f=void 0;h=k;switch(h){case \"iframe\":case \"object\":r(\"load\",e);break;case \"video\":case \"audio\":for(k=0;k<zb.length;k++)r(zb[k],e);break;case \"source\":r(\"error\",e);break;case \"img\":case \"image\":case \"link\":r(\"error\",e);r(\"load\",e);break;case \"form\":r(\"reset\",\ne);r(\"submit\",e);break;case \"details\":r(\"toggle\",e);break;case \"input\":lf(e,m);r(\"invalid\",e);ha(p,\"onChange\");break;case \"select\":e._wrapperState={wasMultiple:!!m.multiple};r(\"invalid\",e);ha(p,\"onChange\");break;case \"textarea\":If(e,m),r(\"invalid\",e),ha(p,\"onChange\")}Ed(h,m);k=null;for(f in m)m.hasOwnProperty(f)&&(l=m[f],\"children\"===f?\"string\"===typeof l?e.textContent!==l&&(k=[\"children\",l]):\"number\"===typeof l&&e.textContent!==\"\"+l&&(k=[\"children\",\"\"+l]):Oa.hasOwnProperty(f)&&null!=l&&ha(p,f));\nswitch(h){case \"input\":kc(e);nf(e,m,!0);break;case \"textarea\":kc(e);f=e.textContent;f===e._wrapperState.initialValue&&(e.value=f);break;case \"select\":case \"option\":break;default:\"function\"===typeof m.onClick&&(e.onclick=tc)}f=k;g.updateQueue=f;g=null!==f?!0:!1;g&&Pb(b)}else{m=b;p=f;e=g;k=9===h.nodeType?h:h.ownerDocument;\"http://www.w3.org/1999/xhtml\"===l&&(l=Kf(p));\"http://www.w3.org/1999/xhtml\"===l?\"script\"===p?(e=k.createElement(\"div\"),e.innerHTML=\"<script>\\x3c/script>\",k=e.removeChild(e.firstChild)):\n\"string\"===typeof e.is?k=k.createElement(p,{is:e.is}):(k=k.createElement(p),\"select\"===p&&(p=k,e.multiple?p.multiple=!0:e.size&&(p.size=e.size))):k=k.createElementNS(l,p);e=k;e[ea]=m;e[ec]=g;Og(e,b,!1,!1);m=e;k=f;p=g;var t=h,y=Fd(k,p);switch(k){case \"iframe\":case \"object\":r(\"load\",m);h=p;break;case \"video\":case \"audio\":for(h=0;h<zb.length;h++)r(zb[h],m);h=p;break;case \"source\":r(\"error\",m);h=p;break;case \"img\":case \"image\":case \"link\":r(\"error\",m);r(\"load\",m);h=p;break;case \"form\":r(\"reset\",m);r(\"submit\",\nm);h=p;break;case \"details\":r(\"toggle\",m);h=p;break;case \"input\":lf(m,p);h=sd(m,p);r(\"invalid\",m);ha(t,\"onChange\");break;case \"option\":h=Bd(m,p);break;case \"select\":m._wrapperState={wasMultiple:!!p.multiple};h=B({},p,{value:void 0});r(\"invalid\",m);ha(t,\"onChange\");break;case \"textarea\":If(m,p);h=Cd(m,p);r(\"invalid\",m);ha(t,\"onChange\");break;default:h=p}Ed(k,h);l=void 0;var u=k,w=m,v=h;for(l in v)if(v.hasOwnProperty(l)){var q=v[l];\"style\"===l?Mf(w,q):\"dangerouslySetInnerHTML\"===l?(q=q?q.__html:void 0,\nnull!=q&&Of(w,q)):\"children\"===l?\"string\"===typeof q?(\"textarea\"!==u||\"\"!==q)&&Ab(w,q):\"number\"===typeof q&&Ab(w,\"\"+q):\"suppressContentEditableWarning\"!==l&&\"suppressHydrationWarning\"!==l&&\"autoFocus\"!==l&&(Oa.hasOwnProperty(l)?null!=q&&ha(t,l):null!=q&&rd(w,l,q,y))}switch(k){case \"input\":kc(m);nf(m,p,!1);break;case \"textarea\":kc(m);h=m.textContent;h===m._wrapperState.initialValue&&(m.value=h);break;case \"option\":null!=p.value&&m.setAttribute(\"value\",\"\"+ua(p.value));break;case \"select\":h=m;m=p;h.multiple=\n!!m.multiple;p=m.value;null!=p?Xa(h,!!m.multiple,p,!1):null!=m.defaultValue&&Xa(h,!!m.multiple,m.defaultValue,!0);break;default:\"function\"===typeof h.onClick&&(m.onclick=tc)}(g=Nf(f,g))&&Pb(b);b.stateNode=e}null!==b.ref&&(b.effectTag|=128)}else null===b.stateNode?n(\"166\"):void 0;break;case 6:e&&null!=b.stateNode?Pg(e,b,e.memoizedProps,g):(\"string\"!==typeof g&&(null===b.stateNode?n(\"166\"):void 0),e=Ha(Fb.current),Ha(U.current),Zd(b)?(g=b,f=g.stateNode,e=g.memoizedProps,f[ea]=g,(g=f.nodeValue!==e)&&\nPb(b)):(f=b,g=(9===e.nodeType?e:e.ownerDocument).createTextNode(g),g[ea]=b,f.stateNode=g));break;case 11:break;case 13:g=b.memoizedState;if(0!==(b.effectTag&64)){b.expirationTime=f;x=b;break a}g=null!==g;f=null!==e&&null!==e.memoizedState;null!==e&&!g&&f&&(e=e.child.sibling,null!==e&&(h=b.firstEffect,null!==h?(b.firstEffect=e,e.nextEffect=h):(b.firstEffect=b.lastEffect=e,e.nextEffect=null),e.effectTag=8));if(g||f)b.effectTag|=4;break;case 7:break;case 8:break;case 12:break;case 4:$a(b);pe(b);break;\ncase 10:ee(b);break;case 9:break;case 14:break;case 17:E(b.type)&&uc(b);break;case 18:break;default:n(\"156\")}x=null}b=a;if(1===H||1!==b.childExpirationTime){g=0;for(f=b.child;null!==f;)e=f.expirationTime,h=f.childExpirationTime,e>g&&(g=e),h>g&&(g=h),f=f.sibling;b.childExpirationTime=g}if(null!==x)return x;null!==c&&0===(c.effectTag&1024)&&(null===c.firstEffect&&(c.firstEffect=a.firstEffect),null!==a.lastEffect&&(null!==c.lastEffect&&(c.lastEffect.nextEffect=a.firstEffect),c.lastEffect=a.lastEffect),\n1<a.effectTag&&(null!==c.lastEffect?c.lastEffect.nextEffect=a:c.firstEffect=a,c.lastEffect=a))}else{a=mi(a,H);if(null!==a)return a.effectTag&=1023,a;null!==c&&(c.firstEffect=c.lastEffect=null,c.effectTag|=1024)}if(null!==d)return d;if(null!==c)a=c;else break}return null}function Qg(a){var b=hi(a.alternate,a,H);a.memoizedProps=a.pendingProps;null===b&&(b=Mg(a));Kg.current=null;return b}function Rg(a,b){Ca?n(\"243\"):void 0;eb();Ca=!0;var c=qe.current;qe.current=Ud;var d=a.nextExpirationTimeToWorkOn;\nif(d!==H||a!==Y||null===x)Jg(),Y=a,H=d,x=Ga(Y.current,null,H),a.pendingCommitExpirationTime=0;var e=!1;do{try{if(b)for(;null!==x&&!Nc();)x=Qg(x);else for(;null!==x;)x=Qg(x)}catch(v){if(Ob=Ja=Nb=null,Vd(),null===x)e=!0,ie(v);else{null===x?n(\"271\"):void 0;var f=x,g=f.return;if(null===g)e=!0,ie(v);else{a:{var h=a,l=g,k=f,m=v;g=H;k.effectTag|=1024;k.firstEffect=k.lastEffect=null;if(null!==m&&\"object\"===typeof m&&\"function\"===typeof m.then){var p=m;m=l;var t=-1,r=-1;do{if(13===m.tag){var u=m.alternate;\nif(null!==u&&(u=u.memoizedState,null!==u)){r=10*(1073741822-u.timedOutAt);break}u=m.pendingProps.maxDuration;if(\"number\"===typeof u)if(0>=u)t=0;else if(-1===t||u<t)t=u}m=m.return}while(null!==m);m=l;do{if(u=13===m.tag)u=void 0===m.memoizedProps.fallback?!1:null===m.memoizedState;if(u){l=m.updateQueue;null===l?(l=new Set,l.add(p),m.updateQueue=l):l.add(p);if(0===(m.mode&1)){m.effectTag|=64;k.effectTag&=-1957;1===k.tag&&(null===k.alternate?k.tag=17:(g=Aa(1073741823),g.tag=Ec,na(k,g)));k.expirationTime=\n1073741823;break a}k=h;l=g;var w=k.pingCache;null===w?(w=k.pingCache=new xi,u=new Set,w.set(p,u)):(u=w.get(p),void 0===u&&(u=new Set,w.set(p,u)));u.has(l)||(u.add(l),k=yi.bind(null,k,p,l),p.then(k,k));-1===t?h=1073741823:(-1===r&&(r=10*(1073741822-Wf(h,g))-5E3),h=r+t);0<=h&&La<h&&(La=h);m.effectTag|=2048;m.expirationTime=g;break a}m=m.return}while(null!==m);m=Error((sa(k.type)||\"A React component\")+\" suspended while rendering, but no fallback UI was specified.\\n\\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.\"+\nqd(k))}je=!0;m=Hc(m,k);h=l;do{switch(h.tag){case 3:h.effectTag|=2048;h.expirationTime=g;g=he(h,m,g);vg(h,g);break a;case 1:if(t=m,r=h.type,k=h.stateNode,0===(h.effectTag&64)&&(\"function\"===typeof r.getDerivedStateFromError||null!==k&&\"function\"===typeof k.componentDidCatch&&(null===Ba||!Ba.has(k)))){h.effectTag|=2048;h.expirationTime=g;g=Ig(h,t,g);vg(h,g);break a}}h=h.return}while(null!==h)}x=Mg(f);continue}}}break}while(1);Ca=!1;qe.current=c;Ob=Ja=Nb=null;Vd();if(e)Y=null,a.finishedWork=null;else if(null!==\nx)a.finishedWork=null;else{c=a.current.alternate;null===c?n(\"281\"):void 0;Y=null;if(je){e=a.latestPendingTime;f=a.latestSuspendedTime;g=a.latestPingedTime;if(0!==e&&e<d||0!==f&&f<d||0!==g&&g<d){Vf(a,d);re(a,c,d,a.expirationTime,-1);return}if(!a.didError&&b){a.didError=!0;d=a.nextExpirationTimeToWorkOn=d;b=a.expirationTime=1073741823;re(a,c,d,b,-1);return}}b&&-1!==La?(Vf(a,d),b=10*(1073741822-Wf(a,d)),b<La&&(La=b),b=10*(1073741822-ka()),b=La-b,re(a,c,d,a.expirationTime,0>b?0:b)):(a.pendingCommitExpirationTime=\nd,a.finishedWork=c)}}function Ka(a,b){for(var c=a.return;null!==c;){switch(c.tag){case 1:var d=c.stateNode;if(\"function\"===typeof c.type.getDerivedStateFromError||\"function\"===typeof d.componentDidCatch&&(null===Ba||!Ba.has(d))){a=Hc(b,a);a=Ig(c,a,1073741823);na(c,a);ya(c,1073741823);return}break;case 3:a=Hc(b,a);a=he(c,a,1073741823);na(c,a);ya(c,1073741823);return}c=c.return}3===a.tag&&(c=Hc(b,a),c=he(a,c,1073741823),na(a,c),ya(a,1073741823))}function fb(a,b){var c=zi(),d=void 0;if(0===(b.mode&1))d=\n1073741823;else if(Ca&&!Lc)d=H;else{switch(c){case se:d=1073741823;break;case te:d=1073741822-10*(((1073741822-a+15)/10|0)+1);break;case Lg:d=1073741822-25*(((1073741822-a+500)/25|0)+1);break;case Ai:case Bi:d=1;break;default:n(\"313\")}null!==Y&&d===H&&--d}c===te&&(0===oa||d<oa)&&(oa=d);return d}function yi(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);if(null!==Y&&H===c)Y=null;else if(b=a.earliestSuspendedTime,d=a.latestSuspendedTime,0!==b&&c<=b&&c>=d){a.didError=!1;b=a.latestPingedTime;if(0===b||\nb>c)a.latestPingedTime=c;xc(c,a);c=a.expirationTime;0!==c&&Kc(a,c)}}function li(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=ka();b=fb(b,a);a=Sg(a,b);null!==a&&(Bb(a,b),b=a.expirationTime,0!==b&&Kc(a,b))}function Sg(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<\nb&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return}return e}function ya(a,b){a=Sg(a,b);null!==a&&(!Ca&&0!==H&&b>H&&Jg(),Bb(a,b),Ca&&!Lc&&Y===a||Kc(a,a.expirationTime),Tb>Ci&&(Tb=0,n(\"185\")))}function Tg(a,b,c,d,e){return Mc(se,function(){return a(b,c,d,e)})}function Ub(){aa=1073741822-((ue()-ve)/10|0)}function Ug(a,b){if(0!==Oc){if(b<Oc)return;null!==Pc&&Vg(Pc)}Oc=b;a=ue()-ve;Pc=Wg(Di,{timeout:10*(1073741822-b)-a})}function re(a,b,c,d,e){a.expirationTime=d;\n0!==e||Nc()?0<e&&(a.timeoutHandle=Ei(Fi.bind(null,a,b,c),e)):(a.pendingCommitExpirationTime=c,a.finishedWork=b)}function Fi(a,b,c){a.pendingCommitExpirationTime=c;a.finishedWork=b;Ub();jb=aa;Xg(a,c)}function wi(a,b){a.expirationTime=b;a.finishedWork=null}function ka(){if(w)return jb;Qc();if(0===C||1===C)Ub(),jb=aa;return jb}function Kc(a,b){null===a.nextScheduledRoot?(a.expirationTime=b,null===I?(ba=I=a,a.nextScheduledRoot=a):(I=I.nextScheduledRoot=a,I.nextScheduledRoot=ba)):b>a.expirationTime&&(a.expirationTime=\nb);w||(z?Rc&&(ca=a,C=1073741823,Sc(a,1073741823,!1)):1073741823===b?Z(1073741823,!1):Ug(a,b))}function Qc(){var a=0,b=null;if(null!==I)for(var c=I,d=ba;null!==d;){var e=d.expirationTime;if(0===e){null===c||null===I?n(\"244\"):void 0;if(d===d.nextScheduledRoot){ba=I=d.nextScheduledRoot=null;break}else if(d===ba)ba=e=d.nextScheduledRoot,I.nextScheduledRoot=e,d.nextScheduledRoot=null;else if(d===I){I=c;I.nextScheduledRoot=ba;d.nextScheduledRoot=null;break}else c.nextScheduledRoot=d.nextScheduledRoot,d.nextScheduledRoot=\nnull;d=c.nextScheduledRoot}else{e>a&&(a=e,b=d);if(d===I)break;if(1073741823===a)break;c=d;d=d.nextScheduledRoot}}ca=b;C=a}function Nc(){return Tc?!0:Gi()?Tc=!0:!1}function Di(){try{if(!Nc()&&null!==ba){Ub();var a=ba;do{var b=a.expirationTime;0!==b&&aa<=b&&(a.nextExpirationTimeToWorkOn=aa);a=a.nextScheduledRoot}while(a!==ba)}Z(0,!0)}finally{Tc=!1}}function Z(a,b){Qc();if(b)for(Ub(),jb=aa;null!==ca&&0!==C&&a<=C&&!(Tc&&aa>C);)Sc(ca,C,aa>C),Qc(),Ub(),jb=aa;else for(;null!==ca&&0!==C&&a<=C;)Sc(ca,C,!1),\nQc();b&&(Oc=0,Pc=null);0!==C&&Ug(ca,C);Tb=0;we=null;if(null!==kb)for(a=kb,kb=null,b=0;b<a.length;b++){var c=a[b];try{c._onComplete()}catch(d){lb||(lb=!0,Uc=d)}}if(lb)throw a=Uc,Uc=null,lb=!1,a;}function Xg(a,b){w?n(\"253\"):void 0;ca=a;C=b;Sc(a,b,!1);Z(1073741823,!1)}function Sc(a,b,c){w?n(\"245\"):void 0;w=!0;if(c){var d=a.finishedWork;null!==d?Vc(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Yg(d)),Rg(a,c),d=a.finishedWork,null!==d&&(Nc()?a.finishedWork=d:Vc(a,d,b)))}else d=\na.finishedWork,null!==d?Vc(a,d,b):(a.finishedWork=null,d=a.timeoutHandle,-1!==d&&(a.timeoutHandle=-1,Yg(d)),Rg(a,c),d=a.finishedWork,null!==d&&Vc(a,d,b));w=!1}function Vc(a,b,c){var d=a.firstBatch;if(null!==d&&d._expirationTime>=c&&(null===kb?kb=[d]:kb.push(d),d._defer)){a.finishedWork=b;a.expirationTime=0;return}a.finishedWork=null;a===we?Tb++:(we=a,Tb=0);Mc(se,function(){ui(a,b)})}function ie(a){null===ca?n(\"246\"):void 0;ca.expirationTime=0;lb||(lb=!0,Uc=a)}function Zg(a,b){var c=z;z=!0;try{return a(b)}finally{(z=\nc)||w||Z(1073741823,!1)}}function $g(a,b){if(z&&!Rc){Rc=!0;try{return a(b)}finally{Rc=!1}}return a(b)}function ah(a,b,c){z||w||0===oa||(Z(oa,!1),oa=0);var d=z;z=!0;try{return Mc(te,function(){return a(b,c)})}finally{(z=d)||w||Z(1073741823,!1)}}function bh(a,b,c,d,e){var f=b.current;a:if(c){c=c._reactInternalFiber;b:{2===wb(c)&&1===c.tag?void 0:n(\"170\");var g=c;do{switch(g.tag){case 3:g=g.stateNode.context;break b;case 1:if(E(g.type)){g=g.stateNode.__reactInternalMemoizedMergedChildContext;break b}}g=\ng.return}while(null!==g);n(\"171\");g=void 0}if(1===c.tag){var h=c.type;if(E(h)){c=Rf(c,h,g);break a}}c=g}else c=va;null===b.context?b.context=c:b.pendingContext=c;b=e;e=Aa(d);e.payload={element:a};b=void 0===b?null:b;null!==b&&(e.callback=b);eb();na(f,e);ya(f,d);return d}function xe(a,b,c,d){var e=b.current,f=ka();e=fb(f,e);return bh(a,b,c,e,d)}function ye(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Hi(a,b,c){var d=\n3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:Va,key:null==d?null:\"\"+d,children:a,containerInfo:b,implementation:c}}function Vb(a){var b=1073741822-25*(((1073741822-ka()+500)/25|0)+1);b>=ze&&(b=ze-1);this._expirationTime=ze=b;this._root=a;this._callbacks=this._next=null;this._hasChildren=this._didComplete=!1;this._children=null;this._defer=!0}function mb(){this._callbacks=null;this._didCommit=!1;this._onCommit=this._onCommit.bind(this)}function nb(a,b,c){b=S(3,null,null,\nb?3:0);a={current:b,containerInfo:a,pendingChildren:null,pingCache:null,earliestPendingTime:0,latestPendingTime:0,earliestSuspendedTime:0,latestSuspendedTime:0,latestPingedTime:0,didError:!1,pendingCommitExpirationTime:0,finishedWork:null,timeoutHandle:-1,context:null,pendingContext:null,hydrate:c,nextExpirationTimeToWorkOn:0,expirationTime:0,firstBatch:null,nextScheduledRoot:null};this._internalRoot=b.stateNode=a}function ob(a){return!(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||\n\" react-mount-point-unstable \"!==a.nodeValue))}function Ii(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute(\"data-reactroot\")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new nb(a,!1,b)}function Wc(a,b,c,d,e){var f=c._reactRootContainer;if(f){if(\"function\"===typeof e){var g=e;e=function(){var a=ye(f._internalRoot);g.call(a)}}null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)}else{f=c._reactRootContainer=Ii(c,d);if(\"function\"===\ntypeof e){var h=e;e=function(){var a=ye(f._internalRoot);h.call(a)}}$g(function(){null!=a?f.legacy_renderSubtreeIntoContainer(a,b,e):f.render(b,e)})}return ye(f._internalRoot)}function ch(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;ob(b)?void 0:n(\"200\");return Hi(a,b,null,c)}da?void 0:n(\"227\");var sh=function(a,b,c,d,e,f,g,h,l){var k=Array.prototype.slice.call(arguments,3);try{b.apply(c,k)}catch(m){this.onError(m)}},qb=!1,$b=null,ac=!1,Yc=null,th={onError:function(a){qb=\n!0;$b=a}},bc=null,Na={},cc=[],Zc={},Oa={},$c={},bd=null,Ue=null,He=null,rb=null,vh=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)Ge(a,b[d],c[d]);else b&&Ge(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a)}},Ae={injectEventPluginOrder:function(a){bc?n(\"101\"):void 0;bc=Array.prototype.slice.call(a);Ee()},injectEventPluginsByName:function(a){var b=!1,c;\nfor(c in a)if(a.hasOwnProperty(c)){var d=a[c];Na.hasOwnProperty(c)&&Na[c]===d||(Na[c]?n(\"102\",c):void 0,Na[c]=d,b=!0)}b&&Ee()}},dh=Math.random().toString(36).slice(2),ea=\"__reactInternalInstance$\"+dh,ec=\"__reactEventHandlers$\"+dh,ra=!(\"undefined\"===typeof window||!window.document||!window.document.createElement),Ra={animationend:fc(\"Animation\",\"AnimationEnd\"),animationiteration:fc(\"Animation\",\"AnimationIteration\"),animationstart:fc(\"Animation\",\"AnimationStart\"),transitionend:fc(\"Transition\",\"TransitionEnd\")},\nfd={},Le={};ra&&(Le=document.createElement(\"div\").style,\"AnimationEvent\"in window||(delete Ra.animationend.animation,delete Ra.animationiteration.animation,delete Ra.animationstart.animation),\"TransitionEvent\"in window||delete Ra.transitionend.transition);var eh=gc(\"animationend\"),fh=gc(\"animationiteration\"),gh=gc(\"animationstart\"),hh=gc(\"transitionend\"),zb=\"abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting\".split(\" \"),\nqa=null,gd=null,hc=null,B=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign;B(J.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():\"unknown\"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():\"unknown\"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){this.isPersistent=\nic},isPersistent:jc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=jc;this._dispatchInstances=this._dispatchListeners=null}});J.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};J.extend=function(a){function b(){return c.apply(this,\narguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;B(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=B({},c.Interface,a);b.extend=c.extend;Ne(b);return b};Ne(J);var Ji=J.extend({data:null}),Ki=J.extend({data:null}),Ah=[9,13,27,32],hd=ra&&\"CompositionEvent\"in window,Wb=null;ra&&\"documentMode\"in document&&(Wb=document.documentMode);var Li=ra&&\"TextEvent\"in window&&!Wb,Se=ra&&(!hd||Wb&&8<Wb&&11>=Wb),Re=String.fromCharCode(32),pa={beforeInput:{phasedRegistrationNames:{bubbled:\"onBeforeInput\",\ncaptured:\"onBeforeInputCapture\"},dependencies:[\"compositionend\",\"keypress\",\"textInput\",\"paste\"]},compositionEnd:{phasedRegistrationNames:{bubbled:\"onCompositionEnd\",captured:\"onCompositionEndCapture\"},dependencies:\"blur compositionend keydown keypress keyup mousedown\".split(\" \")},compositionStart:{phasedRegistrationNames:{bubbled:\"onCompositionStart\",captured:\"onCompositionStartCapture\"},dependencies:\"blur compositionstart keydown keypress keyup mousedown\".split(\" \")},compositionUpdate:{phasedRegistrationNames:{bubbled:\"onCompositionUpdate\",\ncaptured:\"onCompositionUpdateCapture\"},dependencies:\"blur compositionupdate keydown keypress keyup mousedown\".split(\" \")}},Qe=!1,Sa=!1,Mi={eventTypes:pa,extractEvents:function(a,b,c,d){var e=void 0;var f=void 0;if(hd)b:{switch(a){case \"compositionstart\":e=pa.compositionStart;break b;case \"compositionend\":e=pa.compositionEnd;break b;case \"compositionupdate\":e=pa.compositionUpdate;break b}e=void 0}else Sa?Oe(a,c)&&(e=pa.compositionEnd):\"keydown\"===a&&229===c.keyCode&&(e=pa.compositionStart);e?(Se&&\n\"ko\"!==c.locale&&(Sa||e!==pa.compositionStart?e===pa.compositionEnd&&Sa&&(f=Me()):(qa=d,gd=\"value\"in qa?qa.value:qa.textContent,Sa=!0)),e=Ji.getPooled(e,b,c,d),f?e.data=f:(f=Pe(c),null!==f&&(e.data=f)),Qa(e),f=e):f=null;(a=Li?Bh(a,c):Ch(a,c))?(b=Ki.getPooled(pa.beforeInput,b,c,d),b.data=a,Qa(b)):b=null;return null===f?b:null===b?f:[f,b]}},id=null,Ta=null,Ua=null,Ye=function(a,b){return a(b)},yf=function(a,b,c){return a(b,c)},Ze=function(){},jd=!1,Dh={color:!0,date:!0,datetime:!0,\"datetime-local\":!0,\nemail:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ma=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;Ma.hasOwnProperty(\"ReactCurrentDispatcher\")||(Ma.ReactCurrentDispatcher={current:null});var Fh=/^(.*)[\\\\\\/]/,O=\"function\"===typeof Symbol&&Symbol.for,Bc=O?Symbol.for(\"react.element\"):60103,Va=O?Symbol.for(\"react.portal\"):60106,ta=O?Symbol.for(\"react.fragment\"):60107,md=O?Symbol.for(\"react.strict_mode\"):60108,lc=O?Symbol.for(\"react.profiler\"):60114,\nff=O?Symbol.for(\"react.provider\"):60109,ef=O?Symbol.for(\"react.context\"):60110,ld=O?Symbol.for(\"react.concurrent_mode\"):60111,od=O?Symbol.for(\"react.forward_ref\"):60112,nd=O?Symbol.for(\"react.suspense\"):60113,pd=O?Symbol.for(\"react.memo\"):60115,gf=O?Symbol.for(\"react.lazy\"):60116,df=\"function\"===typeof Symbol&&Symbol.iterator,Hh=/^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$/,\nhf=Object.prototype.hasOwnProperty,kf={},jf={},A={};\"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style\".split(\" \").forEach(function(a){A[a]=new K(a,0,!1,a,null)});[[\"acceptCharset\",\"accept-charset\"],[\"className\",\"class\"],[\"htmlFor\",\"for\"],[\"httpEquiv\",\"http-equiv\"]].forEach(function(a){var b=a[0];A[b]=new K(b,1,!1,a[1],null)});[\"contentEditable\",\"draggable\",\"spellCheck\",\"value\"].forEach(function(a){A[a]=new K(a,2,!1,\na.toLowerCase(),null)});[\"autoReverse\",\"externalResourcesRequired\",\"focusable\",\"preserveAlpha\"].forEach(function(a){A[a]=new K(a,2,!1,a,null)});\"allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope\".split(\" \").forEach(function(a){A[a]=new K(a,3,!1,a.toLowerCase(),null)});[\"checked\",\"multiple\",\"muted\",\"selected\"].forEach(function(a){A[a]=new K(a,3,!0,a,null)});[\"capture\",\n\"download\"].forEach(function(a){A[a]=new K(a,4,!1,a,null)});[\"cols\",\"rows\",\"size\",\"span\"].forEach(function(a){A[a]=new K(a,6,!1,a,null)});[\"rowSpan\",\"start\"].forEach(function(a){A[a]=new K(a,5,!1,a.toLowerCase(),null)});var Be=/[\\-:]([a-z])/g,Ce=function(a){return a[1].toUpperCase()};\"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height\".split(\" \").forEach(function(a){var b=\na.replace(Be,Ce);A[b]=new K(b,1,!1,a,null)});\"xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type\".split(\" \").forEach(function(a){var b=a.replace(Be,Ce);A[b]=new K(b,1,!1,a,\"http://www.w3.org/1999/xlink\")});[\"xml:base\",\"xml:lang\",\"xml:space\"].forEach(function(a){var b=a.replace(Be,Ce);A[b]=new K(b,1,!1,a,\"http://www.w3.org/XML/1998/namespace\")});[\"tabIndex\",\"crossOrigin\"].forEach(function(a){A[a]=new K(a,1,!1,a.toLowerCase(),null)});var pf={change:{phasedRegistrationNames:{bubbled:\"onChange\",\ncaptured:\"onChangeCapture\"},dependencies:\"blur change click focus input keydown keyup selectionchange\".split(\" \")}},tb=null,ub=null,De=!1;ra&&(De=af(\"input\")&&(!document.documentMode||9<document.documentMode));var Ni={eventTypes:pf,_isInputEventSupported:De,extractEvents:function(a,b,c,d){var e=b?Da(b):window,f=void 0,g=void 0,h=e.nodeName&&e.nodeName.toLowerCase();\"select\"===h||\"input\"===h&&\"file\"===e.type?f=Lh:$e(e)?De?f=Ph:(f=Nh,g=Mh):(h=e.nodeName)&&\"input\"===h.toLowerCase()&&(\"checkbox\"===e.type||\n\"radio\"===e.type)&&(f=Oh);if(f&&(f=f(a,b)))return of(f,c,d);g&&g(a,e,b);\"blur\"===a&&(a=e._wrapperState)&&a.controlled&&\"number\"===e.type&&ud(e,\"number\",e.value)}},Xb=J.extend({view:null,detail:null}),Rh={Alt:\"altKey\",Control:\"ctrlKey\",Meta:\"metaKey\",Shift:\"shiftKey\"},ih=0,jh=0,kh=!1,lh=!1,Yb=Xb.extend({screenX:null,screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:vd,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||\n(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if(\"movementX\"in a)return a.movementX;var b=ih;ih=a.screenX;return kh?\"mousemove\"===a.type?a.screenX-b:0:(kh=!0,0)},movementY:function(a){if(\"movementY\"in a)return a.movementY;var b=jh;jh=a.screenY;return lh?\"mousemove\"===a.type?a.screenY-b:0:(lh=!0,0)}}),mh=Yb.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),Zb={mouseEnter:{registrationName:\"onMouseEnter\",\ndependencies:[\"mouseout\",\"mouseover\"]},mouseLeave:{registrationName:\"onMouseLeave\",dependencies:[\"mouseout\",\"mouseover\"]},pointerEnter:{registrationName:\"onPointerEnter\",dependencies:[\"pointerout\",\"pointerover\"]},pointerLeave:{registrationName:\"onPointerLeave\",dependencies:[\"pointerout\",\"pointerover\"]}},Oi={eventTypes:Zb,extractEvents:function(a,b,c,d){var e=\"mouseover\"===a||\"pointerover\"===a,f=\"mouseout\"===a||\"pointerout\"===a;if(e&&(c.relatedTarget||c.fromElement)||!f&&!e)return null;e=d.window===\nd?d:(e=d.ownerDocument)?e.defaultView||e.parentWindow:window;f?(f=b,b=(b=c.relatedTarget||c.toElement)?dc(b):null):f=null;if(f===b)return null;var g=void 0,h=void 0,l=void 0,k=void 0;if(\"mouseout\"===a||\"mouseover\"===a)g=Yb,h=Zb.mouseLeave,l=Zb.mouseEnter,k=\"mouse\";else if(\"pointerout\"===a||\"pointerover\"===a)g=mh,h=Zb.pointerLeave,l=Zb.pointerEnter,k=\"pointer\";var m=null==f?e:Da(f);e=null==b?e:Da(b);a=g.getPooled(h,f,c,d);a.type=k+\"leave\";a.target=m;a.relatedTarget=e;c=g.getPooled(l,b,c,d);c.type=\nk+\"enter\";c.target=e;c.relatedTarget=m;d=b;if(f&&d)a:{b=f;e=d;k=0;for(g=b;g;g=fa(g))k++;g=0;for(l=e;l;l=fa(l))g++;for(;0<k-g;)b=fa(b),k--;for(;0<g-k;)e=fa(e),g--;for(;k--;){if(b===e||b===e.alternate)break a;b=fa(b);e=fa(e)}b=null}else b=null;e=b;for(b=[];f&&f!==e;){k=f.alternate;if(null!==k&&k===e)break;b.push(f);f=fa(f)}for(f=[];d&&d!==e;){k=d.alternate;if(null!==k&&k===e)break;f.push(d);d=fa(d)}for(d=0;d<b.length;d++)ed(b[d],\"bubbled\",a);for(d=f.length;0<d--;)ed(f[d],\"captured\",c);return[a,c]}},\nSh=Object.prototype.hasOwnProperty,Pi=J.extend({animationName:null,elapsedTime:null,pseudoElement:null}),Qi=J.extend({clipboardData:function(a){return\"clipboardData\"in a?a.clipboardData:window.clipboardData}}),Ri=Xb.extend({relatedTarget:null}),Si={Esc:\"Escape\",Spacebar:\" \",Left:\"ArrowLeft\",Up:\"ArrowUp\",Right:\"ArrowRight\",Down:\"ArrowDown\",Del:\"Delete\",Win:\"OS\",Menu:\"ContextMenu\",Apps:\"ContextMenu\",Scroll:\"ScrollLock\",MozPrintableKey:\"Unidentified\"},Ti={8:\"Backspace\",9:\"Tab\",12:\"Clear\",13:\"Enter\",\n16:\"Shift\",17:\"Control\",18:\"Alt\",19:\"Pause\",20:\"CapsLock\",27:\"Escape\",32:\" \",33:\"PageUp\",34:\"PageDown\",35:\"End\",36:\"Home\",37:\"ArrowLeft\",38:\"ArrowUp\",39:\"ArrowRight\",40:\"ArrowDown\",45:\"Insert\",46:\"Delete\",112:\"F1\",113:\"F2\",114:\"F3\",115:\"F4\",116:\"F5\",117:\"F6\",118:\"F7\",119:\"F8\",120:\"F9\",121:\"F10\",122:\"F11\",123:\"F12\",144:\"NumLock\",145:\"ScrollLock\",224:\"Meta\"},Ui=Xb.extend({key:function(a){if(a.key){var b=Si[a.key]||a.key;if(\"Unidentified\"!==b)return b}return\"keypress\"===a.type?(a=nc(a),13===a?\"Enter\":\nString.fromCharCode(a)):\"keydown\"===a.type||\"keyup\"===a.type?Ti[a.keyCode]||\"Unidentified\":\"\"},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:vd,charCode:function(a){return\"keypress\"===a.type?nc(a):0},keyCode:function(a){return\"keydown\"===a.type||\"keyup\"===a.type?a.keyCode:0},which:function(a){return\"keypress\"===a.type?nc(a):\"keydown\"===a.type||\"keyup\"===a.type?a.keyCode:0}}),Vi=Yb.extend({dataTransfer:null}),Wi=Xb.extend({touches:null,targetTouches:null,\nchangedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:vd}),Xi=J.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),Yi=Yb.extend({deltaX:function(a){return\"deltaX\"in a?a.deltaX:\"wheelDeltaX\"in a?-a.wheelDeltaX:0},deltaY:function(a){return\"deltaY\"in a?a.deltaY:\"wheelDeltaY\"in a?-a.wheelDeltaY:\"wheelDelta\"in a?-a.wheelDelta:0},deltaZ:null,deltaMode:null}),Zi=[[\"abort\",\"abort\"],[eh,\"animationEnd\"],[fh,\"animationIteration\"],[gh,\"animationStart\"],[\"canplay\",\n\"canPlay\"],[\"canplaythrough\",\"canPlayThrough\"],[\"drag\",\"drag\"],[\"dragenter\",\"dragEnter\"],[\"dragexit\",\"dragExit\"],[\"dragleave\",\"dragLeave\"],[\"dragover\",\"dragOver\"],[\"durationchange\",\"durationChange\"],[\"emptied\",\"emptied\"],[\"encrypted\",\"encrypted\"],[\"ended\",\"ended\"],[\"error\",\"error\"],[\"gotpointercapture\",\"gotPointerCapture\"],[\"load\",\"load\"],[\"loadeddata\",\"loadedData\"],[\"loadedmetadata\",\"loadedMetadata\"],[\"loadstart\",\"loadStart\"],[\"lostpointercapture\",\"lostPointerCapture\"],[\"mousemove\",\"mouseMove\"],\n[\"mouseout\",\"mouseOut\"],[\"mouseover\",\"mouseOver\"],[\"playing\",\"playing\"],[\"pointermove\",\"pointerMove\"],[\"pointerout\",\"pointerOut\"],[\"pointerover\",\"pointerOver\"],[\"progress\",\"progress\"],[\"scroll\",\"scroll\"],[\"seeking\",\"seeking\"],[\"stalled\",\"stalled\"],[\"suspend\",\"suspend\"],[\"timeupdate\",\"timeUpdate\"],[\"toggle\",\"toggle\"],[\"touchmove\",\"touchMove\"],[hh,\"transitionEnd\"],[\"waiting\",\"waiting\"],[\"wheel\",\"wheel\"]],vf={},wd={};[[\"blur\",\"blur\"],[\"cancel\",\"cancel\"],[\"click\",\"click\"],[\"close\",\"close\"],[\"contextmenu\",\n\"contextMenu\"],[\"copy\",\"copy\"],[\"cut\",\"cut\"],[\"auxclick\",\"auxClick\"],[\"dblclick\",\"doubleClick\"],[\"dragend\",\"dragEnd\"],[\"dragstart\",\"dragStart\"],[\"drop\",\"drop\"],[\"focus\",\"focus\"],[\"input\",\"input\"],[\"invalid\",\"invalid\"],[\"keydown\",\"keyDown\"],[\"keypress\",\"keyPress\"],[\"keyup\",\"keyUp\"],[\"mousedown\",\"mouseDown\"],[\"mouseup\",\"mouseUp\"],[\"paste\",\"paste\"],[\"pause\",\"pause\"],[\"play\",\"play\"],[\"pointercancel\",\"pointerCancel\"],[\"pointerdown\",\"pointerDown\"],[\"pointerup\",\"pointerUp\"],[\"ratechange\",\"rateChange\"],[\"reset\",\n\"reset\"],[\"seeked\",\"seeked\"],[\"submit\",\"submit\"],[\"touchcancel\",\"touchCancel\"],[\"touchend\",\"touchEnd\"],[\"touchstart\",\"touchStart\"],[\"volumechange\",\"volumeChange\"]].forEach(function(a){uf(a,!0)});Zi.forEach(function(a){uf(a,!1)});var nh={eventTypes:vf,isInteractiveTopLevelEventType:function(a){a=wd[a];return void 0!==a&&!0===a.isInteractive},extractEvents:function(a,b,c,d){var e=wd[a];if(!e)return null;switch(a){case \"keypress\":if(0===nc(c))return null;case \"keydown\":case \"keyup\":a=Ui;break;case \"blur\":case \"focus\":a=\nRi;break;case \"click\":if(2===c.button)return null;case \"auxclick\":case \"dblclick\":case \"mousedown\":case \"mousemove\":case \"mouseup\":case \"mouseout\":case \"mouseover\":case \"contextmenu\":a=Yb;break;case \"drag\":case \"dragend\":case \"dragenter\":case \"dragexit\":case \"dragleave\":case \"dragover\":case \"dragstart\":case \"drop\":a=Vi;break;case \"touchcancel\":case \"touchend\":case \"touchmove\":case \"touchstart\":a=Wi;break;case eh:case fh:case gh:a=Pi;break;case hh:a=Xi;break;case \"scroll\":a=Xb;break;case \"wheel\":a=\nYi;break;case \"copy\":case \"cut\":case \"paste\":a=Qi;break;case \"gotpointercapture\":case \"lostpointercapture\":case \"pointercancel\":case \"pointerdown\":case \"pointermove\":case \"pointerout\":case \"pointerover\":case \"pointerup\":a=mh;break;default:a=J}b=a.getPooled(e,b,c,d);Qa(b);return b}},wf=nh.isInteractiveTopLevelEventType,rc=[],qc=!0,Af={},Vh=0,sc=\"_reactListenersID\"+(\"\"+Math.random()).slice(2),$i=ra&&\"documentMode\"in document&&11>=document.documentMode,Hf={select:{phasedRegistrationNames:{bubbled:\"onSelect\",\ncaptured:\"onSelectCapture\"},dependencies:\"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange\".split(\" \")}},Wa=null,Ad=null,xb=null,zd=!1,aj={eventTypes:Hf,extractEvents:function(a,b,c,d){var e=d.window===d?d.document:9===d.nodeType?d:d.ownerDocument,f;if(!(f=!e)){a:{e=zf(e);f=$c.onSelect;for(var g=0;g<f.length;g++){var h=f[g];if(!e.hasOwnProperty(h)||!e[h]){e=!1;break a}}e=!0}f=!e}if(f)return null;e=b?Da(b):window;switch(a){case \"focus\":if($e(e)||\"true\"===e.contentEditable)Wa=\ne,Ad=b,xb=null;break;case \"blur\":xb=Ad=Wa=null;break;case \"mousedown\":zd=!0;break;case \"contextmenu\":case \"mouseup\":case \"dragend\":return zd=!1,Gf(c,d);case \"selectionchange\":if($i)break;case \"keydown\":case \"keyup\":return Gf(c,d)}return null}};Ae.injectEventPluginOrder(\"ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin\".split(\" \"));(function(a,b,c){bd=a;Ue=b;He=c})(dd,Je,Da);Ae.injectEventPluginsByName({SimpleEventPlugin:nh,EnterLeaveEventPlugin:Oi,\nChangeEventPlugin:Ni,SelectEventPlugin:aj,BeforeInputEventPlugin:Mi});var Xc=void 0,Of=function(a){return\"undefined\"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)})}:a}(function(a,b){if(\"http://www.w3.org/2000/svg\"!==a.namespaceURI||\"innerHTML\"in a)a.innerHTML=b;else{Xc=Xc||document.createElement(\"div\");Xc.innerHTML=\"<svg>\"+b+\"</svg>\";for(b=Xc.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild)}}),\nAb=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b},yb={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,\nlineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},bj=[\"Webkit\",\"ms\",\"Moz\",\"O\"];Object.keys(yb).forEach(function(a){bj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);yb[b]=yb[a]})});var Zh=B({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,\nsource:!0,track:!0,wbr:!0}),R=da.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Vg=R.unstable_cancelCallback,ue=R.unstable_now,Wg=R.unstable_scheduleCallback,Gi=R.unstable_shouldYield,Mc=R.unstable_runWithPriority,zi=R.unstable_getCurrentPriorityLevel,se=R.unstable_ImmediatePriority,te=R.unstable_UserBlockingPriority,Lg=R.unstable_NormalPriority,Ai=R.unstable_LowPriority,Bi=R.unstable_IdlePriority,ne=null,oe=null,Ei=\"function\"===typeof setTimeout?setTimeout:void 0,Yg=\"function\"===typeof clearTimeout?\nclearTimeout:void 0,vi=Wg,ti=Vg;new Set;var Id=[],Ya=-1,va={},F={current:va},M={current:!1},Fa=va,Kd=null,Ld=null,S=function(a,b,c,d){return new bi(a,b,c,d)},$f=(new da.Component).refs,zc={isMounted:function(a){return(a=a._reactInternalFiber)?2===wb(a):!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ka();d=fb(d,a);var e=Aa(d);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);eb();na(a,e);ya(a,d)},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ka();d=fb(d,a);var e=\nAa(d);e.tag=yg;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);eb();na(a,e);ya(a,d)},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ka();c=fb(c,a);var d=Aa(c);d.tag=Ec;void 0!==b&&null!==b&&(d.callback=b);eb();na(a,d);ya(a,c)}},Cc=Array.isArray,hb=ag(!0),ae=ag(!1),Eb={},U={current:Eb},Gb={current:Eb},Fb={current:Eb},db=0,pi=2,Rb=4,ji=8,ri=16,Sb=32,me=64,le=128,Dc=Ma.ReactCurrentDispatcher,Hb=0,xa=null,y=null,W=null,bb=null,G=null,ab=null,Kb=0,X=null,Lb=0,Ib=!1,ia=null,Jb=0,Ud={readContext:T,\nuseCallback:V,useContext:V,useEffect:V,useImperativeHandle:V,useLayoutEffect:V,useMemo:V,useReducer:V,useRef:V,useState:V,useDebugValue:V},fi={readContext:T,useCallback:function(a,b){cb().memoizedState=[a,void 0===b?null:b];return a},useContext:T,useEffect:function(a,b){return Xd(516,le|me,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Xd(4,Rb|Sb,fg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Xd(4,Rb|Sb,a,b)},useMemo:function(a,b){var c=cb();\nb=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=cb();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={last:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=hg.bind(null,xa,a);return[d.memoizedState,a]},useRef:function(a){var b=cb();a={current:a};return b.memoizedState=a},useState:function(a){var b=cb();\"function\"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={last:null,dispatch:null,lastRenderedReducer:dg,\nlastRenderedState:a};a=a.dispatch=hg.bind(null,xa,a);return[b.memoizedState,a]},useDebugValue:gg},cg={readContext:T,useCallback:function(a,b){var c=Mb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Sd(b,d[1]))return d[0];c.memoizedState=[a,b];return a},useContext:T,useEffect:function(a,b){return Yd(516,le|me,a,b)},useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return Yd(4,Rb|Sb,fg.bind(null,b,a),c)},useLayoutEffect:function(a,b){return Yd(4,Rb|Sb,\na,b)},useMemo:function(a,b){var c=Mb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Sd(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a},useReducer:eg,useRef:function(a){return Mb().memoizedState},useState:function(a){return eg(dg,a)},useDebugValue:gg},la=null,gb=null,Ia=!1,gi=Ma.ReactCurrentOwner,ja=!1,de={current:null},Nb=null,Ja=null,Ob=null,ug=0,yg=1,Ec=2,ge=3,za=!1,Og=void 0,pe=void 0,Ng=void 0,Pg=void 0;Og=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||\n6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return}c.sibling.return=c.return;c=c.sibling}};pe=function(a){};Ng=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Ha(U.current);a=null;switch(c){case \"input\":f=sd(g,f);d=sd(g,d);a=[];break;case \"option\":f=Bd(g,f);d=Bd(g,d);a=[];break;case \"select\":f=B({},f,{value:void 0});d=B({},d,{value:void 0});\na=[];break;case \"textarea\":f=Cd(g,f);d=Cd(g,d);a=[];break;default:\"function\"!==typeof f.onClick&&\"function\"===typeof d.onClick&&(g.onclick=tc)}Ed(c,d);g=c=void 0;var h=null;for(c in f)if(!d.hasOwnProperty(c)&&f.hasOwnProperty(c)&&null!=f[c])if(\"style\"===c){var l=f[c];for(g in l)l.hasOwnProperty(g)&&(h||(h={}),h[g]=\"\")}else\"dangerouslySetInnerHTML\"!==c&&\"children\"!==c&&\"suppressContentEditableWarning\"!==c&&\"suppressHydrationWarning\"!==c&&\"autoFocus\"!==c&&(Oa.hasOwnProperty(c)?a||(a=[]):(a=a||[]).push(c,\nnull));for(c in d){var k=d[c];l=null!=f?f[c]:void 0;if(d.hasOwnProperty(c)&&k!==l&&(null!=k||null!=l))if(\"style\"===c)if(l){for(g in l)!l.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(h||(h={}),h[g]=\"\");for(g in k)k.hasOwnProperty(g)&&l[g]!==k[g]&&(h||(h={}),h[g]=k[g])}else h||(a||(a=[]),a.push(c,h)),h=k;else\"dangerouslySetInnerHTML\"===c?(k=k?k.__html:void 0,l=l?l.__html:void 0,null!=k&&l!==k&&(a=a||[]).push(c,\"\"+k)):\"children\"===c?l===k||\"string\"!==typeof k&&\"number\"!==typeof k||(a=a||[]).push(c,\"\"+\nk):\"suppressContentEditableWarning\"!==c&&\"suppressHydrationWarning\"!==c&&(Oa.hasOwnProperty(c)?(null!=k&&ha(e,c),a||l===k||(a=[])):(a=a||[]).push(c,k))}h&&(a=a||[]).push(\"style\",h);e=a;(b.updateQueue=e)&&Pb(b)}};Pg=function(a,b,c,d){c!==d&&Pb(b)};var ki=\"function\"===typeof WeakSet?WeakSet:Set,xi=\"function\"===typeof WeakMap?WeakMap:Map,qe=Ma.ReactCurrentDispatcher,Kg=Ma.ReactCurrentOwner,ze=1073741822,Ca=!1,x=null,Y=null,H=0,La=-1,je=!1,p=null,Lc=!1,ke=null,Jc=null,Ic=null,Ba=null,ba=null,I=null,Oc=\n0,Pc=void 0,w=!1,ca=null,C=0,oa=0,lb=!1,Uc=null,z=!1,Rc=!1,kb=null,ve=ue(),aa=1073741822-(ve/10|0),jb=aa,Ci=50,Tb=0,we=null,Tc=!1;id=function(a,b,c){switch(b){case \"input\":td(a,c);b=c.name;if(\"radio\"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll(\"input[name=\"+JSON.stringify(\"\"+b)+'][type=\"radio\"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=dd(d);e?void 0:n(\"90\");cf(d);td(d,e)}}}break;case \"textarea\":Jf(a,c);break;case \"select\":b=c.value,null!=\nb&&Xa(a,!!c.multiple,b,!1)}};Vb.prototype.render=function(a){this._defer?void 0:n(\"250\");this._hasChildren=!0;this._children=a;var b=this._root._internalRoot,c=this._expirationTime,d=new mb;bh(a,b,null,c,d._onCommit);return d};Vb.prototype.then=function(a){if(this._didComplete)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};Vb.prototype.commit=function(){var a=this._root._internalRoot,b=a.firstBatch;this._defer&&null!==b?void 0:n(\"251\");if(this._hasChildren){var c=this._expirationTime;\nif(b!==this){this._hasChildren&&(c=this._expirationTime=b._expirationTime,this.render(this._children));for(var d=null,e=b;e!==this;)d=e,e=e._next;null===d?n(\"251\"):void 0;d._next=e._next;this._next=b;a.firstBatch=this}this._defer=!1;Xg(a,c);b=this._next;this._next=null;b=a.firstBatch=b;null!==b&&b._hasChildren&&b.render(b._children)}else this._next=null,this._defer=!1};Vb.prototype._onComplete=function(){if(!this._didComplete){this._didComplete=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++)(0,a[b])()}};\nmb.prototype.then=function(a){if(this._didCommit)a();else{var b=this._callbacks;null===b&&(b=this._callbacks=[]);b.push(a)}};mb.prototype._onCommit=function(){if(!this._didCommit){this._didCommit=!0;var a=this._callbacks;if(null!==a)for(var b=0;b<a.length;b++){var c=a[b];\"function\"!==typeof c?n(\"191\",c):void 0;c()}}};nb.prototype.render=function(a,b){var c=this._internalRoot,d=new mb;b=void 0===b?null:b;null!==b&&d.then(b);xe(a,c,null,d._onCommit);return d};nb.prototype.unmount=function(a){var b=\nthis._internalRoot,c=new mb;a=void 0===a?null:a;null!==a&&c.then(a);xe(null,b,null,c._onCommit);return c};nb.prototype.legacy_renderSubtreeIntoContainer=function(a,b,c){var d=this._internalRoot,e=new mb;c=void 0===c?null:c;null!==c&&e.then(c);xe(b,d,a,e._onCommit);return e};nb.prototype.createBatch=function(){var a=new Vb(this),b=a._expirationTime,c=this._internalRoot,d=c.firstBatch;if(null===d)c.firstBatch=a,a._next=null;else{for(c=null;null!==d&&d._expirationTime>=b;)c=d,d=d._next;a._next=d;null!==\nc&&(c._next=a)}return a};(function(a,b,c){Ye=a;yf=b;Ze=c})(Zg,ah,function(){w||0===oa||(Z(oa,!1),oa=0)});var oh={createPortal:ch,findDOMNode:function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;void 0===b&&(\"function\"===typeof a.render?n(\"188\"):n(\"268\",Object.keys(a)));a=tf(b);a=null===a?null:a.stateNode;return a},hydrate:function(a,b,c){ob(b)?void 0:n(\"200\");return Wc(null,a,b,!0,c)},render:function(a,b,c){ob(b)?void 0:n(\"200\");return Wc(null,a,b,!1,c)},unstable_renderSubtreeIntoContainer:function(a,\nb,c,d){ob(c)?void 0:n(\"200\");null==a||void 0===a._reactInternalFiber?n(\"38\"):void 0;return Wc(a,b,c,!1,d)},unmountComponentAtNode:function(a){ob(a)?void 0:n(\"40\");return a._reactRootContainer?($g(function(){Wc(null,null,a,!1,function(){a._reactRootContainer=null})}),!0):!1},unstable_createPortal:function(){return ch.apply(void 0,arguments)},unstable_batchedUpdates:Zg,unstable_interactiveUpdates:ah,flushSync:function(a,b){w?n(\"187\"):void 0;var c=z;z=!0;try{return Tg(a,b)}finally{z=c,Z(1073741823,!1)}},\nunstable_createRoot:function(a,b){ob(a)?void 0:n(\"299\",\"unstable_createRoot\");return new nb(a,!0,null!=b&&!0===b.hydrate)},unstable_flushControlled:function(a){var b=z;z=!0;try{Tg(a)}finally{(z=b)||w||Z(1073741823,!1)}},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{Events:[Je,Da,dd,Ae.injectEventPluginsByName,Zc,Qa,function(a){ad(a,xh)},Ve,We,oc,cd]}};(function(a){var b=a.findFiberByHostInstance;return ai(B({},a,{overrideProps:null,currentDispatcherRef:Ma.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=\ntf(a);return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null}}))})({findFiberByHostInstance:dc,bundleType:0,version:\"16.8.6\",rendererPackageName:\"react-dom\"});var ph={default:oh},qh=ph&&oh||ph;return qh.default||qh});\n"}
  </script>
  <script>
    // graphiql/graphiql.min.js
  </script>
</head>
<body>
  <div id="graphiql">Loading...</div>
  <script>
    // Collect the URL parameters
    var parameters = {};
    window.location.search.substr(1).split('&').forEach(function (entry) {
      var eq = entry.indexOf('=');
      if (eq >= 0) {
        parameters[decodeURIComponent(entry.slice(0, eq))] =
          decodeURIComponent(entry.slice(eq + 1));
      }
    });

    // Produce a Location query string from a parameter object.
    function locationQuery(params) {
      return '?' + Object.keys(params).filter(function (key) {
        return Boolean(params[key]);
      }).map(function (key) {
        return encodeURIComponent(key) + '=' +
          encodeURIComponent(params[key]);
      }).join('&');
    }

    // Derive a fetch URL from the current URL, sans the GraphQL parameters.
    var graphqlParamNames = {
      query: true,
      variables: true,
      operationName: true
    };

    var otherParams = {};
    for (var k in parameters) {
      if (parameters.hasOwnProperty(k) && graphqlParamNames[k] !== true) {
        otherParams[k] = parameters[k];
      }
    }
    var fetchURL = locationQuery(otherParams);

    // Defines a GraphQL fetcher using the fetch API.
    function graphQLFetcher(graphQLParams) {
      return fetch(fetchURL, {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(graphQLParams),
        credentials: 'include',
      }).then(function (response) {
        return response.json();
      });
    }

    // When the query and variables string is edited, update the URL bar so
    // that it can be easily shared.
    function onEditQuery(newQuery) {
      parameters.query = newQuery;
      updateURL();
    }

    function onEditVariables(newVariables) {
      parameters.variables = newVariables;
      updateURL();
    }

    function onEditOperationName(newOperationName) {
      parameters.operationName = newOperationName;
      updateURL();
    }

    function updateURL() {
      history.replaceState(null, null, locationQuery(parameters));
    }

    // Render <GraphiQL /> into the body.
    ReactDOM.render(
      React.createElement(GraphiQL, {
        fetcher: graphQLFetcher,
        onEditQuery: onEditQuery,
        onEditVariables: onEditVariables,
        onEditOperationName: onEditOperationName,
        query: ${safeSerialize(queryString)},
        response: ${safeSerialize(resultString)},
        variables: ${safeSerialize(variablesString)},
        operationName: ${safeSerialize(operationName)},
        defaultQuery: ${safeSerialize(defaultQuery)},
      }),
      document.getElementById('graphiql')
    );
  </script>
</body>
</html>`;
}


/***/ }),

/***/ "../node_modules/express/index.js":
/*!****************************************!*\
  !*** ../node_modules/express/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



module.exports = __webpack_require__(/*! ./lib/express */ "../node_modules/express/lib/express.js");


/***/ }),

/***/ "../node_modules/express/lib sync recursive":
/*!****************************************!*\
  !*** ../node_modules/express/lib sync ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	var e = new Error("Cannot find module '" + req + "'");
	e.code = 'MODULE_NOT_FOUND';
	throw e;
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../node_modules/express/lib sync recursive";

/***/ }),

/***/ "../node_modules/express/lib/application.js":
/*!**************************************************!*\
  !*** ../node_modules/express/lib/application.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var finalhandler = __webpack_require__(/*! finalhandler */ "../node_modules/finalhandler/index.js");
var Router = __webpack_require__(/*! ./router */ "../node_modules/express/lib/router/index.js");
var methods = __webpack_require__(/*! methods */ "../node_modules/methods/index.js");
var middleware = __webpack_require__(/*! ./middleware/init */ "../node_modules/express/lib/middleware/init.js");
var query = __webpack_require__(/*! ./middleware/query */ "../node_modules/express/lib/middleware/query.js");
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('express:application');
var View = __webpack_require__(/*! ./view */ "../node_modules/express/lib/view.js");
var http = __webpack_require__(/*! http */ "http");
var compileETag = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").compileETag;
var compileQueryParser = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").compileQueryParser;
var compileTrust = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").compileTrust;
var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('express');
var flatten = __webpack_require__(/*! array-flatten */ "../node_modules/array-flatten/array-flatten.js");
var merge = __webpack_require__(/*! utils-merge */ "../node_modules/utils-merge/index.js");
var resolve = __webpack_require__(/*! path */ "path").resolve;
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "../node_modules/setprototypeof/index.js")
var slice = Array.prototype.slice;

/**
 * Application prototype.
 */

var app = exports = module.exports = {};

/**
 * Variable for trust proxy inheritance back-compat
 * @private
 */

var trustProxyDefaultSymbol = '@@symbol:trust_proxy_default';

/**
 * Initialize the server.
 *
 *   - setup default configuration
 *   - setup default middleware
 *   - setup route reflection methods
 *
 * @private
 */

app.init = function init() {
  this.cache = {};
  this.engines = {};
  this.settings = {};

  this.defaultConfiguration();
};

/**
 * Initialize application configuration.
 * @private
 */

app.defaultConfiguration = function defaultConfiguration() {
  var env = "development" || false;

  // default settings
  this.enable('x-powered-by');
  this.set('etag', 'weak');
  this.set('env', env);
  this.set('query parser', 'extended');
  this.set('subdomain offset', 2);
  this.set('trust proxy', false);

  // trust proxy inherit back-compat
  Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
    configurable: true,
    value: true
  });

  debug('booting in %s mode', env);

  this.on('mount', function onmount(parent) {
    // inherit trust proxy
    if (this.settings[trustProxyDefaultSymbol] === true
      && typeof parent.settings['trust proxy fn'] === 'function') {
      delete this.settings['trust proxy'];
      delete this.settings['trust proxy fn'];
    }

    // inherit protos
    setPrototypeOf(this.request, parent.request)
    setPrototypeOf(this.response, parent.response)
    setPrototypeOf(this.engines, parent.engines)
    setPrototypeOf(this.settings, parent.settings)
  });

  // setup locals
  this.locals = Object.create(null);

  // top-most app is mounted at /
  this.mountpath = '/';

  // default locals
  this.locals.settings = this.settings;

  // default configuration
  this.set('view', View);
  this.set('views', resolve('views'));
  this.set('jsonp callback name', 'callback');

  if (env === 'production') {
    this.enable('view cache');
  }

  Object.defineProperty(this, 'router', {
    get: function() {
      throw new Error('\'app.router\' is deprecated!\nPlease see the 3.x to 4.x migration guide for details on how to update your app.');
    }
  });
};

/**
 * lazily adds the base router if it has not yet been added.
 *
 * We cannot add the base router in the defaultConfiguration because
 * it reads app settings which might be set after that has run.
 *
 * @private
 */
app.lazyrouter = function lazyrouter() {
  if (!this._router) {
    this._router = new Router({
      caseSensitive: this.enabled('case sensitive routing'),
      strict: this.enabled('strict routing')
    });

    this._router.use(query(this.get('query parser fn')));
    this._router.use(middleware.init(this));
  }
};

/**
 * Dispatch a req, res pair into the application. Starts pipeline processing.
 *
 * If no callback is provided, then default error handlers will respond
 * in the event of an error bubbling through the stack.
 *
 * @private
 */

app.handle = function handle(req, res, callback) {
  var router = this._router;

  // final handler
  var done = callback || finalhandler(req, res, {
    env: this.get('env'),
    onerror: logerror.bind(this)
  });

  // no routes
  if (!router) {
    debug('no routes defined on app');
    done();
    return;
  }

  router.handle(req, res, done);
};

/**
 * Proxy `Router#use()` to add middleware to the app router.
 * See Router#use() documentation for details.
 *
 * If the _fn_ parameter is an express app, then it will be
 * mounted at the _route_ specified.
 *
 * @public
 */

app.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // default path to '/'
  // disambiguate app.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  var fns = flatten(slice.call(arguments, offset));

  if (fns.length === 0) {
    throw new TypeError('app.use() requires a middleware function')
  }

  // setup router
  this.lazyrouter();
  var router = this._router;

  fns.forEach(function (fn) {
    // non-express app
    if (!fn || !fn.handle || !fn.set) {
      return router.use(path, fn);
    }

    debug('.use app under %s', path);
    fn.mountpath = path;
    fn.parent = this;

    // restore .app property on req and res
    router.use(path, function mounted_app(req, res, next) {
      var orig = req.app;
      fn.handle(req, res, function (err) {
        setPrototypeOf(req, orig.request)
        setPrototypeOf(res, orig.response)
        next(err);
      });
    });

    // mounted an app
    fn.emit('mount', this);
  }, this);

  return this;
};

/**
 * Proxy to the app `Router#route()`
 * Returns a new `Route` instance for the _path_.
 *
 * Routes are isolated middleware stacks for specific paths.
 * See the Route api docs for details.
 *
 * @public
 */

app.route = function route(path) {
  this.lazyrouter();
  return this._router.route(path);
};

/**
 * Register the given template engine callback `fn`
 * as `ext`.
 *
 * By default will `require()` the engine based on the
 * file extension. For example if you try to render
 * a "foo.ejs" file Express will invoke the following internally:
 *
 *     app.engine('ejs', require('ejs').__express);
 *
 * For engines that do not provide `.__express` out of the box,
 * or if you wish to "map" a different extension to the template engine
 * you may use this method. For example mapping the EJS template engine to
 * ".html" files:
 *
 *     app.engine('html', require('ejs').renderFile);
 *
 * In this case EJS provides a `.renderFile()` method with
 * the same signature that Express expects: `(path, options, callback)`,
 * though note that it aliases this method as `ejs.__express` internally
 * so if you're using ".ejs" extensions you dont need to do anything.
 *
 * Some template engines do not follow this convention, the
 * [Consolidate.js](https://github.com/tj/consolidate.js)
 * library was created to map all of node's popular template
 * engines to follow this convention, thus allowing them to
 * work seamlessly within Express.
 *
 * @param {String} ext
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

app.engine = function engine(ext, fn) {
  if (typeof fn !== 'function') {
    throw new Error('callback function required');
  }

  // get file extension
  var extension = ext[0] !== '.'
    ? '.' + ext
    : ext;

  // store engine
  this.engines[extension] = fn;

  return this;
};

/**
 * Proxy to `Router#param()` with one added api feature. The _name_ parameter
 * can be an array of names.
 *
 * See the Router#param() docs for more details.
 *
 * @param {String|Array} name
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

app.param = function param(name, fn) {
  this.lazyrouter();

  if (Array.isArray(name)) {
    for (var i = 0; i < name.length; i++) {
      this.param(name[i], fn);
    }

    return this;
  }

  this._router.param(name, fn);

  return this;
};

/**
 * Assign `setting` to `val`, or return `setting`'s value.
 *
 *    app.set('foo', 'bar');
 *    app.set('foo');
 *    // => "bar"
 *
 * Mounted servers inherit their parent server's settings.
 *
 * @param {String} setting
 * @param {*} [val]
 * @return {Server} for chaining
 * @public
 */

app.set = function set(setting, val) {
  if (arguments.length === 1) {
    // app.get(setting)
    return this.settings[setting];
  }

  debug('set "%s" to %o', setting, val);

  // set value
  this.settings[setting] = val;

  // trigger matched settings
  switch (setting) {
    case 'etag':
      this.set('etag fn', compileETag(val));
      break;
    case 'query parser':
      this.set('query parser fn', compileQueryParser(val));
      break;
    case 'trust proxy':
      this.set('trust proxy fn', compileTrust(val));

      // trust proxy inherit back-compat
      Object.defineProperty(this.settings, trustProxyDefaultSymbol, {
        configurable: true,
        value: false
      });

      break;
  }

  return this;
};

/**
 * Return the app's absolute pathname
 * based on the parent(s) that have
 * mounted it.
 *
 * For example if the application was
 * mounted as "/admin", which itself
 * was mounted as "/blog" then the
 * return value would be "/blog/admin".
 *
 * @return {String}
 * @private
 */

app.path = function path() {
  return this.parent
    ? this.parent.path() + this.mountpath
    : '';
};

/**
 * Check if `setting` is enabled (truthy).
 *
 *    app.enabled('foo')
 *    // => false
 *
 *    app.enable('foo')
 *    app.enabled('foo')
 *    // => true
 *
 * @param {String} setting
 * @return {Boolean}
 * @public
 */

app.enabled = function enabled(setting) {
  return Boolean(this.set(setting));
};

/**
 * Check if `setting` is disabled.
 *
 *    app.disabled('foo')
 *    // => true
 *
 *    app.enable('foo')
 *    app.disabled('foo')
 *    // => false
 *
 * @param {String} setting
 * @return {Boolean}
 * @public
 */

app.disabled = function disabled(setting) {
  return !this.set(setting);
};

/**
 * Enable `setting`.
 *
 * @param {String} setting
 * @return {app} for chaining
 * @public
 */

app.enable = function enable(setting) {
  return this.set(setting, true);
};

/**
 * Disable `setting`.
 *
 * @param {String} setting
 * @return {app} for chaining
 * @public
 */

app.disable = function disable(setting) {
  return this.set(setting, false);
};

/**
 * Delegate `.VERB(...)` calls to `router.VERB(...)`.
 */

methods.forEach(function(method){
  app[method] = function(path){
    if (method === 'get' && arguments.length === 1) {
      // app.get(setting)
      return this.set(path);
    }

    this.lazyrouter();

    var route = this._router.route(path);
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

/**
 * Special-cased "all" method, applying the given route `path`,
 * middleware, and callback to _every_ HTTP method.
 *
 * @param {String} path
 * @param {Function} ...
 * @return {app} for chaining
 * @public
 */

app.all = function all(path) {
  this.lazyrouter();

  var route = this._router.route(path);
  var args = slice.call(arguments, 1);

  for (var i = 0; i < methods.length; i++) {
    route[methods[i]].apply(route, args);
  }

  return this;
};

// del -> delete alias

app.del = deprecate.function(app.delete, 'app.del: Use app.delete instead');

/**
 * Render the given view `name` name with `options`
 * and a callback accepting an error and the
 * rendered template string.
 *
 * Example:
 *
 *    app.render('email', { name: 'Tobi' }, function(err, html){
 *      // ...
 *    })
 *
 * @param {String} name
 * @param {Object|Function} options or fn
 * @param {Function} callback
 * @public
 */

app.render = function render(name, options, callback) {
  var cache = this.cache;
  var done = callback;
  var engines = this.engines;
  var opts = options;
  var renderOptions = {};
  var view;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // merge app.locals
  merge(renderOptions, this.locals);

  // merge options._locals
  if (opts._locals) {
    merge(renderOptions, opts._locals);
  }

  // merge options
  merge(renderOptions, opts);

  // set .cache unless explicitly provided
  if (renderOptions.cache == null) {
    renderOptions.cache = this.enabled('view cache');
  }

  // primed cache
  if (renderOptions.cache) {
    view = cache[name];
  }

  // view
  if (!view) {
    var View = this.get('view');

    view = new View(name, {
      defaultEngine: this.get('view engine'),
      root: this.get('views'),
      engines: engines
    });

    if (!view.path) {
      var dirs = Array.isArray(view.root) && view.root.length > 1
        ? 'directories "' + view.root.slice(0, -1).join('", "') + '" or "' + view.root[view.root.length - 1] + '"'
        : 'directory "' + view.root + '"'
      var err = new Error('Failed to lookup view "' + name + '" in views ' + dirs);
      err.view = view;
      return done(err);
    }

    // prime the cache
    if (renderOptions.cache) {
      cache[name] = view;
    }
  }

  // render
  tryRender(view, renderOptions, done);
};

/**
 * Listen for connections.
 *
 * A node `http.Server` is returned, with this
 * application (which is a `Function`) as its
 * callback. If you wish to create both an HTTP
 * and HTTPS server you may do so with the "http"
 * and "https" modules as shown here:
 *
 *    var http = require('http')
 *      , https = require('https')
 *      , express = require('express')
 *      , app = express();
 *
 *    http.createServer(app).listen(80);
 *    https.createServer({ ... }, app).listen(443);
 *
 * @return {http.Server}
 * @public
 */

app.listen = function listen() {
  var server = http.createServer(this);
  return server.listen.apply(server, arguments);
};

/**
 * Log error using console.error.
 *
 * @param {Error} err
 * @private
 */

function logerror(err) {
  /* istanbul ignore next */
  if (this.get('env') !== 'test') console.error(err.stack || err.toString());
}

/**
 * Try rendering a view.
 * @private
 */

function tryRender(view, options, callback) {
  try {
    view.render(options, callback);
  } catch (err) {
    callback(err);
  }
}


/***/ }),

/***/ "../node_modules/express/lib/express.js":
/*!**********************************************!*\
  !*** ../node_modules/express/lib/express.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var bodyParser = __webpack_require__(/*! body-parser */ "../node_modules/body-parser/index.js")
var EventEmitter = __webpack_require__(/*! events */ "events").EventEmitter;
var mixin = __webpack_require__(/*! merge-descriptors */ "../node_modules/merge-descriptors/index.js");
var proto = __webpack_require__(/*! ./application */ "../node_modules/express/lib/application.js");
var Route = __webpack_require__(/*! ./router/route */ "../node_modules/express/lib/router/route.js");
var Router = __webpack_require__(/*! ./router */ "../node_modules/express/lib/router/index.js");
var req = __webpack_require__(/*! ./request */ "../node_modules/express/lib/request.js");
var res = __webpack_require__(/*! ./response */ "../node_modules/express/lib/response.js");

/**
 * Expose `createApplication()`.
 */

exports = module.exports = createApplication;

/**
 * Create an express application.
 *
 * @return {Function}
 * @api public
 */

function createApplication() {
  var app = function(req, res, next) {
    app.handle(req, res, next);
  };

  mixin(app, EventEmitter.prototype, false);
  mixin(app, proto, false);

  // expose the prototype that will get set on requests
  app.request = Object.create(req, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  // expose the prototype that will get set on responses
  app.response = Object.create(res, {
    app: { configurable: true, enumerable: true, writable: true, value: app }
  })

  app.init();
  return app;
}

/**
 * Expose the prototypes.
 */

exports.application = proto;
exports.request = req;
exports.response = res;

/**
 * Expose constructors.
 */

exports.Route = Route;
exports.Router = Router;

/**
 * Expose middleware
 */

exports.json = bodyParser.json
exports.query = __webpack_require__(/*! ./middleware/query */ "../node_modules/express/lib/middleware/query.js");
exports.raw = bodyParser.raw
exports.static = __webpack_require__(/*! serve-static */ "../node_modules/serve-static/index.js");
exports.text = bodyParser.text
exports.urlencoded = bodyParser.urlencoded

/**
 * Replace removed middleware with an appropriate error message.
 */

var removedMiddlewares = [
  'bodyParser',
  'compress',
  'cookieSession',
  'session',
  'logger',
  'cookieParser',
  'favicon',
  'responseTime',
  'errorHandler',
  'timeout',
  'methodOverride',
  'vhost',
  'csrf',
  'directory',
  'limit',
  'multipart',
  'staticCache'
]

removedMiddlewares.forEach(function (name) {
  Object.defineProperty(exports, name, {
    get: function () {
      throw new Error('Most middleware (like ' + name + ') is no longer bundled with Express and must be installed separately. Please see https://github.com/senchalabs/connect#middleware.');
    },
    configurable: true
  });
});


/***/ }),

/***/ "../node_modules/express/lib/middleware/init.js":
/*!******************************************************!*\
  !*** ../node_modules/express/lib/middleware/init.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "../node_modules/setprototypeof/index.js")

/**
 * Initialization middleware, exposing the
 * request and response to each other, as well
 * as defaulting the X-Powered-By header field.
 *
 * @param {Function} app
 * @return {Function}
 * @api private
 */

exports.init = function(app){
  return function expressInit(req, res, next){
    if (app.enabled('x-powered-by')) res.setHeader('X-Powered-By', 'Express');
    req.res = res;
    res.req = req;
    req.next = next;

    setPrototypeOf(req, app.request)
    setPrototypeOf(res, app.response)

    res.locals = res.locals || Object.create(null);

    next();
  };
};



/***/ }),

/***/ "../node_modules/express/lib/middleware/query.js":
/*!*******************************************************!*\
  !*** ../node_modules/express/lib/middleware/query.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 */

var merge = __webpack_require__(/*! utils-merge */ "../node_modules/utils-merge/index.js")
var parseUrl = __webpack_require__(/*! parseurl */ "../node_modules/parseurl/index.js");
var qs = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");

/**
 * @param {Object} options
 * @return {Function}
 * @api public
 */

module.exports = function query(options) {
  var opts = merge({}, options)
  var queryparse = qs.parse;

  if (typeof options === 'function') {
    queryparse = options;
    opts = undefined;
  }

  if (opts !== undefined && opts.allowPrototypes === undefined) {
    // back-compat for qs module
    opts.allowPrototypes = true;
  }

  return function query(req, res, next){
    if (!req.query) {
      var val = parseUrl(req).query;
      req.query = queryparse(val, opts);
    }

    next();
  };
};


/***/ }),

/***/ "../node_modules/express/lib/request.js":
/*!**********************************************!*\
  !*** ../node_modules/express/lib/request.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var accepts = __webpack_require__(/*! accepts */ "../node_modules/accepts/index.js");
var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('express');
var isIP = __webpack_require__(/*! net */ "net").isIP;
var typeis = __webpack_require__(/*! type-is */ "../node_modules/type-is/index.js");
var http = __webpack_require__(/*! http */ "http");
var fresh = __webpack_require__(/*! fresh */ "../node_modules/fresh/index.js");
var parseRange = __webpack_require__(/*! range-parser */ "../node_modules/range-parser/index.js");
var parse = __webpack_require__(/*! parseurl */ "../node_modules/parseurl/index.js");
var proxyaddr = __webpack_require__(/*! proxy-addr */ "../node_modules/proxy-addr/index.js");

/**
 * Request prototype.
 * @public
 */

var req = Object.create(http.IncomingMessage.prototype)

/**
 * Module exports.
 * @public
 */

module.exports = req

/**
 * Return request header.
 *
 * The `Referrer` header field is special-cased,
 * both `Referrer` and `Referer` are interchangeable.
 *
 * Examples:
 *
 *     req.get('Content-Type');
 *     // => "text/plain"
 *
 *     req.get('content-type');
 *     // => "text/plain"
 *
 *     req.get('Something');
 *     // => undefined
 *
 * Aliased as `req.header()`.
 *
 * @param {String} name
 * @return {String}
 * @public
 */

req.get =
req.header = function header(name) {
  if (!name) {
    throw new TypeError('name argument is required to req.get');
  }

  if (typeof name !== 'string') {
    throw new TypeError('name must be a string to req.get');
  }

  var lc = name.toLowerCase();

  switch (lc) {
    case 'referer':
    case 'referrer':
      return this.headers.referrer
        || this.headers.referer;
    default:
      return this.headers[lc];
  }
};

/**
 * To do: update docs.
 *
 * Check if the given `type(s)` is acceptable, returning
 * the best match when true, otherwise `undefined`, in which
 * case you should respond with 406 "Not Acceptable".
 *
 * The `type` value may be a single MIME type string
 * such as "application/json", an extension name
 * such as "json", a comma-delimited list such as "json, html, text/plain",
 * an argument list such as `"json", "html", "text/plain"`,
 * or an array `["json", "html", "text/plain"]`. When a list
 * or array is given, the _best_ match, if any is returned.
 *
 * Examples:
 *
 *     // Accept: text/html
 *     req.accepts('html');
 *     // => "html"
 *
 *     // Accept: text/*, application/json
 *     req.accepts('html');
 *     // => "html"
 *     req.accepts('text/html');
 *     // => "text/html"
 *     req.accepts('json, text');
 *     // => "json"
 *     req.accepts('application/json');
 *     // => "application/json"
 *
 *     // Accept: text/*, application/json
 *     req.accepts('image/png');
 *     req.accepts('png');
 *     // => undefined
 *
 *     // Accept: text/*;q=.5, application/json
 *     req.accepts(['html', 'json']);
 *     req.accepts('html', 'json');
 *     req.accepts('html, json');
 *     // => "json"
 *
 * @param {String|Array} type(s)
 * @return {String|Array|Boolean}
 * @public
 */

req.accepts = function(){
  var accept = accepts(this);
  return accept.types.apply(accept, arguments);
};

/**
 * Check if the given `encoding`s are accepted.
 *
 * @param {String} ...encoding
 * @return {String|Array}
 * @public
 */

req.acceptsEncodings = function(){
  var accept = accepts(this);
  return accept.encodings.apply(accept, arguments);
};

req.acceptsEncoding = deprecate.function(req.acceptsEncodings,
  'req.acceptsEncoding: Use acceptsEncodings instead');

/**
 * Check if the given `charset`s are acceptable,
 * otherwise you should respond with 406 "Not Acceptable".
 *
 * @param {String} ...charset
 * @return {String|Array}
 * @public
 */

req.acceptsCharsets = function(){
  var accept = accepts(this);
  return accept.charsets.apply(accept, arguments);
};

req.acceptsCharset = deprecate.function(req.acceptsCharsets,
  'req.acceptsCharset: Use acceptsCharsets instead');

/**
 * Check if the given `lang`s are acceptable,
 * otherwise you should respond with 406 "Not Acceptable".
 *
 * @param {String} ...lang
 * @return {String|Array}
 * @public
 */

req.acceptsLanguages = function(){
  var accept = accepts(this);
  return accept.languages.apply(accept, arguments);
};

req.acceptsLanguage = deprecate.function(req.acceptsLanguages,
  'req.acceptsLanguage: Use acceptsLanguages instead');

/**
 * Parse Range header field, capping to the given `size`.
 *
 * Unspecified ranges such as "0-" require knowledge of your resource length. In
 * the case of a byte range this is of course the total number of bytes. If the
 * Range header field is not given `undefined` is returned, `-1` when unsatisfiable,
 * and `-2` when syntactically invalid.
 *
 * When ranges are returned, the array has a "type" property which is the type of
 * range that is required (most commonly, "bytes"). Each array element is an object
 * with a "start" and "end" property for the portion of the range.
 *
 * The "combine" option can be set to `true` and overlapping & adjacent ranges
 * will be combined into a single range.
 *
 * NOTE: remember that ranges are inclusive, so for example "Range: users=0-3"
 * should respond with 4 users when available, not 3.
 *
 * @param {number} size
 * @param {object} [options]
 * @param {boolean} [options.combine=false]
 * @return {number|array}
 * @public
 */

req.range = function range(size, options) {
  var range = this.get('Range');
  if (!range) return;
  return parseRange(size, range, options);
};

/**
 * Return the value of param `name` when present or `defaultValue`.
 *
 *  - Checks route placeholders, ex: _/user/:id_
 *  - Checks body params, ex: id=12, {"id":12}
 *  - Checks query string params, ex: ?id=12
 *
 * To utilize request bodies, `req.body`
 * should be an object. This can be done by using
 * the `bodyParser()` middleware.
 *
 * @param {String} name
 * @param {Mixed} [defaultValue]
 * @return {String}
 * @public
 */

req.param = function param(name, defaultValue) {
  var params = this.params || {};
  var body = this.body || {};
  var query = this.query || {};

  var args = arguments.length === 1
    ? 'name'
    : 'name, default';
  deprecate('req.param(' + args + '): Use req.params, req.body, or req.query instead');

  if (null != params[name] && params.hasOwnProperty(name)) return params[name];
  if (null != body[name]) return body[name];
  if (null != query[name]) return query[name];

  return defaultValue;
};

/**
 * Check if the incoming request contains the "Content-Type"
 * header field, and it contains the give mime `type`.
 *
 * Examples:
 *
 *      // With Content-Type: text/html; charset=utf-8
 *      req.is('html');
 *      req.is('text/html');
 *      req.is('text/*');
 *      // => true
 *
 *      // When Content-Type is application/json
 *      req.is('json');
 *      req.is('application/json');
 *      req.is('application/*');
 *      // => true
 *
 *      req.is('html');
 *      // => false
 *
 * @param {String|Array} types...
 * @return {String|false|null}
 * @public
 */

req.is = function is(types) {
  var arr = types;

  // support flattened arguments
  if (!Array.isArray(types)) {
    arr = new Array(arguments.length);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arguments[i];
    }
  }

  return typeis(this, arr);
};

/**
 * Return the protocol string "http" or "https"
 * when requested with TLS. When the "trust proxy"
 * setting trusts the socket address, the
 * "X-Forwarded-Proto" header field will be trusted
 * and used if present.
 *
 * If you're running behind a reverse proxy that
 * supplies https for you this may be enabled.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'protocol', function protocol(){
  var proto = this.connection.encrypted
    ? 'https'
    : 'http';
  var trust = this.app.get('trust proxy fn');

  if (!trust(this.connection.remoteAddress, 0)) {
    return proto;
  }

  // Note: X-Forwarded-Proto is normally only ever a
  //       single value, but this is to be safe.
  var header = this.get('X-Forwarded-Proto') || proto
  var index = header.indexOf(',')

  return index !== -1
    ? header.substring(0, index).trim()
    : header.trim()
});

/**
 * Short-hand for:
 *
 *    req.protocol === 'https'
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'secure', function secure(){
  return this.protocol === 'https';
});

/**
 * Return the remote address from the trusted proxy.
 *
 * The is the remote address on the socket unless
 * "trust proxy" is set.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'ip', function ip(){
  var trust = this.app.get('trust proxy fn');
  return proxyaddr(this, trust);
});

/**
 * When "trust proxy" is set, trusted proxy addresses + client.
 *
 * For example if the value were "client, proxy1, proxy2"
 * you would receive the array `["client", "proxy1", "proxy2"]`
 * where "proxy2" is the furthest down-stream and "proxy1" and
 * "proxy2" were trusted.
 *
 * @return {Array}
 * @public
 */

defineGetter(req, 'ips', function ips() {
  var trust = this.app.get('trust proxy fn');
  var addrs = proxyaddr.all(this, trust);

  // reverse the order (to farthest -> closest)
  // and remove socket address
  addrs.reverse().pop()

  return addrs
});

/**
 * Return subdomains as an array.
 *
 * Subdomains are the dot-separated parts of the host before the main domain of
 * the app. By default, the domain of the app is assumed to be the last two
 * parts of the host. This can be changed by setting "subdomain offset".
 *
 * For example, if the domain is "tobi.ferrets.example.com":
 * If "subdomain offset" is not set, req.subdomains is `["ferrets", "tobi"]`.
 * If "subdomain offset" is 3, req.subdomains is `["tobi"]`.
 *
 * @return {Array}
 * @public
 */

defineGetter(req, 'subdomains', function subdomains() {
  var hostname = this.hostname;

  if (!hostname) return [];

  var offset = this.app.get('subdomain offset');
  var subdomains = !isIP(hostname)
    ? hostname.split('.').reverse()
    : [hostname];

  return subdomains.slice(offset);
});

/**
 * Short-hand for `url.parse(req.url).pathname`.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'path', function path() {
  return parse(this).pathname;
});

/**
 * Parse the "Host" header field to a hostname.
 *
 * When the "trust proxy" setting trusts the socket
 * address, the "X-Forwarded-Host" header field will
 * be trusted.
 *
 * @return {String}
 * @public
 */

defineGetter(req, 'hostname', function hostname(){
  var trust = this.app.get('trust proxy fn');
  var host = this.get('X-Forwarded-Host');

  if (!host || !trust(this.connection.remoteAddress, 0)) {
    host = this.get('Host');
  } else if (host.indexOf(',') !== -1) {
    // Note: X-Forwarded-Host is normally only ever a
    //       single value, but this is to be safe.
    host = host.substring(0, host.indexOf(',')).trimRight()
  }

  if (!host) return;

  // IPv6 literal support
  var offset = host[0] === '['
    ? host.indexOf(']') + 1
    : 0;
  var index = host.indexOf(':', offset);

  return index !== -1
    ? host.substring(0, index)
    : host;
});

// TODO: change req.host to return host in next major

defineGetter(req, 'host', deprecate.function(function host(){
  return this.hostname;
}, 'req.host: Use req.hostname instead'));

/**
 * Check if the request is fresh, aka
 * Last-Modified and/or the ETag
 * still match.
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'fresh', function(){
  var method = this.method;
  var res = this.res
  var status = res.statusCode

  // GET or HEAD for weak freshness validation only
  if ('GET' !== method && 'HEAD' !== method) return false;

  // 2xx or 304 as per rfc2616 14.26
  if ((status >= 200 && status < 300) || 304 === status) {
    return fresh(this.headers, {
      'etag': res.get('ETag'),
      'last-modified': res.get('Last-Modified')
    })
  }

  return false;
});

/**
 * Check if the request is stale, aka
 * "Last-Modified" and / or the "ETag" for the
 * resource has changed.
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'stale', function stale(){
  return !this.fresh;
});

/**
 * Check if the request was an _XMLHttpRequest_.
 *
 * @return {Boolean}
 * @public
 */

defineGetter(req, 'xhr', function xhr(){
  var val = this.get('X-Requested-With') || '';
  return val.toLowerCase() === 'xmlhttprequest';
});

/**
 * Helper function for creating a getter on an object.
 *
 * @param {Object} obj
 * @param {String} name
 * @param {Function} getter
 * @private
 */
function defineGetter(obj, name, getter) {
  Object.defineProperty(obj, name, {
    configurable: true,
    enumerable: true,
    get: getter
  });
}


/***/ }),

/***/ "../node_modules/express/lib/response.js":
/*!***********************************************!*\
  !*** ../node_modules/express/lib/response.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Buffer = __webpack_require__(/*! safe-buffer */ "../node_modules/express/node_modules/safe-buffer/index.js").Buffer
var contentDisposition = __webpack_require__(/*! content-disposition */ "../node_modules/content-disposition/index.js");
var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('express');
var encodeUrl = __webpack_require__(/*! encodeurl */ "../node_modules/encodeurl/index.js");
var escapeHtml = __webpack_require__(/*! escape-html */ "../node_modules/escape-html/index.js");
var http = __webpack_require__(/*! http */ "http");
var isAbsolute = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").isAbsolute;
var onFinished = __webpack_require__(/*! on-finished */ "../node_modules/on-finished/index.js");
var path = __webpack_require__(/*! path */ "path");
var statuses = __webpack_require__(/*! statuses */ "../node_modules/statuses/index.js")
var merge = __webpack_require__(/*! utils-merge */ "../node_modules/utils-merge/index.js");
var sign = __webpack_require__(/*! cookie-signature */ "../node_modules/cookie-signature/index.js").sign;
var normalizeType = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").normalizeType;
var normalizeTypes = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").normalizeTypes;
var setCharset = __webpack_require__(/*! ./utils */ "../node_modules/express/lib/utils.js").setCharset;
var cookie = __webpack_require__(/*! cookie */ "../node_modules/cookie/index.js");
var send = __webpack_require__(/*! send */ "../node_modules/send/index.js");
var extname = path.extname;
var mime = send.mime;
var resolve = path.resolve;
var vary = __webpack_require__(/*! vary */ "../node_modules/vary/index.js");

/**
 * Response prototype.
 * @public
 */

var res = Object.create(http.ServerResponse.prototype)

/**
 * Module exports.
 * @public
 */

module.exports = res

/**
 * Module variables.
 * @private
 */

var charsetRegExp = /;\s*charset\s*=/;

/**
 * Set status `code`.
 *
 * @param {Number} code
 * @return {ServerResponse}
 * @public
 */

res.status = function status(code) {
  this.statusCode = code;
  return this;
};

/**
 * Set Link header field with the given `links`.
 *
 * Examples:
 *
 *    res.links({
 *      next: 'http://api.example.com/users?page=2',
 *      last: 'http://api.example.com/users?page=5'
 *    });
 *
 * @param {Object} links
 * @return {ServerResponse}
 * @public
 */

res.links = function(links){
  var link = this.get('Link') || '';
  if (link) link += ', ';
  return this.set('Link', link + Object.keys(links).map(function(rel){
    return '<' + links[rel] + '>; rel="' + rel + '"';
  }).join(', '));
};

/**
 * Send a response.
 *
 * Examples:
 *
 *     res.send(Buffer.from('wahoo'));
 *     res.send({ some: 'json' });
 *     res.send('<p>some html</p>');
 *
 * @param {string|number|boolean|object|Buffer} body
 * @public
 */

res.send = function send(body) {
  var chunk = body;
  var encoding;
  var req = this.req;
  var type;

  // settings
  var app = this.app;

  // allow status / body
  if (arguments.length === 2) {
    // res.send(body, status) backwards compat
    if (typeof arguments[0] !== 'number' && typeof arguments[1] === 'number') {
      deprecate('res.send(body, status): Use res.status(status).send(body) instead');
      this.statusCode = arguments[1];
    } else {
      deprecate('res.send(status, body): Use res.status(status).send(body) instead');
      this.statusCode = arguments[0];
      chunk = arguments[1];
    }
  }

  // disambiguate res.send(status) and res.send(status, num)
  if (typeof chunk === 'number' && arguments.length === 1) {
    // res.send(status) will set status message as text string
    if (!this.get('Content-Type')) {
      this.type('txt');
    }

    deprecate('res.send(status): Use res.sendStatus(status) instead');
    this.statusCode = chunk;
    chunk = statuses[chunk]
  }

  switch (typeof chunk) {
    // string defaulting to html
    case 'string':
      if (!this.get('Content-Type')) {
        this.type('html');
      }
      break;
    case 'boolean':
    case 'number':
    case 'object':
      if (chunk === null) {
        chunk = '';
      } else if (Buffer.isBuffer(chunk)) {
        if (!this.get('Content-Type')) {
          this.type('bin');
        }
      } else {
        return this.json(chunk);
      }
      break;
  }

  // write strings in utf-8
  if (typeof chunk === 'string') {
    encoding = 'utf8';
    type = this.get('Content-Type');

    // reflect this in content-type
    if (typeof type === 'string') {
      this.set('Content-Type', setCharset(type, 'utf-8'));
    }
  }

  // determine if ETag should be generated
  var etagFn = app.get('etag fn')
  var generateETag = !this.get('ETag') && typeof etagFn === 'function'

  // populate Content-Length
  var len
  if (chunk !== undefined) {
    if (Buffer.isBuffer(chunk)) {
      // get length of Buffer
      len = chunk.length
    } else if (!generateETag && chunk.length < 1000) {
      // just calculate length when no ETag + small chunk
      len = Buffer.byteLength(chunk, encoding)
    } else {
      // convert chunk to Buffer and calculate
      chunk = Buffer.from(chunk, encoding)
      encoding = undefined;
      len = chunk.length
    }

    this.set('Content-Length', len);
  }

  // populate ETag
  var etag;
  if (generateETag && len !== undefined) {
    if ((etag = etagFn(chunk, encoding))) {
      this.set('ETag', etag);
    }
  }

  // freshness
  if (req.fresh) this.statusCode = 304;

  // strip irrelevant headers
  if (204 === this.statusCode || 304 === this.statusCode) {
    this.removeHeader('Content-Type');
    this.removeHeader('Content-Length');
    this.removeHeader('Transfer-Encoding');
    chunk = '';
  }

  if (req.method === 'HEAD') {
    // skip body for HEAD
    this.end();
  } else {
    // respond
    this.end(chunk, encoding);
  }

  return this;
};

/**
 * Send JSON response.
 *
 * Examples:
 *
 *     res.json(null);
 *     res.json({ user: 'tj' });
 *
 * @param {string|number|boolean|object} obj
 * @public
 */

res.json = function json(obj) {
  var val = obj;

  // allow status / body
  if (arguments.length === 2) {
    // res.json(body, status) backwards compat
    if (typeof arguments[1] === 'number') {
      deprecate('res.json(obj, status): Use res.status(status).json(obj) instead');
      this.statusCode = arguments[1];
    } else {
      deprecate('res.json(status, obj): Use res.status(status).json(obj) instead');
      this.statusCode = arguments[0];
      val = arguments[1];
    }
  }

  // settings
  var app = this.app;
  var escape = app.get('json escape')
  var replacer = app.get('json replacer');
  var spaces = app.get('json spaces');
  var body = stringify(val, replacer, spaces, escape)

  // content-type
  if (!this.get('Content-Type')) {
    this.set('Content-Type', 'application/json');
  }

  return this.send(body);
};

/**
 * Send JSON response with JSONP callback support.
 *
 * Examples:
 *
 *     res.jsonp(null);
 *     res.jsonp({ user: 'tj' });
 *
 * @param {string|number|boolean|object} obj
 * @public
 */

res.jsonp = function jsonp(obj) {
  var val = obj;

  // allow status / body
  if (arguments.length === 2) {
    // res.json(body, status) backwards compat
    if (typeof arguments[1] === 'number') {
      deprecate('res.jsonp(obj, status): Use res.status(status).json(obj) instead');
      this.statusCode = arguments[1];
    } else {
      deprecate('res.jsonp(status, obj): Use res.status(status).jsonp(obj) instead');
      this.statusCode = arguments[0];
      val = arguments[1];
    }
  }

  // settings
  var app = this.app;
  var escape = app.get('json escape')
  var replacer = app.get('json replacer');
  var spaces = app.get('json spaces');
  var body = stringify(val, replacer, spaces, escape)
  var callback = this.req.query[app.get('jsonp callback name')];

  // content-type
  if (!this.get('Content-Type')) {
    this.set('X-Content-Type-Options', 'nosniff');
    this.set('Content-Type', 'application/json');
  }

  // fixup callback
  if (Array.isArray(callback)) {
    callback = callback[0];
  }

  // jsonp
  if (typeof callback === 'string' && callback.length !== 0) {
    this.set('X-Content-Type-Options', 'nosniff');
    this.set('Content-Type', 'text/javascript');

    // restrict callback charset
    callback = callback.replace(/[^\[\]\w$.]/g, '');

    // replace chars not allowed in JavaScript that are in JSON
    body = body
      .replace(/\u2028/g, '\\u2028')
      .replace(/\u2029/g, '\\u2029');

    // the /**/ is a specific security mitigation for "Rosetta Flash JSONP abuse"
    // the typeof check is just to reduce client error noise
    body = '/**/ typeof ' + callback + ' === \'function\' && ' + callback + '(' + body + ');';
  }

  return this.send(body);
};

/**
 * Send given HTTP status code.
 *
 * Sets the response status to `statusCode` and the body of the
 * response to the standard description from node's http.STATUS_CODES
 * or the statusCode number if no description.
 *
 * Examples:
 *
 *     res.sendStatus(200);
 *
 * @param {number} statusCode
 * @public
 */

res.sendStatus = function sendStatus(statusCode) {
  var body = statuses[statusCode] || String(statusCode)

  this.statusCode = statusCode;
  this.type('txt');

  return this.send(body);
};

/**
 * Transfer the file at the given `path`.
 *
 * Automatically sets the _Content-Type_ response header field.
 * The callback `callback(err)` is invoked when the transfer is complete
 * or when an error occurs. Be sure to check `res.sentHeader`
 * if you wish to attempt responding, as the header and some data
 * may have already been transferred.
 *
 * Options:
 *
 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
 *   - `root`     root directory for relative filenames
 *   - `headers`  object of headers to serve with file
 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
 *
 * Other options are passed along to `send`.
 *
 * Examples:
 *
 *  The following example illustrates how `res.sendFile()` may
 *  be used as an alternative for the `static()` middleware for
 *  dynamic situations. The code backing `res.sendFile()` is actually
 *  the same code, so HTTP cache support etc is identical.
 *
 *     app.get('/user/:uid/photos/:file', function(req, res){
 *       var uid = req.params.uid
 *         , file = req.params.file;
 *
 *       req.user.mayViewFilesFrom(uid, function(yes){
 *         if (yes) {
 *           res.sendFile('/uploads/' + uid + '/' + file);
 *         } else {
 *           res.send(403, 'Sorry! you cant see that.');
 *         }
 *       });
 *     });
 *
 * @public
 */

res.sendFile = function sendFile(path, options, callback) {
  var done = callback;
  var req = this.req;
  var res = this;
  var next = req.next;
  var opts = options || {};

  if (!path) {
    throw new TypeError('path argument is required to res.sendFile');
  }

  if (typeof path !== 'string') {
    throw new TypeError('path must be a string to res.sendFile')
  }

  // support function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  if (!opts.root && !isAbsolute(path)) {
    throw new TypeError('path must be absolute or specify root to res.sendFile');
  }

  // create file stream
  var pathname = encodeURI(path);
  var file = send(req, pathname, opts);

  // transfer
  sendfile(res, file, opts, function (err) {
    if (done) return done(err);
    if (err && err.code === 'EISDIR') return next();

    // next() all but write errors
    if (err && err.code !== 'ECONNABORTED' && err.syscall !== 'write') {
      next(err);
    }
  });
};

/**
 * Transfer the file at the given `path`.
 *
 * Automatically sets the _Content-Type_ response header field.
 * The callback `callback(err)` is invoked when the transfer is complete
 * or when an error occurs. Be sure to check `res.sentHeader`
 * if you wish to attempt responding, as the header and some data
 * may have already been transferred.
 *
 * Options:
 *
 *   - `maxAge`   defaulting to 0 (can be string converted by `ms`)
 *   - `root`     root directory for relative filenames
 *   - `headers`  object of headers to serve with file
 *   - `dotfiles` serve dotfiles, defaulting to false; can be `"allow"` to send them
 *
 * Other options are passed along to `send`.
 *
 * Examples:
 *
 *  The following example illustrates how `res.sendfile()` may
 *  be used as an alternative for the `static()` middleware for
 *  dynamic situations. The code backing `res.sendfile()` is actually
 *  the same code, so HTTP cache support etc is identical.
 *
 *     app.get('/user/:uid/photos/:file', function(req, res){
 *       var uid = req.params.uid
 *         , file = req.params.file;
 *
 *       req.user.mayViewFilesFrom(uid, function(yes){
 *         if (yes) {
 *           res.sendfile('/uploads/' + uid + '/' + file);
 *         } else {
 *           res.send(403, 'Sorry! you cant see that.');
 *         }
 *       });
 *     });
 *
 * @public
 */

res.sendfile = function (path, options, callback) {
  var done = callback;
  var req = this.req;
  var res = this;
  var next = req.next;
  var opts = options || {};

  // support function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // create file stream
  var file = send(req, path, opts);

  // transfer
  sendfile(res, file, opts, function (err) {
    if (done) return done(err);
    if (err && err.code === 'EISDIR') return next();

    // next() all but write errors
    if (err && err.code !== 'ECONNABORTED' && err.syscall !== 'write') {
      next(err);
    }
  });
};

res.sendfile = deprecate.function(res.sendfile,
  'res.sendfile: Use res.sendFile instead');

/**
 * Transfer the file at the given `path` as an attachment.
 *
 * Optionally providing an alternate attachment `filename`,
 * and optional callback `callback(err)`. The callback is invoked
 * when the data transfer is complete, or when an error has
 * ocurred. Be sure to check `res.headersSent` if you plan to respond.
 *
 * Optionally providing an `options` object to use with `res.sendFile()`.
 * This function will set the `Content-Disposition` header, overriding
 * any `Content-Disposition` header passed as header options in order
 * to set the attachment and filename.
 *
 * This method uses `res.sendFile()`.
 *
 * @public
 */

res.download = function download (path, filename, options, callback) {
  var done = callback;
  var name = filename;
  var opts = options || null

  // support function as second or third arg
  if (typeof filename === 'function') {
    done = filename;
    name = null;
    opts = null
  } else if (typeof options === 'function') {
    done = options
    opts = null
  }

  // set Content-Disposition when file is sent
  var headers = {
    'Content-Disposition': contentDisposition(name || path)
  };

  // merge user-provided headers
  if (opts && opts.headers) {
    var keys = Object.keys(opts.headers)
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]
      if (key.toLowerCase() !== 'content-disposition') {
        headers[key] = opts.headers[key]
      }
    }
  }

  // merge user-provided options
  opts = Object.create(opts)
  opts.headers = headers

  // Resolve the full path for sendFile
  var fullPath = resolve(path);

  // send file
  return this.sendFile(fullPath, opts, done)
};

/**
 * Set _Content-Type_ response header with `type` through `mime.lookup()`
 * when it does not contain "/", or set the Content-Type to `type` otherwise.
 *
 * Examples:
 *
 *     res.type('.html');
 *     res.type('html');
 *     res.type('json');
 *     res.type('application/json');
 *     res.type('png');
 *
 * @param {String} type
 * @return {ServerResponse} for chaining
 * @public
 */

res.contentType =
res.type = function contentType(type) {
  var ct = type.indexOf('/') === -1
    ? mime.lookup(type)
    : type;

  return this.set('Content-Type', ct);
};

/**
 * Respond to the Acceptable formats using an `obj`
 * of mime-type callbacks.
 *
 * This method uses `req.accepted`, an array of
 * acceptable types ordered by their quality values.
 * When "Accept" is not present the _first_ callback
 * is invoked, otherwise the first match is used. When
 * no match is performed the server responds with
 * 406 "Not Acceptable".
 *
 * Content-Type is set for you, however if you choose
 * you may alter this within the callback using `res.type()`
 * or `res.set('Content-Type', ...)`.
 *
 *    res.format({
 *      'text/plain': function(){
 *        res.send('hey');
 *      },
 *
 *      'text/html': function(){
 *        res.send('<p>hey</p>');
 *      },
 *
 *      'appliation/json': function(){
 *        res.send({ message: 'hey' });
 *      }
 *    });
 *
 * In addition to canonicalized MIME types you may
 * also use extnames mapped to these types:
 *
 *    res.format({
 *      text: function(){
 *        res.send('hey');
 *      },
 *
 *      html: function(){
 *        res.send('<p>hey</p>');
 *      },
 *
 *      json: function(){
 *        res.send({ message: 'hey' });
 *      }
 *    });
 *
 * By default Express passes an `Error`
 * with a `.status` of 406 to `next(err)`
 * if a match is not made. If you provide
 * a `.default` callback it will be invoked
 * instead.
 *
 * @param {Object} obj
 * @return {ServerResponse} for chaining
 * @public
 */

res.format = function(obj){
  var req = this.req;
  var next = req.next;

  var fn = obj.default;
  if (fn) delete obj.default;
  var keys = Object.keys(obj);

  var key = keys.length > 0
    ? req.accepts(keys)
    : false;

  this.vary("Accept");

  if (key) {
    this.set('Content-Type', normalizeType(key).value);
    obj[key](req, this, next);
  } else if (fn) {
    fn();
  } else {
    var err = new Error('Not Acceptable');
    err.status = err.statusCode = 406;
    err.types = normalizeTypes(keys).map(function(o){ return o.value });
    next(err);
  }

  return this;
};

/**
 * Set _Content-Disposition_ header to _attachment_ with optional `filename`.
 *
 * @param {String} filename
 * @return {ServerResponse}
 * @public
 */

res.attachment = function attachment(filename) {
  if (filename) {
    this.type(extname(filename));
  }

  this.set('Content-Disposition', contentDisposition(filename));

  return this;
};

/**
 * Append additional header `field` with value `val`.
 *
 * Example:
 *
 *    res.append('Link', ['<http://localhost/>', '<http://localhost:3000/>']);
 *    res.append('Set-Cookie', 'foo=bar; Path=/; HttpOnly');
 *    res.append('Warning', '199 Miscellaneous warning');
 *
 * @param {String} field
 * @param {String|Array} val
 * @return {ServerResponse} for chaining
 * @public
 */

res.append = function append(field, val) {
  var prev = this.get(field);
  var value = val;

  if (prev) {
    // concat the new and prev vals
    value = Array.isArray(prev) ? prev.concat(val)
      : Array.isArray(val) ? [prev].concat(val)
      : [prev, val];
  }

  return this.set(field, value);
};

/**
 * Set header `field` to `val`, or pass
 * an object of header fields.
 *
 * Examples:
 *
 *    res.set('Foo', ['bar', 'baz']);
 *    res.set('Accept', 'application/json');
 *    res.set({ Accept: 'text/plain', 'X-API-Key': 'tobi' });
 *
 * Aliased as `res.header()`.
 *
 * @param {String|Object} field
 * @param {String|Array} val
 * @return {ServerResponse} for chaining
 * @public
 */

res.set =
res.header = function header(field, val) {
  if (arguments.length === 2) {
    var value = Array.isArray(val)
      ? val.map(String)
      : String(val);

    // add charset to content-type
    if (field.toLowerCase() === 'content-type') {
      if (Array.isArray(value)) {
        throw new TypeError('Content-Type cannot be set to an Array');
      }
      if (!charsetRegExp.test(value)) {
        var charset = mime.charsets.lookup(value.split(';')[0]);
        if (charset) value += '; charset=' + charset.toLowerCase();
      }
    }

    this.setHeader(field, value);
  } else {
    for (var key in field) {
      this.set(key, field[key]);
    }
  }
  return this;
};

/**
 * Get value for header `field`.
 *
 * @param {String} field
 * @return {String}
 * @public
 */

res.get = function(field){
  return this.getHeader(field);
};

/**
 * Clear cookie `name`.
 *
 * @param {String} name
 * @param {Object} [options]
 * @return {ServerResponse} for chaining
 * @public
 */

res.clearCookie = function clearCookie(name, options) {
  var opts = merge({ expires: new Date(1), path: '/' }, options);

  return this.cookie(name, '', opts);
};

/**
 * Set cookie `name` to `value`, with the given `options`.
 *
 * Options:
 *
 *    - `maxAge`   max-age in milliseconds, converted to `expires`
 *    - `signed`   sign the cookie
 *    - `path`     defaults to "/"
 *
 * Examples:
 *
 *    // "Remember Me" for 15 minutes
 *    res.cookie('rememberme', '1', { expires: new Date(Date.now() + 900000), httpOnly: true });
 *
 *    // same as above
 *    res.cookie('rememberme', '1', { maxAge: 900000, httpOnly: true })
 *
 * @param {String} name
 * @param {String|Object} value
 * @param {Object} [options]
 * @return {ServerResponse} for chaining
 * @public
 */

res.cookie = function (name, value, options) {
  var opts = merge({}, options);
  var secret = this.req.secret;
  var signed = opts.signed;

  if (signed && !secret) {
    throw new Error('cookieParser("secret") required for signed cookies');
  }

  var val = typeof value === 'object'
    ? 'j:' + JSON.stringify(value)
    : String(value);

  if (signed) {
    val = 's:' + sign(val, secret);
  }

  if ('maxAge' in opts) {
    opts.expires = new Date(Date.now() + opts.maxAge);
    opts.maxAge /= 1000;
  }

  if (opts.path == null) {
    opts.path = '/';
  }

  this.append('Set-Cookie', cookie.serialize(name, String(val), opts));

  return this;
};

/**
 * Set the location header to `url`.
 *
 * The given `url` can also be "back", which redirects
 * to the _Referrer_ or _Referer_ headers or "/".
 *
 * Examples:
 *
 *    res.location('/foo/bar').;
 *    res.location('http://example.com');
 *    res.location('../login');
 *
 * @param {String} url
 * @return {ServerResponse} for chaining
 * @public
 */

res.location = function location(url) {
  var loc = url;

  // "back" is an alias for the referrer
  if (url === 'back') {
    loc = this.req.get('Referrer') || '/';
  }

  // set location
  return this.set('Location', encodeUrl(loc));
};

/**
 * Redirect to the given `url` with optional response `status`
 * defaulting to 302.
 *
 * The resulting `url` is determined by `res.location()`, so
 * it will play nicely with mounted apps, relative paths,
 * `"back"` etc.
 *
 * Examples:
 *
 *    res.redirect('/foo/bar');
 *    res.redirect('http://example.com');
 *    res.redirect(301, 'http://example.com');
 *    res.redirect('../login'); // /blog/post/1 -> /blog/login
 *
 * @public
 */

res.redirect = function redirect(url) {
  var address = url;
  var body;
  var status = 302;

  // allow status / url
  if (arguments.length === 2) {
    if (typeof arguments[0] === 'number') {
      status = arguments[0];
      address = arguments[1];
    } else {
      deprecate('res.redirect(url, status): Use res.redirect(status, url) instead');
      status = arguments[1];
    }
  }

  // Set location header
  address = this.location(address).get('Location');

  // Support text/{plain,html} by default
  this.format({
    text: function(){
      body = statuses[status] + '. Redirecting to ' + address
    },

    html: function(){
      var u = escapeHtml(address);
      body = '<p>' + statuses[status] + '. Redirecting to <a href="' + u + '">' + u + '</a></p>'
    },

    default: function(){
      body = '';
    }
  });

  // Respond
  this.statusCode = status;
  this.set('Content-Length', Buffer.byteLength(body));

  if (this.req.method === 'HEAD') {
    this.end();
  } else {
    this.end(body);
  }
};

/**
 * Add `field` to Vary. If already present in the Vary set, then
 * this call is simply ignored.
 *
 * @param {Array|String} field
 * @return {ServerResponse} for chaining
 * @public
 */

res.vary = function(field){
  // checks for back-compat
  if (!field || (Array.isArray(field) && !field.length)) {
    deprecate('res.vary(): Provide a field name');
    return this;
  }

  vary(this, field);

  return this;
};

/**
 * Render `view` with the given `options` and optional callback `fn`.
 * When a callback function is given a response will _not_ be made
 * automatically, otherwise a response of _200_ and _text/html_ is given.
 *
 * Options:
 *
 *  - `cache`     boolean hinting to the engine it should cache
 *  - `filename`  filename of the view being rendered
 *
 * @public
 */

res.render = function render(view, options, callback) {
  var app = this.req.app;
  var done = callback;
  var opts = options || {};
  var req = this.req;
  var self = this;

  // support callback function as second arg
  if (typeof options === 'function') {
    done = options;
    opts = {};
  }

  // merge res.locals
  opts._locals = self.locals;

  // default callback to respond
  done = done || function (err, str) {
    if (err) return req.next(err);
    self.send(str);
  };

  // render
  app.render(view, opts, done);
};

// pipe the send file stream
function sendfile(res, file, options, callback) {
  var done = false;
  var streaming;

  // request aborted
  function onaborted() {
    if (done) return;
    done = true;

    var err = new Error('Request aborted');
    err.code = 'ECONNABORTED';
    callback(err);
  }

  // directory
  function ondirectory() {
    if (done) return;
    done = true;

    var err = new Error('EISDIR, read');
    err.code = 'EISDIR';
    callback(err);
  }

  // errors
  function onerror(err) {
    if (done) return;
    done = true;
    callback(err);
  }

  // ended
  function onend() {
    if (done) return;
    done = true;
    callback();
  }

  // file
  function onfile() {
    streaming = false;
  }

  // finished
  function onfinish(err) {
    if (err && err.code === 'ECONNRESET') return onaborted();
    if (err) return onerror(err);
    if (done) return;

    setImmediate(function () {
      if (streaming !== false && !done) {
        onaborted();
        return;
      }

      if (done) return;
      done = true;
      callback();
    });
  }

  // streaming
  function onstream() {
    streaming = true;
  }

  file.on('directory', ondirectory);
  file.on('end', onend);
  file.on('error', onerror);
  file.on('file', onfile);
  file.on('stream', onstream);
  onFinished(res, onfinish);

  if (options.headers) {
    // set headers on successful transfer
    file.on('headers', function headers(res) {
      var obj = options.headers;
      var keys = Object.keys(obj);

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        res.setHeader(k, obj[k]);
      }
    });
  }

  // pipe
  file.pipe(res);
}

/**
 * Stringify JSON, like JSON.stringify, but v8 optimized, with the
 * ability to escape characters that can trigger HTML sniffing.
 *
 * @param {*} value
 * @param {function} replaces
 * @param {number} spaces
 * @param {boolean} escape
 * @returns {string}
 * @private
 */

function stringify (value, replacer, spaces, escape) {
  // v8 checks arguments.length for optimizing simple call
  // https://bugs.chromium.org/p/v8/issues/detail?id=4730
  var json = replacer || spaces
    ? JSON.stringify(value, replacer, spaces)
    : JSON.stringify(value);

  if (escape) {
    json = json.replace(/[<>&]/g, function (c) {
      switch (c.charCodeAt(0)) {
        case 0x3c:
          return '\\u003c'
        case 0x3e:
          return '\\u003e'
        case 0x26:
          return '\\u0026'
        /* istanbul ignore next: unreachable default */
        default:
          return c
      }
    })
  }

  return json
}


/***/ }),

/***/ "../node_modules/express/lib/router/index.js":
/*!***************************************************!*\
  !*** ../node_modules/express/lib/router/index.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var Route = __webpack_require__(/*! ./route */ "../node_modules/express/lib/router/route.js");
var Layer = __webpack_require__(/*! ./layer */ "../node_modules/express/lib/router/layer.js");
var methods = __webpack_require__(/*! methods */ "../node_modules/methods/index.js");
var mixin = __webpack_require__(/*! utils-merge */ "../node_modules/utils-merge/index.js");
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('express:router');
var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('express');
var flatten = __webpack_require__(/*! array-flatten */ "../node_modules/array-flatten/array-flatten.js");
var parseUrl = __webpack_require__(/*! parseurl */ "../node_modules/parseurl/index.js");
var setPrototypeOf = __webpack_require__(/*! setprototypeof */ "../node_modules/setprototypeof/index.js")

/**
 * Module variables.
 * @private
 */

var objectRegExp = /^\[object (\S+)\]$/;
var slice = Array.prototype.slice;
var toString = Object.prototype.toString;

/**
 * Initialize a new `Router` with the given `options`.
 *
 * @param {Object} [options]
 * @return {Router} which is an callable function
 * @public
 */

var proto = module.exports = function(options) {
  var opts = options || {};

  function router(req, res, next) {
    router.handle(req, res, next);
  }

  // mixin Router class functions
  setPrototypeOf(router, proto)

  router.params = {};
  router._params = [];
  router.caseSensitive = opts.caseSensitive;
  router.mergeParams = opts.mergeParams;
  router.strict = opts.strict;
  router.stack = [];

  return router;
};

/**
 * Map the given param placeholder `name`(s) to the given callback.
 *
 * Parameter mapping is used to provide pre-conditions to routes
 * which use normalized placeholders. For example a _:user_id_ parameter
 * could automatically load a user's information from the database without
 * any additional code,
 *
 * The callback uses the same signature as middleware, the only difference
 * being that the value of the placeholder is passed, in this case the _id_
 * of the user. Once the `next()` function is invoked, just like middleware
 * it will continue on to execute the route, or subsequent parameter functions.
 *
 * Just like in middleware, you must either respond to the request or call next
 * to avoid stalling the request.
 *
 *  app.param('user_id', function(req, res, next, id){
 *    User.find(id, function(err, user){
 *      if (err) {
 *        return next(err);
 *      } else if (!user) {
 *        return next(new Error('failed to load user'));
 *      }
 *      req.user = user;
 *      next();
 *    });
 *  });
 *
 * @param {String} name
 * @param {Function} fn
 * @return {app} for chaining
 * @public
 */

proto.param = function param(name, fn) {
  // param logic
  if (typeof name === 'function') {
    deprecate('router.param(fn): Refactor to use path params');
    this._params.push(name);
    return;
  }

  // apply param functions
  var params = this._params;
  var len = params.length;
  var ret;

  if (name[0] === ':') {
    deprecate('router.param(' + JSON.stringify(name) + ', fn): Use router.param(' + JSON.stringify(name.substr(1)) + ', fn) instead');
    name = name.substr(1);
  }

  for (var i = 0; i < len; ++i) {
    if (ret = params[i](name, fn)) {
      fn = ret;
    }
  }

  // ensure we end up with a
  // middleware function
  if ('function' !== typeof fn) {
    throw new Error('invalid param() call for ' + name + ', got ' + fn);
  }

  (this.params[name] = this.params[name] || []).push(fn);
  return this;
};

/**
 * Dispatch a req, res into the router.
 * @private
 */

proto.handle = function handle(req, res, out) {
  var self = this;

  debug('dispatching %s %s', req.method, req.url);

  var idx = 0;
  var protohost = getProtohost(req.url) || ''
  var removed = '';
  var slashAdded = false;
  var paramcalled = {};

  // store options for OPTIONS request
  // only used if OPTIONS request
  var options = [];

  // middleware and routes
  var stack = self.stack;

  // manage inter-router variables
  var parentParams = req.params;
  var parentUrl = req.baseUrl || '';
  var done = restore(out, req, 'baseUrl', 'next', 'params');

  // setup next layer
  req.next = next;

  // for options requests, respond with a default if nothing else responds
  if (req.method === 'OPTIONS') {
    done = wrap(done, function(old, err) {
      if (err || options.length === 0) return old(err);
      sendOptionsResponse(res, options, old);
    });
  }

  // setup basic req values
  req.baseUrl = parentUrl;
  req.originalUrl = req.originalUrl || req.url;

  next();

  function next(err) {
    var layerError = err === 'route'
      ? null
      : err;

    // remove added slash
    if (slashAdded) {
      req.url = req.url.substr(1);
      slashAdded = false;
    }

    // restore altered req.url
    if (removed.length !== 0) {
      req.baseUrl = parentUrl;
      req.url = protohost + removed + req.url.substr(protohost.length);
      removed = '';
    }

    // signal to exit router
    if (layerError === 'router') {
      setImmediate(done, null)
      return
    }

    // no more matching layers
    if (idx >= stack.length) {
      setImmediate(done, layerError);
      return;
    }

    // get pathname of request
    var path = getPathname(req);

    if (path == null) {
      return done(layerError);
    }

    // find next matching layer
    var layer;
    var match;
    var route;

    while (match !== true && idx < stack.length) {
      layer = stack[idx++];
      match = matchLayer(layer, path);
      route = layer.route;

      if (typeof match !== 'boolean') {
        // hold on to layerError
        layerError = layerError || match;
      }

      if (match !== true) {
        continue;
      }

      if (!route) {
        // process non-route handlers normally
        continue;
      }

      if (layerError) {
        // routes do not match with a pending error
        match = false;
        continue;
      }

      var method = req.method;
      var has_method = route._handles_method(method);

      // build up automatic options response
      if (!has_method && method === 'OPTIONS') {
        appendMethods(options, route._options());
      }

      // don't even bother matching route
      if (!has_method && method !== 'HEAD') {
        match = false;
        continue;
      }
    }

    // no match
    if (match !== true) {
      return done(layerError);
    }

    // store route for dispatch on change
    if (route) {
      req.route = route;
    }

    // Capture one-time layer values
    req.params = self.mergeParams
      ? mergeParams(layer.params, parentParams)
      : layer.params;
    var layerPath = layer.path;

    // this should be done for the layer
    self.process_params(layer, paramcalled, req, res, function (err) {
      if (err) {
        return next(layerError || err);
      }

      if (route) {
        return layer.handle_request(req, res, next);
      }

      trim_prefix(layer, layerError, layerPath, path);
    });
  }

  function trim_prefix(layer, layerError, layerPath, path) {
    if (layerPath.length !== 0) {
      // Validate path breaks on a path separator
      var c = path[layerPath.length]
      if (c && c !== '/' && c !== '.') return next(layerError)

      // Trim off the part of the url that matches the route
      // middleware (.use stuff) needs to have the path stripped
      debug('trim prefix (%s) from url %s', layerPath, req.url);
      removed = layerPath;
      req.url = protohost + req.url.substr(protohost.length + removed.length);

      // Ensure leading slash
      if (!protohost && req.url[0] !== '/') {
        req.url = '/' + req.url;
        slashAdded = true;
      }

      // Setup base URL (no trailing slash)
      req.baseUrl = parentUrl + (removed[removed.length - 1] === '/'
        ? removed.substring(0, removed.length - 1)
        : removed);
    }

    debug('%s %s : %s', layer.name, layerPath, req.originalUrl);

    if (layerError) {
      layer.handle_error(layerError, req, res, next);
    } else {
      layer.handle_request(req, res, next);
    }
  }
};

/**
 * Process any parameters for the layer.
 * @private
 */

proto.process_params = function process_params(layer, called, req, res, done) {
  var params = this.params;

  // captured parameters from the layer, keys and values
  var keys = layer.keys;

  // fast track
  if (!keys || keys.length === 0) {
    return done();
  }

  var i = 0;
  var name;
  var paramIndex = 0;
  var key;
  var paramVal;
  var paramCallbacks;
  var paramCalled;

  // process params in order
  // param callbacks can be async
  function param(err) {
    if (err) {
      return done(err);
    }

    if (i >= keys.length ) {
      return done();
    }

    paramIndex = 0;
    key = keys[i++];
    name = key.name;
    paramVal = req.params[name];
    paramCallbacks = params[name];
    paramCalled = called[name];

    if (paramVal === undefined || !paramCallbacks) {
      return param();
    }

    // param previously called with same value or error occurred
    if (paramCalled && (paramCalled.match === paramVal
      || (paramCalled.error && paramCalled.error !== 'route'))) {
      // restore value
      req.params[name] = paramCalled.value;

      // next param
      return param(paramCalled.error);
    }

    called[name] = paramCalled = {
      error: null,
      match: paramVal,
      value: paramVal
    };

    paramCallback();
  }

  // single param callbacks
  function paramCallback(err) {
    var fn = paramCallbacks[paramIndex++];

    // store updated value
    paramCalled.value = req.params[key.name];

    if (err) {
      // store error
      paramCalled.error = err;
      param(err);
      return;
    }

    if (!fn) return param();

    try {
      fn(req, res, paramCallback, paramVal, key.name);
    } catch (e) {
      paramCallback(e);
    }
  }

  param();
};

/**
 * Use the given middleware function, with optional path, defaulting to "/".
 *
 * Use (like `.all`) will run for any http METHOD, but it will not add
 * handlers for those methods so OPTIONS requests will not consider `.use`
 * functions even if they could respond.
 *
 * The other difference is that _route_ path is stripped and not visible
 * to the handler function. The main effect of this feature is that mounted
 * handlers can operate without any code changes regardless of the "prefix"
 * pathname.
 *
 * @public
 */

proto.use = function use(fn) {
  var offset = 0;
  var path = '/';

  // default path to '/'
  // disambiguate router.use([fn])
  if (typeof fn !== 'function') {
    var arg = fn;

    while (Array.isArray(arg) && arg.length !== 0) {
      arg = arg[0];
    }

    // first arg is the path
    if (typeof arg !== 'function') {
      offset = 1;
      path = fn;
    }
  }

  var callbacks = flatten(slice.call(arguments, offset));

  if (callbacks.length === 0) {
    throw new TypeError('Router.use() requires a middleware function')
  }

  for (var i = 0; i < callbacks.length; i++) {
    var fn = callbacks[i];

    if (typeof fn !== 'function') {
      throw new TypeError('Router.use() requires a middleware function but got a ' + gettype(fn))
    }

    // add the middleware
    debug('use %o %s', path, fn.name || '<anonymous>')

    var layer = new Layer(path, {
      sensitive: this.caseSensitive,
      strict: false,
      end: false
    }, fn);

    layer.route = undefined;

    this.stack.push(layer);
  }

  return this;
};

/**
 * Create a new Route for the given path.
 *
 * Each route contains a separate middleware stack and VERB handlers.
 *
 * See the Route api documentation for details on adding handlers
 * and middleware to routes.
 *
 * @param {String} path
 * @return {Route}
 * @public
 */

proto.route = function route(path) {
  var route = new Route(path);

  var layer = new Layer(path, {
    sensitive: this.caseSensitive,
    strict: this.strict,
    end: true
  }, route.dispatch.bind(route));

  layer.route = route;

  this.stack.push(layer);
  return route;
};

// create Router#VERB functions
methods.concat('all').forEach(function(method){
  proto[method] = function(path){
    var route = this.route(path)
    route[method].apply(route, slice.call(arguments, 1));
    return this;
  };
});

// append methods to a list of methods
function appendMethods(list, addition) {
  for (var i = 0; i < addition.length; i++) {
    var method = addition[i];
    if (list.indexOf(method) === -1) {
      list.push(method);
    }
  }
}

// get pathname of request
function getPathname(req) {
  try {
    return parseUrl(req).pathname;
  } catch (err) {
    return undefined;
  }
}

// Get get protocol + host for a URL
function getProtohost(url) {
  if (typeof url !== 'string' || url.length === 0 || url[0] === '/') {
    return undefined
  }

  var searchIndex = url.indexOf('?')
  var pathLength = searchIndex !== -1
    ? searchIndex
    : url.length
  var fqdnIndex = url.substr(0, pathLength).indexOf('://')

  return fqdnIndex !== -1
    ? url.substr(0, url.indexOf('/', 3 + fqdnIndex))
    : undefined
}

// get type for error message
function gettype(obj) {
  var type = typeof obj;

  if (type !== 'object') {
    return type;
  }

  // inspect [[Class]] for objects
  return toString.call(obj)
    .replace(objectRegExp, '$1');
}

/**
 * Match path to a layer.
 *
 * @param {Layer} layer
 * @param {string} path
 * @private
 */

function matchLayer(layer, path) {
  try {
    return layer.match(path);
  } catch (err) {
    return err;
  }
}

// merge params with parent params
function mergeParams(params, parent) {
  if (typeof parent !== 'object' || !parent) {
    return params;
  }

  // make copy of parent for base
  var obj = mixin({}, parent);

  // simple non-numeric merging
  if (!(0 in params) || !(0 in parent)) {
    return mixin(obj, params);
  }

  var i = 0;
  var o = 0;

  // determine numeric gaps
  while (i in params) {
    i++;
  }

  while (o in parent) {
    o++;
  }

  // offset numeric indices in params before merge
  for (i--; i >= 0; i--) {
    params[i + o] = params[i];

    // create holes for the merge when necessary
    if (i < o) {
      delete params[i];
    }
  }

  return mixin(obj, params);
}

// restore obj props after function
function restore(fn, obj) {
  var props = new Array(arguments.length - 2);
  var vals = new Array(arguments.length - 2);

  for (var i = 0; i < props.length; i++) {
    props[i] = arguments[i + 2];
    vals[i] = obj[props[i]];
  }

  return function () {
    // restore vals
    for (var i = 0; i < props.length; i++) {
      obj[props[i]] = vals[i];
    }

    return fn.apply(this, arguments);
  };
}

// send an OPTIONS response
function sendOptionsResponse(res, options, next) {
  try {
    var body = options.join(',');
    res.set('Allow', body);
    res.send(body);
  } catch (err) {
    next(err);
  }
}

// wrap a function
function wrap(old, fn) {
  return function proxy() {
    var args = new Array(arguments.length + 1);

    args[0] = old;
    for (var i = 0, len = arguments.length; i < len; i++) {
      args[i + 1] = arguments[i];
    }

    fn.apply(this, args);
  };
}


/***/ }),

/***/ "../node_modules/express/lib/router/layer.js":
/*!***************************************************!*\
  !*** ../node_modules/express/lib/router/layer.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var pathRegexp = __webpack_require__(/*! path-to-regexp */ "../node_modules/path-to-regexp/index.js");
var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('express:router:layer');

/**
 * Module variables.
 * @private
 */

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Module exports.
 * @public
 */

module.exports = Layer;

function Layer(path, options, fn) {
  if (!(this instanceof Layer)) {
    return new Layer(path, options, fn);
  }

  debug('new %o', path)
  var opts = options || {};

  this.handle = fn;
  this.name = fn.name || '<anonymous>';
  this.params = undefined;
  this.path = undefined;
  this.regexp = pathRegexp(path, this.keys = [], opts);

  // set fast path flags
  this.regexp.fast_star = path === '*'
  this.regexp.fast_slash = path === '/' && opts.end === false
}

/**
 * Handle the error for the layer.
 *
 * @param {Error} error
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */

Layer.prototype.handle_error = function handle_error(error, req, res, next) {
  var fn = this.handle;

  if (fn.length !== 4) {
    // not a standard error handler
    return next(error);
  }

  try {
    fn(error, req, res, next);
  } catch (err) {
    next(err);
  }
};

/**
 * Handle the request for the layer.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {function} next
 * @api private
 */

Layer.prototype.handle_request = function handle(req, res, next) {
  var fn = this.handle;

  if (fn.length > 3) {
    // not a standard request handler
    return next();
  }

  try {
    fn(req, res, next);
  } catch (err) {
    next(err);
  }
};

/**
 * Check if this route matches `path`, if so
 * populate `.params`.
 *
 * @param {String} path
 * @return {Boolean}
 * @api private
 */

Layer.prototype.match = function match(path) {
  var match

  if (path != null) {
    // fast path non-ending match for / (any path matches)
    if (this.regexp.fast_slash) {
      this.params = {}
      this.path = ''
      return true
    }

    // fast path for * (everything matched in a param)
    if (this.regexp.fast_star) {
      this.params = {'0': decode_param(path)}
      this.path = path
      return true
    }

    // match the path
    match = this.regexp.exec(path)
  }

  if (!match) {
    this.params = undefined;
    this.path = undefined;
    return false;
  }

  // store values
  this.params = {};
  this.path = match[0]

  var keys = this.keys;
  var params = this.params;

  for (var i = 1; i < match.length; i++) {
    var key = keys[i - 1];
    var prop = key.name;
    var val = decode_param(match[i])

    if (val !== undefined || !(hasOwnProperty.call(params, prop))) {
      params[prop] = val;
    }
  }

  return true;
};

/**
 * Decode param value.
 *
 * @param {string} val
 * @return {string}
 * @private
 */

function decode_param(val) {
  if (typeof val !== 'string' || val.length === 0) {
    return val;
  }

  try {
    return decodeURIComponent(val);
  } catch (err) {
    if (err instanceof URIError) {
      err.message = 'Failed to decode param \'' + val + '\'';
      err.status = err.statusCode = 400;
    }

    throw err;
  }
}


/***/ }),

/***/ "../node_modules/express/lib/router/route.js":
/*!***************************************************!*\
  !*** ../node_modules/express/lib/router/route.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('express:router:route');
var flatten = __webpack_require__(/*! array-flatten */ "../node_modules/array-flatten/array-flatten.js");
var Layer = __webpack_require__(/*! ./layer */ "../node_modules/express/lib/router/layer.js");
var methods = __webpack_require__(/*! methods */ "../node_modules/methods/index.js");

/**
 * Module variables.
 * @private
 */

var slice = Array.prototype.slice;
var toString = Object.prototype.toString;

/**
 * Module exports.
 * @public
 */

module.exports = Route;

/**
 * Initialize `Route` with the given `path`,
 *
 * @param {String} path
 * @public
 */

function Route(path) {
  this.path = path;
  this.stack = [];

  debug('new %o', path)

  // route handlers for various http methods
  this.methods = {};
}

/**
 * Determine if the route handles a given method.
 * @private
 */

Route.prototype._handles_method = function _handles_method(method) {
  if (this.methods._all) {
    return true;
  }

  var name = method.toLowerCase();

  if (name === 'head' && !this.methods['head']) {
    name = 'get';
  }

  return Boolean(this.methods[name]);
};

/**
 * @return {Array} supported HTTP methods
 * @private
 */

Route.prototype._options = function _options() {
  var methods = Object.keys(this.methods);

  // append automatic head
  if (this.methods.get && !this.methods.head) {
    methods.push('head');
  }

  for (var i = 0; i < methods.length; i++) {
    // make upper case
    methods[i] = methods[i].toUpperCase();
  }

  return methods;
};

/**
 * dispatch req, res into this route
 * @private
 */

Route.prototype.dispatch = function dispatch(req, res, done) {
  var idx = 0;
  var stack = this.stack;
  if (stack.length === 0) {
    return done();
  }

  var method = req.method.toLowerCase();
  if (method === 'head' && !this.methods['head']) {
    method = 'get';
  }

  req.route = this;

  next();

  function next(err) {
    // signal to exit route
    if (err && err === 'route') {
      return done();
    }

    // signal to exit router
    if (err && err === 'router') {
      return done(err)
    }

    var layer = stack[idx++];
    if (!layer) {
      return done(err);
    }

    if (layer.method && layer.method !== method) {
      return next(err);
    }

    if (err) {
      layer.handle_error(err, req, res, next);
    } else {
      layer.handle_request(req, res, next);
    }
  }
};

/**
 * Add a handler for all HTTP verbs to this route.
 *
 * Behaves just like middleware and can respond or call `next`
 * to continue processing.
 *
 * You can use multiple `.all` call to add multiple handlers.
 *
 *   function check_something(req, res, next){
 *     next();
 *   };
 *
 *   function validate_user(req, res, next){
 *     next();
 *   };
 *
 *   route
 *   .all(validate_user)
 *   .all(check_something)
 *   .get(function(req, res, next){
 *     res.send('hello world');
 *   });
 *
 * @param {function} handler
 * @return {Route} for chaining
 * @api public
 */

Route.prototype.all = function all() {
  var handles = flatten(slice.call(arguments));

  for (var i = 0; i < handles.length; i++) {
    var handle = handles[i];

    if (typeof handle !== 'function') {
      var type = toString.call(handle);
      var msg = 'Route.all() requires a callback function but got a ' + type
      throw new TypeError(msg);
    }

    var layer = Layer('/', {}, handle);
    layer.method = undefined;

    this.methods._all = true;
    this.stack.push(layer);
  }

  return this;
};

methods.forEach(function(method){
  Route.prototype[method] = function(){
    var handles = flatten(slice.call(arguments));

    for (var i = 0; i < handles.length; i++) {
      var handle = handles[i];

      if (typeof handle !== 'function') {
        var type = toString.call(handle);
        var msg = 'Route.' + method + '() requires a callback function but got a ' + type
        throw new Error(msg);
      }

      debug('%s %o', method, this.path)

      var layer = Layer('/', {}, handle);
      layer.method = method;

      this.methods[method] = true;
      this.stack.push(layer);
    }

    return this;
  };
});


/***/ }),

/***/ "../node_modules/express/lib/utils.js":
/*!********************************************!*\
  !*** ../node_modules/express/lib/utils.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @api private
 */

var Buffer = __webpack_require__(/*! safe-buffer */ "../node_modules/express/node_modules/safe-buffer/index.js").Buffer
var contentDisposition = __webpack_require__(/*! content-disposition */ "../node_modules/content-disposition/index.js");
var contentType = __webpack_require__(/*! content-type */ "../node_modules/content-type/index.js");
var deprecate = __webpack_require__(/*! depd */ "../node_modules/depd/index.js")('express');
var flatten = __webpack_require__(/*! array-flatten */ "../node_modules/array-flatten/array-flatten.js");
var mime = __webpack_require__(/*! send */ "../node_modules/send/index.js").mime;
var etag = __webpack_require__(/*! etag */ "../node_modules/etag/index.js");
var proxyaddr = __webpack_require__(/*! proxy-addr */ "../node_modules/proxy-addr/index.js");
var qs = __webpack_require__(/*! qs */ "../node_modules/qs/lib/index.js");
var querystring = __webpack_require__(/*! querystring */ "querystring");

/**
 * Return strong ETag for `body`.
 *
 * @param {String|Buffer} body
 * @param {String} [encoding]
 * @return {String}
 * @api private
 */

exports.etag = createETagGenerator({ weak: false })

/**
 * Return weak ETag for `body`.
 *
 * @param {String|Buffer} body
 * @param {String} [encoding]
 * @return {String}
 * @api private
 */

exports.wetag = createETagGenerator({ weak: true })

/**
 * Check if `path` looks absolute.
 *
 * @param {String} path
 * @return {Boolean}
 * @api private
 */

exports.isAbsolute = function(path){
  if ('/' === path[0]) return true;
  if (':' === path[1] && ('\\' === path[2] || '/' === path[2])) return true; // Windows device path
  if ('\\\\' === path.substring(0, 2)) return true; // Microsoft Azure absolute path
};

/**
 * Flatten the given `arr`.
 *
 * @param {Array} arr
 * @return {Array}
 * @api private
 */

exports.flatten = deprecate.function(flatten,
  'utils.flatten: use array-flatten npm module instead');

/**
 * Normalize the given `type`, for example "html" becomes "text/html".
 *
 * @param {String} type
 * @return {Object}
 * @api private
 */

exports.normalizeType = function(type){
  return ~type.indexOf('/')
    ? acceptParams(type)
    : { value: mime.lookup(type), params: {} };
};

/**
 * Normalize `types`, for example "html" becomes "text/html".
 *
 * @param {Array} types
 * @return {Array}
 * @api private
 */

exports.normalizeTypes = function(types){
  var ret = [];

  for (var i = 0; i < types.length; ++i) {
    ret.push(exports.normalizeType(types[i]));
  }

  return ret;
};

/**
 * Generate Content-Disposition header appropriate for the filename.
 * non-ascii filenames are urlencoded and a filename* parameter is added
 *
 * @param {String} filename
 * @return {String}
 * @api private
 */

exports.contentDisposition = deprecate.function(contentDisposition,
  'utils.contentDisposition: use content-disposition npm module instead');

/**
 * Parse accept params `str` returning an
 * object with `.value`, `.quality` and `.params`.
 * also includes `.originalIndex` for stable sorting
 *
 * @param {String} str
 * @return {Object}
 * @api private
 */

function acceptParams(str, index) {
  var parts = str.split(/ *; */);
  var ret = { value: parts[0], quality: 1, params: {}, originalIndex: index };

  for (var i = 1; i < parts.length; ++i) {
    var pms = parts[i].split(/ *= */);
    if ('q' === pms[0]) {
      ret.quality = parseFloat(pms[1]);
    } else {
      ret.params[pms[0]] = pms[1];
    }
  }

  return ret;
}

/**
 * Compile "etag" value to function.
 *
 * @param  {Boolean|String|Function} val
 * @return {Function}
 * @api private
 */

exports.compileETag = function(val) {
  var fn;

  if (typeof val === 'function') {
    return val;
  }

  switch (val) {
    case true:
      fn = exports.wetag;
      break;
    case false:
      break;
    case 'strong':
      fn = exports.etag;
      break;
    case 'weak':
      fn = exports.wetag;
      break;
    default:
      throw new TypeError('unknown value for etag function: ' + val);
  }

  return fn;
}

/**
 * Compile "query parser" value to function.
 *
 * @param  {String|Function} val
 * @return {Function}
 * @api private
 */

exports.compileQueryParser = function compileQueryParser(val) {
  var fn;

  if (typeof val === 'function') {
    return val;
  }

  switch (val) {
    case true:
      fn = querystring.parse;
      break;
    case false:
      fn = newObject;
      break;
    case 'extended':
      fn = parseExtendedQueryString;
      break;
    case 'simple':
      fn = querystring.parse;
      break;
    default:
      throw new TypeError('unknown value for query parser function: ' + val);
  }

  return fn;
}

/**
 * Compile "proxy trust" value to function.
 *
 * @param  {Boolean|String|Number|Array|Function} val
 * @return {Function}
 * @api private
 */

exports.compileTrust = function(val) {
  if (typeof val === 'function') return val;

  if (val === true) {
    // Support plain true/false
    return function(){ return true };
  }

  if (typeof val === 'number') {
    // Support trusting hop count
    return function(a, i){ return i < val };
  }

  if (typeof val === 'string') {
    // Support comma-separated values
    val = val.split(/ *, */);
  }

  return proxyaddr.compile(val || []);
}

/**
 * Set the charset in a given Content-Type string.
 *
 * @param {String} type
 * @param {String} charset
 * @return {String}
 * @api private
 */

exports.setCharset = function setCharset(type, charset) {
  if (!type || !charset) {
    return type;
  }

  // parse type
  var parsed = contentType.parse(type);

  // set charset
  parsed.parameters.charset = charset;

  // format type
  return contentType.format(parsed);
};

/**
 * Create an ETag generator function, generating ETags with
 * the given options.
 *
 * @param {object} options
 * @return {function}
 * @private
 */

function createETagGenerator (options) {
  return function generateETag (body, encoding) {
    var buf = !Buffer.isBuffer(body)
      ? Buffer.from(body, encoding)
      : body

    return etag(buf, options)
  }
}

/**
 * Parse an extended query string with qs.
 *
 * @return {Object}
 * @private
 */

function parseExtendedQueryString(str) {
  return qs.parse(str, {
    allowPrototypes: true
  });
}

/**
 * Return new empty object.
 *
 * @return {Object}
 * @api private
 */

function newObject() {
  return {};
}


/***/ }),

/***/ "../node_modules/express/lib/view.js":
/*!*******************************************!*\
  !*** ../node_modules/express/lib/view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * express
 * Copyright(c) 2009-2013 TJ Holowaychuk
 * Copyright(c) 2013 Roman Shtylman
 * Copyright(c) 2014-2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('express:view');
var path = __webpack_require__(/*! path */ "path");
var fs = __webpack_require__(/*! fs */ "fs");

/**
 * Module variables.
 * @private
 */

var dirname = path.dirname;
var basename = path.basename;
var extname = path.extname;
var join = path.join;
var resolve = path.resolve;

/**
 * Module exports.
 * @public
 */

module.exports = View;

/**
 * Initialize a new `View` with the given `name`.
 *
 * Options:
 *
 *   - `defaultEngine` the default template engine name
 *   - `engines` template engine require() cache
 *   - `root` root path for view lookup
 *
 * @param {string} name
 * @param {object} options
 * @public
 */

function View(name, options) {
  var opts = options || {};

  this.defaultEngine = opts.defaultEngine;
  this.ext = extname(name);
  this.name = name;
  this.root = opts.root;

  if (!this.ext && !this.defaultEngine) {
    throw new Error('No default engine was specified and no extension was provided.');
  }

  var fileName = name;

  if (!this.ext) {
    // get extension from default engine name
    this.ext = this.defaultEngine[0] !== '.'
      ? '.' + this.defaultEngine
      : this.defaultEngine;

    fileName += this.ext;
  }

  if (!opts.engines[this.ext]) {
    // load engine
    var mod = this.ext.substr(1)
    debug('require "%s"', mod)

    // default engine export
    var fn = __webpack_require__("../node_modules/express/lib sync recursive")(mod).__express

    if (typeof fn !== 'function') {
      throw new Error('Module "' + mod + '" does not provide a view engine.')
    }

    opts.engines[this.ext] = fn
  }

  // store loaded engine
  this.engine = opts.engines[this.ext];

  // lookup path
  this.path = this.lookup(fileName);
}

/**
 * Lookup view by the given `name`
 *
 * @param {string} name
 * @private
 */

View.prototype.lookup = function lookup(name) {
  var path;
  var roots = [].concat(this.root);

  debug('lookup "%s"', name);

  for (var i = 0; i < roots.length && !path; i++) {
    var root = roots[i];

    // resolve the path
    var loc = resolve(root, name);
    var dir = dirname(loc);
    var file = basename(loc);

    // resolve the file
    path = this.resolve(dir, file);
  }

  return path;
};

/**
 * Render with the given options.
 *
 * @param {object} options
 * @param {function} callback
 * @private
 */

View.prototype.render = function render(options, callback) {
  debug('render "%s"', this.path);
  this.engine(this.path, options, callback);
};

/**
 * Resolve the file within the given directory.
 *
 * @param {string} dir
 * @param {string} file
 * @private
 */

View.prototype.resolve = function resolve(dir, file) {
  var ext = this.ext;

  // <path>.<ext>
  var path = join(dir, file);
  var stat = tryStat(path);

  if (stat && stat.isFile()) {
    return path;
  }

  // <path>/index.<ext>
  path = join(dir, basename(file, ext), 'index' + ext);
  stat = tryStat(path);

  if (stat && stat.isFile()) {
    return path;
  }
};

/**
 * Return a stat, maybe.
 *
 * @param {string} path
 * @return {fs.Stats}
 * @private
 */

function tryStat(path) {
  debug('stat "%s"', path);

  try {
    return fs.statSync(path);
  } catch (e) {
    return undefined;
  }
}


/***/ }),

/***/ "../node_modules/express/node_modules/safe-buffer/index.js":
/*!*****************************************************************!*\
  !*** ../node_modules/express/node_modules/safe-buffer/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable node/no-deprecated-api */
var buffer = __webpack_require__(/*! buffer */ "buffer")
var Buffer = buffer.Buffer

// alternative to using Object.keys for old browsers
function copyProps (src, dst) {
  for (var key in src) {
    dst[key] = src[key]
  }
}
if (Buffer.from && Buffer.alloc && Buffer.allocUnsafe && Buffer.allocUnsafeSlow) {
  module.exports = buffer
} else {
  // Copy properties from require('buffer')
  copyProps(buffer, exports)
  exports.Buffer = SafeBuffer
}

function SafeBuffer (arg, encodingOrOffset, length) {
  return Buffer(arg, encodingOrOffset, length)
}

// Copy static methods from Buffer
copyProps(Buffer, SafeBuffer)

SafeBuffer.from = function (arg, encodingOrOffset, length) {
  if (typeof arg === 'number') {
    throw new TypeError('Argument must not be a number')
  }
  return Buffer(arg, encodingOrOffset, length)
}

SafeBuffer.alloc = function (size, fill, encoding) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  var buf = Buffer(size)
  if (fill !== undefined) {
    if (typeof encoding === 'string') {
      buf.fill(fill, encoding)
    } else {
      buf.fill(fill)
    }
  } else {
    buf.fill(0)
  }
  return buf
}

SafeBuffer.allocUnsafe = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return Buffer(size)
}

SafeBuffer.allocUnsafeSlow = function (size) {
  if (typeof size !== 'number') {
    throw new TypeError('Argument must be a number')
  }
  return buffer.SlowBuffer(size)
}


/***/ }),

/***/ "../node_modules/finalhandler/index.js":
/*!*********************************************!*\
  !*** ../node_modules/finalhandler/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * finalhandler
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module dependencies.
 * @private
 */

var debug = __webpack_require__(/*! debug */ "../node_modules/debug/src/index.js")('finalhandler')
var encodeUrl = __webpack_require__(/*! encodeurl */ "../node_modules/encodeurl/index.js")
var escapeHtml = __webpack_require__(/*! escape-html */ "../node_modules/escape-html/index.js")
var onFinished = __webpack_require__(/*! on-finished */ "../node_modules/on-finished/index.js")
var parseUrl = __webpack_require__(/*! parseurl */ "../node_modules/parseurl/index.js")
var statuses = __webpack_require__(/*! statuses */ "../node_modules/statuses/index.js")
var unpipe = __webpack_require__(/*! unpipe */ "../node_modules/unpipe/index.js")

/**
 * Module variables.
 * @private
 */

var DOUBLE_SPACE_REGEXP = /\x20{2}/g
var NEWLINE_REGEXP = /\n/g

/* istanbul ignore next */
var defer = typeof setImmediate === 'function'
  ? setImmediate
  : function (fn) { process.nextTick(fn.bind.apply(fn, arguments)) }
var isFinished = onFinished.isFinished

/**
 * Create a minimal HTML document.
 *
 * @param {string} message
 * @private
 */

function createHtmlDocument (message) {
  var body = escapeHtml(message)
    .replace(NEWLINE_REGEXP, '<br>')
    .replace(DOUBLE_SPACE_REGEXP, ' &nbsp;')

  return '<!DOCTYPE html>\n' +
    '<html lang="en">\n' +
    '<head>\n' +
    '<meta charset="utf-8">\n' +
    '<title>Error</title>\n' +
    '</head>\n' +
    '<body>\n' +
    '<pre>' + body + '</pre>\n' +
    '</body>\n' +
    '</html>\n'
}

/**
 * Module exports.
 * @public
 */

module.exports = finalhandler

/**
 * Create a function to handle the final response.
 *
 * @param {Request} req
 * @param {Response} res
 * @param {Object} [options]
 * @return {Function}
 * @public
 */

function finalhandler (req, res, options) {
  var opts = options || {}

  // get environment
  var env = opts.env || "development" || 'development'

  // get error callback
  var onerror = opts.onerror

  return function (err) {
    var headers
    var msg
    var status

    // ignore 404 on in-flight response
    if (!err && headersSent(res)) {
      debug('cannot 404 after headers sent')
      return
    }

    // unhandled error
    if (err) {
      // respect status code from error
      status = getErrorStatusCode(err)

      if (status === undefined) {
        // fallback to status code on response
        status = getResponseStatusCode(res)
      } else {
        // respect headers from error
        headers = getErrorHeaders(err)
      }

      // get error message
      msg = getErrorMessage(err, status, env)
    } else {
      // not found
      status = 404
      msg = 'Cannot ' + req.method + ' ' + encodeUrl(getResourceName(req))
    }

    debug('default %s', status)

    // schedule onerror callback
    if (err && onerror) {
      defer(onerror, err, req, res)
    }

    // cannot actually respond
    if (headersSent(res)) {
      debug('cannot %d after headers sent', status)
      req.socket.destroy()
      return
    }

    // send response
    send(req, res, status, headers, msg)
  }
}

/**
 * Get headers from Error object.
 *
 * @param {Error} err
 * @return {object}
 * @private
 */

function getErrorHeaders (err) {
  if (!err.headers || typeof err.headers !== 'object') {
    return undefined
  }

  var headers = Object.create(null)
  var keys = Object.keys(err.headers)

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    headers[key] = err.headers[key]
  }

  return headers
}

/**
 * Get message from Error object, fallback to status message.
 *
 * @param {Error} err
 * @param {number} status
 * @param {string} env
 * @return {string}
 * @private
 */

function getErrorMessage (err, status, env) {
  var msg

  if (env !== 'production') {
    // use err.stack, which typically includes err.message
    msg = err.stack

    // fallback to err.toString() when possible
    if (!msg && typeof err.toString === 'function') {
      msg = err.toString()
    }
  }

  return msg || statuses[status]
}

/**
 * Get status code from Error object.
 *
 * @param {Error} err
 * @return {number}
 * @private
 */

function getErrorStatusCode (err) {
  // check err.status
  if (typeof err.status === 'number' && err.status >= 400 && err.status < 600) {
    return err.status
  }

  // check err.statusCode
  if (typeof err.statusCode === 'number' && err.statusCode >= 400 && err.statusCode < 600) {
    return err.statusCode
  }

  return undefined
}

/**
 * Get resource name for the request.
 *
 * This is typically just the original pathname of the request
 * but will fallback to "resource" is that cannot be determined.
 *
 * @param {IncomingMessage} req
 * @return {string}
 * @private
 */

function getResourceName (req) {
  try {
    return parseUrl.original(req).pathname
  } catch (e) {
    return 'resource'
  }
}

/**
 * Get status code from response.
 *
 * @param {OutgoingMessage} res
 * @return {number}
 * @private
 */

function getResponseStatusCode (res) {
  var status = res.statusCode

  // default status code to 500 if outside valid range
  if (typeof status !== 'number' || status < 400 || status > 599) {
    status = 500
  }

  return status
}

/**
 * Determine if the response headers have been sent.
 *
 * @param {object} res
 * @returns {boolean}
 * @private
 */

function headersSent (res) {
  return typeof res.headersSent !== 'boolean'
    ? Boolean(res._header)
    : res.headersSent
}

/**
 * Send response.
 *
 * @param {IncomingMessage} req
 * @param {OutgoingMessage} res
 * @param {number} status
 * @param {object} headers
 * @param {string} message
 * @private
 */

function send (req, res, status, headers, message) {
  function write () {
    // response body
    var body = createHtmlDocument(message)

    // response status
    res.statusCode = status
    res.statusMessage = statuses[status]

    // response headers
    setHeaders(res, headers)

    // security headers
    res.setHeader('Content-Security-Policy', "default-src 'none'")
    res.setHeader('X-Content-Type-Options', 'nosniff')

    // standard headers
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Content-Length', Buffer.byteLength(body, 'utf8'))

    if (req.method === 'HEAD') {
      res.end()
      return
    }

    res.end(body, 'utf8')
  }

  if (isFinished(req)) {
    write()
    return
  }

  // unpipe everything from the request
  unpipe(req)

  // flush the request
  onFinished(req, write)
  req.resume()
}

/**
 * Set response headers from an object.
 *
 * @param {OutgoingMessage} res
 * @param {object} headers
 * @private
 */

function setHeaders (res, headers) {
  if (!headers) {
    return
  }

  var keys = Object.keys(headers)
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i]
    res.setHeader(key, headers[key])
  }
}


/***/ }),

/***/ "../node_modules/forwarded/index.js":
/*!******************************************!*\
  !*** ../node_modules/forwarded/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * forwarded
 * Copyright(c) 2014-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

module.exports = forwarded

/**
 * Get all addresses in the request, using the `X-Forwarded-For` header.
 *
 * @param {object} req
 * @return {array}
 * @public
 */

function forwarded (req) {
  if (!req) {
    throw new TypeError('argument req is required')
  }

  // simple header parsing
  var proxyAddrs = parse(req.headers['x-forwarded-for'] || '')
  var socketAddr = req.connection.remoteAddress
  var addrs = [socketAddr].concat(proxyAddrs)

  // return all addresses
  return addrs
}

/**
 * Parse the X-Forwarded-For header.
 *
 * @param {string} header
 * @private
 */

function parse (header) {
  var end = header.length
  var list = []
  var start = header.length

  // gather addresses, backwards
  for (var i = header.length - 1; i >= 0; i--) {
    switch (header.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i
        }
        break
      case 0x2c: /* , */
        if (start !== end) {
          list.push(header.substring(start, end))
        }
        start = end = i
        break
      default:
        start = i
        break
    }
  }

  // final address
  if (start !== end) {
    list.push(header.substring(start, end))
  }

  return list
}


/***/ }),

/***/ "../node_modules/fresh/index.js":
/*!**************************************!*\
  !*** ../node_modules/fresh/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*!
 * fresh
 * Copyright(c) 2012 TJ Holowaychuk
 * Copyright(c) 2016-2017 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * RegExp to check for no-cache token in Cache-Control.
 * @private
 */

var CACHE_CONTROL_NO_CACHE_REGEXP = /(?:^|,)\s*?no-cache\s*?(?:,|$)/

/**
 * Module exports.
 * @public
 */

module.exports = fresh

/**
 * Check freshness of the response using request and response headers.
 *
 * @param {Object} reqHeaders
 * @param {Object} resHeaders
 * @return {Boolean}
 * @public
 */

function fresh (reqHeaders, resHeaders) {
  // fields
  var modifiedSince = reqHeaders['if-modified-since']
  var noneMatch = reqHeaders['if-none-match']

  // unconditional request
  if (!modifiedSince && !noneMatch) {
    return false
  }

  // Always return stale when Cache-Control: no-cache
  // to support end-to-end reload requests
  // https://tools.ietf.org/html/rfc2616#section-14.9.4
  var cacheControl = reqHeaders['cache-control']
  if (cacheControl && CACHE_CONTROL_NO_CACHE_REGEXP.test(cacheControl)) {
    return false
  }

  // if-none-match
  if (noneMatch && noneMatch !== '*') {
    var etag = resHeaders['etag']

    if (!etag) {
      return false
    }

    var etagStale = true
    var matches = parseTokenList(noneMatch)
    for (var i = 0; i < matches.length; i++) {
      var match = matches[i]
      if (match === etag || match === 'W/' + etag || 'W/' + match === etag) {
        etagStale = false
        break
      }
    }

    if (etagStale) {
      return false
    }
  }

  // if-modified-since
  if (modifiedSince) {
    var lastModified = resHeaders['last-modified']
    var modifiedStale = !lastModified || !(parseHttpDate(lastModified) <= parseHttpDate(modifiedSince))

    if (modifiedStale) {
      return false
    }
  }

  return true
}

/**
 * Parse an HTTP Date into a number.
 *
 * @param {string} date
 * @private
 */

function parseHttpDate (date) {
  var timestamp = date && Date.parse(date)

  // istanbul ignore next: guard against date.js Date.parse patching
  return typeof timestamp === 'number'
    ? timestamp
    : NaN
}

/**
 * Parse a HTTP token list.
 *
 * @param {string} str
 * @private
 */

function parseTokenList (str) {
  var end = 0
  var list = []
  var start = 0

  // gather tokens
  for (var i = 0, len = str.length; i < len; i++) {
    switch (str.charCodeAt(i)) {
      case 0x20: /*   */
        if (start === end) {
          start = end = i + 1
        }
        break
      case 0x2c: /* , */
        list.push(str.substring(start, end))
        start = end = i + 1
        break
      default:
        end = i + 1
        break
    }
  }

  // final token
  list.push(str.substring(start, end))

  return list
}


/***/ }),

/***/ "../node_modules/graphql-relay/lib/connection/arrayconnection.js":
/*!***********************************************************************!*\
  !*** ../node_modules/graphql-relay/lib/connection/arrayconnection.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionFromArray = connectionFromArray;
exports.connectionFromPromisedArray = connectionFromPromisedArray;
exports.connectionFromArraySlice = connectionFromArraySlice;
exports.connectionFromPromisedArraySlice = connectionFromPromisedArraySlice;
exports.offsetToCursor = offsetToCursor;
exports.cursorToOffset = cursorToOffset;
exports.cursorForObjectInConnection = cursorForObjectInConnection;
exports.getOffsetWithDefault = getOffsetWithDefault;

var _base = __webpack_require__(/*! ../utils/base64.js */ "../node_modules/graphql-relay/lib/utils/base64.js");

/**
 * A simple function that accepts an array and connection arguments, and returns
 * a connection object for use in GraphQL. It uses array offsets as pagination,
 * so pagination will only work if the array is static.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function connectionFromArray(data, args) {
  return connectionFromArraySlice(data, args, {
    sliceStart: 0,
    arrayLength: data.length
  });
}

/**
 * A version of `connectionFromArray` that takes a promised array, and returns a
 * promised connection.
 */
function connectionFromPromisedArray(dataPromise, args) {
  return dataPromise.then(function (data) {
    return connectionFromArray(data, args);
  });
}

/**
 * Given a slice (subset) of an array, returns a connection object for use in
 * GraphQL.
 *
 * This function is similar to `connectionFromArray`, but is intended for use
 * cases where you know the cardinality of the connection, consider it too large
 * to materialize the entire array, and instead wish pass in a slice of the
 * total result large enough to cover the range specified in `args`.
 */
function connectionFromArraySlice(arraySlice, args, meta) {
  var after = args.after,
      before = args.before,
      first = args.first,
      last = args.last;
  var sliceStart = meta.sliceStart,
      arrayLength = meta.arrayLength;

  var sliceEnd = sliceStart + arraySlice.length;
  var beforeOffset = getOffsetWithDefault(before, arrayLength);
  var afterOffset = getOffsetWithDefault(after, -1);

  var startOffset = Math.max(sliceStart - 1, afterOffset, -1) + 1;
  var endOffset = Math.min(sliceEnd, beforeOffset, arrayLength);
  if (typeof first === 'number') {
    if (first < 0) {
      throw new Error('Argument "first" must be a non-negative integer');
    }

    endOffset = Math.min(endOffset, startOffset + first);
  }
  if (typeof last === 'number') {
    if (last < 0) {
      throw new Error('Argument "last" must be a non-negative integer');
    }

    startOffset = Math.max(startOffset, endOffset - last);
  }

  // If supplied slice is too large, trim it down before mapping over it.
  var slice = arraySlice.slice(Math.max(startOffset - sliceStart, 0), arraySlice.length - (sliceEnd - endOffset));

  var edges = slice.map(function (value, index) {
    return {
      cursor: offsetToCursor(startOffset + index),
      node: value
    };
  });

  var firstEdge = edges[0];
  var lastEdge = edges[edges.length - 1];
  var lowerBound = after ? afterOffset + 1 : 0;
  var upperBound = before ? beforeOffset : arrayLength;
  return {
    edges: edges,
    pageInfo: {
      startCursor: firstEdge ? firstEdge.cursor : null,
      endCursor: lastEdge ? lastEdge.cursor : null,
      hasPreviousPage: typeof last === 'number' ? startOffset > lowerBound : false,
      hasNextPage: typeof first === 'number' ? endOffset < upperBound : false
    }
  };
}

/**
 * A version of `connectionFromArraySlice` that takes a promised array slice,
 * and returns a promised connection.
 */
function connectionFromPromisedArraySlice(dataPromise, args, arrayInfo) {
  return dataPromise.then(function (data) {
    return connectionFromArraySlice(data, args, arrayInfo);
  });
}

var PREFIX = 'arrayconnection:';

/**
 * Creates the cursor string from an offset.
 */
function offsetToCursor(offset) {
  return (0, _base.base64)(PREFIX + offset);
}

/**
 * Rederives the offset from the cursor string.
 */
function cursorToOffset(cursor) {
  return parseInt((0, _base.unbase64)(cursor).substring(PREFIX.length), 10);
}

/**
 * Return the cursor associated with an object in an array.
 */
function cursorForObjectInConnection(data, object) {
  var offset = data.indexOf(object);
  if (offset === -1) {
    return null;
  }
  return offsetToCursor(offset);
}

/**
 * Given an optional cursor and a default offset, returns the offset
 * to use; if the cursor contains a valid offset, that will be used,
 * otherwise it will be the default.
 */
function getOffsetWithDefault(cursor, defaultOffset) {
  if (typeof cursor !== 'string') {
    return defaultOffset;
  }
  var offset = cursorToOffset(cursor);
  return isNaN(offset) ? defaultOffset : offset;
}

/***/ }),

/***/ "../node_modules/graphql-relay/lib/connection/connection.js":
/*!******************************************************************!*\
  !*** ../node_modules/graphql-relay/lib/connection/connection.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connectionArgs = exports.backwardConnectionArgs = exports.forwardConnectionArgs = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

exports.connectionDefinitions = connectionDefinitions;

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

/**
 * Returns a GraphQLFieldConfigArgumentMap appropriate to include on a field
 * whose return type is a connection type with forward pagination.
 */
var forwardConnectionArgs = exports.forwardConnectionArgs = {
  after: {
    type: _graphql.GraphQLString
  },
  first: {
    type: _graphql.GraphQLInt
  }
};

/**
 * Returns a GraphQLFieldConfigArgumentMap appropriate to include on a field
 * whose return type is a connection type with backward pagination.
 */
var backwardConnectionArgs = exports.backwardConnectionArgs = {
  before: {
    type: _graphql.GraphQLString
  },
  last: {
    type: _graphql.GraphQLInt
  }
};

/**
 * Returns a GraphQLFieldConfigArgumentMap appropriate to include on a field
 * whose return type is a connection type with bidirectional pagination.
 */
var connectionArgs = exports.connectionArgs = _extends({}, forwardConnectionArgs, backwardConnectionArgs);

function resolveMaybeThunk(thingOrThunk) {
  return typeof thingOrThunk === 'function' ? // $FlowFixMe - if it's a function, we assume a thunk without arguments
  thingOrThunk() : thingOrThunk;
}

/**
 * Returns a GraphQLObjectType for a connection with the given name,
 * and whose nodes are of the specified type.
 */
function connectionDefinitions(config) {
  var nodeType = config.nodeType;

  var name = config.name || nodeType.name;
  var edgeFields = config.edgeFields || {};
  var connectionFields = config.connectionFields || {};
  var resolveNode = config.resolveNode;
  var resolveCursor = config.resolveCursor;
  var edgeType = new _graphql.GraphQLObjectType({
    name: name + 'Edge',
    description: 'An edge in a connection.',
    fields: function fields() {
      return _extends({
        node: {
          type: nodeType,
          resolve: resolveNode,
          description: 'The item at the end of the edge'
        },
        cursor: {
          type: new _graphql.GraphQLNonNull(_graphql.GraphQLString),
          resolve: resolveCursor,
          description: 'A cursor for use in pagination'
        }
      }, resolveMaybeThunk(edgeFields));
    }
  });

  var connectionType = new _graphql.GraphQLObjectType({
    name: name + 'Connection',
    description: 'A connection to a list of items.',
    fields: function fields() {
      return _extends({
        pageInfo: {
          type: new _graphql.GraphQLNonNull(pageInfoType),
          description: 'Information to aid in pagination.'
        },
        edges: {
          type: new _graphql.GraphQLList(edgeType),
          description: 'A list of edges.'
        }
      }, resolveMaybeThunk(connectionFields));
    }
  });

  return { edgeType: edgeType, connectionType: connectionType };
}

/**
 * The common page info type used by all connections.
 */
var pageInfoType = new _graphql.GraphQLObjectType({
  name: 'PageInfo',
  description: 'Information about pagination in a connection.',
  fields: function fields() {
    return {
      hasNextPage: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean),
        description: 'When paginating forwards, are there more items?'
      },
      hasPreviousPage: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLBoolean),
        description: 'When paginating backwards, are there more items?'
      },
      startCursor: {
        type: _graphql.GraphQLString,
        description: 'When paginating backwards, the cursor to continue.'
      },
      endCursor: {
        type: _graphql.GraphQLString,
        description: 'When paginating forwards, the cursor to continue.'
      }
    };
  }
});

/***/ }),

/***/ "../node_modules/graphql-relay/lib/index.js":
/*!**************************************************!*\
  !*** ../node_modules/graphql-relay/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _connection = __webpack_require__(/*! ./connection/connection.js */ "../node_modules/graphql-relay/lib/connection/connection.js");

Object.defineProperty(exports, 'backwardConnectionArgs', {
  enumerable: true,
  get: function get() {
    return _connection.backwardConnectionArgs;
  }
});
Object.defineProperty(exports, 'connectionArgs', {
  enumerable: true,
  get: function get() {
    return _connection.connectionArgs;
  }
});
Object.defineProperty(exports, 'connectionDefinitions', {
  enumerable: true,
  get: function get() {
    return _connection.connectionDefinitions;
  }
});
Object.defineProperty(exports, 'forwardConnectionArgs', {
  enumerable: true,
  get: function get() {
    return _connection.forwardConnectionArgs;
  }
});

var _arrayconnection = __webpack_require__(/*! ./connection/arrayconnection.js */ "../node_modules/graphql-relay/lib/connection/arrayconnection.js");

Object.defineProperty(exports, 'connectionFromArray', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.connectionFromArray;
  }
});
Object.defineProperty(exports, 'connectionFromArraySlice', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.connectionFromArraySlice;
  }
});
Object.defineProperty(exports, 'connectionFromPromisedArray', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.connectionFromPromisedArray;
  }
});
Object.defineProperty(exports, 'connectionFromPromisedArraySlice', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.connectionFromPromisedArraySlice;
  }
});
Object.defineProperty(exports, 'cursorForObjectInConnection', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.cursorForObjectInConnection;
  }
});
Object.defineProperty(exports, 'cursorToOffset', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.cursorToOffset;
  }
});
Object.defineProperty(exports, 'getOffsetWithDefault', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.getOffsetWithDefault;
  }
});
Object.defineProperty(exports, 'offsetToCursor', {
  enumerable: true,
  get: function get() {
    return _arrayconnection.offsetToCursor;
  }
});

var _mutation = __webpack_require__(/*! ./mutation/mutation.js */ "../node_modules/graphql-relay/lib/mutation/mutation.js");

Object.defineProperty(exports, 'mutationWithClientMutationId', {
  enumerable: true,
  get: function get() {
    return _mutation.mutationWithClientMutationId;
  }
});

var _node = __webpack_require__(/*! ./node/node.js */ "../node_modules/graphql-relay/lib/node/node.js");

Object.defineProperty(exports, 'nodeDefinitions', {
  enumerable: true,
  get: function get() {
    return _node.nodeDefinitions;
  }
});

var _plural = __webpack_require__(/*! ./node/plural.js */ "../node_modules/graphql-relay/lib/node/plural.js");

Object.defineProperty(exports, 'pluralIdentifyingRootField', {
  enumerable: true,
  get: function get() {
    return _plural.pluralIdentifyingRootField;
  }
});
Object.defineProperty(exports, 'fromGlobalId', {
  enumerable: true,
  get: function get() {
    return _node.fromGlobalId;
  }
});
Object.defineProperty(exports, 'globalIdField', {
  enumerable: true,
  get: function get() {
    return _node.globalIdField;
  }
});
Object.defineProperty(exports, 'toGlobalId', {
  enumerable: true,
  get: function get() {
    return _node.toGlobalId;
  }
});

/***/ }),

/***/ "../node_modules/graphql-relay/lib/mutation/mutation.js":
/*!**************************************************************!*\
  !*** ../node_modules/graphql-relay/lib/mutation/mutation.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * Copyright (c) 2015-present, Facebook, Inc.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * This source code is licensed under the MIT license found in the
                                                                                                                                                                                                                                                                   * LICENSE file in the root directory of this source tree.
                                                                                                                                                                                                                                                                   *
                                                                                                                                                                                                                                                                   * 
                                                                                                                                                                                                                                                                   */

exports.mutationWithClientMutationId = mutationWithClientMutationId;

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

function resolveMaybeThunk(thingOrThunk) {
  return typeof thingOrThunk === 'function' ? // $FlowFixMe - if it's a function, we assume a thunk without arguments
  thingOrThunk() : thingOrThunk;
}

/**
 * A description of a mutation consumable by mutationWithClientMutationId
 * to create a GraphQLFieldConfig for that mutation.
 *
 * The inputFields and outputFields should not include `clientMutationId`,
 * as this will be provided automatically.
 *
 * An input object will be created containing the input fields, and an
 * object will be created containing the output fields.
 *
 * mutateAndGetPayload will receive an Object with a key for each
 * input field, and it should return an Object with a key for each
 * output field. It may return synchronously, or return a Promise.
 */


/**
 * Returns a GraphQLFieldConfig for the mutation described by the
 * provided MutationConfig.
 */
function mutationWithClientMutationId(config) {
  var name = config.name,
      description = config.description,
      deprecationReason = config.deprecationReason,
      inputFields = config.inputFields,
      outputFields = config.outputFields,
      mutateAndGetPayload = config.mutateAndGetPayload;

  var augmentedInputFields = function augmentedInputFields() {
    return _extends({}, resolveMaybeThunk(inputFields), {
      clientMutationId: {
        type: _graphql.GraphQLString
      }
    });
  };
  var augmentedOutputFields = function augmentedOutputFields() {
    return _extends({}, resolveMaybeThunk(outputFields), {
      clientMutationId: {
        type: _graphql.GraphQLString
      }
    });
  };

  var outputType = new _graphql.GraphQLObjectType({
    name: name + 'Payload',
    fields: augmentedOutputFields
  });

  var inputType = new _graphql.GraphQLInputObjectType({
    name: name + 'Input',
    fields: augmentedInputFields
  });

  return {
    type: outputType,
    description: description,
    deprecationReason: deprecationReason,
    args: {
      input: { type: new _graphql.GraphQLNonNull(inputType) }
    },
    resolve: function resolve(_, _ref, context, info) {
      var input = _ref.input;

      return Promise.resolve(mutateAndGetPayload(input, context, info)).then(function (payload) {
        payload.clientMutationId = input.clientMutationId;
        return payload;
      });
    }
  };
}

/***/ }),

/***/ "../node_modules/graphql-relay/lib/node/node.js":
/*!******************************************************!*\
  !*** ../node_modules/graphql-relay/lib/node/node.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.nodeDefinitions = nodeDefinitions;
exports.toGlobalId = toGlobalId;
exports.fromGlobalId = fromGlobalId;
exports.globalIdField = globalIdField;

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

var _base = __webpack_require__(/*! ../utils/base64.js */ "../node_modules/graphql-relay/lib/utils/base64.js");

/**
 * Given a function to map from an ID to an underlying object, and a function
 * to map from an underlying object to the concrete GraphQLObjectType it
 * corresponds to, constructs a `Node` interface that objects can implement,
 * and a field config for a `node` root field.
 *
 * If the typeResolver is omitted, object resolution on the interface will be
 * handled with the `isTypeOf` method on object types, as with any GraphQL
 * interface without a provided `resolveType` method.
 */
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function nodeDefinitions(idFetcher, typeResolver) {
  var nodeInterface = new _graphql.GraphQLInterfaceType({
    name: 'Node',
    description: 'An object with an ID',
    fields: function fields() {
      return {
        id: {
          type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
          description: 'The id of the object.'
        }
      };
    },
    resolveType: typeResolver
  });

  var nodeField = {
    description: 'Fetches an object given its ID',
    type: nodeInterface,
    args: {
      id: {
        type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
        description: 'The ID of an object'
      }
    },
    resolve: function resolve(obj, _ref, context, info) {
      var id = _ref.id;
      return idFetcher(id, context, info);
    }
  };

  var nodesField = {
    description: 'Fetches objects given their IDs',
    type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(nodeInterface)),
    args: {
      ids: {
        type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLNonNull(_graphql.GraphQLID))),
        description: 'The IDs of objects'
      }
    },
    resolve: function resolve(obj, _ref2, context, info) {
      var ids = _ref2.ids;
      return Promise.all(ids.map(function (id) {
        return Promise.resolve(idFetcher(id, context, info));
      }));
    }
  };

  return { nodeInterface: nodeInterface, nodeField: nodeField, nodesField: nodesField };
}

/**
 * Takes a type name and an ID specific to that type name, and returns a
 * "global ID" that is unique among all types.
 */
function toGlobalId(type, id) {
  return (0, _base.base64)([type, id].join(':'));
}

/**
 * Takes the "global ID" created by toGlobalID, and returns the type name and ID
 * used to create it.
 */
function fromGlobalId(globalId) {
  var unbasedGlobalId = (0, _base.unbase64)(globalId);
  var delimiterPos = unbasedGlobalId.indexOf(':');
  return {
    type: unbasedGlobalId.substring(0, delimiterPos),
    id: unbasedGlobalId.substring(delimiterPos + 1)
  };
}

/**
 * Creates the configuration for an id field on a node, using `toGlobalId` to
 * construct the ID from the provided typename. The type-specific ID is fetched
 * by calling idFetcher on the object, or if not provided, by accessing the `id`
 * property on the object.
 */
function globalIdField(typeName, idFetcher) {
  return {
    description: 'The ID of an object',
    type: new _graphql.GraphQLNonNull(_graphql.GraphQLID),
    resolve: function resolve(obj, args, context, info) {
      return toGlobalId(typeName || info.parentType.name, idFetcher ? idFetcher(obj, context, info) : obj.id);
    }
  };
}

/***/ }),

/***/ "../node_modules/graphql-relay/lib/node/plural.js":
/*!********************************************************!*\
  !*** ../node_modules/graphql-relay/lib/node/plural.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pluralIdentifyingRootField = pluralIdentifyingRootField;

var _graphql = __webpack_require__(/*! graphql */ "../node_modules/graphql/index.mjs");

function pluralIdentifyingRootField(config) {
  var inputArgs = {};
  var inputType = config.inputType;
  if (inputType instanceof _graphql.GraphQLNonNull) {
    inputType = inputType.ofType;
  }
  inputArgs[config.argName] = {
    type: new _graphql.GraphQLNonNull(new _graphql.GraphQLList(new _graphql.GraphQLNonNull(inputType)))
  };
  return {
    description: config.description,
    type: new _graphql.GraphQLList(config.outputType),
    args: inputArgs,
    resolve: function resolve(obj, args, context, info) {
      var inputs = args[config.argName];
      return Promise.all(inputs.map(function (input) {
        return Promise.resolve(config.resolveSingleInput(input, context, info));
      }));
    }
  };
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

/***/ }),

/***/ "../node_modules/graphql-relay/lib/utils/base64.js":
/*!*********************************************************!*\
  !*** ../node_modules/graphql-relay/lib/utils/base64.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.base64 = base64;
exports.unbase64 = unbase64;
function base64(i) {
  return Buffer.from(i, 'utf8').toString('base64');
} /**
   * Copyright (c) 2015-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *
   * 
   */

function unbase64(i) {
  return Buffer.from(i, 'base64').toString('utf8');
}

/***/ }),

/***/ "../node_modules/graphql/error/GraphQLError.mjs":
/*!******************************************************!*\
  !*** ../node_modules/graphql/error/GraphQLError.mjs ***!
  \******************************************************/
/*! exports provided: GraphQLError, printError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return GraphQLError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return printError; });
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _language_location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../language/location */ "../node_modules/graphql/language/location.mjs");
/* harmony import */ var _language_printLocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../language/printLocation */ "../node_modules/graphql/language/printLocation.mjs");



/**
 * A GraphQLError describes an Error found during the parse, validate, or
 * execute phases of performing a GraphQL operation. In addition to a message
 * and stack trace, it also includes information about the locations in a
 * GraphQL document and/or execution result that correspond to the Error.
 */

function GraphQLError( // eslint-disable-line no-redeclare
message, nodes, source, positions, path, originalError, extensions) {
  // Compute list of blame nodes.
  var _nodes = Array.isArray(nodes) ? nodes.length !== 0 ? nodes : undefined : nodes ? [nodes] : undefined; // Compute locations in the source for the given nodes/positions.


  var _source = source;

  if (!_source && _nodes) {
    var node = _nodes[0];
    _source = node && node.loc && node.loc.source;
  }

  var _positions = positions;

  if (!_positions && _nodes) {
    _positions = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(node.loc.start);
      }

      return list;
    }, []);
  }

  if (_positions && _positions.length === 0) {
    _positions = undefined;
  }

  var _locations;

  if (positions && source) {
    _locations = positions.map(function (pos) {
      return Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(source, pos);
    });
  } else if (_nodes) {
    _locations = _nodes.reduce(function (list, node) {
      if (node.loc) {
        list.push(Object(_language_location__WEBPACK_IMPORTED_MODULE_1__["getLocation"])(node.loc.source, node.loc.start));
      }

      return list;
    }, []);
  }

  var _extensions = extensions;

  if (_extensions == null && originalError != null) {
    var originalExtensions = originalError.extensions;

    if (Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_0__["default"])(originalExtensions)) {
      _extensions = originalExtensions;
    }
  }

  Object.defineProperties(this, {
    message: {
      value: message,
      // By being enumerable, JSON.stringify will include `message` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: true,
      writable: true
    },
    locations: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _locations || undefined,
      // By being enumerable, JSON.stringify will include `locations` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_locations)
    },
    path: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: path || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(path)
    },
    nodes: {
      value: _nodes || undefined
    },
    source: {
      value: _source || undefined
    },
    positions: {
      value: _positions || undefined
    },
    originalError: {
      value: originalError
    },
    extensions: {
      // Coercing falsey values to undefined ensures they will not be included
      // in JSON.stringify() when not provided.
      value: _extensions || undefined,
      // By being enumerable, JSON.stringify will include `path` in the
      // resulting output. This ensures that the simplest possible GraphQL
      // service adheres to the spec.
      enumerable: Boolean(_extensions)
    }
  }); // Include (non-enumerable) stack trace.

  if (originalError && originalError.stack) {
    Object.defineProperty(this, 'stack', {
      value: originalError.stack,
      writable: true,
      configurable: true
    });
  } else if (Error.captureStackTrace) {
    Error.captureStackTrace(this, GraphQLError);
  } else {
    Object.defineProperty(this, 'stack', {
      value: Error().stack,
      writable: true,
      configurable: true
    });
  }
}
GraphQLError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: GraphQLError
  },
  name: {
    value: 'GraphQLError'
  },
  toString: {
    value: function toString() {
      return printError(this);
    }
  }
});
/**
 * Prints a GraphQLError to a string, representing useful location information
 * about the error's position in the source.
 */

function printError(error) {
  var output = error.message;

  if (error.nodes) {
    for (var _i2 = 0, _error$nodes2 = error.nodes; _i2 < _error$nodes2.length; _i2++) {
      var node = _error$nodes2[_i2];

      if (node.loc) {
        output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printLocation"])(node.loc);
      }
    }
  } else if (error.source && error.locations) {
    for (var _i4 = 0, _error$locations2 = error.locations; _i4 < _error$locations2.length; _i4++) {
      var location = _error$locations2[_i4];
      output += '\n\n' + Object(_language_printLocation__WEBPACK_IMPORTED_MODULE_2__["printSourceLocation"])(error.source, location);
    }
  }

  return output;
}


/***/ }),

/***/ "../node_modules/graphql/error/formatError.mjs":
/*!*****************************************************!*\
  !*** ../node_modules/graphql/error/formatError.mjs ***!
  \*****************************************************/
/*! exports provided: formatError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return formatError; });
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../jsutils/devAssert */ "../node_modules/graphql/jsutils/devAssert.mjs");


/**
 * Given a GraphQLError, format it according to the rules described by the
 * Response Format, Errors section of the GraphQL Specification.
 */
function formatError(error) {
  error || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_0__["default"])(0, 'Received null or undefined error.');
  var message = error.message || 'An unknown error occurred.';
  var locations = error.locations;
  var path = error.path;
  var extensions = error.extensions;
  return extensions ? {
    message: message,
    locations: locations,
    path: path,
    extensions: extensions
  } : {
    message: message,
    locations: locations,
    path: path
  };
}
/**
 * @see https://github.com/graphql/graphql-spec/blob/master/spec/Section%207%20--%20Response.md#errors
 */


/***/ }),

/***/ "../node_modules/graphql/error/index.mjs":
/*!***********************************************!*\
  !*** ../node_modules/graphql/error/index.mjs ***!
  \***********************************************/
/*! exports provided: GraphQLError, printError, syntaxError, locatedError, formatError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "../node_modules/graphql/error/GraphQLError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GraphQLError", function() { return _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "printError", function() { return _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["printError"]; });

/* harmony import */ var _syntaxError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./syntaxError */ "../node_modules/graphql/error/syntaxError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return _syntaxError__WEBPACK_IMPORTED_MODULE_1__["syntaxError"]; });

/* harmony import */ var _locatedError__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./locatedError */ "../node_modules/graphql/error/locatedError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return _locatedError__WEBPACK_IMPORTED_MODULE_2__["locatedError"]; });

/* harmony import */ var _formatError__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./formatError */ "../node_modules/graphql/error/formatError.mjs");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "formatError", function() { return _formatError__WEBPACK_IMPORTED_MODULE_3__["formatError"]; });







/***/ }),

/***/ "../node_modules/graphql/error/locatedError.mjs":
/*!******************************************************!*\
  !*** ../node_modules/graphql/error/locatedError.mjs ***!
  \******************************************************/
/*! exports provided: locatedError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "locatedError", function() { return locatedError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "../node_modules/graphql/error/GraphQLError.mjs");

/**
 * Given an arbitrary Error, presumably thrown while attempting to execute a
 * GraphQL operation, produce a new GraphQLError aware of the location in the
 * document responsible for the original Error.
 */

function locatedError(originalError, nodes, path) {
  // Note: this uses a brand-check to support GraphQL errors originating from
  // other contexts.
  if (originalError && Array.isArray(originalError.path)) {
    return originalError;
  }

  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"](originalError && originalError.message, originalError && originalError.nodes || nodes, originalError && originalError.source, originalError && originalError.positions, path, originalError);
}


/***/ }),

/***/ "../node_modules/graphql/error/syntaxError.mjs":
/*!*****************************************************!*\
  !*** ../node_modules/graphql/error/syntaxError.mjs ***!
  \*****************************************************/
/*! exports provided: syntaxError */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "syntaxError", function() { return syntaxError; });
/* harmony import */ var _GraphQLError__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GraphQLError */ "../node_modules/graphql/error/GraphQLError.mjs");

/**
 * Produces a GraphQLError representing a syntax error, containing useful
 * descriptive information about the syntax error's position in the source.
 */

function syntaxError(source, position, description) {
  return new _GraphQLError__WEBPACK_IMPORTED_MODULE_0__["GraphQLError"]("Syntax Error: ".concat(description), undefined, source, [position]);
}


/***/ }),

/***/ "../node_modules/graphql/execution/execute.mjs":
/*!*****************************************************!*\
  !*** ../node_modules/graphql/execution/execute.mjs ***!
  \*****************************************************/
/*! exports provided: execute, assertValidExecutionArguments, buildExecutionContext, collectFields, buildResolveInfo, resolveFieldValueOrError, defaultTypeResolver, defaultFieldResolver, getFieldDef */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "execute", function() { return execute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "assertValidExecutionArguments", function() { return assertValidExecutionArguments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildExecutionContext", function() { return buildExecutionContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collectFields", function() { return collectFields; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildResolveInfo", function() { return buildResolveInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resolveFieldValueOrError", function() { return resolveFieldValueOrError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultTypeResolver", function() { return defaultTypeResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultFieldResolver", function() { return defaultFieldResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFieldDef", function() { return getFieldDef; });
/* harmony import */ var iterall__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! iterall */ "../node_modules/iterall/index.mjs");
/* harmony import */ var _jsutils_inspect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jsutils/inspect */ "../node_modules/graphql/jsutils/inspect.mjs");
/* harmony import */ var _jsutils_memoize3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jsutils/memoize3 */ "../node_modules/graphql/jsutils/memoize3.mjs");
/* harmony import */ var _jsutils_invariant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jsutils/invariant */ "../node_modules/graphql/jsutils/invariant.mjs");
/* harmony import */ var _jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jsutils/devAssert */ "../node_modules/graphql/jsutils/devAssert.mjs");
/* harmony import */ var _jsutils_isInvalid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jsutils/isInvalid */ "../node_modules/graphql/jsutils/isInvalid.mjs");
/* harmony import */ var _jsutils_isNullish__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jsutils/isNullish */ "../node_modules/graphql/jsutils/isNullish.mjs");
/* harmony import */ var _jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../jsutils/isPromise */ "../node_modules/graphql/jsutils/isPromise.mjs");
/* harmony import */ var _jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../jsutils/isObjectLike */ "../node_modules/graphql/jsutils/isObjectLike.mjs");
/* harmony import */ var _jsutils_promiseReduce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../jsutils/promiseReduce */ "../node_modules/graphql/jsutils/promiseReduce.mjs");
/* harmony import */ var _jsutils_promiseForObject__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../jsutils/promiseForObject */ "../node_modules/graphql/jsutils/promiseForObject.mjs");
/* harmony import */ var _jsutils_Path__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../jsutils/Path */ "../node_modules/graphql/jsutils/Path.mjs");
/* harmony import */ var _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../error/GraphQLError */ "../node_modules/graphql/error/GraphQLError.mjs");
/* harmony import */ var _error_locatedError__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../error/locatedError */ "../node_modules/graphql/error/locatedError.mjs");
/* harmony import */ var _language_kinds__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../language/kinds */ "../node_modules/graphql/language/kinds.mjs");
/* harmony import */ var _type_validate__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../type/validate */ "../node_modules/graphql/type/validate.mjs");
/* harmony import */ var _type_introspection__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../type/introspection */ "../node_modules/graphql/type/introspection.mjs");
/* harmony import */ var _type_directives__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../type/directives */ "../node_modules/graphql/type/directives.mjs");
/* harmony import */ var _type_definition__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../type/definition */ "../node_modules/graphql/type/definition.mjs");
/* harmony import */ var _utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../utilities/typeFromAST */ "../node_modules/graphql/utilities/typeFromAST.mjs");
/* harmony import */ var _utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../utilities/getOperationRootType */ "../node_modules/graphql/utilities/getOperationRootType.mjs");
/* harmony import */ var _values__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./values */ "../node_modules/graphql/execution/values.mjs");






















/**
 * Terminology
 *
 * "Definitions" are the generic name for top-level statements in the document.
 * Examples of this include:
 * 1) Operations (such as a query)
 * 2) Fragments
 *
 * "Operations" are a generic name for requests in the document.
 * Examples of this include:
 * 1) query,
 * 2) mutation
 *
 * "Selections" are the definitions that can appear legally and at
 * single level of the query. These include:
 * 1) field references e.g "a"
 * 2) fragment "spreads" e.g. "...c"
 * 3) inline fragment "spreads" e.g. "...on Type { a }"
 */

/**
 * Data that must be available at all points during query execution.
 *
 * Namely, schema of the type system that is currently executing,
 * and the fragments defined in the query document
 */

function execute(argsOrSchema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver) {
  /* eslint-enable no-redeclare */
  // Extract arguments from object args if provided.
  return arguments.length === 1 ? executeImpl(argsOrSchema) : executeImpl({
    schema: argsOrSchema,
    document: document,
    rootValue: rootValue,
    contextValue: contextValue,
    variableValues: variableValues,
    operationName: operationName,
    fieldResolver: fieldResolver,
    typeResolver: typeResolver
  });
}

function executeImpl(args) {
  var schema = args.schema,
      document = args.document,
      rootValue = args.rootValue,
      contextValue = args.contextValue,
      variableValues = args.variableValues,
      operationName = args.operationName,
      fieldResolver = args.fieldResolver,
      typeResolver = args.typeResolver; // If arguments are missing or incorrect, throw an error.

  assertValidExecutionArguments(schema, document, variableValues); // If a valid execution context cannot be created due to incorrect arguments,
  // a "Response" with only errors is returned.

  var exeContext = buildExecutionContext(schema, document, rootValue, contextValue, variableValues, operationName, fieldResolver, typeResolver); // Return early errors if execution context failed.

  if (Array.isArray(exeContext)) {
    return {
      errors: exeContext
    };
  } // Return a Promise that will eventually resolve to the data described by
  // The "Response" section of the GraphQL specification.
  //
  // If errors are encountered while executing a GraphQL field, only that
  // field and its descendants will be omitted, and sibling fields will still
  // be executed. An execution which encounters errors will still result in a
  // resolved Promise.


  var data = executeOperation(exeContext, exeContext.operation, rootValue);
  return buildResponse(exeContext, data);
}
/**
 * Given a completed execution context and data, build the { errors, data }
 * response defined by the "Response" section of the GraphQL specification.
 */


function buildResponse(exeContext, data) {
  if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(data)) {
    return data.then(function (resolved) {
      return buildResponse(exeContext, resolved);
    });
  }

  return exeContext.errors.length === 0 ? {
    data: data
  } : {
    errors: exeContext.errors,
    data: data
  };
}
/**
 * Essential assertions before executing to provide developer feedback for
 * improper use of the GraphQL library.
 */


function assertValidExecutionArguments(schema, document, rawVariableValues) {
  document || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Must provide document'); // If the schema used for execution is invalid, throw an error.

  Object(_type_validate__WEBPACK_IMPORTED_MODULE_15__["assertValidSchema"])(schema); // Variables, if provided, must be an object.

  rawVariableValues == null || Object(_jsutils_isObjectLike__WEBPACK_IMPORTED_MODULE_8__["default"])(rawVariableValues) || Object(_jsutils_devAssert__WEBPACK_IMPORTED_MODULE_4__["default"])(0, 'Variables must be provided as an Object where each property is a variable value. Perhaps look to see if an unparsed JSON string was provided.');
}
/**
 * Constructs a ExecutionContext object from the arguments passed to
 * execute, which we will pass throughout the other execution methods.
 *
 * Throws a GraphQLError if a valid execution context cannot be created.
 */

function buildExecutionContext(schema, document, rootValue, contextValue, rawVariableValues, operationName, fieldResolver, typeResolver) {
  var operation;
  var hasMultipleAssumedOperations = false;
  var fragments = Object.create(null);

  for (var _i2 = 0, _document$definitions2 = document.definitions; _i2 < _document$definitions2.length; _i2++) {
    var definition = _document$definitions2[_i2];

    switch (definition.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].OPERATION_DEFINITION:
        if (!operationName && operation) {
          hasMultipleAssumedOperations = true;
        } else if (!operationName || definition.name && definition.name.value === operationName) {
          operation = definition;
        }

        break;

      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].FRAGMENT_DEFINITION:
        fragments[definition.name.value] = definition;
        break;
    }
  }

  if (!operation) {
    if (operationName) {
      return [new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]("Unknown operation named \"".concat(operationName, "\"."))];
    }

    return [new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]('Must provide an operation.')];
  }

  if (hasMultipleAssumedOperations) {
    return [new _error_GraphQLError__WEBPACK_IMPORTED_MODULE_12__["GraphQLError"]('Must provide operation name if query contains multiple operations.')];
  }

  var coercedVariableValues = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getVariableValues"])(schema, operation.variableDefinitions || [], rawVariableValues || {}, {
    maxErrors: 50
  });

  if (coercedVariableValues.errors) {
    return coercedVariableValues.errors;
  }

  return {
    schema: schema,
    fragments: fragments,
    rootValue: rootValue,
    contextValue: contextValue,
    operation: operation,
    variableValues: coercedVariableValues.coerced,
    fieldResolver: fieldResolver || defaultFieldResolver,
    typeResolver: typeResolver || defaultTypeResolver,
    errors: []
  };
}
/**
 * Implements the "Evaluating operations" section of the spec.
 */

function executeOperation(exeContext, operation, rootValue) {
  var type = Object(_utilities_getOperationRootType__WEBPACK_IMPORTED_MODULE_20__["getOperationRootType"])(exeContext.schema, operation);
  var fields = collectFields(exeContext, type, operation.selectionSet, Object.create(null), Object.create(null));
  var path = undefined; // Errors from sub-fields of a NonNull type may propagate to the top level,
  // at which point we still log the error and null the parent field, which
  // in this case is the entire response.
  //
  // Similar to completeValueCatchingError.

  try {
    var result = operation.operation === 'mutation' ? executeFieldsSerially(exeContext, type, rootValue, path, fields) : executeFields(exeContext, type, rootValue, path, fields);

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      return result.then(undefined, function (error) {
        exeContext.errors.push(error);
        return Promise.resolve(null);
      });
    }

    return result;
  } catch (error) {
    exeContext.errors.push(error);
    return null;
  }
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "write" mode.
 */


function executeFieldsSerially(exeContext, parentType, sourceValue, path, fields) {
  return Object(_jsutils_promiseReduce__WEBPACK_IMPORTED_MODULE_9__["default"])(Object.keys(fields), function (results, responseName) {
    var fieldNodes = fields[responseName];
    var fieldPath = Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_11__["addPath"])(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result === undefined) {
      return results;
    }

    if (Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
      return result.then(function (resolvedResult) {
        results[responseName] = resolvedResult;
        return results;
      });
    }

    results[responseName] = result;
    return results;
  }, Object.create(null));
}
/**
 * Implements the "Evaluating selection sets" section of the spec
 * for "read" mode.
 */


function executeFields(exeContext, parentType, sourceValue, path, fields) {
  var results = Object.create(null);
  var containsPromise = false;

  for (var _i4 = 0, _Object$keys2 = Object.keys(fields); _i4 < _Object$keys2.length; _i4++) {
    var responseName = _Object$keys2[_i4];
    var fieldNodes = fields[responseName];
    var fieldPath = Object(_jsutils_Path__WEBPACK_IMPORTED_MODULE_11__["addPath"])(path, responseName);
    var result = resolveField(exeContext, parentType, sourceValue, fieldNodes, fieldPath);

    if (result !== undefined) {
      results[responseName] = result;

      if (!containsPromise && Object(_jsutils_isPromise__WEBPACK_IMPORTED_MODULE_7__["default"])(result)) {
        containsPromise = true;
      }
    }
  } // If there are no promises, we can just return the object


  if (!containsPromise) {
    return results;
  } // Otherwise, results is a map from field name to the result of resolving that
  // field, which is possibly a promise. Return a promise that will return this
  // same map, but with any promises replaced with the values they resolved to.


  return Object(_jsutils_promiseForObject__WEBPACK_IMPORTED_MODULE_10__["default"])(results);
}
/**
 * Given a selectionSet, adds all of the fields in that selection to
 * the passed in map of fields, and returns it at the end.
 *
 * CollectFields requires the "runtime type" of an object. For a field which
 * returns an Interface or Union type, the "runtime type" will be the actual
 * Object type returned by that field.
 */


function collectFields(exeContext, runtimeType, selectionSet, fields, visitedFragmentNames) {
  for (var _i6 = 0, _selectionSet$selecti2 = selectionSet.selections; _i6 < _selectionSet$selecti2.length; _i6++) {
    var selection = _selectionSet$selecti2[_i6];

    switch (selection.kind) {
      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].FIELD:
        {
          if (!shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          var name = getFieldEntryKey(selection);

          if (!fields[name]) {
            fields[name] = [];
          }

          fields[name].push(selection);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].INLINE_FRAGMENT:
        {
          if (!shouldIncludeNode(exeContext, selection) || !doesFragmentConditionMatch(exeContext, selection, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, selection.selectionSet, fields, visitedFragmentNames);
          break;
        }

      case _language_kinds__WEBPACK_IMPORTED_MODULE_14__["Kind"].FRAGMENT_SPREAD:
        {
          var fragName = selection.name.value;

          if (visitedFragmentNames[fragName] || !shouldIncludeNode(exeContext, selection)) {
            continue;
          }

          visitedFragmentNames[fragName] = true;
          var fragment = exeContext.fragments[fragName];

          if (!fragment || !doesFragmentConditionMatch(exeContext, fragment, runtimeType)) {
            continue;
          }

          collectFields(exeContext, runtimeType, fragment.selectionSet, fields, visitedFragmentNames);
          break;
        }
    }
  }

  return fields;
}
/**
 * Determines if a field should be included based on the @include and @skip
 * directives, where @skip has higher precedence than @include.
 */

function shouldIncludeNode(exeContext, node) {
  var skip = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_17__["GraphQLSkipDirective"], node, exeContext.variableValues);

  if (skip && skip.if === true) {
    return false;
  }

  var include = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getDirectiveValues"])(_type_directives__WEBPACK_IMPORTED_MODULE_17__["GraphQLIncludeDirective"], node, exeContext.variableValues);

  if (include && include.if === false) {
    return false;
  }

  return true;
}
/**
 * Determines if a fragment is applicable to the given type.
 */


function doesFragmentConditionMatch(exeContext, fragment, type) {
  var typeConditionNode = fragment.typeCondition;

  if (!typeConditionNode) {
    return true;
  }

  var conditionalType = Object(_utilities_typeFromAST__WEBPACK_IMPORTED_MODULE_19__["typeFromAST"])(exeContext.schema, typeConditionNode);

  if (conditionalType === type) {
    return true;
  }

  if (Object(_type_definition__WEBPACK_IMPORTED_MODULE_18__["isAbstractType"])(conditionalType)) {
    return exeContext.schema.isPossibleType(conditionalType, type);
  }

  return false;
}
/**
 * Implements the logic to compute the key of a given field's entry
 */


function getFieldEntryKey(node) {
  return node.alias ? node.alias.value : node.name.value;
}
/**
 * Resolves the field on the given source object. In particular, this
 * figures out the value that the field returns by calling its resolve function,
 * then calls completeValue to complete promises, serialize scalars, or execute
 * the sub-selection-set for objects.
 */


function resolveField(exeContext, parentType, source, fieldNodes, path) {
  var fieldNode = fieldNodes[0];
  var fieldName = fieldNode.name.value;
  var fieldDef = getFieldDef(exeContext.schema, parentType, fieldName);

  if (!fieldDef) {
    return;
  }

  var resolveFn = fieldDef.resolve || exeContext.fieldResolver;
  var info = buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path); // Get the resolve function, regardless of if its result is normal
  // or abrupt (error).

  var result = resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info);
  return completeValueCatchingError(exeContext, fieldDef.type, fieldNodes, info, path, result);
}

function buildResolveInfo(exeContext, fieldDef, fieldNodes, parentType, path) {
  // The resolve function's optional fourth argument is a collection of
  // information about the current execution state.
  return {
    fieldName: fieldDef.name,
    fieldNodes: fieldNodes,
    returnType: fieldDef.type,
    parentType: parentType,
    path: path,
    schema: exeContext.schema,
    fragments: exeContext.fragments,
    rootValue: exeContext.rootValue,
    operation: exeContext.operation,
    variableValues: exeContext.variableValues
  };
} // Isolates the "ReturnOrAbrupt" behavior to not de-opt the `resolveField`
// function. Returns the result of resolveFn or the abrupt-return Error object.

function resolveFieldValueOrError(exeContext, fieldDef, fieldNodes, resolveFn, source, info) {
  try {
    // Build a JS object of arguments from the field.arguments AST, using the
    // variables scope to fulfill any variable references.
    // TODO: find a way to memoize, in case this field is within a List type.
    var args = Object(_values__WEBPACK_IMPORTED_MODULE_21__["getArgumentValues"])(fieldDef, fieldNodes[0], exeContext.variableValues); // The resolve function's optional third argument is a context value that
    // is provided to every resolve function within an execution. It is commonly
    // used to represent an authenticated user, or request-specific caches.

    var _contextValue = exeContext.contextValue;
  }

  }
