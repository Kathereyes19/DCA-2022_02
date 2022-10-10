const wordsrepeated = require ('./funcion4');

test('RW', ()=>{

    const arraywordA: string[] = ['rubor', 'sombras', 'delineador', 'base'];
    const arraywordB: string[] = ['base', 'corrector', 'polvos', 'rubor'];
    
    const listWords: string[] = ['rubor', 'base'];


    expect(wordsrepeated(arraywordA, arraywordB)).toEqual(listWords);
});