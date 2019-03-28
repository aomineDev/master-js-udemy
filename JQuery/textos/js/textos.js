$(document).ready(function(){

	reloadLinks();

	$('#addButton').removeAttr('disabled').click(function(){
		$('#menu').append("<li><a href='" + $('#addLink').val() + "'></a></li>");
		reloadLinks();
		$('#addLink').val('');
	});
	
});

function reloadLinks(){
	var a = $('a');
	a.each(function(index){
		var that = $(this);
		var link = that.attr('href');
		that.attr('target', '_blank');
		that.text(link);
	});
}