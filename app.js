// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

// definir variables
let listaNombres = [];

function agregarAmigo() {
    
    // capturar el nombre ingresado en la entrada
    let nombreIngresado = document.getElementById('amigo').value;

    // nombre repetido o en formato inadecuado 
    if (nombreIngresado.trim() === '' || listaNombres.includes(nombreIngresado)) {
        alert('Por favor, ingresa un nombre valido y no repetido');
        limpiarCaja();
        return;  
    } else {
        // nombre valido
        if (validarNombre(nombreIngresado) == true){
            
            // agregar el nombre a la lista
            listaNombres.push(nombreIngresado); 
            // limpia la entrada de datos
            limpiarCaja();
            // mostrar lista de nombres
            mostrarListaDeNombres();

          // nombre con caracteres incorrectos
        } else{
            alert('Por favor, ingrese un nombre con los caracteres correctos!');
            limpiarCaja();
        }
    }

}

function validarNombre(nombre){
    // expresion regular que solo acepta letras
    const regex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    // valida si nombre contiene solo letras
    return regex.test(nombre);
}


function limpiarCaja() {
    document.querySelector('#amigo').value='';
}


function mostrarListaDeNombres(){
    // buscamos elemento ul por su id
    let listaHTML = document.querySelector('#listaAmigos');
    // limpiar lista
    listaHTML.innerHTML = '';

    // iterar sobre la lista y mostrar cada nombre
    for (let i = 0; i < listaNombres.length; i++){
        // crea un elemento li
        let listaItems = document.createElement('li');
        // asigna el nombre a li
        listaItems.textContent = listaNombres[i];
        // agrega li a ul
        listaHTML.appendChild(listaItems);
    }
    return;
}

function sortearAmigo(){

    size_lista = listaNombres.length;

    if(size_lista == 0) {
        alert('Agrega al menos un amigo');
    } else {
        let numeroAleatorio = Math.floor(Math.random()*size_lista);
        console.log(numeroAleatorio)
        //alert(`El amigo sorteado es: ${listaNombres[numeroAleatorio]}`);
        let amigoHTML = document.querySelector('#resultado');
        amigoHTML.innerHTML = listaNombres[numeroAleatorio];
    }
}
