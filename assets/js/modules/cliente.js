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
        return ((mBA - dD) * ((21 * 100) / 100)); //repensar formula
    }
}

console.log('Estoy cargando correctamente cliente');