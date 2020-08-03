"use strict";

const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];

// 1

const getSubjects = (student) =>
  Object.keys(student.subjects)
    .map((student) => {
      const newStr = (
        student.slice(0, 1).toUpperCase() + student.slice(1).toLowerCase()
      ).replace("_", " ");
      return newStr;
    })
    .sort();

// 2

const getAverageMark = (student) => {
  const sumNew = Object.values(student.subjects).join(",").split(",");
  let sum = 0;
  for (let i = 0; i < sumNew.length; i++) sum += parseInt(sumNew[i]);
  return (sum / sumNew.length).toFixed(2);
};

// 3

const getStudentInfo = (student) => {
  return {
    courses: student.course,
    name: student.name,
    averageMark: getAverageMark(student),
  };
};

//4
const getStudentsNames = (student) => student.map((el) => el.name).sort(); //will need through regExp mb

// 5

const getBestStudent = () => {
  const getStudentsMarks = (student) =>
    student.map((el) => +getAverageMark(el));
  const indexBest = (student) =>
    getStudentsMarks(student).indexOf(Math.max(...getStudentsMarks(student)));

  return students[indexBest(students)].name;
};
// 6

const calculateWordLetters = (str) => {
  let ltrObj = {};

  for (const el of str) {
    const key = el.toUpperCase();

    if (!ltrObj[key]) ltrObj[key] = 1;
    else ltrObj[key]++;
  }

  return ltrObj;
};

let div = document.querySelector(".array");
div.innerHTML = `
   <p><b>Subjects ${students[0].name}</b></br>${getSubjects(students[0])}</p>
   <p><b>Subjects ${students[1].name}</b></br>${getSubjects(students[1])}</p>
   <p><b>Subjects ${students[2].name}</b></br>${getSubjects(students[2])}</p>
   <p><b>Average mark ${students[0].name}</b></br>${getAverageMark(
  students[0]
)}</p>
   <p><b>Average mark ${students[1].name}</b></br>${getAverageMark(
  students[1]
)}</p>
   <p><b>Average mark ${students[2].name}</b></br>${getAverageMark(
  students[2]
)}</p>
   <p><b>Students info ${students[0].name}</b></br>${Object.entries(
  getStudentInfo(students[0])
)}</p>
   <p><b>Students info ${students[1].name}</b></br>${Object.entries(
  getStudentInfo(students[1])
)}</p>
   <p><b>Students info ${students[2].name}</b></br>${Object.entries(
  getStudentInfo(students[2])
)}</p>
   <p><b>Students names</b></br>${getStudentsNames(students)}</p>
   <p><b>Best students name</b></br>${getBestStudent(students)}</p>
   <p><b>Calculate words</b></br>${Object.entries(
     calculateWordLetters("Пароплав")
   )}</p>
    `;

console.log(getSubjects(students[0]));
console.log(getSubjects(students[1]));
console.log(getSubjects(students[2]));

console.log(getAverageMark(students[0]));
console.log(getAverageMark(students[1]));
console.log(getAverageMark(students[2]));

console.log(getStudentInfo(students[0]));
console.log(getStudentInfo(students[1]));
console.log(getStudentInfo(students[2]));

console.log(getStudentsNames(students));
console.log(getBestStudent(students));

console.log(calculateWordLetters("Пароплав"));
