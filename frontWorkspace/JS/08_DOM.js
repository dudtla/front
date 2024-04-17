const x = document.querySelector("#result");
console.log(x);

// x.style.width = "100px";
// x.style.height = "100px";
// x.style.backgroundColor = "gray";
// x.style.border = "1px soild black";


//html div태그에 box클래스를 만들지 않아도 자바스크립트에 추가할 수 있다
// 여러개의 클래스를 추가할 수 있다
x.classList.add("box");
// x.classList.add("aaa");
// x.classList.add("bbb");
// x.classList.add("ccc");

function addRed(){
  const divTag = document.querySelector("#result");
  divTag.classList.add("red");
}

function addBlue(){
  const divTag = document.querySelector("#result");
  divTag.classList.add("blue");
}

function addGreen(){
  const divTag = document.querySelector("#result");
  divTag.classList.add("green");
}

function removeRed(){
  const divTag = document.querySelector("#result");
  divTag.classList.remove("red");
}

function removeBlue(){
  const divTag = document.querySelector("#result");
  divTag.classList.remove("blue");
}

function removeGreen(){
  const divTag = document.querySelector("#result");
  divTag.classList.remove("green");
}