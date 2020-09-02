//keyboard

 function playSound(el) {
  const audio = document.querySelector(`audio[class = "key${el.keyCode}"]`);
  const key = document.querySelector(`div[id = "key${el.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.toggle("play");
}

function removeTransition(el) {
  if (el.propertyName !== "transform") return;
  this.classList.remove("play");
}

const keys = document.querySelectorAll(".keyWord");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keyup", playSound);


// click

function playSoundClick(numberKey) {
  const audio = document.querySelector(`audio[class = ${numberKey}]`);
  const key = document.querySelector(`div[id = ${numberKey}]`);
  audio.play();
  audio.currentTime = 0;
  key.classList.toggle("play");
}

const key = [`key65`, `key83`, `key68`, `key70`, `key71`, `key72`];

for (let i = 0; i < key.length; i++) {
  document
    .getElementById(key[i])
    .addEventListener("click", () => playSoundClick(key[i]));
}