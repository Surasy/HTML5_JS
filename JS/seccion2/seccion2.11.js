//*******************************
// SECCION 2.11
//*******************************


var numeroCPU = Math.floor((Math.random()*10)+1);
//console.log(numeroCPU);
var numerousuario = 0;

/*while(numeroUsuario != numeroCPU){ 

    numeroUsuario = parseInt(prompt('Adivina el numero que he pensado (1-10)'));

    if(numeroUsuario == numeroCPU){
        console.log('Has acertado');
    }
    else{
        console.log('Has fallado');
    }

}*/

do{
    numeroUsuario = parseInt(prompt('Adivina el numero que he pensado (1-10)'));

    if(numeroUsuario == numeroCPU){
        console.log('Has acertado');
    }
    else{
       if(numeroUsuario > numeroCPU) alert("El numero es menor");
       else alert("El numero es mayor");
    }

}while(numeroUsuario != numeroCPU);
