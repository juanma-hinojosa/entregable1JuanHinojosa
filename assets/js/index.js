// Array de objetos de destinos turisticos disponibles
const destinosTuristicos = [
  { id: 1, pais: "Brasil", ciudad: "San Pablo" },
  { id: 2, pais: "Estados Unidos", ciudad: "Miami" },
  { id: 3, pais: "Mexico", ciudad: "Cancun" },
  { id: 4, pais: "Italia", ciudad: "Toscana" },
  { id: 5, pais: "España", ciudad: "Ibiza" },
  { id: 6, pais: "Brasil", ciudad: "Maceio" },
];


// Esta funcion se encarga de obtener el nombre y apellido del pasajero
// El valor de nombre se retorna para ser utilizado en otra funcion
function nombreDePasajero() {
  let nombre = prompt("Por favor introduce tu nombre y apellido: ");
  
  while (nombre === "" || nombre === null) {
    nombre = prompt("Por favor introduce tu nombre y apellido CORRECTAMENTE: ");
  }

  alert(`Hola ${nombre}. Bienvenido a Flybondi`);
  return nombre;
}

// La funcion mostrarDestinos() se ocupa de iterar y mostrar por consola todos los elementos del array
function mostrarDestinos() {
  console.log("Lista de destino turisticos disponible");
  for (let index = 0; index < destinosTuristicos.length; index++) {
    const element = destinosTuristicos[index];
    console.log(`${element.id}. ${element.pais} - ${element.ciudad}`);
  }
}

// La funcion de seleccionarDestino(nombrePasajero) contiene un parametro
// EL parametro que pasamos lo obtenemos la funcion nombreDePasajero()
// Para lograr eso asignamos el valor retornado a una constante que es la que pasamos como parametro
function seleccionarDestino(nombrePasajero) {
  alert(`${nombrePasajero} preparate para elegir un destino`);
  let diasDeEstadia;
  let idSeleccionado;
  let destinoElegido = null

  while (destinoElegido === null) {
    idSeleccionado = prompt(
      `${nombrePasajero}, selecciona el número de ID de tu destino:

      1. Brasil - San Pablo
      2. Estados Unidos - Miami
      3. Mexico - Cancun
      4. Italia - Toscana
      5. España - Ibiza
      6. Brasil - Maceio
      `
    );

    if (idSeleccionado === null) {
      alert("Operación cancelada. ¡Esperamos verte pronto!");
      return; // Salimos de la función
    }

    destinoElegido = destinosTuristicos.find(
      (destino) => destino.id === parseInt(idSeleccionado)
    );

    if (destinoElegido) {
      diasDeEstadia = parseInt(prompt(`Cuantos dias te gustaria tomarte de vacaciones en ${destinoElegido.pais}? `))

      alert(
        `¡Excelente elección, ${nombrePasajero}! Tu vuelo es a ${destinoElegido.ciudad}, ${destinoElegido.pais} por ${diasDeEstadia} dias.`
      );
    } else {
      alert(
        "ID inválido. Por favor, ingresa uno de los números disponibles en la consola (1-6)."
      );
    }
  }
}


alert("Bienvenido a Flybondi, la libertad de volar.");
const nombreDelPasajero = nombreDePasajero();
mostrarDestinos();
seleccionarDestino(nombreDelPasajero);