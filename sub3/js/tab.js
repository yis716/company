// const tabList = document.querySelectorAll('.tab_menu list li');

// for(var i=0; i<tabList.length; i++){
//     tabList[i].querySelector('.btn').addEventListener('click',function(e){
//         e.preventDefault();
//         for(var j=0; j<tabList.length;i++){
//             tabList[j].classList.remove('is_on');
//         }
//         this.parentNode.classList.add('is_on');
//     });
// }

// $(document).ready(function(){
//     var cnt=3;  //탭메뉴 개수 ***
//     $('.tabs .contlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
//     $('.tabs .tab1').css('background','#037AFE').css('color','#fff'); //첫번째 탭메뉴 활성화
//                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
      
//     $('.tabs .tab').click(function(e){
//           e.preventDefault();   // <a> href="#" 값을 강제로 막는다  
          
//           var ind = $(this).index('.tabs .tab');  // 클릭시 해당 index를 뽑아준다
//           //console.log(ind);

//           $(".tabs .contlist").hide(); //모든 탭내용을 안보이게...
//           $(".tabs .contlist:eq("+ind+")").show(); //클릭한 해당 탭내용만 보여라
//           $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
//           $(this).css('background','037AFE').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화
//      });
//   });