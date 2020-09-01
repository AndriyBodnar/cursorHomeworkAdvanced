const apiURL = "http://swapi.dev/api/";
const charactersBtn = document.getElementById("charachters__part-btn");
const charachtersPartArea = document.getElementById("charachters__part-area");
const movieSelector = document.getElementById("charachters__part-select");
const planetsShowBtn = document.getElementById("planetsShowBtn");
const planetsArea = document.getElementById("planets__area");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const planetsBtn = document.getElementById("planetsBtn");

const updHTTPS = (url) =>
  url[4].toLowerCase() === "s" ? url : url.slice(0, 4) + "s" + url.slice(4);

function sendRequest(url) {
  const newURL = updHTTPS(url);
  return fetch(newURL)
    .then((res) => res.json())
    .catch("something went wrong");
}

function movieURL(num) {
  return `${apiURL}films/${num}/`;
}

charactersBtn.addEventListener("click", () => {
  let part = movieSelector.options[movieSelector.selectedIndex].value;
  let movie = movieURL(part);
  let character = " ";
  sendRequest(movie)
    .then((res) => res.characters.map(sendRequest))
    .then((res) => Promise.all(res))
    .then((res) => {
      res.map((el) => {
        charachtersPartArea.classList.add(`contentArea`);
        movieSelector.classList.add(`activeSelect`);
        // charactersBtn.style = `visibility: hidden`;
        character += `<div class="charachters__info">
                            <p>Name: <span> ${el.name},  </span>
                            Birth date: <span> ${el.birth_year}, </span>
                            Gender: <span>${el.gender}</span>
                            </p>
                      </div>`;
        charachtersPartArea.innerHTML = `${character}`;
        charactersBtn.disabled = true;
      });
    });
});

movieSelector.addEventListener("click", () => {
  charactersBtn.disabled = false;
});

let page = 1;

function urlForPlanets(page) {
  return `${apiURL}planets/?page=${page}`;
}

planetsShowBtn.addEventListener("click", () => {
  sendRequest(urlForPlanets(page)).then((res) => {
    let planet = "";
    res.results.forEach((el) => {
      planet += `<div class="planets__info">
                  <p>Name<span>: ${el.name},</span></p>
                </div>`;
      planetsArea.innerHTML = `${planet}`;
      planetsArea.classList.add(`contentArea`);
    });
  });
  planetsBtn.style = "visibility: visible;";
  planetsShowBtn.style = `display: none`;
  document.querySelector(`.planets__container-title`).classList.add(`block`);
  prevBtn.style = "visibility: hidden;";
});

nextBtn.addEventListener("click", () => {
  sendRequest(urlForPlanets(++page)).then((res) => {
    if (res.next == null) {
      nextBtn.style = "visibility: hidden;";
      return (nextBtn.disabled = true);
    } else {
      let planet = "";
      res.results.forEach((el) => {
        planet += `<div class="planets__info">
                    <p>Name<span>: ${el.name},</span></p>
                  </div>`;
        planetsArea.innerHTML = `${planet}`;
      });
      currentPage = page;
      prevBtn.disabled = false;
      prevBtn.style = "visibility: visible;";
    }
  });
});

prevBtn.addEventListener("click", () => {
  sendRequest(urlForPlanets((page -= 1))).then((res) => {
    if (res.previous == null) {
      prevBtn.style = "visibility: hidden;";
      return (prevBtn.disabled = true);
    } else {
      let planet = "";
      nextBtn.style = "visibility: visible;";
      res.results.forEach((el) => {
        planet += `<div class="planets__info">
          <p>Name<span>: ${el.name},</span></p>
        </div>`;
        planetsArea.innerHTML = `${planet}`;
      });
      nextBtn.disabled = false;
      prevBtn.style = "visibility: visible;";
    }
  });
});
