// TP2

const readLine = require('readline')
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

/*
    1. Dados dos números enteros ingresados por el usuario realizar un algoritmo que calcule el cociente y el resto de su división entera
       (pueden utilizar el operador % de javascript para obtener el resto de la división entre dos números, por ejemplo 4%2 da como resultado 0,
       es decir, el resto de la división de 4 por dos, para la cual el resultado es 2).
*/
/*
    Ingresar (dividend, "Please insert first number:")
    Ingresar (divisor, "Please insert second number:")
    Asignar (quotient, dividend / divisor)
    Asignar (remainder, dividend % divisor)
    Mostrar (quotient, "The quotient is:")
    Mostrar (remainder, "The remainder is:")
*/
function quotientReminder(dividend, divisor) {
    let quotient = dividend / divisor
    let reminder = dividend % divisor
    return `The quotient is: ${quotient} and reminder is ${reminder}`
}
console.log(quotientReminder(9, 3))


/*
    2. Realizar un programa que permita al usuario ingresar una cadena de caracteres por teclado de cinco caracteres máximo y muestre por pantalla si es un palíndromo
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
function insideSquare(y, x1, y1) {

    y = Number(y)
    x1 = Number(x1)
    y1 = Number(y1)

    if(x1 >= 0 && x1 <= y && y1 >= 0 && y1 <= y) {
        return "El punto está dentro del cuadrado!"
    }
    return "El punto no se encuentra dentro del cuadrado!"
}

console.log(insideSquare(1, 1, 1))
console.log(insideSquare(1, 2, 1))


/*
    4. Ingresar tres números y ordenarlos de menor a mayor, luego de mayor a menor, y luego que el usuario elija.
    4.1. Resolver el mismo ejercicio pero ingresando cuatro números.
*/
function sortNumbersFromGreatestToLeast(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

function sortNumbersFromLeastToGreatest(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] < arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}

let arr = [3, 5, 2, 0, 9]
console.log(sortNumbersFromGreatestToLeast(arr))
console.log(sortNumbersFromLeastToGreatest(arr))


/*
    5. ingresar un número entero y mostrar por pantalla la cantidad de cifras (si excede las cuatro cifras, mostrar por pantalla el mensaje: el número tiene más de cuatro cifras).
       Por ejemplo si se ingresa 2377, el programa debe mostrar: 2377: "cuatro cifras", si se ingresa el número 22, se debe mostrar: "22: dos cifras".
*/
function numbersOfFigures(num) {
    let numStr = num.toString()
    switch (numStr.length) {
        case 4: return ` El número ${num} tiene 4 cifras`
        case 3: return ` El número ${num} tiene 3 cifras`
        case 2: return ` El número ${num} tiene 2 cifras`
        case 1: return ` El número ${num} tiene 1 cifra`
        default: return "El número tiene más de 4 cifras."
    }
}

console.log(numbersOfFigures("1345"))
console.log(numbersOfFigures(145))
console.log(numbersOfFigures(15))
console.log(numbersOfFigures(5))
console.log(numbersOfFigures(15458))


/*
    6.  Escribir un algoritmo que determine si un año ingresado por el usuario es bisiesto o no (un año es bisiesto si es divisible por cuatro, y en caso de que sea también
        divisible por 100 (1800, 1900, etc.), el año tiene que ser también divisible por 400.
*/
function leapYear(year) {
    year = year.toString()
    let len = year.toString().length

    for(let i = len; i > len - 2; i--) {
        if(year % 100 === 0 && year % 400 === 0) {
            return `El año ${year} es un año bisiesto`
        }
        if(year % 4 === 0 && !year % 400 === 0) {
            return `El año ${year} es un año bisiesto`
        }
    }
    return `El año ${year} no es un año bisiesto`
}

console.log(leapYear(2000))

/*
    7. Una tienda tiene la siguiente promoción de descuento: si la compra resulta entre $10000 y $20000, se realiza un descuento del 10%, entre $40000 y $20000 del 20% y si es
       superior a $40000 25%. La caja registradora va registrando los productos de la compra y sus cantidades, hasta que la cajera indica que se ha terminado con la compra.
       El programa debe continuar en ejecución hasta que la cajera indique que se cierra la caja.
       mostrar por pantalla al finalizar la mayor compra del día.
       La tienda cuenta con tres productos: zapatillas a $50000, remera a $7500 y medias a $1250.
*/
function purchaseDiscount(totalBuy = 0) {
    const prices = {
        z: 50000,
        r: 7500,
        m: 1250
    }

    rl.question("Ingresar producto (z = zapatillas. r = remera, m = medias o finalizar = fin) para terminar la compra: ", (input) => {
        if(input === "fin") {
            console.log("Fin de la compra!")
            applyDiscount(totalBuy)
        }
        else if(input === "z" || input === "r" || input === "m") {
            totalBuy += prices[input]
            console.log(`Agregaste ${input}. Total actual: ${totalBuy}`)
            purchaseDiscount(totalBuy)
        }
        else {
            console.log("Producto no válido. Intenta de nuevo.")
            purchaseDiscount(totalBuy)
        }
    })
}

purchaseDiscount()
function applyDiscount(totalBuy) {
    let totalBuyWithDiscount = totalBuy
    let highestPurchase = 0

    if(totalBuy > 40000) {
        totalBuyWithDiscount = totalBuy * 0.75 // 25% discount
    }
    else if(totalBuy > 20000 && totalBuy <= 40000) {
        totalBuyWithDiscount = totalBuy * 0.80 // 20% discount
    }
    else if(totalBuy > 10000 && totalBuy <= 20000) {
        totalBuyWithDiscount = totalBuy * 0.90 // 10% discount
    }
    console.log(`El total de la compra es: ${totalBuy}`)
    if(totalBuy !== totalBuyWithDiscount) {
        console.log(`Se aplicó un descuento. Total: ${totalBuyWithDiscount}`)
    }
    if(totalBuyWithDiscount > highestPurchase) {
        highestPurchase = totalBuyWithDiscount
    }
    rl.close()
    return `La mayor compra del día fue de: ${highestPurchase}`
}


