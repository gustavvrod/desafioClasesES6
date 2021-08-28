export default class Cliente {
    constructor(nombre, impuesto = null) {
        this._nombre = nombre;
        this._impuesto = impuesto;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }

    calcularImpuesto() {

        let mBA = this._impuesto.montoBrutoAnual;
        let dD = this._impuesto.deducciones;
        return ((mBA - dD) * ((21 / 100) * 100)); //repensar formula

    }
}

console.log('Estoy cargando correctamente cliente');

/*
import Impuestos from './impuestos.js';

export default class Cliente {
    constructor(nombre, impuesto = new Impuestos(), montoBrutoAnual, deducciones) {
        this._nombre = nombre;
        this._impuesto = impuesto;
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    get impuesto() {
        return this._impuesto;
    }
    set impuesto(nuevoImpuesto) {
        this._impuesto = nuevoImpuesto;
    }
    get montoBrutoAnual() {
        return this._montoBrutoAnual;
    }
    get deducciones() {
        return this._deducciones;
    }
    set montoBrutoAnual(nuevoMontoBrutoAnual) {
        this._montoBrutoAnual = nuevoMontoBrutoAnual;
    }
    set deducciones(nuevoDeducciones) {
        this._deducciones = nuevoDeducciones;
    }
    calcularImpuesto() {
        console.log(6500000 - 100000);
        return ((this.montoBrutoAnual - this.deducciones) * ((21 * 100) / 100)); //repensar formula

    }
}

*/