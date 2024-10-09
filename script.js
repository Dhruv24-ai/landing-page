// Simple script if you want to add interactivity, like scrolling or dynamic content later.
// For now, we don't need any JavaScript for this static landing page.
// Example: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  