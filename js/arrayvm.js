// Arrays de nombres y apellidos
const NELEMENTOS=10;
 nombres = ["Juan", "María", "Pedro", "Ana", "Luis","Noelia","Susan","Marce","Daniela","Robert"];
 apellidos = ["García", "Rodríguez", "Martínez", "Fernández", "López","Chung","Cuellar","Araúz","Saucedo"];

// Función para generar un nombre completo aleatorio
function generarNombreCompleto() {
  const nombreAleatorio = nombres[Math.floor(Math.random() * nombres.length)];
  const apellidoAleatorio = apellidos[Math.floor(Math.random() * apellidos.length)];
  return `${nombreAleatorio} ${apellidoAleatorio}`;
}

// Función para generar un array de nombres completos aleatorios sin repeticiones
function generarArrayNombresSinRepeticiones(cantidad) {
  const nombresSet = new Set();
  while (nombresSet.size < cantidad) {
    nombresSet.add(generarNombreCompleto());
  }
  return Array.from(nombresSet);
}

// Generar un array de 10 nombres completos aleatorios sin repeticiones
const cantidadNombres = 10;
const nombresAleatorios = generarArrayNombresSinRepeticiones(cantidadNombres);

// Mostrar el array generado
console.log(nombresAleatorios);
