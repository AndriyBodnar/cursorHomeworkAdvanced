function getMaxDigit(number) {
  number = String(number).split("");
  let num = 0;
  for (let i = 0; i < number.length; i++) {
    if (num < number[i]) {
      num = number[i];
    }
  }
  return "Max numberic in number: " + num;
}

function reformName(name) {
  let word = name[0].toUpperCase() + name.slice(1).toLowerCase();
  return "Changed name: " + word;
}

function withoutTax(salary) {
  if (Number.isInteger(salary)) {
    let tax = 19.5;
    tax = salary * (tax / 100);
    salary = salary - tax;

    return "Salary without tax: " + salary;
  } else {
    return `Error value`;
  }
}

 function getRandomNumber(n, m) {
  n = Math.round(n);
  m = Math.round(m);
  return (random = Math.random() * (n - m) + m).toFixed(0);
}

function countLetter(ltr, word) {
  ltr = ltr.toLowerCase();
  word = word.toLowerCase();
  let ltrNum = 0;
  for (let i = 0; i < word.length; i++) {
    if (ltr === word[i]) {
      ltrNum++;
    }
  }
  if (ltrNum === 1) {
    return ltrNum + " літера " + ltr.toUpperCase();
  } else if (ltrNum === 0) {
    return ltrNum + " літер " + ltr.toUpperCase();
  } else {
    return ltrNum + " літери " + ltr.toUpperCase();
  }
}

function convertCurrency(value) {
  if (String(value).split("").reverse()[0] === "$") {
    value = parseInt(value) * 25;
    return "Convert value: " + value + " UAH";
  } else if (
    String(value).split("").reverse()[0] === "h" ||
    String(value).split("").reverse()[0] === "H"
  ) {
    value = parseInt(value) / 25;
    return "Convert value: " + value + " $";
  } else {
    return "Fail value";
  }
}

function getRandomPassword(length = 8) {
  if (Number.isInteger(length)) {
    let pass = "";

    for (let i = 0; i < length; i++) {
      pass += getRandomNumber(0, 9);
    }

    return `Random password: ` + pass;
  } else {
    return "Error length value";
  }
}
 function deleteLetters(ltr, word) {
  ltr = ltr.toLowerCase();
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    word = word.replace(ltr, "");
  }
  return (
    "Word withour delete letters: " +
    word[0].toUpperCase() +
    word.slice(1).toLowerCase()
  );
}

function isPalyndrom(word) {
  let regexp = /[\W_]/g;
  let lowRegStr = word.toLowerCase().replace(regexp, "");
  let reverseStr = lowRegStr.split("").reverse().join("");
  return "Is word palyndrom: " + (reverseStr === lowRegStr);
}

let div = document.querySelector(".function");
div.innerHTML = `
 
  <p>Функція №1: ${getMaxDigit(142872342384310)}</p>
  <p>Функція №3: ${reformName("jAmEsOn")}</p>
  <p>Функція №4: ${withoutTax(1000)}</p>
  <p>Функція №5: Random number: ${getRandomNumber(1, 10)}</p>
  <p>Функція №6: ${countLetter("н", "Формування")}</p>
  <p>Функція №7: ${convertCurrency("300 UAH")}</p>
  <p>Функція №8: ${getRandomPassword()}</p>
  <p>Функція №9: ${deleteLetters("т", "Тракторець")}</p>
  <p>Функція №10: ${isPalyndrom("A man, a plan, a canal. Panama")}</p>
  `;


