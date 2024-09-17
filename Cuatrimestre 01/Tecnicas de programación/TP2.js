// TP2

/*
    1. Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera
       (pueden utilizar el operador % de javascript para obtener el resto de la división entre dos números, por ejemplo 4%2 da como resultado 0,
       es decir, el resto de la división de 4 por dos, para la cual el resultado es 2).
*/
/*
    Ingresar (dividend, "Please insert first number: ")
    Ingresar (divisor, "Please insert second number: ")
    Asignar (quotient, dividend / divisor)
    Asignar (remainder, dividend % divisor)
    Mostrar (quotient, "The quotient is: ")
    Mostrar (remainder, "The remainder is: ")
*/
function quotientReminder(dividend, divisor) {
    let quotient = dividend / divisor
    let reminder = dividend % divisor
    return `The quotient is: ${quotient} and reminder is ${reminder}`
}
console.log(quotientReminder(9, 3))


/*
    2. Realizar un programa que permita al usuario ingresar una cadena de carecteres por teclado de cinco caracteres maximo y muestre por pantalla si es un palíndromo
       (palabra cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha que de derecha a izquierda).
*/

/*Ingresar (str, "Please insert string: ");
if(typeof str != "string" || str.length > 5){
  Mostrar(str, "The string cannot be more than 5 characters or not be string: ")

  let i = 0;
  let j = str.length;

  while(i < j) {
    if(str.charAt(i) != str.charAt(j)) {
      Mostrar(str, "This string is not a palindrome ")
      break;
    }
    i++, j--;
  }
}
else{
Mostrar(str, "This string is a palindrome!")
}*/

function palindrome(str) {
    let i = 0
    let j = str.length -1
    let result = ''
    if(typeof str != "string" || str.length > 5) {
        result = `The string ${str} cannot be more than 5 characters or not be string.`
    }
    else{
        while(i < j) {
            if(str.charAt(i) !== str.charAt(j)) {
                result = `The string ${str} is not a palindrome`
                break
            }
            i++
            j--
        }
        if(!result) {
            result = `${str} is a palindrome!`
        }
    }
    return result
}
console.log(palindrome("anit"))
console.log(palindrome("menem"))

/*
    3. Dado un cuadrado cuyo lado está definido por dos puntos:
       El origen de los ejes coordenados (0,0) y el punto (0,y), donde y es un número ingresado por el usuario; solicitar se ingrese un nuevo punto (x1,y1)
       e informar al usuario si el punto está dentro del cuadrado o no.
*/


/*
    4. Ingresar tres números y ordenarlos de menor a mayor, luego de mayor a menor, y luego que el usuario elija.
    .. 4.1. Resolver el mismo ejercicio pero ingresando cuatro números.
*/


/*
    5. ingresar un número entero y mostrar por pantalla la cantidad de cifras (si excede las cuatro cifras, mostrar por pantalla el mensaje: el número tiene más de cuatro cifras).
       Por ejemplo si se ingresa 2377, el programa debe mostrar: 2377: "cuatro cifras", si se ingresa el número 22, se debe mostrar: "22: dos cifras".
*/


/*
    6.  Escribir un algoritmo que determine si un año ingresado por el usuario es bisiesto o no (un año es bisiesto si es divisible por cuatro, y en caso que sea también
        divisible por 100 (1800, 1900, etc), el año tiene que ser también divisible por 400.
*/


/*
    7. Una tienda tiene la siguiente promoción de descuento: si la compra resulta entre $10000 y $20000, se realiza un descuento del 10%, entre $40000 y $20000 del 20% y si es
       superior a $40000 25%. La caja registradora va registrando los productos de la compra y sus cantidades, hasta que la cajera indica que se ha terminado con la compra.
       El programa debe continuar en ejecución hasta que la cajera indique que se cierra la caja.
    .. mostrar por pantalla al finalizar la mayor compra del día.
    .. La tienda cuenta con tres productos: zapatillas a $50000, remera a $7500 y medias a $1250.
*/


