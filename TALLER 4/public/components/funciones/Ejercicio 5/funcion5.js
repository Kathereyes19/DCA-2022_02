"use strict";
/**
 * Ejercicio 5
 * cree una función que reciba dos arreglos y verifique que el primero contenga todos los elementos del segundo
 */
function fun5() {
    const arrayA = ['fantasia', 'comedia', 'romance', 'ficcion'];
    const arrayB = ['ficcion', 'comedia', 'fantasia'];
    const includes = wordsarrayA.some(r => wordsarrayB.includes(r));
    console.log(includes);
    return includes;
}
module.exports = fun5;
