document.addEventListener('DOMContentLoaded', function() {
    const zoomableImages = document.querySelectorAll('.zoomable');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close');
  
    zoomableImages.forEach(img => {
      img.addEventListener('click', function() {
        lightbox.style.display = 'block';
        lightboxImg.src = this.src;
      });
    });
  
    lightbox.addEventListener('click', function(e) {
      if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
      }
    });
  
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        lightbox.style.display = 'none';
      });
    }
  });
  