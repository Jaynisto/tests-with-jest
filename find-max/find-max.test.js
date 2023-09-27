const findMax = require('./find-max')
test.each([
    [[8,9,5,7,5], 9],
    [[8,-9,5,7,5], 8],
    [[8,-9,5,7,15], 15],
])("Finding the maximum number in an Array", (arr, expectOutput) => {
        expect(findMax(arr)).toBe(expectOutput);
    }
);