/*import promptSync from 'prompt-sync';
const prompt = promptSync();*/
// const prompt = require('prompt-sync')();
import readlineSync from 'readline-sync';

/*
======================================
 Ejercicios Prácticos de POO
======================================
/*
1️⃣ Ejercicio: Crear un Reloj Digital
--------------------------------------
📌 Objetivo: Practicar el trabajo con objetos y métodos.
🔹 Tarea: Crear una clase `Reloj` con:
   - Propiedades `horas`, `minutos` y `segundos`.
   - Un método `avanzar()` que incrementa el tiempo en un segundo y actualiza minutos/horas si es necesario.
   - Un método `mostrarTiempo()` que imprime la hora en formato HH:MM:SS.
*/
class Reloj {
    constructor(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
    // Dentro de la clase creo los métodos o funciones
    avanzar() {
        this.segundos += 1;

        if (this.segundos === 60) {
            this.segundos = 0;
            this.minutos += 1;
        }

        if (this.minutos === 60) {
            this.minutos = 0;
            this.horas += 1;
        }

        if (this.horas === 24) {
            this.horas = 0;
        }
    }

    mostrarTiempo() {
        const hh = this.horas < 10 ? `0${this.horas}` : this.horas;
        const mm = this.minutos < 10 ? `0${ this.minutos}` : this.minutos;
        const ss = this.segundos < 10 ? `0${this.segundos}` : this.segundos;

        /*
        const hh = String(this.horas).padStart(2, '0');
        const mm = String(this.minutos).padStart(2, '0');
        const ss = String(this.segundos).padStart(2, '0');
        */

        return `${hh}:${mm}:${ss}`;
    }

    // Función para que el reloj tenga un comportamiento normal
    iniciar() {
        setInterval(() => {
            this.avanzar();
            console.log(this.mostrarTiempo());
        }, 1000);
    }
}

const newReloj = new Reloj(14,59,58);
/*console.log(newReloj.mostrarTiempo());
newReloj.avanzar();
console.log(newReloj.mostrarTiempo());
newReloj.avanzar();
console.log(newReloj.mostrarTiempo());
newReloj.avanzar();
console.log(newReloj.mostrarTiempo());*/
// newReloj.iniciar();

/*
2️⃣ Ejercicio: Sistema de Películas
--------------------------------------
📌 Objetivo: Aprender encapsulamiento protegiendo propiedades privadas.
🔹 Tarea: Crear una clase `Película` con:
   - `título`, `director`, `calificación` (1-10).
   - Una propiedad privada `_calificación` y un método `setCalificacion(valor)`.
   - Un método `getInfo()` que muestra los detalles de la película.
*/

class Pelicula {
    #calificacion = null;

    constructor(titulo, director, calificacion){
        this.titulo = titulo;
        this.director = director;
        this.#calificacion = null;

        if(calificacion !== undefined){
            try {
                this.setCalificacion(calificacion);
            } catch(error){
                console.warn(`Valor inicial inválido: ${error.message}`);
            }
        }
    }

    setCalificacion(valor){
        if(valor > 0 && valor <= 10){
            this.#calificacion = valor;
        }
        else {
            throw new Error(`El valor ${valor} no es un valor válido para calificar`);
        }
    }

