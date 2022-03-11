// add event listeners too all buttons
//pass those numbers and operators into the display
//calulate the function 
//display the answer 
const calcDisplay = document.getElementById("calcDisplay");

// the following create constants from the "number buttons" on the calculator and add event listeners to them which then pass that number to the display function, which adds the number to the current string displayed on the calculator
const one_div = document.getElementById("one");
one_div.addEventListener('click', function() {displayEquation("1")});

const two_div = document.getElementById("two");
two_div.addEventListener('click', function() {displayEquation("2")});

const three_div = document.getElementById("three");
three_div.addEventListener('click', function() {displayEquation("3")});

const four_div = document.getElementById("four");
four_div.addEventListener('click', function() {displayEquation("4")});

const five_div = document.getElementById("five");
five_div.addEventListener('click', function() {displayEquation("5")});

const six_div = document.getElementById("six");
six_div.addEventListener('click', function() {displayEquation("6")});

const seven_div = document.getElementById("seven");
seven_div.addEventListener('click', function() {displayEquation("7")});

const eight_div = document.getElementById("eight");
eight_div.addEventListener('click', function() {displayEquation("8")});

const nine_div = document.getElementById("nine");
nine_div.addEventListener('click', function() {displayEquation("9")});

const zero_div = document.getElementById("zero");
zero_div.addEventListener('click', function() {displayEquation("0")});

// the following create constants from the "operator buttons" and pass those to the display function

const add_div = document.getElementById("add");
add_div.addEventListener('click', function() {displayEquation("+")});

const subtract_div = document.getElementById("subtract");
subtract_div.addEventListener('click', function() {displayEquation("-")});

const multiply_div = document.getElementById("multiply");
multiply_div.addEventListener('click', function() {displayEquation("*")});

const divide_div = document.getElementById("divide");
divide_div.addEventListener('click', function() {displayEquation("/")});

// the following creates a constant for the AC or clear button, and runs the clearEquation function
const clearButton_div = document.getElementById("clearButton");
clearButton_div.addEventListener('click', clearEquation);

function displayEquation(input) {
    calcDisplay.innerHTML = calcDisplay.innerHTML + input;
};

function clearEquation() {
    calcDisplay.innerHTML = "";
}

const equals_div = document.getElementById("equals");
equals_div.addEventListener('click', function() {giveTheAnswer(calcDisplay)});

function giveTheAnswer (input) {
    let answer = eval(input.innerHTML);
    console.log(answer);
    calcDisplay.innerHTML = answer;
};
