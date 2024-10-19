let hemburger_btn = document.getElementById("hemburger-icon");
let side_head = document.getElementById('side-head');
let cross_bar = document.getElementById('cross-bar');

let slide_img = document.querySelectorAll('.slider-items img');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');

hemburger_btn.onclick = () => {
    side_head.style.left = "0%";
    side_head.style.opacity = "1";
    side_head.style.visibility = "visible";
}

cross_bar.onclick = () => {
    side_head.style.left = "-90%";
    side_head.style.opacity = "0";
    side_head.style.visibility = "hidden";
}

