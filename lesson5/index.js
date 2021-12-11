let output = document.getElementById("output");
let todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false,
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false,
  },
];

for (let i = 0; i < todos.length; i++) {
  output.innerHTML = output.innerHTML + todos[i].title + "<br>";
  // output.innerHTML += todos[i].title + "<br>"
}
let myButton = document.getElementById("myButton");

function printHello() {
  console.log("Hello");
}
myButton.addEventListener("click", printHello);

function arrPrinter(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    func(arr[i]);
    // myFoo(arr[i]);
  }
}

let mas = [1, 2, 3, 6];
function myFoo(num) {
  console.log("my fooo " + num);
}

arrPrinter(mas, myFoo);

// let doc = {
//   sayHello: function (str, foo) {
//     if (str === "hi") {
//       console.log("salem");
//       foo();
//     }
//     if (str === "salem") {
//       console.log("hello");
//     }
//   },
// };
// function test() {
//   console.log("Im test function");
// }

// doc.sayHello("hi", test);

// let a = 5;
// let b = a;
// console.log(b);
// b = 10;
// console.log(b);
// console.log(a);

// let printer = function () {
//   console.log("PRINTER FUNC");
// };
// let printer2 = printer;
// printer2();

// let user = {
//   name: "Dos",
//   age: 35,
// };

// let user2 = user;
// console.log(user);
// user2.name = "Janibek";
// console.log(user);

// let user = {
//   name: "dsfd",
//   getAge: function (age) {
//     return age;
//   },
//   value: 3434,
// };

// let num = user.getAge(123);
// console.log(user.value);
// user.value = 12333;
