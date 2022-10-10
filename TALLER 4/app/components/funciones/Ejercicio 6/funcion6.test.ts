const Organice = require('./funcion6');

const array = ['M', 13, 'K',1, 119, 'C']

const letterA = array.slice(0, 1);
const letterB = array.slice(2, 3);
const letterC = array.slice(5, 6);

const string = letterA.concat(letterB, letterC);
const orderA = string.sort();


const numbers = array.filter(Number);
const orderB = numbers.sort((a:any,b:any)=>a-b);
const sorted = orderA.concat(orderB);

test('Sort', () => {
    expect(sorted).toEqual(['C', 'K', 'M', 1, 13, 119]);
    console.log(sorted)
})