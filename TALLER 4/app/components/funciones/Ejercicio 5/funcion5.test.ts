const check = require('./funcion5');

const wordsarrayA = ['fantasia', 'comedia', 'romance', 'ficcion']
const wordsarrayB = ['ficcion', 'comedia', 'fantasia']
const includes = wordsarrayA.some(x=> wordsarrayB.includes(x))

test('Check includes', () => {
    expect(includes).toEqual(true);
    console.log(includes)
})
