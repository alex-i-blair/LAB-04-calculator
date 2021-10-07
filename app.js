// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { division } from './calculations.js';
import { exponent } from './calculations.js';
// reference needed DOM elements
const addNumber1 = document.getElementById('add-number-1');
const addNumber2 = document.getElementById('add-number-2');
const addButton = document.getElementById('add-button');
const addAnswer = document.getElementById('add-answer');

const subNumber1 = document.getElementById('sub-number-1');
const subNumber2 = document.getElementById('sub-number-2');
const subButton = document.getElementById('sub-button');
const subAnswer = document.getElementById('sub-answer');

const multNumber1 = document.getElementById('mult-number-1');
const multNumber2 = document.getElementById('mult-number-2');
const multButton = document.getElementById('mult-button');
const multAnswer = document.getElementById('mult-answer');

const divNumber1 = document.getElementById('div-number-1');
const divNumber2 = document.getElementById('div-number-2');
const divButton = document.getElementById('div-button');
const divAnswer = document.getElementById('div-answer');

const expNumber1 = document.getElementById('exp-number-1');
const expNumber2 = document.getElementById('exp-number-2');
const expButton = document.getElementById('exp-button');
const expAnswer = document.getElementById('exp-answer');

// set event listeners 
addButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +addNumber1.value;
    const num2 = +addNumber2.value;
    // do any needed work with the value(s)
    const sum = add(num1, num2);
    // update DOM to reflect new value(s)
    addAnswer.textContent = sum;
})
subButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +subNumber1.value;
    const num2 = +subNumber2.value;

    // do any needed work with the value(s)
    const sub = subtract(num1, num2);

    // update DOM to reflect new value(s)
    subAnswer.textContent = sub;
})
multButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +multNumber1.value;
    const num2 = +multNumber2.value;
    // do any needed work with the value(s)
    const mult = multiply(num1, num2);
    // update DOM to reflect new value(s)
    multAnswer.textContent = mult;
})
divButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +divNumber1.value;
    const num2 = +divNumber2.value;
    // do any needed work with the value(s)
    const divide = division(num1, num2);
    // update DOM to reflect new value(s)
    divAnswer.textContent = divide;
})
expButton.addEventListener('click', () => {
    // get user input(s)
    const num1 = +expNumber1.value;
    const num2 = +expNumber2.value;
    // do any needed work with the value(s)
    const exp = exponent(num1, num2);
    // update DOM to reflect new value(s)
    expAnswer.textContent = exp;
})
 
    
    
    

    
    
    
    