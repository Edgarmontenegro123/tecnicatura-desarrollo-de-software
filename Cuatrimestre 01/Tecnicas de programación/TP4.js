// TP4
const prompt = require('prompt-sync')()

/*
    1). Realizar un programa que pregunte al usuario un número y muestre por pantalla una figura como un tablero de ajedrez, pero con la cantidad de filas y columnas
    del número ingresado por el usuario. Las celdas negras estarán representadas por el símbolo # y las blancas por el caracter vacío.
*/
function isEvenNumber(num) {
    return num % 2 === 0;
}
function chessboard() {
    let dimension = parseInt(prompt("Ingrese un número para dimensionar el tablero! "))
    let char0
    let char1
    let res = ""

    for(let j = 0; j < dimension; j++) {
        if(isEvenNumber(j)) {
            char0 = "#"
            char1 = "@"
        }
        for(let i = 0; i < dimension; i++) {
            if(isEvenNumber(i)) {
                res += char0
            }
            else {
                res += char1
            }
        }
        res += "\n"
    }
    return res
}

console.log(chessboard())

/*
    2). Realizar un programa que pregunte al usuario un número y calcule el valor de su posición en la serie de Fibonacci.
    La serie de Fibonacci se define de la siguiente manera: Para el número 0 el resultado es 0 y para el 1 es 1, y para el resto de los números, el resultado es
    la suma de los dos números anteriores en la serie. Por ejemplo el valor en la serie para el número 6 es 8 debido a que los dos números que lo anteceden en la
    serie son 5 y 3, cuya suma es 8, y el de 13 es 233 porque 89 + 144 = 233.
    F0, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, F13...
     0,  1,  1,  2   3   5   8   13  21  34  55   89   144  233  ...
*/
function fibonacciPosition() {
    let position = parseInt(prompt("Ingrese un valor de posición: "))

    if(position < 1) {
        return position
    }
    let fib_prev = 0
    let fib_next = 1

    for (let i = 2; i <= position; i++) {
        const temp = fib_prev
        fib_prev = fib_next
        fib_next = temp + fib_next
    }
    return fib_next
}

console.log(fibonacciPosition())

/*
    3). Realizar un programa que pregunte al usuario una cadena de caracteres y muestre por pantalla la cantidad de caracteres repetidos.
*/
function repeatedCharacters() {
    let userString = prompt("Ingrese la cadena de caracteres: ")
    let res = 0
    let checkedChars = {}

    for(let i = 0; i < userString.length; i++) {
        if(!checkedChars[userString[i]]) {
            let count = 0
            for(let j = i + 1; j < userString.length; j++) {
                if(userString[i] === userString[j]) {
                    count ++
                }
            }
            if(count > 0) {
                res += count
            }
            checkedChars[userString[i]] = true
        }
    }
    return res
}

console.log(repeatedCharacters())

/*
    4). Realizar un programa que muestre por pantalla los primeros veinte números de la siguiente serie: 12233344445555...
    4.a) Idem para la serie: 123234345456567
*/
function serieNumber() {
    let numbersInSerie = 0
    // let initialNumber = 1
    let res = ""

    while(numbersInSerie < 20) {
        for (let i = 0; i <= numbersInSerie; i++) {
            res += numbersInSerie + 1
        }
        numbersInSerie++
    }
    return res

    // Solución para la serie: 123234345456567
    /*while(numbersInSerie < 20) {
        for (let i = 0; i < 3; i++) {
            res += initialNumber + i
            numbersInSerie++
        }
        initialNumber++
    }
    return res*/
}

console.log(serieNumber())


/*
    5). Realizar un programa que muestre por pantalla los diez primeros números de Armstrong (los números de armstrong tienen la característica de que si tienen n
    dígitos, la sumatoria de esos n dígitos del número elevados a la n es igual al número en cuestión, por ejemplo el 153 es un número de armstrong:
    1**3 + 5**3 + 3**3 = 153).
*/
function armstrongNumbers(num) {
    const numString = num.toString()
    const numDigits = numString.length
    let sum = 0

    for(let i = 0; i < numDigits; i++) {
        let digit = parseInt(numString[i])
        sum += digit ** numDigits
    }
    return sum === num
}

function firstTenArmstrongNumbers() {
    let maxNum = 10000
    let res = []
    for(let i = 0; i < maxNum; i++) {
        if(armstrongNumbers(i) && res.length <= 10) {
            res.push(i)
        }
    }
    return res
}
console.log(firstTenArmstrongNumbers())

/*
    6). Realizar un programa que muestre por pantalla la cantidad de divisores de los números que va ingresando un usuario por pantalla.
    El programa termina cuando el usuario ingresa el número 0.
*/
function dividers() {
    let num = parseInt(prompt("Ingresa un número para obtener sus divisores: "))
    let res = ""
    while(num !== 0) {
        let dividersNums = []
        for(let i = 1; i <= num; i++) {
            if(num % i === 0) {
                dividersNums.push(i)
            }
        }
        res += `Para el número ${num}, sus divisores son: ${dividersNums}\n`
        num = parseInt(prompt("Ingresa un nuevo número para obtener sus divisores o 0 para finalizar:"))
    }
    return res
}
console.log(dividers())

/*
    7). Realizar un programa que muestre por pantalla los diez primeros números perfectos (los números perfectos tienen la característica de que si tienen n
    divisores, la sumatoria de los divisores coincide con el número en cuestión, por ejemplo el 6 es un número perfecto: 1+2+3=6).
*/
function dividers2(num) {
    let dividersNums = []
    for(let i = 1; i < num; i++) {
        if(num % i === 0) {
            dividersNums.push(i)
        }
    }
    return dividersNums
}

function perfectNumbers() {
    let count = 0
    let num = 2
    let perfectNums = []

    while(count < 4) {
        // El quinto número perfecto es 33,550,336.
        // El sexto número perfecto es 8,589,869,056.
        let divisors = dividers2(num)
        let sumDivisors = 0

        for(let i = 0; i < divisors.length; i++) {
            sumDivisors += divisors[i]
        }
        if(sumDivisors === num) {
            perfectNums.push(num)
            count++
        }
        num++
    }
    return perfectNums

}
console.log(perfectNumbers())
