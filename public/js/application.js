$(document).ready(function(){
  //asignar filas a variable
  var $tableRows = $("tr");
  lengtH = 15
  //variable global para las teclas S y Ñ respectivamente
  teclaS = false;
  teclaÑ = false;
    // iterar en filas, k es el index de iteracion, tableRow es el value de cada iteracin
    $.each($tableRows,function(k,tableRow){
      //AGREGAR CASILLAS: td es el tableData, iniciando en 1, mientras sea menor o igual a 20, aumentar 1
      for (var tdN = 1; tdN <= lengtH; tdN++) {
        //anexar en cada fila un "td" con id="tdN"
        $(tableRow).append("<td id="+tdN+"></td>");
        //$(tableRow).append("<td id="+tdN+">fila: "+k+" id: "+tdN+"</td>");
        //MOVER CLASE ACTIVE:
        //en 950 milisegs, en la fila encontrar hijo con lcase "active" y al siguiente elemento y añadir la clase "active"
      };
    });//-------------------------------------------


  //lanzar dados


  //atar evento "keydown" al metod creado llamando keyStop
  $(window).bind(keyStop());
  //boton "jugar" inicia el juego
  $("#start_btn").click(function(){
    lanzarDado("#Player1",lengtH);
    lanzarDado("#Player2", lengtH);
  });


});//------------------FIN DOCUMENT READY

//funcion para detener avance del metodo lanzar dado, basicamente asigna valores true a las variables globales teclaS y teclaÑ
function keyStop() {
  $(window).keydown(function (  ) {
    if (83 == event.keyCode) {
      teclaS = true;
      console.log(event.type+": "+ event.which);
    }else if ( 186 == event.keyCode){
      teclaÑ = true;
      console.log(event.type+": "+ event.which);
    }
  });
};

//crear funcion que recibe un jugador
function lanzarDado(player, lengtH) {
    //asignar variable que obtiene objeto con la clase active = CURRENT, remover la clase "active" de CURRENT
    var $current_player = $(player).find(".active").removeClass("active");
    //-asignar variable que obtiene el siguiente objeto a la clase active = NEXT, agregar clase "active" a NEXT
    $current_player.next().addClass("active");

    if (player == "#Player1" && teclaS == true){
      //console.log("Player1 terminado");
    }else if (player == "#Player2" && teclaÑ == true){
      //console.log("Player2 terminado");
    //si el largo del <tr id="Player1">  es mayor o igual la indice del <td class="active">
  }else if (lengtH -1 >= $($current_player).index()){
      //establecer tiempo de ejecucion de lanzar el dado
      setTimeout(function() {
        lanzarDado(player, lengtH);
      },200);
    }
};//-------------------------------------------
//source: https://api.jquery.com/event.which/
//en la ventana al aprentar tecla..
// $(window).keydown(function( event ) {
//   //mostrar el tipo de evento y tecla apretada
//   console.log(event.type+": "+ event.which);
// });
