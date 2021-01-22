/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
  });
  
  
  sr.reveal('.header', {}); 
  sr.reveal('.intro-title', {}); 
  sr.reveal('.intro-description', {delay: 100}); 
  sr.reveal('.img', {delay: 100}); 
  sr.reveal('.intro-button', {delay: 200}); 
  sr.reveal('.features-section-title', {delay: 100}); 
  sr.reveal('.feature', {delay: 200}); 
  sr.reveal('.outro', {delay: 100}); 

// 
const hamburgerLink = document.getElementById('hamburger-link')
const mobileNav = document.getElementById('mobile-nav')
const container = document.getElementById('container')
const footer = document.getElementById('footer')

hamburgerLink.addEventListener('click', (e) => {
  e.preventDefault()
  const hamburgerIcon = document.getElementById('hamburger')
  const HAMBURGER_ICON_SRC = "images/icon-hamburger.svg"
  const CLOSE_ICON_SRC = "images/icon-close.svg"
  if (mobileNav.classList.contains('hidden')) {
    hamburgerIcon.src = CLOSE_ICON_SRC
    mobileNav.classList.remove('hidden')
    container.classList.add('hidden')
    footer.classList.add('hidden')
    document.getElementsByTagName('body')[0].style.overflowY = 'hidden'
  } else {
    hamburgerIcon.src = HAMBURGER_ICON_SRC
    mobileNav.classList.add('hidden')
    container.classList.remove('hidden')
    footer.classList.remove('hidden')
    document.getElementsByTagName('body')[0].style.overflowY = 'auto'
  }
})