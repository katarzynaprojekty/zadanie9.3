var bRock = document.getElementById('buttonRock');
var bPaper = document.getElementById('buttonPaper');
var bScissors = document.getElementById('buttonScissors');
var bNewGame = document.getElementById("buttonNewGame");
var bGameButtons = document.getElementById("gameButtons");
var result = document.getElementById('result');
var endResult = document.getElementById('endResult');
var whichRound = document.getElementById('whichRound');
var description = document.getElementById('description');
var playerScore;
var computerScore;
var roundNumber;
//var isGameRunning = false;
var playerName; 
var howManyRounds;

var playerMove = function(playerChoice) {
  console.log(roundNumber);
  console.log(howManyRounds);
  description.style.display = 'block';
  var computerChoice = computerMove();
  whoWin(playerChoice, computerChoice);
  whichRound.innerHTML = "Round: " + roundNumber;
  result.innerHTML = playerName + " " + playerScore + " : " + computerScore + " Computer";
  
  if (roundNumber < howManyRounds ) {    
    roundNumber += 1;
  }
  else  {
    if (computerScore == playerScore) {
      endResult.innerHTML = "Game is over! The result is a tie!"; 
    }
    else if (computerScore > playerScore) {
      endResult.innerHTML = "Game is over! Computer wins the game!";
    }
    else {
      endResult.innerHTML = "Game is over! " + playerName + " wins the game!";
    }
    
    bGameButtons.style.display = 'none';
    bNewGame.style.display = 'block';
    
  }
};

// funkcja losująca wybór komputera
var computerMove = function() {
  var computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice == 1) {
    computerChoice = "rock";
  } else if (computerChoice == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
};
//  funkcja sprawdzająca kto wygrał
var whoWin = function(playerChoice, computerChoice) {
  var isPlayerWin = false;
  if (playerChoice == computerChoice) {
    output.innerHTML = "The result is a tie! You played " + playerChoice + ", computer played " + computerChoice;
    return;
  }
  
  if (
    playerChoice == "rock" && computerChoice == "scissors" ||
    playerChoice == "scissors" && computerChoice == "paper" ||
    playerChoice == "paper" && computerChoice == "rock"
  ) {
    isPlayerWin = true;
    playerScore += 1;
  } else {
    computerScore += 1;
  }
  setWinner(playerChoice, computerChoice, isPlayerWin);
};

//napisy
var setWinner = function(playerChoice, computerChoice, isPlayerWin) {
  var resultString = isPlayerWin ? "You win!" : "You lose!";
  output.innerHTML = resultString + " You played " + playerChoice + ", computer played " + computerChoice;
};


bRock.onclick = function() {
  playerMove('rock');
};
bPaper.onclick = function() {
  playerMove('paper');
};
bScissors.onclick = function() {
  playerMove('scissors');
};
//new game
bNewGame.onclick = function() {
  //isGameRunning = true;
  bGameButtons.style.display = 'block';
  bNewGame.style.display = 'none';
  description.style.display = 'none';
  playerName = window.prompt("What's your name?");
  if (!playerName || playerName == 0) {
    playerName = 'Player'; 
  }
  howManyRounds = window.prompt("Choose how many rounds or play 3 rounds.");
  if (!howManyRounds || howManyRounds == 0){
    howManyRounds = 3;
  }  
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
  endResult.innerHTML = " ";
};