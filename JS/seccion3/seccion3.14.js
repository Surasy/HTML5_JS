
/******************************
// /*SECCION 3.14
//*******************************


var miCanvas;

function inicializar(){
    miCanvas = document.getElementById('canvas');

    miCanvas.addEventListener('mousedown', clicRaton, false);
    miCanvas.addEventListener('mouseup', sueltaRaton, false);
    miCanvas.addEventListener('mousemove', posicionRaton, false);
}

function posicionRaton(event){

    var x;
    var y;

    x= event.pageX;
    y= event.pageY;

    console.log('x: '+ x+ 'y: '+ y);
}

function clicRaton(event){

    console.log('Raton pulsado');
}

function sueltaRaton(event){

    console.log('Raton liberado');
}