// 1

const getRandomArray = (length, min, max) => {
  const randomArray = Array.from({ length: length });
  const rndMap = randomArray.map((el) =>
    (Math.random() * (min - max) + max).toFixed(0)
  );
  return rndMap;
};
const random = getRandomArray(5, 1, 800);
console.log(random);

// 3

const getAverage = (...numbers) => {
  let deleteNumberLength = 0;
  const total = numbers.reduce((total, number) => {
    if (!Number.isInteger(number)) {
      deleteNumberLength -= 1;
      return total;
    } else {
      return total + number;
    }
  });

  return (total / (numbers.length + deleteNumberLength)).toFixed(2);
};
const avg = getAverage(3, 3, 103.2, 3, 3, 8, 9.2);
console.log(avg);

//4

const getMedian = (...numbers) => {
  let wholeNumber = numbers.filter((el) => el % 1 === 0);
  let sortNum = wholeNumber.sort((a, b) => {
    return a - b;
  });
  let middlePos = sortNum.length / 2;
  if (sortNum.length % 2 === 0) {
    middlePos = Math.round(sortNum.length / 2);
    return (sortNum[middlePos] + sortNum[middlePos - 1]) / 2;
  } else {
    return sortNum[Math.round(middlePos) - 1];
  }
};
const median = getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2;
console.log(median);

//5
const filterEvenNumbers = (...numbers) => {
  return numbers.filter((number) => number % 1 === 0 && number % 2);
};
const numbers = [2.1, 5, 6, 11, 3, 99, 10, 12, 18];
console.log(filterEvenNumbers(...numbers));

//6
const countPositiveNumbers = (...numbers) => {
  return numbers.filter((el) => el % 1 === 0 && el > 0).length;
};
const positive = countPositiveNumbers(1, -2, 3, -4, -5, 6);
console.log(positive);

//7
const getDividedByFive = (...numbers) => {
  return numbers.filter((el) => el % 1 === 0 && el % 5 === 0);
};
const fiveDiv = getDividedByFive(
  6,
  2,
  55,
  11,
  78,
  2,
  575,
  77,
  57,
  87,
  23,
  2,
  56,
  3,
  2,
  105,
  105.55
);
console.log(fiveDiv);

//8
const replaceBadWords = (str) => {
  let dictionary = ["shit", "fuck"].join("|");
  let badWords = new RegExp(dictionary, "gi");
  return str
    .split(" ")
    .map((word) => word.replace(badWords, "****"))
    .join(" ");
};

console.log(replaceBadWords("Are you fucking kidding? It's bullshit!"));

//9
const divideByThree = (word) => {
  let arrWord = [];
  for (let i = 0; i < word.length; i = i + 3) {
    arrWord.push(word.toLowerCase().slice(i, i + 3));
  }
  return arrWord;
};
console.log(divideByThree("Авіаконструктор"));

let div = document.querySelector(".array");
div.innerHTML = `
   <p><b>Func #1 (random):</b></br>${random}</p>
   <p><b>Func #3 (average):</b></br>${avg}</p>
   <p><b>Func #4 (median):</b></br>${median}</p>
   <p><b>Func #5 (even):</b></br>${filterEvenNumbers(...numbers)}</p>
   <p><b>Func #6 (positiveNumberCount):</b></br>${positive}</p>
   <p><b>Func #7 (dividedByFive):</b></br>${fiveDiv}</p>
   <p><b>Func #8 (bad Words):</b></br>${replaceBadWords(
     "Are you fucking kidding? It's bullshit!"
   )}</p>
   <p><b>Func #9 (divideByThree):</b></br>${divideByThree(
     "Авіаконструктор"
   )}</p>
   <p><b>Func #2 (random):</b></br>in development</p>
   <p><b>Func #10 (random):</b></br>in development</p>
    `;

//2 unfinished
// const mode = (arr) => [...new Set(arr)]
//   .map((value) => [value, arr.filter((v) => v === value).length])
//   .sort((a,b) => a-b)
//   .reverse()
//   .filter((value, i, a) => a.indexOf(value) === i)
//   .filter((v, i, a) => v[1] === a[0][1])
//   .map((v) => v[0])

// console.log(mode([1,2,3,3])); // [3]
// console.log(mode([1,1,1,1,2,2,2,2,3,3,3,5,5,6,7,9,9,9,9,9])); // [1,2]

// 1 alternative
// const getRandomArray = (length, min, max) => {
//     let randomArray = [];
//     for (let i = 0; i < length; i++) {
//       number = (Math.random() * (min - max) + max).toFixed(0);
//       randomArray.push(number);
//     }
//     return randomArray;
//   };
