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

    console.log(result);
}



