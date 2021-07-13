const navBar = document.getElementById('navBar');
const sidebar = document.querySelector('.sidebar');
const radio = document.getElementById("menu-btn");

let lastScrollTop = 0;

window.addEventListener('scroll', ()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navBar.style.top = "-3em";
        radio.checked = false;
    } else {
        navBar.style.top = "0";
    }

    lastScrollTop = scrollTop;
});