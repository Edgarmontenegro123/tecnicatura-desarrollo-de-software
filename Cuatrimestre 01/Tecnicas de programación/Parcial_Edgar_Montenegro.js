// Técnicas de programación.2024_2c
// Primer parcial

const prompt = require('prompt-sync')()

/*
    1). Realizar un algoritmo que solicite a un usuario ingresar números binarios por teclado e indique su equivalente decimal
    (ie en base diez).
    El programa debe continuar solicitando números al usuario hasta que ingrese el número cero.
*/
function binToDec() {
    let userInput = prompt(`Por favor ingrese el número binario que desea convertir: `)

    while(parseInt(userInput) !== 0) {
        let numDec = 0

        for(let i = 0; i < userInput.length; i++) {
            let digit = userInput[userInput.length - 1 - i]
            if (digit === '1') {
                numDec += Math.pow(2, i);
            }
        }
        console.log(`El número ${userInput} pasado a decimal es igual a ${numDec}`)
        userInput = prompt(`Ingrese nuevo número ó 0 para finalizar: `)
    }
    return `Programa finalizado!`
}
console.log(binToDec())

/*
    3). Realice un algoritmo que permita al usuario ingresar dos números por teclado (la base y la altura) y muestre por pantalla
    el rectángulo resultante.  Por ejemplo si se ingresa los números 6 de base y 3 de altura, se debería obtener el siguiente gráfico:
    ******
    ******
    ******
*/
function rectangle() {
    let base = parseInt(prompt(`Por favor ingrese el valor de la base: `))
    let height = parseInt(prompt(`Por favor ingrese el valor de la altura: `))
    let printBase = ''

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < base; j++) {
            printBase += '*'
        }
        printBase += '\n'
    }
    return(`${printBase}`)
}
console.log(rectangle())

/*
    4). Realizar un programa que pregunte al usuario un número y muestre por pantalla el resultado de la siguiente serie llegando
    hasta la posición indicada por el usuario: 1+ n^1/n^2 + n^2/n^3 + n^2/n^3 + n^3/n^4 ...
    (por ejemplo si el usuario ingresa el número 5, el resultado debería ser:
    1+(5**1 / 5**2)+(5**2 / 5**3)+(5**3 / 5**4)+(5**4 / 5**5)
*/
function serie() {
    let input = parseInt(prompt(`Por favor ingrese un número: `))
    let result = 1

    for(let i = 1; i < input; i++) {
        result += Math.pow(input, i) / Math.pow(input, i + 1)
    }
    return `El resultado de la serie es: ${result}`
}
console.log(serie())
