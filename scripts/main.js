// Alert para saber en que tipo de navegador estoy
if (window.innerWidth <= 768) {
  alert("Estás en modo móvil");
} else {
  alert("Estás en modo escritorio");
}

//Variables para almacenar la hora
let hora, minutos, segundos;

function obtenerHora() {
  const ahora = new Date();
  hora = ahora.getHours().toString().padStart(2, '0');
  minutos = ahora.getMinutes().toString().padStart(2, '0');
  segundos = ahora.getSeconds().toString().padStart(2, '0');
}

function mostrarHoraConsola() {
  obtenerHora();
  console.log(`Hora actual: ${hora}:${minutos}:${segundos}`);
}

function actualizarReloj() {
  obtenerHora();
  const reloj = document.getElementById('reloj');
  reloj.textContent = `${hora}:${minutos}:${segundos}`;
}

// Inicialización de mis relojes
setInterval(actualizarReloj, 10000);
setInterval(mostrarHoraConsola, 10000);
actualizarReloj();

// Carga artículos desde el JSON
fetch('./src/data/articles.json')
  .then(res => res.json())
  .then(articulos => {
    const contenedor = document.querySelector('.articulos');
    articulos.forEach(({ titulo, texto }) => {
      const article = document.createElement('article');
      article.classList.add('articulos');
      article.innerHTML = `
        <h2 class="articulosTitulo">${titulo}</h2>
        <p class="articulosTexto">${texto}</p>
      `;
      contenedor.appendChild(article);
    });
  })
  .catch(error => {
    console.error('Error al cargar los artículos:', error);
  });
