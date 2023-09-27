const calculator = require('./calculator')
test.each([
    // For addition
    [5, 10, '+', 15],
    [-10, -4, '+', -14],

    // For subtration
    [5, 10, '-', -5],
    [5, -10, '-', 15],

    // For multiplication
    [5, 10, '*', 50],
    [7, -2, '*', -14],

    // For division
    [5, 10, '/', 0.5],
    [-10, 5, '/', -2],

])("Performing basic arithmetic calculation.", (num1, num2, operator, expectedOutput) => {
    expect(calculator(num1,num2, operator)).toBe(expectedOutput);
});