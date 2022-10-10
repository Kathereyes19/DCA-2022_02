"use strict";
const wordsrepeated = require('./funcion4');
test('RW', () => {
    const arraywordA = ['rubor', 'sombras', 'delineador', 'base'];
    const arraywordB = ['base', 'corrector', 'polvos', 'rubor'];
    const listWords = ['rubor', 'base'];
    expect(wordsrepeated(arraywordA, arraywordB)).toEqual(listWords);
});
