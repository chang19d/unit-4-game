var guessText = document.getElementById("guess-text");
var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var userGuessText = document.getElementById("userGuess-text");
var notifcation = document.getElementById("notification");

var wins=0;
var losses=0;
var numberToGuess=0;
var userGuess=0;
var crystalNumber1=0;
var crystalNumber2=0;
var crystalNumber3=0;
var crystalNumber4=0;
var crystalNumbersArray= [];
startGame();
// INITIALIZES GAME BY SETTING CRYSTAL VALUES AND THE NUMBER TO MATCH
function startGame(){    
    crystalNumbersArray=[];
    numberToGuess = Math.floor(Math.random() * 120) + 18;
    userGuess=0;
    console.log("numberToGuess is: " + numberToGuess);
    guessText.textContent = numberToGuess;
    userGuessText.textContent = userGuess;
   
    crystalNumber1=randomNumForCrystals();
    crystalNumber2=randomNumForCrystals();
    crystalNumber3=randomNumForCrystals();
    crystalNumber4=randomNumForCrystals();

    

    console.log(crystalNumbersArray);
}
// SETS RANDOM NUMBERS FOR CRYSTALS, checks arrays for the same value, 
// if same value found, runs function again recursively until 
// new value is found
function randomNumForCrystals(){
    var randomNumber = Math.floor(Math.random() * 12) + 1;
    
    for(var i = 0; i < crystalNumbersArray.length; i++){
        if(randomNumber == crystalNumbersArray[i]){
            return randomNumForCrystals();
        }
    }
    crystalNumbersArray.push(randomNumber);
    return randomNumber;
}

function checkIfWon(){
    if(numberToGuess == userGuess){
        startGame();
        wins++;
        notification.textContent = "You Win! :)"
        
        winsText.textContent = wins;
    }
    if(userGuess > numberToGuess){
        startGame();
        losses++;
        notification.textContent = "You Lost. :("
        lossesText.textContent = losses;
    }
}
// CLICK EVENTS FOR IMAGES
$('#crystalImage1').click(function(){
    console.log("Crystal's value is: " + crystalNumber1);
    userGuess = userGuess + crystalNumber1;
    console.log("New total user guess is: " + userGuess);
    userGuessText.textContent = userGuess;
    checkIfWon();
});
$('#crystalImage2').click(function(){
    console.log("Crystal's value is: " + crystalNumber2);
    userGuess = userGuess + crystalNumber2;
    userGuessText.textContent = userGuess;
    checkIfWon();
});
$('#crystalImage3').click(function(){
    console.log("Crystal's value is: " + crystalNumber3);
    userGuess = userGuess + crystalNumber3;
    userGuessText.textContent = userGuess;
    checkIfWon();
});  
$('#crystalImage4').click(function(){
    console.log("Crystal's value is: " + crystalNumber4);
    userGuess = userGuess + crystalNumber4;
    userGuessText.textContent = userGuess;
    checkIfWon();
});
