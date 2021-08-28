import Cliente from './cliente.js';
import Impuestos from './impuestos.js';

export default {
    //evento click
    cargaGeneral: () => {
        let elBotonCalcularImpuestos = document.getElementById('calcularImpuestos');
        elBotonCalcularImpuestos.addEventListener('click', calcularImpuestos);
    }
}

let calcularImpuestos = () => {
    //registro usuario
    let nombre = document.getElementById('nombreCliente').value;
    //calcular impuestos
    let montoBrutoAnual = parseInt(document.getElementById('montoBruto').value);
    let deducciones = parseInt(document.getElementById('deducciones').value);
    if (montoBrutoAnual && deducciones) {
        let nuevoImpuesto = new Impuestos(montoBrutoAnual, deducciones);
        //impuestoPorPagar = new Impuestos(montoBrutoAnual, deducciones);
        //document.getElementById('resultado').innerHTML = impuestoPorPagar.impuesto;
        let nuevoCliente = new Cliente(nombre, nuevoImpuesto);
        document.getElementById('nombre').innerHTML = nuevoCliente.nombre;
        document.getElementById('resultado').innerHTML = nuevoCliente.calcularImpuesto();
    } else {
        alert('Debe ingresar valores numericos en los campos Monto Bruto y Deducciones.');
    }
}

console.log('Estoy cargando correctamente main');