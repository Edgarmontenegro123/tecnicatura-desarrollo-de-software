// TP1

/* 
    1) Se desea calcular la distancia recorrida (en metros) por un móvil que tiene una velocidad constante (m/s) durante un tiempo T (Sg), 
    ambos valores ingresados por el usuario. Considerar que es un MRU (Movimiento Rectilíneo Uniforme).
*/
/* 
    let vel, time;
    Ingresar (vel, "Ingrese velocidad:")
    Ingresar (time, "Ingrese tiempo:")
    let distance = vel * time;
    Mostrar (distance, "La distancia recorrida es:")
*/
function distance(vel, time){
    let distance = vel * time
    return(`La distancia recorrida es de ${distance}m.`)
}
console.log(distance(2, 1))

/* 
    2) Se necesita obtener el promedio de un estudiante a partir de sus tres notas parciales ingresadas por el usuario.
    2.1) . .. idem para tres alumnos.
*/
/* 
    let note1, note2, note3;
    Ingresar (note1, "Ingrese primera nota: ")
    Ingresar (note2, "Ingrese segunda nota: ")
    Ingresar (note3, "Ingrese tercera nota: ")
    let average = (note1 + note2 + note3) / 3;
    Mostrar (average, "El promedio de notas del estudiante es: ")
*/

// Solución 1
function average(note1, note2, note3) {
    let average = (note1 + note2 + note3) / 3 
    return(`El promedio de notas del estudiante es de : ${average}, solución 1`)
}
console.log(average(5, 8, 3))

// Solución 2
function average2(notes) {
    let sum = 0
    for(let i = 0; i < notes.length; i++){
        sum += notes[i]
    }
    return sum / notes.length
}

/* let notes = [3, 6, 9, 9]
average2(notes) */

// Solución para n número de estudiantes
function averageForStudents(students) {
    let results = []
    for(let i = 0; i < students.length; i++) {
        let avg2 = average2(students[i].notes)
        results.push(`El promedio de notas del estudiante ${i + 1} es de : ${avg2}`)
    }
    return results
}

let students = [
    {notes: [3, 5, 9]}, // Student 1
    {notes: [6, 7, 9]}, // Student 2
    {notes: [3, 4, 7]}, // Student 3
]
console.log(averageForStudents(students))


/* 
    3) Elaborar un algoritmo que solicite el número de respuestas correctas, incorrectas y en blanco, correspondientes a un postulante, 
    y muestre su puntaje final considerando, que por cada respuesta correcta tendrá 4 puntos, 
    respuestas incorrectas tendrá -1 y respuestas en blanco tendrá 0.
*/
 /* 
    let correct, incorrect, nil, final;
    Ingresar(correct, "Cantidad de respuestas correctas:")
    Ingresar(incorrect, "Cantidad de respuestas incorrectas:")
    Ingresar(nil, "Cantidad de respuestas en blanco:")
    correct = correct * 4;
    incorrect = incorrect * -1;
    nil = nil * 0;
    final = correct + incorrect + nil;
    Mostrar(final, "El puntaje final es:")
 */

function finalScore(correct, incorrect, nil) {
    let finScore = (correct * 4) + (incorrect * -1) + (nil * 0)
    return (`El puntaje final es: ${finScore}`)
}
console.log(finalScore(5, 2, 4))

/* 
    4) Elaborar un algoritmo que permita ingresar el número de partidos ganados, perdidos y empatados, por un equipo, 
    se debe de mostrar su puntaje total, teniendo en cuenta que por cada partido ganado obtendrá 3 puntos, 
    empatado 1 punto y perdido 0 puntos.
*/
function gamesPoints(won, lost, tied) {
    let finalPoints = (won * 3) + (lost * 0) + (tied * 1)
    return (`La cantidad de puntos totales es de: ${finalPoints}`) 
}
console.log(gamesPoints(5, 3, 4))

