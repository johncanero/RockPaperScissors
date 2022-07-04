// Start Button
// Functions to play main button audio on click
function playSound () {
    const sound = document.getElementById("startButtonSound")
    sound.play();
    sound.addEventListener('ended', function() {
        location.href = "game.html";
    });
    // const buttonPress = document.querySelector("#startButtonSound");
    // buttonPress.play ();
}

// Function to hide start div and show end div
let startContainer = document.getElementById("startContainer");
let btn = document.querySelector("#startButton");


