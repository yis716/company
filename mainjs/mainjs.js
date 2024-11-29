// 메인 비주얼 처리 코드
var timeonoff;  //타이머 처리  홍길동 정보 / 멈춤기능에서 필요
var imageCount = $(".gallery ul li").size(); //이미지 총개수
var cnt = 1;  //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
var onoff = true; // true=>타이머 동작중 , false=>동작하지 않을때


$(".btn1").css("background", "rgba(255, 255, 255, 0.5)"); 
$(".btn1").css("width", "200px"); 
$(".btn1").addClass('on');

$(".gallery .link1").fadeIn("fast"); 
$(".gallery .link1 p").delay(1500).animate({ top: 310, opacity: 1 }, "slow");


function gallery_change() {
    $(".gallery li").fadeOut("300"); 
    $(".gallery .link" + cnt).fadeIn("400");

    $(".mbutton").css("background", "rgba(255, 255, 255, 0.5)"); 
    $(".mbutton").css("width", "20px");
    $(".mbutton").removeClass("on");
    $(".btn" + cnt).addClass("on");
    $(".btn" + cnt).css("background", "rgba(255, 255, 255, 0.5)");
    $(".btn" + cnt).css("width", "200px");

    $(".gallery li p").css("top", 480).css("opacity", 0);
    $(".gallery .link" + cnt)
        .find("p")
        .delay(1200)
        .animate({ top: 310, opacity: 1 }, "slow")
};


function moveg() {
  if (cnt == imageCount + 1) cnt = 1;
  if (cnt == imageCount) cnt = 0; 

  cnt++; 
  //1 2 3 4 5   1 2 3 4 5..
  gallery_change();

  if (cnt == imageCount) cnt = 0; 
}

timeonoff = setInterval(moveg, 4000);

$(".mbutton").click(function (event) {
 
  var $target = $(event.target); 
  clearInterval(timeonoff); 

  cnt = $(this).index(".mbutton") + 1; //0~4 ->1~5
  // console.log(cnt);

  gallery_change();

  if (cnt == imageCount) cnt = 0;

  timeonoff = setInterval(moveg, 4000); 

  if (onoff == false) {
   
    onoff = true; 
    $(".ps").html('<span class="hidden">stop</span><i class="fa-regular fa-circle-pause"></i>');
  }
});


$(".ps").click(function () {
  if (onoff == true) {
   
    clearInterval(timeonoff); 
    $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); 
    onoff = false;
  } else {
    
    timeonoff = setInterval(moveg, 4000);
    $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-pause"></i>');
    onoff = true; 
  }
});



//사업소개
var buss_top = $('#content .brand .brand_inner').offset().top;
var not_top =  $('#content .notice').offset().top;
$(window).on('scroll', function () {
  var scroll = $(window).scrollTop();
  
  if (scroll > buss_top - 90 && scroll < not_top -150) {
    $('#content .brand .brand_inner .more').addClass('fix');
  } else {
    $('#content .brand .brand_inner .more').removeClass('fix');
  }   
});