    getInfo(){
        let response
        if(this.#calificacion === null){
            response = `La película ${this.titulo}, del director ${this.director}, aun no tiene una calificación válida.`;
        }
        else {
            response = `La película ${this.titulo}, del director ${this.director}, tiene una calificación de ${this.#calificacion}/10 puntos.`;
        }
        return response;
    }
}

const pelicula1 = new Pelicula('Batman Begins', 'Christopher Nolan');
pelicula1.setCalificacion(7);
// console.log(pelicula1.getInfo());

// let pelicula2 = new Pelicula('Batman Dark Knight', 'Christopher Nolan', 11);
// console.log(pelicula2.getInfo());

// pelicula2 = new Pelicula('Batman Dark Knight', 'Christopher Nolan', 10);
// console.log(pelicula2.getInfo());

const pelicula3 = new Pelicula('Batman Dark Knight Rises', 'Christopher Nolan', 8);
// console.log(pelicula3.getInfo());


/*
3️⃣ Ejercicio: Sistema de Comercio Electrónico
--------------------------------------
📌 Objetivo: Aprender herencia creando una jerarquía de productos.
🔹 Tarea: Crear una clase padre `Producto`.
   - Subclases: `Electrónica`, `Ropa` y `Alimentos`.
   - Cada subclase tiene un atributo único (`garantía`, `talla` o `fechaCaducidad`).
*/

class Producto {
    constructor(nombre, precio, marca) {
        this.nombre = nombre;
        this.precio = precio;
        this.marca = marca;
    }

    mostrarInfo(){
        return `Nombre: ${this.nombre}, Precio: ${this.precio}, Marca: ${this.marca}`;
    }
}

// Subclases
class Electronica extends Producto {
    constructor(nombre, precio, marca, garantia) {
        super(nombre, precio, marca);
        this.garantia = garantia;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()} - Garantía: ${this.garantia} años.`;
    }
}

class Ropa extends Producto {
    constructor(nombre, precio, marca, talla) {
        super(nombre, precio, marca);
        this.talla = talla;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()} - Talla: ${this.talla}.`;
    }
}

class Alimento extends Producto {
    constructor(nombre, precio, marca, vencimiento) {
        super(nombre, precio, marca);
        this.vencimiento = vencimiento;
    }
    mostrarInfo() {
        return `${super.mostrarInfo()} - Vencimiento: ${this.vencimiento}.`;
    }
}

const producto1 = new Electronica('Televisor', 500, 'LG', 2);
const producto2 = new Ropa('Sweater', 80, 'Jordan', 'S');
const producto3 = new Alimento('Arroz', 3, 'Molinos Ala', '07/10/2025');

// console.log(producto1.mostrarInfo());
// console.log(producto2.mostrarInfo());
// console.log(producto3.mostrarInfo());

/*
4️⃣ Ejercicio: Sistema de Gestión de Zoológico
--------------------------------------
📌 Objetivo: Aprender polimorfismo sobrescribiendo métodos.
🔹 Tarea: Crear una clase base `Animal`.
   - Subclases: `León`, `Elefante`, `Mono`.
   - Cada subclase sobrescribe el método `hacerSonido()`.
*/

class Animal {
    constructor(nombre, zona) {
        this.nombre = nombre;
        this.zona = zona;
    }

    hacerSonido() {
        return `${this.nombre} hace un sonido genérico!`;
    }

    mostrarInfo(){
        return `${this.hacerSonido()}.`;
    }
}

class Leon extends Animal {
    hacerSonido() {
        return `El león ${this.nombre} que viene de ${this.zona} ruge!`;
    }
}

class Elefante extends Animal {
    hacerSonido() {
        return `La elefante ${this.nombre} que viene de ${this.zona} barrita!`;
    }
}

class Mono extends Animal {
    hacerSonido() {
        return `El mono ${this.nombre} que viene de ${this.zona} parlotea!`;
    }
}

const animal1 = new Leon('Alex', 'Madagascar');
const animal2 = new Elefante('Dora', 'China');
const animal3 = new Mono('Julien', 'Colombia');

// console.log(animal1.mostrarInfo());
// console.log(animal2.mostrarInfo());
// console.log(animal3.mostrarInfo());

/*
5️⃣ Ejercicio: Sistema de Calificación de Estudiantes
--------------------------------------
📌 Objetivo: Combinar todo: objetos, métodos, herencia y encapsulamiento.
🔹 Tarea: Crear una clase `Estudiante` con:
   - `nombre`, `calificaciones` (array), y métodos:
   - `agregarCalificacion(nota)`: Añade una nota a la lista.
   - `obtenerPromedio()`: Calcula el promedio.
   - `mostrarInfo()`: Muestra los detalles del estudiante y el promedio de notas.
*/

