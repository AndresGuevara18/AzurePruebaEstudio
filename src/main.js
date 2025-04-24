const manejarRegistro = require('./js/modules/registro.js');
const cargarUsuarios = require('./js/modules/usuarios.js');

document.addEventListener('DOMContentLoaded', () => {
  manejarRegistro();
  cargarUsuarios();
});