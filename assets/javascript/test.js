var wins = 0;
var losses = 0;
var guessesLeft = 10;
var lettersGuessed = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//chooses a letter to be guessed
var selectedLetter = letters[Math.floor((Math.random() * (letters.length - 1)))];
console.log(selectedLetter + " this is the selected letter");

//displays wins losses and guesses left
var guessesLeftNode = document.createTextNode(guessesLeft);
document.getElementById("guessesLeft").appendChild(guessesLeftNode);

var winsNode = document.createTextNode(wins);
document.getElementById("wins").appendChild(winsNode);

var lossesNode = document.createTextNode(losses);
document.getElementById("losses").appendChild(lossesNode);


function resetGame () {
    guessesLeft = 10;
    lettersGuessed = [];
    document.getElementById("letters").textContent = lettersGuessed;
    document.getElementById("guessesLeft").textContent = guessesLeft;
    selectedLetter = letters[Math.floor((Math.random() * (letters.length - 1)))];
    console.log(selectedLetter + " this is the selected letter");
}

//displays the letters guessed
document.onkeyup = function (event) {
    var userInput = event.key;


    if ( (lettersGuessed.indexOf(userInput) < 0) && (letters.indexOf(userInput) >= 0) ) {


        // console.log(typeof userInput + " this was the user input");

        lettersGuessed.push(userInput);

        var lettersChosenNode = document.createTextNode(" " + lettersGuessed[lettersGuessed.length - 1]);
        document.getElementById("letters").appendChild(lettersChosenNode);

        //checks for win and loss conditions and updates the values displayed
        if (String(lettersGuessed[lettersGuessed.length - 1]) === String(selectedLetter)) {
            wins++;
            console.log(wins + " this was a win");
            document.getElementById("wins").textContent = wins;
            resetGame();
        }
        else
        {
            guessesLeft--;
            console.log(guessesLeft + " this was a guess");
            document.getElementById("guessesLeft").textContent = guessesLeft;
        }

    }

    console.log(lettersGuessed);
    //determines if you have lost and updates score if so
    if (guessesLeft === 0)
    {
        losses++;
        console.log(losses + " this was a loss");
        document.getElementById("losses").textContent = losses;
        resetGame();
    }

};