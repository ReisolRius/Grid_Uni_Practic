let but = document.querySelector('#menu_button')
let menu = document.querySelector('#header_menu')

but.addEventListener('click', hiMenu, false)

function hiMenu() {
    menu.classList.toggle('header_height');
}