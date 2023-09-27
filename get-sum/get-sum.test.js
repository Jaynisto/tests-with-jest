const getSum = require('./get-sum');
test.each([
    // Tests case inputs the third element is the expected output.

    [8, 4, 12],
    [7, 7, 14],
    [15, -5, 10],
    [-1,-9,-10],
 ])("Calculating the sum of two numbers.", (num1,num2,expectOutput) => {
    // Check if the results are equal to the expected sum
    expect(getSum(num1,num2)).toBe(expectOutput);
});