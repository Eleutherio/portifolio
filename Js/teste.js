window.addEventListener("scroll", function() {
    if (window.pageYOffset > 5) {
        document.querySelector(".header").classList.add("active");
        document.querySelectorAll(".nav__links").forEach(function(el) {
            el.style.color = "white";
          });

    } else {
        document.querySelector(".header").classList.remove("active");
        document.querySelectorAll(".nav__links").forEach(function(el) {
            el.style.color = "";
          });
    }
});
