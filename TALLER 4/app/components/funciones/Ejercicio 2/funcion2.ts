/**
 * Ejercicio 2
 * Dado un arreglo de numeros, devuelva un arreglo con dos listas en su interios,
 * la primera contendrá los números pares del arreglo y la segunda los impares
 */

 let arraynumbers: number [] = [];
 arraynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function fun2(array: Array <number>){
let arrayA: Array<number> = [];
let arrayB: Array<number>  = [];

array.forEach(element => {
    
    if(element%2 == 0){
        arrayA.push(element);
    } else {
        arrayB.push(element);
    }
});
console.log(arrayA, arrayB,);
}

console.log(fun2(arraynumbers));

module.exports = fun2;