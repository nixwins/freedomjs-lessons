const images = document.querySelectorAll(".image");
// const arr = [{id:1}, {id:2}]

// for(let i =0; i < arr.length; i++){
//     console.log(arr[i].id)
// }
// console.log(images[0])
// console.log(images[1])
// console.log(images[2])
// images.style.display = "none";

// images.forEach(function(el){
//     console.log(el)
//     el.style.display = "none"
// })

// const myP = document.querySelectorAll("p");

// console.log(myP)
const button = document.querySelector(".mybutton")
let index = 0;
// images[3]
function myFoo(){
    console.log(index)
  let child = images[index] // {} images[0]
  child.style.display = "none"
  index = index + 1; // 1 2 3 4 
}
button.onclick = myFoo;

button.style.backgroundColor = "#000"
button.style.color = "#fff"

button.classList.add("test-css-class")

const nextButton = document.querySelector(".next-button");

let index2 = 0; // 1

nextButton.onclick = function(){
        // 3           3
    if(index2 >= images.length){
        index2 = 0;
    }

    let img = images[index2]; // {}

    if(index2 === 1){
        img.classList.add("image-border")
    }

    images.forEach(function(el){
        el.classList.remove("active")
    })
    img.classList.add("active")
    console.log(index2)

    index2 = index2 + 1; 
}

const removeButton = document.querySelector(".remove-button");

removeButton.onclick = function(){
    images.forEach(function(el){
        el.classList.remove("active")
    })
}

function prevFoo(){
    images.forEach(function(el){
        el.classList.remove("active");
    })
    index2 = index2 - 2;
    if(index2 <= -1){
        index2 = images.length - 1; // 3 - 1 = 2
    }
    let prevImg = images[index2];
    prevImg.classList.add("active")
}
const prevButton = document.querySelector(".prev-button")
prevButton.onclick = prevFoo;