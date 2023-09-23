const calculator = require('./calculator')
test ("Performing basic arithmetic calculation.", () => {
    // Test case inputs
    const num1 = 5;
    const num2 = 10;

    // Addition
    expect(calculator(num1,num2, '+')).toBe(15);
    
    // Subtraction
    expect(calculator(num1,num2, '-')).toBe(-5);

    // Multiplication
    expect(calculator(num1,num2, '*')).toBe(50);

    // Division
    expect(calculator(num1,num2, '/')).toBe(0.5);

});