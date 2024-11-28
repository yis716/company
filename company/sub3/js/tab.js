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

// JavaScript Document

// $(document).ready(function(){
//     var cnt=3;  //탭메뉴 개수 ***
//     $('.tabs .conlist:eq(0)').show(); // 첫번째 탭 내용만 열어라
//     $('.tabs .tab1').css('background','#037AFE').css('color','#fff'); //첫번째 탭메뉴 활성화
//                //자바스크립트의 상대 경로의 기준은 => 스크립트 파일을 불러들인 html파일이 저장된 경로 기준***
    
//     $('.tabs .tab').each(function (index) {  // index=0 1 2
//       $(this).click(function(e){
//           e.preventDefault();   // <a> href="#" 값을 강제로 막는다

//           $(".tabs .conlist").hide(); //모든 탭내용을 안보이게...
//           $(".tabs .conlist:eq("+index+")").show(); //클릭한 해당 탭내용만 보여라
//           $('.tab').css('background','#fff').css('color','#333'); //모든 탭메뉴를 비활성화
//           $(this).css('background','#037AFE').css('color','#fff'); // 클릭한 해당 탭메뉴만 활성화
//      });
//     });
//   });

//탭 버튼과 탭 내용들 담기
const tabNav = document.querySelectorAll(".tab");
const tabCon = document.querySelectorAll(".conlist");

//tabNav[0].classList.add("active");

tabNav.forEach((item, index) => {     // forEach문으로 돌리기
    item.addEventListener("click", (e) => {    // 클릭이벤트줘보기
        tabNav.forEach((item) => {
            item.classList.remove("active");   // 탭버튼에 담겨있는 active class 지우기
        });
        tabNav[index].classList.add("active"); // 탭버튼을 클릭한 배열의 active class를 추가하기
        
        const tabNavId = (item.id); // 탭버튼(tabNav)의 id를 가져오기
        tabCon.forEach((item, index) => { // id를 가져왔으니까 본문(tabCon)을 탭버튼 처럼 foreach로 돌려주기
            item.classList.remove("active");  // 탭 본문 내용을 active class 지우기

            //뭐지.. 제거했으니까 추가해야되는데... id를 불러와야하니까..음
            const tabConId = (item.id); // tabConid 가 탭버튼(tabNav)의 item.id를 담아 그 다음에 id가 같으면
            //면이니까 if로 가정법써주고
            if (tabConId == tabNavId) { // Con의 id가 Nav의 id와 같으면
                tabCon[index].classList.add("active"); // 본문 내용에 active를 추가하기
            }

        });
        
    });
});




//tabNav.forEach((item, index) => {console.log('index' + index, 'value' + item)});
//tabNav.forEach((item, index) => { console.log('index:' + index + 'value:' + item) });

//console.log(tabNav);
