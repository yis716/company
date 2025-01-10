//탭으로 각 섹션 이동하기
document.addEventListener("DOMContentLoaded", function () {
    setupMenu();
    tabletMenu();
});

window.addEventListener("resize", function () {
    tabletMenu();
});

// TODO
let sec1, sec2, sec3, sec4, sec5 = 0;

setTimeout(function () {
    sec1 = $('.star').offset().top;
    sec2 = $('.meteor').offset().top;
    sec3 = $('.pneumonia').offset().top;
    sec4 = $('.lucy').offset().top;
    sec5 = $('.nasa').offset().top;
    console.log(sec1, sec2, sec3, sec4, sec5);
}, 100);


function menu_on() {
    let ht = $(window).height();
    // 현재 문서가 스크롤된 거리 저장
    let scroll = $(window).scrollTop();
    let hh = ht / 2;
    // 메뉴 활성화

    if (scroll >= sec1 - hh && scroll < sec2 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(0).addClass("on");
    } else if (scroll >= sec2 - hh && scroll < sec3 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(1).addClass("on");
    } else if (scroll >= sec3 - hh && scroll < sec4 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(2).addClass("on");
    } else if (scroll >= sec4 - hh && scroll < sec5 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(3).addClass("on");
    } else if (scroll >= sec5 - hh) {
        $("#menu li").removeClass("on");
        $("#menu li").eq(4).addClass("on");
    } else {
        $("#menu li").removeClass("on");
    }
}

$(window).on("scroll", function () {
    menu_on();
});

$(window).on("resize", function () {
    sec1 = $('.star').offset().top;
    sec2 = $('.meteor').offset().top;
    sec3 = $('.pneumonia').offset().top;
    sec3 = $('.lucy').offset().top;
    sec3 = $('.nasa').offset().top;
    //console.log(sec1,sec2,sec3);
});


// #menu 클릭시 자동 상하 스크롤 및 활성화 클래스 관리
function setupMenu() {
    const menuItems = document.querySelectorAll("#menu li");
    const sections = document.querySelectorAll(".inner");

    menuItems.forEach(function (menuItem, menuIdx) {
        // #menu li animation delay
        setTimeout(function () {
            menuItem.classList.add("ani");
        }, 200 * menuIdx);

        // #menu 클릭시
        menuItem.addEventListener("click", function (e) {
            e.preventDefault();

            // 해당 메뉴 스타일 활성화
            menuItems.forEach((item) => {
                item.classList.remove("on");
            });
            menuItem.classList.add("on");

            // 해당 메뉴로 이동
            const rect = sections[menuIdx].getBoundingClientRect();
            const nowTop = rect.top + window.pageYOffset - 50;

            const start = window.pageYOffset;
            const distance = nowTop - start;
            const duration = 400;
            const frameRate = 1000 / 60; // 60 FPS
            const totalFrames = duration / frameRate;
            let frame = 0;

            const interval = setInterval(function () {
                frame++;
                const progress = frame / totalFrames;
                window.scrollTo(0, start + distance * progress);

                if (frame >= totalFrames) {
                    clearInterval(interval);
                }
            }, frameRate);
        });
    });
}

// 태블릿(768) 이하에서 textContent 변경
function tabletMenu() {
    const winW = window.innerWidth;
    const menuLists = document.querySelectorAll("#menu li a");

    menuLists.forEach((menuList, idx) => {
        if (winW <= 768) {
            if (!menuList.dataset.originalText) {
                menuList.dataset.originalText = menuList.textContent; // 원리 텍스트 저장
            }
            menuList.textContent = `${idx + 1}`;
            menuList.style.fontSize = "1.3rem";
        } else {
            if (menuList.dataset.originalText) {
                menuList.textContent = menuList.dataset.originalText; // 원래 텍스트 복원
                menuList.style.fontSize = "";
            }
        }
    });
}