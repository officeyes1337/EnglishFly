const burgerMenu = document.querySelector('.burger-menu')
const linkMenu = document.querySelector('.link__header')

burgerMenu.addEventListener('click', function (e) {
    e.preventDefault()
    burgerMenu.classList.toggle('active')
    linkMenu.classList.toggle('active')
    document.body.classList.toggle('active')
})