// New game button
var bNewGame = document.getElementById("buttonNewGame");

    //game's state
    var gameState = 'start';
    var player = {
            name: '',
            score: 0
        };
    var computer = {
            score: 0
        };
    var roundNumber;
    var howManyRounds = 3;

    //what should be visible
var bGameButtons = document.getElementById("gameButtons");
var result = document.getElementById('result');
var endResult = document.getElementById('endResult');
var whichRound = document.getElementById('whichRound');
var description = document.getElementById('description');
var elementNewGame =  document.getElementById('elementNewGame');

// function setElements() {
// 	switch(gameState) {
// 		case 'started':
//             bGameButtons.style.display = 'block';
//             bNewGame.style.display = 'none'; //  elementNewGame.style.display = 'none';
//             description.style.display = 'none';
// 		break;
// 		case 'ended':
//             description.style.display = 'block';
//             bGameButtons.style.display = 'none';
//             bNewGame.style.display = 'block'; // elementNewGame.style.display = 'block';
//      break;
// 		case 'start':
// 		default:
//             bGameButtons.style.display = 'none';
//             bNewGame.style.display = 'block'; // elementNewGame.style.display = 'block';
// 	}
// }
// setElements();

bNewGame.onclick = function() {
    //setElements
    bGameButtons.style.display = 'block';
    elementNewGame.style.display = 'none';
    description.style.display = 'none';

    player.name = window.prompt("What's your name?");
        if (!player.name || player.name == 0) {
            player.name = 'Player'; 
        }
    howManyRounds = window.prompt("Choose how many rounds or play 3 rounds.");
        if (!howManyRounds || howManyRounds == 0){
            howManyRounds = 3;
        }  
    player.score = computer.score = 0;
    gameState = 'started';
    roundNumber = 1;
    endResult.innerHTML = " ";
  };

// Player choice
var bRock = document.getElementById('buttonRock');
var bPaper = document.getElementById('buttonPaper');
var bScissors = document.getElementById('buttonScissors');

bRock.onclick = function() {
    playerMove('rock');
};
bPaper.onclick = function() {
    playerMove('paper');
};
bScissors.onclick = function() {
    playerMove('scissors');
};

//Single game
var playerMove = function(playerChoice) {
    //setElements
  description.style.display = 'block';
  var computerChoice = computerMove();
  whoWin(playerChoice, computerChoice);
  whichRound.innerHTML = "Round: " + roundNumber;
  result.innerHTML = player.name + " " + player.score + " : " + computer.score + " Computer";
  
  if (roundNumber < howManyRounds ) {    
    roundNumber += 1;
  }
  else  {
    if (computer.score == player.score) {
      endResult.innerHTML = "Game is over! The result is a tie!"; 
    }
    else if (computer.score > player.score) {
      endResult.innerHTML = "Game is over! Computer wins the game!";
    }
    else {
      endResult.innerHTML = "Game is over! " + player.name + " wins the game!";
    }
    //setElements
    gameState = 'ended';
    bGameButtons.style.display = 'none';
    elementNewGame.style.display = 'block';
    
  }
};

// Computer choise
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

// Check who win 
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
    player.score += 1;
  } else {
    computer.score += 1;
  }
  setWinner(playerChoice, computerChoice, isPlayerWin);
};


//Finish
var setWinner = function(playerChoice, computerChoice, isPlayerWin) {
  var resultString = isPlayerWin ? "You win!" : "You lose!";
  output.innerHTML = resultString + " You played " + playerChoice + ", computer played " + computerChoice;
};



