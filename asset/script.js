

document.addEventListener('DOMContentLoaded', function () {
  // Insert current year
  const y = new Date().getFullYear();
  document.getElementById('year') && (document.getElementById('year').textContent = y);
  document.getElementById('year2') && (document.getElementById('year2').textContent = y);

  // Simple lightbox for links with class .lightbox-link
  document.querySelectorAll('.lightbox-link').forEach(link => {
    link.addEventListener('click', function(e){
      e.preventDefault();
      const src = this.href;
      const overlay = document.createElement('div');
      overlay.className = 'lightbox-overlay';
      const img = document.createElement('img');
      img.src = src;
      overlay.appendChild(img);
      document.body.appendChild(overlay);
      overlay.addEventListener('click', () => overlay.remove());
      document.addEventListener('keydown', function esc(e) {
        if (e.key === 'Escape') { overlay.remove(); document.removeEventListener('keydown', esc); }
      });
    });
  });

  // Bootstrap form validation (used in recipes / contact)
  (function () {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // Demo handling: Show confirmation message but prevent actual submit
          event.preventDefault();
          if (form.id === 'recipeForm') {
            document.getElementById('submitMsg').style.display = 'inline';
            form.reset();
          } else if (form.id === 'contactForm') {
            document.getElementById('contactMsg').style.display = 'inline';
            form.reset();
          }
        }
        form.classList.add('was-validated');
      }, false)
    })
  })();
});
