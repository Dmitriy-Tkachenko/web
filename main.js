$(document).ready(() => {
	$("#sign_in").on("click", function() {
		login = $("#login")[0].value;
		pass = $("#pass")[0].value;
		login.length > 0 && pass.length > 0? (
			line = $("<tr><td>" + login + "</td><td>" + pass + "</td><tr>"),
			$("tbody").append(line)
		) : alert("Необходимо заполнить все поля");
	});

	$("#delete").on("click", function() {
		$('table >tbody >tr').length > 0 ? $("tbody").empty() : alert("Нет элементов");
	});
});