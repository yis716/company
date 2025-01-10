$(document).ready(function() {
  var screenSize, screenHeight;
  var current=false;

  function screen_size(){
      screenSize = $(window).width(); //스크린의 너비
      screenHeight = $(window).height();  //스크린의 높이

      $("#content").css('margin-top',screenHeight);
      
      if( screenSize > 1280 && current==false){
          $("#videoBG").show();
          $("#videoBG").attr('src','./images/back.mp4');
          $("#imgBG").hide();
          current=true;
        }
      if(screenSize <= 1280){
          $("#videoBG").hide();
          $("#videoBG").attr('src','');
          $("#imgBG").show();
          current=false;
      }
      if (screenSize <= 1280) {
          $("#imgBG").attr('src', './images/back.jpg');
      }
      if (screenSize <= 1024) {
          $("#imgBG").attr('src', './images/back2.jpg');
      }
      if (screenSize <= 640 ) {
          $("#imgBG").attr('src', './images/back3.jpg');
      }
  }

  screen_size();  //최초 실행시 호출
  
 $(window).resize(function(){    //웹브라우저 크기 조절시 반응하는 이벤트 메소드()
      screen_size();
  }); 
  
  $('.down').click(function(e){
      e.preventDefault();
      screenHeight = $(window).height();
      $('html,body').animate({'scrollTop':screenHeight}, 1000);
  });
});