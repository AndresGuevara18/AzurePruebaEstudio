(self["webpackChunkproyecto_estudio"] = self["webpackChunkproyecto_estudio"] || []).push([["index"],{

/***/ "./src/js/modules/registro.js":
/*!************************************!*\
  !*** ./src/js/modules/registro.js ***!
  \************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/js/modules/usuarios.js":
/*!************************************!*\
  !*** ./src/js/modules/usuarios.js ***!
  \************************************/
/***/ ((module) => {

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

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const manejarRegistro = __webpack_require__(/*! ./js/modules/registro.js */ "./src/js/modules/registro.js");
const cargarUsuarios = __webpack_require__(/*! ./js/modules/usuarios.js */ "./src/js/modules/usuarios.js");

document.addEventListener('DOMContentLoaded', () => {
  manejarRegistro();
  cargarUsuarios();
});

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/main.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sdURBQXVELE9BQU87QUFDOUQ7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7OztBQzVCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFlBQVksa0JBQWtCO0FBQzlCLFlBQVksZUFBZTtBQUMzQixZQUFZLGlCQUFpQjtBQUM3QixZQUFZLGVBQWU7QUFDM0I7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTs7Ozs7Ozs7OztBQ25DQSx3QkFBd0IsbUJBQU8sQ0FBQyw4REFBMEI7QUFDMUQsdUJBQXVCLG1CQUFPLENBQUMsOERBQTBCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJveWVjdG8tZXN0dWRpby8uL3NyYy9qcy9tb2R1bGVzL3JlZ2lzdHJvLmpzIiwid2VicGFjazovL3Byb3llY3RvLWVzdHVkaW8vLi9zcmMvanMvbW9kdWxlcy91c3Vhcmlvcy5qcyIsIndlYnBhY2s6Ly9wcm95ZWN0by1lc3R1ZGlvLy4vc3JjL21haW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWFuZWphclJlZ2lzdHJvKCkge1xuICBjb25zdCBmb3JtdWxhcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlZ2lzdHJvRm9ybScpO1xuICBjb25zdCBtZW5zYWplID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnNhamUnKTtcblxuICBpZiAoIWZvcm11bGFyaW8gfHwgIW1lbnNhamUpIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKCfinYwgRXJyb3I6IE5vIHNlIGVuY29udHLDsyBlbCBmb3JtdWxhcmlvIG8gZWwgbWVuc2FqZS4nKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBmb3JtdWxhcmlvLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBub21icmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbm9tYnJlJykudmFsdWUudHJpbSgpO1xuICAgIGNvbnN0IGRvY3VtZW50byA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb2N1bWVudG8nKS52YWx1ZS50cmltKCk7XG4gICAgY29uc3QgY2l1ZGFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NpdWRhZCcpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCB0ZWxlZm9ubyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZWxlZm9ubycpLnZhbHVlLnRyaW0oKTtcbiAgICBjb25zdCBjb3JyZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29ycmVvJykudmFsdWUudHJpbSgpO1xuXG4gICAgaWYgKCFub21icmUgfHwgIWRvY3VtZW50byB8fCAhY2l1ZGFkIHx8ICF0ZWxlZm9ubyB8fCAhY29ycmVvKSB7XG4gICAgICBtZW5zYWplLnRleHRDb250ZW50ID0gJ+KaoO+4jyBUb2RvcyBsb3MgY2FtcG9zIHNvbiBvYmxpZ2F0b3Jpb3MuJztcbiAgICAgIG1lbnNhamUuc3R5bGUuY29sb3IgPSAncmVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgbWVuc2FqZS50ZXh0Q29udGVudCA9IGDinIUgUmVnaXN0cm8gZXhpdG9zbyBwYXJhICR7bm9tYnJlfS5gO1xuICAgICAgbWVuc2FqZS5zdHlsZS5jb2xvciA9ICdncmVlbic7XG4gICAgfVxuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtYW5lamFyUmVnaXN0cm87IiwiZnVuY3Rpb24gY2FyZ2FyVXN1YXJpb3MoKSB7XG4gIGNvbnN0IHRhYmxhQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YWJsYVVzdWFyaW9zIHRib2R5Jyk7XG5cbiAgaWYgKCF0YWJsYUJvZHkpIHtcbiAgICAvLyBjb25zb2xlLmVycm9yKCfinYwgTm8gc2UgZW5jb250csOzIGxhIHRhYmxhIGRlIHVzdWFyaW9zLicpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IHVzdWFyaW9zU3R1YiA9IFtcbiAgICB7XG4gICAgICBub21icmU6ICdKdWFuIFDDqXJleicsIGRvY3VtZW50bzogJzEyMzQ1Njc4JywgY2l1ZGFkOiAnQm9nb3TDoScsIHRlbGVmb25vOiAnMzExMTIzNDU2NycsIGNvcnJlbzogJ2p1YW5AZXhhbXBsZS5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgbm9tYnJlOiAnTWFyw61hIEzDs3BleicsIGRvY3VtZW50bzogJzg3NjU0MzIxJywgY2l1ZGFkOiAnTWVkZWxsw61uJywgdGVsZWZvbm86ICczMjA3NjU0MzIxJywgY29ycmVvOiAnbWFyaWFAZXhhbXBsZS5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgbm9tYnJlOiAnQ2FybG9zIEfDs21leicsIGRvY3VtZW50bzogJzExMjIzMzQ0JywgY2l1ZGFkOiAnQ2FsaScsIHRlbGVmb25vOiAnMzAwMTEyMjMzNCcsIGNvcnJlbzogJ2Nhcmxvc0BleGFtcGxlLmNvbScsXG4gICAgfSxcbiAgXTtcblxuICB0YWJsYUJvZHkuaW5uZXJIVE1MID0gJyc7XG5cbiAgdXN1YXJpb3NTdHViLmZvckVhY2goKHVzdWFyaW8pID0+IHtcbiAgICBjb25zdCBmaWxhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKTtcbiAgICBmaWxhLmlubmVySFRNTCA9IGBcbiAgICAgIDx0ZD4ke3VzdWFyaW8ubm9tYnJlfTwvdGQ+XG4gICAgICA8dGQ+JHt1c3VhcmlvLmRvY3VtZW50b308L3RkPlxuICAgICAgPHRkPiR7dXN1YXJpby5jaXVkYWR9PC90ZD5cbiAgICAgIDx0ZD4ke3VzdWFyaW8udGVsZWZvbm99PC90ZD5cbiAgICAgIDx0ZD4ke3VzdWFyaW8uY29ycmVvfTwvdGQ+XG4gICAgYDtcbiAgICB0YWJsYUJvZHkuYXBwZW5kQ2hpbGQoZmlsYSk7XG4gIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGNhcmdhclVzdWFyaW9zOyIsImNvbnN0IG1hbmVqYXJSZWdpc3RybyA9IHJlcXVpcmUoJy4vanMvbW9kdWxlcy9yZWdpc3Ryby5qcycpO1xuY29uc3QgY2FyZ2FyVXN1YXJpb3MgPSByZXF1aXJlKCcuL2pzL21vZHVsZXMvdXN1YXJpb3MuanMnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgbWFuZWphclJlZ2lzdHJvKCk7XG4gIGNhcmdhclVzdWFyaW9zKCk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=