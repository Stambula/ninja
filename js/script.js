$(document).ready(function(){
        
    var isiPod = navigator.userAgent.match(/iPod/i) != null;
    var isIphone = navigator.userAgent.match(/iPhone/i) != null;
    var isAndroid = navigator.userAgent.match(/Android/i) != null;
    var mobileUserAgent = isIphone || isAndroid || isiPod;


    viewport = document.querySelector("meta[name=viewport]");
    if(mobileUserAgent)
    {
        viewport.setAttribute('content', 'width=640');
    }
    else
    {
        viewport.setAttribute('content', 'width=device-width');	
    }
    
    //alert( mobileUserAgent);
    //alert( $(document.querySelector("meta[name=viewport]")).attr('content'));


        // more link in top header
		$('.header_menu_item_link_more').click(function(){
			if($('.header_menu_item_link_bird').hasClass('header_menu_item_link_bird_rotate'))
			{
				$('.header_menu_item_link_bird').removeClass('header_menu_item_link_bird_rotate');
				$('.transparent_cover').hide();
			}
			else
			{
				$('.header_menu_item_link_bird').addClass('header_menu_item_link_bird_rotate');
				$('.transparent_cover').show();
			}

			//toggleBlackCurtain();
			$('.authorization, .login-content').hide();
			$('.header_menu_more').toggle();
		});



        // rounded button get started in top header
		$('.header_round_button_get_started').click(function(){
			/*if($('.header_round_button_get_started').hasClass('header_round_button_opened'))*/
			$('.authorization, .login-content').hide();
			addBlackCurtain();
			//toggleBlackCurtain();
			$('.header_menu_more, .login-content').hide();
			$('.authorization, .avtorization_cover').show();
		});





        // rounded button get started in top header
		$('.header_right_button_sign_in').click(function(){
			$('.authorization, .login-content').hide();
			//toggleBlackCurtain();
			addBlackCurtain();
			$('.header_menu_more, .login-content').hide();
			$('.login-content, .avtorization_cover').show();
		});



        // hide black div that cover all display
		$('.avtorization_cover').click(function(){
			$('.header_menu_more, .login-content, .authorization, .avtorization_cover').hide();
			toggleBlackCurtain();
		});



        // hide transparent div that cover all display
		$('.transparent_cover').click(function(){
			$('.header_menu_more, .login-content, .authorization, .avtorization_cover, .transparent_cover').hide();
			$('.header_menu_more').hide();
			$('.header_menu_item_link_bird').removeClass('header_menu_item_link_bird_rotate');
		});



        // close authorization popup
		$('.authorization_close').click(function(){
			$('.header_menu_more, .login-content, .authorization, .avtorization_cover').hide();
			toggleBlackCurtain();
		});





        // hide everything if ESC was pressed
		$(document).keyup(function(e) {
     
	    if (e.keyCode == 27) {
	    	$('.header_menu_more, .login-content, .authorization, .avtorization_cover').hide();
	    	$('.header_menu_item_link_bird').removeClass('header_menu_item_link_bird_rotate');
			
			if($('.header_round_button_get_started').hasClass('header_round_button_opened'))
			{
		    	toggleBlackCurtain();				
			}
	    }
		});




		function toggleBlackCurtain()
		{
			$('.header_round_button_get_started').toggleClass('header_round_button_opened');
			$('.header_right_button_sign_in').toggleClass('header_right_button_opened');
		}



		function addBlackCurtain()
		{
			$('.header_round_button_get_started').addClass('header_round_button_opened');
			$('.header_right_button_sign_in').addClass('header_right_button_opened');
		}

		function removeBlackCurain()
		{
			$('.header_round_button_get_started').removeClass('header_round_button_opened');
			$('.header_right_button_sign_in').removeClass('header_right_button_opened');			
		}

        function showFixHeader()
        {
            $('.header').addClass('header-fixed');
            $('.header_round_button_get_started').addClass('header_round_button_active');
            $('.header_right_button').addClass('header_right_button_active');

        }

        function hideFixHeader()
        {
            $('.header').removeClass('header-fixed');
            $('.header_round_button_get_started').removeClass('header_round_button_active');
            $('.header_right_button').removeClass('header_right_button_active');
        }

    var prevScrollPosition = 0;
    $(window).scroll(function(){

    	var animation_complete1 = 0;
    	var animation_complete2 = 0;
    	var scrollTop = $(this).scrollTop();

        // go up
        if(prevScrollPosition < scrollTop)
        {
            hideFixHeader();
        }
        else
        {
            if(scrollTop > 1)
            {
                showFixHeader();
            }
            else
            {
                hideFixHeader();
            }
        }

        prevScrollPosition = scrollTop;


      	if((scrollTop > 400) && !animation_complete1)
      	{
      		$('.payment_services_animated').css('animation-play-state','running');
      		animation_complete1 = 1;
      	}


      	if((scrollTop > 800) && !animation_complete2)
      	{
      		$('.payment_tools_animated').css('animation-play-state','running');
      		animation_complete2 = 1;
      	}




      	//console.log($(this).scrollTop());
    });



    // enable ninja jump on feature page on tablets
    $('.features_top_banner_ninja').on('touchmove', function(){
        $(this).addClass('features_ninja_movetouch');
    });

    $('.features_top_banner_ninja').on('touchend', function(){
        $(this).removeClass('features_ninja_movetouch');
    });

    	 //mob menu-sandwich
	 $('.header-sandwich').click(function(){ $('.header_menu_sandwich_block').toggle() });

	 //features accardion
	 $('.tools_item_mob_arr').click(function(){ 
		$(this).next().next().toggle();
		$(this).toggleClass('tools_item_mob_arr_up');

	});


    
    
    var sliderData = [];
    sliderData[0] = {'title':'Hello world1', 'descr':'Aliquam ut sem ac ex hendrerit rutrum Vivamus elementum mi felis, posuere feugiat eros sodales non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Aliquam pharetra, justo a pellentesque sollicitudin.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Aliquam pharetra, justo a pellentesque sollicitudin.', 'image':'pics/slider-img.png', 'link':'l1'};
    sliderData[1] = {'title':'Hello world1', 'descr':'Aliquam ut sem ac ex hendrerit rutrum Vivamus elementum mi felis, posuere feugiat eros sodales non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Aliquam pharetra, justo a pellentesque sollicitudin.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Aliquam pharetra, justo a pellentesque sollicitudin.', 'image':'pics/slider-img2.png', 'link':'l2'};
    sliderData[2] = {'title':'Hello world1', 'descr':'Aliquam ut sem ac ex hendrerit rutrum Vivamus elementum mi felis, posuere feugiat eros sodales non. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Aliquam pharetra, justo a pellentesque sollicitudin.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Aliquam pharetra, justo a pellentesque sollicitudin.', 'image':'pics/slider-img3.png', 'link':'l3'};
        
    // attach slider controls
    var slider = examplesSlider(sliderData);

    

});

			//placeholder gone on click
			$(document).ready(function () {
			 $('input,textarea').focus(function(){
			   $(this).data('placeholder',$(this).attr('placeholder'))
			   $(this).attr('placeholder','');
			 });
			 $('input,textarea').blur(function(){
			   $(this).attr('placeholder',$(this).data('placeholder'));
			 });
			 });


	//header-fixed scroll
	    $(window).scroll(function(){
		$('.header-fixed').css('left',-$(window).scrollLeft());
		});



    function examplesSlider(sliderData)
    {
        var self = this;
        this.sliderData = sliderData;
        this.currentSlide = 0;
        
        //console.log(this.sliderData[this.currentSlide]['title']);
        
        renderSlide(this.currentSlide);
        
        $('.examples_arr_right').click(function(){
            nextSlide();
        });

        $('.examples_arr_left').click(function(){
            prevSlide();
        });
        
        function nextSlide()
        {
            if((this.sliderData.length-1) == this.currentSlide)
            {
                this.currentSlide = 0;
            }
            else
            {
                this.currentSlide++;
            }
            
            renderSlide(this.currentSlide);
        }
        
        function prevSlide()
        {
            if(this.currentSlide === 0)
            {
                this.currentSlide = this.sliderData.length-1;
            }
            else
            {
                this.currentSlide--;
            }
            
            renderSlide(this.currentSlide);
        }

        
        function renderSlide(slideNum)
        {
            // 'title':'Hello world1', 'descr':'d1', 'image':'', 'link':'l1'
            var title = this.sliderData[slideNum]['title'];
            $('.examples_slider_title').html(title);
            
            var descr = this.sliderData[slideNum]['descr'];
            $('.examples_slider_text').html(descr);
            
            // examples_header
            // examples_slider_info1
            // examples_slider_title
            // examples_slider_text
            // examples_button
            
            var image = this.sliderData[slideNum]['image'];
            $('.examples_slider_info1').css('background-image','url('+image+')');
            
            
            var link = this.sliderData[slideNum]['link'];
            $('.examples_button').attr('href', link);
            
            
        }
        
    }
