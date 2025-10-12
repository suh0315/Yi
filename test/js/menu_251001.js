$(document).ready(function(){

    /* 
        메뉴에 마우스 오버하면 header menu_over 클래스 부여
        header 흰색 배경에서 커서가 밖으로 나가면 header menu_over 클래스 삭제
     */
    $('header .gnb').on('mouseenter', function(){
        // console.log('qwer')
        $('header').addClass('menu_over')
    })
    $('header').on('mouseleave', function(){
        // console.log('asdf')
        $('header').removeClass('menu_over')
    })

    /*
        이벤트 대상 > header .gnb .gnb_wrap ul.depth_1 > li
        결론 : 1. 1차 메뉴 li에 over 클래스 부여
                   header .gnb .gnb_wrap ul.depth_1 > li
               2. 이 전에 오버 했던 메뉴 li에서 over 클래스 제거
    */
    $('header .gnb .gnb_wrap ul.depth_1 > li').on('mouseenter', function(){
        $(this).addClass('over')
    })
    $('header .gnb .gnb_wrap ul.depth_1 > li').on('mouseleave', function(){
        $(this).removeClass('over')
    })
    /* 
        조건
        닫힌 메뉴를 클릭하면 열림 (open 클래스 부여)
            --> 다른 열린 메뉴가 있다면 닫음
        열린 메뉴를 클릭하면 닫힘 (open 클래스 제거)
            --> 열린 메뉴와 닫힌 메뉴를 open 클래스 유무로 판별
        결론
        header .gnb .gnb_wrap ul.depth_1 > li에 open 클래스 부여
         */
    $('header .gnb .gnb_wrap ul.depth_1 > li').on('click', function(){
        let open_true = $(this).hasClass('open')
        console.log(open_true)
        if(open_true == true){ //열려있다면
            $(this).removeClass('open')
        }else{ //닫혀있다면
            $('header .gnb .gnb_wrap ul.depth_1 > li').removeClass('open')
            $(this).addClass('open')
        }        
    })

    /*
        header .gnb .gnb_open을 클릭하면 메뉴가 열림
                    header에 menu_open 클래스 부여
        header .gnb .gnb_close를 클릭하면 메뉴가 닫힘
                    header에 menu_open 클래스 삭제
    */
    $('header .gnb .gnb_open').on('click', function(){
        $('header').addClass('menu_open')
    })
    $('header .gnb .gnb_close').on('click', function(){
        $('header').removeClass('menu_open')
    })

})//document