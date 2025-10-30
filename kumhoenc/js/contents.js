$(document).ready(function(){

    /*
        인터랙티브의시작은 영역이 브라우저 상단에 닿았을 때,
        영역의 상단값 보다 스크롤 된 값이 크면 - 인터랙티브 시작
        >> ceo_area_start < ceo_scroll
        종료는 영역의 하단이 브라우저 하단 위로 올라올 때
        >> ceo_area_end - ceo_win_h < ceo_scroll

        //영역 안에 들어가기 전 (시작 전)
        //영역에 들어갔을 때 (진행 중)
        //영역에서 벗어났을 때 (종료)

    */
    let ceo_length = $('.ctn_ceo').length
    function ceo_ani(){
        let ceo_win_h = $(window).height() // 브라우저의 높이
        let ceo_scroll = $(window).scrollTop() //현재 스크롤 된 값
        let ceo_area_name = $('.ctn_ceo .ceo_head')// 선택자
        let ceo_obj_wrap = $('.ctn_ceo .ceo_head .ceo_photo') //애니메이션 대상
        let ceo_area_start = ceo_area_name.offset().top// 시작 위치 (제일 위에서부터 계산한)
        let ceo_area_end = ceo_area_start + ceo_area_name.height() - ceo_win_h// 끝 위치
        let ceo_total = ceo_area_end - ceo_area_start //전체 스크롤 값
        let ceo_diff //진행 중 이후에 스크롤 된 값
        let ceo_per //스크롤 된 값의 %

        // console.log(ceo_total)
       
        /* 
            진행 중일 때, 몇 % 스크롤 했는지 계산해야함
            ex) 1000px 동안 인터랙티브를 할건데 100px 스크롤 함 >> 10%
            현재 스크롤 값(ceo_diff) x 100 / 전체값(ceo_total)
        */

        // console.log('시작', ceo_area_start, '종료', ceo_area_end, '스크롤', ceo_scroll)
        if(ceo_scroll > ceo_area_end){
            // console.log('end')
            ceo_obj_wrap.attr('data-status', 'end')
            ceo_per = 100
        }else if(ceo_scroll < ceo_area_start){
            // console.log('start')
            ceo_obj_wrap.attr('data-status', 'start')
            ceo_per = 0
        }else{
            // console.log('-ing')
            ceo_obj_wrap.attr('data-status', 'ing')
            ceo_diff = ceo_scroll - ceo_area_start
            ceo_per = ceo_diff * 100 / ceo_total
            // console.log(ceo_diff, ceo_total, ceo_per)
        }
        console.log(ceo_per)
    }
    if(ceo_length > 0){
        ceo_ani() //브라우저가 로딩되었을 때 단 한번
    }
    $(window).scroll(function(){
        if(ceo_length > 0){
            ceo_ani() //브라우저가 로딩되었을 때 단 한번
        }
    })
})//끝