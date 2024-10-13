// TP 5 Técnicas de programación

const prompt = require('prompt-sync')()

/*
    1). Siguiendo en forma aproximada la distribución estadística de Maxwell-Boltzmann.
    Obtener la cantidad de experimentos que hicieron falta realizar para obtener diez exitosos.
    Cada experimento consiste en generar 100 números aleatorios entre 1 y 10. Si la suma es inferior o igual a 355 el experimento se considera exitoso.
*/
function maxwellBoltzman() {
    let totalTests = 0
    let successfulTests = 0
    let maxNums = 100
    let totalAdd = 0

    while (successfulTests < 10) {
        for(let i = 1; i <= maxNums; i++) {
            let randomNums = Math.floor(Math.random() * 9) + 1
            totalAdd += randomNums
        }
        if(totalAdd <= 400) {
            successfulTests++
        }
        totalAdd = 0
        totalTests++
    }
    return `Para obtener 10 experimentos exitosos se necesitaron ${totalTests} tests en total.`
}
console.log(maxwellBoltzman())

/*
    2). Escribir un programa que solicite al usuario un número y muestre por pantalla, la secuencia más larga de números consecutivos sin números primos
    entre 2 y el número ingresado por el usuario.  Por ejemplo si el usuario ingresa el número 12, el resultado debería ser: 8,9,10.
*/
function isPrimeNumber(input) {
    let isPrime = true
    if(input < 2) return false

    for (let i = 2; i < input; i++) {
        if (input % i === 0) {
            isPrime = false
            break
        }
    }
    return isPrime
}
function longSerie() {
    let input = parseInt(prompt("Ingrese el número: "))
    let serie = []
    let longestSerie = []

    for(let i = 2; i <= input; i++) {
        if(!isPrimeNumber(i)) {
            serie.push(i)
        }
        else {
            if(serie.length > longestSerie.length) {
                longestSerie = serie
            }
            serie = []
        }
    }
    if(serie.length > longestSerie.length) {
        longestSerie = serie
    }
    return `La secuencia más larga de números sin primos es: ${longestSerie}`
}
console.log(longSerie())

/*
    3). Realizar un algoritmo que permita a un usuario jugar al tatetí.
*/




/*
    4). Realizar un algoritmo que muestre por pantalla la siguiente figura

    * * * * * * *
    * * * * * *
    * * * * *
    * * * *
    * * *
    * *
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *
    * * * * * * *
*/
function figure() {
    let print = `* * * * * * *`
    let res = ''
    for (let i = print.length; i > 1; i --) {
        let string = ''
        for(let j = 0; j < i; j++) {
            string += print[j]
        }
        res += string + '\n'
        i--
    }
    let newString = ''
    for (let i = 0; i < print.length; i++) {
        newString += '* '
        i++
        res += newString + '\n'
    }
    return res
}
console.log(figure())

/*
    5). Realizar un algoritmo que muestre por pantalla la siguiente figura:
    * * * * * *
    * * * * *
    * * * *
    * * *
    * *
    *
    * *
    * * *
    * * * *
    * * * * *
    * * * * * *
*/
function figure2() {
    let print = '* * * * * *'
    let result = ''

    for(let i = print.length; i > 1; i--) {
        let string = ''
        for(let j = 0; j < i; j++) {
            string += print[j]
        }
        result += string + '\n'
        i--
    }
    let newString = ''
    for(let i = 0; i < print.length; i++) {
        newString += '* '
        i++
        result += newString + '\n'
    }
    return result
}
console.log(figure2())