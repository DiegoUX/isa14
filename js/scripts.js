// (function ($, root, undefined) {
	
// 	$(function () {
		
// 		'use strict';
		
// 		// DOM ready, take it away

// 	});
	
// })(jQuery, this);

$(function () {
	$("#more-info-link").click(function(e) {
		e.preventDefault();
		$("#more-info").toggleClass("collapsed");
		$("#more-info").slideToggle( "slow", function() {
		// Animation complete.
		});
	});

	$(".more-link").click(function(e){
		e.preventDefault();
		$(this).parent().parent().toggleClass("open-box");
		$(this).parent().siblings(".more-detail").slideToggle();
	});

	$(".cerrar-icon").click (function(e){
		e.preventDefault();
		$(this).parent().parent().removeClass("open-box");
		$(this).parent(".more-detail").slideToggle();
	});
});
