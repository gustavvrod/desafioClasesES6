"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cliente = _interopRequireDefault(require("./cliente.js"));

var _impuestos = _interopRequireDefault(require("./impuestos.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  //evento click
  cargaGeneral: function cargaGeneral() {
    var elBotonCalcularImpuestos = document.getElementById('calcularImpuestos');
    elBotonCalcularImpuestos.addEventListener('click', calcularImpuestos);
  }
};
exports["default"] = _default;

var calcularImpuestos = function calcularImpuestos() {
  //obtener nombre usuario
  var nombre = document.getElementById('nombreCliente').value; //obtener impuestos

  var montoBrutoAnual = parseInt(document.getElementById('montoBruto').value);
  var deducciones = parseInt(document.getElementById('deducciones').value);

  if (montoBrutoAnual && deducciones) {
    var nuevoImpuesto = new _impuestos["default"](montoBrutoAnual, deducciones);
    var nuevoCliente = new _cliente["default"](nombre, nuevoImpuesto);
    document.getElementById('nombre').innerHTML = nuevoCliente.nombre;
    document.getElementById('resultado').innerHTML = nuevoCliente.calcularImpuesto();
  } else {
    alert('Debe ingresar valores numericos en los campos Monto Bruto y Deducciones.');
  }
};

console.log('Estoy cargando correctamente main');