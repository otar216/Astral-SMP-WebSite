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
                if (entry.target.classList.contains('scroll-reveal')) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.add('animate-in');
                }
                observer.unobserve(entry.target); // Trigger once
            }
        });
    }, observerOptions);

    // Parallax Effect for Hero Logo
    window.addEventListener('scroll', () => {
        const heroLogo = document.getElementById('heroBgLogo');
        if (heroLogo) {
            const scrollValue = window.scrollY;
            // Only animate if within reasonable range to save performance
            if (scrollValue < 1000) {
                // Parallax: Only move vertically and rotate.
                // Wrapper handles centering.
                heroLogo.style.transform = `translateY(${scrollValue * 0.4}px) rotate(${scrollValue * 0.05}deg)`;
                // Fade out as scroll down
                heroLogo.style.opacity = Math.max(0, 0.4 - (scrollValue / 800)); // Start from 0.4, fade faster
            }
        }
    });

    // Scroll Reveal Animation (Intersection Observer)
    const revealElements = document.querySelectorAll('.animate-in, .fade-trigger, .scroll-reveal');
    revealElements.forEach(el => observer.observe(el));

    console.log('Astral-SMP System Initialized');
});
