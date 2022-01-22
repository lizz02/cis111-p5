const words = wordList;
const guesses = [];

let word = "";


//function to retrieve content from the input bar
function handleGuessButtonClick(){
    if (word.length > 0){
        let input = document.querySelector("#enterLetter").value;
        if (input.length > 0){
       let trimInput = String(input).trim();
       let guess = String(trimInput[0]).toUpperCase();
       if(guesses.indexOf(guess) == -1){
           guesses.push(guess);
           displayGuessedLetters();
           displayWordUnderscores();
       }
       document.querySelector("#enterLetter").value = "";
       return guess;
    } 
    }
}

//function to start/restart the game
function handleStartRestartButtonClick() {
    guesses.length = 0;
    word = words[getRandomNumber(0, 50)];
    word = word.toUpperCase();
    displayGuessedLetters();
    displayWordUnderscores();
    document.querySelector("#start").textContent = "Restart";
}

//displays guessed letters in the html
function displayGuessedLetters() {
    let guessesList = String(guesses);
    guessList = guessesList.replace(/,/g , "<br/>");
    document.querySelector("#guessedLetters").innerHTML = guessList;
}

//displays either letters or underscores for the mystery word in the html
function displayWordUnderscores(){
    let displayWord = [];
    for(i=0; i< word.length; i++){
        displayWord.push("_");
    }
    for(i=0; i<word.length; i++){
        for(a=0; a<guesses.length; a++){
            if(word[i] == guesses[a]){
                displayWord[i] = word[i];
            }
        }
    }
    let displayWordString = String(displayWord);
    displayWordString = displayWordString.replace(/,/g, " ");
    document.querySelector("span").textContent = displayWordString;
}

function handleEnter(enterPress) {
    if (enterPress.keyCode == 13) {
        handleGuessButtonClick();
    }
}
    


function getRandomNumber(min, max) {
    // Generate a random integer between min (included) and max (excluded)
    let randomNum = Math.random() * (max - min) + min;
    return Math.floor(randomNum);
}


document.querySelector("#guessClick").addEventListener('click', handleGuessButtonClick);
window.addEventListener('keyup', handleEnter, false);
document.querySelector("#start").addEventListener('click', handleStartRestartButtonClick);