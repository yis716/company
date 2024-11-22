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






















// var timeonoff;   //타이머 처리  홍길동 정보 / 멈춤기능에서 필요
// var imageCount=$('.gallery ul li').size();   //이미지 총개수
// var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
// var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때

// $('.btn1').css('background','#ddd'); //첫번째 불켜
// $('.btn1').css('width','200px'); // 버튼의 너비 증가
// $('.btn'+cnt).addClass('on');



// $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
// $('.gallery .link1 p').delay(1500).animate({top:350, opacity:1},'slow');

// function gallery_change(){
//   $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
//   $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
  
  
//   $('.mbutton').css('background','#ddd'); 
//   $('.mbutton').css('width','20px');
//   $('.mbutton').removeClass('on');
//   $('.btn'+cnt).addClass('on');
//   $('.btn'+cnt).css('background','#037AFE');
//   $('.btn'+cnt).css('width','200px');
  
  
//   $('.gallery li p').css('top',500).css('opacity',0);
//   $('.gallery .link'+cnt).find('p').delay(1500).animate({top:350, opacity:1},'slow');
// }

// function moveg(){
//   if(cnt==imageCount+1)cnt=1;
//   if(cnt==imageCount)cnt=0;  

//   cnt++;  


//   gallery_change();

//    if(cnt==imageCount)cnt=0;  
//  }
 
// timeonoff= setInterval( moveg , 5000);

// $('.mbutton').click(function(event){  
//      var $target=$(event.target); 

    

//    clearInterval(timeonoff);      
 
//   cnt=$(this).index('.mbutton')+1; 

//   gallery_change();

//   if(cnt==imageCount)cnt=0; 
 
//   timeonoff= setInterval( moveg , 5000); 
 
//   if(onoff==false){ 
//         onoff=true; 
//         $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
//   }
  
// });

//  //stop/play 버튼 클릭시 타이머 동작/중지
// $('.ps').click(function(){ 
//  if(onoff==true){ 
//        clearInterval(timeonoff);   
//          $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
//      onoff=false;   
//    }else{  
//        timeonoff= setInterval( moveg , 5000); 
//        $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
//        onoff=true;  
//    }
// });	







//     var timeonoff;   //타이머 처리  홍길동 정보 / 멈춤기능에서 필요
//     var imageCount=$('.gallery ul li').size();   //이미지 총개수
//     var cnt=1;   //이미지 순서 1 2 3 4 5 1 2 3 4 5....(주인공!!=>현재 이미지 순서)
//     var onoff=true; // true=>타이머 동작중 , false=>동작하지 않을때
    
//     $('.btn1').css('background','#037AFE'); //첫번째 불켜
//     $('.btn1').css('width','200px'); // 버튼의 너비 증가
//     $('.btn'+cnt).addClass('on');
    
//     $('.gallery .link1').fadeIn('slow'); //첫번째 이미지 보인다..
//     $('.gallery .link1 p').delay(1500).animate({top:350, opacity:1},'slow');
 
//     function gallery_change(){
//       $('.gallery li').fadeOut('slow'); //모든 이미지 안보인다.
// 		  $('.gallery .link'+cnt).fadeIn('slow');  //자기 자신만 이미지가 보인다
		  
// 		  // for(var i=1;i<=imageCount;i++){     //자바스크립트 짤 때 필요한 for문
// 			//   $('.btn'+i).css('background','#00f'); //버튼 모두불꺼
//       //   $('.btn'+i).css('width','16');
// 		  // }
//       $('.mbutton').css('background','#037AFE'); //버튼 모두불꺼
//       $('.mbutton').css('width','200px');
//       $('.btn'+cnt).css('background','#037AFE');//자신 버튼만 불켜 
//       $('.btn'+cnt).css('width','200px');
//       $('.mbutton').removeClass('on');
//       $('.btn'+cnt).addClass('on');
      
//       $('.gallery li p').css('top',500).css('opacity',0);
//       $('.gallery .link'+cnt).find('p').delay(1500).animate({top:350, opacity:1},'slow');
//     }
//     //p opacity 고치기


//     function moveg(){
//       if(cnt==imageCount+1)cnt=1;
//       if(cnt==imageCount)cnt=0;  //카운트 초기화

//       cnt++;  //카운트 1씩 증가.. 5가되면 다시 초기화 0  1 2 3 4 5 1 2 3 4 5..
    
//       gallery_change();
//     //  for(var i=1;i<=imageCount;i++){
//     //         $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
//     //  }
    
      
//       // top값 변경 및 그냥 오파시티만 또는 왼쪽에서
//        if(cnt==imageCount)cnt=0;  //카운트의 초기화 0
//      }
     
