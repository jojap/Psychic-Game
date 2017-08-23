var validChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

document.onkeyup = function(event) {
    var userguess = event.key

    var computerguess = validChoices[Math.floor(Math.random()*validChoices.length)];

};