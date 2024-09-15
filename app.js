// Get the display element from the DOM
var display = document.getElementById('screen');
// Get all buttons with class 'btn' and cast them to an array of HTMLButtonElement
var buttons = document.querySelectorAll('.btn');
var result = "";
// Add event listeners to each button
buttons.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var target = e.target; // Cast the event target to a button element
        var value = target.innerHTML; // Get the button value
        if (value === '=') {
            try {
                // Evaluate the expression using eval, and update the display
                result = eval(result);
                display.value = result;
            }
            catch (error) {
                // Handle errors in the expression and display "Error"
                display.value = 'Error';
                result = ''; // Reset the result on error
            }
        }
        else if (value === 'AC') {
            // Clear the display and reset the result
            result = '';
            display.value = result;
        }
        else if (value === 'Del') {
            // Remove the last character from the result
            result = result.slice(0, -1);
            display.value = result;
        }
        else {
            // For numbers, operators, and decimals, append the value to the result
            result += value;
            display.value = result;
        }
    });
});
