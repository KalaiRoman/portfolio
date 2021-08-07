"use strict";

// // $(window).scroll(function() {
// //     console.log($(this).scrollTop());
// // })
// $(document).ready(function() {
//     $(window).scroll(function() {
//         let names = $("section-3-p-tag1");
//         var scroll = $(this).scrollTop();
//         if (scroll > 95) {
//             console.log("kalai");
//             $(names).css("Color", "red");
//         } else {
//             console.log("main")
//         }
//     });
// });
// $(document).ready(function() {
//     $(window).scroll(function() {
//         let nameds = $("section3-tag1");
//         var scroll = $(this).scrollTop();
//         if (scroll > 95) {
//             console.log("123");
//             // $(nameds).css("Color", "red");
//         } else {
//             console.log("456")
//         }
//     });
// });
// $(document).ready(function() {
//     $(window).scroll(function() {
//         let named = $("section3-tag2");
//         var scroll = $(this).scrollTop();
//         if (scroll > 195) {
//             console.log("789");
//             // $(named).css("Color", "red");
//         } else {
//             console.log("k10112")
//         }
//     });
// });
$(document).ready(function () {
  $(window).scroll(function () {
    var namesed = $(".currents");
    var scroll = $(this).scrollTop();
    console.log($(window).scrollTop());

    if (scroll > 1700) {
      console.log("kalai"); // $(namesed).show();

      $(namesed).css({
        "color": "blue",
        "width": "100px"
      });
      $(namesed).fadeIn();
    } else {
      // $(namesed).hide();
      $(namesed).fadeOut(2000000);
    }
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    var namesed = $(".currents1");
    var scroll = $(this).scrollTop();
    console.log($(window).scrollTop());

    if (scroll > 2500) {
      console.log("kalai"); // $(namesed).show();

      $(namesed).css("color", "green");
      $(namesed).fadeIn();
    } else {
      // $(namesed).hide();
      $(namesed).css("color", "black");
      $(namesed).fadeOut(2000000);
    }
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    var namesed = $(".currents2");
    var scroll = $(this).scrollTop();
    console.log($(window).scrollTop());

    if (scroll > 4000) {
      console.log("kalai"); // $(namesed).show();

      $(namesed).css("color", "yellow");
      $(namesed).fadeIn();
    } else {
      // $(namesed).hide();
      $(namesed).css("color", "black");
      $(namesed).fadeOut(2000000);
    }
  });
});
$(document).ready(function () {
  $(window).scroll(function () {
    var namesed = $(".currents3");
    var scroll = $(this).scrollTop();
    console.log($(window).scrollTop());

    if (scroll > 5000) {
      console.log("kalai"); // $(namesed).show();

      $(namesed).css("color", "blue");
      $(namesed).fadeIn();
    } else {
      // $(namesed).hide();
      $(namesed).css("color", "black");
      $(namesed).fadeOut(2000000);
    }
  });
}); // $(document).ready(function() {
//     $(window).scroll(function() {
//         let namesed = $("#current1");
//         var scroll = $(this).scrollTop();
//         console.log($(window).scrollTop());
//         if (scroll > 2500) {
//             // console.log("raja");
//             $(namesed).css("color", "blue");
//             $(namesed).fadeIn();
//         } else {
//             $(namesed).css("color", "black");
//             $(namesed).fadeOut(2000000);
//         }
//     });
//     $(document).ready(function() {
//         $(window).scroll(function() {
//             let namesed = $("#current2");
//             var scroll = $(this).scrollTop();
//             console.log($(window).scrollTop());
//             if (scroll > 4000) {
//                 // console.log("raja");
//                 $(namesed).css("color", "blue");
//                 $(namesed).fadeIn();
//             } else {
//                 $(namesed).css("color", "black");
//                 // $(namesed).hide();
//                 $(namesed).fadeOut(2000000);
//             }
//         });
//     });
//     $(document).ready(function() {
//         $(window).scroll(function() {
//             let namesed = $("#current3");
//             var scroll = $(this).scrollTop();
//             console.log($(window).scrollTop());
//             if (scroll > 4950) {
//                 // console.log("raja");
//                 $(namesed).css("color", "blue");
//                 // $(namesed).show();
//                 $(namesed).fadeIn();
//             } else {
//                 $(namesed).css("color", "black");
//                 $(namesed).fadeOut(2000000);
//             }
//         });
//     });

var scrollTop = $(".scrollTop");
$(window).scroll(function () {
  // declare variable
  var topPos = $(this).scrollTop();

  if (topPos > 150) {
    $(scrollTop).css("opacity", "1");
  } else {
    $(scrollTop).css("opacity", "0");
  }
});
$(scrollTop).click(function () {
  $('html, body').animate({
    scrollTop: 0,
    transition: 5
  }, 900);
  return true;
});