const menubtn = document.querySelector('.openbtn')
const menu = document.querySelector('.menuContainer')
const closebtn = document.querySelector('.close')




menubtn.addEventListener('click', () => {
    menu.classList.toggle('inposition')
})

closebtn.addEventListener('click', () => {
    menu.classList.remove('inposition')
})
