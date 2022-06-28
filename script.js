// Create 3 variables to hold the ship's location

let randomLoc = Math.floor(Math.random() * 5);
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;  

// Create 3 variables to hold the user's guess, hits and guesses

let guess;
let hits = 0;
let guesses = 0;

// Create a variable to indicate if the ship is sunk or not

let isSunk = false;

// Create a loop to check if ship is sunk or not

while (isSunk === false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("HIT!");
      hits = hits + 1;
      if (hits === 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
      alert("MISS");
    }
  }
}

// Provide game stats to the user
const stats = `You took ${guesses} guesses to sink the battleship, which means your shooting accuracy was ${3/guesses}`;

alert(stats);