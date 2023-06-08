document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      alert("Thank you for contacting me!");
      contactForm.reset();
    });
  });
  