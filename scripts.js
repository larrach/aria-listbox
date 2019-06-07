(function( $ ) {
	"use strict";	
 

		
		$('.levier-check').click(function(event) {
			event.preventDefault();
			$('.levier-check').not(this).siblings('.check-menu').slideUp();
			$(this).toggleClass('active');
			$(this).siblings('.check-menu').slideToggle();
			$(this).siblings('.check-menu').toggleClass('hidden');
			$(this).attr('aria-expanded', function(index, attr){
				return attr == "true" ? null : "true";
			});
			if (!$(this).siblings('.check-menu').hasClass('hidden')){
				$(this).siblings('.check-menu').find('.check-ul').focus();
			}

		});
		
		
		$('.check-validate').click(function(event){
			event.preventDefault();
			$(this).closest('.check-menu').slideUp();
			$(this).closest('.check-menu').addClass('hidden');
			$(this).parent().siblings('.levier-check').removeClass('active');
			$(this).parent().siblings('.levier-check').attr('aria-expanded', null );
			var button_label = '';
			var i = 0;
			$(this).closest('.check-menu').find('input:checked').next('label').each(function(){
				if ( i > 0 ) {
					button_label = button_label + ', '+'<svg aria-hidden="true" class="Icon icon_chevron"  role="img"><use xlink:href="#icon_chevron"/></svg>'
    			}
				i++;
				button_label = button_label +'<svg aria-hidden="true" class="Icon icon_chevron"  role="img"><use xlink:href="#icon_chevron"/></svg>' + $(this).html();
  			});
  			if ( '' !== button_label ) {
  				$(this).parent().siblings('.levier-check').html(button_label);
  			}
  		});
  		
  		
  		$('.check-input').each(function(){
	  		if ( $(this).is(':checked') ) {
		  		$(this).parent('li').attr('aria-selected','true')
	  		} else {
		  		$(this).parent('li').attr('aria-selected',null);
	  		}
  		});

  		$('.check-input').change(function(){
	  		if ( $(this).is(':checked') ) {
		  		$(this).parent('li').attr('aria-selected','true');
	  		} else {
		  		$(this).parent('li').attr('aria-selected',null);
	  		}
  		});

  		
  		
  		
  		
 		$('.check-validate').click();
 		
  		
  		
  		
  		
  		
  		
 
})(jQuery);