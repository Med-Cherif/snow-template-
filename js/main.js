// Navbar Sticky Scroll
window.addEventListener(('scroll'), () => document.querySelector('header').classList.toggle('sticky', window.scrollY > 0))

// Animation Button
document.querySelector('.down').onclick = () => document.querySelector('.be_first').scrollIntoView()


