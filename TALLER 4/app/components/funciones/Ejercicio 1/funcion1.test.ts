const joinArray = require ("./funcion1");

test("arraysresults", () =>{
    
    let lettersarrayA: string [] = [];
    lettersarrayA = ["c", "i", "m"];

    let lettersarrayB: string [] = [];
    lettersarrayB  = ["d", "a", "o"];
    
    let arrayResult = ["c","o","m","i","d","a"]


    expect(joinArray(lettersarrayA,lettersarrayB)).toEqual(arrayResult);

})