class Estudiante {
    #calificaciones;
    constructor(nombre, calificaciones = []) {
        this.nombre = nombre;
        if(!Array.isArray(calificaciones)){
            throw new Error(`Las calificaciones deberían ser un array`);
        }
        this.#calificaciones = calificaciones;
    }

    agregarCalificacion(nota) {
        if(/*typeof nota === 'number' && */nota > 0 && nota <= 10){
            this.#calificaciones.push(nota);
        }
        else {
            throw new Error(`El valor ${nota} no es un valor válido para calificar`);
        }
    }

    obtenerPromedio() {
        if(this.#calificaciones.length === 0) return 0;
        let suma = 0;
        for(let nota of this.#calificaciones) {
            suma += nota;
        }
        return (suma / this.#calificaciones.length).toFixed(2);
    }

    mostrarInfo() {
        return `Nombre: ${this.nombre}, Calificaciones: ${this.#calificaciones.join(', ')}, Promedio: ${this.obtenerPromedio()}`;
    }
}

const estudiante1 = new Estudiante('Viviana', [7, 9, 10]);
estudiante1.agregarCalificacion(9);
// console.log(estudiante1.mostrarInfo());

const estudiante2 = new Estudiante('Miranda', [2, 9, 10, 1, 4, 5]);
estudiante2.agregarCalificacion(9);
// console.log(estudiante2.mostrarInfo());

/*
6️⃣ Ejercicio: Sistema de Biblioteca
--------------------------------------
📌 Objetivo: Gestionar una colección de libros usando principios de POO.
🔹 Tarea: Crear una clase `Libro` con:
   - `título`, `autor`, `año`.
   - Una clase `Biblioteca` que almacena libros en un array.
   - Métodos para `agregarLibro()` y `listarLibros()`.
*/

class Libro {
    constructor(titulo, autor, anio) {
        if(!titulo || !autor || !anio){
            throw new Error('Todos los campos son obligatorios.')
        }
        this.titulo = titulo;
        this.autor = autor;
        this.anio = anio;
    }
}

class Biblioteca {
    #libros;
    constructor(libros = []) {
        this.#libros = libros;
    }

    agregarLibro(libro) {
        if(libro instanceof Libro) {
            this.#libros.push(libro);
        }
        else {
            throw new Error('Solo se pueden agregar libros con los datos completos!')
        }
    }

    listarLibros() {
        if(this.#libros.length === 0) {
            return `La biblioteca está vacía.`;
        }

        const lista = this.#libros.map(libro => {
            return `Título: ${libro.titulo}, Autor: ${libro.autor}, Año: ${libro.anio}`;
        })
        return `Libros:\n${lista.join('\n')}`;
    }
}

const libro1 = new Libro('Harry Potter y la piedra filosofal', 'J. K. Rowling', '1995');
const biblioteca = new Biblioteca();
biblioteca.agregarLibro(libro1);
console.log(biblioteca.listarLibros());

const libro2 = new Libro('Harry Potter y la cámara secreta', 'J. K. Rowling', '1998');
biblioteca.agregarLibro(libro2);
console.log(biblioteca.listarLibros());

// Ejemplo de error
/*const libro3 = new Libro('', 'qwerty', 1985);
biblioteca.agregarLibro(libro3);
console.log(biblioteca.listarLibros());*/


/*
7️⃣ Ejercicio: Sistema Bancario
--------------------------------------
📌 Objetivo: Simular un sistema bancario simple.
🔹 Tarea: Crear una clase `CuentaBancaria` con:
   - `numeroCuenta`, `nombreTitular`, `saldo`.
   - Métodos para `depositar()`, `retirar()` y `obtenerSaldo()`.
*/

