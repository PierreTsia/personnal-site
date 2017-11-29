(function($) {
  "use strict";

// Document ready

$(document).ready(function(){

// Sticky nav

var header = $('.main-nav'),
    pos = header.offset();

$(window).scroll(function(){
	if($(this).scrollTop() > pos.top-20 && header.hasClass('default')){
		header.fadeOut('fast', function(){
			$(this).removeClass('default').addClass('switched-header').slideDown(200);
		});
	}else if($(this).scrollTop() <= pos.top-20 && header.hasClass('switched-header')){
		header.slideUp(200, function(){
		$(this).removeClass('switched-header').addClass('default').fadeIn(200);
		});
	}
});

// Section scroll 

$('a.scroll').smoothScroll({
    speed: 800,
    offset: -64
});

// Site slider 

$("#client-carousel").owlCarousel({
    items : 6,
    itemsDesktop : [1199,4],
    itemsDesktopSmall : [979,4],
    itemsTablet: [768,3],
    itemsTabletSmall: [550,3],
    itemsMobile : [480,2],
	pagination:false,
	autoPlay:true
});

$("#block-slider").owlCarousel({
    navigation : false,
    slideSpeed : 300,
    paginationSpeed : 400,      
    responsiveRefreshRate : 200,
    responsiveBaseWidth: window,
    pagination: false,
    singleItem: true,
    navigation:true,
    navigationText: ["<span class='icon-left-open-big'></span>","<span class='icon-right-open-big'></span>"]  
});

// Background image setup
 
var backgroundImage = $(".block-background-image");
for(var i = 0; i < backgroundImage.length; i++){
   	if (backgroundImage.eq(i).attr("data-background")){
	 	backgroundImage.eq(i).css("background-image", "url(" + backgroundImage.eq(i).data("background") + ")");
	}
}

//particles 

/* particlesJS('particles',

{
  "particles": {
	"number": {
	  "value": 80,
	  "density": {
		"enable": true,
		"value_area": 800
	  }
	},
	"color": {
	  "value": "#ffffff"
	},
	"shape": {
	  "type": "circle",
	  "stroke": {
		"width": 0,
		"color": "#000000"
	  },
	  "polygon": {
		"nb_sides": 5
	  },
	  "image": {
		"src": "img/github.svg",
		"width": 100,
		"height": 100
	  }
	},
	"opacity": {
	  "value": 0.5,
	  "random": false,
	  "anim": {
		"enable": false,
		"speed": 1,
		"opacity_min": 0.1,
		"sync": false
	  }
	},
	"size": {
	  "value": 5,
	  "random": true,
	  "anim": {
		"enable": false,
		"speed": 40,
		"size_min": 0.1,
		"sync": false
	  }
	},
	"line_linked": {
	  "enable": true,
	  "distance": 150,
	  "color": "#ffffff",
	  "opacity": 0.4,
	  "width": 1
	},
	"move": {
	  "enable": true,
	  "speed": 6,
	  "direction": "none",
	  "random": false,
	  "straight": false,
	  "out_mode": "out",
	  "attract": {
		"enable": false,
		"rotateX": 600,
		"rotateY": 1200
	  }
	}
  },
  "interactivity": {
	"detect_on": "canvas",
	"events": {
	  "onhover": {
		"enable": true,
		"mode": "repulse"
	  },
	  "onclick": {
		"enable": true,
		"mode": "push"
	  },
	  "resize": true
	},
	"modes": {
	  "grab": {
		"distance": 400,
		"line_linked": {
		  "opacity": 1
		}
	  },
	  "bubble": {
		"distance": 400,
		"size": 40,
		"duration": 2,
		"opacity": 8,
		"speed": 3
	  },
	  "repulse": {
		"distance": 200
	  },
	  "push": {
		"particles_nb": 4
	  },
	  "remove": {
		"particles_nb": 2
	  }
	}
  },
  "retina_detect": true,
  "config_demo": {
	"hide_card": false,
	"background_color": "#b61924",
	"background_image": "",
	"background_position": "",
	"background_repeat": "no-repeat",
	"background_size": "contain"
  }
}

); */

//Portfolio setup 

$('.popup').magnificPopup({
	type: 'image',
	fixedContentPos: false,
	fixedBgPos: false,
	mainClass: 'mfp-no-margins mfp-with-zoom',
	image: {
		verticalFit: true
	},
	zoom: {
		enabled: true,
		duration: 300
	}
});

var blockWorks = $('.block-works');
$('.popup-youtube, .popup-vimeo').magnificPopup({
	disableOn: 700,
	type: 'iframe',
	mainClass: 'mfp-fade',
	removalDelay: 160,
	preloader: false,
	fixedContentPos: false
});
				

$('.filter ').on("click", "li a",function(){
	$(this).addClass('active');
	$(this).parent().siblings().find('a').removeClass('active');
    var filters = $(this).attr('data-filter');
    $(this).closest(blockWorks).find('.item').removeClass('disable');

    if (filters !== 'all') {
       var selected =  $(this).closest(blockWorks).find('.item');
        for(var i = 0; i < selected.length; i++){
        if (!selected.eq(i).hasClass(filters)) {
           selected.eq(i).addClass('disable');
		}
    }	
}
   
   return false;
});

// Search input
	
$('.search-form i').on("click", function(){
	$(this).closest('.search-form').find('input[type="text"]').focus();
	if($(this).closest('.search-form').find('input[type="text"]').val()){
		$(this).closest('.search-form').find('input[type="submit"]').trigger('click');
	}
});
		
// Form validation 

var inputName = $('input#name');
var inputEmail = $('input#email');
var textArea = $('textarea#message');
var contactForm = $('.contact-form');


$('.submit').on("click", function(){

	inputName.removeClass("errorForm");
	textArea.removeClass("errorForm");
	inputEmail.removeClass("errorForm");
	
	var error = false; 
	var name = inputName.val(); 
	if(name == "" || name == " ") { 
		error = true; 
		inputName.addClass("errorForm");
	}
	
	
	var msg = textArea.val(); 
	if(msg == "" || msg == " ") {
		error = true;
		textArea.addClass("errorForm");
			
	}
	
	var email_compare = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i; 
	var email = inputEmail.val(); 
	if (email == "" || email == " ") { 
		inputEmail.addClass("errorForm");
		error = true;
	}else if (!email_compare.test(email)) { 
		inputEmail.addClass("errorForm");
		error = true;
	}

	if(error == true) {
		return false;
	}

	var data_string = contactForm.serialize(); 
	
	$.ajax({
		type: "POST",
		url: contactForm.attr('action'),
		data: data_string,
		
		success: function(message) {
				if(message == 'SENDING'){
					$('#success').fadeIn('slow');
				}
				else{
					$('#error').fadeIn('slow');
				}
					}
			
	});

	return false; 
});
		
// Team hover 

var thumbs = $('.thumbs');
var thumbSpan = $('.thumbs li a span');
var thumbsLink = $('.thumbs li a ');
thumbSpan.css({ opacity: 0 });

thumbsLink.on('mouseenter', function(){
	$(this).children('span ').stop().animate({ opacity: 1 }, 'slow');
	}, function(){ 
	$(this).children('span ').stop().animate({ opacity: 0 }, 'slow'); 
});


for(var i = 0; i < thumbs.length; i++){
	
	thumbsLink.on('click', function(){
	return false;
	});
		
	thumbsLink.on('mouseenter', function(){
	if(thumbsLink.hasClass('t-active')){
		thumbSpan.stop().animate({ opacity: 0 }, 'slow'); 
		thumbsLink.removeClass('t-active');
	}
			
	$(this).addClass('t-active');
	$('.testi-details .td').hide();
	$($(this).attr('href')).show();
	});
}

// Facts 

var count = $('.inner-fact .count');
$('.fact-list').appear(function() {
	for(var i = 0; i < count.length; i++){
	var counter = count.eq(i).html();
	count.eq(i).countTo({
		from: 0,
		to: counter,
		speed: 2000,
		refreshInterval: 10,
		});
	
	}

});


// To the top handler

$().UItoTop({ easingType: 'easeOutQuart' });

// Mobile menu 

var mobileBtn = $('.mobile-btn');
var nav = $('ul.menu');
var navHeight= nav.height();
var mobile = $('ul.menu li a');

$(mobileBtn).on("click", function(){
	nav.slideToggle();
	mobile.addClass('mobile');
	return false;

});

$(window).resize(function(){
	var w = $(window).width();
	if(w > 320 && nav.is(':hidden')) {
		nav.removeAttr('style');
		mobile.removeClass('mobile');
	}

});

nav.on("click", function(e){
	if ($(e.target).is('a') &&  $(e.target).hasClass('mobile')) {
        nav.slideToggle();
        mobile.removeClass('mobile');
        
	}
		
});


// Windows load

$(window).load(function() { 

// Site loader 

$(".loader-inner").fadeOut(); 
$(".loader").delay(200).fadeOut("slow"); 
	
// Masonry items
var $container = $('.row.masonry');  
	$container.masonry({
	itemSelector : '.resume-boxe.masonry, .item-block.masonry'
});
	
});


});

})(jQuery);