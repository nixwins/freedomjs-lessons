// const person = { 
//     name:"Dos",
//     lastname:"Zh",
//     getFullName:function(name, lastname ){
//         this.name = name;
//         this.lastname = lastname;
//     }
// }
// console.log(person)
// const user = {}
// user.__proto__ = person;


// user.getFullName("goo", "soo")
// console.log(user)

// let num  = 0;
// let num = 0;

// function plusOne(){
//     console.log(num)
//     let text = "Some text"
//     console.log("Plus one")
//     console.log(text)
//     num = num + 1;
// }


// plusOne();   // 1 Call  let text = .... cl cl
// plusOne(); // 2 call   let text =.... cl cl
// plusOne(); // 3 call

// const counterButton = document.querySelector(".counter");
// const counterOutput = document.querySelector(".counter-output")

// let num = 0;

// function clickOnCounterButton(){
//     console.log(num)
//     num = num + 1;
//     counterOutput.innerHTML = num;
// }
// counterButton.onclick = clickOnCounterButton;

const images = document.querySelectorAll(".image") // 3
const nextButton = document.querySelector(".next-button");

let index = 1;

function showNext(){

    if(index >= images.length){
        index = 0;
    }

    let currentImage = images[index]; // image image imgae ....
    
    images.forEach(function(el){
        el.classList.remove("active")
    });

    currentImage.classList.add("active")

    index = index + 1;
}

nextButton.onclick = showNext;

function Slider(name){
    this.age  = 0;
    this.name = "";
    this.lastname = ""
    // this.name = name; // this = s1 , this === s2
}

let s1 = new Slider("Dos"); // {age:0} this = s1 s1.age = 0;
let s2 = new Slider("Arman"); // {age:0} this = s2
let s3 = new Slider("Aiddos"); // {age:0} this =s3

s1.age = 500;

let p1 = {age:0} 
let p2 = {age:0}
let p3 = {age:0}

p1.age = 600;
p1.name = "Dos"

console.log(s1)
console.log(s2)
console.log(s3)
// const images2 = document.querySelectorAll(".image2") // 3
// const nextButton2 = document.querySelector(".next-button2");

// let index2 = 1;

// function showNext2(){
//     // console.log("123")
//     if(index2 >= images2.length){
//         index2 = 0;
//     }
    
//     let currentImage = images2[index2]; // image image imgae ....
    
//     images2.forEach(function(el){
//         el.classList.remove("active")
//     });

//     currentImage.classList.add("active")

//     index2 = index2 + 1;
// }

// nextButton2.onclick = showNext2;