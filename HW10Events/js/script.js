function playSound(el) {
  const audio = document.querySelector(`audio[class = "key${el.keyCode}"]`);
  const key = document.querySelector(`div[id = "key${el.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add("play");
}

function removeTransition(el) {
  if (el.propertyName !== "transform") return;
  this.classList.remove("play");
}

const keys = document.querySelectorAll(".keyWord");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keyup", playSound);

// click

const btn = document.getElementById("key72");

function playSoundClick(numberKey){
    console.log(document.getElementById(`${numberKey}`));
  const audio = document.querySelector(`audio[class = ${numberKey}]`);
  const key = document.querySelector(`div[id = ${numberKey}]`);
  audio.play();
  audio.currentTime = 0;
  key.classList.add("play");
}

const seventyTwo = playSoundClick(`key72`);

btn.addEventListener("click", seventyTwo);



// let arr = document.querySelectorAll(".key");
// let div_array = Array.prototype.slice.call(arr);

// console.log(arr);
// document.getElementById("key65").addEventListener("click", playMusic(0));
// document.getElementById("key83").addEventListener("click", playMusic(1));
// document.getElementById("key68").addEventListener("click", playMusic(2));
// document.getElementById("key70").addEventListener("click", playMusic(3));
// document.getElementById("key71").addEventListener("click", playMusic(4));

// function playMusic(el) {
//   const firstMusic = arr[el];
//   firstMusic.play();
//   firstMusic.currentTime = 0;
//   // document.getElementById(`${b}`).classList.add("play");
// }

// debugger

// const playSoundClick = (numberKey) => {
//   console.log(document.getElementById(`${numberKey}`));
//   const audio = document.querySelector(`audio[class = ${numberKey}]`);
//   const key = document.querySelector(`div[id = ${numberKey}]`);
//   audio.play();
//   audio.currentTime = 0;
//   key.classList.add("play");
// }
const btn = document.getElementById("key72");

function playSoundClick(numberKey){
    console.log(document.getElementById(`${numberKey}`));
  const audio = document.querySelector(`audio[class = ${numberKey}]`);
  const key = document.querySelector(`div[id = ${numberKey}]`);
  audio.play();
  audio.currentTime = 0;
  key.classList.add("play");
}

const seventyTwo = playSoundClick(`key72`);

btn.addEventListener("click", seventyTwo);



// console.log(document.getElementById(`key72`));
// const audio = document.querySelector(`audio[class = key72]`);
// const key = document.querySelector(`div[id = key72]`);
// audio.play();
// audio.currentTime = 0;
// key.classList.add("play");