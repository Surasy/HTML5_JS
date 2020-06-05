//*******************************
// SECCION 2.12
//*******************************

//---------------------------------------

// HTML
/*

<html>

<head>
    <title>Sesion 3</title>
    <script src="JS/keypress.js"></script>
    <script src="JS/juego.js"></script>
</head>


<body>



</body>
</html>

*/
//------------------------------------------

/*document.addEventListener('keydown',function(tecla){

//console.log(tecla.keyCode);

if(tecla.keyCode == 32){
    console.log("Espacio");
}
else if(tecla.keyCode == 38){
    console.log("Arriba");
}

});*/

var configTeclado = { prevent_repeat : true};

var eventoTeclado = new window.keypress.Listener(this,configTeclado);

function pulsaA(){
    console.log("Has pulsado a");
}

function pulsaAB(){
    console.log("Has pulsado a y b a la vez");
}


function ataqueEspecial(){
    console.log("ATAQUE ESPECIAL!!!");
}

eventoTeclado.simple_combo('a', pulsaA);
eventoTeclado.simple_combo('a b', pulsaAB);
eventoTeclado.sequence_combo('up down a b', ataqueEspecial);