// latched when scrolling

$(function() {

	var hat = $('#hat'), pos = hat.offset();

	$(window).scroll(function() {

		if ($(this).scrollTop() > pos.top+hat.height() && hat.hasClass('default')) {

			hat.fadeOut('fast', function() {
				$(this).removeClass('default').addClass('fixed').fadeIn('fast');
			});

		} else if ($(this).scrollTop() <= pos.top && hat.hasClass('fixed')) {

			hat.fadeOut('fast', function() {
				$(this).removeClass('fixed').addClass('default').fadeIn('fast');
			});

		}

	});
});


// drop down menu

$('#drop-down').click(function() {
	$("ul.language_selection").show();
});

jQuery(function($) {
	$(document).mouseup(function (e) {
		var ul = $(".language_selection");
		if (!ul.is(e.target) && ul.has(e.target).length === 0) {
			ul.hide();
		}
	});
});


// for tablet, mobile

var pull = $('#pull');
menu = $('.in_the_middle');
menuHeight = menu.height();

$(pull).on('click', function(e) {
	e.preventDefault();
	menu.slideToggle();
});

$(window).resize(function() {
	var w = $(window).width();
	if(w > 320 && menu.is(':hidden')) {
		menu.removeAttr('style');
	}
});


// pleer

var menuBtn = $('#menuBtn');
var slidenav = $('.slidenav');
var wrap = $('.wrap');
var overlay = $('#overlay');

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


// aside tabs

$('.update').tabs();


// content tabs

$(function() {
	var index = 'key_tab';
	var dataStore = window.sessionStorage;
	try {
		var oldIndex = dataStore.getItem(index);
	} catch(e) {
		var oldIndex = 0;
	}

	$('.partition').tabs({
		active : oldIndex, 
		activate : function( event, ui ) {
			var newIndex = ui.newTab.parent().children().index(ui.newTab);
			dataStore.setItem( index, newIndex )
		}
	});

}); (jQuery)


// slider

$('.slider').glide({
	autoplay: 11000
});


// introJs

introJs().setOptions({position: 'left'}).addHints();