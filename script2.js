document.addEventListener("DOMContentLoaded", function() {
    const menuBars = document.getElementById("menu-bars");
    const navbar = document.querySelector(".navbar");

    menuBars.addEventListener("click", () => {
        menuBars.classList.toggle("fa-times");
        navbar.classList.toggle("active");
    });

    window.onscroll = () => {
        menuBars.classList.remove("fa-times");
        navbar.classList.remove("active");
    };

    document.querySelectorAll(".navbar a").forEach(link => {
        link.addEventListener("click", () => {
            menuBars.classList.remove("fa-times");
            navbar.classList.remove("active");
        });
    });
});



