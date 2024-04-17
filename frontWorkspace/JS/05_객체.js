//변수에 객체 선언 방법 두가지
// const x = new Object();
const x = {
  atk:100 ,
  def:50 ,
  isDead : false ,
  skill : function(){} ,
  foods:["수박", "포도", "딸기"],
};//객체를 처음 만들때부터 속성을 넣는것도 가능


//키   =   value
// x.name = "홍길동";

//변수 만들어서 넣는것도 가능
const str = "name";
x[str] = "홍길동";

x["max-level"] = 250;//-때문에 괄호 안에 넣어줌
x.age = 20;
x.isProgrammer = true;
x.hobby = ["코딩", "프로그래밍", "개발"] 
x.hello = function(){
  console.log("너무 졸려요");
}

console.log(x);
// console.log(x["max-level"]);
// console.log(x.name);
// console.log(x.age);
// console.log(x.isProgrammer);
// console.log(x.hobby);

x.hello();


//객체의 반복문
//in을 이용하여 k안에 x 값을 다 넣어주고 출력하는 작업(약간 향상된 for문...?)
for(const k in x) {
  console.log(x[k]);
}
