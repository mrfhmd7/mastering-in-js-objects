const mrX = {
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

const result = mrX.exam();
// console.log(result);

const mrY = {
  name: "Mr. Y",
  money: 10000,
};

const result2 = mrX.exam.call(mrY);
// console.log(result2);

const mrYMoney= mrX.treatDey.call(mrY, 500, 50);
console.log(mrYMoney);
const mrYMoney2 = mrX.treatDey.apply(mrY, [1000, 100]);
console.log(mrYMoney2);

const mrYTreat = mrX.treatDey.bind(mrY);
const remaining = mrYTreat(1000, 100);
console.log(remaining);