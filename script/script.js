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
        modal.classList.add('show')
        modal.classList.add('fade')
        modal.classList.remove('hide')
    }
})

closeBtn.forEach(close => {
    close.onclick = () => {
        modal.classList.add('hide')
        modal.classList.remove('show')
        modal.classList.add('fade')
    }
})

// tabs
let tabcontents = document.querySelectorAll('.tabcontent')
let tabheader__items = document.querySelectorAll('.tabheader__items .tabheader__item')

function showTabs(n) {
    tabcontents.forEach(el => el.classList.add('hide'))

    tabcontents[n].classList.remove('hide')
    tabcontents[n].classList.add('show', 'fade')
}

showTabs(0)


tabheader__items.forEach((item, idx) => {
    item.onclick = () => {
        tabheader__items.forEach(el => el.classList.remove('tabheader__item_active'))

        item.classList.add('tabheader__item_active')

        showTabs(idx)
    }
})

// kkal
let gens = document.querySelectorAll('#gender .calculating__choose-item')
let inputs = document.querySelectorAll('.calculating__choose_medium input')
let actBtns = document.querySelectorAll('.calculating__choose_big [data-act]')
let resultView = document.querySelector('#result')

let userData = {
    gender: "woman",
}


gens.forEach(btn => {
    btn.onclick = () => {
        gens.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let g = btn.getAttribute('data-g')

        userData.gender = g

    }
})

inputs.forEach(inp => {
    inp.onkeyup = () => {
        let key = inp.id
        let val = inp.value

        userData[key] = val
    }
    
    
})


actBtns.forEach(btn => {
    btn.onclick = () => {
        actBtns.forEach(el => el.classList.remove('calculating__choose-item_active'))
        btn.classList.add('calculating__choose-item_active')

        let activeCount = btn.getAttribute('data-act')

        let { active, gender, weight, height, age } = userData

        active = activeCount

        if (gender === 'woman') {
            let res = 655.1 + 9.563 * weight + 1.85 * height - 4.676 * age;

            resultView.innerHTML = Math.round(res * active)
        } else {
            let res = 66.5 + 13.75 * weight + 5.003 * height - 6.775 * age

            resultView.innerHTML = Math.round(res * active)
        }
        
    }
})

// timer


let deadline = "2023-03-26 12:00"

function remainingDate(endTime) {
    let t = Date.parse(endTime) - Date.parse(new Date()),
        days = Math.floor((t / 1000) / 60 / 60 / 24),
        hours = Math.floor(((t / 1000) / 60 / 60) % 24),
        minutes = Math.floor(((t / 1000) / 60) % 60),
        seconds = Math.floor((t / 1000) % 60);

    return {
        t,
        days,
        hours,
        minutes,
        seconds
    }
}


function setTime(endTime, selector) {
    let t = document.querySelector(selector),
        days = t.querySelector('#days'),
        hours = t.querySelector('#hours'),
        minutes = t.querySelector('#minutes'),
        seconds = t.querySelector('#seconds'),
        updateTime = setInterval(showTime, 1000);

    function showTime() {
        let t = remainingDate(endTime)
        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds

        if (t.t <= 0) {
            clearInterval(updateTime)
        }
    }
}

setTime(deadline, '.timer')

// end of scroll

let body = document.querySelector('body')
body.onscroll = () =>{
    setTimeout(() => {
        modal.classList.add('show')
        modal.classList.add('fade')
     }, 5000);
}   


    // function scroll () {
    //     if ($().scrollTop() + window.innerHeight == $(document).height()) {
    //         modal.classList.add('show')
    //         modal.classList.add('fade')
    //         modal.classList.remove('hide');
    //     }

    // }
    // scroll()
// promotion inp



