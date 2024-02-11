let numeroSecreto = generNumeroSecreto();


function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario === numeroSecreto);//  === compare value and type
    return;
}

function generNumeroSecreto(){
    return  Math.floor(Math.random() * 10) + 1;

}
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Indica un número del 1 al 10');


function encontrarMayor(a, b) {
    return a > b ? a : b; // if a>b, return a. else, return b.
  }
  
  let numeroMayor = encontrarMayor(15, 9);
  console.log(numeroMayor);