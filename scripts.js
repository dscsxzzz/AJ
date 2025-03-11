// scripts.js

window.addEventListener('scroll', function() {
    let hero = document.querySelector('.hero');
    let scrollPosition = window.scrollY;
    
    // Apply a subtle transform for the parallax effect
    hero.style.backgroundPosition = 'center ' + (scrollPosition * 0.5) + 'px';
  });
  
// Wait for the page to fully load
window.addEventListener('load', () => {
    // Hide the loader after the page has loaded
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  });

  
  function toggleMenu() {
    const navLinks = document.getElementById("nav-links");
    const hamburger = document.getElementById("hamburger-icon");
  
    // Toggle the class to open/close the menu
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  }
  
  // Dynamic Counter (Incrementing numbers)
  const counters = document.querySelectorAll('.count');
  
  const incrementCounters = () => {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-count');
      let count = 0;
      const increment = target / 100;
  
      const interval = setInterval(() => {
        count += increment;
        if (count >= target) {
          count = target;
          clearInterval(interval);
        }
        counter.innerText = Math.floor(count);
      }, 10);
    });
  };
  
  // Trigger the counters when the section comes into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        incrementCounters();
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(document.querySelector('#experience'));
  