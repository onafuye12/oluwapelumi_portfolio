// Prevent other scripts from closing the menu
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    // Proper mobile toggle
    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });
    
    // Close only when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInside = navbar.contains(event.target);
        if (!isClickInside && window.innerWidth < 992) {
            navbarCollapse.classList.remove('show');
        }
    });
    
   
    // Replace your current scroll event with this
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        // Always keep bg-dark, only toggle shadow
        navbar.classList.add('bg-dark');
        if (window.scrollY > 50) {
            navbar.classList.add('shadow');
        } else {
            navbar.classList.remove('shadow');
        }
    });
});
