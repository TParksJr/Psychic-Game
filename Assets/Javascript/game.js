//declaring initial values
var wins = 0,
    losses = 0,
    remaining = 9,
    guessed = [],
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    letter = "",
    userGuess = "";

//generate a random letter for computer choice
letter = alphabet[Math.round(Math.random() * alphabet.length)];

//set all the values for the scoreboard
document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("remaining").innerHTML = remaining;
document.getElementById("guessed").innerHTML = guessed;

//store key pressed in var userGuess
document.onkeypress = function (event) {
    userGuess = event.key;

    //check if the current letter has been guessed already
    for (i = 0; i < guessed.length; i++) {
        if (userGuess == guessed[i]) {
            return;
        }
    }

    //if they guess correctly increase wins, reset and alert
    if (userGuess == letter){
        wins += 1;
        remaining = 9;
        guessed = [];
        letter = alphabet[Math.round(Math.random() * alphabet.length)];
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("remaining").innerHTML = remaining;
        document.getElementById("guessed").innerHTML = guessed;
        window.alert("You won!")
    }

    //if they guess incorrectly and are on their last life increase losses, reset and alert
    else if (remaining == 1) {
        losses += 1;
        remaining = 9;
        guessed = [];
        letter = alphabet[Math.round(Math.random() * alphabet.length)];
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("remaining").innerHTML = remaining;
        document.getElementById("guessed").innerHTML = guessed;
        window.alert("You lost!")
    }

    //add key pressed to the guessed array and subtract one remaining guess
    else {
        guessed.push(userGuess);
        remaining -= 1;
        document.getElementById("wins").innerHTML = wins;
        document.getElementById("losses").innerHTML = losses;
        document.getElementById("remaining").innerHTML = remaining;
        document.getElementById("guessed").innerHTML = guessed;
    };
};
