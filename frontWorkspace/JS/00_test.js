console.log("hate world")

function sayhello(){
  alert("안녕못해.");
}

//현재 문서에 id=target를 이용하여 h1문서를 가져오는 작업
// const x = document.querySelector("#target");

// x.style.backgroundColor = "red";


//버튼 누르면 색 바뀌게 하기
function changeColor() {
  const x = document.querySelector("#target");
  x.style.backgroundColor = "red";
//버튼 누르면 객체의 내부 글자 바꾸기 
x.innerText = "JavaScript";

}


//selectroAll은 조건에 맞는 모든 요소들을 가져옴
//요소 한개가 아니라 여러개라 배열에 담아주어야 함
function setBox() {
  const boxArr = document.querySelectorAll(".box")

  console.log(boxArr); 

  for(let i = 0; i < boxArr.length; i++) {
    boxArr[i]
    boxArr[i].style.width = "100px";
    boxArr[i].style.height = "100px";
    boxArr[i].style.backgroundColor = "blue";
  }
}


//아이디 중복검사 함수 생성
function checkDup() {
  //유저가 입력한 아이디 가져오기 == input태그의 value값
  const userIdTag = document.querySelector("#userId");
  console.log(userIdTag);
  console.log(userIdTag.placeholder);
  console.log(userIdTag.id);
  console.log(userIdTag.type);
  console.log(userIdTag.value);

  //요소를 가져와서 조작하는 작업
  userIdTag.placeholder = "플레이스홀더 바꿔버리기"
  userIdTag.value = "js로 넣어주는 value"
  userIdTag.type = "checkbox";

  //중복인지 확인하기
}




