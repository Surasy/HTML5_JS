//*******************************
// SECCION 3.12
//*******************************

var fps = 10;
var xEscenario = 0;

function atacar(){

    console.log("Has atacado");
}

function mueveEscenario(){
    xEscenario++;
    console.log(xEscenario);
}


//Bucle principal
function principal(){

   // console.log("Fotograma");
    mueveEscenario();
}


setInterval(principal, 1000/fps);