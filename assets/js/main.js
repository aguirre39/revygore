import { initRevealOnScroll } from './modules/reveal-on-scroll.js';
import { initFaqAccordion } from './modules/faq-accordion.js';
import { initCarousel } from './modules/carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    initRevealOnScroll();
    initFaqAccordion();
    initCarousel();
});
