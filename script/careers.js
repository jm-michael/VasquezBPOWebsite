//click apply now event on right card
document.addEventListener("click", function(event) {

    localStorage.setItem('data',"");

    if (event.target.classList.contains("6th-Accounting")) {
    localStorage.setItem('data',"Accounting");
    } 

    else if (event.target.classList.contains("6th-Audit")) {
        localStorage.setItem('data',"Audit");
    } 
    
    else if (event.target.classList.contains("6th-ITAudit")) {
        localStorage.setItem('data',"IT AUDIT");
    } 
    
    else if (event.target.classList.contains("6th-Tax")) {
        localStorage.setItem('data',"TAX");
    } 
    
    else if (event.target.classList.contains("6th-View-All")){
        localStorage.setItem('data',"All");
    }

    if (localStorage.getItem("data")) {
        window.location.href = "careers-job-board.html"
    }
});

let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides .slide');
    const bullets = document.querySelectorAll('.bullet');

    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;

    bullets.forEach((bullet, i) => {
        bullet.classList.remove('active');
        if (i === currentIndex) {
            bullet.classList.add('active');
        }
    });
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index);
}

// Initialize the first slide and bullet
showSlide(currentIndex);