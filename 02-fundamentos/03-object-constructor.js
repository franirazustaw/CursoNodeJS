// object literal
const persona = {
  username: 'Ironman',
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 40,
  direccion: {
    ciudad: 'Nueva York',
    pais: 'EUA'
  },
  ocupaciones: [
    'CEO Stark Industries',
    'Superheroe de Marvel'
  ],
  nacimiento: function() {
    return new Date().getFullYear() - this.edad
  }
}

console.log(persona)

// object constructor
// ahora se usa clases
function Tarea(nombre, urgencia) {
  this.nombre = nombre
  this.urgencia = urgencia
}

const t1 = new Tarea('Aprendes JS', 'Urgente')
const t2 = new Tarea('Aprendes React', 'Urgente')
