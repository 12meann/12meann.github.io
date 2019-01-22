// sticky header

window.onscroll = function() {
  myFunction();
};

var header = document.querySelector(".container");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// skills pie chart

$(function() {
  $(".chart").easyPieChart({
    scaleColor: false, //not working
    size: 180,
    barColor: "#ffc107",
    lineWidth: 15,
    trackColor: "#373737",
    lineCap: "circle",
    animate: 2000
  });
});

function newFunction() {
  return "black";
}

// Smooth Scrolling
$(".links a").on("click", function(event) {
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
