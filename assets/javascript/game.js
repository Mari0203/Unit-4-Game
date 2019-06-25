// Function to generate a random number (integer) between a specific range //
// with minmum and maximum numbers being inclusive. //

function getRandomNum(min, max) {
    min = Math.ceil(min); 
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("Math.random(): " + Math.random());
    // console.log("Math.random() * (max - min): " + Math.random() * (max - min));
    // console.log("getRandomNum return output: " + Math.floor[Math.random() * (max - min + 1)] + min);
};

// ===== At the start of the game ===== //
// Generate a random number for the player to guess, and also assign randomly generated numbers for each crystal.

// Global variables
var numToMatch = 0;
var playerScore = 0;
var wins = 0;
var losses = 0;

function startGame() {

    // Set (reset) the scores to zero at the start of the game
    playerScore = 0;

    numToMatch = getRandomNum(19, 120);
    
    // Display the 'numToMatch' value in UI
    $("#random-number").html(numToMatch);

    // Generate random values between 1 - 12 and assign them to each crystal:
    var crystal1 = getRandomNum(1, 12);
    console.log(crystal1);

    var crystal2 = getRandomNum(1, 12);
    console.log(crystal2);

    var crystal3 = getRandomNum(1, 12);
    console.log(crystal3);

    var crystal4 = getRandomNum(1, 12);
    console.log(crystal4);
       
    // Assign the randomly generated value of each crystal to HTML crystal id's.
     $("#crystal1").attr("data-value", crystal1);
     $("#crystal2").attr("data-value", crystal2);
     $("#crystal3").attr("data-value", crystal3);
     $("#crystal4").attr("data-value", crystal4);

    // Display Scores for Total Score, Wins & Losses
    $("#playerScore").text(playerScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
};

// When the user clicks the crystals, it generates a value:
$(".crystal").on("click", function(e) { 

    // It stores randomly generated value for the crystal (the element) that was clicked.
    var crystalValue = $(this).attr("data-value");
    console.log("CrystalValue; " + crystalValue);

    // Adds the value of crystal to the playerScore and assigns it dynamically.
    playerScore += parseInt(crystalValue);
    $("#playerScore").text(playerScore);
    console.log("Current Player Score: " + playerScore);

    // Check: If the playerScore is equal to numToMatch, then update the Win #. If the playerScore is more than the numToMatch, then update the Loss #.
    // Restart the game after the update.
    if (playerScore === numToMatch) {
        wins++;
        alert("Number matched. Congrats, you won!")
        startGame();
    
    } else if (playerScore > numToMatch) {
        losses++;
        alert("Number over the limit. Sorry, you lost...");
        startGame();
    } 
});

// Make functions available to be executed when the document is loaded (triggers the event):
$(document).ready(function() {
    startGame();
});