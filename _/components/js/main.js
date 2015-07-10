jQuery(document).ready(function($) {
    // Inside of this function, $() will work as an alias for jQuery()
    // and other libraries also using $ will not be accessible under this shortcut
    $('input').bind('input propertychange', function() {
    	if($(this).val().length > 0){ //if email field has value
    		$('#mc_submit').addClass('orange');
    	} //if email field has value
    }); // #mc4wp_email blur

    $('li.contact a').click(function(e){
    	e.preventDefault();
        var text_top = $('.email-phone').css('top');
        var new_top = text_top == '-132px' ? '0' : '-132';
    	$('#contact-header').slideToggle();
        $('.email-phone').animate({
            top: new_top
        }, 400, function() {
        });
    }); //li a click

    $('#close-contact img').click(function(){
    	$('#contact-header').slideUp();
        $('.email-phone').animate({
            top: -132
        }, 400, function() {
        });

    }) //close contact

    $('.photo-container .bx-controls-direction').each(function(){
        if($(this).children('a.disabled').length > 1){
            if($(this).children('a.disabled').length < 2){
                $(this).children('.divider').removeClass('disabled');
            }
            // console.log($(this).closest());
            $(this).closest('.bx-controls').addClass('disabled-directions');
            $(this).closest('.bx-controls').removeClass('bx-has-controls-direction');
        } // .disabled ~ .disabled
    }) //each bx controls

    $('.bx-controls').each(function(){
        if($(this).hasClass('disabled-directions')){
          //console.log($(this));
            $(this).prev('.bxslider').find('.bx-caption').addClass('full-caption');
        }

    }); // each bx-control

    var jump=function(e)
    {
       if (e){
           e.preventDefault();
           var target = $(this).attr("href");
       }else{
           var target = location.hash;
       }

       $('html,body').animate(
       {
           scrollTop: $(target).offset().top
       },2000,function()
       {
           location.hash = target;
       });

    }

    $('html, body').hide();

    $(document).ready(function()
    {
        $('a[href^=#]').bind("click", jump);

        if (location.hash){
            setTimeout(function(){
                $('html, body').scrollTop(0).show();
                jump();
            }, 0);
        }else{
            $('html, body').show();
        }
    });

    $.preloadImages = function() {
        for (var i = 0; i < arguments.length; i++) {
            $("<img />").attr("src", arguments[i]);
        }
    }

    $.preloadImages("/wordpress/wp-content/themes/roundhex/images/home-animated-v2.gif","/wordpress/wp-content/themes/roundhex/images/about-animated.gif", "/wordpress/wp-content/themes/roundhex/images/contact-animated.gif", "/wordpress/wp-content/themes/roundhex/images/portfolio-animated.gif");
}); //jQuery(document).ready(function($) 