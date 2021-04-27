const ErrroDeNegocio = require("./error-de-negocio")


module.exports = class ValidadorArgumentos {
    
    static validarRequerido(argumento, mensaje) {
        if (!argumento) {
            throw new ErrroDeNegocio(mensaje);
        }
    }
}