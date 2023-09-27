const countOccurrences = require('./count-occurrences');

test.each([

    ['hello', 'l',2],
    ['hello world', 'l', 3],
    ['programming', 'm', 2],
    ['hell', 'z', 0],
    ['world war stratonery', 'r', 4]

 ])("Counting Occurrence of a letter in a word or sentence.", (input, letter, expectation) => {
    expect(countOccurrences(input,letter)).toBe(expectation);
})