/* 
    5) realizar un programa que permita convertir una determinada cantidad de horas y minutos ingresados por el usuario a segundos.
    5.B). Idem, pero el usuario ingresa cantidad de segundos y se muestra por pantalla las horas y minutos equivalentes
    (redondeando minutos hacia arriba).
*/
function convertToSeconds(hours, minutes) {
    let seconds = (hours * 3600) + (minutes * 60)
    return (`La cantidad de segundos es ${seconds}`)
}
console.log(convertToSeconds(2, 30))

// B
function convertSecondsToHours(sec) {
    let hours = Math.floor(sec / 3600)
    let remainingSeconds = sec % 3600
    let minutes = Math.floor(remainingSeconds / 60)
    return(`Los segundos ingresados equivalen a ${hours} horas y ${minutes} minutos!`)
}
console.log(convertSecondsToHours(3700))

/* 
    6) ingresar el radio del círculo de la base de un cilindro y su altura,
    para mostrar por pantalla el volumen de dicho cilindro (pi x radio x radio x altura).
*/
function volume(radio, height) {
    let pi = 3.1416
    let vol = Math.floor(pi * radio * height)
    return(`El volumen del cilindro es igual a: ${vol}m³`)
}
console.log(volume(3, 7))


/* 
    7) realizar un programa que permita al usuario ingresar un número por teclado y mostrar por pantalla si es par o no 
    (pueden utilizar el operador %, que devuelve el resto de una división, por ejemplo 4%2 es cero y 4/2 es dos).
*/

function evenOrOdd(num) {
    /* if(num %2 === 0) {
        return(`El número ${num} es par!`)
    }
    else{
        return(`El número ${num} es impar!`)
    } */
    const result = (num % 2 === 0) ? 'par' : 'impar'
    return(`El número ${num} es ${result}!`)
}
console.log(evenOrOdd(8))

/* 
    8) ingresar por teclado los tres lados de un triángulo y mostrar por pantalla primero si es posible formar un triángulo con esos datos,
    y, en caso positivo, qué tipo de triángulo es (todos los lados iguales, equilátero, dos iguales isósceles y todos diferentes escalenos).
    Un triángulo es válido solo si la suma de dos de sus lados es mayor al lado restante.
*/
function triangle(l1, l2, l3) {
    const isValidTriangle = (l1 + l2) > l3 && (l1 + l3) > l2 && (l2 + l3) > l1

    if(!isValidTriangle) {
        return(`Los datos ingresados no son válidos para formar un triángulo`) 
    }
    if(l1 === l2 && l1 === l3) {
        return(`El triángulo con medidas l1 ${l1}, l2 ${l2} y l3 ${l3} es un triángulo equilátero!`)
    }
    else if(l1 === l2 || l1 === l3 || l2 === l3) {
        return(`El triángulo con medidas l1 ${l1}, l2 ${l2} y l3 ${l3} es un triángulo isósceles!`)
    }
    else {
        return(`El triángulo con medidas l1 ${l1}, l2 ${l2} y l3 ${l3} es un triángulo escaleno!`)
    }
}
console.log(triangle(3, 3, 5))

/* 
    9) realizar un programa que permita calcular el total a pagar en un estacionamiento ingresando el horario de entrada y de salida 
    (las horas sin importar los minutos). 
    Valor por menos de mediodía: $2000 la hora, por menos de 24 hs: $1500 la hora. Y el valor de la hora por 24 hs o más es $1300.
    Si tiene pago por mes, no hay que cobrar nada. 
*/
function parkingCost(entryDay, entryHour, exitHour, hasMonthlyPayment) {
    if(hasMonthlyPayment) {
        return(`Pago mensual!`)
    }

    let totalHours = (entryDay) * 24 + (exitHour - entryHour)
    if(totalHours < 0) {
        return `La hora de salida debe de ser después de la hora de entrada.`
    }

    let fee
    
    if(totalHours < 12) {
        fee = totalHours * 2000
    }
    else if(totalHours < 24) {
        fee = totalHours * 1500
    }
    else {
        fee = totalHours * 1300
    }
    return `El total a pagar por ${totalHours}hs es igual a $${fee}`
}
console.log(parkingCost(3, 9, 19, false))
