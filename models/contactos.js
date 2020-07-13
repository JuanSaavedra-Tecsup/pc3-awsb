const moongose = require('mongoose');
const Schema = moongose.Schema;

const Contacto = new Schema({
    nombre: { type: String, required: true },
    apellido: { type: String, required: true },
    email: { type: String, required: true },
    fecha_nacimiento: { type: String},
    imagen: { type: String} 
});

module.exports = moongose.model('contactos',Contacto)