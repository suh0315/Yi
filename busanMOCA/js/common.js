$(document).ready(function(){
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
            //console.log('if냐?')
        }else{ //아래로 스크롤
            $('header').removeClass('up')
            //console.log('else니?')
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

})//맨끝