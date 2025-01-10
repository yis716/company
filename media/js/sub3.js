// 팝업버튼
$('.btn_open').on('click', function (e) {
    e.preventDefault();

    $(this).next('.appear').fadeIn('slow');
    $('.box').show();/*클릭한 openBtn 의 big 만 뜨기위해서 next 로 지정 */
});

$('.btn_close').on('click', function (e) {
    e.preventDefault();/*닫기버튼이나 뒤에 배경을 클릭하면 둘다 사라짐 */

    $('.appear').fadeOut('fast');
    //$('.box').hide();
});

//마우스 물결 

$(".full-landing-image").ripples({ 
        resolution: 200, // 렌더링 값이 클수록 잔물결 효과가 느리게 전파
    perturbance: 0.003, // 잔물경 굴절 강도. 0은 굴절 없음
      });
