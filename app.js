// Array para almacenar los nombres ingresados
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = ""; // Limpia el input
}

// Muestra la lista actualizada en pantalla
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.style.display = "block"; // Asegura que la lista esté visible al ingresar nombres
    lista.innerHTML = ""; // Limpia la lista antes de agregar

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

    // Oculta la lista después de sortear
    lista.style.display = "none";

    // Sortea un índice aleatorio
    const indice = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indice];

    // Muestra el resultado
    const li = document.createElement("li");
    li.textContent = `El amigo secreto es: ${amigoSorteado}`;
    resultado.appendChild(li);
}

