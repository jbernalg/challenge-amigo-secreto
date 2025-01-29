// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// definir variables
let listaNombres = [];

function agregarAmigo() {
    // capturar el nombre ingresado en la entrada
    let nombreIngresado = document.getElementById('amigo').value;

    // validar que el nombre ingresado tenga el formato correcto
    if (nombreIngresado.trim() === '') {
        alert('Ingrese un nombre correcto');
        return;
    } else {
    
        listaNombres.push(nombreIngresado);

        // mostrar por consola
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

function asignarNombreElemento(elemento, nombre) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML += `${nombre}\n`;
    return;
}