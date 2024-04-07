var audio1 = new Audio("./sounds/tom-1.mp3")
var audio2 = new Audio("./sounds/tom-2.mp3")
var audio3 = new Audio("./sounds/tom-3.mp3")
var audio4 = new Audio("./sounds/tom-4.mp3")
var audio5 = new Audio("./sounds/crash.mp3")
var audio6 = new Audio("./sounds/kick-bass.mp3")
var audio7 = new Audio("./sounds/snare.mp3")
document.addEventListener("DOMContentLoaded", function () {
    var buttonList = document.querySelectorAll(".drum");
    buttonList.forEach(element => {
        element.addEventListener("click", handleClick);
    });

    document.addEventListener("keydown", function(event) {
        var key = event.key;
        var button = document.querySelector(`.drum[data-key="${key}"]`);
        if (button) {
            button.click();
        }
    });
});

function handleClick(event) {
    var key = event.target.getAttribute("data-key");
    buttonAnimation(key);
    switch (key) {
        case "w":
            audio1.play();
            break;
        case "a":
            audio2.play();
            break;
        case "s":
            audio3.play();
            break;
        case "d":
            audio4.play();
            break;
        case "j":
            audio5.play();
            break;
        case "k":
            audio6.play();
            break;
        case "l":
            audio7.play();
            break;

        default:
            break;
    }
    event.target.style.color = "white";
    setTimeout(function(){event.target.style.color = "#DA0463"},100);
}
function buttonAnimation(key) {
    var elements = document.getElementsByClassName(key);
    elements[0].classList.add("pressed");
    setTimeout(function() {
        elements[0].classList.remove("pressed")}, 100);
}


