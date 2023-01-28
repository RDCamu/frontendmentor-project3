const menubtn = document.querySelector('.openbtn')
const menu = document.querySelector('.primary-navigation')
const menuimg = document.getElementById("menuimg")
const backdrop = document.querySelector('.backdrop')



menubtn.addEventListener('click', () => {
    menu.classList.toggle('inposition')

    if (menu.classList.contains('inposition')) {
        menuimg.setAttribute("src","./assets/images/icon-menu-close.svg")
        backdrop.classList.add('visible')
    } else {
        menuimg.setAttribute("src", "./assets/images/icon-menu.svg")
        backdrop.classList.remove('visible')
    }


})


