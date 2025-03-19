let nombres = [];

document.getElementById("adicionarBtn").addEventListener("click", agregarNombre);
document.getElementById("sortearBtn").addEventListener("click", sortearAmigo);

function agregarNombre() {
    let input = document.getElementById("nombre");
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    nombres.push(nombre);
    input.value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaNombres");
    lista.innerHTML = "";
    nombres.forEach(nombre => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });

    document.getElementById("sortearBtn").disabled = nombres.length < 2;
}

function sortearAmigo() {
    if (nombres.length === 0) {
        alert("Agrega al menos un nombre antes de sortear.");
        return;
    }

    let nombreSorteado = nombres[Math.floor(Math.random() * nombres.length)];
    document.getElementById("resultado").innerHTML = `<h2>Amigo Secreto: ${nombreSorteado}</h2>`;
}
