/***********************
* 파일명 : main.js 
* 작성자 : 이수형
* 작성일 : 25-10-23
* 설  명 : 메인페이지에서만 적용되는 js를 저장 (header/footer 제외)
*********************/
$(document).ready(function(){
    $('.visual .popup').slick({
        autoplay: false, //팝업 자동 실행
        autoplaySpeed: 3000, //팝업이 머무는 시간
        speed: 500, //팝업 전환 속도
        fade: true,  //페이드 효과 적용
        dots: false, //하단 페이지 버튼 (true, false)
        arrows: false,  //다음, 이전팝업 (true, false)
        //pauseOnHover: true, //마우스오버시 일시정지
        infinite: true, //무한반복 (loop)
    });

    /* .biz .list ul li에 마우스 오버하면
        1. 오버한 li에 active 클래스 부여
        2. .biz .list에는 hover 클래스 추가
        ＊ 언제 out 할 것 인가? --> */

    $('.biz .list ul li').on('mouseenter', function(){
        $(this).addClass('active')
        $('.biz .list').addClass('hover')
    })
    $('.biz .list ul li').on('mouseleave', function(){
        $(this).removeClass('active')
        $('.biz .list').removeClass('hover')
    })

    const news_swiper = new Swiper('.news .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 'auto', /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 24, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
        769: {    /* 1025px 이상일때 적용 */
			slidesPerView: 2,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 32,
		},
		1025: {    /* 1025px 이상일때 적용 */
			slidesPerView: 3,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 40,
		},
	},
    scrollbar: {
        el: ".news .ctrl_wrap .scrollbar",
        hide: false,
        draggalbe: true,  // 스크롤바 드래그 여부
        //dragsize: 100,  //스크롤바 사이즈
    },
});

/*  service .list ul li에 마우스를 오버 했을 때,
    >> 오버한 li에 있는 date-bg의 값을
       .service .list의 class명으로 줌. */
    let service_name
    $('.service .list ul li').on('mouseenter', function(){
        service_name = $(this).attr('data-bg')
        // console.log(service_name)
        $('.service .list').attr('data-bg', service_name)
    })
    //기존에 있던 값은 지우고 내가 준 값으로 새로 채우는 것.
    $('.service .list ul li').on('mouseleave', function(){
        $('.service .list').attr('data-bg', ' ')
    })

})//document