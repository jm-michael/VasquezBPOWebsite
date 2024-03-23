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

// Function to hide all iframes
function hideAllIframes() {
    var iframes = document.querySelectorAll('iframe');
    for (var i = 0; i < iframes.length; i++) {
        iframes[i].classList.add('hidden');
    }
}

// Function to show iframe
function showIframe(iframeSrc) {
    var iframe = document.querySelector('iframe[src="' + iframeSrc + '"]');
    if (iframe) {
        iframe.classList.remove('hidden');
    }
}

function removeSelected(){
    for (var i = 0; i < navLinks.length; i++) {
        navLinks[i].classList.remove('navbar-link__active');
    }
}

// Add click event listener to each li
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(e) {
        e.preventDefault();
        // var link = this.querySelector('a');
        var iframeSrc = this.querySelector('a').getAttribute('href');
        // if (link.textContent == "CAREERS") {
        //     iframeSrc = "careers.html"
        // }
        // if (link.textContent == "ABOUT US") {
        //     iframeSrc = "about.html"
        // }
        // if (link.textContent == "SERVICES") {
        //     iframeSrc = "services.html"
        // }
        // if (link.textContent == "INDUSTRIES") {
        //     iframeSrc = "industries.html"
        // }
        // if (link.textContent == "THE TEAM") {
        //     iframeSrc = "team.html"
        // }
        // console.log(link.textContent);
        // var iframeSrc = this.querySelector('a').getAttribute('href');
        removeSelected();

        e.currentTarget.classList.add('navbar-link__active');
        hideAllIframes();
        showIframe(iframeSrc);
        toggleNav(false);
    });
}
