$(document).ready(function () {

    var smh = $('#headerArea').height();  //비주얼 이미지의 높이를 리턴한다   900px
    var on_off = false;  //false(안오버)  true(오버)
    var up_down = 'up';  // 비주얼 위에 있을 때 'up',비주얼 벗어났을 때'down' 

    $('#headerArea').mouseenter(function () {
        // var scroll = $(window).scrollTop();
        // $(this).css('background', '#fff');
        // $('.dropdownmenu li a').css('color', '#333');
        //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
        on_off = true;
    });

    $('#headerArea').mouseleave(function () {
        var scroll = $(window).scrollTop();  //스크롤의 거리

        if (scroll < smh - 200) {
            $(this).css('background', '#red');
        } else {
            $(this).css('background', '#1c1c1c');
        }
        on_off = false;
    });

    $(window).on('scroll', function () {//스크롤의 거리가 발생하면
        var scroll = $(window).scrollTop();
        //스크롤의 거리를 리턴하는 함수
        //console.log(scroll);

        if (scroll > smh - 200) {//스크롤이 비주얼의 높이-header높이 까지 내리면
            $('#headerArea .headerInner').addClass('ch');
            $('#headerArea .headerInner').css('height', '150px');
            up_down = 'down';
        } else {//스크롤 내리기 전 디폴트(마우스올리지않음)
            if (on_off == false) {
                $('#headerArea .headerInner').removeClass('ch');
                $('#headerArea').css('height', '200px');
            }
            up_down = 'up';
        };

    });


    //2depth 열기/닫기
    // $('ul.dropdownmenu').hover(
    //     function () {
    //         $('ul.dropdownmenu li.menu ul').fadeIn('normal', function () { $(this).stop(); }); //모든 서브를 다 열어라
    //         if (up_down == 'up') {
    //             $('#headerArea').animate({ height: 250 }, 'fast').clearQueue();
    //         } else {
    //             $('#headerArea').animate({ height: 200 }, 'fast').clearQueue();
    //         }

    //     }, function () {
    //         $('ul.dropdownmenu li.menu ul').hide(); //모든 서브를 다 닫아라
    //         if (up_down == 'up') {
    //             $('#headerArea').animate({ height: 100 }, 'fast').clearQueue();
    //         } else {
    //             $('#headerArea').animate({ height: 50 }, 'fast').clearQueue();
    //         }

    //     });

    //1depth 효과
    // $('ul.dropdownmenu li').hover(
    //     function () {
    //         $('.depth1', this).css('color', 'red');
    //     }, function () {
    //         $('.depth1', this).css('color', '#333');
    //     });


    //tab 처리
//     $('ul.dropdownmenu li.menu .depth1').on('focus', function () {
//         $('ul.dropdownmenu li.menu ul').slideDown('normal');
//         $('#headerArea').animate({ height: 250 }, 'fast').clearQueue();
//     });

//     $('ul.dropdownmenu li.m6 li:last').find('a').on('blur', function () {
//         $('ul.dropdownmenu li.menu ul').slideUp('fast');
//         $('#headerArea').animate({ height: 100 }, 'normal').clearQueue();
//     });
});






// $('#headerArea .headerInner').css('display', 'flex');
// $('#headerArea .headerInner').css('justify-content', 'space-between');
// $('#headerArea .headerInner').css('flex-direction', 'row');
// $('#headerArea').css('height', '150px');
// $('.logo').css('margin-top', '0');
// $('#headerArea #gnb').css('margin-top', '0');