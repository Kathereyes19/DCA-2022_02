"use strict";
const separatenumbers = require('./funcion2');
test("separate numbers", () => {
    let arraynumbers = [];
    arraynumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result;
    result = [[6, 8], [5, 7]];
    expect(separatenumbers(arraynumbers)).not.toEqual(result);
});
