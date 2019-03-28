$(document).ready(function(){
	//Load
	var date = $('#date');
	//date.load('https://reqres.in/');

	//Get
	$.get('https://reqres.in/api/users', {page: 1}, function(res){
		res.data.forEach((e, i) => {
			date.append('<p>' + e.id + '. ' + e.first_name + ' ' + e.last_name + '</p>'
				+ "<img src='" + e.avatar + "'>");
		});
	});
	$.get('https://reqres.in/api/users', {page: 2}, function(res){
		res.data.forEach((e, i) => {
			date.append('<p>' + e.id + '. ' + e.first_name + ' ' + e.last_name + '</p>'
				+ "<img src='" + e.avatar + "'>");
		});
	});
	$.get('https://reqres.in/api/users', {page: 3}, function(res){
		res.data.forEach((e, i) => {
			date.append('<p>' + e.id + '. ' + e.first_name + ' ' + e.last_name + '</p>'
				+ "<img src='" + e.avatar + "'>");
		});
	});

	//Post
	var form = $('#form');
	form.submit(function(e){
		e.preventDefault();
		var user = {
			name: $("input[name='name']").val(),
			web: $("input[name='web']").val()
		};

		$.post($(this).attr('action'), user, function(res){
			console.log(res);
		}).done(function(){
			alert('usuario añadido correctamente');
		});
	});
});