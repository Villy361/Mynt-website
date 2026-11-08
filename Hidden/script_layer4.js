buttonClicksRemaining = 10

function ButtonClicked(){
    buttonClicksRemaining--
    if (buttonClicksRemaining <= 0) {
        document.getElementById("buttonText").innerText = "This Layer is currently finished. Come back now."
        document.getElementById("answer").innerText = "Minecraft/[pollinating_sandboxes].html"
    }
}
