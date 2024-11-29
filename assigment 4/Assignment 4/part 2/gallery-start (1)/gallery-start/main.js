document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const overlay = document.querySelector('.overlay');
    const overlayImage = overlay.querySelector('img');
    
    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const src = event.target.src;
            overlayImage.src = src;
            overlay.classList.add('show');
        }
    });
    
    overlay.addEventListener('click', () => {
        overlay.classList.remove('show');
    });
});