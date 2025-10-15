$(document).ready(function(){

    //visual swiper :: 시작
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

        // autoplay: {  /* 팝업 자동 실행 */
        //     delay: 5500,
        //     disableOnInteraction: true,
        // },

        //effect: "fade", /* fade 효과 */

        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */

    // 강사님 코드 ::
    //     // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
    // const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
    // $('.visual .paging .total').text(totalSlides); // 총 개수 표시

    // // 현재 슬라이드 번호 표시 함수
    // function updateCurrent() {
    //     let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
    //     $('.visual .paging .current').text(realIndex);
    // }

    // // 처음 로드 시 한번 실행
    // updateCurrent();

    // // 슬라이드 변경될 때마다 실행
    // visual_swiper.on('slideChange', function () {
    //     updateCurrent();
    // });

         on: {
                init: function () {
                    // 전체 슬라이드 개수 표시
                    const totalSlides = this.slides.length - this.loopedSlides * 2; // loop로 복제된 슬라이드 제외
                    $('.visual .ctrl_btn .paging .total').text(totalSlides);
                    // 현재 슬라이드 번호 표시
                    $('.visual .ctrl_btn .paging .current').text(this.realIndex + 1);
                },
                slideChange: function () {
                    // 슬라이드 변경될 때 현재 번호 업데이트
                    $('.visual .ctrl_btn .paging .current').text(this.realIndex + 1);
                }
            }
    });
    visual_swiper.autoplay.stop();  /* 일시정지 기능 */
    visual_swiper.autoplay.start();  /* 재생 기능 */
    //visual swiper :: 끝
})//end