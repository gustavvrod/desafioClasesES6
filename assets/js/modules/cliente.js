export default class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
        this._impuesto = {};
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nuevoNombre) {
        this._nombre = nuevoNombre;
    }
    calcularImpuesto() {
        return ((montoBrutoAnual - deducciones) * (21 / 100 * x)); //repensar formula
    }
}