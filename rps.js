// players
let player1;
let player2;
//options
const rock = 0;
const paper = 1;
const scissors = 2;

// scoring logic
let player1score = 0;
let player2score = 0;
let targetScore = 0;

function playerLogic() {
    let selection = Number(prompt("Enter a number 0 - 2: Rock = 0, Paper = 1, Scissors = 2"));
    return selection; // Convert the input to a number
}

// This is the computer logic
function computerLogic() {
    let decision = Math.floor(Math.random() * 3); // Random number between 0 and 2
    return decision;
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
		let player2 = computerLogic();
		console.log(`Player 1 chose ${player1 == 0 ? 'Rock' : player1 == 1 ? 'Paper' : 'Scissors'}`);
		console.log(`The computer chose ${player2 == 0 ? 'Rock' : player2 == 1 ? 'Paper' : 'Scissors'}`);

		

		if (player1 === rock && player2 === paper) {
			console.log(`Player 2 wins! Paper beats rock`);
			player2score++;
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		} 
		else if (player1 === paper && player2 === rock) {
			console.log(`Player 1 wins! Paper beats rock`);
			player1score++;
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		} 
		else if (player1 === paper && player2 === scissors) {
			console.log(`Player 2 wins! Scissors beats paper`);
			player2score++
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		} 
		else if (player1 === scissors && player2 === paper) {
			console.log(`Player 1 wins! Scissors beats paper`);
			player1score++
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		} 
		else if (player1 === scissors && player2 === rock) {
			console.log(`Player 2 wins! Rock beats scissors`);
			player2score++
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		} 
		else if (player1 === rock && player2 === scissors) {
			console.log(`Player 1 wins! Rock beats scissors`);
			player1score++
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		} 
		else if (player1 === player2) {
			console.log("It's a tie!");
			console.log(`Current score\n Player1: ${player1score}\n Player2: ${player2score}`)
		}
	}
}

//playRound();


//variable for cpu/player score and link it with getElementByID