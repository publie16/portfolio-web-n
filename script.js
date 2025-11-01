// script.js
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  
  if (!name || !email || !subject || !message) {
    document.getElementById("formMessage").textContent = "Please fill in all fields.";
    document.getElementById("formMessage").classList.add("text-red-500");
    return;
  }

  document.getElementById("formMessage").textContent = "Message sent successfully!";
  document.getElementById("formMessage").classList.remove("text-red-500");
  document.getElementById("formMessage").classList.add("text-green-600");

  // You can integrate EmailJS or Formspree here.
});
