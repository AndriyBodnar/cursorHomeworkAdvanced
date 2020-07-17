let firstNumber = +prompt("Input your first number:");
// let firstNumber = parseInt(prompt("Input your first number:"));
// console.log(firstNumber);
while (!Number.isInteger(firstNumber)) {
  firstNumber = parseInt(
    prompt("Input your first integer number:", Math.round(firstNumber))
  );
}

// if(firstnNumber.isInteger)

// let secondNumber = parseInt(prompt("Input your second number:"));
let secondNumber = +prompt("Input your second number:", firstNumber + 1);
while (!Number.isInteger(secondNumber) || firstNumber >= secondNumber) {
  secondNumber = parseInt(
    prompt("Input your second integer number(second > first):")
  );
}
console.log(secondNumber);

let sumNumber = 0;
let checkPair = confirm("Skip even numbers?");

if (checkPair) {
  for (let i = firstNumber; i <= secondNumber; i++) {
    if (i % 2 !== 0) {
      sumNumber += i;
    }
  }
} else {
  for (let i = firstNumber; i <= secondNumber; i++) {
    sumNumber += i;
  }
}

alert("Sum of numbers: " + sumNumber);
console.log(sumNumber);
