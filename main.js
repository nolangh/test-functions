/* ------------------- document.querySelector('.menu-btn') selects the class menu-btn  ------------------ */
const menuBtn = document.querySelector('.menu-btn');
const navCard = document.querySelector('.nav-card')
    /* ------------ This sets the class menuOpen and sets it to false ----------- */
let menuOpen = false;
/* ------------------- This adds event listener to menuBtn ------------------ */
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        /* --------------- This added a class to menuBtn if it is open -------------- */
        menuBtn.classList.add('open');
        navCard.classList.add('open');
        menuOpen = true;
        /* ------------- this removes class open from menuBtn if closed ------------- */
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
        navCard.classList.remove('open');
    }
});