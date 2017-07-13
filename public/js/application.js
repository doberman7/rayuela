$(document).ready(function(){
  //asignar filas a variable
  var $tableRows = $("tr");
  //variable global para determinar tamaño de tablero
  lengtH = 15
  //variable global para cachar el id de la casilla meta
  meta = ""
  //variable global para las teclas S y Ñ respectivamente
  teclaS = false;
  teclaÑ = false;
    // iterar en filas, k es el index de iteracion, tableRow es el value de cada iteracin
    $.each($tableRows,function(k,tableRow){
      //AGREGAR CASILLAS: td es el tableData, iniciando en 1, mientras sea menor o igual a 20, aumentar 1
      for (var tdN = 1; tdN <= lengtH; tdN++) {
        //anexar en cada fila un "td" con id="tdN"
        $(tableRow).append("<td id="+tdN+"></td>");
        //si el id del td creado es al lengtH -1, quiere decir que es el penultimo, entonces....
        if (tdN==lengtH - 1) {
          //agregar al td de cada jugador un fondo color blanco, este serà la meta
          $("#Player1 #"+tdN+"").css("border","solid white");
          $("#Player2 #"+tdN+"").css("border","solid white");
          //capturar numero de id de casilla meta
          meta = tdN          
        }

        //$(tableRow).append("<td id="+tdN+">fila: "+k+" id: "+tdN+"</td>");//
      };
    });//-------------------------------------------

  //boton "jugar" inicia el juego
  $("#start_btn").bind(throwDices());
  //anexar boton reiniciar
  $(".table").prepend("<button id=restart_btn>Reiniciar</button><br>");
  //atar mentodo "restarGame" al boton con id=restart_btn
  $("#restart_btn").bind(restarGame());
  //atar evento "keydown" al metod creado llamando keyStop
  $(window).bind(keyStop());


});//------------------FIN DOCUMENT READY

console.log();





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
      //console.log("recursion");
      setTimeout(function() {
        lanzarDado(player, lengtH);
      },200);
    }
};//----------FIN LANZAR DADO

//function para iniciar juego por cada jugador
function throwDices() {
  //vincular click a boton "jugar" las funciones lanzar dados de cada jugador
  $("#start_btn").click(function () {
    lanzarDado("#Player1",lengtH);
    lanzarDado("#Player2", lengtH);
  })
};//----------FIN LANZAR AMABOS DADOS


function restarGame(){//--------REINICIAR JUEGO
  //al hacer click en el boton "reiniciar "
  $("#restart_btn").click(function () {
    //encontrar "td .active" y remover clase active
    $("#Player1").find(".active").removeClass("active");
    $("#Player2").find(".active").removeClass("active");
    //añadir al td siguiente de "#playerN" la clase active
    $("#player1").next().addClass("active");
    $("#player2").next().addClass("active");
    //asignar falso a las variables globales, de tal que se reiniciar funcionalidad lanzarDado
    teclaS = false;
    teclaÑ = false;
  })
};//---------------------FIN REINICIAR JUEGO

//source: https://api.jquery.com/event.which/
//ver en inspector la tecla precionada
// $(window).keydown(function( event ) {
//   //mostrar el tipo de evento y tecla apretada
//   console.log(event.type+": "+ event.which);
// });
