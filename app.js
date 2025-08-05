let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.style.display = "block"; 
    lista.innerHTML = ""; 

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    const lista = document.getElementById("listaAmigos");

    resultado.innerHTML = "";

    if (amigos.length === 0) {
        alert("Debes añadir al menos un nombre.");
        return;
    }    
    lista.style.display = "none";

    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];    
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}


