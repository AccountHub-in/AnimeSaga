document.addEventListener('DOMContentLoaded', () => {

    // --- Weekly Schedule Tab-switching ---
    const scheduleTabs = document.querySelectorAll('.schedule-tab-btn');
    const scheduleContents = document.querySelectorAll('#schedule-tab-content > div[data-content]');

    scheduleTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetContentId = tab.dataset.tab;

            // Update tab button styles
            scheduleTabs.forEach(t => {
                t.classList.remove('border-yellow-400', 'text-yellow-400', 'bg-gray-800');
                t.classList.add('border-transparent', 'text-gray-400', 'hover:text-white', 'hover:bg-gray-800');
            });
            tab.classList.add('border-yellow-400', 'text-yellow-400', 'bg-gray-800');
            tab.classList.remove('border-transparent', 'text-gray-400', 'hover:text-white', 'hover:bg-gray-800');

            // Show/hide content panels
            scheduleContents.forEach(content => {
                if (content.dataset.content === targetContentId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // --- Sidebar "Most Viewed" Tab-switching ---
    const sidebarTabs = document.querySelectorAll('aside .tab-btn');
    const sidebarContents = document.querySelectorAll('aside #tab-content > div[data-content]');

    sidebarTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetContentId = tab.dataset.tab;

            // Update tab button styles
            sidebarTabs.forEach(t => {
                t.classList.remove('border-yellow-400', 'text-yellow-400');
                t.classList.add('border-transparent', 'text-gray-400', 'hover:text-white');
            });
            tab.classList.add('border-yellow-400', 'text-yellow-400');
            tab.classList.remove('border-transparent', 'text-gray-400', 'hover:text-white');

            // Show/hide content panels
            sidebarContents.forEach(content => {
                if (content.dataset.content === targetContentId) {
                    content.classList.remove('hidden');
                } else {
                    content.classList.add('hidden');
                }
            });
        });
    });

    // --- Mobile Menu Toggle ---
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // --- Sign-In Modal ---
    const signInBtn = document.getElementById('signInBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const signInModal = document.getElementById('signInModal');

    if (signInBtn && closeModalBtn && signInModal) {
        // Open modal
        signInBtn.addEventListener('click', () => {
            signInModal.classList.remove('hidden');
        });

        // Close modal with 'X' button
        closeModalBtn.addEventListener('click', () => {
            signInModal.classList.add('hidden');
        });

        // Close modal by clicking on the background overlay
        signInModal.addEventListener('click', (e) => {
            if (e.target === signInModal) {
                signInModal.classList.add('hidden');
            }
        });
    }

});