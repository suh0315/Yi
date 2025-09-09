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
})