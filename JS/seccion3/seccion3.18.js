//******************************
// *SECCION 3.18
//*******************************

/*
HTML

<html>

<head>
    <title>Sesion 3</title>
    <script src="JS/keypress.js"></script>
    <script src="JS/juego.js"></script>
</head>

<body onload = 'inicializar();'>
    
    <button onclick='vender();'>Vender</button>
    <button onclick='muestraInventario();'>INVENTARIO</button>

</body>
</html>

*/


function inicializar(){


}

//var lista = ['Espada', 'Pocion', 'Daga', 'Armadura', 'Flecha', 'Cola de Fenix'];
//console.log(lista.length);

var lista = [];

lista.push('A');
lista.push('B');
lista.push('C');
lista.push('D');
lista.push('E');

/*function compra(objeto){
    
    if(objeto ==1){
        lista.push('Espada');
    }
    else{
        lista.push('Pocion');
    }

    muestraInventario();
}*/


function vender(){
    //lista.pop();
    //muestraInventario();
    lista.splice(2,1);
}


function muestraInventario(){
    for(a=0; a<lista.length; a++){
        console.log(a+ '-'+lista[a]);
    }
}

