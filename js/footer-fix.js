$(document).ready(function(){

	function footer_fix()
	{
		if($(window).height() > 900)
		{
			$('.footer').addClass('footer-fix');
		}
		else
		{
			$('.footer').removeClass('footer-fix');
		}
        
        console.log($(window).height());
	}
 
	footer_fix();

	$(window).resize(function(){
		footer_fix();
	});

});
