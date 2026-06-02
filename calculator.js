let number1 = 0;
let operator = '';
let number2 = 0;
let result = 0;

let initial = true;
let number2Exist = false;
let number1Exist = false;
let resultExist = false;

let beforeDecimal = true;


function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
} 

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, n2, operator) {
    let result = 0;
    switch (operator) {
        case '+': 
            result = add(n1, n2);
            break;
        
        case '-': 
            result = subtract(n1, n2);
            break;

        case '*': 
            result = multiply(n1, n2);
            break;

        case '/': 
            result = divide(n1, n2);
            break;
        
        default:
            console.log("Invalid Operator");
    }

    const round = (num) => +num.toFixed(5);

    return round(result);
}

function inputOperator() {
    const operators = document.querySelectorAll('.operator-button');

    operators.forEach(op => {
        op.addEventListener('click', (event) => {
            if(number2Exist && operator !== '') {
                if(operator === '/' && number2 === 0) {
                    alert("Cannot divide by 0!");
                    number1 = 0;
                    number2 = 0;
                    operator = '';
                    number2Exist = false;
                    number1Exist = false;
                    initial = true;
                    updateOnScreen('0');
                }
                else {
                    result = operate(number1, number2, operator);
                    number1 = 0;
                    number2 = 0;
                    number2Exist = false;
                    number1Exist = false;
                    resultExist = true;
                    updateOnScreen(result);
                }
            } 
            if(resultExist && !number1Exist) {
                number1 = result;
                resultExist = false;
                number1Exist = true;
            } else if(!number1Exist && operator === '') {
                number1Exist = true;
                initial = false;
            }
            
            operator = event.target.innerHTML; 
            updateOnScreen(operator);       
        
        });
    });
}

function input() {
    const digitInput = document.querySelectorAll('.digit-button');
    
    digitInput.forEach(button => {
        button.addEventListener('click', (event) => {
            const digit = event.target.innerHTML;
            
            if(resultExist) {
                operator = '';
                updateOnScreen('');
            }
            if(operator === '') {
                if(number1 === 0) {
                    number1 = parseInt(digit);
                } 
                else {
                    number1 = number1*10 + parseInt(digit);
                }
                number1Exist = true;
                resultExist = false;
            } else {
                if(number2 === 0) {
                    number2 = parseInt(digit);
                }
                else {
                    number2 = number2*10 + parseInt(digit);
                }
                number2Exist = true;
            }
            updateOnScreen(digit);
            initial = false;
        });
    });
}

function equalTo() {
    const equals = document.querySelector('#equals-button');

    equals.addEventListener('click', () => {
        if(number2Exist) {
            if(operator === '/' && number2 === 0) {
                alert("Cannot divide by 0!");
                number1 = 0;
                number2 = 0;
                operator = '';
                number2Exist = false;
                number1Exist = false;
                initial = true;
                updateOnScreen('0');
            }
            else {
                result = operate(number1, number2, operator);
                number1 = 0;
                number2 = 0;
                number2Exist = false;
                number1Exist = false;
                resultExist = true;
                updateOnScreen(result);
            }
        } else {
            alert("Invalid format used.");
        }
    });
}

function updateOnScreen(value) {
    const display = document.querySelector('.show');

    if(initial || resultExist || value === ''){
        display.textContent = value;
    }
    else if(display.textContent.at(-1) < '0' && value < '0') {
        display.textContent = display.textContent.slice(0, -1) + value;
    }
    else {
        display.textContent += value;
    }
}

function clear() {
    const clearButton = document.querySelector('#clear-button');

    clearButton.addEventListener('click', () => {
        number1 = 0;
        number2 = 0;
        result = 0;
        operator = '';
        
        number1Exist = false;
        number2Exist = false;
        resultExist = false;

        initial = true;
        updateOnScreen('0');
    });
}

input();
inputOperator();
equalTo();
clear();



