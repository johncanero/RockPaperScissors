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