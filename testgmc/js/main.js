$(document).ready(function () {
    // $(".bottomMenu").hide();

    $(window).scroll(function () {
        $('.bottomMenu').each(function (i) {
            // animate({'opacity':'1'},500)
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).css("opacity",1);
                console.log('in1');
            }
            else if (bottom_of_window < bottom_of_object) {
                $(this).css("opacity",0);

                // $(this).fadeOut(500);
                console.log('in2');
            }
        });

    });
});
