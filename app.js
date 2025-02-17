// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let ListaDeAmigos = [];
function agregarAmigo() {
    let ingresaAmigo = document.getElementById("amigo").value.trim();
    if (ingresaAmigo.trim() === "") {
        alert("APP AMIGO SECRETO \n" + String.fromCodePoint(0x26A0) + "Mensaje:\nIngresa los nombre de tus amigos!")
    }else {
       if (ListaDeAmigos.includes(ingresaAmigo)) {
            alert("APP AMIGO SECRETO \n" + String.fromCodePoint(0x26A0) + "Mensaje:\n Este valor ya existe, si tienes a otro amigo con el nombre igual, diferencialo con su apellido")
        } else {
            ListaDeAmigos.push(ingresaAmigo);
            imprimirLista();
        }
      
       reinicio();
    }
}

function imprimirLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de agregar elementos

    ListaDeAmigos.forEach(amigo => {
        let li = document.createElement("li"); // Crear elemento <li>
        li.textContent = amigo; // Agregar texto
        lista.appendChild(li); // Insertar en la lista
    });
}

function reinicio() {
    document.getElementById("amigo").value = "";
    document.getElementById("amigo").focus();
}

function sortearAmigo() {
    if (ListaDeAmigos.length === 0 ) {
        alert("APP AMIGO SECRETO \n" + String.fromCodePoint(0x26A0) + "Mensaje:\nNo has ingresado amigos!")
    } else {
        let indiceAmigo =  Math.floor(Math.random()*ListaDeAmigos.length);
        imprimirResultado(indiceAmigo);
    }
    reinicio();
    
}


function imprimirResultado(indice) {
    let lista = document.getElementById("resultado");
    lista.innerHTML = "El amigo seleccionado es: " + ListaDeAmigos[indice].toUpperCase();
   }

