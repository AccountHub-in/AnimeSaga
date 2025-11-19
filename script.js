document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('header');
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('#tab-content > div');
    const signInModal = document.getElementById('signInModal');
    const signInBtn = document.getElementById('signInBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    
    // --- Original Mobile Menu Toggle ---
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    // --- Original Most Viewed Tabs ---
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            // Update button styles
            tabButtons.forEach(btn => {
                btn.classList.remove('border-yellow-400', 'text-yellow-400');
                btn.classList.add('border-transparent', 'text-gray-400');
            });
            button.classList.add('border-yellow-400', 'text-yellow-400');
            button.classList.remove('border-transparent', 'text-gray-400');

            // Show/hide content
            tabContents.forEach(content => {
                if (content.dataset.content === tab) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // --- UPDATED Sign In Modal Logic (with animations) ---
    signInBtn.addEventListener('click', (e) => {
        e.preventDefault();
        signInModal.classList.remove('hidden');
    });
    
    const closeModal = () => {
        // Add closing animation class
        signInModal.classList.add('is-closing');
        
        // Wait for animation to finish, then hide
        signInModal.addEventListener('transitionend', () => {
            signInModal.classList.add('hidden');
            signInModal.classList.remove('is-closing');
        }, { once: true }); // 'once: true' removes the listener after it runs
    };

    closeModalBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    signInModal.addEventListener('click', (event) => {
        if (event.target === signInModal) {
            closeModal();
        }
    });

    // --- NEW: Header Scroll Effect ---
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // --- NEW: Scroll-to-Top Button ---
    // 1. Create the button
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(scrollToTopBtn);

    // 2. Add click listener
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 3. Show/hide button on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('is-visible');
        } else {
            scrollToTopBtn.classList.remove('is-visible');
        }
    });

    // --- NEW: Section Fade-in-on-Scroll ---
    const sectionsToFade = document.querySelectorAll('#recently-updated, #recently-added');

    // Add the class for CSS targeting
    sectionsToFade.forEach(section => section.classList.add('fade-in-section'));

    const observerOptions = {
        root: null, // observes intersections relative to the viewport
        rootMargin: '0px',
        threshold: 0.1 // 10% of the element must be visible
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing once it's visible
            }
        });
    };

    const intersectionObserver = new IntersectionObserver(observerCallback, observerOptions);

    sectionsToFade.forEach(section => {
        intersectionObserver.observe(section);
    });

});