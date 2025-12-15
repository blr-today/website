// Fix for mobile navigation - keep menu open on tap
(function() {
    'use strict';

    // Only run on mobile screens
    function isMobile() {
        return window.innerWidth <= 640; // 40rem at 16px base
    }

    let menuOpen = false;

    function setupMobileNav() {
        if (!isMobile()) return;

        const nav = document.querySelector('nav ul:first-child');
        if (!nav) return;

        const firstLi = nav.querySelector('li:first-child');
        if (!firstLi) return;

        // Toggle menu on click
        firstLi.addEventListener('click', function(e) {
            menuOpen = !menuOpen;
            nav.classList.toggle('mobile-menu-open', menuOpen);
            e.stopPropagation();
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (menuOpen && !nav.contains(e.target)) {
                menuOpen = false;
                nav.classList.remove('mobile-menu-open');
            }
        });

        // Close menu when clicking a link
        const links = nav.querySelectorAll('li:not(:first-child) a');
        links.forEach(link => {
            link.addEventListener('click', function() {
                menuOpen = false;
                nav.classList.remove('mobile-menu-open');
            });
        });
    }

    // Run on load and resize
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', setupMobileNav);
    } else {
        setupMobileNav();
    }
})();
