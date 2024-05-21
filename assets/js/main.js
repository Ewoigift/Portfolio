/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form')
contactName = document.getElementById('contact-name')
contactEmail = document.getElementById('contact-email')
contactProject = document.getElementById('contact-project')
contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    //check if the field has a value
    if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
        //add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'Fill all the input fields 📩'
    } else {
        //serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_rbej0oh', 'template_px6h5nk', '#contact-form', 'qHHOkAkOVmK-Cto1Y')
            .then(() => {

                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent ✅'

                setTimeout(() => {
                    contactMessage.textContent = ''
                }, 5000)
            }, (error) => {
                alert('OOPS! SOMETHING WENT WRONG...', error)
            })

        //to clear the input field
        contactName.value = ''
        contactEmail.value = ''
        contactProject.value = ''

    }

}
contactForm.addEventListener('submit', sendEmail)




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
    const scrollUp = document.getElementById('scroll-up')
        // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scrollup class
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') :
        scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
    const header = document.getElementById('header')
        // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('bg-header') :
        header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.projects__container`)
sr.reveal(`.home__info div`, { delay: 600, origin: 'bottom', interval: 100 })
sr.reveal(`.skills__content:nth-child(1), .contact__content:nth-child(1)`, { origin: 'left' })
sr.reveal(`.skills__content:nth-child(2), .contact__content:nth-child(2)`, { origin: 'right' })
sr.reveal(`.qualification__content, .services__card`, { interval: 100 })