// Function to generate a random number (integer) between a specific range //
// with minmum and maximum numbers being inclusive. //

function getRandomNum(min, max) {
    min = Math.ceil(min);
    console.log("Min: " + min);
    
    max = Math.floor(max);
    console.log("Max: " + max);
    console.log("Max - Min: " + (max - min));
    
    return Math.floor(Math.random() * (max - min + 1)) + min;
    // console.log("Math.random(): " + Math.random());
    // console.log("Math.random() * (max - min): " + Math.random() * (max - min));
    // console.log("getRandomNum return output: " + Math.floor[Math.random() * (max - min + 1)] + min);
};

// ===== At the start of the game ===== //
// Generate a random number for the player to guess, and also assign randomly generated numbers for each crystal.

// Global variables
var numToMatch = 0;
var totalScore = 0;
var wins = 0;
var losses = 0;

function startGame() {
    numToMatch = getRandomNum(19, 120);
    console.log(numToMatch);

    // Display the 'numToMatch' value in UI
    $("#random-number").text(numToMatch);

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
    $("#playerScore").text(totalScore);
    $("#wins").text(wins);
    $("#losses").text(losses);
};


// When the user clicks the crystals, it generates a value:
$(".crystal").on("click", function(e) { 

    // It stores randomly generated value for the crystal (the element) that was clicked.
    var crystalValue = $(this).attr("data-value");
    console.log($(this));

    // Adds the value of crystal to the playerScore and assigns it dynamically.
    playerScore += crystalValue;

    // Check: If the playerScore is equal to numToMatch, then update the Win #.
    // Restart the game after the update.
    
    
    // Check: If the playerScore is more than the numToMatch, then update the Loss #.
    // Restart the game after the update.
});


// Check function: If the total value of crystal clicks is over assigned randomValue, then game over.
// If below, user can continue click.

// Make functions available to be executed when the document is loaded (triggers the event):
$(document).ready(function() {
    startGame();
});

//===== Reset the game ===== >> Clear the values and start over //