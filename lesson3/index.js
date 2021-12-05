// string number bool null undefined object

let person = {
  name: "Dos",
  age: 31,
  salemAit: function () {
    console.log("Salem");
  },
};
// console.log(person.name);
// console.log(person.age);
// person.salemAit();

// let names = [10, "Dos", "Erzhan"];
// console.log(names[0]);

let numbers = [4, 5, 10, 5];

// let arr = {
//     length: 12;
// }

// console.log(numbers[0]);
// console.log(numbers[1]);
// console.log(numbers[2]);
// console.log(numbers[3]);

for (let i = 0; i < 5; i++) {
  //   console.log(i);
}
for (let address = 2; address < numbers.length; address++) {
  console.log(numbers[3]);
}

let streets = ["Bogenbai", "Nursultan"];
let animals = [{ nickname: "Laika" }, { nickname: "Shariwk" }];
let lika = animals[0]; //{ nickname: "Laika" }

// console.log(lika.nickname);
let user = { name: "Dos", fullname: "Yesov" };

function printFullname(obj) {
  console.log(obj.name + " " + obj.fullname);
}
printFullname(user);
