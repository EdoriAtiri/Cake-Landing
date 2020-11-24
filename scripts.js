const menuIcon = document.getElementById('hamburger');
const navbar = document.getElementById('navbar');
const nav = document.getElementById('nav-bar');
const links = document.querySelectorAll('.nav-link');

function change() {
  navbar.classList.toggle('change');
  nav.classList.toggle('slide');
}

function gotoLink() {
  if (navbar.classList.contains('change') && nav.classList.contains('slide')) {
    navbar.classList.remove('change');
    nav.classList.remove('slide');
  }
}

menuIcon.addEventListener('click', change);

links.forEach((link) => {
  link.addEventListener('click', gotoLink);
});
