class Student {
  constructor(university, course, fullName) {
    this.university = university;
    this.course = course;
    this.fullName = fullName;
    this.student = true;
    this.allMarks = [5, 4, 4, 5]; //default array
  }

  getInfo() {
    return (
      "Студент " +
      this.course +
      "го курсу " +
      this.university +
      " " +
      this.fullName
    );
  }

  get marks() {
    if (this.student) return this.allMarks;
    else return null;
  }

  set marks(mark) {
    if (this.student) {
      mark = Number.parseInt(mark);
      while (Number.isInteger(mark)) {
        this.allMarks.push(mark);
        return this.allMarks;
      }
    } else return null;
  }

  getAverageMark() {
    if (this.student) {
      let sum = 0;
      this.allMarks.forEach((mark) => (sum += mark));
      let avg = (sum / this.marks.length).toFixed(1);
      return avg;
    } else return null;
  }

  dismiss() {
    this.student = false;
  }
  recover() {
    this.student = true;
  }
}

class BudgetStudent extends Student {
  constructor(university, course, fullName) {
    super(university, course, fullName);
  }
  
  getScholarship() {
    console.log(this.getAverageMark())
    if (this.student && this.getAverageMark() >= 4) {
      return this.fullName + ", Ви отримали 1400 грн. стипендії";
    } else {
      return null;
    }
  }
}

const student1 = new Student("НУ ЛП", "1", "Roman");

const student2 = new Student("ЛНУ", "2", "Ivan");

const student3 = new Student("УКУ", "3", "Fedir");

const student4 = new BudgetStudent("НУ ЛП", "1", "Roman");
const student5 = new BudgetStudent("ЛНУ", "2", "Ivan");
const student6 = new BudgetStudent("УКУ", "3", "Fedir");

console.log(student1.getInfo());
console.log(student1.marks);
student1.marks = 2;
console.log(student1.marks);
console.log(student1.getAverageMark());
student1.dismiss();
console.log(student1.marks);
student1.recover();
console.log(student1.marks);

console.log(student2.getInfo());
console.log(student2.marks);
student2.marks = 1;
console.log(student2.marks);
console.log(student2.getAverageMark());
student2.dismiss();
console.log(student2.marks);
student2.recover();
console.log(student2.marks);

console.log(student3.getInfo());
console.log(student3.marks);
student3.marks = 5;
console.log(student3.marks);
console.log(student3.getAverageMark());
student3.dismiss();
console.log(student3.marks);
student3.recover();
console.log(student3.marks);

student4.marks = 2;
student5.marks = 1;
student6.marks = 5;
console.log(student4.getScholarship());
console.log(student5.getScholarship());
console.log(student6.getScholarship());
