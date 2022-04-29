jQuery(function() {
    var a = 0;
    var slide = $(".more");
    setInterval(function(){
        var prev = slide.eq(a);
        $(prev).addClass('on');
        $(prev).siblings().removeClass('on');
        a++;
        if(a==slide.length)(a=0);
    },2000);

    $(".more").click(function(event){
        event.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });
});