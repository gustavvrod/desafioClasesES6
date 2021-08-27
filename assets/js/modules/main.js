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
    let nombre = document.getElementById('nombreUsuario');
    let nuevoCliente = new Cliente(nombre);
    document.getElementById('nombre').innerHTML = nuevoCliente.getNombre();
    //calcular impuestos
    let montoBrutoAnual = parseInt(document.getElementById('montoBruto'));
    let deducciones = parseInt(document.getElementById('deducciones'));
    if (montoBrutoAnual && deducciones) {
        let impuestosPorPagar = new Impuestos(montoBrutoAnual, deducciones);
        document.getElementById('resultado').innerHTML = impuestosPorPagar.calcularImpuestos();
    } else {
        alert('debe ingresar valores lalala');
    }
}