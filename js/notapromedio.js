// Función para generar un número aleatorio entre un rango dado
function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generar el array de estudiantes con nombres y notas aleatorias
let estudiantes = [];
const nombres = ["noelia", "Juan", "Matías", "Susan", "Carlos", "Pablo", "Roberto", "Ignacio", "Paulo", "Jaime"];
for (let i = 0; i < 10; i++) {
    estudiantes.push({
        nombre: nombres[Math.floor(Math.random() * nombres.length)], // Selecciona un nombre aleatorio del array
        nota: generarNumeroAleatorio(20, 100)
    });
}
  // Mostrar el array de estudiantes
  console.log("Array de estudiantes:");
  console.log(estudiantes);
  
  // Encontrar la nota mayor, menor y promedio
  let notaMayor = estudiantes[0].nota;
  let notaMenor = estudiantes[0].nota;
  let sumaNotas = 0;
  
  for (let i = 0; i < estudiantes.length; i++) {
    let nota = estudiantes[i].nota;
    sumaNotas += nota;
  
    if (nota > notaMayor) {
      notaMayor = nota;
    }
  
    if (nota < notaMenor) {
      notaMenor = nota;
    }
  }
  
  let promedio = sumaNotas / estudiantes.length;
  
  // Mostrar resultados
  console.log("Nota mayor:", notaMayor);
  console.log("Nota menor:", notaMenor);
  console.log("Promedio:", promedio);
  