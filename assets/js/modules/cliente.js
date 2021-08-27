import Impuestos from "./impuestos";

export default class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
        this._impuesto = new Impuestos();
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
    calcularImpuesto() {
        console.log('this.montoBrutoAnual ' + montoBrutoAnual);
        return (this.montoBrutoAnual - this.deducciones) * (21 / 100); //repensar formula
    }
}

console.log('Estoy cargando correctamente cliente');