const getSum = require('./get-sum');
test("Calculating the sum of two numbers.", () => {
    // Tests case input

    const num1 = 8;
    const num2 = 4;

    // Call the function
    
    const result = getSum(num1,num2)

    // Check if the results are equal to the expected sum
    expect(result).toBe(12);
});