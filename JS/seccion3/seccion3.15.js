
//******************************
// *SECCION 3.15
//*******************************


var personaje = function(x, y, nombre){

    this.x = x;
    this.y = y;
    this.nombre = nombre;

    //metodo abajo
    this.abajo= function(){
        this.y += 10;
    }

    //metodo hablar
    this.hablar= function(){
        console.log("hola forastero, me llamo "+ this.nombre);
    }
    
}

var personaje1 = new personaje(10,100,'Frodo');
var personaje2 = new personaje(220,380,'Sam');

personaje1.abajo();