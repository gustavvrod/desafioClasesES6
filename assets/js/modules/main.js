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
    //obtener nombre usuario
    let nombre = document.getElementById('nombreCliente').value;
    //obtener impuestos
    let montoBrutoAnual = parseInt(document.getElementById('montoBruto').value);
    let deducciones = parseInt(document.getElementById('deducciones').value);
    if (montoBrutoAnual && deducciones) {
        let nuevoImpuesto = new Impuestos(montoBrutoAnual, deducciones);
        let nuevoCliente = new Cliente(nombre, nuevoImpuesto);
        document.getElementById('nombre').innerHTML = nuevoCliente.nombre;
        document.getElementById('resultado').innerHTML = `${nuevoCliente.nombre} los impuestos a pagar corresponden a la cantidad de: $ ${nuevoCliente.calcularImpuesto()}`;
    } else {
        alert('Debe ingresar valores numericos en los campos Monto Bruto y Deducciones.');
    }
}

console.log('Estoy cargando correctamente main');