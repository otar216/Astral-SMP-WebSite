/* Astral-SMP Main Script */

document.addEventListener('DOMContentLoaded', () => {
    // Navigation Scroll Effect
    const header = document.querySelector('.main-header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Intersection Observer for Fade-in Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    // Apply observer to elements with .fade-trigger class
    const fadeElements = document.querySelectorAll('.fade-trigger');
    fadeElements.forEach(el => observer.observe(el));

    console.log('Astral-SMP System Initialized');
});
