window.addEventListener("keydown", function (el) {
  const audio = document.querySelector(`audio[class = "key${el.keyCode}"]`);
  const key = document.querySelector(`div[id = "key${el.keyCode}"]`);
  if (!audio) return;
  audio.play();
  audio.currentTime = 0;
  key.classList.add("play");
});

const keys = document.querySelectorAll(".keyWord");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

function removeTransition(el) {
  if (el.propertyName !== "transform") return;
  this.classList.remove("play");
}

document.getElementById("key65").addEventListener("click", function () {
  console.log(document.getElementById("key65"));
  const audio = document.querySelector(`audio[class = key65]`);
  const key = document.querySelector(`div[id = key65]`);
  audio.play();
  key.classList.add("play");
});

document.getElementById("key83").addEventListener("click", function () {
  console.log(document.getElementById("key83"));
  const audio = document.querySelector(`audio[class = key83]`);
  const key = document.querySelector(`div[id = key83]`);
  audio.play();
  audio.currentTime = 0;
  key.classList.add("play");
});

document
  .getElementById("key68")
  .addEventListener("click", function keyClick(key68) {
    console.log(document.getElementById("key68"));
    const audio = document.querySelector(`audio[class = key68]`);
    const key = document.querySelector(`div[id = key68]`);
    audio.play();
    audio.currentTime = 0;
    key.classList.add("play");
  });

document
  .getElementById("key70")
  .addEventListener("click", function keyClick(key68) {
    console.log(document.getElementById("key70"));
    const audio = document.querySelector(`audio[class = key70]`);
    const key = document.querySelector(`div[id = key70]`);
    audio.play();
    audio.currentTime = 0;
    key.classList.add("play");
  });

document
  .getElementById("key71")
  .addEventListener("click", function keyClick(key68) {
    console.log(document.getElementById("key71"));
    const audio = document.querySelector(`audio[class = key71]`);
    const key = document.querySelector(`div[id = key71]`);
    audio.play();
    audio.currentTime = 0;
    key.classList.add("play");
  });

document
  .getElementById("key72")
  .addEventListener("click", function keyClick(key68) {
    console.log(document.getElementById("key72"));
    const audio = document.querySelector(`audio[class = key72]`);
    const key = document.querySelector(`div[id = key72]`);
    audio.play();
    audio.currentTime = 0;
    key.classList.add("play");
  });
