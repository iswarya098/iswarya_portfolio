document.addEventListener("DOMContentLoaded", function() {
    const menuBars = document.getElementById("menu-bars");
    const navbar = document.querySelector(".navbar");

    menuBars.addEventListener("click", () => {
        menuBars.classList.toggle("fa-times");
        navbar.classList.toggle("active");
    });
    // Example of adding a click event to toggle overlay visibility
document.getElementById('home-image1').addEventListener('click', function() {
    const overlay = document.getElementById('overlay');
    // Toggle the visibility of the overlay
    if (overlay.style.opacity === '1') {
        overlay.style.opacity = '0';
    } else {
        overlay.style.opacity = '1';
    }
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



