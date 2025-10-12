$(document).ready(function(){

    /******************************************************************
     * 기준 1024 이하 모바일 / 1025 이상이면 pc
     * 브라우저의 넓이에 따라서 pc인지 모바일인지 구분
     *****************************************************************/

    let mobile_size = 1024
    let device_status // pc mobile 구분
    let win_w // 브라우저 넓이

    function size_chk(){ // 함수 정의
        win_w = $(window).width()
        if(win_w > mobile_size){
            device_status = 'pc'
        }else{
            device_status = 'mobile'
        }
        console.log(device_status)
    }
    size_chk() // 함수 호출 (문서가 로딩된 이후 1번 실행)
    $(window).resize(function(){ // 브라우저가 리사이즈 될 때마다 1번 실행
        size_chk() //함수 호출
    })

    /* 
    header .gnb .gnb_wrap ul.depth1 > li에 over 클래스 추가
    제한조건 - li중에서 오버한 한개만 over 클래스 부여
              메뉴에서 벗어나면 over 클래스 삭제 
    */
   $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseenter focusin', function(){
    if(device_status == 'pc'){
        $(this).addClass('over')
        // console.log('in')
    }
    
   })
   $('header .gnb .gnb_wrap ul.depth1 > li').on('mouseleave focusout', function(){
    $(this).removeClass('over')
    // console.log('out')
   })

   /* 
      header .gnb 오버 했을 때
      header에 menu_over 클래스 부여 
      제한조건 - 오버해서 생성된 흰색 배경 안에서 아웃 안됨 
    */
   $('header .gnb').on('mouseenter focusin', function(){
     if(device_status == 'pc'){
        $('header').addClass('menu_over')
     }
   })
    $('header').on('mouseleave', function(){
            $('header').removeClass('menu_over')
    })
    $('header .util .lang .lang_open').on('focusin', function(){
        /* 키보드 tab키로 이동할 때 header에 focusout으로 주면 메뉴 이동할 때마다 아웃됨. 
        메뉴 다음에 나오는 button이나 a한테 focus가 되면 메뉴를 닫는 것으로 함 */
        $('header').removeClass('menu_over')
    })

    /********************************************************************************
      * 모바일에서 1차 메뉴를 클릭하면 2차 메뉴 열기
      * 메뉴가 열려있으면 나 자신을 닫고
      * 메뉴가 닫혀있으면 열려있는 다른 메뉴는 닫고 나는 열기
      * --> 클릭 했을 때 메뉴가 열렸는지 닫혔는지 판단 1차 메뉴 li에 open 클래스 존재 여부
     ********************************************************************************/
   
  
        $('header .gnb .gnb_wrap ul.depth1 > li > a').on('click', function(e){
            if(device_status == 'mobile'){
                e.preventDefault();		/* a 태그의 href를 작동 시키지 않음 */
                if($(this).parent().hasClass('open') == true){
                    // 메뉴가 열려있는 상태
                    $(this).parent().removeClass('open')
                    $(this).next().slideUp()
                }else{
                    // 메뉴가 닫힌 상태
                    $('header .gnb .gnb_wrap ul.depth1 > li > a').removeClass('open')
                    $('header .gnb .gnb_wrap ul.depth1 > li > ul.depth2').slideUp()
                    $(this).parent().addClass('open')
                    $(this).next().slideDown()
                }
                // console.log('momo')
            }
	});

    /********************************************************************************
      * header .gnb .gnb_open 클릭 header에 menu_open 추가
      * header .gnb .gnb_close 클릭 header에 menu_open 제거
     ********************************************************************************/
   $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
        $('header .gnb .gnb_bg').show()
   })
   $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
        $('header .gnb .gnb_bg').hide()
   })
})//end