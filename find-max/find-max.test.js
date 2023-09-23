const findMax = require('./find-max')
test(
    "Finding the maximum number in an Array", () => {
        expect(findMax([8,9,5,7,5])).toBe(9);
        expect(findMax([8,-9,5,7,5])).toBe(8);
    }
);