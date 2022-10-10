/**
 * Ejercicio 3
 * dado un arreglo multidimensional compuesto por varios grupos de 3 letras.
 * ordene su contenido en orden alfabetico.
 *  * las letras de cada grupo están en orden aleatorio.
 *  * cada grupo de letras tambien tiene orden aleatorio en la lista multidimensional.
 *
 * Ejem:
 * dados los grupos de letras ["e", "d", "f"], ["a", "c", "b"], ["m", "o", "n"] en ese mismo orden
 * el resultado de la función debe ser ["a", "b", "c"], ["d", "e", "f"], ["m", "n", "o"] en ese mismo orden
 */

function fun3(){
    const letters = [ ["a", "c", "b"], ["k", "j", "v"], ["n", "m", "l"]];

    const groupA = letters[0].sort();
    const groupB = letters[1].sort();
    const groupC = letters[1].sort();

    const allgroups = [groupA, groupB, groupC];

    const organized = allgroups.sort();
    console.log(organized);

    return organized;
}

module.exports = fun3;