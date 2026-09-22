// Mostrar u ocultar el menú en móviles.
document.documentElement.classList.add('js');

const botonMenu = document.getElementById('boton-menu');
const menu = document.getElementById('menu');

function cerrarMenu() {
  menu.classList.remove('abierto');
  botonMenu.setAttribute('aria-expanded', 'false');
  botonMenu.textContent = 'Menú +';
}

botonMenu.addEventListener('click', function () {
  const abierto = menu.classList.toggle('abierto');
  botonMenu.setAttribute('aria-expanded', abierto);
  botonMenu.textContent = abierto ? 'Cerrar −' : 'Menú +';
});

menu.querySelectorAll('a').forEach(function (enlace) {
  enlace.addEventListener('click', cerrarMenu);
});

document.addEventListener('keydown', function (evento) {
  if (evento.key === 'Escape' && menu.classList.contains('abierto')) {
    cerrarMenu();
    botonMenu.focus();
  }
});

// Seleccionar el servicio al pulsar un enlace de la página.
const servicio = document.getElementById('servicio');
const resultado = document.getElementById('resultado');

document.querySelectorAll('[data-servicio]').forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    servicio.value = enlace.dataset.servicio;
    resultado.textContent = '';
  });
});

// Simular una consulta. No se envían datos a ninguna empresa.
const formulario = document.getElementById('formulario');
document.getElementById('enviar').disabled = false;

formulario.addEventListener('submit', function (evento) {
  evento.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (nombre === '' || mensaje === '') {
    resultado.textContent = 'Completa tu nombre y explica qué trabajo necesitas.';
    return;
  }

  resultado.textContent = 'Consulta de prueba preparada. Es una simulación: no se han enviado datos ni reservado maquinaria.';
});
