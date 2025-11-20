$(document).ready(function(){
    //시작 :: 디바이스 상태 체크
    let mobile_size = 1024 //모바일 메뉴 시작 사이즈
    let window_w //브라우저 넓이
    let device_status //현재 pc인지 mobile인지 구분하는 값

    function device_chk(){
        window_w = $(window).width()
        if(window_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        // console.log(device_status)
    }
    //끝 :: 디바이스 상태 체크


    //시작 :: 메뉴 열기 & 닫기
    $('header .gnb .gnb_open').on('click focusin', function(){
        if(device_status == 'pc'){
            $('header').addClass('menu_pc')
            $('html').addClass('no-scroll');
        }
    })
    $('header .gnb .gnb_bg').on('mouseenter', function(){
        $('header').removeClass('menu_pc')
        $('html').removeClass('no-scroll');
    })
    $('header .util .lang').on('focusin', function(){
        $('header').removeClass('menu_pc')
        $('html').removeClass('no-scroll');
    })

    device_chk() //문서가 로딩되었을때 1번실행
    $(window).resize(function(){
        device_chk() //브라우저가 리사이즈 할때마다 1번씩 실행
    })

    $('header .gnb .gnb_wrap .gnb_close, header .gnb .gnb_bg').on('click', function(){
        $('header').removeClass('menu_pc')
        $('html').removeClass('no-scroll');
    })
    $('header .gnb .gnb_wrap .gnb_close').on('focusout', function(){
        $('header').removeClass('menu_pc')
        $('html').removeClass('no-scroll');
    })
    //시작 :: 메뉴 열기 & 닫기


    //시작 :: header fixed

     //스크롤을 내리면 header fixed 
    let scrolling = $(window).scrollTop() //현재 스크롤 된값
    let prev_scroll //이전에 스크롤된값
    let diff_scroll //차이값
    function scroll_chk(){
        prev_scroll = scrolling
        scrolling = $(window).scrollTop()
        diff_scroll = prev_scroll - scrolling
        //console.log(diff_scroll)
        if(diff_scroll < 0){ //위로 스크롤 
            $('header').addClass('up')
            //console.log('if')
        }else{ //아래로 스크롤
            $('header').removeClass('up')
            //console.log('else')
        }
        if(scrolling > 0){ //스크롤 내림
            $('header').addClass('fixed')
        }else{ //0이거나 0보다 작은경우 (fixed제거)
            $('header').removeClass('fixed')
        }
    }
    scroll_chk() //문서가 로딩되고 1번 실행
    $(window).scroll(function(){
        scroll_chk() //스크롤 할때마다 실행
    })

    //끝 :: header fixed

    
	// 시작 :: TOP 버튼
	$('footer .top').on('click', function(){
		// $(window).scrollTop(0)
		$('html, body').animate({
			scrollTop : 0
		}, 300)
	})

	//끝 :: TOP 버튼


})//맨끝