$('.hamberger').on('click', function(){
  $('.hamberger-list').slideToggle();
})

var AboutOffset = $(".self-introduction").offset();
var SkillOffset = $(".skill").offset();
var BannerOffset = $(".banner").offset();
var FooterOffset = $(".footer").offset();

$(".UpToHeader").on("click", function () {
  $(window).scrollTop($(".header").scrollTop());
});

$("#ham-ABOUT").on("click", function () {
  $(window).scrollTop($(".header").scrollTop());
});

$("#ABOUT").on("click", function () {
  $("html").animate({ scrollTop: AboutOffset.top }, 50);
});

$("#SKILL").on("click", function () {
  $("html").animate({ scrollTop: SkillOffset.top }, 50);
});

$("#ham-SKILL").on("click", function () {
  $("html").animate({ scrollTop: SkillOffset.top }, 50);
});

$("#WORK").on("click", function () {
  $("html").animate({ scrollTop: BannerOffset.top }, 50);
});

$("#ham-WORK").on("click", function () {
  $("html").animate({ scrollTop: BannerOffset.top }, 50);
});


$("#CONTACT").on("click", function () {
  $("html").animate({ scrollTop: FooterOffset.top }, 50);
});

$("#ham-CONTACT").on("click", function () {
  $("html").animate({ scrollTop: FooterOffset.top }, 50);
});

$(window).on("scroll", function () {
  if ($(window).scrollTop() < $(".skill").offset().top) {
    $("#section-notice").html("ABOUT");
    $("#section-notice").css("top", "12.5vh");
  } else if ($(window).scrollTop() >= $(".skill").offset().top && $(window).scrollTop() < $(".banner").offset().top) {
    $("#section-notice").html("SKILL");
    $("#section-notice").css("top", "35vh");
  } else if ($(window).scrollTop() >= $(".banner").offset().top && $(window).scrollTop() < $(".footer").offset().top) {
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
    $(".hamberger-list").addClass("active");
  } else if ($(window).scrollTop() < 100) {
    $(".UpToHeader").removeClass("active");
    $(".header").removeClass("active");
    $(".hamberger-list").removeClass("active");
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
  var WinWidth = $(window).width();
  if (WinWidth < 1440) {
    $('.play-bt-alert').fadeIn();
  } else {
    $("#player").fadeIn();
  }
});

$('.play-bt-alert-desc-close').on('click', function(){
  $('.play-bt-alert').fadeOut();
})

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
    $(".operater-play-bt").attr("href", "");
    $(".operater-play-bt").attr("href", "./work/WJcoffee/index_main.html");
    NowPicture = 2;
  } else if (NowPicture == 2) {
    $("#slide-img-box").css("transform", "translateX(-50%)");
    $("#slide-desc-box").css("transform", "translateX(-50%)");
    $("#player-operater-state-bar").css("width", "75%");
    $("#play-time").html("2:51");
    $(".operater-play-bt").attr("href", "");
    $(".operater-play-bt").attr("href", "./work/blizzard/blizzard.html");
    NowPicture = 3;
  } else if (NowPicture == 3) {
    $("#slide-img-box").css("transform", "translateX(-75%)");
    $("#slide-desc-box").css("transform", "translateX(-75%)");
    $("#player-operater-state-bar").css("width", "100%");
    $("#play-time").html("3:48");
    $(".operater-play-bt").attr("href", "");
    NowPicture = 4;
  } else if (NowPicture == 4) {
    $("#slide-img-box").css("transform", "translateX(0)");
    $("#slide-desc-box").css("transform", "translateX(0)");
    $("#player-operater-state-bar").css("width", "25%");
    $("#play-time").html("0:57");
    $(".operater-play-bt").attr("href", "");
    $(".operater-play-bt").attr("href", "./work/IKEAKOREA/index.html");
    NowPicture = 1;
  }
});

$("#slide-before-bt").click(function () {
  if (NowPicture == 1) {
    $("#slide-img-box").css("transform", "translateX(-75%)");
    $("#slide-desc-box").css("transform", "translateX(-75%)");
    $("#player-operater-state-bar").css("width", "100%");
    $("#play-time").html("3:48");
    $(".operater-play-bt").attr("href", "");
    NowPicture = 4;
  } else if (NowPicture == 2) {
    $("#slide-img-box").css("transform", "translateX(0)");
    $("#slide-desc-box").css("transform", "translateX(0)");
    $("#player-operater-state-bar").css("width", "25%");
    $("#play-time").html("0:57");
    $(".operater-play-bt").attr("href", "");
    $(".operater-play-bt").attr("href", "./work/IKEAKOREA/index.html");
    NowPicture = 1;
  } else if (NowPicture == 3) {
    $("#slide-img-box").css("transform", "translateX(-25%)");
    $("#slide-desc-box").css("transform", "translateX(-25%)");
    $("#player-operater-state-bar").css("width", "50%");
    $("#play-time").html("1:54");
    $(".operater-play-bt").attr("href", "");
    $(".operater-play-bt").attr("href", "./work/WJcoffee/index_main.html");
    NowPicture = 2;
  } else if (NowPicture == 4) {
    $("#slide-img-box").css("transform", "translateX(-50%)");
    $("#slide-desc-box").css("transform", "translateX(-50%)");
    $("#player-operater-state-bar").css("width", "75%");
    $("#play-time").html("2:51");
    $(".operater-play-bt").attr("href", "");
    $(".operater-play-bt").attr("href", "./work/blizzard/blizzard.html");
    NowPicture = 3;
  }
});

$("#slide-start-bt").click(function () {
  $("#slide-img-box").css("transform", "translateX(0)");
  $("#slide-desc-box").css("transform", "translateX(0)");
  $("#player-operater-state-bar").css("width", "90px");
  $("#play-time").html("0:57");
  $(".operater-play-bt").attr("href", "");
  $(".operater-play-bt").attr("href", "./work/IKEAKOREA/index.html");
  NowPicture = 1;
});

$("#slide-end-bt").click(function () {
  $("#slide-img-box").css("transform", "translateX(-75%)");
  $("#slide-desc-box").css("transform", "translateX(-75%)");
  $("#player-operater-state-bar").css("width", "100%");
  $("#play-time").html("3:48");
  $(".operater-play-bt").attr("href", "");
  NowPicture = 4;
});

$(".operater-play-bt").on("click", function (a) {
  if (NowPicture == 4) {
    a.preventDefault();
    $(".player-alert-box").css("display", "flex");
  }
});

$(".player-alert-close").on("click", function () {
  $(".player-alert-box").css("display", "none");
});


// $(window).resize(function () {
//   var WinWidth = $(window).width();
//   if (WinWidth < 1600) {
//     console.log(WinWidth);
//     var z = (1 / 2450) * WinWidth; + 0.3469387755102041;
//     $(".player-main").css("transform", `scale(${z})`);
//   }
  
// });

