// import functions
import { add } from './calculations.js';
import { subtract } from './calculations.js';
import { multiply } from './calculations.js';
import { division } from './calculations.js';
import { exponent } from './calculations.js';
// reference needed DOM elements
function setupOperation(id, operation) {
    const number1 = document.getElementById(`${id}-number-1`);
    const number2 = document.getElementById(`${id}-number-2`);
    const button = document.getElementById(`${id}-button`);
    const answer = document.getElementById(`${id}-answer`);

    // set event listeners 
    button.addEventListener('click', () => {
        // get user input(s)
        const num1 = +number1.value;
        const num2 = +number2.value;
        // do any needed work with the value(s)
        const result = operation(num1, num2);
        // update DOM to reflect new value(s)
        answer.textContent = result;
    });
}
setupOperation('add', add);
setupOperation('sub', subtract);
setupOperation('mult', multiply);
setupOperation('div', division);
setupOperation('exp', exponent);   