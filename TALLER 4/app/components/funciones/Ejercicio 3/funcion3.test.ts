const groups = require('./funcion3');

const letters = [ ["d", "b", "a"], ["m", "v", "s"], ["i", "c", "p"]];
const groupA = letters[0].sort();
const groupB = letters[1].sort();
const groupC= letters[2].sort();

const allgroups = [groupA, groupB, groupC];

const organized = allgroups.sort();

test('organize groups', () => {
    expect(organized).toEqual([ ["a", "b", "d"],  ["m", "s", "v"], ["c", "i", "p"]]);
    console.log(organized);
})
