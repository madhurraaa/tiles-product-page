// navbar
const toggleButton = document.getElementsByClassName("toggle-btn")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

// for the product details
$(document).ready(function () {
  $(".imgStyle").on({
    click: function () {
      var mainImg = "";
      mainImg += $(this).attr("src");
      $(this).css({
        cursor: "pointer",
      });
      $("#mainImage").attr("src", mainImg);
    },
    mouseout: function () {
      $(this).css({
        cursor: "pointer",
      });
    }
  });
});

// carousel
$(".owl-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 1500,
  stagePadding: 30,
  margin: 10,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 4
    }
  }
});
