(function($) {
	
	
	skel.init({
		reset: 'full',
		breakpoints: {
			'global':	{ range: '*', href: 'css/style.css', containers: 1400, grid: { gutters: 0 }, viewport: { scalable: false } },
	
		}});
	
	$(function() {
			//Projects
			//slide function to show more about section
			var $select = $('#read > div > figure > figcaption > p.icon-links > span.about')
			var $about = $('#read > div > figure');
			//on click about
				$select.on('click', function(e) {
					// select about span
						var t = $(this);

						e.preventDefault();
						// Clear active hide less
							$about.removeClass('active')
							$select.removeClass('display')
							$select.next(".less").addClass('display');
						// Set this link to active ahow less
							t.parent().parent().parent().addClass('active')
							t.parent().next().children().children('li:first-child').addClass('active')
							t.addClass('display')
							t.next(".less").removeClass('display');
					});
					//show less, on click hide
					var $less = $('#read > div > figure > figcaption > p.icon-links > span.less');
						$less.on('click', function(e) {
								var t = $(this);
								t.parent().next().children().children('li').removeClass('active')
								t.parent().parent().parent().removeClass('active')
								t.addClass('display')
								t.prev(".about").removeClass('display');
						});
						var $lang = $('#read figure.effect div.more ul.lang-list li.lang');
						$lang.on('click', function(e) {
								var t = $(this);
								
								$lang.removeClass('active');
								
								t.addClass('active');
						});
							var $info = $("#read figure.effect div.more ul.lang-list span");
								$info.on({'mouseenter': function () {
									  
										  $body.addClass('noscroll');
								      
										  
										},
										'mouseleave': function () {
									      
										  $body.removeClass('noscroll');
								      
										
										}
									      });             
	});
})(jQuery);