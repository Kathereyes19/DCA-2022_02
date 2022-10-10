"use strict";
/**
 * ejercicio 1
 * cree una función que recibe 2 arreglos como parametros.
 * luego combina estos arreglos en uno solo, alternando sus valores.
 *
 * ejem: dados los arreglos ["h", "a", "c"] y [7, 4, 17, 10, 48],
 * la respuesta deber ser: ["h", 7, "a", 4, "c", 17, 10, 48]
 *
 * note que los arreglos pueden ser de diferente tamaños y el contenido puede ser cualquier tipo de dato
 */
let lettersarrayA = [];
lettersarrayA = ["c", "i", "m"];
let lettersarrayB = [];
lettersarrayB = ["d", "a", "o"];
function fun1(arrayA, arrayB) {
    let size_array = arrayA.length + arrayB.length;
    let array = [];
    for (let a = 0; a < size_array; a++) {
        if (arrayA[a] !== undefined) {
            array.push(arrayA[a]);
        }
        if (arrayB[a] !== undefined) {
            array.push(arrayB[a]);
        }
    }
    return array;
}
console.log(fun1(lettersarrayA, lettersarrayB));
module.exports = fun1;
