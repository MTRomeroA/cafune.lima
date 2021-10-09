var toggle = document.querySelector('#mobileToggleHam');
var menu = document.querySelector('.site-nav-content');
var links = document.querySelectorAll('.nav-link');

toggle.addEventListener('click', toggleMenu); 

function toggleMenu() {
    menu.classList.toggle('site-nav-content-open');
}   


/* eslint-env browser 
var myPath = document.querySelector('#path1');
var myPath2 = document.querySelector('#path2');
var length1 = myPath.getTotalLength();
var length2 = myPath2.getTotalLength();
console.log(length1, length2);  */  

