$(document).ready(function(){

    //시작 :: device 체크 (메뉴상태)
    let mobile_size = 1024
    let window_w
    let device_status // pc, mobile 구분

    function device_chk(){ //함수 정의
        window_w = $(window).width()
        if(window_w > mobile_size){ // 브라우저 넓이가 1024보다 클 때 = pc버전일 때
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }

    device_chk() //html 로딩이 완료된 이 후 단 1번 실행
    $(window).resize(function(){ //브라우저가 리사이즈 될 때마다 실행
        device_chk()
    })

    //끝 :: device 체크 (메뉴상태)
    
    //시작 :: visual swiper 
    let visual_time = 5000
    const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싸는 요소의 class명 */
        autoplay: {  /* 팝업 자동 실행 */
            delay: visual_time,
            disableOnInteraction: true,
        },
        effect: "fade", /* fade 효과 */
        loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
    });
    
    
    $('.visual .ctrl_btn .stop').on('click', function(){
        visual_swiper.autoplay.stop();  /* 일시정지 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .play').css('display', 'flex')
        $('.visual .ctrl_btn .paging .bar span').stop() //animate 종료
    })
    $('.visual .ctrl_btn .play').on('click', function(){
        visual_swiper.autoplay.start();  /* 재생 기능 */
        $(this).hide()
        $('.visual .ctrl_btn .stop').css('display', 'flex')
        updateCurrent()
    })

    // 전체 슬라이드 개수 (loop 상태에서도 실제 슬라이드 개수만)
    const totalSlides = $('.visual .swiper .swiper-slide').not('.swiper-slide-duplicate').length;
    $('.visual .paging .total').text(totalSlides); // 총 개수 표시

    // 현재 슬라이드 번호 표시 함수
    function updateCurrent() {
        let realIndex = visual_swiper.realIndex + 1; // 실제 인덱스 (0부터 시작하므로 +1)
        $('.visual .paging .current').text(realIndex);
        //슬라이드가 교체되면 제일 먼저 넓이를 0으로 초기화 
        $('.visual .ctrl_btn .paging .bar span').stop() //animate 종료
        $('.visual .ctrl_btn .paging .bar span').width(0)
        $('.visual .ctrl_btn .paging .bar span').animate({
            width : '100%'
        }, visual_time)
    }

    // 처음 로드 시 한번 실행
    updateCurrent();

    // 슬라이드 변경될 때마다 실행
    visual_swiper.on('slideChange', function () {
        updateCurrent();
    });
    //끝 :: visual swiper

    // 시작 :: pc버전 메뉴 오버
    /* 메뉴에 마우스를 오버 했을 때, header에 menu_pc 클래스 부여 (header .gnb)
       마우스를 오버한 메뉴 1차 메뉴 li에 over 클래스 부여 (header .gnb .gnb_wrap ul.depth1 > li)
       **pc버전에서만** / 메뉴를 오버해서 바뀐 색상의 영역 내부에선 오버 유지, 밖에 나가면 아웃 */
    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
        if(device_status == 'pc'){
            // console.log('oveeeeerrrrrrrrr')
            $('header').addClass('menu_pc')
            $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
            $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
            $(this).addClass('over')
            $(this).find('.depth2').slideDown()
        }
    })

    $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave', function(){
        $(this).removeClass('over');
        $(this).find('.depth2').slideUp()
    });
    $('header').on('mouseleave', function(){
        $(this).removeClass('menu_pc');
    });

    $('header .util .search .sch_open').on('focusin', function(){
        $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('over')
    })
    $('header .util .mypage').on('focusout', function(){
        $('header').removeClass('menu_pc')
    })
    
    // 끝 :: pc버전 메뉴 오버

    // 시작 :: mobile 버전 1차 메뉴 클릭     
    /* 
        ＊닫힌 메뉴를 클릭하면 기존에 열려있던 다른 메뉴 닫고 선택 메뉴만 열기 (li open 클래스 부여)
        ＊열린 메뉴를 클릭하면 선택 메뉴만 닫고 끝남 (open 클래스 제거) 
        ＊열린 메뉴, 닫힌 메뉴를 구분하는 방법 -- open 클래스 존재 여부
        ＊1차 메뉴 a의 링크를 삭제
    */
    $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
        if(device_status == 'mobile'){
            e.preventDefault();
            if($(this).parent().hasClass('open') == true){ //열려있는 메뉴를 다시 클릭했을 떄
                $(this).parent().removeClass('open')
                $(this).next().slideUp() //2차메뉴를 슬라이드로 닫기
            }else{ //열려있지 않은 다른 메뉴를 클릭했을 때
                $('header .gnb .gnb_wrap ul.depth1 > li').removeClass('open') // 모든 li의 클래스 삭제
                $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp() //모든 2차 메뉴 닫기
                $(this).parent().addClass('open')
                $(this).next().slideDown() // 2차메뉴를 슬라이드로 열기
            }
        }

        
    })

    // 끝 :: mobile 버전 1차 메뉴 클릭 

})//맨끝