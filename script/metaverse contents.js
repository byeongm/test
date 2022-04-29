$(function(){


    $("#submenu li").click(function(e){
        e.preventDefault();
        $(this).addClass("on");
        $(this).siblings().removeClass("on");
    });

    var button1 = $('#submenu li').eq(0);
    var button2 = $('#submenu li').eq(1);
    var button3 = $('#submenu li').eq(2);
    var slide = $('#slide');

    button1.click(function(e){
        e.preventDefault();
        slide.animate({
            marginLeft : '0'
        },300);
    });
    button2.click(function(e){
        e.preventDefault();
        slide.animate({
            marginLeft : '-100vw'
        },300);
    });
    button3.click(function(e){
        e.preventDefault();
        slide.animate({
            marginLeft : '-200vw'
        },300);
    });

});