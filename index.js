var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
const openMenu = document.getElementById('openMenu');
const closeMenu = document.getElementById('closeMenu');
const navMenu = document.getElementById('navMenu');

openMenu.addEventListener('click', () => {
  navMenu.classList.add('active');
});
closeMenu.addEventListener('click', () => {
  navMenu.classList.remove('active');
});
const navLinks = document.querySelectorAll('#navMenu a');
navLinks.forEach(link => {
  link.addEventListener('click', () =>{
    navMenu.classList.remove('active');
  })
})

function goHome() {

  window.location.href = 'index.html';
  }
