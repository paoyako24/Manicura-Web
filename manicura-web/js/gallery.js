// gallery.js
function openLightbox(imgEl) {
  const src = imgEl.src;
  const alt = imgEl.alt || '';
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const lbCaption = document.getElementById('lightbox-caption');

  lbImg.src = src;
  lbCaption.textContent = alt;
  lb.style.display = 'block';
}

// cerrar al hacer click en el modal
function closeLightbox() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.style.display = 'none';
}
