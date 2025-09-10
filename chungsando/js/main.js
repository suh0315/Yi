$(document).ready(function(){
    //console.log('success')
    /* 
        .tour .list ul li에 마우스를 올리면 
        그 개체에만 on 클래스 추가
     */
    $('.tour .list ul li').on('mouseenter', function(){
     //console.log('oo')
     $('.tour .list ul li').removeClass('on')
     $(this).addClass('on')
    })
    $('footer .right_area .family_site button.family_open').on('click', function(){
        //console.log('oo')
        $('footer .right_area .family_site').addClass('open')
    })
    $('footer .right_area .family_site button.family_close').on('click', function(){
        //console.log('oo')
        $('footer .right_area .family_site').removeClass('open')
    })
    
    /* footer .right_area .top을 클릭하면
        브라우저가 상단으로 스크롤 */
        $('footer .right_area .top').on('click', function(){
            var scrolling = $(window).scrollTop()
            console.log(scrolling)
            //$(window).scrollTop(0)
            $('html, body').animate({
                scrollTop : 0
            }, 500)
        })
})