class CuentaBancaria {
    constructor(numeroDeCuenta, nombreTitular, saldo) {
        if(typeof numeroDeCuenta !== 'string' || numeroDeCuenta.length !== 16){
            throw new Error('El número de cuenta debe tener exactamente 16 dígitos numéricos');
        }

        if(nombreTitular === '') {
            throw new Error('Se debe ingresar el nombre del titular de la cuenta')
        }

        this.numeroDeCuenta = numeroDeCuenta;
        this.nombreTitular = nombreTitular;
        this.saldo = saldo;
    }

    depositar(monto){
        if(monto < 0){
            throw new Error('El monto ingresado no puede ser negativo');
        }
        this.saldo += monto;
    }

    retirar(monto) {
        if(monto < 0){
            throw new Error('El monto ingresado no es correcto');
        }
        if(monto > this.saldo) {
            throw new Error('Saldo insuficiente');
        }
        this.saldo -= monto;
    }

    obtenerSaldo() {
        return `Número de cuenta: ${this.numeroDeCuenta}, perteneciente a: ${this.nombreTitular}, tiene como saldo: ${this.saldo}`;
    }
}

const cuentaVivi = new CuentaBancaria('1234321234567890', 'Viviana Valera', 12000);
console.log(cuentaVivi.obtenerSaldo());
/*cuentaVivi.depositar(3000);
console.log(cuentaVivi.obtenerSaldo());
cuentaVivi.retirar(10500);
console.log(cuentaVivi.obtenerSaldo());
cuentaVivi.retirar(6000);
console.log(cuentaVivi.obtenerSaldo());*/

/*
8️⃣ Ejercicio: Gestión de Vehículos
--------------------------------------
📌 Objetivo: Practicar herencia con diferentes tipos de vehículos.
🔹 Tarea: Crear una clase base `Vehículo`.
   - Subclases: `Automóvil`, `Motocicleta`, `Camión`, `Bicicleta`.
   - Cada subclase tiene un atributo único (`numRuedas`, `capacidadMotor`, etc.).
*/

class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }

    mostrarInfo() {
        return `Marca: ${this.marca}, Modelo: ${this.modelo}`;
    }
}

class Automovil extends Vehiculo {
    constructor(marca, modelo, numRuedas) {
        super(marca, modelo);

        if(numRuedas <= 2){
            throw new Error('Debes ingresar un número válido para la cantidad de ruedas de un vehículo (mínimo 3)')
        }
        this.numRuedas = numRuedas;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Número de ruedas: ${this.numRuedas}`;
    }
}

class Motocicleta extends Vehiculo {
    constructor(marca, modelo, cilindrada) {
        super(marca, modelo);

        if(cilindrada <= 0){
            throw new Error('Debes ingresar un valor válido para la cilindrada')
        }
        this.cilindrada = cilindrada;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Cilindrada: ${this.cilindrada}`;
    }
}

class Camion extends Vehiculo {
    constructor(marca, modelo, cantidadDeAcoplados) {
        super(marca, modelo);

        if(cantidadDeAcoplados < 0) {
            throw new Error('La cantidad de acoplados no puede ser menor a cero')
        }
        this.cantidadDeAcoplados = cantidadDeAcoplados;
    }

    mostrarInfo() {
        return `${super.mostrarInfo()}, Cantidad de acoplados: ${this.cantidadDeAcoplados}`;
    }
}

class Bicicleta extends Vehiculo {
    constructor(marca, modelo, esElectrica) {
        super(marca, modelo);
        this.esElectrica = esElectrica;
    }

    mostrarInfo() {
        const electricaTexto = this.esElectrica? 'Si' : 'No';
        return `${super.mostrarInfo()}, Es eléctrica: ${electricaTexto}`;
    }
}

const auto1 = new Automovil('Audi', 'A4', 3);
const moto1 = new Motocicleta('Harley Davidson', 'Touring', 114);
const camion1 = new Camion('Mercedes Benz', 'Actros', 1);
const bicicleta1 = new Bicicleta('Orbea', 'Vibe', true);

