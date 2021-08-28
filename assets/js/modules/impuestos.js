export default class Impuestos {
    constructor(montoBrutoAnual, deducciones) {
        this._montoBrutoAnual = montoBrutoAnual;
        this._deducciones = deducciones;
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
}

console.log('Estoy cargando correctamente impuestos');