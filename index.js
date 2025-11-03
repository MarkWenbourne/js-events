window.addEventListener("click", function(event) {
    console.log("a click occurred on the window")
    console.log("event.Target:", event.target)
    console.log("event.currentTarget:", event.currentTarget)
})

function handleButtonClick(event) {
    console.log("a button was clicked, event:", event)
    console.log("event.Target:", event.target)
    console.log("event.currentTarget:", event.currentTarget)
    var button = event.target
    var box = button.parentNode
    box.classList.toggle("highlighted")
}

var buttons = document.getElementsByClassName("in-box-button")
for (var i = 0; i <buttons.length; i++) {
    buttons[i].addEventListener("click", handleButtonClick)
}

var boxContainer = document.getElementById("box-container")
boxContainer.addEventListener("click", function (event) {
    console.log("the main element was click")
    console.log("event.Target:", event.target)
    console.log("event.currentTarget:", event.currentTarget)
    event.stopPropagation()
})

var link = document.getElementById("website-link")
link.addEventListener("click", function (event) {
    console.log("that link was click")
    event.preventDefault()
})