"use strict";
/**
 * Ejercicio 9
 * calcular el factorial de un número
 */
function fun9() {
    var number = 4;
    var i;
    var total = 1;
    for (i = 1; i <= number; i++) {
        total = total * i;
    }
    return total;
}
module.exports = fun9;
