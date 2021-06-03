$(document).ready(function(){
	
/*slider*/
		$('.main-content').slick({
	  infinite: false,
	  slidesToScroll: 1,
	  slidesToShow: 1,
	  arrows:true,
	  dots:false,
	  responsive: [
		  {
		  breakpoint: 700,
			settings: {
			swipe:false,
		}
	   },
	   {
		  breakpoint: 600,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
			dots:true,
			swipeToSlide:true,
		}
	   },
	  ] 
	});
		
		$('.teachers-container').slick({
	  infinite: true,
	  slidesToScroll: 4,
	  slidesToShow: 4,
	  arrows:true,
	  dots:true,
	  responsive: [
		{
		 breakpoint: 1360,
			settings: {
			arrows:false,
		  }
		},
		{
		 breakpoint: 1024,
			settings: {
			slidesToShow: 3,
			slidesToScroll: 3,
			arrows:false,
		  }
		},
		{
		  breakpoint: 690,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows:false,
		}
	   },
	   {
		  breakpoint: 530,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
			dots:true,
		}
	   },
	  ] 
	});
	
		$('.event-content').slick({
	  infinite: false,
	  slidesToScroll: 1,
	  slidesToShow: 2,
	  arrows:true,
	  dots:true,
	  responsive: [
        {
		 breakpoint: 1441,
			settings: {
			slidesToScroll: 1,
			slidesToShow: 1.7,
		  }
		},
		{
		 breakpoint: 1360,
			settings: {
			slidesToScroll: 1,
			slidesToShow: 1.5,
		  }
		},
		{
		  breakpoint: 690,
			settings: {
			infinite:false,
			slidesToShow: 1.3,
			slidesToScroll: 1,
		}
	   },
	   {
		  breakpoint: 540,
			settings: {
			infinite:false,
			slidesToShow: 1.17,
			slidesToScroll: 1,
			dots:true,
			arrows:true,
		}
	   },
	  ] 
	});
	
	
		$('.news-content').slick({
	  infinite: false,
	  slidesToScroll: 3,
	  slidesToShow: 3,
	  arrows:true,
	  dots:false,
	  responsive: [
		{
		 breakpoint: 1360,
			settings: {
		  }
		},
		{
		 breakpoint: 1024,
			settings: {
			slidesToShow: 2.3,
			slidesToScroll: 2,
		  }
		},
		{
		  breakpoint: 690,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
		}
	   },
	    {
		  breakpoint: 590,
			settings: {
			slidesToShow: 1.5,
			slidesToScroll: 1,
		}
	   },
	   {
		  breakpoint: 530,
			settings: {
			slidesToShow: 1.16,
			slidesToScroll: 1,
		}
	   },
	  ] 
	});
	
		$('.video-container').slick({
	  infinite: false,
	  slidesToScroll: 2,
	  slidesToShow: 2.5,
	  arrows:false,
		responsive: [
		{
		 breakpoint: 750,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows:false,
		  }
		},
		{
		 breakpoint: 610,
			settings: {
			slidesToShow: 1.5,
			slidesToScroll: 1,
			arrows:false,
		  }
		},
		{
		 breakpoint: 450,
			settings: {
			slidesToShow: 1.2,
			slidesToScroll: 1,
			arrows:false,
		  }
		},
		{
		 breakpoint: 370,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
		  }
		},
	  ] 
	});
  
    	$('.Teachers-content-tablet-mobile').slick({
	  infinite: false,
	  slidesToScroll: 2,
	  slidesToShow: 2,
	  arrows:false,
      dots:true,
		responsive: [
		{
		 breakpoint: 750,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows:false,
		  }
		},
		{
		 breakpoint: 670,
			settings: {
			slidesToShow: 1.5,
			slidesToScroll: 1,
			arrows:false,
		  }
		},
		{
		 breakpoint: 450,
			settings: {
			slidesToShow: 1.1,
			slidesToScroll: 1,
			arrows:false,
		  }
		},
		{
		 breakpoint: 370,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
		  }
		},
	  ] 
	});
  
    $('.coment-content').slick({
	  infinite: false,
	  slidesToScroll: 3,
	  slidesToShow: 3,
	  arrows:true,
      dots:false,
		responsive: [
        {
		 breakpoint: 1441,
			settings: {
			slidesToShow: 2.57,
			slidesToScroll: 2,
		    arrows:true,
            dots:false
		  }
		}, 
		{
		 breakpoint: 1024,
			settings: {
			slidesToShow: 2,
			slidesToScroll: 2,
			arrows:false,
            dots:true,
		  }
		},
		{
		 breakpoint: 670,
			settings: {
			slidesToShow: 1.8,
			slidesToScroll: 1,
			arrows:false,
            dots:true,
		  }
		},
		{
		 breakpoint: 450,
			settings: {
			slidesToShow: 1.2,
			slidesToScroll: 1,
			arrows:false,
             dots:true,
		  }
		},
		{
		 breakpoint: 370,
			settings: {
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows:false,
            dots:true,
		  }
		},
	  ] 
	});
	
