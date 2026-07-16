//index.js
//나의 꽃과 꽃말 만나기 클릭 시 팝업창으로 당신의 탄생화는...띄우고 배경 어둡게 만들기
//(선행작업) 클릭 시 나타나려면 먼저 숨기기 필요
const box_popup = document.querySelector('.box_popup');
const popup_bg = document.querySelector('.popup_bg');
console.log(box_popup, popup_bg);
//자바스크립트에서 css쓰려면 작성하는 속성? 객체.style.속성=값
box_popup.style.display='none'; 
popup_bg.style.display='none'; 
//자바스크립트에서 display=none으로 숨겼다가 특정 이벤트에 따라 다시 보이고 싶을 때
//부조건 block을 쓰는게 아닌 그 태그가 원래 가지고 있는 display 속성으로 되돌리기
//display.flex가 선택지에 원래 있었다면? 자바스크립트도 display=flex
//display가 선택자에 없었다면? 원래 태그 고유속성에 따라 display=bloxk 또는 display=inline
function popupShow(){
    box_popup.style.display='flex';
    popup_bg.style.display='block';
}
//배경 클릭 시, 팝업창과 배경 숨기기
function popupHide(){
    box_popup.style.display='none';
    popup_bg.style.display='none';
}

const user_birthday=document.querySelector('#user_birthday');
//12로 값 변경하기
//객체.속성= 값;
function birthday_month() {
    user_birthday.value = 12;
}