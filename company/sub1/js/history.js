$('.history_nav li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화됐을때
    
//$('.content_area').find('.history').addClass('boxMove');
$('#content div:eq(0)').addClass('boxMove');
//첫번째 내용글 애니메이션 처리
//$('.history').find('.his2023s').addClass('boxMove');

var smh= $('.content_area').offset().top;   //메인 비주얼의 높이
var h1= $('.his_2023s').offset().top+2200 ; // eq0은 이미화면에 나오니까 1부터
var h2= $('.his_2018s').offset().top+2200 ; //500~700사이 값 
var h3= $('.his_2010s').offset().top+1600 ;
// var h4= $('.his_1997s').offset().top+700;

    //스크롤의 좌표가 변하면.. 스크롤 이벤트
$(window).on('scroll',function(){
    var scroll = $(window).scrollTop();
    //스크롤top의 좌표를 담는다
    
    
    $('.text').text(scroll);
    //스크롤 좌표의 값을 찍는다.
    
    //sticky menu 처리 / 이게 sticky
    if(scroll>smh){ 
        $('.history_nav').addClass('navOn');
        //스크롤의 거리가 350px 이상이면 서브메뉴 고정
        $('header').hide();
    }else{
        $('.history_nav').removeClass('navOn');
        //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
        $('header').show();
    }


    // top 이동메뉴 나타나기
    if(scroll>500){ //300이상의 거리가 발생되면
        $('.topMove').fadeIn('slow');  //top보여라~~~~
    }else{
        $('.topMove').fadeOut('fast');//top안보여라~~~~
    }
    
    
    
    $('.history_nav li').find('a').removeClass('spy');
    //모든 서브메뉴 비활성화~ 불꺼!!!
    
    
        //스크롤의 거리의 범위를 처리
    if(scroll>=0 && scroll<h1){  //0~h1 -700
        $('.history_nav li:eq(0)').find('a').addClass('spy');
        //첫번째 서브메뉴 활성화
        
        $('.his_2023s').addClass('boxMove');
        //첫번째 내용 콘텐츠 애니메이
    }else if(scroll>=h1 && scroll<h2){ //h1~h2 -700
        $('.history_nav li:eq(1)').find('a').addClass('spy');
        //두번째 서브메뉴 활성화
        
            $('.his_2018s').addClass('boxMove');
    }else if(scroll>=h2 && scroll<h3){
        $('.history_nav li:eq(2)').find('a').addClass('spy');
        //세번째 서브메뉴 활성화
        
            $('.his_2010s').addClass('boxMove');
    }else if(scroll>=h3){
        $('.history_nav li:eq(3)').find('a').addClass('spy');
        //네번째 서브메뉴 활 성화
        
            $('.his_1997s').addClass('boxMove');
    }
    // else if(scroll>=h4){
    //     $('.history_nav li:eq(4)').find('a').addClass('spy');
    //     //네번째 서브메뉴 활 성화
        
    //         $('.his_1997s').addClass('boxMove');
    // }  
    
});

//top으로 스르륵 이동
$('.topMove').click(function(e){
    e.preventDefault();
        //상단으로 스르륵 이동합니다.
    $("html,body").stop().animate({"scrollTop":0},1000); 
    });


//메뉴 클릭시 스르륵 이동
$('.history_nav a').click(function(e){
e.preventDefault(); //href="#" 속성을 막아주는..메소드

    var value=0; //이동할 스크롤의 거리

    if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
    value= $('.his_2023s').offset().top-100;  // 해당 콘테츠의 상단의 거리~~
    }else if($(this).hasClass('link2')){
    value= $('.his_2018s').offset().top-100; 
    }else if($(this).hasClass('link3')){
    value= $('.his_2010s').offset().top-100; 
    }else if($(this).hasClass('link4')){
    value= $('.his_1997s').offset().top-100; 
    }
    
$("html,body").stop().animate({"scrollTop":value},1000);
});