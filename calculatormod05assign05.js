Calculator assignment for java script class mod5 assign 5 3of 3


//  calculation logic function


function calculate(x, y, operation) {
    let result;
    
    // Switch statement to do the correct math
    switch (operation) {
        case "add":
            result = x + y;
            break;
        case "subtract":
            result = x - y;
            break;
        case "multiply":
            result = x * y;
            break;
        case "divide":
            result = x / y;
            break;
    }
    
    return result;
}

// Var for user's data

let firstNum, secondNum, userOperation;

// A flag to keep track of whether the user typed a valid operation
let isValid = false;


do {
   

    firstNum = parseFloat(prompt("Enter your first number:"));
    
    secondNum = parseFloat(prompt("Enter your second number:"));
    
    userOperation = prompt("What operation would you like to perform? (add, subtract, multiply, divide)").toLowerCase();
    
    // Check user input:

    if (userOperation === "add" || userOperation === "subtract" || userOperation === "multiply" || userOperation === "divide") {
        
        let finalResult = calculate(firstNum, secondNum, userOperation)
        alert(`The result is: ${finalResult}`);
        isValid = true;
        
    } else {
        alert("Invalid operation! You must type add, subtract, multiply, or divide. Let's try again.");
        isValid = false; 
    }
    
} while (isValid === false);

