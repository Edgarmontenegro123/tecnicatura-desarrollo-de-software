// TP 6 Técnicas de programación

const prompt = require('prompt-sync')()

const createRandomArray = (randomValue) => {
    let arrLength = parseInt(prompt(`Por favor ingrese el valor de números aleatorios deseados: `))
    let randomArray = []
    let add = 0

    for(let i = 0; i < arrLength; i++) {
        randomArray[i] = Math.floor(Math.random() * randomValue) + 1
        add +=  randomArray[i]
    }
    return randomArray
}

/*1). Dado un array compuesto por la cantidad de números aleatorios que determine el usuario, realizar un programa que muestre por pantalla el promedio
      de esos números, y cuál es el número que se encuentra en la mitad del array.
*/
function averageArray() {
    let randomValue = 999
    let randomArray = createRandomArray(randomValue)
    let add = 0
    let average = 0

    for(let i = 0; i < randomArray.length; i++) {
        add +=  randomArray[i]
    }
    average = Math.round(add / randomArray.length)
    let pos = Math.round(randomArray.length / 2)

    return `La suma de el array ${randomArray} es ${add}, el promedio es: ${average} y la posición del medio equivale al número: ${randomArray[pos - 1]}`
}
console.log(averageArray())

/*2). Dado un array ordenado, buscar los números ingresados por usuario, indicando la posición del vector en que se encuentra o bien, mostrando por pantalla
      el mensaje de que el número no forma parte del vector.
*/

/*3). Dado un array compuesto por la cantidad de números aleatorios que determine el usuario, realizar un programa que muestre por pantalla el mismo array,
      pero con sus componentes invertidos, es decir, el último elemento en el primer lugar y lo mismo con el resto de los números.
      Por ejemplo el array [4, 5, 1, 6, 8, 9, 0, 2, 7] invertido es: [7, 2, 0, 9, 8, 6, 1, 5, 4].
*/
const investArray = () => {
    let randomValue = 999
    let randomArray = createRandomArray(randomValue)
    let arrLength = randomArray.length
    console.log(`Array inicial: ${randomArray}`)
    for(let i = 0; i < arrLength / 2; i++) {
        let temp = randomArray[i]
        randomArray[i] = randomArray[arrLength - i - 1]
        randomArray[arrLength - i - 1] = temp
    }
    return randomArray
}
console.log(investArray())

/*4). Dados dos arrays de 10 posiciones que almacenan números enteros.
      Realice un programa que determine si esos arrays son iguales (los arrays son iguales si los números en las mismas posiciones son iguales.
*/
function compareArrays(arr1, arr2) {
    if(arr1.length !== arr2.length){
        return `Los arrays tienen diferentes longitudes.`
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]){
            return `Los valores de los arrays en la posición ${i} no coinciden ${arr1[i]} !== ${arr2[i]}`
        }
    }
    return `Los arrays son iguales!`
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(compareArrays(arr1, arr2))

/*5). Dado un array compuesto por la cantidad de números aleatorios que determine el usuario, realizar un programa que muestre por pantalla los
      números repetidos y la cantidad de veces que se repitieron.
*/
const repeatedNumbers = () => {
    let randomValue = 9
    let randomArray = createRandomArray(randomValue)
    let uniqueNumbers = []
    let count = []
    let uniqueIndex = 0
    console.log(`Random Array: ${randomArray}`)

    for(let i = 0; i < randomArray.length; i++) {
        let number = randomArray[i]
        let found = false

        for(let j = 0; j < uniqueIndex; j++) {
            if(uniqueNumbers[j] === number){
                count[j]++
                found = true
                break
            }
        }
        if(!found) {
            uniqueNumbers[uniqueIndex] = number
            count[uniqueIndex] = 0
            uniqueIndex++
        }
    }
    return `El array original es ${randomArray}, 
            los números sin repetir son: ${uniqueNumbers} 
            y para cada posición del array de números sin repetir cada número se repite de esta manera: ${count}`
}
console.log(repeatedNumbers())

/*6). Dado un array compuesto por la cantidad de números aleatorios que determine el usuario, realizar un programa que ordene el array de menor a mayor.
      6.1 Agregar un menu para que el usuario pueda determinar de qué manera ordenar el array.
*/
const sortMinToMax = (randomArray) => {
    for(let i = 0; i < randomArray.length - 1; i++) {
        let minIndex = i
        for(let j = i + 1; j < randomArray.length; j++) {
            if(randomArray[j] < randomArray[minIndex]) {
                minIndex = j
            }
        }
        if(minIndex !== i) {
            let temp = randomArray[i]
            randomArray[i] = randomArray[minIndex]
            randomArray[minIndex] = temp
        }
    }
    return randomArray
}
// console.log(sortMinToMax())

const sortMaxToMin = (randomArray) => {
    for(let i = 0; i < randomArray.length; i++) {
        let maxIndex = i

        for(let j = i + 1; j < randomArray.length; j++) {
            if(randomArray[j] > randomArray[maxIndex]) {
                maxIndex = j
            }
        }
        if(maxIndex !== i) {
            let temp = randomArray[i]
            randomArray[i] = randomArray[maxIndex]
            randomArray[maxIndex] = temp
        }
    }
    return randomArray
}
// console.log(sortMaxToMin())

const menu = () => {
    return prompt(`Ingrese 1 para ordenar de menor a mayor ó 2 para ordenar de mayor a menor: `)
}
const orderArray = () => {
    let randomValue = 999
    let randomArray = createRandomArray(randomValue)
    let userChoice = menu()
    console.log(`Random array original: ${randomArray}`)
    if(userChoice === '1') {
        sortMinToMax(randomArray)
    }
    if(userChoice === '2') {
        sortMaxToMin(randomArray)
    }
    return randomArray
}
console.log(orderArray())
