// var a = 10;
// var b = 15;
// var c = 5;

// function sum(x, y) {
//   var j = x + y;
//   return j;
// }

// function printer() {
//   /////
//   ////
//   ////
//   return "Salem";
// }
// var foo = function (x, y) {
//   return x * y;
// };

// var i = sum(23, 4); // 27
// console.log(printer());
// console.log(i);

// a, b, opertor  * / + -;

// function calculator(a, b, operator) {
//   if (operator === "*") {
//     console.log(a * b);
//   } else if (operator === "-") {
//     console.log(a - b);
//   } else if (operator === "+") {
//     console.log(a + b);
//   } else if (operator === "/") {
//     console.log(a / b);
//   }
// }

// calculator(5, 5, "*"); // 25
// calculator(10, 5, "-"); // 5
// calculator(10, 5, "+"); // 5
// calculator(10, 5, "/"); // 5

//
function checkLogin(login, pasword) {
  var dbLogin = "user";
  var dbPass = "123";
  if (login === dbLogin && pasword === dbPass) {
    console.log("You are loggin");
  } else {
    console.log("Error");
  }
}

// checkLogin("dos1", "777");
// checkLogin("user", "123");

function validPass(password1, password2) {
  if (password1 === password2) {
    console.log("Durys");
  } else {
    console.log("Qate");
  }
}

function validLogin(login) {
  var dbLogin = "dos";
  if (login !== dbLogin) {
    console.log("Byl login bos");
  } else {
    console.log("Byl login bos emes");
  }
}

function checkAge(age) {
  // 7 8 9 10 11 12
  if (age > 6 && age < 13) {
    console.log("Salem");
  }
}
checkAge(20);
checkAge(11);
