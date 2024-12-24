// ani section
// let slide = document.getElementById('slide');

// let addTrans1 = 0;

// let cloneEl1 = slide.querySelector('ul').cloneNode(true);

// let count1 = 1;


// cloneEl1.style.left = `3340px`;

// slide.querySelector('.ani_con2').appendChild(cloneEl1);


// let transMove1 = () => {
//     addTrans1 -= 15;
//     slide.querySelector('.ani_con2').style.transform = `translateX(${addTrans1}px)`;

//     if (addTrans1 <= -(3340 * count1)) {
//         // 순서 변경을 위해 첫번째 ul제거 한 뒤 appendChild
//         let thisEl = slide.querySelector('.ani_con2').querySelectorAll('ul')[0];
//         thisEl.remove();
//         slide.querySelector('.ani_con2').appendChild(thisEl);
//         slide.querySelector('.ani_con2').querySelectorAll('ul')[1].style.left = `${3340 * (count1 + 1)}px`;

//         count1++;
//     }
// }


// let thisInterval1 = setInterval(transMove1, 100);


// // 마우스 enter시 trans 중지
// document.querySelectorAll('.ani_con2 ul').forEach(eachT => {
//     eachT.addEventListener('mouseenter', mouseE => {
//         if (mouseE.target.parentNode.parentNode.id == 'slide') {
//             clearInterval(thisInterval1);
//         }
//     });
// });

// // 마우스 leave시 재생
// document.querySelectorAll('.ani_con2 ul').forEach(eachT => {
//     eachT.addEventListener('mouseleave', mouseE => {
//         if (mouseE.target.parentNode.parentNode.id == 'slide') {
//             thisInterval1 = setInterval(transMove1, 100);
//         }
//     });
// });

//ani section
$(document).ready(function () {
    var position = 0;  //최초위치
    var movesize = 1; //이동 크기
    var timeonoff;
    let w_width = false;  //false(작은해상도)  true(큰해상도)

    let win_h = $(window).width();

    $('.ani_con2 ul').after($('.ani_con2 ul').clone()); //복제
    // $('가져다 놓을 태그').after('기준태그');

    function partnerMove() {
        position -= movesize;  // 150씩 감소
        $('.ani_con2').css('left', position);

        if (position < -3340) {
            $('.ani_con2').css('left', 0);
            position = 0;
        }

    };
    
    
    if (win_h < 1025) {
        clearInterval(timeonoff);
        w_width = false; 
    } else {
        timeonoff = setInterval(partnerMove, 10);
        w_width = true; 
    } 

    $('.ani_con2').hover(function () {
        clearInterval(timeonoff);
    }, function () {
        if (win_h > 1024) {
            timeonoff = setInterval(partnerMove, 10);
            w_width = true; 
        }
    }); //마우스엔터시 멈추고 살짝 커지기

    
    
    $(window).resize(function() {
        win_h = $(window).width();
        if (win_h > 1024 && w_width == false) {
            timeonoff = setInterval(partnerMove, 10);
            w_width = true;
        } else {
            clearInterval(timeonoff);
            w_width = false;  
        } 
    });


});