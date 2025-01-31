// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// definir lista de amigos
let amigos = [];


function agregarAmigo() {
    /*
     función que permite al usuario ingresar un nombre en el campo de texto
    y añadirlo a la lista de amigos creada anteriormente.
    */
    
    // capturar el nombre ingresado en la entrada
    let nombreIngresado = document.getElementById('amigo').value;

    // si el nombre es valido, agregarlo a la lista y mostrar lista
    if (validarNombre(nombreIngresado) == true){
        // agregar el nombre a la lista
        amigos.push(nombreIngresado); 
        // limpia la entrada de datos
        limpiarCaja();
        // mostrar lista de amigos
        mostrarListaDeAmigos()
    }


}

function validarNombre(nombre){
    /*
    funcion que retorna true si el nombre no es vacio, no esta
    en la lista y posee solo letras. Retorna false en caso contrario
    */
   band = true;

    if (nombre.trim() === '') {
        alert('Por favor, ingrese un nombre valido');
        limpiarCaja();
        band = false;
    }  
        
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido ingesado. Intenta con otro');
        limpiarCaja();
        band = false;
    }
    
    // expresion regular que solo acepta letras
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    if (regex.test(nombre) == false){
        alert('Por favor, inserte un nombre con los caracteres correctos!');
        limpiarCaja();
        band = false;
    }

    return band;
}


function limpiarCaja() {
    /*
    funcion que limpia la caja de entrada
    */
    document.querySelector('#amigo').value='';
}


function mostrarListaDeAmigos(){
    /*
    función que recorre el array amigos y agrega cada nombre como 
    un elemento <li> dentro de una lista HTML. 
    */

    // buscamos elemento ul por su id
    let listaHTML = document.querySelector('#listaAmigos');
    // limpiar lista
    listaHTML.innerHTML = '';

    // iterar sobre la lista y mostrar cada nombre
    for (let i = 0; i < amigos.length; i++){
        // crea un elemento li
        let listaItems = document.createElement('li');
        // asigna el nombre a li
        listaItems.textContent = amigos[i];
        // agrega li a ul
        listaHTML.appendChild(listaItems);
    }
    return;
}


function sortearAmigo(){
    /*
    función que selecciona de manera aleatoria uno de los nombres 
    almacenados en el array amigos y lo muestra en un elemento ul.
    */

    // tamano de la lista de amigos
    size_lista = amigos.length;

    // si la lista esta vacia, mostrar mensaje
    if(size_lista == 0) {
        alert('Agrega al menos un amigo');
      
      // si la lista contiene elementos, seleccionar amigo aleatoriamente
    } else {
        let numeroAleatorio = Math.floor(Math.random()*size_lista);
        let amigoHTML = document.querySelector('#resultado');
        amigoHTML.innerHTML = amigos[numeroAleatorio];
    }
}
