let c4 = document.getElementById("c4");
let cs4 = document.getElementById("c#4");
let d4 = document.getElementById("d4");
let ds4 = document.getElementById("d#4");
let e4 = document.getElementById("e4");
let f4 = document.getElementById("f4");
let fs4 = document.getElementById("f#4");
let g4 = document.getElementById("g4");
let gs4 = document.getElementById("g#4");
let a4 = document.getElementById("a4");
let as4 = document.getElementById("a#4");
let b4 = document.getElementById("b4");
let c5 = document.getElementById("c5");




function play(note)
{
    let audio = new Audio(`tunes/${note}.mp3`);
    audio.play();
}

c4.addEventListener("click", () => play("c4"));
cs4.addEventListener("click", () => play("cs4"));
d4.addEventListener("click", () => play("d4"));
ds4.addEventListener("click", () => play("ds4"));
e4.addEventListener("click", () => play("e4"));
f4.addEventListener("click", () => play("f4"));
fs4.addEventListener("click", () => play("fs4"));
g4.addEventListener("click", () => play("g4"));
gs4.addEventListener("click", () => play("gs4"));
a4.addEventListener("click", () => play("a4"));
as4.addEventListener("click", () => play("as4"));
b4.addEventListener("click", () => play("b4"));
c5.addEventListener("click", () => play("c5"));
