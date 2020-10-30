'use strict';
$(function() { 	
	var catalog = $('[data-slick-catalog]');
	var dataPrevArrow = $('[data-slick-catalog]').data('slick-prev');
	var dataNextArrow = $('[data-slick-catalog]').data('slick-next');
	var catalog_card = $('[data-slick-catalog-card]');
	var catalog_card_nav = $('[data-slick-catalog-card-nav]');
	var catalog_card_table = $('[data-slick-catalog-card-table]');

	//old		
	var gallery = $('[data-slider-slick="slick-gallery"]');		
	var partners = $('[data-slider-slick="slick-partners"]');		
	var edu = $('[data-slider-slick="slick-edu"]');	
	var CMS__TPL_PATH = '/wp-content/themes/azbn7theme';  
	//var CMS__TPL_PATH = '/tpl';  
	var CMS__TPL_PATH = '';  
	//local
	var prevArrow = '<button type="button" class="slick-btn  is--prev  is--bg"><span class="sr-only">Предыдущий слайд</span></button>';
	var nextArrow = '<button type="button" class="slick-btn  is--next  is--bg"><span class="sr-only">Следующий слайд</span></button>';

	var count = $('.slick-count');
    

   	catalog.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
          var i = (currentSlide ? currentSlide : 0) + 1;
          //if (i.length > 0) {
	          //$(this).find(count).html('<span>'+i + '</span><span>/</span><span>' + slick.slideCount+'</span>');
	          $(this).find(count).html('<span>'+i + '</span><span> / </span><span>' + slick.$dots[0].children.length+'</span>');
	      //}
    });
    $(".section__section").each(function(){
    	$('[data-slick-catalog]', $(this)).slick({
	     	slide: '.card__item',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			dots: true,
			//dots: false,
			autoplay: false,		
			variableWidth: true,
			infinite: false,
			prevArrow: $(this).find('.slick-btn.is--prev'),
			nextArrow: $(this).find('.slick-btn.is--next'),
			responsive: [	
			    {
					breakpoint: 768,
					settings: {
						arrows: false,
					}
			    }
			]
	    });
	    /*$('[data-slick-catalog]', $(this)).on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
	          var i = (currentSlide ? currentSlide : 0) + 1;
	          console.log(i);
	          //if (i.length > 0) {
		          //$(this).find(count).html('<span>'+i + '</span><span>/</span><span>' + slick.slideCount+'</span>');
		          $(this).find(count).html('<span>'+i + '</span><span> / </span><span>' + slick.$dots[0].children.length+'</span>');
		      //}
	    });*/
	});
	catalog_card.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,		
		infinite: true, 
		fade: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
	  	asNavFor: catalog_card_nav,
	  	responsive: [	
		    {
				breakpoint: 768,
				settings: {
					dots: true,
				}
		    }
		]
	});
	catalog_card_nav.slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: catalog_card,
		centerMode: true,
		arrows: true,	
		variableWidth: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		focusOnSelect: true
	});
	catalog_card_table.slick({
		slidesToShow: 3,
		slidesToScroll:1,
		arrows: true,
		dots: false,	
		variableWidth: true,
		infinite: false,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 768,
				settings: {
					arrows: false,
					slidesToShow: 1,
				}
		    }
		]
	});
	/*
	//old
	gallery.slick({
		slidesToShow: 5,
		slidesToScroll: 5,
		arrows: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 565,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	partners.slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		arrows: true,
		infinite: true,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
		responsive: [
		    {
				breakpoint: 1600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				}
		    },
		    {
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
		    },
		    {
				breakpoint: 565,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				}
		    }
		]
	});
	catalog_card.on('init', function(slick){
		$(window).trigger('resize');
	});
	edu.slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		dots: false,
		infinite: true, 
		autoplay: true,
  		autoplaySpeed: 4000,
		prevArrow: prevArrow,
		nextArrow: nextArrow,
	});

	
	$('.slick-cloned .content-block__preview').removeAttr('data-fancybox');
	$('.slick-cloned .card-item__preview').removeAttr('data-fancybox');
	*/
}); 