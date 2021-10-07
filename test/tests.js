// IMPORT MODULES under test here:
import { 
    add,
    subtract,
    multiply,
    division,
    exponent
} from '../calculations.js';

const test = QUnit.test;

// name your test by what it is testing
test('test math 5+3', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 5;
    const y = 3;
    const expected = 8;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test math 3-4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const expected = -1;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = subtract(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('test math 3*4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 3;
    const y = 4;
    const expected = 12;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = multiply(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
test('test math 6/2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 6;
    const y = 2;
    const expected = 3;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = division(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('test math 2^4', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const x = 2;
    const y = 4;
    const expected = 16;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = exponent(x, y); // use your function here

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});