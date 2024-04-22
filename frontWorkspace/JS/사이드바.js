const menubtn = document.querySelector("#menu-btn");
menubtn.addEventListener("click", function() {
  const side = document.querySelector("#side");
  //토글 사용하여 사이드바 보이기 숨기기
  side.classList.toggle("active");
});

