const {ClienteDTO, MascotaDTO, FacturacionDTO, CitaDTO, InventarioDTO} = require("./models/models");


const cliente1 = new ClienteDTO(1, 'Leonardo', 55555, 'leo@aaaa.com', 'Av Evergreen')
const mascota1 = new MascotaDTO(1, 'Firulais', 'Perro', 'Labrador', 5, 1, ['Rabia', 'Parvovirus'], ['Chequeo general']);
const cita1 = new CitaDTO(1, 1, 1, '2025-09-30', '10:00', ['Vacunación anual']);
const factura1 = new FacturacionDTO(1, 1, 500, ['Pagado']);
const producto1 = new InventarioDTO(1, 'Vacuna Rabia', 20, 200);


const show = () => {
    console.log(`Nombre: ${cliente1.nombre}, 
                Teléfono: ${cliente1.telefono}, 
                Email: ${cliente1.email}, 
                Dirección: ${cliente1.direccion}`)
    console.log(`Nombre: ${mascota1.nombre}, 
                Especie: ${mascota1.especie}, 
                Raza: ${mascota1.raza}, 
                Edad: ${mascota1.edad}, 
                Vacunas: ${mascota1.vacunas.join(', ')}, 
                Historia: ${mascota1.historia.join('; ')}`);
    console.log(`Cita ID: ${cita1.id}, 
                Fecha: ${cita1.fecha}, 
                Hora: ${cita1.hora}, 
                Motivo: ${cita1.motivo.join(', ')}, 
                Cliente ID: ${cita1.id_cliente}, 
                Mascota ID: ${cita1.id_mascota}`);
    console.log(`Factura ID: ${factura1.id}, 
                Cita ID: ${factura1.id_cita}, 
                Monto: $${factura1.monto}, 
                Estado: ${factura1.estado.join(', ')}`);
    console.log(`Producto: ${producto1.nombre}, 
                Stock: ${producto1.stock}, 
                Precio: $${producto1.precio}`);
}

show()

