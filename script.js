const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// Mobile Menu Toggle
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// Navbar background on scroll
window.addEventListener("scroll", () => {
    const navbar = document.querySelector("header");

    if (window.scrollY > 50) {
        navbar.style.background = "#000";
    } else {
        navbar.style.background = "#111827";
    }
});
