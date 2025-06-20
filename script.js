// script.js
    document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");
  forms.forEach(form => {
    form.addEventListener("submit", function(e) {
      e.preventDefault();

      let valid = true;
      const inputs = form.querySelectorAll("input, textarea");
      inputs.forEach(input => {
        if (!input.value.trim()) {
          valid = false;
          input.style.borderColor = "red";
        } else {
          input.style.borderColor = "#ccc";
        }
      });

      const feedback = form.querySelector("#feedback");
      if (valid) {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
        form.reset();
      } else {
        feedback.textContent = "Please fill in all required fields.";
        feedback.style.color = "red";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const newsletterForms = document.querySelectorAll(".newsletter-form");
  newsletterForms.forEach(form => {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const email = form.querySelector("input").value.trim();
      if (email) {
        alert("Thank you for subscribing to our newsletter!");
        form.reset();
      }
    });
  });
});