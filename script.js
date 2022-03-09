//Number buttons
const sevenButton = document.querySelector("#seven-button");
const eightButton = document.querySelector("#eight-button");
const nineButton = document.querySelector("#nine-button");
const fourButton = document.querySelector("#four-button");
const fiveButton = document.querySelector("#five-button");
const sixButton = document.querySelector("#six-button");
const oneButton = document.querySelector("#one-button");
const twoButton = document.querySelector("#two-button");
const threeButton = document.querySelector("#three-button");
const zeroButton = document.querySelector("#zero-button");

const clearButton = document.querySelector("#clear-button");
const deleteButton = document.querySelector("#delete-button");
const decimalPointButton = document.querySelector("#decimal-point-button");

//operator buttons
const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const equalsButton = document.querySelector("#equals-button");

const topDisplay = document.querySelector(".top-display");
const bottomDisplay = document.querySelector(".bottom-display");

let topDisplayValue = topDisplay.textContent;
let firstNumber;
let secondNumber = 2;
let operator = "";

sevenButton.addEventListener("click", () => updateDisplay("7"));
eightButton.addEventListener("click", () => updateDisplay("8"));
nineButton.addEventListener("click", () => updateDisplay("9"));
fourButton.addEventListener("click", () => updateDisplay("4"));
fiveButton.addEventListener("click", () => updateDisplay("5"));
sixButton.addEventListener("click", () => updateDisplay("6"));
oneButton.addEventListener("click", () => updateDisplay("1"));
twoButton.addEventListener("click", () => updateDisplay("2"));
threeButton.addEventListener("click", () => updateDisplay("3"));
zeroButton.addEventListener("click", () => updateDisplay("0"));

decimalPointButton.addEventListener("click", () => updateDisplayDecimal("."));

addButton.addEventListener("click", () => updateDisplayOperator("+"));
subtractButton.addEventListener("click", () => updateDisplayOperator("-"));
multiplyButton.addEventListener("click", () => updateDisplayOperator("x"));
divideButton.addEventListener("click", () => updateDisplayOperator("÷"));

equalsButton.addEventListener("click", () => equationResult());

clearButton.addEventListener("click", () => clearDisplay());

function updateDisplayDecimal(inputString){
    topDisplay.textContent += inputString;
    
    decimalPointButton.disabled = true;
}


function clearDisplay(){
    topDisplay.textContent = "";
    bottomDisplay.textContent = "";
    firstNumber = "";
    secondNumber = 2;
    operator = "";

    decimalPointButton.disabled = false;

    addButton.disabled = false;
    subtractButton.disabled = false;
    multiplyButton.disabled = false;
    divideButton.disabled = false;
}

function equationResult(){

    addButton.disabled = false;
    subtractButton.disabled = false;
    multiplyButton.disabled = false;
    divideButton.disabled = false;

    bottomDisplay.textContent = operate(firstNumber, secondNumber, operator);
}

function updateDisplayOperator(inputString){
    firstNumber = +topDisplay.textContent;
    topDisplay.textContent += ` ${inputString} `;
    operator = inputString;

    decimalPointButton.disabled = false;

    disableOperatorButtons();
}

function updateDisplay(inputString){
    topDisplay.textContent += inputString;
}


function disableOperatorButtons(){
    addButton.disabled = true;
    subtractButton.disabled = true;
    multiplyButton.disabled = true;
    divideButton.disabled = true;
}


function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

function operate(x, y, operator){
    if(operator === "+"){
        return add(x, y);
    }
    if(operator === "-"){
        return subtract(x, y);
    }
    if(operator === "x"){
        return multiply(x, y);
    }
    if(operator === "÷"){
        return divide(x, y);
    }
}

//add delete button functionality
