const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

//1
let salary = 1000;
function getMyTaxes (salary){
  return Math.round(salary * this.tax);
}


export function getMyTaxesExport() {
  console.log('Hw7',getMyTaxes.call(ukraine, salary));
}
