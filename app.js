// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre && !amigos.includes(nombre)) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    } else {
        alert('Nombre inválido o ya agregado.');
    }
}

function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    if (amigos.length < 3) {
        alert('Agrega al menos 3 amigos para realizar el sorteo.');
        return;
    }

    const mezclado = [...amigos].sort(() => Math.random() - 0.5);
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    mezclado.forEach((amigo, i) => {
        const siguiente = mezclado[(i + 1) % mezclado.length];
        const li = document.createElement('li');
        li.textContent = `${amigo} ➔ ${siguiente}`;
        resultado.appendChild(li);
    });
}
