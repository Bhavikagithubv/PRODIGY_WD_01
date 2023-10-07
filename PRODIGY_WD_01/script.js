// script.js
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const scrolled = window.scrollY > 100; // Adjust this value as needed

    if (scrolled) {
        navbar.style.backgroundColor = "#555"; // Background color when scrolled
    } else {
        navbar.style.backgroundColor = "#333"; // Initial background color
    }
});

const menuItems = document.querySelectorAll(".navbar ul li a");

menuItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
        item.style.color = "#ff5733"; // Font color on hover
    });

    item.addEventListener("mouseleave", () => {
        item.style.color = "#fff"; // Initial font color
    });
});
