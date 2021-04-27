const { validarRequerido } = require("../../validacion-argumento");

module.exports = class Usuario {
    #nombre;
    #apellido;
    #identificacion;
    #correo;

    constructor(nombre, apellido, identificacion, correo) {
        
        validarRequerido(nombre, "El nombre es un valor requerido");
        validarRequerido(apellido, "El apellido es un valor requerido");
        validarRequerido(correo, "El correo es un valor requerido");
        
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#identificacion = identificacion;
        this.#correo = correo;

    }

    get nombre() {
        return this.#nombre;
    }

    get apellido() {
        return this.#apellido;
    }

    get identificacion() {
        return this.#identificacion;
    }

    get correo() {
        return this.#correo;
    }
}