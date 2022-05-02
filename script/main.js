// main.js

$(function(){
    // 변수 선언
    var img_num = 0; //이미지 번호
    var duration = 4000; //인터벌 시간
    // var slider;

    // 페이드인/아웃 명령어 생성
    function changeSlider() {
        // 전체 이미지들 fadeOut 
        $('.sliders > img').fadeOut(3000);
        // 현재 이미지 fadeIn
        $('.sliders > img').eq(img_num).fadeIn(3000);
    }

    setInterval(function(){
        if(img_num >= 2) {
            img_num = 0
        } else {
            img_num =  img_num + 1;
        }

        changeSlider();
    }, duration);

    
    var slides = document.querySelector('.slides'),
        slide = document.querySelectorAll('.slides li'),
        currentIdx = 0,
        slideCount = slide.length,
        prevBtn = document.querySelector('.prev')
        slideWidth = 350,
        slideMargin = 30,
        nextBtn =document.querySelector('.next');

        slides.style.width = (slideWidth + slideMargin)*slideCount - slideMargin + 'px';

        function moveSlide(num) {
            slides.style.left = -num * 380 + 'px';
            currentIdx = num; 
        }

        nextBtn.addEventListener('click', function(){
            if(currentIdx < slideCount - 3){
                moveSlide(currentIdx + 1);
            }else {
                moveSlide(0);
            }
        });

        prevBtn.addEventListener('click', function(){
            if(currentIdx > 0){
                moveSlide(currentIdx - 1);
            }else {
                moveSlide(slideCount -3);
            }
        });



        var slides2 = document.querySelector('.slides2'),
        slide2 = document.querySelectorAll('.slides2 li'),
        currentIdx2 = 0,
        slideCount2 = slide2.length,
        prevBtn2 = document.querySelector('.prev2')
        slideWidth2 = 1200,
        slideMargin2 = 0,
        nextBtn2 =document.querySelector('.next2');

        slides2.style.width = (slideWidth2 + slideMargin2)*slideCount2 - slideMargin2 + 'px';

        function moveSlide2(num) {
            slides2.style.left = -num * 1200 + 'px';
            currentIdx2 = num; 
        }

        nextBtn2.addEventListener('click', function(){
            if(currentIdx2 < slideCount2 - 1){
                moveSlide2(currentIdx2 + 1);
            }else {
                moveSlide2(0);
            }
        });

        prevBtn2.addEventListener('click', function(){
            if(currentIdx2 > 0){
                moveSlide2(currentIdx2 - 1);
            }else {
                moveSlide2(slideCount2 - 1);
            }
        });
});