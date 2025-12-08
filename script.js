// Auto Year
document.getElementById("year").textContent = new Date().getFullYear();

// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let msg = document.getElementById("formMsg");

  msg.textContent = "Thank you " + name + "! Your message has been sent.";
  msg.style.color = "green";

  this.reset();

  setTimeout(() => (msg.textContent = ""), 3000);
});
