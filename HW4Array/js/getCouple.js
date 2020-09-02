const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];
const marks = [4, 5, 5, 3, 4, 5];

const getCouple = (stdList) => {
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
};

export function getCoupleExport() {
  console.log('Hw4',getCouple(students));
}
