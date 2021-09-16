'use strict';

//global variables
let validResponses = ["Y","N","YES","NO"];
let score = 0;

function getUser() {
    //initialize user to a falsey value
    let user ="";
    //coninue prompting the user until they enter a valid name
    while(!user) {
        user = prompt("Hello stranger! What is your name?");
    }
    return user;
}

function main() {

//initialize user to a falsey value
let user ="";
//coninue prompting the user until they enter a valid name
while(!user) {
    user = prompt("Hello stranger! What is your name?");
}

//initialize variables for first question
let spicy = "";
let spicyFlag = false

//input validation loop. While not valid input, prompt user for new input
do {
    spicy = prompt("Y/N Do I like spicy food?").toUpperCase();
    //compare input to each valid response
    for(let i = 0; i < validResponses.length;i++) {
        if(spicy === validResponses[i]) {
            spicyFlag = true;
        }
    }
} while(spicyFlag == false);

//check if answer is correct
if(spicy === "Y" || spicy === "YES") {
    score++;
    alert("Correct!");
}
else {
    alert("Incorrect.");
}

//initialize variables for second question
let car = "";
let carFlag = false;

//input validation loop
do {
    car = prompt("Y/N I own a car.").toUpperCase();
    //compare input to each valid response
    for (let i = 0; i < validResponses.length; i++) {
        if(car === validResponses[i]) {
            carFlag = true;
        }
    }
} while (!carFlag);

//check if answer is correct
if(car === "N" || car === "NO") {
    score++;
    alert("Correct!");
}
else (
    alert("Incorrect.")  
)

//initialize variables for third question
let starWars = "";
let starWarsFlag = false;

//input validation loop
do {
    starWars = prompt("Y/N I am a Star Wars fan.").toUpperCase();
    //compare input to valid responses
    for(let i = 0; i < validResponses.length; i++) {
        if(starWars === validResponses[i]) {
            starWarsFlag = true;
        }
    }
} while (!starWarsFlag);

//check if answer is correct
if(starWars === "N" || starWars === "NO") {
    score++;
    alert("Correct!");
}
else {
    alert('Incorrect.');
}

//initialize variables for fourth question
let music = "";
let musicFlag = false;

//input validation loop
do {
    music = prompt("Y/N I listen to a lot of music.").toUpperCase();
    for(let i = 0; i < validResponses.length; i++) {
        if (music === validResponses[i]) {
            musicFlag = true;
        }
    }
} while (!musicFlag);

//check if answer is correct
if (music === "Y" || music === "YES") {
    score++;
    alert('Correct!');
}
else {
    alert('incorrect');
}

alert('Let\'s play a number guessing game!');

let guessesRemaining = 4;
let guess = -1;
let correctNum = 3;

while(guessesRemaining > 0) {
    guess = prompt("Please enter a number between 1 and 10.");
    if (guess > correctNum) {
        alert("To high!");
        guessesRemaining--;
    }
    else if (guess == correctNum) {
        score++;
        alert("Correct!");
        break;
    }
    else {
        guessesRemaining--;
        alert("To Low!");
    }
}

let goodFoods = ["curry", "apple crisp", "tacos"];
let food = "";
let isCorrect = false;
let numAttempts = 6;
do {
    food = prompt("Name a food that I like").toLowerCase();
    for(let i = 0; i < goodFoods.length; i++) {
        if(food === goodFoods[i]) {
            score++;
            isCorrect = true;
            alert("Good guess!");
        }
    }
    numAttempts--;
} while (isCorrect === false && numAttempts > 0);
alert("Acceptable answers were: curry, apple crisp, and tacos.");


//thank user for playing
alert("Thank you for playing " + user + "! Your score was " + score + "!");
}
main();