console.log("Probando si linkeamos bien el archivo")

// DECLARACION DE VARIABLES
// Variables: son espacios de memoria a las cuales se les puede reasignar su valor.
// nombre de la variable = valor de la variable
// = simbolo de asignacion

// ES5 -> se utiliza la palabra var
var autor = "Jorge Luis Borges"
console.log(autor)
// reasigne el valor a la variable
autor = "Gabriel Garcia Marquez"
console.log(autor)

// ES6 -> se utiliza la palabra let (CORRECTO)
let precio = 4000
console.log(precio)
// reasigno el valor a precio
precio = 5000
console.log(precio)


// Constante: tambien es un espacio de memoria reservado, pero durante la ejecucion no cambia su valor. Se declara con const.
const IVA = 0.21
console.log(IVA)
// no puedo resignarle el valor a una consante
/* IVA = 0.30
console.log(IVA) */

const PI = 3.14
console.log(PI)
// Es case sensitive (distingue mayus. y minus.)
let Autor = "Isabel Allende"
console.log(Autor)

// tipo de dato entre comillas ("string") -> cadena de texto
// tipo de dato numerico (56) -> number


// DIFERENCIA ENTRE DECLARAR Y ASIGNAR

// Declarar una variable -> darle nombre y valor
let tituloLibro = "Aleph"
console.log(tituloLibro)
// Inicializar una variable
let tituloLibro2
console.log(tituloLibro2)
// Asignando valor
tituloLibro2 = "Cien anos de Soledad"
console.log(tituloLibro2)

let tituloLibro3 = "Paula"
console.log(tituloLibro3)


// APLICAR OPERACIONES BASICAS

// sumar -> signo +
let suma
let numero1 = 5
let numero2 = 10
let numero3 = "5"
suma = numero1 + numero2
console.log(suma)
// restar -> signo -
let resta = numero1 - numero2
console.log(resta)
// multiplicacion -> signo *
let ivaPrecio = IVA * precio
console.log(precio)
console.log(ivaPrecio)
// division -> signo /
let division = numero1 / numero2
console.log("El resultado de la division es " + division)

// Debo aclarar el tipo de dato en JS? NO, es debilmente tipado
// Typescript: un JavaScript fuertemente tipado: debemos aclarar el tipo de dato


// CONCATENAR
console.log("El nombre del autor es " + autor + " y su libro es " + tituloLibro2)

// sumamos num2 y num3, no realiza la suma, ya que num3 es un string y lo concatena
console.log("El resultado de la suma es " + (numero2 + numero3))

// PROMPT: cartel emergente con un INPUT
// Las primeras clases lo usaremos como forma de que el usuario ingrese info.
/* let autorIngresado = prompt("Ingrese su autor/a favorito/a")
let libroIngresado = prompt("Ingrese el nombre del libro")
console.log("El autor del libro es " + autorIngresado + " su obra se llama: " + libroIngresado) */

// ALERT: cartel emergente para mostrar informacion con un OUTPUT
/* alert("El autor/a del libro es: " + autorIngresado + " su obra se llama: " + libroIngresado) */


// Transformar un string a number: podemos usar parseInt
let numIngresado1 = parseInt(prompt("Ingrese el primer numero que desea sumar"))
let numIngresado2 = parseInt(prompt("Ingrese el primer numero que desea sumar"))
alert("La suma de los dos num es " + (numIngresado1 + numIngresado2))