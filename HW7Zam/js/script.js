const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

//1
function getMyTaxes(salary) {
  return Math.round(salary * this.tax);
}
let salary = 1000;

console.log(getMyTaxes.call(ukraine, salary));
console.log(getMyTaxes.call(latvia, salary));
console.log(getMyTaxes.call(litva, salary));

//2
function getMiddleTaxes() {
  return Math.round(this.tax * this.middleSalary);
}
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

//3
function getTotalTaxes() {
  return Math.round(this.tax * this.middleSalary * this.vacancies);
}
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

// 4

function getMySalary(country) {
  let salary = Math.floor(Math.random() * (1500 - 2000) + 2000);
  let taxCountry = country.tax;
  let taxes = Math.round(taxCountry * salary);
  let profit = Math.round(salary - taxes);
  return {
    salary: salary,
    taxes: taxes,
    profit: profit,
  };
}
 console.log(getMySalary(ukraine));
 console.log(getMySalary(latvia));
 console.log(getMySalary(litva));
const timerIdLat =  setInterval(() => console.log(Object.entries(getMySalary(latvia)) + " Latvia"), 10000) ;
const timerIdUkr = setInterval(() => console.log(Object.entries(getMySalary(ukraine)) + " Ukraine"), 10000);
const timerIdLit = setInterval(() => console.log(Object.entries(getMySalary(litva)) + " Litva"), 10000);


let div = document.querySelector(".array");
div.innerHTML = `
   <p><b>Your tax in Ukraine(your salary = ${salary}):</b></br>${getMyTaxes.call(
     ukraine,
     salary
   )} UAH</p>
   <p><b>Your tax in Latvia(your salary = ${salary}):</b></br>${getMyTaxes.call(
     latvia,
     salary
   )} EUR</p>
   <p><b>Your tax in Litva(your salary = ${salary}):</b></br>${getMyTaxes.call(
     litva,
     salary
   )} EUR</p>
   <p><b>Middle taxes in Ukraine:</b></br>${getMiddleTaxes.call(
     ukraine
   )} UAH</p>
   <p><b>Middle taxes in Latvia:</b></br>${getMiddleTaxes.call(latvia)} EUR</p>
   <p><b>Middle taxes in Litva:</b></br>${getMiddleTaxes.call(litva)} EUR</p>
   <p><b>All sum taxes in Ukraine:</b></br>${getTotalTaxes.call(
     ukraine
   )} UAH</p>
   <p><b>All sum taxes in Latvia:</b></br>${getTotalTaxes.call(latvia)} EUR</p>
   <p><b>All sum taxes in Litva:</b></br>${getTotalTaxes.call(litva)} EUR</p>
   <p><b>Fourth function in console on timer (10 sec)</b></p>
    `;
