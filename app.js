// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// definir variables
let listaNombres = [];

function agregarAmigo() {

    let nombreIngresado = document.getElementById('amigo').value;

    if (nombreIngresado == '') {
        alert('Ingrese un nombre correcto');
    } else {
        listaNombres.push(nombreIngresado);

        for(let i=0; i < listaNombres.length; i++){
            console.log(listaNombres[i]);
        }  
    
        limpiarCaja();
    
        for(let i=0; i < listaNombres.length; i++){
            asignarTextoElemento('ul', listaNombres[i]);
        } 
    }

}

function limpiarCaja() {
    document.querySelector('#amigo').value='';
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}