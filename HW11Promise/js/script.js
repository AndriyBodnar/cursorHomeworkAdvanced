

const TIME = 50;
const result = document.querySelector(".answer");
  
function getRandomChines(length) {
    return new Promise((resolve) => {
      let result = [] ;
      let sign = String(Date.now()).slice(-5);
      for ( let i = 0; i < length; i++) {
        sign ++;
        result.push(String.fromCharCode(sign));
      }
      setTimeout(() => resolve(result.join("")), length * TIME)
    })
  }
  

for(let i = 5; i <= 8; i++){
    document.querySelector(`.btn${i}`).addEventListener("click", () =>  getRandomChinesBtn(`${i}`));
}
        


function getRandomChinesBtn(n){
    getRandomChines(n).then(
        (res) => {
           result.innerHTML = res;
           result.classList.add("visible");
        })
}








