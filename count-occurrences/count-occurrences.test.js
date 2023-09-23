const countOccurrences = require('./count-occurrences');

test("Counting Occurrence of a letter in a word or sentence.", () => {
    expect(countOccurrences('hello', 'l')).toBe(2);
    expect(countOccurrences('hello world', 'l')).toBe(3);
    expect(countOccurrences('programming', 'm')).toBe(2);
    expect(countOccurrences('hell', 'z')).toBe(0);
})