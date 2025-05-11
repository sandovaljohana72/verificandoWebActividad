// if (window.innerWidth <= 768) {
//   alert("Estás en modo móvil");
// } else {
//   alert("Estás en modo escritorio");
// }


let hora, minutos, segundos;

function obtenerHora() {
  // Obtengo la hora actual
  let ahora = new Date();
  hora = ahora.getHours();
  minutos = ahora.getMinutes();
  segundos = ahora.getSeconds();

  // Aseguro que siempre se muestren dos dígitos
  hora = hora <= 9 ? '0' + hora : hora;
  minutos = minutos <= 9 ? '0' + minutos : minutos;
  segundos = segundos <= 9 ? '0' + segundos : segundos;
}

function mostrarHoraConsola() {
  obtenerHora(); 
  console.log(`Hora actual: ${hora}:${minutos}:${segundos}`);
  
}
setInterval(mostrarHoraConsola, 10000);

function actualizarReloj() {
  obtenerHora(); 
  let lahora = `${hora}:${minutos}:${segundos}`;
  let reloj = document.getElementById('reloj');
  reloj.innerHTML = lahora;
  setInterval(actualizarReloj, 10000);
}

actualizarReloj();



