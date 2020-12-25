'use strict';

var _brillo = require('./brillo/brillo.js');

var _brillo2 = _interopRequireDefault(_brillo);

var _opuesto = require('./armonias/opuesto.js');

var _opuesto2 = _interopRequireDefault(_opuesto);

var _validaciones = require('./general/validaciones.js');

var _validaciones2 = _interopRequireDefault(_validaciones);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  brillo: _brillo2.default,
  armonias: _opuesto2.default,
  validaciones: _validaciones2.default
};