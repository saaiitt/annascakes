const hamburger = document.querySelectorAll('.hamburger');
const burger = document.querySelectorAll('.burger');

const hamburgerSideBar = document.querySelector('.hamburger-sidebar');

hamburger.forEach(toggler => {
    toggler.addEventListener('click', () => {
        burger.forEach(el => {
            el.classList.toggle('open');
        })
        hamburgerSideBar.classList.toggle('display');
    });
});