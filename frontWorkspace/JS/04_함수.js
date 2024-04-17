//선언적 함수
function f01(x) {
  return x+1;
}

//익명 함수 변수를 만들어서 담아줌 
const f02 = function(x) {
  return x+1;
}

//화살표 함수
// const f03 = (x) => { return x+1; } 아래랑 같다
const f03 = x => x+1;

// result01 = f01(10);
// result02 = f02(10);
// result03 = f03(10);

// console.log(result01);
// console.log(result02);
// console.log(result03);

//============================================

const printNum = function(x){
  console.log(x);
  console.log(arguments);
}

// printNum(123, 200, 300);


//============================================


function getTen(){
  return printNum;
}

result = getTen();
// console.log(result);

// result(777);

//=================================================

// function hello(){
//   console.log("헬로 모두들 안녕 내가 누군지 아니");
// }

// const hi = hello();

// const x = () => {};
// console.log(typeof x);


//========================================
// const calcResult = console.log(3/0); //Infinity
// isFinite(calcResult); //Inginity가 맞는지 아닌지 판단해주는 함수

// const isFiniteResult = isFinity(calcResult);
// console.log(isFiniteResult);


// const calcResult = 1 / 5;
// console.log(isNaN(calcResult));

console.log(0 == "0");
console.log(0 == []);
console.log("0" == []);
