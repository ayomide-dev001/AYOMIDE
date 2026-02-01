// ✅ Close mobile menu after clicking any nav link
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menuToggle.checked) {
      menuToggle.checked = false;
    }
  });
});

// ✅ Active link highlight on scroll
const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navItems.forEach((a) => {
    a.classList.remove("active");
    if (a.getAttribute("href") === `#${current}`) {
      a.classList.add("active");
    }
  });
});

// ✅ Contact form validation message
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name === "" || email === "" || message === "") {
    e.preventDefault();
    formMessage.textContent = "⚠️ Please fill in all fields before submitting.";
    return;
  }

  formMessage.textContent = "✅ Message looks good! Sending...";
});
