import {
    vec_personas,
    vec_animales,
    vec_dioses,
    vec_personas_profesiones,
    vec_personas_batallas,
    vec_templos,
    vec_sacerdotes_dioses,
} from './universo.js'

/*
    Parcial 2. Lógica computacional.

    Traducir las siguientes proposiciones al lenguaje formal, indicar su valor de verdad y escribir el algoritmo que determina automáticamente ese valor de verdad.

    1. Existe al menos un animal cuyo dueño es militar ateniense o poeta no español.
    Diccionario:
    Animal(y): y es un Animal
    Militar(x): x es un Militar
    Ateniense(x): x es Ateniense
    Poeta(x): x es Poeta
    Español(x): x es Español
*/
    // ∃y Pertenece(x,y) && ((Militar(x) && Ateniense(x)) || (Poeta(x) && ¬Español(x)))
    // militares personas 6, 7, 8, 9, 16, 19 al 22, 26, 33, 0 Ateniense = 1 No hay Militares Atenienses
    // Poetas personas 3, 4, 23, 24, 31, 32 Español = 13 Poetas no Españoles = 3, 4, 24, 31 y 32
    // En el array vec_animales ningún elemento coincide en su atributo pertenece_a con los posibles Poetas no Españoles

    // El valor de verdad de la proposición es FALSA
const ejercicio01 = () => {
    let result = 'Falsa'

    for (let i = 0; i < vec_animales.length; i++) {
        const animal = vec_animales[i];
        if (animal.pertenece_a !== null) {
            for (let j = 0; j < vec_personas_profesiones.length; j++) {
                const personaProfesion = vec_personas_profesiones[j];
                if (animal.pertenece_a === personaProfesion.id_persona) {
                    for (let k = 0; k < vec_personas.length; k++) {
                        const persona = vec_personas[k];
                        if (persona.id === personaProfesion.id_persona) {
                            if (
                                (personaProfesion.id_profesion === 0 && persona.nacionalidad === 1) || // Militar ateniense
                                (personaProfesion.id_profesion === 1 && persona.nacionalidad !== 13) // Poeta no español
                            ) {
                                result = 'Verdadera';
                                break;
                            }
                        }
                    }
                }
            }
        }
    }
    return `La proposición es ${result}`;
}
console.log(ejercicio01())

/*
    2. Todos los dioses tienen al menos un templo dedicado, y algún sacerdote adora a todos los dioses.
    Diccionario:
    Dios(x): x es un Dios
    Templo(y): y es un Templo
    Sacerdote(z): x es Ateniense

    Analizando el universo, cada sacerdote adora a un solo Dios, por lo que la proposición es FALSA

    ∀x ∃y ∃z (Dios(x) && (Templo(y) && dedicado_a(y, x) && ∀z (Dios(x) => adora(z,x)
*/

const ejercicio02 = () => {
    let res = 'Verdadera'

    for (let i = 0; i < vec_dioses.length; i++) {
        const diosId = vec_dioses[i].id;
        let tieneTemplo = false;
        let esAdorado = false;

        for (let j = 0; j < vec_templos.length; j++) {
            if (vec_templos[j].id_dios === diosId) {
                tieneTemplo = true;
                break;
            }
        }

        for (let k = 0; k < vec_sacerdotes_dioses.length; k++) {
            if (vec_sacerdotes_dioses[k].id_dios === diosId) {
                esAdorado = true;
                break;
            }
        }

        if (!tieneTemplo || !esAdorado) {
            res = 'Falsa';
        }
    }
    return `La proposición es ${res}`;
}

console.log(ejercicio02())

/*
    Realizar un algoritmo que realice lo siguiente.
    3. Enumere todos los militares que no hayan sido derrotados en ninguna batalla y tengan una segunda profesión.

    Militares con otra profesión y todas las batallas ganadas 25 (Julio Cesar), 26 (Augusto Octavio)
*/

const ejercicio03 = () => {
    const invictosConOtraProfesion = [];

    for (let i = 0; i < vec_personas_batallas.length; i++) {
        const personaBatalla = vec_personas_batallas[i];
        let todasVictorias = true;
        let tieneOtraProfesion = false;
        let esMilitar = false;

        for (let j = 0; j < vec_personas_batallas.length; j++) {
            if (vec_personas_batallas[j].id_persona === personaBatalla.id_persona && !vec_personas_batallas[j].victorioso) {
                todasVictorias = false;
                break;
            }
        }

        if (todasVictorias) {
            for (let k = 0; k < vec_personas_profesiones.length; k++) {
                if (vec_personas_profesiones[k].id_persona === personaBatalla.id_persona) {
                    if (vec_personas_profesiones[k].id_profesion === 0) {
                        esMilitar = true;
                    } else {
                        tieneOtraProfesion = true;
                    }
                }
            }
        }

        if (esMilitar && tieneOtraProfesion) {
            invictosConOtraProfesion.push(personaBatalla.id_persona);
        }
    }

    const resultado = [];
    for (let i = 0; i < invictosConOtraProfesion.length; i++) {
        const personaId = invictosConOtraProfesion[i];
        for (let j = 0; j < vec_personas.length; j++) {
            if (vec_personas[j].id === personaId) {
                if (resultado.indexOf(vec_personas[j].nombre) === -1) {
                    resultado.push(vec_personas[j].nombre);
                }
                break;
            }
        }
    }
    return `Los militares con otra profesión y que ganaron todas sus batallas son: ${resultado}`;
}

console.log(ejercicio03())