/* button */
  
    $('.burger-container').click(function() {
		$('.header-navigation-burger').toggle('300');
        $('.header').toggleClass('mobile');
        $('.main').toggleClass('mobile');
        $('.burger-container:hover').toggleClass('mobile');
        $('body').toggleClass('mobile');
    });
  
//     if( window.window.screen.width >= 1024 && $('.header').hasClass('mobile')){
//      $(this).removeClass('mobile');
//     } else {
//     }
	
	$('.navigator-item').click(function(){
	event.preventDefault();
      
      if (!$(this).hasClass('clicked')) {
    $('.hidden').removeClass('active');
    $(this).parent().addClass('active');
    $(this).addClass('clicked'); 
    
        
  } else {
    
    $('.navigator-item').removeClass('clicked');
    $('.hidden').removeClass('active');
  }
	});
  
    $('.main, .Training_Programs, .student, .support-study, .Upcoming_events,.news, .video-galery, .photo-galery, footer, .about-us-menu-item, .burger-container, section').click(function(){
       $('.navigator-item').removeClass('clicked');
       $('.navigator-item').parent().removeClass('active');
	});
  
	
	$('.question-button').on('click', function() {
      $(this).parent().parent().find('.question-text').slideToggle('normal','swing');
      $(this).toggleClass('active')
	});
  
  
    $('.input-nummer').on('click', function() {
      $('.payment-sum-radio').find('input').prop('checked',false);
    });

  
      class Menu {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this);
    }
        
     year1() {
    $('.training-menu-block').slideUp();
     $('.training-program-content .training-menu-block:nth-child(2)').slideDown();
    }

    year2() {
    $('.training-menu-block').slideUp();
     $('.training-program-content .training-menu-block:nth-child(3)').slideDown();
    }

    year3() {
    $('.training-menu-block').slideUp();
     $('.training-program-content .training-menu-block:nth-child(4)').slideDown();
    }
    
     year4() {
    $('.training-menu-block').slideUp();
     $('.training-program-content .training-menu-block:last-child').slideDown();
    }

    onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }
  
  $('.training-menu-block').find('li').on('click', function() {
	$(this).find('p').slideToggle('normal','swing');
	$(this).toggleClass('active');
	});

 });

  $('.progect-progres-done').click(function() {
    event.preventDefault();
    
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    $('.progect-item-container.done').show();
    $('.progect-item-container.proces').hide();
  });
                                   
    $('.progect-progres-proces').click(function() {
      event.preventDefault();
    
  $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
    $('.progect-item-container.proces').show();
    $('.progect-item-container.done').hide();
  });

 $('.blog-filter').find('a').click(function() {
    event.preventDefault();
   
    $('.blog-filter').find('a').removeClass('active');
    $(this).addClass('active');
  });	

  /*form-payment*/

   $(".payment").find('a').click(function(){
    event.preventDefault();
     
    $(".payment").find('a').removeClass('active'); 
     
    if($(this).hasClass('lipppay')){
    $(this).addClass('active'); 
    $(".payment-form").attr("action", 'http//lippay.com');
      $(".payment-submit").attr("value", 'Оплатити через lipppay');
    }
     
    if($(this).hasClass('monobank')){
    $(this).addClass('active'); 
    $(".payment-form").attr("action", 'http//monobank.com');
    $(".payment-submit").attr("value", 'Оплатити через monobank');
    }
     
       if($(this).hasClass('Paypal')){
    $(this).addClass('active'); 
    $(".payment-form").attr("action", 'http//Paypal.com');
    $(".payment-submit").attr("value", 'Оплатити через Paypal');
    }
     
       if($(this).hasClass('Patreon')){
    $(this).addClass('active'); 
    $(".payment-form").attr("action", 'Patreon');
      $(".payment-submit").attr("value", 'Оплатити через Patreon');
    }
   
   });

    $('[data-blog-for]').click(function(){
      event.preventDefault();
      
      var target = $(this).data('blog-for');
      $(this).closest('.blog-container').find('[data-blog-target]').hide();
       $(this).closest('.blog-container').find('[data-blog-target="'+target+'"]').show();
    });

    $('[data-support-for]').click(function(){
      event.preventDefault();
      
      var target = $(this).data('support-for');
      $(this).closest('.support-container').find('[data-support-target]').hide();
       $(this).closest('.support-container').find('[data-support-target="'+target+'"]').show();
      $('.support-item').removeClass('active');
      $(this).addClass('active');
    });

    $('[data-photo-for]').click(function(){
      event.preventDefault();
      
      var target = $(this).data('photo-for');
      $(this).closest('.photo-galery-container').find('[data-photo-target]').hide();
       $(this).closest('.photo-galery-container').find('[data-photo-target="'+target+'"]').show();
    });

     $('[data-teachers-for]').click(function(){
      event.preventDefault();
      
      var target = $(this).data('teachers-for');
      $(this).closest('.teachers-home').find('[data-teachers-target]').hide();
       $(this).closest('.teachers-home').find('[data-teachers-target="'+target+'"]').show();
    });


    $('.triger-icon').click(function() {
      $('.triger-icon').removeClass('active');
      $(this).addClass('active');
      $('.triger-text').removeClass('active');
      if($('.triger-icon.month').hasClass('active')){
        $('.triger-text.month').addClass('active');
      }
      else{
        $('.triger-text.year').addClass('active');
      }
    });

	/*logo-scroll*/
	$(function(){
	 var header=$("#head"),
	 introH = $("#head").innerHeight(),
	 scrollOffset =$(window).scrollTop();

	 /* Smooth scroll */
	 $("[data-scroll]").on("click", function(event) {
	   event.preventDefault();
	   var blockid = $(this).data("scroll"),
	   blockOffset = $(blockid).offset().top-115;

	 $("html, body").animate({
	   scrollTop: blockOffset},500);
	 });
		
		//popup-video
    $("a.popup-buttons-video").click(function (e) {
        e.preventDefault();
        $(".popap-video").animate(300, function () {
            $("body").addClass("popup-active-overflow");
            $(this).addClass("popup-active").animate({ opacity: 1 }, 300);
        });

        var iframe_src = $('.popap-video input.video_src').val();
        console.log(iframe_src);
        var iframe = $('.popap-video.popup-active iframe');
        iframe.attr('src', iframe_src);
        iframe.attr('id', 'yt_video');

        if($(window).width() <= 768){
            youTubeFullscreen(iframe);
        }
    });
    $('.popap-video .popup-close').on('click', function(){

        $('.popap-video').removeClass('popup-active');
        $('.popap-video iframe').attr('src', '');
		$("body").removeClass("popup-active-overflow");

    });
    $('.popup-active-overflow .video_overlay').on('click', function(){
        $('.popap-video').removeClass('popup-active');
        $('body').removeClass('popup-active-overflow');
        $('.popap-video iframe').attr('src', '');
        console.log('click');
    });
    $('.video_overlay').on('click', function(){
        console.log('click');
        $('.popap-video iframe').attr('src', '');
        $('body').removeClass('popup-active-overflow');
        $('.popap-video.popup-active').removeClass('popup-active');
    });
    //popup-close
    $(".popup-close")
        .click(function () {
            $(".popup-block").animate({ opacity: 0 }, 300, function () {
                $(this).removeClass("popup-active");
                $("body").removeClass("popup-active-overflow");
                $(".popup-block .popup-video-content").empty();
            });
        })
        .children()
        .click(function (e) {
            e.stopPropagation();
      });
      
		
});





	
	

	













