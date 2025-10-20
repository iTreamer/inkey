let cNote = new Audio("notec.mp3");
let button1 = document.getElementById("button1");
function playSound()
{
    cNote.currentTime = 0;
    cNote.play();
}
button1.addEventListener("click", playSound);
