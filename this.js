// console.log(this);
const mrX = {
  name: "Mr. X",
  money: 5000,
  study: "Math",
  subjects: ["Calculus", "Algebra", "Geometry"],
  exam: function () {
    console.log(this);
    return this.name + " " + "is participating in an exam";
  },
  examArrow: () => {
    console.log(this);
  },
  examNested: () => {
    const arrow = () => {
      console.log(this);
    };
    arrow();
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

mrX.exam();

const mrY = {
  name: "Mr. Y",
  money: 10000,
};

mrY.exam = mrX.exam;
mrY.exam();

function clickHandler() {
  console.log('inside click handler',this);
}

document.getElementById("btn-click2").addEventListener("click", function () {
  console.log(this);
});
