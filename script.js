let hamburger = document.querySelector('.navbar .hamburger');
let mainContent = document.querySelector('.main-content');

hamburger.addEventListener('click', function () {
    let nav = document.querySelector('#nav-content');
    nav.classList.toggle('inactive');
    mainContent.classList.toggle('inactive');
})

let background = document.querySelector('.header');
let callToAction = document.querySelector('.cta');
setTimeout(function () {
    background.classList.remove('land');
}, 1000);

setTimeout(function () {
    callToAction.classList.remove('fadein')
}, 500)

let actualPage = document.location.hash;


function activate(selectedGroup) {
    let navItems = document.querySelectorAll(selectedGroup)
    for (let index = 0; index < navItems.length; index++) {
        const navItem = navItems[index];
        navItem.addEventListener('click', function () {
            for (let i = 0; i < navItems.length; i++) {
                const navItem2 = navItems[i];
                if (navItem != navItem2)
                    navItem2.classList.remove('active')
            }
            navItem.classList.toggle('active')
        })
    }
}

activate('.nav-item');
activate('.card');
activate('.coin')


window.onhashchange = fadeLand

if (actualPage === "#solutions") {
    fadeLand();
}