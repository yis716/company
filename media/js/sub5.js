$(document).ready(function () {

    $('.grid-item').hover(
        function () {
            $(this).siblings().css({ 'filter': 'brightness(30%)' });
        },
        function () {
            $(this).siblings().css({ 'filter': 'brightness(100%)' });
        }
    );
});