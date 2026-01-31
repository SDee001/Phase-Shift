// Initialize Lucide Icons
lucide.createIcons();

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
        navbar.classList.add('glass-nav');
        navbar.classList.remove('py-4', 'md:py-6');
        navbar.classList.add('py-3', 'shadow-2xl');
    } else {
        navbar.classList.remove('glass-nav');
        navbar.classList.remove('py-3', 'shadow-2xl');
        navbar.classList.add('py-4', 'md:py-6');
    }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const mobileLinks = document.querySelectorAll('.mobile-link');

const toggleMenu = () => {
    mobileMenu.classList.toggle('active');
    const isActive = mobileMenu.classList.contains('active');
    
    // Update Lucide Icon
    menuIcon.setAttribute('data-lucide', isActive ? 'x' : 'menu');
    lucide.createIcons();
    
    // Prevent scrolling when menu is open
    document.body.style.overflow = isActive ? 'hidden' : 'auto';
};

menuToggle.addEventListener('click', toggleMenu);

// Close menu when a link is clicked
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuIcon.setAttribute('data-lucide', 'menu');
        lucide.createIcons();
        document.body.style.overflow = 'auto';
    });
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Automatically update the year in the footer
const yearSpan = document.getElementById('current-year');
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}
// Mobile-only membership popup
const mobilePopup = document.getElementById('mobile-popup');
const popupClose = document.getElementById('popup-close');

const isMobile = window.innerWidth <= 768;
const popupShown = sessionStorage.getItem('phaseShiftPopupShown');

if (isMobile && !popupShown) {
    setTimeout(() => {
        mobilePopup.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }, 1200);
}

popupClose.addEventListener('click', () => {
    mobilePopup.classList.add('hidden');
    document.body.style.overflow = 'auto';
    sessionStorage.setItem('phaseShiftPopupShown', 'true');
});

