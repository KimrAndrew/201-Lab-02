'use strict';

function isValidResponse(response) {
    if (spicy === "Y" || spicy === "N" || spicy === "YES" || spicy === "NO") {
        return true;
    }
    else {
        return false;
    }
}

let user = prompt("Hello stranger! What is your name?");

let spicy = prompt("Y/N Do I like spicy food?").toUpperCase();

while(!isValidResponse(spicy)) {
    console.log(!isValidResponse(spicy));
    spicy = prompt("Y/N Do I like spicy food?").toUpperCase();
}

if(spicy === "Y" || spicy === "YES") {
    alert("Correct!");
}
else {
    alert("Incorrect.");
}

let car = prompt("Y/N I own a car.").toUpperCase();
console.log(car);
console.log(!isValidResponse(car));
while(isValidResponse(car) === false) {
    console.log(car);
    console.log(!isValidResponse(car));
    car = prompt("Y/N I own a car.").toUpperCase();
}
if(car === "N" || car === "NO") {
    alert("Correct!");
}
else (
    alert("Incorrect.")  
)

let starWars = prompt("Y/N I am a Star Wars fan.").toUpperCase();

while(!isValidResponse(starWars)) {
    console.log(starWars);
    console.log(!isValidResponse(starWars));
    starWars = prompt("Y/N I am a Star Wars fan.").toUpperCase();
}
if(starWars === "N" || starWars === "NO") {
    alert("Correct!");
}
else {
    alert('Incorrect.');
}

let music = prompt("Y/N I listen to a lot of music.").toUpperCase();

while(!isValidResponse(music)) {
    console.log(music);
    console.log(!isValidResponse(music));
    music = prompt("Y/N I listen to a lot of music.").toUpperCase();
}

if (music === "Y" || music === "YES") {
    alert('Correct!');
}
else {
    alert('incorrect');
}
alert("Thank you for playing " + user + "!");