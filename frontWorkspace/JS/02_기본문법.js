/*//함수 외부에 만든 변수는 전역변수
//전역변수는 window객체에 들어있다.
//함수 안쪽에서 사용하고 싶으면 window붙여주면 된다.

//초기화와 할당이 가능
let x = 10; //전역변수
x = 20; // 전역변수

//초기화만 가능 재할당 불가능
const y = 10;
// y = 20;

function f01() {
  var x = 30; //지역변수
  console.log(window.x); 
}


//let : 일반적인 변수
//const : final 변수*/

/*console.log(x);
var x = 10;*/

function f01() {
  if(true){
   let x = 10;
  }

  if(true){
    console.log(x);
  }

}

f01();