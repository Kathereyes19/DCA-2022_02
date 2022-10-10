"use strict";
const resultinfo = require('./funcion10');
const min = 1;
const max = 6;
const dadoA = Math.round(Math.random() * (max - min)) + min;
const dadoB = Math.round(Math.random() * (max - min)) + min;
const suma = dadoA + dadoB;
test('dados', () => {
    expect(dadoA).toBeGreaterThanOrEqual(1);
    expect(dadoA).toBeLessThanOrEqual(6);
    console.log("dadoA = ", dadoA);
    expect(dadoB).toBeGreaterThanOrEqual(1);
    expect(dadoB).toBeLessThanOrEqual(6);
    console.log("dadoB = ", dadoB);
});
test('dadosAdittion', () => {
    expect(suma).toBeGreaterThanOrEqual(2);
    expect(suma).toBeLessThanOrEqual(12);
    console.log("dadosAdittion =", suma);
});
var two = 0;
var three = 0;
var four = 0;
var five = 0;
var six = 0;
var seven = 0;
var eight = 0;
var nine = 0;
var ten = 0;
var eleven = 0;
var twelve = 0;
var i;
for (i = 1; i <= 30; i++) {
    const dadoA = Math.round(Math.random() * (max - min)) + min;
    const dadoB = Math.round(Math.random() * (max - min)) + min;
    const suma = dadoA + dadoB;
    switch (suma) {
        case 1:
            two++;
            break;
        case 2:
            three++;
            break;
        case 3:
            four++;
            break;
        case 4:
            five++;
            break;
        case 5:
            six++;
            break;
        case 6:
            seven++;
            break;
        case 7:
            eight++;
            break;
        case 8:
            nine++;
            break;
        case 9:
            ten++;
            break;
        case 10:
            eleven++;
            break;
        case 11:
            twelve++;
            break;
    }
}
const Results = ["2:", two, "3:", three, "4:", four, "5:", five, "6:", six, "7:", seven, "8:", eight, "9:", nine, "10:", ten, "11:", eleven, "12:", twelve];
test('Result of the all additions', () => {
    console.log(Results);
});
