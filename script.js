document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed(".text", {
        strings: ["FullStack Web Developer", "Web Designer", "Frontend Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
});