console.log(auto1.mostrarInfo());
/*console.log(moto1.mostrarInfo());
console.log(camion1.mostrarInfo());
console.log(bicicleta1.mostrarInfo());*/

/*
9️⃣ Ejercicio: Sistema de Chatbot
--------------------------------------
📌 Objetivo: Implementar un chatbot simple usando POO.
🔹 Tarea: Crear una clase base `Chatbot`.
   - Subclases: `BotDeSoporte`, `BotDelClima`, `BotDeProgramación`.
   - Cada subclase responde de manera diferente según la entrada del usuario.
*/

class Chatbot {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `Hola, soy tu ${this.nombre}.\n`;
    }

    responder(mensaje) {
        return `Lo siento, no entiendo tu consulta.`;
    }
}

class BotDeSoporte extends Chatbot {
    responder(mensaje) {
        if(mensaje.toLowerCase().includes('problema')) {
            return `Podrías describirme tu problema con más detalle? \n`
        }
        return 'Nuestro equipo de soporte está trabajando para brindarte una solución.';
    }
}

class BotDelClima extends Chatbot {
    responder(mensaje) {
        if(mensaje.toLowerCase().includes('clima')) {
            return `Que quisieras saber acerca del clima? \n`;
        }
        return 'Nuestro equipo del clima está trabajando para brindarte una solución.';
    }
}

class BotDeProgramacion extends Chatbot {
    responder(mensaje) {
        if(mensaje.toLowerCase().includes('programacion')) {
            return `Que quisieras saber acerca de la programacion? \n`;
        }
        return 'Nuestro equipo de programación está trabajando para brindarte una solucion.';
    }
}

const bots = {
    soporte: new BotDeSoporte('Bot de soporte'),
    clima: new BotDelClima('Bot del clima'),
    programacion: new BotDeProgramacion('Bot de programacion')
}

/*console.log('Bienvenido al sistema de chatbots!');
console.log('Las opciones que puedes utilizar son: soporte, clima, programacion');*/

// const tipoBot = prompt('Con que Bot deseas interactuar? \n', '', '').toLowerCase();
/*const tipoBot = readlineSync.question('Con que Bot deseas interactuar?\n> ').toLowerCase();

const botSeleccionado = bots[tipoBot];

if(!botSeleccionado) {
    console.log('No se encontro el Bot seleccionado');
}
else {
    console.log(botSeleccionado.saludar());
    // const mensajeUsuario = prompt('Por favor cuéntanos más detalles acerca de tu consulta: \n', '', '');
    const mensajeUsuario = readlineSync.question('Por favor cuentanos mas detalles acerca de tu consulta:\n> ');
    const mensaje = botSeleccionado.responder(mensajeUsuario);
    console.log(`Respuesta del Bot: \n${mensaje}`);
}*/

/*
🔟 Ejercicio: Sistema de Cuestionario en Línea
--------------------------------------
📌 Objetivo: Crear un sistema de cuestionario interactivo.
🔹 Tarea: Crear una clase `Cuestionario` con:
   - Una lista de objetos `Pregunta`.
   - Un método para `iniciarCuestionario()` y evaluar las respuestas del usuario.
   - Un método para mostrar la puntuación final.
*/

class Cuestionario {
    constructor(preguntas) {
        this.preguntas = preguntas;
        this.puntuacion = 0;
    }

    iniciarCuestionario() {
        this.preguntas.forEach((pregunta, index) => {
            console.log(`\n ${index + 1}. ${pregunta.pregunta}`);
            const opciones = pregunta.obtenerRespuestasAleatorias();

            opciones.forEach((opcion, i) => {
                console.log(`\n ${i + 1}. ${opcion}`);
            })

            const respuestaIndex = readlineSync.question("Elige una opción (1 - 4): ");
            const respuestaElegida = opciones[respuestaIndex - 1];

            if(respuestaElegida === pregunta.respuestaCorrecta) {
                console.log("✅ ¡Correcto!");
                this.puntuacion++;
            } else {
                console.log(`❌ Incorrecto. La correcta era: ${pregunta.respuestaCorrecta}`);
            }
        });
        this.mostrarPuntuacionFinal();
    }

