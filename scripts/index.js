const box_popup = document.querySelector('.box_popup');
const popup_bg = document.querySelector('.popup_bg');
console.log(box_popup, popup_bg);
box_popup.style.display='none'; 
popup_bg.style.display='none'; 
function popupShow(){
    box_popup.style.display='flex';
    popup_bg.style.display='block';
}
function popupHide(){
    box_popup.style.display='none';
    popup_bg.style.display='none';
}

const user_birthday=document.querySelector('#user_birthday');
function birthday_month() {
    user_birthday.value = 12;
}