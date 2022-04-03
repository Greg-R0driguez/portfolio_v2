//hamburger menu

function burgerMenu() {
    const burgerEl = document.querySelector('.burger')

    //toggle navigation
    burgerEl.addEventListener('click', () => {
        document.querySelector('.navbar-links').
        classList.toggle('nav-active')
        
        //animation links
        document.querySelectorAll('.navbar-links li').
        forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = 
                `navLinkFade 0.5s ease forwards ${index / 7 + .35}s`
            }
        })
        
        //hamburger menu animation
        burgerEl.classList.toggle('rotate')
    })
} 

burgerMenu()

//subtitle typing

const subtitle = "Software Developer"
const typeEffect = document.getElementById('typeEffect')
let i = 0

function displaySubtitle() {
    if(i < subtitle.length) {
        typeEffect.textContent += subtitle.charAt(i)
        i++
        setTimeout(displaySubtitle, 250)
    } 
}

displaySubtitle()








    

