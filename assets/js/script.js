// Improved navbar functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle fix
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', function() {
            navbarCollapse.classList.toggle('show');
        });
        
        // Close menu when clicking on a nav link (for mobile)
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (window.innerWidth < 992) { // Only for mobile
                    navbarCollapse.classList.remove('show');
                }
            });
        });
    }
    
    // Navbar background change on scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'shadow');
        } else {
            navbar.classList.remove('bg-dark', 'shadow');
        }
    });
});
