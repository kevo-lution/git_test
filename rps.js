// players
let player1;
let cpu;


//options
const rock = document.getElementById("rocks");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const options = [rock, paper, scissors];




const buttons = document.querySelectorAll(".btn");

// scoring logic
let player1score = 0;
let cpuScore = 0;
let choice;



function startGame(choice){
	console.log(choice)
	 let player1 = this.id
	 return player1;	  

	 //sleep inputs until after round is over.
}

function computerChoice(event){
	event.target.disabled = true
	console.log(`player 1 has chosen ${this.id}`)
	random = Math.floor(Math.random() * options.length)
	console.log(options[random].innerHTML)
}

let starters = document.getElementsByClassName("btn")
for (let i = 0; i < starters.length; i++) {
	starters[i].addEventListener("click", computerChoice);
  }

/*step 1, get buttons to show ID or name
how to do that, get buttons to work first buttons work now 



for (const buttons of btn){
	btn.addEventListener("click", playerLogic());{
		console.log(btn.id)
	}
}


function playerLogic(){
	buttons.forEach((button) => {
	button.addEventListener("click", () => {
	const buttonID = button.id

	let choice;
	if (buttonID === "rocks"){
		choice = rock;
	} else if (buttonID === "paper"){
		choice = paper
	} else if (buttonID === "scissors"){
		choice = scissors
	}
	choice = choice.innerText.toLocaleLowerCase(choice)
	//console.log(`${choice}`)
	return choice
	})
})};


function waitForUser(choice){
	console.log(`${choice} has been received.`)
	timeout = Math.floor(Math.random() * 600);
	console.log(timeout)
	//setTimeout(computerLogic, timeout)

}

function computerLogic(){
	// this code will not work as we do not have rock, paper, and scissors decided, so essentially, we have no way of giving an opponent response right now.
	//make it choose from the array of rock, paper, and scissors
	return Math.floor(Math.random() * 3);
}


// This is the computer logic

function updateWinner(winner){
	if (winner === player1){
		player1score++;
		document.getElementById("p1Score").innerText = player1score
	} else if (winner === cpu){
		cpuScore++;
		document.getElementById("cpuScore").innerText = cpuScore
	}
}

function playRound(choice){
	console.log(`${choice}, a game has begun`)
	//checks score
		player1 = choice;
		waitForUser()
		cpu = computerLogic(playerLogic);

		console.log(`Player 1 chose ${player1 == rock ? 'Rock' : player1 == paper ? 'Paper' : 'Scissors'}`);
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



//playRound(1)

*/


/*
Steps:
Below image box, ask user to select a choice

after choice is selected, tell them the computer is thinking

while thinking rotate through all 3 images

after, show image of what won

then award point to correct user

tells them to select another choice

*/

//variable for cpu/player score and link it with getElementByID

//add buttons
//hover over buttons and show image
// modal to ask how many rounds to play.
// edit computerLogic to sleep a float anywhere between 0 - 1.5 seconds before giving an answer

/* make rock, paper, and scissors a button
which initiates a round of r,p,s 
show the winner of the round on screen and update their score
*/