//desarrollador: delsy noelia cuellar chung
//fecha: 2024-04-15
//ejemplo: solicitar colores por consola y suma de dos números
function generarColor() {
    // Genera un valor hexadecimal aleatorio para cada componente de color (rojo, verde, azul)
    var color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return color;
  }
  
  // Ejemplo: Genera un color al azar y lo muestra en la consola
  var colorAleatorio = generarColor();
  console.log("Color aleatorio:", colorAleatorio);

  function generarYMostrarColor() {
    var colorAleatorio = generarColor();
    // Actualiza el color de fondo del div con el ID 'color-display'
    document.getElementById('color-display').style.backgroundColor = colorAleatorio;
    // Imprime el color generado en la consola
    console.log("Color aleatorio:", colorAleatorio);
  }
  // Genera y muestra un color aleatorio al cargar la página
  window.onload = function() {
    generarYMostrarColor();
  };
  //funcion para la suma de dos números aleatorios
  function sumarNumeros() {
    var num1= prompt("")
    var num1 = parseInt(document.getElementById('numero1').value);
    var num2 = parseInt(document.getElementById('numero2').value);
    var suma = num1 + num2;
    // Imprime la suma de los números en la consola
    console.log("La suma de", num1, "y", num2, "es:", suma);
  }
