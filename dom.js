const navBar = document.getElementById('navBar');
const sidebar = document.querySelector('.sidebar');
const radio = document.getElementById("menu-btn");
console.log(radio.value);


let lastScrollTop = 0;

window.addEventListener('scroll', ()=>{
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navBar.style.top = "-3em";
        // sidebar.style.right = "-25%";
    } else {
        navBar.style.top = "0";
    }

    lastScrollTop = scrollTop;

    // if(radio) {
    //     console.log('checked');
    // }


});


