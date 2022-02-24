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

/*
const salaries = {
  //object decleration = salaries
  Ram: 1000, // property : value
  Shyam: 2000,
  Hari: 3000,
  Sita: 4000,
  Gita: 5000,
};
let sum = 0;
for (let key in salaries) {
  //use of for..in loop
  console.log(key, salaries[key]); //key prints the property name i.e. Ram, Shyam....& salaries[key] prints values like 1000, 2000...
  // sum = sum + salaries[key];         //sum of all salaries
  sum += salaries[key]; //sum of all salaries
}
console.log(sum);

console.log(Object.values(salaries)); //prints salaries in a set of arrays
for (let val of Object.values(salaries)) {
  //use of for..of loop
  sum += val; //adding all salaries
}
console.log(sum);
*/

//-----------Object Destructing:--------------
/*
const user = {
  name: "Ram",
  age: 20,
  favBook: {
    bookName: "Skill It",
    bookAuthor: "Harry",
  },
};
console.log(user.name, user.age, user.favBook);
//object destruction exercies 1
const { name, age, favBook } = user;
console.log(name, age, favBook);

//object destruction exercies 2
const { bookName, bookAuthor } = favBook;
console.log(bookName, bookAuthor);
//---------End---------------------------------- 
*/

//----------------------------FUNCTION----------------------------

/*
function printf() {
  let message = "Hi my name is Mark";
  console.log(message);
}
printf();

function printg(name, age, gender, location) {
  let message = `Hi my name is ${name}. Just celebrated my ${age} birthday. I am ${gender}, living in ${location}`;
  console.log(message);
}
printg("Mark", 40, "male", "South Delhi");
//---------------------------------
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));
//---------------------------------
function calcMult(x, y) {
  let multiply = x * y;
  return multiply;
}
let result = calcMult(2, 3);
console.log(result);

//-------------FUNCTION EXPRESSION-------------------
let calcAdd = function (numb1, numb2) {
  let add = numb1 + numb2;
  return add;
};
console.log(calcAdd(2, 3));

*/
/*
let calcSubtraction = function (s, t) {
  let subtraction = s - t;
  return subtraction;
};
console.log(calcSubtraction(9, 4));

//--------------ARROW FUNCTION-----------------
const calcDivide = (j, k) => j / k;
console.log(calcDivide(100, 2));

const calculate = (xx, yy) => xx * yy;
console.log(calculate(100, 200));
//---------------------------------------------
*/

/*--------------ADD AN ARRAY------FOR LOOP-------
let numbx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let sum = 0;
for (let i = 0; i < numbx.length; i++) {
  sum += numbx[i];
}
console.log(sum);
*/

//----------------REST PARAMETER---------------

/*---------------------------------------------
function multiply(...xyz) {
  let multiplication = 1;
  for (let num of xyz) {
    multiplication = multiplication * num;
  }
  return multiplication;
}
console.log(multiply(2, 3, 4, 5));

let numbb = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
for (num of numbb) {
  console.log(num);
}
-----------------------------------------------*/
/*
let sum = 0;
function as(...args) {
  for (let item of args) {
    sum = sum + item;
  }
  return sum;
}
console.log(as(1, 2, 3, 4, 5, 6, 7, 8, 9));
*/
//-------------------------ARRAYS----------------------------------
/*let gods = ["shiva", "ram", "bishnu", "bramha", "krishna"];
console.log(gods);
console.log(gods[0]);
console.log(gods[1]);
console.log(gods.length);
*/
const numberr = [3, 4, 5, 8, 9];
console.log(numberr);
numberr.unshift(1, 2); //add from start
console.log(numberr);
numberr.push(10, 11); //add from end
console.log(numberr);
numberr.splice(5, 0, 6, 7); //add from middle
console.log(numberr);
numberr.shift(); //remove one by one from start
console.log(numberr);
numberr.shift(); //remove one by one from start
console.log(numberr);
numberr.pop(); //remove one by one from end
console.log(numberr);
numberr.pop(); //remove one by one from end
console.log(numberr);
numberr.splice(2, 2); //delete number from middle
console.log(numberr);
