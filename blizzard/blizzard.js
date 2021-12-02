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

$("#game-filter-bt-All").on("click", function () {
  $(".col-6").removeClass("hidden");
  $(".col-6").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-All").css("background-color", "rgb(0, 174, 255)");
});

$("#game-filter-bt-RPG").on("click", function () {
  $(".col-6").removeClass("show");
  $(".col-6").addClass("hidden");
  $(".RPG").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-RPG").css("background-color", "rgb(0, 174, 255)");
});

$("#game-filter-bt-RTS").on("click", function () {
  $(".col-6").removeClass("show");
  $(".col-6").addClass("hidden");
  $(".RTS").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-RTS").css("background-color", "rgb(0, 174, 255)");
});

$("#game-filter-bt-FPS").on("click", function () {
  $(".col-6").removeClass("show");
  $(".col-6").addClass("hidden");
  $(".FPS").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-FPS").css("background-color", "rgb(0, 174, 255)");
});

$("#game-filter-bt-CCG").on("click", function () {
  $(".col-6").removeClass("show");
  $(".col-6").addClass("hidden");
  $(".CCG").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-CCG").css("background-color", "rgb(0, 174, 255)");
});

$("#game-filter-bt-MOBA").on("click", function () {
  $(".col-6").removeClass("show");
  $(".col-6").addClass("hidden");
  $(".MOBA").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-MOBA").css("background-color", "rgb(0, 174, 255)");
});

$("#game-filter-bt-REST").on("click", function () {
  $(".col-6").removeClass("show");
  $(".col-6").addClass("hidden");
  $(".REST").addClass("show");
  $(".game-filter-bt").css("background-color", "rgb(0, 111, 178)");
  $("#game-filter-bt-REST").css("background-color", "rgb(0, 174, 255)");
});
