/*=========================================================
Author       : Bestwebcreator.
Template Name: ATZ Shop - Online Shopping Store HTML Template
Version      : 1.1
==============================================================*/

/*===================================*
PAGE JS
*===================================*/

(function($) {
	'use strict';
	
	/*===================================*
	01. LOADING JS
	/*===================================*/
	$(window).on('load', function() {
		var preLoder = $(".preloader");
		preLoder.delay(700).fadeOut(500);
	});

	/*===================================*
	02. SMOOTH SCROLLING JS
	*===================================*/
	// Select all links with hashes
    $('a.page-scroll').on('click', function(event) {
        // On-page links
        if ( location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname ) {
          // Figure out element to scroll to
          var target = $(this.hash),
              speed= $(this).data("speed") || 800;
              target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top - 60
            }, speed);
          }
        }
    });
	
	/*===================================*
	03. MENU JS
	*===================================*/
	//Main navigation scroll spy for shadow
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

	    if (scroll >= 80) {
	        $('header').addClass('nav-fixed');
	    } else {
	        $('header').removeClass('nav-fixed');
	    }

	});
	
	//Show Hide dropdown-menu Main navigation 
	$( document ).ready( function () {
		$( '.dropdown-menu a.dropdown-toggler' ).on( 'click', function ( e ) {
			var $el = $( this );
			var $parent = $( this ).offsetParent( ".dropdown-menu" );
			if ( !$( this ).next().hasClass( 'show' ) ) {
				$( this ).parents( '.dropdown-menu' ).first().find( '.show' ).removeClass( "show" );
			}
			var $subMenu = $( this ).next( ".dropdown-menu" );
			$subMenu.toggleClass( 'show' );
			
			$( this ).parent( "li" ).toggleClass( 'show' );
	
			$( this ).parents( 'li.nav-item.dropdown.show' ).on( 'hidden.bs.dropdown', function ( e ) {
				$( '.dropdown-menu .show' ).removeClass( "show" );
			} );
			
			return false;
		} );
	} );
	
	
	//Hide Navbar Dropdown After Click On Links
	var navBar = $(".header_wrap");
	var navbarLinks = navBar.find(".navbar-collapse ul li a.page-scroll");

    $.each( navbarLinks, function( i, val ) {

      var navbarLink = $(this);

        navbarLink.on('click', function () {
          navBar.find(".navbar-collapse").collapse('hide');
		  $("header").removeClass("active");
        });

    });
	
	//Main navigation Active Class Add Remove
	$('.navbar-toggler').on('click', function() {
		$("header").toggleClass("active");
	});	
	//$(document).on("ready", function () {
//	if ($(window).width() > 991) {
//		$("header").removeClass("active");
//	}
//	$(window).on("resize", function () {
//	if ($(window).width() > 991) {
//			$("header").removeClass("active");
//		}
//	})
//	})

	/*===================================*
	05. SLIDER JS
	*===================================*/
	
	 $('.carousel_slide3').each( function() {
		var $carousel = $(this);
		$carousel.owlCarousel({
		dots : $carousel.data("dots"),
		loop : $carousel.data("loop"),
		margin: $carousel.data("margin"),
		autoHeight: true,
		rewind: $carousel.data("rewind"),
		autoplay : $carousel.data("autoplay"),
		nav: $carousel.data("nav"),
		navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
		autoplayTimeout : $carousel.data("autoplay-timeout"),
			responsive: {
	         0: {
	             items: 1,
	         },
	         380: {
	             items: 1,
	         },
			 540: {
				 items: 2,
			 },
	         1000: {
	             items: 3,
	         },
	         1199: {
	             items: 3
	         }
		   }
		});
	});
	 

	/*===================================*
	09. CONTACT FORM JS
	*===================================*/
	$("#submitButton").on("click", function(event) {
	    event.preventDefault();
	    var mydata = $("form").serialize();
	    $.ajax({
	        type: "POST",
	        dataType: "json",
	        url: "contact.php",
	        data: mydata,
	        success: function(data) {
	            if (data.type === "error") {
	                $("#alert-msg").removeClass("alert-msg-success");
	                $("#alert-msg").addClass("alert-msg-failure");
	            } else {
	                $("#alert-msg").addClass("alert-msg-success");
	                $("#alert-msg").removeClass("alert-msg-failure");
	                $("#first-name").val("Enter Name");
	                $("#email").val("Enter Email");
					$("#phone").val("Enter Phone Number");
	                $("#subject").val("Enter Subject");
	                $("#description").val("Enter Message");

	            }
	            $("#alert-msg").html(data.msg);
	            $("#alert-msg").show();
	        },
	        error: function(xhr, textStatus) {
	            alert(textStatus);
	        }
	    });
	});
	
	/*===================================*
	10. SCROLLUP JS
	*===================================*/
	$(window).scroll(function() {
		if ($(this).scrollTop() > 150) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});
	
	$(".scrollup").on('click', function (e) {
		e.preventDefault();
		$('html, body').animate({
			scrollTop: 0
		}, 600);
		return false;
	});
	
	/*===================================*
	14. BACKGROUND IMAGE JS
	*===================================*/
	/*data image src*/
	$(".background_bg").each(function() {
		var attr = $(this).attr('data-img-src');
		if (typeof attr !== typeof undefined && attr !== false) {
			$(this).css('background', 'url(' + attr + ') center center/cover');
		}
	});
	
	
	/*Demo js*/
	$( window ).on( "load", function() {
		document.onkeydown = function(e) {
			if(e.keyCode == 123) {
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)){
			 return false;
			}
			if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)){
			 return false;
			}
		
			if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)){
			 return false;
			}      
		 }
		 
		$("html").on("contextmenu",function(){
			return false;
		});
	});	
	
})(jQuery);