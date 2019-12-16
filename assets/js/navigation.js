// Navbar and dropdowns
var toggle = document.getElementsByClassName('navbar-toggler')[0];
var collapse = document.getElementsByClassName('navbar-collapse')[0];

// Toggle if navbar menu is open or closed
function toggleMenu() {
    collapse.classList.toggle('collapse');
    collapse.classList.toggle('in');
}

toggle.addEventListener('click', toggleMenu, false);
