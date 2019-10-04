// sticky header

window.onscroll = function() {
  stickyHeader();
};

var header = document.querySelector(".header");
var sticky = header.offsetTop;

function stickyHeader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// function newFunction() {
//   return "black";
// }

// Smooth Scrolling
$(".links a, #scroll").on("click", function(event) {
  if (this.hash !== "") {
    event.preventDefault();

    const hash = this.hash;

    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top
      },
      800,
      function() {
        window.location.hash = hash;
      }
    );
  }
});

// hamburger menu

$(document).ready(function() {
  $(".hamburger").click(function() {
    $(".links").toggleClass("active");
  });
});

// click anywhere to close hamburger menu

$(document).on("click", function(e) {
  if (
    $(e.target).closest(".links").length == 0 &&
    $(".links").hasClass("active") &&
    $(e.target).closest(".hamburger").length == 0
  ) {
    $(".links").toggleClass("active");
  }
});

//auto expand textarea
function adjust_textarea(h) {
  h.style.height = "70px";
  h.style.height = h.scrollHeight + "px";
  h.style.maxHeight = "400px";
}
