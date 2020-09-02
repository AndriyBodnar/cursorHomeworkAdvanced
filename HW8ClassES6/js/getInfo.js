export class Student {
    constructor(university, course, fullName) {
      this.university = university;
      this.course = course;
      this.fullName = fullName;
      this.student = true;
      this.allMarks = [5, 4, 4, 5]; //default array
    }
  
    getInfo() {
      return `Студент ${this.course}-го курсу ${this.fullName}, університет - ${this.university}`;
    }
}