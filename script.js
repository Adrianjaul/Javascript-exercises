//Ejercicios//
//Escribir una oración o texto por consola (que cuente lo que quieran)
//La oración o texto debe estar compuesto por 3 variables, 3 constantes. Y al menos 3 tipos de datos.
var nombre = "Adrian";
let apellido = "Jaular";
let edad = "37";

const saludo = "Hola";
const signoPuntuacion = '.';
const lenguaje = 'JavaScript';

console.log(saludo + ' soy ' + nombre + ' ' + apellido + signoPuntuacion);
console.log('Tengo ' + edad + ' años y estoy aprendiendo ' + lenguaje + '.');

//Ejercicios segunda parte//
//1
//Defina una función helloque devuelva 'Hello world!'. 
//Imprimirla en consola con un string que nos calare que ejercicio es.
function hello() {
    return 'Hello world!';
  }

  console.log(hello()); // imprime 'Hello world!'

//2
//Defina dos funciones.
//La primera función adebería devolver 'Hello a!'y la segunda función bdebería devolver 'Hello b!'.
//Imprimirla en consola con un string que nos calare que ejercicio es.
function a () {
    return "Hello a";
}

function b () {
    return "Hello b"
}
console.log('Ejercicio 2:');
console.log(a()); // imprime 'Hello a!'
console.log(b()); // imprime 'Hello b!'

//3
//Defina una función greet que devuelva el valor 'Haydo!'.
//Declarar una variable salutation. 
//Llame a la función greety asigne el resultado de la llamada a la variable salutation.
//Imprimirla en consola con un string que nos calare que ejercicio es.

function greet() {
    return 'Haydo!';
  }
  
  const salutation = greet();
  console.log('Ejercicio 3:', salutation); // imprime 'Ejercicio 3: Haydo!'