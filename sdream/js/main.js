
$(document).ready(function(){
    let win_w = $(window).width()
    let win_h = $(window).height()
    console.log(win_w, win_h)
    $('.test').text('넓이' + win_w + '높이' + win_h)
})//$(document).ready