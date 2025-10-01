class ClienteDTO {
    constructor(id, nombre, telefono, email, direccion) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.email = email;
        this.direccion = direccion;
    }
}

class MascotaDTO {
    constructor(id, nombre, especie, raza, edad, id_cliente, vacunas, historia) {
        this.id = id;
        this.nombre = nombre;
        this.especie = especie;
        this.raza = raza;
        this.edad = edad;
        this.id_cliente = id_cliente;
        this.vacunas = vacunas;
        this.historia = historia;
    }
}

class FacturacionDTO {
    constructor(id, id_cita, monto, estado) {
        this.id = id;
        this.monto = monto;
        this.estado = estado;
        this.historia = estado.historia;

    }
}

class CitaDTO {
    constructor ( id, id_mascota, id_cliente, fecha, hora, motivo) {
        this.id = id;
        this.id_mascota = id_mascota;
        this.id_cliente = id_cliente;
        this.fecha = fecha;
        this.hora = hora;
        this.motivo = motivo;
    }}

class InventarioDTO {
    constructor(id, nombre, stock, precio) {
        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
    }
}

module.exports = {ClienteDTO, MascotaDTO, FacturacionDTO, CitaDTO, InventarioDTO};
