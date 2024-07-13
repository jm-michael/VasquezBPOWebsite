
document.addEventListener("DOMContentLoaded", function() {
    var hash = window.location.hash.substring(1);

    var element = document.getElementById(hash);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    } 
});
