let add = function(a,b) {
    return a+b ;
}

let subtract = function(a,b) {
    return a-b ;
}

let multiply = function(a,b) {
    return a*b ;
}

let divide = function(a,b) {
    if (b==0){
        alert("Cannot divide by 0")
    }
    else{
        return (a/b);
    }
}

let operate = function(firstNumber, operator, secondNumber){
    switch(operator){
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "x":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

let createCalculatorButtons = function(buttonType, buttonText){
    let newButton = document.createElement("button");
    newButton.textContent = `${buttonText}`;
    newButton.classList.add(`${buttonText}`);
    switch(buttonType){
        case "numbers":
            numbers.appendChild(newButton);
            newButton.addEventListener("click", (e) => {
                let content = e.target.textContent;
                if(operator == ""){
                    if(!(firstNumber.includes(".") && content == ".")){
                        firstNumber += content;
                        display.textContent = firstNumber;
                    }
                }
                else {
                    if(!(secondNumber.includes(".") && content == "."))
                    secondNumber += content;
                    display.textContent = secondNumber;
                }
            })
            break;
        case "operators":
            operators.appendChild(newButton);
            newButton.addEventListener("click", (e) => {
                if(firstNumber != "" && operator == ""){
                    operator = e.target.textContent;
                }
                else if(operator != "" && secondNumber != ""){
                    firstNumber = operate(+firstNumber,operator,+secondNumber );
                    secondNumber = "";
                    display.textContent = firstNumber;
                    operator = e.target.textContent;
                }
                
            })
            break;
        case "utilities":
            utilities.appendChild(newButton);
            break;
    }
}

const container = document.querySelector(".container");
const numbers   = document.querySelector(".numbers");
const operators = document.querySelector(".operators");
const utilities = document.querySelector(".utilities");
const display   = document.querySelector(".display");

const buttonSize = container.offsetWidth / 4;

let allButtons = [
    {buttonType: "numbers",     buttonValues: [1,2,3,4,5,6,7,8,9,0,"."] },
    {buttonType: "operators",   buttonValues: ["+","-","x","/"]     },
    {buttonType: "utilities",   buttonValues: ["Equals","Clear"]         }
]

let firstNumber = "";
let operator = "";
let secondNumber = "";

allButtons.map(function(buttonGroup) {
    buttonGroup.buttonValues.map( button => 
        createCalculatorButtons(buttonGroup.buttonType, button )
    )
});

document.querySelector(".Equals").addEventListener("click", (e) => {
    if(secondNumber !== "" ){
        let calculatedResult = operate(+firstNumber,operator,+secondNumber );
        display.textContent = Number.isInteger(calculatedResult) ? calculatedResult : calculatedResult.toFixed(15)   ;
    }            
    else {
        display.textContent = "";
    }
    firstNumber = "";
    secondNumber = "";
    operator = "";                                      
})

document.querySelector(".Clear").addEventListener("click", (e) => {
    display.textContent = "";      
    firstNumber = "";
    secondNumber = "";
    operator = "";                              
            })