const pwdTag = document.querySelector("input[type=password]");
pwdTag.addEventListener("click", function(){
  const pwdText = document.querySelector("#pwdText");
  pwdText.classList.add("active");
});

//위와 타입이 똑같을때 
const pwdCheckTag = document.querySelector("input[name=pwdCheck]");
pwdCheckTag.addEventListener("focus", function(){
  const pwdCheckText = document.querySelector("#pwdCheckText");
  pwdCheckText.classList.add("active");
} );


//패스워드 입력하면 안내문구 사라지게 하기
//인풋태그에서 포커스가 사라지는 이벤트
pwdTag.addEventListener("blur", function(){
  const pwdText = document.querySelector("#pwdText");
  pwdText.classList.remove("active");
})

//여러가지 이벤트 검색해서 함수 만들어보기!