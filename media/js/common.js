$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
    var scroll = $(window).scrollTop(); //스크롤의 거리
    var win_height =$(window).height();
    var header_height = $('#headerArea').height();
   
    if (scroll > win_height) { //scroll의 거리가 win_height보다 크면 
        $('.topMove').fadeIn('slow');  //top보이기
    }else{
        $('.topMove').fadeOut('fast');//top안보이기
    }

    if (scroll > win_height - header_height) { // win_height - header_height 뺀 것 보다 scroll이 크면(거리가 발생되면)
        $('#headerArea .headerInner').addClass('ch'); //top보이기 
    } else {
        $('#headerArea').css('background', 'transparent')
        $('#headerArea .headerInner').removeClass('ch'); //top안보이기
    }
});
//top메뉴
$('.topMove').click(function(e){
   e.preventDefault();
    //상단으로 스르륵 이동합니다.
   $("html,body").stop().animate({"scrollTop":0},1000); 
});

//모든 a태그 클릭시 움직임 x
// $('#content a').click(function(e){
//   e.preventDefault();
// });

// 햄버거메뉴

$(document).ready(function () {

    var onoff = false; //false(메뉴열림) true(메뉴닫힘)
    $(".menuOpen").click(function (e) {
        e.preventDefault();
        if (onoff == false) {
            $("#gnb").slideDown('slow');
            $('#headerArea').addClass('mn_open');//메뉴모양변경
            onoff = true;
        } else {
            $("#gnb").slideUp('fast');
            $('#headerArea').removeClass('mn_open');
            onoff = false;
        }
    });

    //  네비높이 맞추기(페이지 로딩시 1회)
    var screenSize = $(window).width();
    //var winh =  $(document).height();

    // if( screenSize > 768){
    //   $("#gnb").height('auto');
    // }else{
    //   $("#gnb").height(winh);
    // }

    var current = 0; // 0(해상도가 모바일), 1(소형테블릿이상)

    $(window).resize(function () {
        var screenSize = $(window).width();  //가로 해상도
        if (screenSize > 1024) {  //소형테블릿 이상이면
            $("#gnb").show();
            // $("#gnb").height('auto');
            current = 1; //소형테블릿이상
        }
        if (current == 1 && screenSize <= 1024) {
            $("#gnb").hide();
            // $("#gnb").height(winh);
            current = 0; //모바일
        }
    });
});