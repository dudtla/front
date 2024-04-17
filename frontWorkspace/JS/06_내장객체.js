const x = new Object();
x.name = "박춘삼";


const result = x.hasOwnProperty("age");
console.log(result);

console.log(x instanceof Object);


//Date
const date = new Date();
console.log(date);

function showCurrentTime(){
const divTag = document.querySelector("#div-time");
divTag.innerText = new Date();

console.log(new Date());

}

  console.log(new Date());
