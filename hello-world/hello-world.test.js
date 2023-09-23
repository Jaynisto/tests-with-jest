const helloWorld = require('./hello-world');

test("It must return 'Hello, World!' as a string.", () =>{
    const result = helloWorld();
    expect(result).toBe('Hello, World!')
});