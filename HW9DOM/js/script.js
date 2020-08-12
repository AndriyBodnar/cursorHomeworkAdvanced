const getRandomColor = () =>  {
  let letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


const setRandomColor = () => {
  let container = document.getElementById("container");
  container.classList.remove("hidden");
  container.classList.add("visible");
  let block = document.querySelectorAll(".block");
  for (let i = 0; i < block.length; i++) {
    block[i].style.backgroundColor = `${getRandomColor()}`;
  }
}

let interval;
let btn = false;

const generateBlocksInterval = () => {
  if (btn) {
    btn = false;
    document.getElementById("start").innerHTML = "Random set color interval";
    clearInterval(interval);
  } else {
    btn = true;
    interval = setInterval(() => setRandomColor(), 1000);
    document.getElementById("start").innerHTML = "Stop random set color interval ";
    
  }
}
