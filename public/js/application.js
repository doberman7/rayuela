$(document).ready(function(){
  //asignar filas a variable
  var $tableRows = $("tr")
    // iterar en filas, k es el index de iteracion, tableRow es el value de cada iteracin
    $.each($tableRows,function(k,tableRow){
      //AGREGAR CASILLAS: td es el tableData, iniciando en 1, mientras sea menor o igual a 20, aumentar 1
      for (var tdN = 1; tdN <= 10; tdN++) {
        //anexar en cada fila un "td" con id="tdN"
        $(tableRow).append("<td id="+tdN+">fila: "+k+" id: "+tdN+"</td>");
        //MOVER CLASE ACTIVE:
        //en 950 milisegs, en la fila encontrar hijo con lcase "active" y al siguiente elemento y añadir la clase "active"
      };
    });
  //crear funcion que recibe un jugador
  function lanzar_dado(player) {
    //-asignar variable que obtiene objeto con la clase active = CURRENT
    var $current_player = $(player).find(".active");
    //-asignar variable que obtiene el siguiente objeto a la clase active = NEXT
    var $next_player = $current_player.next();
    //-remover la clase "active" de CURRENT
    $current_player.removeClass("active");
    //-agregar clase "active" a NEXT
    $next_player.addClass("active")


    //si el largo del <tr id="Player1">  es mayor o igual la indice del <td class="active">
    if (player.length + 1 >= $($current_player).index() ) {
      //establecer tiempo de ejecucion de lanzar el dado
      setTimeout(function() {
        lanzar_dado(player);
      },1000);
    }
  }


  lanzar_dado("#Player1");
  lanzar_dado("#Player2");


});
