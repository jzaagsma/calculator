// add event listeners too all buttons
//pass those numbers and operators into the display
//calulate the function 
//display the answer 
const calcDisplay = document.getElementById("calcDisplay");

// the following create constants from the "number buttons" on the calculator and add event listeners to them which then pass that number to the display function, which adds the number to the current string displayed on the calculator
const one_div = document.getElementById("one");
one_div.addEventListener('click', function() {displayEquation(1)});
const two_div = document.getElementById("two");
two_div.addEventListener('click', function() {displayEquation(2)});
const three_div = document.getElementById("three");
three_div.addEventListener('click', function() {displayEquation(3)});
const four_div = document.getElementById("four");
four_div.addEventListener('click', function() {displayEquation(4)});
const five_div = document.getElementById("five");
five_div.addEventListener('click', function() {displayEquation(5)});
const six_div = document.getElementById("six");
six_div.addEventListener('click', function() {displayEquation(6)});
const seven_div = document.getElementById("seven");
seven_div.addEventListener('click', function() {displayEquation(7)});
const eight_div = document.getElementById("eight");
eight_div.addEventListener('click', function() {displayEquation(8)});
const nine_div = document.getElementById("nine");
nine_div.addEventListener('click', function() {displayEquation(9)});
const zero_div = document.getElementById("zero");
zero_div.addEventListener('click', function() {displayEquation(0)});

// the following create constants from the "operator buttons" 




function displayEquation(input) {
    console.log(input)
    calcDisplay.innerHTML = calcDisplay.innerHTML + input;
};