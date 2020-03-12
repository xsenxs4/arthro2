$(document).ready(function() {
	
	/* scroll */
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});

	 /* timer */
    now = new Date();
    var perem = (24-now.getHours())*3600;
    $(".el-timer").attr("data-timer", perem);
    $(".el-timer").TimeCircles({
        "animation": "smooth",
        "bg_width": 0.8,
        "fg_width": 0.04,
        "circle_bg_color": "#e3e5e6",
        "time": {
            "Days": {
                "text": "Days",
                "color": "#ffcf10",
                "show": false
            },
            "Hours": {
                "text": "ore",
                "color": "#ffcf10",
                "show": true
            },
            "Minutes": {
                "text": "min",
                "color": "#ffcf10",
                "show": true
            },
            "Seconds": {
                "text": "sec",
                "color": "#ffcf10",
                "show": true
            }
        }
    }); 

});





$(window).on("load", function(){

	$(".gallery").owlCarousel({
		items: 1,
		loop: true,
		autoHeight: true,
		smartSpeed: 300,
		mouseDrag: true,
		pullDrag: true,
		dots: false,
		nav: true,
		navText: '',
		autoplay: true,
		autoplayTimeout: 1500
	});

	$('.reviews').owlCarousel({
		loop:true,
		margin:10,
		autoHeight: true,
		navText: "",
		dots: false,
		responsive:{
			0:{
				items:1,
				nav:true,
			},
			659:{
				items:2,
				nav:true,
			},
			980:{
				items:3,
				nav:false,
				loop:false
			}
		}
	});
	$('.feedback').click(function() {
        $('.popup-window').removeClass('hidden');
    });
    $('.close-popup').click(function() {
        $('.popup-window').addClass('hidden');
    });
    $('body').click(function(evt){
        if ((!evt.target.closest('.popup-window'))&&(!evt.target.closest('.feedback'))) {
            $('.popup-window').addClass('hidden');
        } 
    });

});


