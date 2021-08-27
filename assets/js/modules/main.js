import Cliente from './cliente.js';
import Impuestos from './impuestos.js';
console.log('Estoy cargando correctamente main');

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
    let nuevoCliente = new Cliente(nombre);
    document.getElementById('nombre').innerHTML = nuevoCliente.nombre;

    //calcular impuestos
    let montoBrutoAnual = parseInt(document.getElementById('montoBruto').value);
    let deducciones = parseInt(document.getElementById('deducciones').value);
    if (montoBrutoAnual && deducciones) {
        var impuestosPorPagar = new Impuestos(montoBrutoAnual, deducciones);
        document.getElementById('resultado').innerHTML = impuestosPorPagar.impuesto;
    } else {
        alert('debe ingresar valores lalala');
    }
}