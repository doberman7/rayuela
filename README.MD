

https://drive.google.com/file/d/0B9z566E1IBDBWTBKY2Njeno5YUU/view?usp=sharing

Rayuela Web (Javascript)

Vamos a crear el juego de la rayuela en el navegador.

Éste ejercicio está dividido en dos partes. La primera es crear el juego web y la segunda hacer del juego una aplicación donde se guarden los puntajes y los usuarios que compitieron juntos.

Ve el siguiente video para que te des una idea sobre qué vas a crear:



Como ves en el video, cuando empieza el juego automáticamente se tiran las dos monedas y los jugadores deben de detenerlas lo más cerca de la línea roja. Deberás asignar una tecla a cada jugador con la cual podrá parar su moneda (las teclas que tú quieras).

Vamos a aprender cómo JavaScript y jQuery modifican el DOM, además de trabajar con eventos asíncronos.

Antes de empezar te recomendamos leer lo siguiente sobre jQuery y cómo funcionan los eventos (event handling) y los callbacks. jQuery

Objetivos Académicos
Familiarizarse con los eventos y callbacks.
Practicar la modificación del DOM utilizando jQuery.
Comprender el concepto de eventos asíncronos.
Actividades
Descargar Archivos

Para empezar
Vamos a utilizar el esqueleto de Sinatra vacío.

Primero vamos a empezar por crear el tablero con HTML, hay muchas maneras para hacerlo. Seguramente necesitarás alrededor de 100 td's para completar tu tablero (o los que creas conveniente). Recuerda que no es correcto "hardcodear" los 100 td's, debes buscar una forma de crearlos dinámicamente.
Éste es un ejemplo de cómo hacerlo utilizando una tabla:

<table class="table">
  <tr id="jugador_1">
    <td></td>
    <td class="active"></td>
    <td></td>
    <td></td>
    ... etc ...
  </tr>
  <tr id="jugador_2">
    <td></td>
    <td></td>
    <td></td>
    <td class="active"></td>
    ... etc ...
  </tr>
</table>
Para que se vea mejor tu tabla agrega el siguiente CSS y personalízalo, por ejemplo falta colorear la linea roja del juego:

.table td {
  background-color: white;
  height: 20px;
  width: 20px;
}

.table td.active {
  background-color: black;
}
Si te das cuenta dentro de un carril un td tiene la clase active, lo cual nos servirá para saber la posición de la moneda. De esta manera podemos quitar y agregar esta clase a diferentes td's para actualizar la posición del jugador en la tabla.

Si escoges hacer de otra manera el tablero y las posiciones, solamente toma en cuenta que debe de ser fácil para jQuery poder hacer cambios al DOM, ésto puede volverse muy complicado.

Divide y Vencerás
Para facilitar las cosas y como te hemos enseñado divide tu problema en un problema más pequeño. Empieza por hacer que funcione solamente uno de los jugadores o carriles. Una vez que logres esto intenta hacer dinámicas algunas de las funciones para que sean utilizables por cada jugador simultáneamente.

Ahora Javascript
Ya que tienes el tablero en HTML ahora necesitamos hacerlo dinámico. Crea funciones de JavaScript y jQuery para actualizar el tablero, esto es que la posición de la moneda de cada jugador se mueva de una casilla a otra cuando llames a 'x' función.

Crea funciones que logren esto como en el siguiente ejemplo.

throw_coin('player1');
Utiliza la consola de Chrome para debuggear tu JavaScript.

Amarrando la función a una tecla
Puedes escocer las dos teclas que quieras del teclado, las cuales harán que se pare la moneda de cada jugador.

Para esto debes hacer un bind al evento keyup de una tecla en específico. Lee la documentación de jQuery para entender cómo hacer esto. Investiga cómo saber cuál fue la tecla que se presionó.

keyup
Tip:

$(document).ready(function() {
  $(document).on('keyup', function(event) {
    // Detecta cual tecla fue presionada y llama al método o función apropiada.
  });
});
Cómo empiezas y cómo ganas
Tu juego siempre debe de empezar de la misma forma. De esta manera puedes crear una función que reinicie el juego para volver a empezar. También deberá avisar al final si alguien gana o si los dos pierden. Agrega funcionalidades para (arrancar, jugar, ganar y reiniciar).

Como en el video deberás tener un botón para comenzar, un contador para hacer saber a los jugadores el momento en el que se tirarán las monedas y finalmente te debería decir quién ganó.

Ya que tienes ésta funcionalidad perfeccionada es hora de convertirlo en una aplicación.

Armando una App
El flujo de tu app debería ser muy parecido a lo siguiente.

Dos jugadores visitan tu app.
La app pide a los dos jugadores su nombre.
Al llenar la forma con los nombres se crea un nuevo juego.
Se imprimen las instrucciones del juego.
El juego arranca y las monedas se tiran automáticamente.
Los jugadores presionan cada uno la tecla que le toca para parar la moneda lo más cercano a la linea roja sin pasarse de ella.
La aplicación declara un ganador. Ésta información es mandada al servidor y el juego queda guardado como concluido.
Finalmente se les entrega a los jugadores una URL donde posteriormente pueden ver los resultados del juego.
Modelos
Deberás de tener dos modelos, uno para el jugador y otro para los juegos. Un jugador puede tener varios juegos y un juego puede tener múltiples jugadores (por ahora únicamente dos).

El nombre de cada jugador deberá ser único. Si alguien decide usar las mismas iniciales que otra persona estarán usando al mismo jugador. Deberás poner una restricción a nivel de base de datos y a nivel del modelo del jugador. Los siguientes links te explican cómo hacerlo:

Puedes agregar un :unique => true a tu add_index en la migración. El siguiente link lo explica: add_index documentation.
uniqueness constraint
La base de datos es el único lugar donde puedes estar seguro de que la restricción se aplicará al 100%.

Finalmente deberás crear una validación personalizada para asegurarte que un juego solamente contiene dos jugadores. Esta es una validación difícil de lograr a nivel de base de datos por ello la ponemos en el modelo.

custom ActiveRecord validation
Rutas
Acuérdate que necesitas mínimamente las siguientes rutas:

Empezar un juego / crea un juego
El juego en sí
Una ruta donde se muestren los resultados de un juego
