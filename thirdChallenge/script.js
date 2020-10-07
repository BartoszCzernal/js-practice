function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;
  botChoice = randChoice();
  console.log(botChoice);
  result = decideWinner(humanChoice, botChoice);
  message = finalMessage(result);
  rpsFrontEnd(humanChoice, botChoice, message);
}

function randChoice() {
  return ["rock", "paper", "scissors"][Math.floor(Math.random() * 3)];
}

function decideWinner(humanChoice, botChoice) {
  if (humanChoice === botChoice) {
    return 0; //tie
  }
  if (humanChoice === "rock") {
    if (botChoice === "scissors") {
      return 1; //human win
    } else {
      return -1; //human lost
    }
  } else if (humanChoice === "paper") {
    if (botChoice === "scissors") {
      return -1; //human lost
    } else {
      return 1; //human win
    }
  } else {
    if (botChoice === "rock") {
      return -1; //human lost
    } else {
      return 1;
    }
  }
}

function finalMessage(result) {
  message = new Object();
  if ((result = 1)) {
    message["message"] = "You won!";
    message["color"] = "green";
  } else if ((result = 0)) {
    message["message"] = "You tied!";
    message["color"] = "yellow";
  } else {
    message["message"] = "You lost!";
    message["color"] = "red";
  }
  return message;
}

function rpsFrontEnd(humanChoice, botChoice, message) {}
//3:35
