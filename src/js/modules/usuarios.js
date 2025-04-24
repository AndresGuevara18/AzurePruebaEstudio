function cargarUsuarios() {
  const tablaBody = document.querySelector('#tablaUsuarios tbody');

  if (!tablaBody) {
    // console.error('❌ No se encontró la tabla de usuarios.');
    return;
  }

  const usuariosStub = [
    {
      nombre: 'Juan Pérez', documento: '12345678', ciudad: 'Bogotá', telefono: '3111234567', correo: 'juan@example.com',
    },
    {
      nombre: 'María López', documento: '87654321', ciudad: 'Medellín', telefono: '3207654321', correo: 'maria@example.com',
    },
    {
      nombre: 'Carlos Gómez', documento: '11223344', ciudad: 'Cali', telefono: '3001122334', correo: 'carlos@example.com',
    },
  ];

  tablaBody.innerHTML = '';

  usuariosStub.forEach((usuario) => {
    const fila = document.createElement('tr');
    fila.innerHTML = `
      <td>${usuario.nombre}</td>
      <td>${usuario.documento}</td>
      <td>${usuario.ciudad}</td>
      <td>${usuario.telefono}</td>
      <td>${usuario.correo}</td>
    `;
    tablaBody.appendChild(fila);
  });
}

module.exports = cargarUsuarios;