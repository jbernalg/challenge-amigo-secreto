// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// definir variables
let listaNombres = [];

function agregarAmigo() {
    // capturar el nombre ingresado en la entrada
    let nombreIngresado = document.getElementById('amigo').value;

    // validar que el nombre ingresado tenga el formato correcto
    if (nombreIngresado.trim() === '' || listaNombres.includes(nombreIngresado)) {
        alert('Por favor, ingresa un nombre valido y no repetido');
        return;
    } else {
        
        // agregar el nombre a la lista
        listaNombres.push(nombreIngresado);

        // mostrar por consola
        for(let i=0; i < listaNombres.length; i++){
            console.log(listaNombres[i]);
        }  
        
        // limpia la entrada de datos
        limpiarCaja();
        
        // mostrar lista de nombres
        mostrarListaDeNombres();
        
    }

}


function limpiarCaja() {
    document.querySelector('#amigo').value='';
}


function mostrarListaDeNombres(){
    let listaHTML = document.querySelector('#listaAmigos');
    listaHTML.innerHTML = '';

    for (let i = 0; i < listaNombres.length; i++){
        let listaItems = document.createElement('li');
        listaItems.textContent = listaNombres[i];
        listaHTML.appendChild(listaItems);
    }
    return;
}

// funcion que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}