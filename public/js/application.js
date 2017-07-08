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


			var $trP1 = $("#Player1")
			for (var v = 0; v <= 10000;  v = v + 500) {
				setTimeout(function(){
					$($trP1).find(".active").next().addClass("active");
					//$($trP1).first().find(".active").removeClass("active");
					console.log(v);
				}, v);

			}




			//en 1500 milisegs, en la fila encontrar el primer hijo con classe "active" y remover clase "active"
			//  	var c = $(p).first(".active").removeClass("active").html;





});
