// 전체 페이지 공통 js

// 글로벌 네비게이션(GNB)

var smh=$('.visual').height();  //비주얼 이미지의 높이를 리턴한다   900px
var on_off=false;  //false(안오버)  true(오버)

    $('#headerArea').mouseenter(function(){
    // var scroll = $(window).scrollTop();
        $(this).css('background','#fff');
       // $('.dropdownmenu li .depth1').css('color','#333'); 
        //헤더영역의 텍스트 색상과 로고이미지 경로 등을 교체
        on_off=true;
    });

    $('#headerArea').mouseleave(function(){
            var scroll = $(window).scrollTop();  //스크롤의 거리
            
            if(scroll<smh-50 ){
                $(this).css('background','rgba(255,255,255,.8)').css('box-shadow','none'); 
                //$('.dropdownmenu li a').css('color','#333');
            }else{
                $(this).css('background','#fff'); 
                //$('.dropdownmenu li a').css('color','#333');
            }
        on_off=false;    
    });

    $(window).on('scroll',function(){//스크롤의 거리가 발생하면
            var scroll = $(window).scrollTop();  
            //스크롤의 거리를 리턴하는 함수
            //console.log(scroll);

            if(scroll>smh-50){//스크롤이 비주얼의 높이-header높이 까지 내리면
                $('#headerArea').css('background','#fff').css('box-shadow','1px 0 8px rgba(0,0,0,.3)');
                //$('.dropdownmenu li a').css('color','#333');
            }else{//스크롤 내리기 전 디폴트(마우스올리지않음)
            if(on_off==false){
                    $('#headerArea').css('background','rgba(255,255,255,.8)').css('box-shadow','none');
                    //$('.dropdownmenu li a').css('color','#333');
            }
        };      
    });


    //2depth 열기/닫기
    $('.dropdownmenu').hover(
        function() { 
        $('.dropdownmenu .menu ul').fadeIn('normal',function(){$(this).stop();}); //모든 서브를 다 열어라
        $('#headerArea').animate({height:287},'fast').clearQueue();
    },function() {
        $('.dropdownmenu .menu ul').hide(); //모든 서브를 다 닫아라
        $('#headerArea').animate({height:92},'fast').clearQueue();
    });
    
    //1depth 효과
    $('.dropdownmenu .menu').hover(
        function() { 
        $('.depth1',this).css('color','#3366CC');
    },function() {
        $('.depth1',this).css('color','#333');
    });
    
    //tab 처리
    $('.dropdownmenu .menu .depth1').on('focus', function () {        
        $('.dropdownmenu .menu ul').slideDown('normal');
        $('#headerArea').animate({height:287},'fast').clearQueue();
    });

    $('.dropdownmenu .m6 li:last').find('a').on('blur', function () {        
        $('.dropdownmenu .menu ul').slideUp('fast');
        $('#headerArea').animate({height:92},'normal').clearQueue();
    });

// 패밀리 사이트 이동


$('.family .arrow').toggle(function(){ //홀수번째 클릭
    $('.family .list').fadeIn('slow');	
    $(this).children('span').html('<i class="fa-solid fa-chevron-down"></i>');	
},function(){ // 짝수번째 클릭
    $('.family .list').fadeOut('fast');	
    $(this).children('span').html('<i class="fa-solid fa-chevron-up"></i>');	
});

//top으로 이동
$(window).on('scroll',function(){ //스크롤 값의 변화가 생기면
            var scroll = $(window).scrollTop(); //스크롤의 거리
            
            
            $('.text').text(scroll);

            if(scroll>=500){ //300이상의 거리가 발생되면
                $('.top_move').fadeIn('slow');  //top보임
            }else{
                $('.top_move').fadeOut('fast');//top안보임
            }
        });
    
        $('.top_move').click(function(e){
            e.preventDefault();
            //상단으로 스르륵 이동합니다.
            $("html,body").stop().animate({"scrollTop":0},1000); //요거 중요 {"scrollTop":100 -> (top좌표만큼 이동)},1000
        });

        //슬라이드 메뉴 클릭시 해당 콘텐츠로 스스륵~~~ 이동
        // $('.slideMenu a').click(function(e){
        //     e.preventDefault(); //href="#" 속성을 막아주는..메소드
    
        //     var value=0; //이동할 스크롤의 거리

        //     if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
        //         value= $('#content .con1').offset().top;  // .offset == 해당 콘테츠의 상단의 거리~~ left/top/right/bottom
        //     }else if($(this).hasClass('link2')){
        //         value= $('#content .con2').offset().top; 
        //     }else if($(this).hasClass('link3')){
        //         value= $('#content .con3').offset().top; 
        //     }else if($(this).hasClass('link4')){
        //         value= $('#content .con4').offset().top; 
        //     }
            
        // $("html,body").stop().animate({"scrollTop":value},1000);
        // });
