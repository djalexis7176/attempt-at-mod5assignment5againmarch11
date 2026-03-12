// ADD A FUNCTION CALLED CALCULATE
function calculate(num1, num2, operation) {
    let result;
    

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            result = "Invalid operation selected.";
    }
    
    return result;
}

// COLLECT FIRST NUMBER FROM USER


let firstNum = parseFloat(prompt("Enter the first number:"));

// COLLECT SECOND NUMBER FROM USER
let secondNum = parseFloat(prompt("Enter the second number:"));

let userOperation = prompt("Enter the operation to perform (+, -, *, /):");

let finalResult = calculate(firstNum, secondNum, userOperation);

alert(`The result of ${firstNum} ${userOperation} ${secondNum} is: ${finalResult}`);
