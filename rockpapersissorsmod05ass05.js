1. Get and validate the User's choice


function getUserChoice() {
   

    let choice = prompt("Enter rock (r), paper (p), or scissors(s):”).toLowerCase();
    
   

    while (choice !== "r" && choice !== "p" && choice !== "s") {
        alert("Invalid entry! You must type (r) for rock, (p) for paper, or (s) for scissors.");
        choice = prompt("Try again. Enter r or p or s :”).toLowerCase();
    }
    
    return choice;
}

//  Computer's choice

function getComputerChoice() {
   

    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    
  

    if (randomNum === 0) {
        computerChoice = "rock";
    } else if (randomNum === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    
    return computerChoice;
}


function determineWinner(user, computer) {
   
    if (user === computer) {
        return "It's a tie!";
    }
    
   //if user picks rock as choice

    if (user === "r") {
        if (computer === "scissors") {
            return "You win! Rock destroys scissors.";
        } else {
            return "You lose! Paper covers rock.";
        }
    }
    
     //if user picks paper as choice

    if (user === "p") {
        if (computer === "rock") {
            return "You win! Paper covers rock.";
        } else {
            return "You lose! Scissors cut paper.";
        }
    }
    
   //if user picks scissors as choice

    if (user === "s") {
        if (computer === "paper") {
            return "You win! Scissors cut paper.";
        } else {
            return "You lose! Rock destroys scissors.";
        }
    }
}

//Main Game Function

function playGame() {
   

    let userChoice = getUserChoice();
    let computerChoice = getComputerChoice();
    
    let resultMessage = determineWinner(userChoice, computerChoice);
    
    alert(`You chose: ${userChoice}\nThe computer chose: ${computerChoice}\n\n${resultMessage}`);
}


playGame();
