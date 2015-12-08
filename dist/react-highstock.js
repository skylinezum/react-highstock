(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"), require("Highstock"));
	else if(typeof define === 'function' && define.amd)
		define(["React", "Highstock"], factory);
	else if(typeof exports === 'object')
		exports["ReactHighstock"] = factory(require("React"), require("Highstock"));
	else
		root["ReactHighstock"] = factory(root["React"], root["Highstock"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var Highstock = __webpack_require__(2);
	var React = __webpack_require__(1);
	var update = __webpack_require__(1).addons.update;
	module.exports = React.createClass({
	    displayName: 'Highstock',

	    renderChart: function renderChart() {
	        if (!this.props.config) {
	            throw new Error('Config has to be specified, for the Highchart component');
	        }

	        var config = this.props.config;
	        var node = this.refs.chart.getDOMNode();

	        if (!config.chart) {
	            config = update(config, { chart: { $set: {} } });
	        }

	        config = update(config, { chart: { renderTo: { $set: node } } });

	        this.chart = new Highstock.Chart(config);
	    },

	    getChart: function getChart() {
	        if (!this.chart) {
	            throw new Error('getChart() should not be called before the component is mounted');
	        }
	        return this.chart;
	    },

	    componentDidMount: function componentDidMount() {
	        this.renderChart();
	    },
	    componentDidUpdate: function componentDidUpdate() {
	        this.renderChart();
	    },
	    render: function render() {
	        return React.createElement('div', { className: 'chart', ref: 'chart' });
	    }
	});

	module.exports.Highstock = Highstock;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }
/******/ ])
});
;