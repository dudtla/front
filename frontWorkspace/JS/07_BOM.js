//window
function openTest(){
  window.open("https://www.naver.com", "abc", "width=500, height=500, resizable=no, left=500, top=500"); //두번째 인자값에 abc라는 이름 붙여주는게 가능
}

//timeout 3초뒤에 동작
function timeoutTest(){
  timer01 = setTimeout( () => {
    alert("안뇽~")
  }, 3000);

  
}

//interval 2초마다 동작
function intervalTest(){
  timer02 = setInterval( () => {
    console.log("2초 지남...");
  }, 2000);
}

function clearTimeoutTest(){
  clearTimeout(timer01);
}
function clearintervalTest(){
  clearInterval(timer02);
}

//location
function locationTest(){
  // console.log(location.href);
  // location.href = "https://naver.com";
  location.reload();
}

function navigatorTest(){
  console.log(navigator);
}

function screenTest(){
  console.log(screen);
}