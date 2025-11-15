// script.js

// Guardar cita en localStorage y mostrar en lista
function guardarCita(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  const servicio = document.getElementById('servicio').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  if (!nombre || !telefono || !servicio || !fecha || !hora) {
    alert('Por favor completa todos los campos');
    return false;
  }

  const cita = { nombre, telefono, servicio, fecha, hora, id: Date.now() };

  // leer array existente
  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  citas.push(cita);
  localStorage.setItem('citas', JSON.stringify(citas));

  // mostrar confirmación
  const mensaje = document.getElementById('mensajeCita');
  mensaje.style.display = 'block';
  mensaje.innerHTML = `<strong>Cita guardada:</strong> ${nombre} — ${servicio} el ${fecha} a las ${hora}`;

  // limpiar form
  document.getElementById('citaForm').reset();

  // actualizar lista
  renderListaCitas();
  return false;
}

// mostrar citas guardadas
function renderListaCitas() {
  const lista = document.getElementById('listaCitas');
  if (!lista) return;
  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  lista.innerHTML = '';
  if (citas.length === 0) {
    lista.innerHTML = '<li class="w3-padding">No hay citas guardadas</li>';
    return;
  }
  citas.forEach(c => {
    const li = document.createElement('li');
    li.className = 'w3-padding';
    li.innerHTML = `<strong>${c.nombre}</strong> — ${c.servicio} — ${c.fecha} ${c.hora}
      <button class="w3-button w3-small w3-right w3-red" onclick="borrarCita(${c.id})">Eliminar</button>`;
    lista.appendChild(li);
  });
}

// borrar cita por id
function borrarCita(id) {
  let citas = JSON.parse(localStorage.getItem('citas')) || [];
  citas = citas.filter(c => c.id !== id);
  localStorage.setItem('citas', JSON.stringify(citas));
  renderListaCitas();
}

// inicializar
document.addEventListener('DOMContentLoaded', () => {
  renderListaCitas();
});
