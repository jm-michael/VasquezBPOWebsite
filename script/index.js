function toggleNav(isShow) {
    var navLinks = document.getElementById('navbar-links');
    var burger = document.querySelector('.burger');
    if (isShow) {
        burger.classList.toggle('change');
        navLinks.classList.toggle('active');
    } else{
        burger.classList.remove('change');
        navLinks.classList.remove('active');
    }
    
}

// Get all the li elements
var navLinks = document.querySelectorAll('.navbar-link');

// // Function to hide all iframes
// function hideAllIframes() {
//     var iframes = document.querySelectorAll('iframe');
//     for (var i = 0; i < iframes.length; i++) {
//         iframes[i].classList.add('hidden');
//     }
// }

// // Function to show iframe
// function showIframe(iframeSrc) {
//     var iframe = document.querySelector('iframe[src="' + iframeSrc + '"]');
//     if (iframe) {
//         if (iframe.src.includes("careers.html")) {
//             iframe.src = "careers.html";//iframe.src; // This line forces the iframe to reload
//         }
//         iframe.classList.remove('hidden');
//     }
// }


// function removeSelected(){
//     for (var i = 0; i < navLinks.length; i++) {
//         navLinks[i].classList.remove('navbar-link__active');
//     }
// }

// // Add click event listener to each li
// for (var i = 0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', function(e) {
//         e.preventDefault();

//         var iframeSrc = this.querySelector('a').getAttribute('href');

//         removeSelected();

//         e.currentTarget.classList.add('navbar-link__active');
//         hideAllIframes();
//         showIframe(iframeSrc);
//         toggleNav(false);
//     });
// }