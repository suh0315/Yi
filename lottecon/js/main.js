$(document).ready(function(){
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */

	autoplay: {  /* 팝업 자동 실행 */
		delay: 5000,
		disableOnInteraction: true,
	},

	effect: "fade", /* fade 효과 */

	loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

	pagination: {
        el: '.visual .paging',
        clickable: true,
        renderBullet: function (i, className) {
        return '<button class="' + className + '"><svg viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg"><circle cx="36.5" cy="36.5" r="35.5" class="circle"></circle></svg></button>';
        /* svg에는 넓이높이 삭제, svg안에 circle이든 path든 fill/storke 삭제, 그리고 반드시 circle 클래스 추가 */
        }
    },
	

	navigation: {  /* 이전, 다음 버튼 */
		nextEl: '.visual .swiper .ctrl_btn .btn_next',  /* 다음 버튼의 클래스명 */
		prevEl: '.visual .swiper .ctrl_btn .btn_prev',  
	},

    });

    /* -------------------------
       🔵 SVG stroke 애니메이션 제어용 변수
    ------------------------- */
    let savedOffset = 270;  // stroke-dashoffset 초기값
    const duration = 4800;  // 애니메이션 총 시간 (4.8s)
    let startTime = null;   // 재생 시작 시간 저장
    let paused = false;     // 현재 pause 상태인지 여부

    function pauseProgress() {
        paused = true;

        const activeCircle = $('.visual .paging .swiper-pagination-bullet-active .circle');

        // 현재 dashoffset 값을 가져온다
        const matrix = window.getComputedStyle(activeCircle[0]).getPropertyValue("stroke-dashoffset");
        savedOffset = parseFloat(matrix);

        // 애니메이션 제거 (정지)
        activeCircle.css("animation", "none");
    }

    function resumeProgress() {
        paused = false;

        const activeCircle = $('.visual .paging .swiper-pagination-bullet-active .circle');

        // 남은 stroke 길이에 맞춰 duration 계산
        const percent = savedOffset / 270;   
        const remainTime = duration * percent;

        activeCircle.css({
            "animation": `progress ${remainTime / 1000}s linear forwards`,
            "stroke-dashoffset": savedOffset
        });
    }

    $('.visual .ctrl_btn .btn_pause').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .btn_play').show()
        pauseProgress(); // SVG progress 멈춤
    })

    $('.visual .ctrl_btn .btn_play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .btn_pause').show()
        resumeProgress(); // SVG progress 다시 시작
    })

    /* -------------------------
       슬라이드 변경 시 progress 정상 초기화
    ------------------------- */
    visual_swiper.on('slideChangeTransitionStart', function () {

            // 1) 모든 bullet progress 초기화
        $('.visual .paging .circle').each(function(){
            $(this).css({
                "animation": "none",
                "stroke-dashoffset": 270
            });
        });

        // 2) active bullet만 animation 재시작
        if (!paused) {
            $('.visual .paging .swiper-pagination-bullet-active .circle')
                .css("animation", "progress 4.8s linear forwards");
        }
    });
	
})//맨끝