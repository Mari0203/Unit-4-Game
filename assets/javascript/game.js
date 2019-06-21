// Pesudo codes //
// Generate a random number at the start game---should be between 19 - 120. //
var randomValue = 0;

function startGame() {
    randomValue = Math.floor(Math.random()* 10 * 100);
    console.log(randomValue);

    // Generate random values for each crystals:
    var crystal1 = Math.ceil(Math.random() * (12-1)) + 1;
    var crystal2 = 7;
    var crystal3 = 13;
    var crystal4 = 25;

    // Assign the randomly generated value of each crystal to HTML crystal id's.
     $("#crystal1").attr("data-value") = crystal1;
     $("#crystal2").attr("data-value") = crystal2;
     $("#crystal3").attr("data-value") = crystal3;
     $("#crystal4").attr("data-value") = crystal4;
};

// Call the function
startGame();

// When the user clicks one of the crystals, it generates a value:
$("#crystal1").on("click", function(e) {
    // code that display the randomly selected value for crystal1
    
    
});

$("#crystal2").on("click", function(e) {
    // code that display the randomly selected value for crystal1
    console.log($("#crystal2").attr("data-value"));

    $("#crystal1").attr("data-value")
});

// Check function: If the total value of crystal clicks is over assigned randomValue, then game over.
// If below, user can continue click.

// Reset the game >> clear the values and start over. 