//탭 버튼과 탭 내용들 담기
const tabMenu = document.querySelectorAll(".tab");
const tabMaplist = document.querySelectorAll(".map_list");
const tab_box = document.querySelector(".tab_box");

tabMenu.forEach((item, index) => { // forEach문으로 돌리기
    item.addEventListener("click", (e) => { // 클릭이벤트 추가
        e.preventDefault();//태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가
        tab_box.style.height = 'auto';
        tabMenu.forEach((item) => {
            item.classList.remove("active"); // 탭버튼의 active class명을 삭제한다
        });
        tabMenu[index].classList.add("active"); // 탭버튼을 클릭하면 active class 추가한다

        //const tabMenuId = (item.id); //탭버튼(tabMenu)의 id를 가져온다
        tabMaplist.forEach((item, index) => { // 탭버튼의 id를 가져왔으니까 본문(tabMaplist)을 탭버튼처럼 foreach로 돌려준다
           // item.classList.remove("active"); // active class를 삭제한다
            item.style.display = 'none';


            //const tabMaplistId = (item.id); // tabMaplist가 탭버튼(tabMenuId)의 item.id를 담는다면
            
            //if (tabMaplistId == tabMenuId) { // Maplist의 id가 Menu의 id와 같다면
                //tabMaplist[index].classList.add("active"); // Maplist 내용에 active class를 추가한다
            //}
        });
        tabMaplist[index].style.display = 'block'; // Maplist 내용에 active class를 추가한다
    });
});


//tabMenu.forEach((item, index) => { console.log('index:' + index + 'value:' + item) });