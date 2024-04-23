let cardList = [];

const body = document.querySelector("body");
body.addEventListener("click", handleClick);

function handleClick(evt){
  addCardElemToList(evt);
  printCardInfo();
  hideCard();
  clearCardList();
}


//클릭한 카드를 리스트에 담는다.
function addCardElemToList(evt){
  const elem = evt.target;
  // console.log(cardNum);//카드 하나만 출력됨
  cardList.push(elem);//push 메소드 사용하여 배열의 맨 마지막에 추가
}


//카드 두장 출력하면 리스트 비우기 다음 카드 선탣을 위해
function clearCardList(){
  if( !isCardListFull){return;}
  cardList = [];
}


//카드가 2장이고, 일치하면 숨김
function hideCard(){
  if( !isCardListFull){return;}
  const cardNum01 = cardList[0].getAttribute("cardNum");
  const cardNum02 = cardList[1].getAttribute("cardNum");

  if(cardNum01 === cardNum02){
    cardList[0].classList.add("hide");
    cardList[1].classList.add("hide");
  }
}


//카드 2장 선택했다면? 카드정보 출력
function printCardInfo(){
  if( !isCardListFull){return;}
    console.log(cardList[0]);
    console.log(cardList[1]);
  }

  //카드 2장 선택했는지 확인하는 함수
  function isCardListFull(){
    return cardList.length === 2;
  }


  //cardNum은 브라우저가 해석을 못함 getArrtibute()함수 이용해서 속성 가져오기
  // const cardNum = elem.getAttribute("cardNum");
  //elem.innerTex == 태그 안쪽의 텍스트 출력