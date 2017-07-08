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

	//crear funcion que recibe un jugador
		/*
			-asignar variable que obtiene objeto con la clase active = CURRENT
			-asignar variable que obtiene el siguiente objeto a la clase active = NEXT
			-calcular indice del objeto con la clase active
			-remover la clase "active" de CURRENT
			-agregar clase "active" a NEXT
			-condicionar evento al index del tr
			-establecer SetTimeout 
		*/
});
