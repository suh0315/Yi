$(document).ready(function(){
    $('.box').on('mouseenter', function(){
        console.log('oooo')
        $('.box').addClass('on')
     })
     $('.box').on('mouseleave', function(){
        console.log('xxxx')
        $('.box').removeClass('on')
     })
})//$(document).ready

console.log('연결되었습니다.')