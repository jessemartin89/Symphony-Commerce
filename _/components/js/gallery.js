jQuery(document).ready(function($) {
	$('.photo-container li').each(function(){
		if($(this).prev().length < 0){
			$(this).siblings('.gallery-controls .gskip_left img').addClass('no-prev');
		} else {
			$(this).siblings('.gallery-controls .gskip_left img').addClass('has-prev');
		} //check for prev

		if($(this).next().length < 0){
			$(this).find('.gallery-controls .gskip_right img').addClass('no-next');
		} else {
			$(this).find('.gallery-controls .gskip_right img').addClass('has-next');
		}//check for next
	})// each photo-container li
}); //document ready