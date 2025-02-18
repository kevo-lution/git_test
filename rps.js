// players
let player1;
let cpu;
//options
const rock = 0;
const paper = 1;
const scissors = 2;

// scoring logic
let player1score = 0;
let player2score = 0;
let targetScore = 0;
let winner = null;

//playerLogic
function playerLogic() {
    let selection = Number(prompt("Enter a number 0 - 2: Rock = 0, Paper = 1, Scissors = 2"));
    return selection; // Convert the input to a number
}

// This is the computer logic
function computerLogic() {
    let decision = Math.floor(Math.random() * 3); // Random number between 0 and 2
    return decision;
}

//js displaying on html
let cpuScore = document.getElementById("cpuScore");
let p1Score = document.getElementById("p1Score");

function updateWinner(){
	if (winner === player1score){
		player1score++;
		document.getElementById("p1Score").textContent = player1score
	} else if(winner === player2score){
		player2score++
		document.getElementById("cpuScore").textContent = player2score
	}
}


function playRound(targetScore){
	while (player1score < targetScore || player2score < targetScore){
		if (targetScore === player1score){
			console.log("Congratulations, Player 1 has won the game.")
			break;
		} else if (targetScore === player2score){
			console.log("Congratulations, Player 2 has won the game.")
			break;
		}
		let player1 = playerLogic();
		let cpu = computerLogic();
		console.log(`Player 1 chose ${player1 == 0 ? 'Rock' : player1 == 1 ? 'Paper' : 'Scissors'}`);
		console.log(`The computer chose ${cpu == 0 ? 'Rock' : cpu == 1 ? 'Paper' : 'Scissors'}`);

	
		if (player1 === rock && cpu === paper) {
			console.log(`CPU wins! Paper beats rock`);
			updateWinner(winner = player2score)
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		} 
		else if (player1 === paper && cpu === rock) {
			console.log(`Player 1 wins! Paper beats rock`);
			updateWinner(winner = player1score)
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		} 
		else if (player1 === paper && cpu === scissors) {
			console.log(`CPU wins! Scissors beats paper`);
			updateWinner(winner = player2score);
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		} 
		else if (player1 === scissors && cpu === paper) {
			console.log(`Player 1 wins! Scissors beats paper`);
			updateWinner(winner = player1score)
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		} 
		else if (player1 === scissors && cpu === rock) {
			console.log(`CPU wins! Rock beats scissors`);
			updateWinner(winner = player2score);
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		} 
		else if (player1 === rock && cpu === scissors) {
			console.log(`Player 1 wins! Rock beats scissors`);
			updateWinner(winner = player1score);
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		} 
		else if (player1 === cpu) {
			console.log("It's a tie!");
			console.log(`Current score\n Player 1: ${player1score}\n CPU: ${player2score}`)
		}
	}
}

playRound(3);


//variable for cpu/player score and link it with getElementByID

//add buttons
//hover over buttons and show image
//
