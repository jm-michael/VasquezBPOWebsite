function toggleNav() {
    var navLinks = document.getElementById('navbar-links');
    var burger = document.querySelector('.burger');
    burger.classList.toggle('change');
    navLinks.classList.toggle('active');
}
