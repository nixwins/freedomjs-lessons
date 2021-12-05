let user = {
  login: "dos1",
  passwrod: "123",
  myPop: function () {
    console.log("Its my pop");
  },
};

user.newProp = 123;
user.myFoo = function () {
  console.log("new user function");
};
console.log(user);
// user.myPop();
// console.log(user);

// user.login = "dos2";

// console.log(user);
//0         1
let products = ["Apple", "Banna"];

// console.log(products);

// products[0] = "Orange";
// products[2] = "Redis";
// products[3] = "df";
// products.push("test");
// products.push("test2");

// FRom start
// products.unshift("Start");

// Delete from array

// products.pop();
// products.pop();
// products.shift();
// products.shift();
// console.log(products);

// Фукнци объект сол объект фунция партер кылып жибере алмыз
// function myFoo(y) {
//   y();
// }

// function bar() {
//   console.log("I'm BAR FUNCTION");
// }

// myFoo(bar);
let numbers = [];

for (let i = 0; i < 100; i++) {
  // numbers[i] = i;
  numbers.push(i);
}

// for (let i = 0; i < 50; i++) {
//   numbers.pop();
// }

// for (let i = 100; i > 50; i--) {
//   numbers.pop();
// }
console.log(numbers);
