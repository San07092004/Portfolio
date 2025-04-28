// AOS init
AOS.init();

// Typed.js effect
var typed = new Typed("#typed", {
  strings: ["a Web Developer", "a Designer"],
  typeSpeed: 60,
  backSpeed: 30,
  backDelay: 2000,
  loop: true
});
AOS.init({
  duration: 1000,
  offset: 100,
  once: true,
});


// Dark/Light Mode toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = themeToggle.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.remove('bx-moon');
    icon.classList.add('bx-sun');
  } else {
    icon.classList.remove('bx-sun');
    icon.classList.add('bx-moon');
  }
});
