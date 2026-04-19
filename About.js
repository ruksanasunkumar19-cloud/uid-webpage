document.addEventListener("DOMContentLoaded", () => {
    const mainNav = document.querySelector(".main-nav");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            mainNav.style.background = "rgba(0, 0, 0, 0.9)";
            mainNav.style.padding = "15px 0";
        } else {
            mainNav.style.background = "rgba(0, 0, 0, 0.5)";
            mainNav.style.padding = "20px 0";
        }
    });
});