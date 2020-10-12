//******************************
// *SECCION 3.17
//*******************************


var canvas;
var ctx;
var FPS= 50;
var imgCute;

var protagonista = function(x,y){
    
    this.x = x;
    this.y = y;
    this.velocidad = 3,

    this.dibuja = function(){
        ctx.drawImage(imgCute,this.x, this.y); 
    }

    this.arriba= function(){
        this.y -= this.velocidad;
    }

    this.abajo= function(){
        this.y += this.velocidad;
    }

    this.izquierda= function(){
        this.x -= this.velocidad;
    }

    this.derecha= function(){
        this.x += this.velocidad;
    }

    this.texto = function(){
        ctx.font = '30px impact';
        ctx.fillStyle = 'black';
        ctx.fillText('X: '+ this.x, 100, 100);
    }
}

var personaje = function(x,y){

    this.x = x;
    this.y = y;
    this.derecha = true,

    this.dibuja= function(){
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(this.x, this.y, 50,50);
    }


    this.mueve= function(velocidad){

        if(this.derecha){
            if(this.x < 400){
                this.x += velocidad;
            }
            else{
                this.derecha = false;
            }
        }
        else{
            if(this.x > 50){
                this.x -=velocidad;
            }
            else{
                this.derecha = true;
            }
        }
    }
}

var prota = new protagonista(200,200);

document.addEventListener('keydown', function(tecla){

    //console.log(tecla.keyCode);
    if(tecla.keyCode == 38){
        // arrriba
        prota.arriba();
    }
    else if( tecla.keyCode == 40){
        // abajo
        prota.abajo();
    }
    else if(tecla.keyCode == 37){
        // izquierda
        prota.izquierda();
    }
    else if(tecla.keyCode == 39){
        // derecha
        prota.derecha();
    }
})

var per1 = new personaje(10,50);
var per2 = new personaje(10,120);
var per3 = new personaje(10,230);


function inicializar(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    // cargamos la imagen del protagonista
    imgCute = new Image();
    imgCute.src = 'JS/sun.png';

    setInterval(function(){
        principal();
    }, 1000/FPS);
}

function borraCanvas(){
    canvas.width = 500;
    canvas.height = 400;
}

//bucle principal
function principal(){
    //console.log('function');
    borraCanvas();
    per1.dibuja();
    per2.dibuja();
    per3.dibuja();
    prota.dibuja();
    prota.texto();

    per1.mueve(1);
    per2.mueve(3);
    per3.mueve(7);
}