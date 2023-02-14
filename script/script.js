let slides = document.querySelectorAll('.offer__slide')
let prev = document.querySelector('.offer__slider-prev')
let next = document.querySelector('.offer__slider-next')
let btns = document.querySelectorAll('[data-modal]')
let closeBtn = document.querySelectorAll('[data-close]')
let modal = document.querySelector('.modal')
let tab = document.querySelectorAll('.tabcontent')
let tabheader = document.querySelectorAll('.tabheader__item')
let slideIndex = 1
let tabNum = 1
let tabhead = 1

function showSlides(n) {
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    slides.forEach(slide => slide.classList.add('hide'))

    slides[slideIndex - 1].classList.remove('hide')
    slides[slideIndex - 1].classList.add('fade')
}
showSlides(slideIndex)

next.onclick = () => {
    slideIndex++
    showSlides(slideIndex)
}
prev.onclick = () => {
    slideIndex--
    showSlides(slideIndex)
}

btns.forEach(btn => {
    btn.onclick = () => {
        modal.classList.toggle('show')
    }
})

closeBtn.forEach(close => {
    close.onclick = () => {
        modal.classList.toggle('hide')
    }
})

function showTabs(tabNum) {

    tabheader.forEach(tabhead =>{
        tabhead.onclick = () => {
            tabhead.classList.remove('tabheader__item_active')
            
        }
        tabhead.onclick = () => {
            tabhead.classList.add('tabheader__item_active')  
        }
    })
    console.log(tabheader);
    console.log(tab);
    tab.forEach(tab => tab.classList.add('hide'))
    tab[tabNum - 1].classList.remove('hide')
    tab[tabNum - 1].classList.add('fade')
}

showTabs(tabNum)