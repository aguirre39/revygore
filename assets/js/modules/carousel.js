export function initCarousel() {
    const track = document.getElementById('gallery-track');
    const btnPrev = document.querySelector('.carousel-btn.prev');
    const btnNext = document.querySelector('.carousel-btn.next');

    if(track && btnPrev && btnNext) {
        const scrollAmount = () => {
            const slide = track.querySelector('.carousel-slide');
            if(!slide) return 0;
            return slide.offsetWidth + 24; 
        };

        btnNext.addEventListener('click', () => {
            track.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
        });

        btnPrev.addEventListener('click', () => {
            track.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
        });
    }
}
