const menu = document.querySelector('.navigation_list')
const menuItem = document.querySelectorAll('.navigation_item')
const hamb = document.querySelector('.hamburger')

hamb.addEventListener('click', () => {
    hamb.classList.toggle('hamburger_active')
    menu.classList.toggle('navigation_active')
})
menuItem.forEach((item) => {
    item.addEventListener('click', () => {
        menu.classList.toggle('navigation_active')
        hamb.classList.toggle('hamburger_active')
    })
})