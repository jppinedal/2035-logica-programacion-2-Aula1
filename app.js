let numeroSecreto = 0;
let intentos = 0;
console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    //console.log(numeroDeUsuario === numeroSecreto);//  === compare value and type
    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `¡Acertaste el número secreto en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p', 'El número secreto es menor');
        }else{
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++;
    limpiarCaja();
}
return;
}

function generNumeroSecreto(){
    return  Math.floor(Math.random() * 10) + 1;

}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales(){
    asignarTextoElemento('h1', 'Juego del número secreto');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');
    numeroSecreto = generNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de números
    condicionesIniciales();
    //generar el número aleatorio
    //deshabilitar el botón de reiniciar
    //reinicio de intentos
    document.querySelector('#reiniciar').setAttribute('disabled', true);

    

}

condicionesIniciales();

function encontrarMayor(a, b) {
    return a > b ? a : b; // if a>b, return a. else, return b.
  }
  
