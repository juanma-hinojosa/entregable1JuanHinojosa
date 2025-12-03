// ------ Datos base ------
const destinosTuristicos = [
  { id: 1, pais: "Brasil", ciudad: "San Pablo" },
  { id: 2, pais: "Estados Unidos", ciudad: "Miami" },
  { id: 3, pais: "Mexico", ciudad: "Cancun" },
  { id: 4, pais: "Italia", ciudad: "Toscana" },
  { id: 5, pais: "España", ciudad: "Ibiza" },
  { id: 6, pais: "Brasil", ciudad: "Maceio" },
];

// ------ Elementos del DOM ------
const inputNombre = document.getElementById("inputNombre");
const btnGuardarNombre = document.getElementById("btnGuardarNombre");
const saludo = document.getElementById("saludo");

const listaDestinos = document.getElementById("listaDestinos");
const inputDias = document.getElementById("inputDias");
const btnConfirmarViaje = document.getElementById("btnConfirmarViaje");

const resumen = document.getElementById("resumen");

let nombrePasajero = "";
let destinoSeleccionado = null;

// ------ 1. Guardar nombre ------
btnGuardarNombre.addEventListener("click", () => {
  const nombre = inputNombre.value.trim();

  if (nombre === "") {
    saludo.innerHTML = "⚠️ Por favor ingresa tu nombre.";
    return;
  }

  nombrePasajero = nombre;
  localStorage.setItem("nombrePasajero", nombre);

  saludo.innerHTML = `Hola <strong>${nombre}</strong>, bienvenido a Flybondi.`;
});

// ------ 2. Mostrar destinos en el DOM ------
function renderDestinos() {
  listaDestinos.innerHTML = "";

  destinosTuristicos.forEach((destino) => {
    const card = document.createElement("button");
    card.classList.add("destinoCard");
    card.innerText = `${destino.pais} - ${destino.ciudad}`;
    card.addEventListener("click", () => {
      destinoSeleccionado = destino;
      localStorage.setItem("destino", JSON.stringify(destino));
      marcarSeleccion(card);
    });

    listaDestinos.appendChild(card);
  });
}
renderDestinos();

// Estética – marcar seleccionado
function marcarSeleccion(card) {
  document.querySelectorAll(".destinoCard").forEach(btn => btn.classList.remove("seleccionado"));
  card.classList.add("seleccionado");
}

// ------ 3. Confirmar viaje ------
btnConfirmarViaje.addEventListener("click", () => {
  const dias = parseInt(inputDias.value);

  if (!destinoSeleccionado) {
    resumen.innerHTML = "<p>⚠️ Debes seleccionar un destino.</p>";
    return;
  }

  if (!dias || dias < 1) {
    resumen.innerHTML = "<p>⚠️ Ingresa una cantidad de días válida.</p>";
    return;
  }

  const resumenData = {
    nombre: nombrePasajero,
    destino: destinoSeleccionado,
    dias: dias,
  };

  localStorage.setItem("resumenViaje", JSON.stringify(resumenData));

  mostrarResumen(resumenData);
});

// ------ 4. Mostrar resumen ------
function mostrarResumen(data) {
  resumen.innerHTML = `
    <p><strong>Pasajero:</strong> ${data.nombre}</p>
    <p><strong>Destino:</strong> ${data.destino.ciudad}, ${data.destino.pais}</p>
    <p><strong>Días:</strong> ${data.dias}</p>
  `;
}
