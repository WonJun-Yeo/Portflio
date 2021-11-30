var nowficture = 1;

$(".banner-after-bt").on("click", function () {
  if (nowficture == 1) {
    $(".banner-list").css("transform", "translateX(-20%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(1).css("background-color", "#00aeff");
    nowficture = 2;
  } else if (nowficture == 2) {
    $(".banner-list").css("transform", "translateX(-40%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(2).css("background-color", "#00aeff");
    nowficture = 3;
  } else if (nowficture == 3) {
    $(".banner-list").css("transform", "translateX(-60%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(3).css("background-color", "#00aeff");
    nowficture = 4;
  } else if (nowficture == 4) {
    $(".banner-list").css("transform", "translateX(-80%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(4).css("background-color", "#00aeff");
    nowficture = 5;
  } else if (nowficture == 5) {
    $(".banner-list").css("transform", "translateX(0)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(0).css("background-color", "#00aeff");
    nowficture = 1;
  }
});

$(".banner-before-bt").on("click", function () {
  if (nowficture == 1) {
    $(".banner-list").css("transform", "translateX(-80%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(4).css("background-color", "#00aeff");
    nowficture = 5;
  } else if (nowficture == 2) {
    $(".banner-list").css("transform", "translateX(0)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(0).css("background-color", "#00aeff");
    nowficture = 1;
  } else if (nowficture == 3) {
    $(".banner-list").css("transform", "translateX(-20%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(1).css("background-color", "#00aeff");
    nowficture = 2;
  } else if (nowficture == 4) {
    $(".banner-list").css("transform", "translateX(-40%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(2).css("background-color", "#00aeff");
    nowficture = 3;
  } else if (nowficture == 5) {
    $(".banner-list").css("transform", "translateX(-60%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(3).css("background-color", "#00aeff");
    nowficture = 4;
  }
});

$(".banner-now-bt-list")
  .eq(0)
  .on("click", function () {
    $(".banner-list").css("transform", "translateX(0)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(0).css("background-color", "#00aeff");
    nowficture = 1;
  });
$(".banner-now-bt-list")
  .eq(1)
  .on("click", function () {
    $(".banner-list").css("transform", "translateX(-20%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(1).css("background-color", "#00aeff");
    nowficture = 2;
  });
$(".banner-now-bt-list")
  .eq(2)
  .on("click", function () {
    $(".banner-list").css("transform", "translateX(-40%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(2).css("background-color", "#00aeff");
    nowficture = 3;
  });
$(".banner-now-bt-list")
  .eq(3)
  .on("click", function () {
    $(".banner-list").css("transform", "translateX(-60%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(3).css("background-color", "#00aeff");
    nowficture = 4;
  });
$(".banner-now-bt-list")
  .eq(4)
  .on("click", function () {
    $(".banner-list").css("transform", "translateX(-80%)");
    $(".banner-now-bt-list").css("background-color", "#006fb2");
    $(".banner-now-bt-list").eq(4).css("background-color", "#00aeff");
    nowficture = 5;
  });
