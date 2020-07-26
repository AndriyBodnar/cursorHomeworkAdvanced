"use strict";
//debugger
const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

function getCouple(stdList) {
  let girls = [];
  let boys = [];
  let pair = [];
  for (let student of stdList) {
    if (student.split("").reverse()[0] === "а") {
      //   console.log(student.split("").reverse());
      girls.push(student);
    } else {
      boys.push(student);
    }
  }
  for (let i = 0; i < boys.length; i++) {
    pair.push([" " + boys[i], " " + girls[i]]);
  }
  return pair;
}

function coupleSubject(couple, subject) {
  let coupleAndSubject = [];
  for (let i = 0; i < couple.length; i++) {
    coupleAndSubject.push([couple[i].join(" i"), " (" + subject[i] + ")"]);
  }
  return coupleAndSubject;
}

function studentMarks(student, mark) {
  let stdScore = [];
  for (let i = 0; i < student.length; i++) {
    stdScore.push([" " + student[i], " " + mark[i]]);
  }
  return stdScore;
}

function coupleScore(pair, subject) {
  let pairScore = [];
  for (let i = 0; i < pair.length; i++) {
    pairScore.push([
      pair[i].join(" i"),
      " (" + themes[i] + ")",
      " " + (Math.random() * (1 - 5) + 5).toFixed(0),
    ]);
  }
  return pairScore;
}

const pairs = getCouple(students);
const pairThemes = coupleSubject(pairs, themes);
const markForOne = studentMarks(students, marks);
const markForCouple = coupleScore(pairs, themes);

console.log(pairs);
console.log(pairThemes);
console.log(markForOne);
console.log(markForCouple);

let div = document.querySelector(".array");
div.innerHTML = `
 <p><b>Pairs:</b></br>${pairs}</p>
 <p><b>Pairs and subject:</b></br>${pairThemes}</p>
 <p><b>Student mark:</b></br>${markForOne}</p>
 <p><b>Pair mark:</b></br>${markForCouple}</p>
  `;
