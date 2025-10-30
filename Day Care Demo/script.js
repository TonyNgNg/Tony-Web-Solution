// Simple client-side contact form handler
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  if(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("form-message").textContent = 
        "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
// ✅ Mobile navigation toggle
(function(){
  const btn = document.getElementById('menu-btn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
  });

  document.addEventListener('click', (e) => {
    const navEl = document.querySelector('nav');
    if (!navEl) return;
    if (document.body.classList.contains('nav-open')) {
      if (!navEl.contains(e.target) && e.target !== btn) {
        document.body.classList.remove('nav-open');
      }
    }
  });

  document.querySelectorAll('nav ul li a').forEach(a => {
    a.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
    });
  }
});
