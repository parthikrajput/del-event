var swiper = new Swiper(".swiper-container", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  spaceBetween: 30,
  centeredSlides: true,
  slidesPerView: 1,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".menu-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      document.querySelector(".mobile-menu").classList.add("show");
    });
  });

  document.querySelectorAll(".close-icon").forEach(function (icon) {
    icon.addEventListener("click", function () {
      document.querySelector(".mobile-menu").classList.remove("show");
    });
  });
});

window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 130);
});

window.addEventListener("scroll", function () {
  var backToTopButton = document.getElementById("back-to-top");

  if (window.scrollY > 100) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

document.getElementById("back-to-top").addEventListener("click", function () {
  var scrollToTop = function () {
    var currentPosition = window.scrollY;
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition - 20);
      setTimeout(scrollToTop, 5);
    }
  };

  scrollToTop();

  return false;
});
