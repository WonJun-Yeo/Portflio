$(".UpToHeader").on("click", function () {
  $(window).scrollTop(0);
});
$("#ABOUT").on("click", function () {
  $(window).scrollTop(0);
});
$("#SKILL").on("click", function () {
  $(window).scrollTop(800);
});
$("#WORK").on("click", function () {
  $(window).scrollTop(1500);
});
$("#CONTACT").on("click", function () {
  $(window).scrollTop(2400);
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() < 600) {
    $("#section-notice").html("ABOUT");
    $("#section-notice").css("top", "12.5vh");
  } else if ($(window).scrollTop() >= 600 && $(window).scrollTop() < 1300) {
    $("#section-notice").html("SKILL");
    $("#section-notice").css("top", "35vh");
  } else if ($(window).scrollTop() >= 1300 && $(window).scrollTop() < 2000) {
    $("#section-notice").html("WORK");
    $("#section-notice").css("top", "57.5vh");
  } else {
    $("#section-notice").html("CONTACT");
    $("#section-notice").css("top", "80vh");
  }
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() > 100) {
    $(".UpToHeader").addClass("active");
    $(".header").addClass("active");
  } else if ($(window).scrollTop() < 100) {
    $(".UpToHeader").removeClass("active");
    $(".header").removeClass("active");
  }
});

$(".UpToHeader").hover(
  function () {
    $(this).html("Up To Head");
  },
  function () {
    $(this).html("W.J's Portfolio");
  }
);

$("#banner-link").on("click", function () {
  $("#player").fadeIn();
});

$("#player-close").on("click", function () {
  $("#player").fadeOut();
});

var playerHeader = document.querySelector(".player-ani-box");
var playerHeaderHTML = document.querySelector(".player-ani-box").innerHTML;

$("#banner-link").click(function () {
  playerHeader.innerHTML = "";
  for (let i = 0; i < playerHeaderHTML.length; i++) {
    setTimeout(function () {
      playerHeader.innerHTML = playerHeader.innerHTML + playerHeaderHTML[i];
    }, i * 50);
  }
});

var NowPicture = 1;

$("#slide-after-bt").click(function () {
  if (NowPicture == 1) {
    $("#slide-img-box").css("transform", "translateX(-25%)");
    $("#slide-desc-box").css("transform", "translateX(-25%)");
    $("#player-operater-state-bar").css("width", "50%");
    $("#play-time").html("1:54");
    NowPicture = 2;
  } else if (NowPicture == 2) {
    $("#slide-img-box").css("transform", "translateX(-50%)");
    $("#slide-desc-box").css("transform", "translateX(-50%)");
    $("#player-operater-state-bar").css("width", "75%");
    $("#play-time").html("2:51");
    NowPicture = 3;
  } else if (NowPicture == 3) {
    $("#slide-img-box").css("transform", "translateX(-75%)");
    $("#slide-desc-box").css("transform", "translateX(-75%)");
    $("#player-operater-state-bar").css("width", "100%");
    $("#play-time").html("3:48");
    NowPicture = 4;
  } else if (NowPicture == 4) {
    $("#slide-img-box").css("transform", "translateX(0)");
    $("#slide-desc-box").css("transform", "translateX(0)");
    $("#player-operater-state-bar").css("width", "25%");
    $("#play-time").html("0:57");
    NowPicture = 1;
  }
});

$("#slide-before-bt").click(function () {
  if (NowPicture == 1) {
    $("#slide-img-box").css("transform", "translateX(-75%)");
    $("#slide-desc-box").css("transform", "translateX(-75%)");
    $("#player-operater-state-bar").css("width", "100%");
    $("#play-time").html("3:48");
    NowPicture = 4;
  } else if (NowPicture == 2) {
    $("#slide-img-box").css("transform", "translateX(0)");
    $("#slide-desc-box").css("transform", "translateX(0)");
    $("#player-operater-state-bar").css("width", "25%");
    $("#play-time").html("0:57");
    NowPicture = 1;
  } else if (NowPicture == 3) {
    $("#slide-img-box").css("transform", "translateX(-25%)");
    $("#slide-desc-box").css("transform", "translateX(-25%)");
    $("#player-operater-state-bar").css("width", "50%");
    $("#play-time").html("1:54");
    NowPicture = 2;
  } else if (NowPicture == 4) {
    $("#slide-img-box").css("transform", "translateX(-50%)");
    $("#slide-desc-box").css("transform", "translateX(-50%)");
    $("#player-operater-state-bar").css("width", "75%");
    $("#play-time").html("2:51");
    NowPicture = 3;
  }
});

$("#slide-start-bt").click(function () {
  $("#slide-img-box").css("transform", "translateX(0)");
  $("#slide-desc-box").css("transform", "translateX(0)");
  $("#player-operater-state-bar").css("width", "90px");
  $("#play-time").html("0:57");
  NowPicture = 1;
});

$("#slide-end-bt").click(function () {
  $("#slide-img-box").css("transform", "translateX(-75%)");
  $("#slide-desc-box").css("transform", "translateX(-75%)");
  $("#player-operater-state-bar").css("width", "100%");
  $("#play-time").html("3:48");
  NowPicture = 4;
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  var y = (-1 / 200) * height + 6 / 2;
  var z = (-1 / 2000) * height + 11 / 10;
  $(".self-introduction").css("opacity", y);
  $(".self-introduction").css("transform", `scale(${z})`);
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  var y = (-1 / 200) * height + 650 / 100;
  var z = (-1 / 2000) * height + 145 / 100;
  $(".skill").css("opacity", y);
  $(".skill").css("transform", `scale(${z})`);
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  var y = (-1 / 200) * height + 1000 / 100;
  var z = (-1 / 2000) * height + 180 / 100;
  $(".banner").css("opacity", y);
  $(".banner").css("transform", `scale(${z})`);
});

$(window).scroll(function () {
  let height = $(window).scrollTop();
  var y = (-1 / 200) * height + 135 / 10;
  var z = (-1 / 2000) * height + 215 / 100;
  $(".footer").css("opacity", y);
  $(".footer").css("transform", `scale(${z})`);
});
