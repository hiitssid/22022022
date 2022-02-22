/*

for (z = 0; z < 3; z++) {
  let color = "black";
  switch (color) {
    case "black":
      console.log("This is black");
      break;
    case "white":
      console.log("This is white");
      break;
    case "red":
      console.log("This is red");
      break;
  }
}

let number1 = 1;
let number2 = 2;
let maximum;
if (number1 > number2) {
  maximum = number1;
} else {
  maximum = number2;
}
console.log(`Maximum number is ${maximum}`);

let firstNumber = 13;
let secondNumber = 11;
let maxNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
console.log(`The maximum number is ${maxNumber}`);

//FizzBuzz
//divisible by 3 -> Fizz
//divisible by 5 -> Buzz
//divisible bt 3 & 5 both -> FizzBuzz
//else Nothing

//Solution

let number = 15;
if (number % 3 === 0 && number % 5 === 0) {
  console.log("FizzBuzz");
} else if (number % 5 === 0) {
  console.log("Buzz");
} else if (number % 3 === 0) {
  console.log("Fizz");
} else {
  console.log("Nothing");
}

console.log(
  number1 % 3 === 0 && number1 % 5 === 0
    ? "Fizbuzz T"
    : number1 % 5 === 0
    ? "Buzz T"
    : number1 % 3 === 0
    ? "Fizz T"
    : "Nothing T"
);

let isMember = "N";
let memberYes = "Y";
let memberFee = isMember === memberYes ? "$2" : "$4";
console.log(memberFee);

console.log(isMember === "Y" ? "$2" : "$4");

for (x = 100; x >= 0; x--) {
  let marks = x;
  if (marks >= 80 && marks <= 100) {
    console.log(x, "A+");
  } else if (marks >= 70 && marks <= 79) {
    console.log(x, "A");
  } else if (marks >= 60 && marks <= 69) {
    console.log(x, "A-");
  } else if (marks >= 50 && marks <= 59) {
    console.log(x, "B");
  } else if (marks >= 40 && marks <= 49) {
    console.log(x, "C");
  } else if (marks >= 32 && marks <= 39) {
    console.log(x, "D");
  } else if (marks >= 0 && marks <= 32) {
    console.log(x, "F");
  } else {
    console.log("Invalid Marks");
  }
}

let marks = 31;
if (marks >= 80 && marks <= 100) {
  console.log(marks, "A+");
} else if (marks >= 70 && marks <= 79) {
  console.log(marks, "A");
} else if (marks >= 60 && marks <= 69) {
  console.log(marks, "A-");
} else if (marks >= 50 && marks <= 59) {
  console.log(marks, "B");
} else if (marks >= 40 && marks <= 49) {
  console.log(marks, "C");
} else if (marks >= 32 && marks <= 39) {
  console.log(marks, "D");
} else if (marks >= 0 && marks <= 32) {
  console.log(marks, "F");
} else {
  console.log("Invalid Marks");
}

let q = 1;
let c = 4;
while (q <= 5) {
  let msg = "OLD";
  if (msg === "NEW") {
    console.log("Passed", q);
    q = 5;
  } else {
    console.log("Chances Left", c--);
  }
  q++;
}

let i = 1;
while (i <= 100) {
  console.log("while loop", i);
  i++;
}
i = 1;
do {
  console.log("do while loop", i);
  i++;
} while (i <= 100);

let first_Name = ["seema", "aama", "sid"];
for (xx of first_Name) {
  console.log(xx);
}

let user = {
  fname: "Ram",
  lname: "Rai",
  age: 23,
  address: "PKR",
};
for (let a in user) {
  console.log(a, ":", user[a]);
}

let f_name = "SIDDHARTHA";
for (let element of f_name) {
  console.log(element);
}

for (let w = 0; w <= 10; w++) {
  console.log(w);
  if (w === 3) {
    break;
  }
}

for (let w = 0; w <= 10; w++) {
  if (w === 3) {
    continue;
  }
  console.log(w);
}

*/
/*
const student = {
  name: "Sid",
  age: 30,
  address: "Kathmandu",
  gender: ""male",",
  print: function () {
    console.log("Age: ", this.ag1e;.address);
    console.log("Gender: ", this.gender);
  },
};
student1prkey();
*/

/*
const student1 = {
  name: "Mohan",
  age: 30,
  address: "lalitpur",
  gender: "male",
};

//
for (let in student1) {
  console.log();
}
*/

const salaries = {
  Ram: 1000,
  Shyam: 2000,
  Hari: 3000,
  Sita: 4000,
  Gita: 5000,
};
let sum = 0;
for (let key in salaries) {
  console.log(key, salaries[key]);
  // sum = sum + salaries[key];
  sum += salaries[key];
}
console.log(sum);
