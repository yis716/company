//탭 버튼과 탭 내용들 담기
const tabNav = document.querySelectorAll(".tab");
const tabCht = document.querySelectorAll(".cht");

//tabNav[0].classList.add("active");

tabNav.forEach((item, index) => {     // forEach문으로 돌리기
    item.addEventListener("click", (e) => {    // 클릭이벤트줘보기
        e.preventDefault(); //태그의 기본 동작(링크 연결) 방지를 위해 preventDefault를 추가
        tabNav.forEach((item) => {
            item.classList.remove("active");   // 탭버튼에 담겨있는 active class 지우기
        });
        tabNav[index].classList.add("active"); // 탭버튼을 클릭한 배열의 active class를 추가하기
        
        const tabNavId = (item.id); // 탭버튼(tabNav)의 id를 가져오기
        tabCht.forEach((item, index) => { // id를 가져왔으니까 본문(tabCht)을 탭버튼 처럼 foreach로 돌려주기
            item.classList.remove("active");  // 탭 본문 내용을 active class 지우기

            //뭐지.. 제거했으니까 추가해야되는데... id를 불러와야하니까..음
            const tabChtId = (item.id); // tabChtid 가 탭버튼(tabNav)의 item.id를 담아 그 다음에 id가 같으면
            //면이니까 if로 가정법써주고
            if (tabChtId == tabNavId) { // Con의 id가 Nav의 id와 같으면
                tabCht[index].classList.add("active"); // 본문 내용에 active를 추가하기
            }

        });
        
    });
});




//tabNav.forEach((item, index) => {console.log('index' + index, 'value' + item)});
//tabNav.forEach((item, index) => { console.log('index:' + index + 'value:' + item) });

//console.log(tabNav);
