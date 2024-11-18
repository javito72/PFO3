/*///////////////// Ejercicio N° 1 //////////////////*/
// Función para calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
  return longitud * ancho;
}

console.log("/////////////// Solución 1: Cálculo del Área de un Rectángulo ///////////////");
console.log();

// Ejemplo 1
console.log("Ejemplo 1:");
console.log("Rectángulo de 30 x 5");
console.log("Área:", calcularAreaRectangulo(30, 5)); // Resultado: 150
console.log(".........................");

// Ejemplo 2
console.log("Ejemplo 2:");
console.log("Rectángulo de 10 x 8");
console.log("Área:", calcularAreaRectangulo(10, 8)); // Resultado: 80
console.log(".........................");

// Ejemplo 3
console.log("Ejemplo 3:");
console.log("Rectángulo de 4.5 x 2.5");
console.log("Área:", calcularAreaRectangulo(4.5, 2.5)); // Resultado: 11.25
console.log(".........................");

console.log("______________________________________________________________");
console.log("______________________________________________________________");

/* 
Proceso de pensamiento:
1. Identifico la fórmula matemática: área = longitud × ancho.
2. Creo una función que recibe dos parámetros.
3. Devuelvo directamente la multiplicación para mantener el código simple.

Análisis y resolución:
- Función simple que multiplica longitud por ancho para calcular el área.
- Probé con números enteros y decimales para verificar su funcionamiento.
*/


/*///////////////// Ejercicio N° 2 //////////////////*/
// Función para contar palabras en una cadena
function contarPalabras(texto) {
  return texto.trim().split(/\s+/).length;
}

console.log("/////////////// Solución 2: Contar Palabras en una Cadena ///////////////");
console.log();

// Ejemplo 1
console.log("Ejemplo 1:");
console.log('Texto: "HTML y CSS no son lenguajes de programación"');
console.log("Cantidad de palabras:", contarPalabras("HTML y CSS no son lenguajes de programación")); // Resultado: 8
console.log(".........................");

// Ejemplo 2
console.log("Ejemplo 2:");
console.log('Texto: "JavaScript    es    un    lenguaje    de    programación"');
console.log("Cantidad de palabras:", contarPalabras("JavaScript    es    un    lenguaje    de    programació")); // Resultado: 6
console.log(".........................");

// Ejemplo 3
console.log("Ejemplo 3:");
console.log('Texto: "¡Hola,   Mundo!"');
console.log("Cantidad de palabras:", contarPalabras("¡Hola,   Mundo!")); // Resultado: 2
console.log(".........................");

console.log("______________________________________________________________");
console.log("______________________________________________________________");

/* 
Proceso de pensamiento:
1. Pienso en cómo identificar una palabra: texto separado por espacios.
2. Considero casos especiales: espacios múltiples, espacios al inicio/final.
3. Elijo método split() con regex para manejar todos los casos de una vez.

Análisis y resolución:
- Usé trim() para eliminar espacios externos y split() con regex para dividir por espacios.
- La función maneja automáticamente casos con múltiples espacios entre palabras.
*/


/*///////////////// Ejercicio N° 3 //////////////////*/
// Función para invertir una cadena
function invertirCadena(texto) {
  return texto.split('').reverse().join('');
}

console.log("/////////////// Solución 3: Invertir una Cadena ///////////////");
console.log();

// Ejemplo 1
console.log("Ejemplo 1:");
console.log('Texto original: "programación"');
console.log("Texto invertido:", invertirCadena("programación")); // Resultado: "nóicamargorp"
console.log(".........................");

// Ejemplo 2
console.log("Ejemplo 2:");
console.log('Texto original: "JAVASCRIPT"');
console.log("Texto invertido:", invertirCadena("JAVASCRIPT")); // Resultado: "TPIRCSAVAJ"
console.log(".........................");

// Ejemplo 3
console.log("Ejemplo 3:");
console.log('Texto original: "¡Hola, Mundo!"');
console.log("Texto invertido:", invertirCadena("¡Hola, Mundo!")); // Resultado: "!odnuM ,aloH¡"
console.log(".........................");

console.log("______________________________________________________________");

/* 
Proceso de pensamiento:
1. Para invertir texto necesito trabajar con caracteres individuales.
2. Tengo que buscar la manera más eficiente de manipular caracteres, por ejemplo usando array.
3. Tengo que encadenar métodos para hacerlo en una sola línea de código.

Análisis y resolución:
- Convierto el texto a array, invierto el orden y vuelvo a unirlo.
- Funciona con cualquier tipo de carácter (espacios, signos, mayúsculas).
*/


/*///////////////// Ejercicio N° 4 //////////////////*/
// Función para verificar si una palabra es un palíndromo
function esPalindromo(texto) {
  const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, '');
  return textoLimpio === textoLimpio.split('').reverse().join('');
}

console.log("/////////////// Solución 4: Verificar Palíndromo ///////////////");
console.log();

// Ejemplo 1
console.log("Ejemplo 1:");
console.log('Texto: "rotor"');
console.log("¿Es palíndromo?:", esPalindromo("rotor")); // Resultado: true
console.log(".........................");

// Ejemplo 2
console.log("Ejemplo 2:");
console.log('Texto: "Anita lava la tina"');
console.log("¿Es palíndromo?:", esPalindromo("Anita lava la tina")); // Resultado: true
console.log(".........................");

// Ejemplo 3
console.log("Ejemplo 3:");
console.log('Texto: "JavaScript"');
console.log("¿Es palíndromo?:", esPalindromo("JavaScript")); // Resultado: false
console.log(".........................");

console.log("______________________________________________________________");
console.log("______________________________________________________________");

/* 
Proceso de pensamiento:
1. Identifico qué hace a un texto palíndromo: es igual al derecho y al revés.
2. Considero que espacios y mayúsculas no deben afectar el resultado.
3. Reutilizo la lógica de invertir texto del ejercicio anterior.

Análisis y resolución:
- Limpié el texto (minúsculas y sin caracteres especiales).
- Comparé el texto con su versión invertida.
- Funciona tanto con palabras como con frases.
*/


/*///////////////// Ejercicio N° 5 //////////////////*/
function edadCanina() {
  const edadPerro = prompt("Ingrese la edad de su perro:");
  const edadPerroNumerica = Number(edadPerro);

  if (!isNaN(edadPerroNumerica) && edadPerroNumerica > 0) {
      const edadHumana = edadPerroNumerica * 7;
      console.log(`Tu perro tiene ${edadHumana} años humanos.`);
      alert(`Tu perro tiene ${edadHumana} años humanos.`);
  } else {
      const mensajeError = "Por favor, ingrese un número válido y positivo para la edad del perro.";
      console.log(mensajeError);
      alert(mensajeError);
  }
}

console.log("/////////////// Solución 5: Edad de un perro a años humanos ///////////////");
console.log();
console.log(".........................");
edadCanina();
console.log(".........................");
console.log();
console.log(".........................");
edadCanina();
console.log(".........................");
console.log();
console.log(".........................");
edadCanina();
console.log(".........................");
console.log("______________________________________________________________");
console.log("______________________________________________________________");

/* 
Proceso de pensamiento:
1. Obtengo la edad del perro vía prompt().
2. Valido que sea un número positivo.
3. Convierto la edad del perro a edad humana (1 año del perro = 7 años del humano).
4. Muestro resultado o error al usuario

Análisis y resolución:
- Entrada: prompt() para edad del perro.
- Validación: convierto a número y verifico si es positivo.
- Proceso: se multiplica por 7 si es válido.
- Salida: muestro resultado o error vía console y alert.
*/
