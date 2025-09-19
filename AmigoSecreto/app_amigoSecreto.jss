const inputNombre = document.getElementById("nombre");
const btnAdicionar = document.getElementById("btnAdicionar");
const listaAmigos = document.getElementById("listaAmigos");
const btnSortear = document.getElementById("btnSortear");
const resultado = document.getElementById("resultado");

let amigos = [];

// Adicionar nombre a la lista
btnAdicionar.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    alert("Por favor ingresa un nombre válido.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  inputNombre.value = "";
  inputNombre.focus();
});

// Mostrar lista en pantalla
function mostrarLista() {
  listaAmigos.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    listaAmigos.appendChild(li);
  });
}

// Sorteo aleatorio
btnSortear.addEventListener("click", () => {
  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega nombres primero.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const amigoSecreto = amigos[indice];
  resultado.textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎁`;
});
