export function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const questionBtn = item.querySelector('.faq-question');
        if (!questionBtn) return;
        
        questionBtn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            
            // Fecha todos
            faqItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                const btn = otherItem.querySelector('.faq-question');
                if (btn) btn.setAttribute('aria-expanded', 'false');
            });
            
            // Abre se estava fechado
            if(!isActive) {
                item.classList.add('active');
                questionBtn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}
