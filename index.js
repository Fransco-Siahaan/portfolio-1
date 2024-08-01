// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
})

// HeaderFixed

onscroll = function(){
    const header = document.querySelector('header');
    const navFixed = header.offsetTop;
    
    if(pageYOffset > navFixed){
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
}