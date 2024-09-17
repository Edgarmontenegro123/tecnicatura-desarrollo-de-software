// TP3 - Técnicas

/*1. realizar un algoritmo que muestre por pantalla todos los números pares que hay entre 1 y 50. No utilizar la función nativa de javascript %,
     emplear funciones definidas en el programa en su lugar.
1.2 agregar después de listar los números divisibles por dos, los divisibles por tres y luego por cinco.*/


function calculateResto(num, div) {
    while(num >= div) {
        num -= div;
    }
    return num === 0;
}
/*function evenOrOdd(num) {
    while(num >= 2) {
        num -= 2;
    }
    return num === 0;
}

function divisibleByThree(num) {
    while(num >= 3) {
        num -= 3;
    }
    return num === 0;
}

function divisibleByFive(num) {
    while(num >= 5) {
        num -= 5;
    }
    return num === 0;
}*/

function evenNumFromOneToFifty() {
    let arr = [];
    let arr2 = [];
    let arr3 = [];
    let arr4 = [];

    for(let i = 1; i <= 50; i++) {
        if(calculateResto(i, 2)) {
            arr.push(i);
        }
        if(calculateResto(i, 3)) {
            arr2.push(i);
        }
        if(calculateResto(i, 5)) {
            arr3.push(i);
        }
        if(calculateResto(i, 10)) {
            arr4.push(i);
        }
    }
    return `Arr: ${arr}, Arr2: ${arr2}, Arr3: ${arr3}, Arr4: ${arr4}`;
}

console.log(evenNumFromOneToFifty());






/*2. Realizar un algoritmo que permita al usuario ingresar un número por teclado y muestre por pantalla si el número es primo (un número es primo cuando únicamente es divisible por sí mismo y por uno).
2.1 Mostrar por pantalla los primeros veinte números primos.*/

/*3. Realizar un programa que pregunte primero un número del 1 al 1000 a un usuario, y luego permita a otro usuario en seis oportunidades adivinar ese número.
    El programa debe indicar por pantalla si el número ingresado es mayor o menor al que debe adivinar, y además informar si la diferencia es grande, pequeña o muy pequeña,
    dependiendo si esta es mayor a 200 y mayor a 20 respectivamente.*/

/*4. Realizar un algoritmo que intercambie los valores de dos variables numéricas utilizando solo esas dos variables (si almaceno el primer valor que ingresa el usuario en la
   variable num1 y el segundo en la variable num2, al final del programa el valor que estaba en num1 debe quedar en num2 y viceversa).
   Únicamente se puede utilizar esas dos variables.*/

/*5. Realizar un algoritmo que solicite al usuario ingresar un número y muestre por pantalla la cantidad de números ‘3’ que contiene.*/

/*6. Un comercio necesita automatizar el cálculo para dar el vuelto a los clientes. Realizar un algoritmo que solicite al cajero del comercio que ingrese la cantidad de monedas de $5
   y de $1 que dispone y el monto del vuelto a devolver. El programa debe informar al cajero si dispone de las monedas suficientes para devolver el vuelto justo o no.
   La cantidad de monedas de $1 no puede ser mayor que cuatro. En caso de que no se pueda dar el vuelto justo, informar al usuario si faltan monedas de $5, de $1 o ambas.*/

/*
7). Realice un algoritmo que permita al usuario ingresar un número por teclado y muestre por pantalla una pirámide de la siguiente forma, en la cual la fila correspondiente
    al número ingresado sea la que tiene la cúspide.  Por ejemplo si se ingresa el número 6, se debería obtener el siguiente gráfico:

    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *
    * * * * *
    * * * *
    * * *
    * *
    *
*/

/*8) Realice un algoritmo que permita al usuario ingresar números y muestre por pantalla el factorial de esos números. El programa debe continuar en ejecución hasta que el usuario
    ingrese el número cero.
    El factorial se obtiene multiplicando todos los números iguales o menores que el número dado comenzando por el uno, por ejemplo el factorial de 4 es (1*2*3*4), es decir, 4!=24.*/
