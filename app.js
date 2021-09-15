'use strict';

let validResponses = ["Y","N","YES","NO"];

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
    alert('Correct!');
}
else {
    alert('incorrect');
}

//thank user for playing
alert("Thank you for playing " + user + "!");