//     timeonoff= setInterval( moveg , 5000);// 타이머를 동작 1~5이미지를 순서대로 자동 처리
//       //var 변수 = setInterval( function(){처리코드} , 4000);  //홍길동의 정보를 담아놓는다
//       //clearInterval(변수); -> 살인마/사이코패스/살인청부업자
      
//       //4초or5초
    

//    $('.mbutton').click(function(event){  //각각의 버튼 클릭시 / 클릭한 정보가 담긴다
// 	     var $target=$(event.target); //클릭한 버튼 $target == $(this) / 자바스크립트 문법 .target=목적지 실제정보
//        // $를 붙이면 '변수다' 라는 걸 알려주기위함 (위험성 높음)
//        // $target == $this
//        clearInterval(timeonoff); //타이머 중지     
	 
// 	    //  for(var i=1;i<=imageCount;i++){
// 	    //      $('.gallery .link'+i).hide(); //모든 이미지 안보인다.
//       //    } 
	    

// 		  // if($target.is('.btn1')){  //첫번째 버튼 클릭?? //if($(this).is('.btn1')) 가능
// 			// 	 cnt=1;  //클릭한 해당 카운트를 담아놓는다
// 		  // }else if($target.is('.btn2')){  //두번째 버튼 클릭??
// 			// 	 cnt=2; 
// 		  // }else if($target.is('.btn3')){ 
// 			// 	 cnt=3; 
// 		  // }else if($target.is('.btn4')){
// 			// 	 cnt=4; 
// 		  // }else if($target.is('.btn5')){
// 			// 	 cnt=5; 
// 		  // } 

//       cnt=$(this).index('.mbutton')+1; 

//       gallery_change();

//       if(cnt==imageCount)cnt=0;  //카운트 초기화
     
//       timeonoff= setInterval( moveg , 5000); //타이머의 부활!!!
     
//       if(onoff==false){ //중지상태냐??
//             onoff=true; //동작~~
//             $('.ps').html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
//       }
      
//     });

// 	 //stop/play 버튼 클릭시 타이머 동작/중지
//   $('.ps').click(function(){ 
//      if(onoff==true){ // 타이머가 동작 중이냐??
// 	       clearInterval(timeonoff);   //살인마 고용 stop버튼 클릭시
// 		     $(this).html('<span class="hidden">play</span><i class="fa-regular fa-circle-play"></i>'); //js파일에서는 경로의 기준이 html파일이 기준!!
//          onoff=false;   //멈춰라
// 	   }else{  // false 타이머가 중지 상태냐??
// 		   timeonoff= setInterval( moveg , 4000); //play버튼 클릭시  부활
// 		   $(this).html('<span class="hidden">stop</span><i class="fa-regular fa-circle-stop"></i>');
// 		   onoff=true;  //작동
// 	   }
//   });	

//     //왼쪽/오른쪽 버튼 처리
//     $('.visual .btn').click(function(){

//       clearInterval(timeonoff); //살인마

//       if($(this).is('.btnRight')){ // 오른쪽 버튼 클릭 / 1 2 3 4 5
//           if(cnt==imageCount)cnt=0;  //카운트가 마지막 번호(5)라면 초기화 0
//           //if(cnt==imageCount+1)cnt=1;  
//           cnt++; //카운트 1씩증가
//       }else if($(this).is('.btnLeft')){  //왼쪽 버튼 클릭 /  5 4 3 2 1
//           if(cnt==1)cnt=imageCount+1;   // 1->6  최초..
//           if(cnt==0)cnt=imageCount;
//           cnt--; //카운트 감소
//       }
//       gallery_change();
//     // for(var i=1;i<=imageCount;i++){
//     //     $('.gallery .link'+i).hide(); //모든 이미지를 보이지 않게.
//     // }
//     // $('.gallery li').hide(); //모든 이미지를 보이지 않게.
//     // $('.gallery .link'+cnt).fadeIn('slow'); //자신만 이미지가 보인다..
                        
//     // $('.mbutton').css('background','#00f'); //버튼 모두불꺼
//     // $('.mbutton').css('width','16');
//     // $('.btn'+cnt).css('background','#f00');//자신 버튼만 불켜 
//     // $('.btn'+cnt).css('width','30px');

//     // $('.gallery li p').css('top',210).css('opacity',0);
//     // $('.gallery .link'+cnt).find('p').delay(1000).animate({top:170, opacity:1},'slow');

//     // if($(this).is('.btnRight')){
//     //   if(cnt==imageCount)cnt=0;
//     // }else if($(this).is('.btnLeft')){
//     //   if(cnt==1)cnt=imageCount+1;
//     // }

//     timeonoff= setInterval( moveg , 4000); //부활

//     if(onoff==false){
//       onoff=true;
//       $('.ps').html('<p class="hidden">stop</p><i class="fa-regular fa-circle-stop"></i>');
//     }
//   });