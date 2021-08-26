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
    document.getElementById('nombre').innerHTML = nuevoCliente;
    //calcular impuestos
    let montoBrutoAnual = document.getElementById('montoBruto');
    let deducciones = document.getElementById('deducciones');
    if (parseInt(montoBrutoAnual) && parseInt(deducciones)) {
        let impuestosPorPagar = new Impuestos(montoBrutoAnual, deducciones);
        document.getElementById('resultado').innerHTML = impuestosPorPagar.calcularImpuestos();
    } else {
        alert('debe ingresar valores lalala');
    }
}