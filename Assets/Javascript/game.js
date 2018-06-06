//attempt #5
var wins = 0,
    losses = 0,
    remaining = 9,
    guessed = [],
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    letter = "",
    userGuess = "";

//generate a random letter for computer choice
letter = alphabet[Math.round(Math.random() * alphabet.length)];
console.log("the letter is " + letter);

//store key pressed in var userGuess
document.onkeyup = function (event) {
    userGuess = event.key;
    console.log("userGuess is " + userGuess);
    //if they guess correctly increase wins and reset
    if (userGuess == letter){
        wins += 1;
        console.log("wins is " + wins);
        remaining = 9;
        guessed = [];
        document.getElementById("wins").innerHTML = wins;
    }
    else if (remaining == 1) {
        losses += 1;
        console.log("losses is " + losses);
        remaining = 9;
        guessed = [];
        document.getElementById("losses").innerHTML = losses;
    }
    else {
        //add key pressed to the guessed array and subtract one remaining guess
        guessed.push(event.key);
        remaining -= 1;
    }
}




/*attempt #4
    //Available choices
    var letterChoices = ['a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    //score
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessesLeft = 9;
    var guessedLetters = [];
    var letterToGuess = null;
    
    //computer randomly chooses a letter
    
    var computerGuess = letterChoices [Math.floor(Math.random()*letterChoices.length)];
    
    //guesses left function
    
    var updateGuessesLeft = function() {
        document.querySelector('#remaining').innerHTML = "Guesses Left: " + guessesLeft;
    };
    
    //letter to guess function
    
    var updateletterToGuess = function(){
        this.letterToGuess = this.letterChoices[Math.floor(Math.random() * this.letterChoices.length)];
    };
    
    var updateGuessesSoFar = function(){
        document.querySelector('#guessed').innerHTML = "Your guesses so far: " + guessedLetters.join(', ');
    };
    
    //reset
    
    var reset = function(){
        totalGuesses = 9;
        guessesLeft = 9;
        guessedLetters = [];
    
        updateletterToGuess();
        updateGuessesSoFar();
        updateGuessesLeft();
    
    };
    
    updateGuessesLeft();
    updateletterToGuess();
    
    //user input key
    
    document.onkeyup = function(event) {
        guessesLeft--;
        var userGuess;
    
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();
    
            if (guessesLeft > 0){
                if (event.key == letterToGuess){
                    wins++;
                    document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
                    alert("How did you know!?!");
                    reset();
                }
            } else if (guessesLeft == 0){
                losses++;
                document.querySelector('#losses').innerHTML = 'Losses: ' + losses;
                alert("Sorry, you're not a psychic!");
    
                reset();
            }
    }

/* declaring variables
var wins = 0,
    losses = 0,
    remaining = 9,
    guessed = [],
    alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],
    letter = "",
    userGuess = ""

//generate a random letter for computer choice
letter = alphabet[Math.round(Math.random() * alphabet.length)];

attempt #3
var reset = remaining = 9, guessed = [];

document.onkeyup = function(event) {
    remaining--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessed.push(userGuess);
    reset;

        if (remaining > 0){
            if (userGuess == letter){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Yes, you are psychic!");
                reset();
            }
        }else if(guessesLeft == 0){
            // Then we will loss and we'll update the html to display the loss 
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Sorry, you're not psychic, maybe try again?");
            // Then we'll call the reset. 
            reset();
        }
};*/

/*attempt #2
document.onkeyup = function(event) {
    userGuess = event.key;
    if (userGuess == letter){
        wins++;
        remaining = 9;
        guessed = [];
        document.alert("You won!");
    }
    //add a loss if the user runs out of guesses
    else if (remaining == 1) {
        losses++;
        remaining = 9;
        guessed = [];
        document.alert("You lost!");
    }
    else {
    //add key pressed to the guessed array and subtract one remaining guess
    guessed.push(userGuess);
    remaining--;
    }
};*/

/* attempt #1
//create click event and have it call userGuess function
document.addEventListener("keypress", userGuess());

//declaring userGuess function
function userGuess() {
    //add a point if the player guesses correctly
    if (event.key == letter){
        wins++;
        remaining = 9;
        guessed = [];
        document.alert("You won!");
    }
    //add a loss if the user runs out of guesses
    else if (remaining == 1) {
        losses++;
        remaining = 9;
        guessed = [];
        document.alert("You lost!");
    }
    else {
    //add key pressed to the guessed array and subtract one remaining guess
    guessed.push(event.key);
    remaining--;
    }
}*/