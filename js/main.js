$(".notChecked").click(function() { 
    $(".notChecked").removeClass("checked");
    $(this).addClass('checked');
});

// https://ru.stackoverflow.com/questions/1096239/Переключение-класса-в-jquery

$(".about_item").hover(function() {
    $(".about_item").removeClass("active");
    $(this).addClass("active");
    
});