//Get the button:
mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}



// Responsive
const navMobileBtn = document.querySelector('.js-mobile-btn')
const mobileMenu = document.querySelector('.js-mobile-menu')
var mobileOverlay = document.querySelector('.mobile-menu-overlay')

navMobileBtn.onclick=function(){
    mobileMenu.style.transform="scaleY(1)";
    mobileOverlay.style.display="block";
}

mobileOverlay.onclick=function(){
    mobileMenu.style.transform="scaleY(0)";
    mobileOverlay.style.display="none";
}