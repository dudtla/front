// //로컬스토리지에 데이터 추가 (키,밸류 형태로 구성
// //내 컴퓨터 브라우저에 저장됨.
// localStorage.setItem("first", "수박");
// localStorage.setItem("second", "용과");
// localStorage.setItem("third", "귤");

// //길이 구하기
// const len = localStorage.length;
// console.log(len);

// //데이터 꺼내기/키값으로
// const x = localStorage.getItem("first");
// console.log(x);

// //데이터 삭제//키값으로
// localStorage.removeItem('second');

// //데이터 전부 삭제
// localStorage.clear();

// //로컬스토리지는 문자열만 다룰 수 있다.




//투두리스트에 데이터 넣고 조회하기
const btnTodoInsert = document.querySelector("#btn-todo-insert");
const btnTodoSelect = document.querySelector("#btn-todo-select");
const inputTag = document.querySelector("input[name=todo]");

//로컬스토리지 초기셋팅
localStorage.setItem("todo" , JSON.stringify([]));


//TODO insert (입력된 할일 로컬스토리지에 담기
btnTodoInsert.addEventListener("click", function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr); //투두리스트에 담긴 문자열을 배열에 넣어주는 코드
  todoList.push(inputTag.value);
  localStorage.setItem("todo", JSON.stringify(todoList));
});


//TODO select
btnTodoSelect.addEventListener("click", function(){
  const todoListStr = localStorage.getItem("todo");
  const todoList = JSON.parse(todoListStr);


  //todoList를 화면에 보여주기
  const todoListArea = document.querySelector("#todo-list-area"); //결과물 붙일 영역
  
  //화면지우기 (기존TODO) //div태그를 다 삭제하려면 innerHTML
  todoListArea.innerHTML = "";

  //TODO 만들고, todoListArea에 붙이기
  for(const x of todoList){
    const divTag = document.createElement("div");
    const todoText = document.createTextNode(x);
    divTag.appendChild(todoText);
    todoListArea.appendChild(divTag);
  }

});

