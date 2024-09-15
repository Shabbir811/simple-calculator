// Get the display element from the DOM
let display = document.getElementById('screen') as HTMLInputElement;

// Get all buttons with class 'btn' and cast them to an array of HTMLButtonElement
let buttons = document.querySelectorAll('.btn') as NodeListOf<HTMLButtonElement>;
let result =""
// Add event listeners to each button
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let target = e.target as HTMLButtonElement;  // Cast the event target to a button element
        let value = target.innerHTML;  // Get the button value

        if (value === '=') {
            try {
                // Evaluate the expression using eval, and update the display
                result = eval(result);
                display.value = result;
            } catch (error) {
                // Handle errors in the expression and display "Error"
                display.value = 'Error';
                result = '';  // Reset the result on error
            }
        } else if (value === 'AC') {
            // Clear the display and reset the result
            result = '';
            display.value = result;
        } else if (value === 'Del') {
            // Remove the last character from the result
            result = result.slice(0, -1);
            display.value = result;
        } else {
            // For numbers, operators, and decimals, append the value to the result
            result += value;
            display.value = result;
        }
    });
});
