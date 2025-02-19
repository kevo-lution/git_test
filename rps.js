// players
let player1;
let cpu;
//options
const rock = 0;
const paper = 1;
const scissors = 2;

// scoring logic
let player1score = 0;
let cpuScore = 0;

function playerLogic() {
    return Number(prompt("Enter a number 0 - 2: Rock = 0, Paper = 1, Scissors = 2"));
	//const rock = document.getElementById("rock");
	//const paper = document.getElementById("paper")
	//const scissors = document.getElementById("scissor")
}

// This is the computer logic
function computerLogic() {
    return Math.floor(Math.random() * 3); // Random number between 0 and 2
}

function updateWinner(winner){
	if (winner === player1){
		player1score++;
		document.getElementById("p1Score").innerText = player1score
	} else if (winner === cpu){
		cpuScore++;
		document.getElementById("cpuScore").innerText = cpuScore
	}
}

function playRound(targetScore){
	while (player1score < targetScore && cpuScore < targetScore){
		if (targetScore === player1score){
			console.log("Congratulations, Player 1 has won the game.")
			break;
		} else if (targetScore === cpuScore){
			console.log("Congratulations, CPU has won the game.")
			break;
		}
		player1 = playerLogic();
		cpu = computerLogic();

		console.log(`Player 1 chose ${player1 == 0 ? 'Rock' : player1 == 1 ? 'Paper' : 'Scissors'}`);
		console.log(`The computer chose ${cpu == 0 ? 'Rock' : cpu == 1 ? 'Paper' : 'Scissors'}`);

		
		if (player1 === rock && cpu === paper) {
			console.log(`CPU wins! Paper beats rock`);
			updateWinner(cpu);
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		} 
		else if (player1 === paper && cpu === rock) {
			console.log(`Player 1 wins! Paper beats rock`);
			updateWinner(player1);
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		} 
		else if (player1 === paper && cpu === scissors) {
			console.log(`CPU wins! Scissors beats paper`);
			updateWinner(cpu);
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		} 
		else if (player1 === scissors && cpu === paper) {
			console.log(`Player 1 wins! Scissors beats paper`);
			updateWinner(player1);
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		} 
		else if (player1 === scissors && cpu === rock) {
			console.log(`CPU wins! Rock beats scissors`);
			updateWinner(cpu);
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		} 
		else if (player1 === rock && cpu === scissors) {
			console.log(`Player 1 wins! Rock beats scissors`);
			updateWinner(player1);
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		} 
		else if (player1 === cpu) {
			console.log("It's a tie!");
			console.log(`Current score\n Player1: ${player1score}\n CPU: ${cpuScore}`)
		}
	}
}


playRound(2)

//variable for cpu/player score and link it with getElementByID

//add buttons
//hover over buttons and show image
// modal to ask how many rounds to play.
// edit computerLogic to sleep a float anywhere between 0 - 1.5 seconds before giving an answer

/* make rock, paper, and scissors a button
which initiates a round of r,p,s 
show the winner of the round on screen and update their score
*/