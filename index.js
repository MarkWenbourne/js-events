window.addEventListener("click", function() {
    console.log("a click occurred on the window")
})

function handleButtonClick(event) {
    console.log("a button was clicked, event:", event)
    var button = event.target
    var box = button.parentNode
    box.classList.toggle("highlighted")
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i <buttons.length; i++) {
    buttons[i].addEventListener("click", handleButtonClick)
}