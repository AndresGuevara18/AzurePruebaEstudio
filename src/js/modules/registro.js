function manejarRegistro() {
  const formulario = document.getElementById('registroForm');
  const mensaje = document.getElementById('mensaje');

  if (!formulario || !mensaje) {
    // console.error('❌ Error: No se encontró el formulario o el mensaje.');
    return;
  }

  formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value.trim();
    const documento = document.getElementById('documento').value.trim();
    const ciudad = document.getElementById('ciudad').value.trim();
    const telefono = document.getElementById('telefono').value.trim();
    const correo = document.getElementById('correo').value.trim();

    if (!nombre || !documento || !ciudad || !telefono || !correo) {
      mensaje.textContent = '⚠️ Todos los campos son obligatorios.';
      mensaje.style.color = 'red';
    } else {
      mensaje.textContent = `✅ Registro exitoso para ${nombre}.`;
      mensaje.style.color = 'green';
    }
  });
}

module.exports = manejarRegistro;