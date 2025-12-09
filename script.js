// =========================
//  AUTO YEAR
// =========================
document.getElementById("year").textContent = new Date().getFullYear();


// =========================
//  SMOOTH SCROLL FOR NAVIGATION
// =========================
document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});


// =========================
//  TYPING ANIMATION FOR HEADINGS
// =========================
function typeEffect(element, speed = 100) {
  let text = element.textContent.trim();
  element.textContent = "";
  let i = 0;

  function typing() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}

// Apply typing effect to hero title
const heroTitle = document.querySelector(".hero-title");
if (heroTitle) typeEffect(heroTitle, 80);


// =========================
//  FADE-IN ON SCROLL ANIMATION
// =========================
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in-visible");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));


// =========================
//  GALLERY IMAGE HOVER EFFECT
// =========================
document.querySelectorAll(".gallery img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.style.transform = "scale(1.08)";
    img.style.transition = "0.4s ease";
    img.style.boxShadow = "0 10px 25px rgba(0,0,0,0.3)";
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "scale(1)";
    img.style.boxShadow = "none";
  });
});


// =========================
//  CONTACT FORM – MODERN UX
// =========================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value;
  let msg = document.getElementById("formMsg");

  msg.textContent = `✨ Thank you, ${name}! We will contact you shortly.`;
  msg.style.color = "#28a745";
  msg.style.fontWeight = "600";
  msg.style.opacity = "1";

  this.reset();

  setTimeout(() => {
    msg.style.opacity = "0";
  }, 3000);
});
