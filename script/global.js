AOS.init();

window.onscroll = function() { 
    scrollFunction() 
}; 

const openModalButtons = document.querySelectorAll('[data-modal-target]');
const overlay = document.getElementById('contact_modal-overlay')
const closeModalButtons = document.querySelectorAll('[data-close-button]')

function scrollFunction() { 
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {  
        document.querySelector('.navbar-container').classList.add("navbar-container__shrinked");
        document.querySelector('.navbar-logo').classList.add("navbar-logo__shrinked");
        document.querySelector('.navbar').classList.add("navbar__shrinked");
        document.querySelector('.gototop-image').classList.add("gototop-image__active");
    }  
    else { 
        document.querySelector('.navbar-container').classList.remove("navbar-container__shrinked");
        document.querySelector('.navbar-logo').classList.remove("navbar-logo__shrinked");
        document.querySelector('.navbar').classList.remove("navbar__shrinked");
        document.querySelector('.gototop-image').classList.remove("gototop-image__active");
    } 
} 

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = document.querySelector(button.dataset.modalTarget)
      openModal(modal)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.contact_modal.active');
    console.log(modals);
    modals.forEach(modal => {
      closeModal(modal)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.contact_modal.active')
      closeModal(modal)
    })
  })

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active')
    overlay.classList.remove('active')
}

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


document.addEventListener('wheel', function(event) {
    if (event.ctrlKey) {
        event.preventDefault();
    }
}, { passive: false });


document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '-' || event.key === '=')) {
        event.preventDefault();
    }
});
