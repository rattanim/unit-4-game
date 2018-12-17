// execute code when site is loaded
$(document).ready(function() {

//   setting current user number to 0
    var yourscoringnumber = 0;

    // setting up variables
    var wins = 0;
    var losses = 0;
    var crystals;

// random values for crystals

        
    
// resets the game
function resetGame() {
    //random number for each crystal
    var green = Math.floor(Math.random() * 30) + 1;
    $("#green").attr("data",green);      
    var blue = Math.floor(Math.random() * 30) + 1;
    $("#blue").attr("data",blue)
    var yellow = Math.floor(Math.random() * 30) + 1;
    $("#yellow").attr("data",yellow)
    var purple = Math.floor(Math.random() * 30) + 1;
    $("#purple").attr("data",purple)
    //    user number to 0
    yourscoringnumber = 0;
    //random number for user to get to
    randomNum =  Math.floor(Math.random() * 102) + 15;
    $("random-area").text(randomNum);
    console.log("randomNum  " + randomNum);
}

// updating the win-loss page.
function updateDom(UserWin) {
    $("#win-area").empty();

    // If user wins
if (UserWin === true) {
    
    // Display message and generate random number
    $("#win-area").append($("<p>").text("Congrats!! You actually won!!"));
    resetGame();
    renderScoringNumber();
  }
  // If user loses
  else if (UserWin === false) {
   
    // displays message and resets game and generate new number.
    $("#loss-area").append($("<p>").text("HaHa, You lost!! Try again!"));
    resetGame();
    renderScoringNumber();
  }
//   displaying win and loss page
var winspan = $("<span>").text(wins);
var lossesspan = $("<span>").text(losses);

var postWins = $("<p>").text("wins  ");
var postLosses = $("<p>").text("losses  ");

postWins.append(winspan);
postLosses.append(lossesspan);

$("#win-area").append(postWins);
$("#losses-area").append(postLosses);
}


// update guess number
function updateScoringNumber(value) {
   
    // update guess number based on crystal clicked
yourscoringnumber += parseInt(value);
}

// current guess displayed on page
function renderScoringNumber() {
    var scoreNumDiv = $("<div id='score-number'>").text(yourscoringnumber);
    $("#score-area").html();
    $("#score-area").html(scoreNumDiv);
}
// calling all functions to begin
resetGame();
updateDom();
renderScoringNumber();

// on click for all crystal
$(".crystals-button").on("click", function(event) {
    console.log("crystal clicked on")
    //update the current players number
    updateScoringNumber($(this).attr("data"));
    renderScoringNumber();

    // check to see if user wins or lost
    if (yourscoringnumber === randomNum) {
        wins++;
        resetGame();
        updateDom(true);
    }
    else if (yourscoringnumber > randomNum) {
        losses++;
        resetGame();
        updateDom(false);
    }
});

});
