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

const addButton = document.querySelector("#add-button");
const subtractButton = document.querySelector("#subtract-button");
const multiplyButton = document.querySelector("#multiply-button");
const divideButton = document.querySelector("#divide-button");
const equalsButton = document.querySelector("#equals-button");

const topDisplay = document.querySelector(".top-display");
const bottomDisplay = document.querySelector(".bottom-display");






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
    if(operator === "*"){
        return multiply(x, y);
    }
    if(operator === "/"){
        return divide(x, y);
    }
}