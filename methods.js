const student = {
  name: "Mr. X",
  money: 5000,
  study: "Math",
  subjects: ["Calculus", "Algebra", "Geometry"],
  exam: function () {
    return this.name + " " + "is participating in an exam";
  },
  improveExam: function (subject) {
    this.exam();
    return `${this.name} is taking improve exam on ${subject}`;
  },
  treatDey: function (amount, tips) {
    this.money = this.money - amount - tips;
    return this.money;
  },
};
const output = student.exam();
// console.log(output);
const reExam = student.improveExam("Algebra");
// console.log(reExam);
const remaining = student.treatDey(500, 50);
console.log(remaining);
const dolaRemaining = student.treatDey(500, 50);
console.log(dolaRemaining);
