const downBtn = document.getElementById("down");
const upBtn = document.getElementById("up");
const generateID = document.getElementById("generate");
const areaID = document.querySelector(".idGenerator__area");
const HTML = document.querySelector("HTMl");
const SIZE = 18;

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

function* createFontGenerator() {
  let currentSize = SIZE;
  while (SIZE) {
    currentSize = controlFont(currentSize, yield currentSize);
  }
}

const fontGenerator = createFontGenerator();

upBtn.addEventListener(
  "click",
  () => (HTML.style = `font-size: ${fontGenerator.next(`up`).value}px`)
);
downBtn.addEventListener(
  "click",
  () => (HTML.style = `font-size: ${fontGenerator.next(`down`).value}px`)
);
