$(document).ready(function() {

	/* iniciando en 0, mientreas sea menor o igual a 100, agregar uno a tdNeeded.
	anexar a los "tr"	un elemento "td" */
	for (tdNedded = 1; tdNedded <= 100; tdNedded++) {
		console.log(tdNedded);
		$("tr").append("<td> td </td>" )
	}

	$("#player1").find(".active").next().addClass("active");

});
