const prompt = require('prompt-sync')()

/*
    1) Escribir un programa que solicite al usuario un número y muestre por pantalla, la secuencia más larga de números consecutivos sin números primos
    entre 2 y el número ingresado por el usuario.
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