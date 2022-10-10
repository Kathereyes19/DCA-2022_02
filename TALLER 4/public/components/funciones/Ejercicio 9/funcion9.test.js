"use strict";
const factorization = require('./funcion9');
var number = 4;
var i;
var total = 1;
for (i = 1; i <= number; i++) {
    total = total * i;
}
test('factorial result', () => {
    expect(total).toEqual(24);
    console.log(total);
});
