$(document).ready(function(){
	var show = $('#show');
	var hide = $('#hide');
	var box = $('.box');
	var bToggle = $('#toggle');
	var bAnimate = $('#animate');
	var msg = $('#msg');

//parametros de velocidad
//('fast')
//('normal')
//('slow')

show.hide();
show.click(function(){
	$(this).hide();
	hide.show();
		//box.show('fast');
		box.fadeIn(function(){
			msg.hide();
		});
		//box.fadeTo('normal', 1);
		//box.slideDown();
	});
hide.click(function(){
	$(this).hide();
	show.show();
		//box.hide('fast');
		box.fadeOut(function(){
			msg.show();
		});
		//box.fadeTo('normal', 0.5);
		//box.slideUp();
	});

msg.hide();
bToggle.click(function(){
	//Callback en los efectos
	box.slideToggle('slow', function(){
		msg.toggle();
	});
});

bAnimate.click(function(){
	box
	.animate({
		marginLeft: '500px',
		fontSize: '24px'
	})
	.animate({
		borderRadius: '50px',
		marginTop: '100px'
	}, 'slow')
	.animate({
		fontSize: '18px',
		marginLeft: '0'
	}, 'slow')
	.animate({
		borderRadius: '0',
		marginTop: '0'
	}, 'slow')
	.animate({
		marginTop: '15px'
	}, 'fast');
});

});