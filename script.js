// Dark Mode Toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Scroll reveal animations
const elements = document.querySelectorAll(".reveal, .card, .skill, .contact form");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Parallax effect
const layers = document.querySelectorAll(".layer");

window.addEventListener("mousemove", (e) => {
  let x = (e.clientX / window.innerWidth - 0.5) * 30;
  let y = (e.clientY / window.innerHeight - 0.5) * 30;
  layers.forEach((layer, i) => {
    const speed = (i + 1) * 10;
    layer.style.transform = `translate(${x / speed}px, ${y / speed}px)`;
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY * 0.2;
  layers.forEach((layer, i) => {
    layer.style.transform += ` translateY(${scrollY / (i + 2)}px)`;
  });
});
