// templatemo 467 easy profile

// PRELOADER

$(window).load(function(){
    $('.preloader').delay(1000).fadeOut("slow"); // set duration in brackets    
});

// HOME BACKGROUND SLIDESHOW
$(function(){
    jQuery(document).ready(function() {
		$('body').backstretch([
	 		  "2.png",
			  "3.png",
			  "4.png"

			  
			
	 			], 	{duration: 3000, fade: 1000});
		});
})