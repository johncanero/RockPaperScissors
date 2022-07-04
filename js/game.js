// Home Button playSound()
// Functions to play main button audio on click
function playSound () {
    const sound = document.getElementById("startButtonSound")
    sound.play();
    sound.addEventListener('ended', function(   ) {
        location.href = "index.html";
    });
}

mainButton = document.querySelector("#homeButton").addEventListener("click", playSound);


// Function to hide start div and show end div
let homeContainer = document.getElementById("homeContainer");
let btn = document.querySelector("#startButton");



// Another Page for Win or Lose Effect
// Function to play winner audio on win 
function playSoundApplause() {
    const soundApplause = document.getElementById("soundApplause");
    soundApplause.play();
}


// Function to play loser audio on loss
function playSoundLose() {
    const soundLose = document.getElementById("soundLose");
    soundLose.play();
}





// Sounds of Game Selections (Rock, Paper and Scissors)


// Changing Scoreline


// Results 