    mostrarPuntuacionFinal() {
        console.log(`\n Tu puntuación final es: ${this.puntuacion} / ${this.preguntas.length}`)
    }
}

class Pregunta {
    constructor(pregunta, correcta, incorrecta1, incorrecta2, incorrecta3) {
        this.pregunta = pregunta;
        this.respuestaCorrecta = correcta;
        this.respuestaIncorrecta1 = incorrecta1;
        this.respuestaIncorrecta2 = incorrecta2;
        this.respuestaIncorrecta3 = incorrecta3;
    }

    obtenerRespuestasAleatorias() {
        const respuestas = [
            this.respuestaCorrecta,
            this.respuestaIncorrecta1,
            this.respuestaIncorrecta2,
            this.respuestaIncorrecta3,
        ];
        return respuestas.sort(() => Math.random() - 0.5);
    }
}

const cuestionario1 = [
    new Pregunta("cuanto es 2 + 2?", "4", "3", "2", "5"),
    new Pregunta("¿Capital de Francia?", "París", "Londres", "Madrid", "Roma"),
];

const quiz = new Cuestionario(cuestionario1);
quiz.iniciarCuestionario();

/*
1️⃣1️⃣ Ejercicio: Agenda de Contactos
--------------------------------------
📌 Objetivo: Crear una aplicación para gestionar contactos personales.
🔹 Tarea: Crear una clase `Contacto` con:
   - `nombre`, `teléfono`, `email`, `dirección`.
   - Una clase `Agenda` que almacena y organiza contactos.
   - Métodos para `agregarContacto()`, `buscarContacto()` y `eliminarContacto()`.
*/

/*
1️⃣2️⃣ Ejercicio: Sistema de Inventario
--------------------------------------
📌 Objetivo: Aplicar POO para resolver un problema de gestión de inventario.
🔹 Tarea: Crear una clase `Inventario` con:
   - Una colección de productos con `código`, `nombre`, `precio`, `cantidad`.
   - Métodos para `agregarProducto()`, `venderProducto()`, `reabastecerProducto()`.
   - Un método `generarInforme()` que muestre el estado actual del inventario.
*/

/*
1️⃣3️⃣ Ejercicio: Red Social Simplificada
--------------------------------------
📌 Objetivo: Modelar componentes básicos de una red social.
🔹 Tarea: Crear clases para `Usuario`, `Publicación` y `Comentario`:
   - `Usuario` con amigos, publicaciones y métodos para interactuar.
   - `Publicación` con contenido, autor, likes y comentarios.
   - Implementar métodos para `publicar()`, `comentar()` y `darLike()`.
*/

/*
1️⃣4️⃣ Ejercicio: Sistema de Reservas de Hotel
--------------------------------------
📌 Objetivo: Diseñar un sistema de reservas aplicando encapsulamiento y asociaciones.
🔹 Tarea: Crear clases para `Hotel`, `Habitación` y `Reserva`:
   - `Hotel` con colección de habitaciones.
   - `Habitación` con `número`, `tipo`, `precio` y `disponibilidad`.
   - `Reserva` asociando huéspedes, habitaciones y fechas.
   - Métodos para verificar disponibilidad y realizar reservas.
*/

/*
1️⃣5️⃣ Ejercicio: Simulador de Ecosistema
--------------------------------------
📌 Objetivo: Modelar interacciones complejas entre varios objetos.
🔹 Tarea: Crear un mini-ecosistema con:
   - Clases para `Ecosistema`, `Organismo`, `Planta`, `Herbívoro` y `Carnívoro`.
   - Implementar un ciclo de vida donde los organismos crecen, se alimentan y se reproducen.
   - Simular interacciones como la cadena alimenticia.
   - Método `simularCiclo()` que avanza el ecosistema un paso en el tiempo.
*/


