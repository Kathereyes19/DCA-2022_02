const ideasarray = require ('./funcion8');

test('Clasification ideas', () =>{

    const ideas: string[] = ['buena', 'normal', 'excelente'];
    expect(ideasarray(ideas)).toBe('publicar, fantastico');
});