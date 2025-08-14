// Reproductor de audio
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const progreso = document.getElementById("progreso");

function togglePlay() {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
    document.getElementById("mensajeReproduccion").style.display = "none"; // Oculta el mensaje
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶";
  }
}

audio.addEventListener("timeupdate", () => {
  progreso.max = audio.duration || 0;
  progreso.value = audio.currentTime || 0;
});

progreso.addEventListener("input", () => {
  audio.currentTime = progreso.value;
});

const volumenBtn = document.getElementById("volumenBtn");
const volumenSlider = document.getElementById("volumenSlider");

function toggleVolumenUI() {
  const isVisible = volumenSlider.style.display === "block";
  volumenSlider.style.display = isVisible ? "none" : "block";
}

volumenSlider.addEventListener("input", () => {
  audio.volume = volumenSlider.value;
  volumenBtn.textContent = audio.volume == 0 ? "🔇" : "🔊";
});


// Contador de días
function actualizarContador() {
  const ahora = new Date();
  const objetivo = new Date("2025-11-15T00:00:00");
  const diferencia = objetivo - ahora;

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);

  document.getElementById("dias").textContent = dias.toString().padStart(2, "0");
  document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
  document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
}

setInterval(actualizarContador, 1000);
actualizarContador();

