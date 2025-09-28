
$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 3000,
		disableOnInteraction: true,
	},

	effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {  /* 몇개의 팝업이 있는지 보여주는 동그라미 */
		el: '.visual .paging', /* 해당 요소의 class명 */
		clickable: true,  /* 클릭하면 해당 팝업으로 이동할 것인지 값 */
	},
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .ctrl_btn .btn_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .ctrl_btn .btn_prev',  
	},
    });

    $('.visual .ctrl_btn .btn_pause').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .btn_play').show()
    })
    $('.visual .ctrl_btn .btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .btn_pause').show()
    })

    /* 
    브라우저가 스크롤 되면 header에 fixed 클래스 추가
    1. 조금이라도 스크롤 되면 header에 fixed 클래스 추가
    2. 다시 맨 위로 가면 header에 fixed 클래스 제거
    3. 새로고침 했을 때 스크롤 값이 0이 아니면 header에 fixed 클래스 부여
    */
    let scrolling
    function scroll_chk(){ // 함수 정의하는 법
        scrolling = $(window).scrollTop()
        console.log(scrolling)
        if(scrolling > 0){
            $('header').addClass('fixed')
        }else(
            $('header').removeClass('fixed')
        )
    }
    //문서가 로딩 되었을 때 단 1번 함수 실행
    scroll_chk()
    //브라우저가 스크롤 될 때마다 1번씩 함수 실행
    $(window).scroll(function(){
        scroll_chk()
    })

    //book swiper
    const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
        slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
        spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
        breakpoints: {
            769: {    /* 769px 이상일때 적용 */
                slidesPerView: 'auto',    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
                spaceBetween: 24,
            },
        },
        //centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
        navigation: {
            nextEl: '.book .btn_next',
            prevEl: '.book .btn_prev',
        },
    });
    const story_swiper = new Swiper('.story .swiper', { /* 팝업을 감싼는 요소의 class명 */
	slidesPerView: 2, /* 한번에 보일 팝업의 수 - 모바일 제일 작은 사이즈일때 */
	spaceBetween: 16, /* 팝업과 팝업 사이 여백 */
	breakpoints: {
		769: {    /* 640px 이상일때 적용 */
			slidesPerView: 4,    /*    'auto'   라고 쓰면 css에서 적용한 넓이값이 적용됨 */
			spaceBetween: 24,
		},
	},
	//centeredSlides: true, /* 팝업을 화면에 가운데 정렬(가운데 1번이 옴) */
	navigation: {
		nextEl: '.story .btn_next',
		prevEl: '.story .btn_prev',
	}
});
    $('footer .top').on('click', function(){
        // console.log('top')
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })

})//document