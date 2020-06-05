//*******************************
// SECCION 2.7
//*******************************

/*
var turno = 1;
var vida = 100;

var vivo = true;
var envenenado = false;
var quemado = false;

var atacar = 0;
var quemar = 1;
var envenenar = 2;
var fallar = 3;

var pocion = 0;
var colaFenix = 1;
var pocionQuemaduras = 2;
var pocionVeneno = 3;


function usarItem(objeto){

    if(objeto == pocion){
        vida += 50;
    }
    
    if(objeto == colaFenix){
        if(!vivo){
        vivo = true;
        vida = 30;
        }
        else{
            console.log('Ya estas vivo! no lo puedes usar');
        }
    }

    if(objeto == pocionQuemaduras){
        
        if(quemado){
            quemado = false;
        }
         else{
            console.log('No estas quemado! no se puede usar');
        }
    }

    if(objeto == pocionVeneno){
        
        if(envenenado){
            envenenado = false;
        }
         else{
            console.log('No estas envenenado! no se puede usar');
        }
    }

    muestraEstadoJugador();
}

function muestraEstadoJugador(){

    if(vivo){
        console.log('vida: '  + vida);

        if(envenenado == true){
            console.log( 'Envenenado');
        }

        if(quemado == true)
        console.log('Quemado');
        

        console.log()
    }
    else {
        console.log('Estás muerto');
    }
}

function JuegaTurno(){

    var jugadaCPU = Math.floor(Math.random() * 4);

    if(vida <= 0){
        vivo = false;
    }


    if(vivo){

            console.log(jugadaCPU);

        if(jugadaCPU == atacar){

            vida -= 10;
                console.log('He atacado al jugador');
        }

        if( jugadaCPU == quemar){

                quemado = true;
                console.log('He quemado al jugador');
        }

        if( jugadaCPU == envenenar){

                envenenado = true;
                console.log('He envenenado al jugador');
            }

            if( jugadaCPU == fallar){
                console.log('He fallado miserablemente al jugador');
            }

            muestraEstadoJugador();
    }
    else {
        console.log('Has muerto');
    }

}
*/