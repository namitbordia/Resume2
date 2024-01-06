document.addEventListener("DOMContentLoaded", function () {
    var nav = document.querySelector(".navbar");

    function scrollFunction() {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            nav.style.backgroundColor = "#7f0101"; // Change this to your desired color
        } else {
            nav.style.backgroundColor = '#333333'; // Change this to your default color
        }
    }

    // Event listener for scroll event
    window.addEventListener("scroll", scrollFunction);
})
function toggleMenu() {
    var mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("show");
  }