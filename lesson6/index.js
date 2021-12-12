// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// // function print(num) {
// //   console.log(num);
// // }
// let arr = [1, 2, 3, 4];
// arr.forEach(function (elem, idx) {
//   console.log(elem, idx);
// });

// let newArr = arr.map(function (elem, idx) {
//   return elem * elem;
// });

// let products = [
//   { id: 1, name: "Burger" },
//   { id: 2, name: "Burger2" },
//   { id: 3, name: "Burger3" },
// ];

// let newProducts = products.map(function (el) {
//   el.fdsf = 1;
//   return el;
// });

// let newArr2 = products.filter(function (el) {
//   return el.id > 1;
// });
// console.log(newArr2);
// // console.log(products);
// // console.log(newProducts);

// // function printArr(arr2, func) {
// //   for (let i = 0; i < arr2.length; i++) {
// //     func(arr2[i]);
// //   }
// // }
// // function func(num) {
// //   console.log(num);
// // }

// // printArr(arr, func);
let myDiv = document.getElementById("myDiv");

console.log(myDiv);
// myDiv.innerHTML = "Salem";

let arr = [2, 3, 4, 5, 1210, 11, 222, 20022];

arr.forEach(function (val) {
  myDiv.innerHTML = myDiv.innerHTML + val + " ";
});

let output = document.getElementById("output");

let newArr = arr.filter(function (val) {
  return val > 100;
});

newArr.forEach(function (val) {
  output.innerHTML += val + " ";
});

let doubleValues = arr.map(function (val) {
  return val * 100;
});

let output2 = document.getElementById("output2");

doubleValues.forEach(function (val) {
  output2.innerHTML = output2.innerHTML + val + " ";
});
console.log(doubleValues);

let login = document.getElementById("login");
let inputValue = document.getElementById("inputValue");
let myButton = document.getElementById("myButton");

function foo() {
  doubleValues.forEach(function (val) {
    inputValue.innerHTML = inputValue.innerHTML + val + " ";
  });
}
myButton.onclick = foo;
// login.value = "nixwins";
// login.

// Make buetifyl

// console.log(output.style);
// let user = { id: 1, name: "strin", address: { street: "Abai" } };
// output.style.color = "orange";
// output.style.fontSize = "50px";

let changeStyle = document.getElementById("changeStyle");

function changeCss() {
  output.style.color = "red";
  output.style.fontSize = "60px";
}
changeStyle.onclick = changeCss;
