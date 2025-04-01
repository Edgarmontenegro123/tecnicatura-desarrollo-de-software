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
newReloj.iniciar();

/*
2️⃣ Ejercicio: Sistema de Películas
--------------------------------------
📌 Objetivo: Aprender encapsulamiento protegiendo propiedades privadas.
🔹 Tarea: Crear una clase `Película` con:
   - `título`, `director`, `calificación` (1-10).
   - Una propiedad privada `_calificación` y un método `setCalificacion(valor)`.
   - Un método `getInfo()` que muestra los detalles de la película.
*/

/*
3️⃣ Ejercicio: Sistema de Comercio Electrónico
--------------------------------------
📌 Objetivo: Aprender herencia creando una jerarquía de productos.
🔹 Tarea: Crear una clase padre `Producto`.
   - Subclases: `Electrónica`, `Ropa` y `Alimentos`.
   - Cada subclase tiene un atributo único (`garantía`, `talla` o `fechaCaducidad`).
*/

/*
4️⃣ Ejercicio: Sistema de Gestión de Zoológico
--------------------------------------
📌 Objetivo: Aprender polimorfismo sobrescribiendo métodos.
🔹 Tarea: Crear una clase base `Animal`.
   - Subclases: `León`, `Elefante`, `Mono`.
   - Cada subclase sobrescribe el método `hacerSonido()`.
*/

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

/*
6️⃣ Ejercicio: Sistema de Biblioteca
--------------------------------------
📌 Objetivo: Gestionar una colección de libros usando principios de POO.
🔹 Tarea: Crear una clase `Libro` con:
   - `título`, `autor`, `año`.
   - Una clase `Biblioteca` que almacena libros en un array.
   - Métodos para `agregarLibro()` y `listarLibros()`.
*/

/*
7️⃣ Ejercicio: Sistema Bancario
--------------------------------------
📌 Objetivo: Simular un sistema bancario simple.
🔹 Tarea: Crear una clase `CuentaBancaria` con:
   - `numeroCuenta`, `nombreTitular`, `saldo`.
   - Métodos para `depositar()`, `retirar()` y `obtenerSaldo()`.
*/

/*
8️⃣ Ejercicio: Gestión de Vehículos
--------------------------------------
📌 Objetivo: Practicar herencia con diferentes tipos de vehículos.
🔹 Tarea: Crear una clase base `Vehículo`.
   - Subclases: `Automóvil`, `Motocicleta`, `Camión`, `Bicicleta`.
   - Cada subclase tiene un atributo único (`numRuedas`, `capacidadMotor`, etc.).
*/

/*
9️⃣ Ejercicio: Sistema de Chatbot
--------------------------------------
📌 Objetivo: Implementar un chatbot simple usando POO.
🔹 Tarea: Crear una clase base `Chatbot`.
   - Subclases: `BotDeSoporte`, `BotDelClima`, `BotDeProgramación`.
   - Cada subclase responde de manera diferente según la entrada del usuario.
*/

/*
🔟 Ejercicio: Sistema de Cuestionario en Línea
--------------------------------------
📌 Objetivo: Crear un sistema de cuestionario interactivo.
🔹 Tarea: Crear una clase `Cuestionario` con:
   - Una lista de objetos `Pregunta`.
   - Un método para `iniciarCuestionario()` y evaluar las respuestas del usuario.
   - Un método para mostrar la puntuación final.
*/

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


