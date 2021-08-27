import Impuestos from "./impuestos";

export default class Cliente {
    constructor(nombre) {
        this._nombre = nombre;
        this._impuesto = Impuestos;
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

}

console.log('Estoy cargando correctamente cliente');