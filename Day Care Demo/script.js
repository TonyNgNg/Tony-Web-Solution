// Simple client-side contact form handler
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contact-form");
  if(form) {
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      document.getElementById("form-message").textContent = 
        "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
    });
  }
});