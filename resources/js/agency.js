/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function(){
    var hash = window.location.hash.substr(1);
    if ( hash == 'adm' || hash == 'at' || hash=='bsqs' || hash=='dlcgd' || hash=='ddai' || hash=='kye' || hash=='mff' || hash=='rlpt' || hash=='rai' || hash=='tai' || hash=='aihzd' || hash=='mxrl' || hash=='paiba' || hash=='nwc'){
        var $session = $('#'+hash);
        $session.toggleClass("session-collapsed");
        $session.toggleClass("session-expanded");
        $('html, body').stop().delay(100).animate({
            scrollTop: '-=100px'
        }, 1500, 'easeInOutExpo');
    }
	$('.session-name').parent().bind('click', function(event) {
		var $anchor = $(this).parent().parent();
		$anchor.find('.content').slideToggle("slow");
		$anchor.toggleClass( "session-collapsed" );
		$anchor.toggleClass( "session-expanded" );
		event.preventDefault();
	});
});