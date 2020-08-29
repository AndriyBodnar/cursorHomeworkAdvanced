const downBtn = document.getElementById("down");
const upBtn = document.getElementById("up");
const generateID = document.getElementById("generate");
const areaID = document.querySelector(".idGenerator__area");
const HTML = document.querySelector("HTMl");
const SIZE = 14;

function* createIdGenerator() {
  for (let i = 1; i < Infinity; i++) {
    yield i;
  }
}

const idGenerator = createIdGenerator();

generateID.addEventListener("click", () => {
  areaID.innerHTML += `
    <div class="resultID">Your id - ${idGenerator.next().value}</div>
    `;
});



const controlFont = (size, change) => {
  if (change === "up") return (size += 2);
  else if (change === "down" && size > 2) return (size -= 2);
  return size;
};

function* createFontGenerator(fontSize = 14) {
  let currentSize = fontSize;
  while (SIZE) {
    currentSize = controlFont(currentSize, yield currentSize);
  }
}

const fontGenerator = createFontGenerator();





const changeSize = (change) => {
  document.querySelector("HTMl").style.fontSize = `${fontGenerator.next(change).value}px`;
}

changeSize();



upBtn.addEventListener('click', () => changeSize('up'))
downBtn.addEventListener('click', () => changeSize('down'))

