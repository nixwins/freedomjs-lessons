//11) Функция принимает массив строк и выводить если строка начинается с буквы А
let strs = ["apple", "Oral", "Astana", "Madrid", "Aral", "Piter", "appartment"];

function findA(arr) {
  for (let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    if (arr[i].charAt(0) === "A") {
      console.log(arr[i]);
    }
  }
}

// findA(strs);

// 13) Функция принимает массив объектов и выводит id и name каждого элемента
// Например: 1 labore ex et quam laborum

let comments = [
  {
    id: 1,
    name: "labore ex et quam laborum",
  },
  {
    id: 2,
    name: "quo vero reiciendis velit similique earum",
  },
  {
    id: 3,
    name: "odio adipisci rerum aut animi",
  },
  {
    id: 4,
    name: "alias odio sit",
  },
  {
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
  },
  {
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
  },
];

function printIds(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].id);
    console.log(arr[i].name);
  }
}
// printIds(comments);

for (let i = 0; i < comments.length; i++) {
  if (comments[i].id > 3) {
    console.log(comments[i].id + " " + comments[i].name);
  }
}
