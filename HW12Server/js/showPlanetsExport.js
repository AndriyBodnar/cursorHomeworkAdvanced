export function showPlanet(){
    const updHTTPS = (url) =>
  url[4].toLowerCase() === "s" ? url : url.slice(0, 4) + "s" + url.slice(4);

function sendRequest(url) {
  const newURL = updHTTPS(url);
  return fetch(newURL)
    .then((res) => res.json())
    .catch("something went wrong");
}

document.getElementById("planetsShowBtn").addEventListener("click", () => {
  sendRequest(`http://swapi.dev/api/planets/?page=1`).then((res) => {
    let planet = "";
    res.results.forEach((el) => {
      planet += `<div class="planets__info">
                    <p>Name<span>: ${el.name},</span></p>
                  </div>`;
      document.getElementById("planets__area").innerHTML = `${planet}`;
      document.getElementById("planets__area").classList.add(`contentArea`);
    });
  });
});
}