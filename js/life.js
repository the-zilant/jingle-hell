let wnd = $(window), 
	wrap = $('.wrap'), 
	menu = $('.in_the_middle'), 
	mobile_navigation = $('.mobile_navigation'), 
	pull = $('#pull'), 
	menuBtn = $('#menuBtn'), 
	slidenav = $('.slidenav'), 
	overlay = $('#overlay');

menuHeight = menu.height();

$(function() {

	let hat = $('#hat'), 
		pos = hat.offset(), 
		index = 'key_tab', 
		dataStore = window.sessionStorage;
	try {
		let oldIndex = dataStore.getItem(index);
	} catch(e) {
		let oldIndex = 0;
	}
	// latched when scrolling
	$(window).scroll(function() {

		let top = wnd.scrollTop(), 
			opacity = top > 500 ? 1 : top * 2 / 1000;

		if ($(this).scrollTop() > pos.top+hat.height() && hat.hasClass('default')) {

			hat.fadeOut('fast', function() {
				$(this).removeClass('default').addClass('fixed').fadeIn('fast');
			});

		} else if ($(this).scrollTop() <= pos.top && hat.hasClass('fixed')) {

			hat.fadeOut('fast', function() {
				$(this).removeClass('fixed').addClass('default').fadeIn('fast');
			});

		}
		// mobile navigation
		mobile_navigation.css('opacity', opacity);
	});

	// content tabs
	$('.partition').tabs({
		active : oldIndex, activate : function(event, ui) {
			let newIndex = ui.newTab.parent().children().index(ui.newTab);
			dataStore.setItem(index, newIndex)
		}
	});
});

// for tablet, mobile
$(pull).on('click', function(e) {
	e.preventDefault();
	menu.slideToggle();
});

wnd.resize(function() {

	let w = $(window).width();

	if (w > 320 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
});

// pleer
menuBtn.click(function() {
	toggleNav();
});

overlay.click(function() {
	toggleNav();
});

function toggleNav() {
	wrap.toggleClass('navOut');
	overlay.toggleClass('show');
	slidenav.toggleClass('active');
}

// load root
window.onload = function () {
	// introJs
	introJs().setOptions({
		tooltipClass: 'customTooltip', 
		position: 'left', 
		showButtons: false
	}).addHints();
	// aside tabs
	$('.update').tabs();
	// slider
	$('.slider').glide({
		autoplay: 11000
	});
}