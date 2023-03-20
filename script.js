/*
    Welcome to JavaScript. This is a JavaScript file. You can write JavaScript code here and it will be executed when the page is loaded.
    But, in order for the JavaScript file to be connected to our HTML file, we need to include it in the HTML file.
    To do this, we add a <script> element and set the "src" attribute to the path of the javascript file.
    For example:
    <script src="scripts/script.js"></script>
    This will include the script.js file in our HTML file so that the code we use will affect the HTML webpage.
    You can also write JavaScript code directly in the HTML file, but it is not recommended.
    Comments can be written in JavaScript using the "//" syntax for a single line, or the /* syntax like in CSS for multiple lines.
*/

// This is a variable. You can name it whatever you want as long as there are no spaces. You can also use numbers, but not at the start.
// const thisIsAVariable = 'This is a variable';
// Const is a constant variable. It cannot be changed.
// Let is a variable that can be changed later.
// const name = 'John Doe';
// let name = 'John Doe';
// To assign a value to a variable name, use the "=" sign followed by the value.
// const name = 'Jane Doe';

// Values which are text need to be in quotes. This is called a string.
// Quotes can be either double quotes or single quotes, it doesn't matter.
// const name = 'Jane Doe';

// Values which are numbers do not need to be in quotes, and can be used for math operations such as multiplication or addition.
// const age = 30;
// const ageTimesTen = age * 10;
// const agePlusTen = age + 10;



// This variable uses the function "getElementById()" to target a specific HTML element by its ID attribute which you assign to it.
const button = document.getElementById('button-dropdown');

// This event listener is added to the button so that when the button is clicked, it executes the "callback function" code. In this case, it toggles the dropdown.
button.addEventListener('click', () => {
    const dropdown = document.getElementById('dropdown');
    dropdown.classList.toggle('dropdown');
    dropdown.classList.toggle('dropdown-hidden');
});