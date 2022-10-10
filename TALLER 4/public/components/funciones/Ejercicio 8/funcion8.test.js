"use strict";
const ideasarray = require('./funcion8');
test('Clasification ideas', () => {
    const ideas = ['buena', 'normal', 'excelente'];
    expect(ideasarray(ideas)).toBe('publicar, fantastico');
});
