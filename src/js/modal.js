(() => {
    const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    };

    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
    
    function toggleModal() {
        refs.modal.classList.toggle('is-hidden');
  }
})();


















// (() => {
//     const mobileMenu = document.querySelector('.js-menu-container');
//     const openMenuBtn = document.querySelector('.js-open-menu');
//     const closeMenuBtn = document.querySelector('.js-close-menu');
//     const mobileMenuLinks = document.querySelectorAll('.anchor-link');
  
//     const toggleMenu = () => {
//       const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//       openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//       mobileMenu.classList.toggle('is-open');
//     };
  
//     openMenuBtn.addEventListener('click', toggleMenu);
//     closeMenuBtn.addEventListener('click', toggleMenu);
  
//     mobileMenuLinks.forEach(link => {
//       link.addEventListener('click', event => {
//         event.preventDefault();
//         const targetId = link.getAttribute('href').substring(1);
//         const targetSection = document.getElementById(targetId);
        
//         if (targetSection) {
//           toggleMenu(); // Закрити меню
//           targetSection.scrollIntoView({ behavior: 'smooth' }); // Прокрутити до секції
//         }
//       });
//     });
  
//     window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//       if (!e.matches) return;
//       mobileMenu.classList.remove('is-open');
//       openMenuBtn.setAttribute('aria-expanded', false);
//     });
//   })();