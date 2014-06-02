// $(function () {
// 	$("#more-info-link").click(function(e) {
// 		e.preventDefault();
// 		$("#more-info").toggleClass("collapsed");
// 		$("#more-info").slideToggle( "slow", function() {
// 		// Animation complete.
// 		});
// 	});

// 	$(".more-link").click(function(e){
// 		e.preventDefault();
// 		$(this).parent().parent().toggleClass("open-box");
// 		$(this).parent().siblings(".more-detail").slideToggle();
// 	});

// 	$(".cerrar-icon").click (function(e){
// 		e.preventDefault();
// 		$(this).parent().parent().removeClass("open-box");
// 		$(this).parent(".more-detail").slideToggle();
// 	});
// });

$(document).ready(function () {

    $(window).scroll(function () {
        // var tope = ($('.billboard').height()) + ($('.description').height()) + ($('.open-call').height());

        if ($(this).scrollTop() < ($('#more-info').height())) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $('html, body').animate({
            // scrollTop: 0
            scrollTop:$('#more-info').position().top
        }, 600);
        return false;
    });

// Sección More info...
    $("#more-info-link, .more-info-close").click(function(e) {
         e.preventDefault();
         $("#more-info").toggleClass("collapsed");
         $("#more-info").slideToggle( "slow", function() {
         // Animation complete.
         });
         $(this).parents(".tab-container").toggleClass("activo");
     });

// Contact...
    $('a#close-wp7, .contact-btns .btn-cancel').click(function(e){
        e.preventDefault();
        $('.wpcf7-form')[0].reset();
        $('.wpcf7-not-valid-tip, .wpcf7-response-output').hide();
    });
// Suscription...
    $('a#close-sus').click(function(){
        $("#thanks").hide("fade");
        $(".errors").hide();
        $('#mc-embedded-subscribe-form')[0].reset();
        $("#mc-embedded-subscribe-form").show("fade");
        $(".suscription-mail").removeClass("input-error");
    });

	$('.contact .your-name input').attr('placeholder', 'Nombre');
	$('.contact .your-email input').attr('placeholder', 'Mail');
	$('.contact .your-message textarea').attr('placeholder', 'Mensaje');

	$("#thanks").css("display", "none");
	$("#errorEmail").css("display", "none");

	$("#submitButton").click(function () {        
      
        if ($("#mce-EMAIL").val() != "") {

            if (isValidEmailAddress($("#mce-EMAIL").val())) {

                $("#mc-embedded-subscribe-form").hide("fade", { direction: "up" }, 500, function () {

                    $("#thanks").show("fade", { direction: "down" }, 500, function () {

                        $.post("http://ixda.us3.list-manage2.com/subscribe/post?u=4440ae65a862c65a973ec8236&amp;id=8713b5a955", $("#mc-embedded-subscribe-form").serialize());

                    });

                    $("#thanks").css("display", "block");

                });

            }

            else {

                $("#errorEmail").css("display", "block");

                $("#errorEmail").show("fade", { direction: "right" }, 500);
                $(".suscription-mail").toggleClass("input-error");

            }

        }
    
    });

    $("#mc-embedded-subscribe-form").submit(function (event) {

        $("#submitButton").click();

        event.preventDefault();

    });
    

    function isValidEmailAddress(emailAddress) {

        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);

        return pattern.test(emailAddress);

    };

});