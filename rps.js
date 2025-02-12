let player1;
let plater2;
let selection = prompt("Enter number 0 - 2");

console.log("Rock = 1, Paper = 2, Scissors = 3")
const rock = 0;
const paper = 1;
const scissors = 2;

player1 = selection;

let player2 = Math.floor(Math.random() * 3)
2

console.log(`Player 1 chose ${selection}`)

console.log(`Player 2 chose ${player2}`)

if (player1 == rock && player2 == paper){
	console.log(`Player 2 wins! Paper beats rock`)
} 
else if (player1 == 1 & player2 == 0){
	console.log(`Player 1 wins!`)
}
else if (player1 == 1 & player2 == 2){
	console.log(`Player 2 wins!`)
}
else if (player1 == 2 & player2 == 1){
	console.log(`Player 1 wins!`)
}
else if (player1 == 2 & player2 == 0){
	console.log(`Player 2 wins!`)
}
else if (player1 == 0 & player2 == 2){
	console.log(`Player 1 wins!`)
}
else{
	console.log("It's a tie!")}