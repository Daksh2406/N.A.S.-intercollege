document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Mobile Navigation Toggle ---
    const menuToggle = document.querySelector('.menu-toggle');
    const primaryMenu = document.getElementById('primary-menu');

    if (menuToggle && primaryMenu) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            primaryMenu.classList.toggle('active');
        });
    }

    // --- 2. Notices/Events Scroll-up Button ---
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const eventsScrollArea = document.querySelector('.events-column .scrollable-content');

    if (scrollUpBtn && eventsScrollArea) {
        
        // Function to handle the scroll
        const scrollToTop = () => {
            eventsScrollArea.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        };

        // Attach click listener
        scrollUpBtn.addEventListener('click', (e) => {
            e.preventDefault();
            scrollToTop();
        });

        // Optionally, hide the button when already at the top
        eventsScrollArea.addEventListener('scroll', () => {
            if (eventsScrollArea.scrollTop > 500) {
                scrollUpBtn.style.opacity = '1';
                scrollUpBtn.style.pointerEvents = 'auto';
            } else {
                scrollUpBtn.style.opacity = '0';
                scrollUpBtn.style.pointerEvents = 'none';
            }
        });
        
        // Initial state
        scrollUpBtn.style.opacity = '0';
        scrollUpBtn.style.pointerEvents = 'none';
    }

    // --- 3. Placeholder for Slider Logic (Advanced) ---
    // In a real application, this section would contain code to change the 'slider-img' source
    // and handle the arrow button clicks/automatic rotation.

    console.log("Professional website scripts initialized.");
});

    const icons = document.querySelectorAll('.icon-box');
    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.style.color = '#000';
      });
      icon.addEventListener('mouseleave', () => {
        icon.style.color = '';
      });
    });
