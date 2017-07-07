$(document).ready(function(){
  //asignar filas a variable
  var $tableRows = $("tr")
    // iterar en filas, k es el index de iteracion, tableRow es el value de cada iteracin
    $.each($tableRows,function(k,tableRow){
      //AGREGAR CASILLAS: td es el tableData, iniciando en 1, mientras sea menor o igual a 20, aumentar 1
      for (var tdN = 1; tdN <= 20; tdN++) {
        //anexar en cada fila un "td" con id="tdN"
        $(tableRow).append("<td id="+tdN+">fila: "+k+" id: "+tdN+"</td>");
        //MOVER CLASE ACTIVE:
        //en 950 milisegs, en la fila encontrar hijo con lcase "active" y al siguiente elemento y añadir la clase "active"
      };
    });


			var p = $("#Player1")
			for (var i = 0; i <= 20000;  i = i + 1000) {
				setTimeout(function(){
					$(p).find(".active").next().addClass("active").html();
				}, i);
			}

			// setTimeout(function(){
			// 	$(".active").next().addClass("active").html();
			// }, 1000);
			//
			// setTimeout(function(){
			// 	var c = $(".active").next().addClass("active").html();
			//
			// }, 2000);
			//
			// setTimeout(function(){
			// 	var d = $(".active").next().addClass("active").html();
			// }, 3000);


			//en 1500 milisegs, en la fila encontrar el primer hijo con classe "active" y remover clase "active"
			// setTimeout(function(){
			//  	var c = $(p).first(".active").removeClass("active").html;
			// 	console.log(c);
			// }, 2000);




});
