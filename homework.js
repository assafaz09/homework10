// question 1
const http = require("http");
const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/plain"})
    res.end("I remember how to do it");
}).listen(5000)





// question 2
numbers = [1, 2, 3, 4, 5, 6];
function getEvenNumber(numbers) {
  EvenNumbers = numbers.filter((numbers) => numbers % 2 == 0);
  return EvenNumbers;
}
console.log(getEvenNumber(numbers));

// question 3

const students = [
  { name: "Dan", grade: 85 },
  { name: "Lee", grade: 54 },
  { name: "Noa", grade: 92 },
];

function getPassedStudents(students) {
  let passed = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i].grade >= 60) {
      passed.push(students[i].name);
    }
  }
  return passed;
}

console.log(getPassedStudents(students));

// question 4
Arr = ["apple", "banana"];

function toUpperCaseArray(Arr) {
  UpperCaseArr = Arr.map((Arr) => Arr.toUpperCase());
  return UpperCaseArr;
}
console.log(toUpperCaseArray(Arr));

// question 5
function NegPosNum(numbers) {
  if (numbers > 0) {
    return "positive";
  } else if (numbers < 0) {
    return "negative";
  } else {
    return "zero";
  }
}
console.log(NegPosNum(0));
console.log(NegPosNum(-5));
console.log(NegPosNum(5));


// question 6
function delayMessage(message , delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(message);
    },delay );
  });
}
delayMessage("hello after 2 seconds",2000).then((result)=>{
    console.log(result);
})