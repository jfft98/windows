function verCalendario() {
  alert("🎄 Calendario navideño próximamente 💖");
}



document.addEventListener('DOMContentLoaded', function () {
    var flakeCount = 50; // Reducido el número de copos de nieve
    var flakeContainer = document.getElementById('snowfall');
  
    for (var i = 0; i < flakeCount; i++) {
        var flake = document.createElement('div');
        flake.classList.add('flake');
        flake.style.left = Math.random() * 100 + 'vw'; // Posición horizontal aleatoria
        flake.style.animationDuration = (5 + Math.random() * 3) + 's'; // Duración aleatoria para cada copo
  
        // Posición inicial desde la parte superior
        flake.style.top = Math.random() * -100 + 'px'; // Comienza por encima de la pantalla
        
        // Opacidad aleatoria entre 0.5 y 1
        flake.style.opacity = 0.2 + Math.random() * 0.5; // Haciendo algunas más opacas que otras
  
        flakeContainer.appendChild(flake);
    }
  });

    document.addEventListener('click', () => {
        const audio = document.getElementById('myAudio');
        audio.volume = 0.5; // Establecemos el volumen al 50%
        audio.play().catch(error => {
        console.error('Error al reproducir el audio:', error);
        });
    });

    window.addEventListener('blur', () => {
        const audio = document.getElementById('myAudio');
        audio.pause();
    });

    window.addEventListener('focus', () => {
        const audio = document.getElementById('myAudio');
        audio.play();
    });



    const btn = document.getElementById('btnSorpresa');
const overlay = document.getElementById('overlay');
const contador = document.getElementById('contador');

const fechaObjetivo = new Date('2025-12-25T00:00:00');
let intervalo;

btn.addEventListener('click', () => {
  overlay.style.display = 'flex';
  actualizarContador();
  intervalo = setInterval(actualizarContador, 1000);
});

function actualizarContador(){
  const ahora = new Date();
  const diff = fechaObjetivo - ahora;

  if(diff <= 0){
  contador.textContent = '🎄 ¡Ya es Navidad!';
  btnRegalo.style.display = 'inline-block';
  clearInterval(intervalo);
  return;
}


  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / (1000 * 60)) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  contador.textContent =
    `${dias}d ${String(horas).padStart(2,'0')}:` +
    `${String(minutos).padStart(2,'0')}:` +
    `${String(segundos).padStart(2,'0')}`;
}

// cerrar tocando fuera
overlay.addEventListener('click', e => {
  if(e.target === overlay){
    overlay.style.display = 'none';
    clearInterval(intervalo);
  }
});



const audio = document.getElementById('myAudio');
const btnMusic = document.getElementById('btnMusic');

let reproduciendo = false;

btnMusic.addEventListener('click', () => {
  if(!reproduciendo){
    audio.play();
    btnMusic.textContent = '🔇 Pausar música';
    reproduciendo = true;
  } else {
    audio.pause();
    btnMusic.textContent = '🔊 Reproducir música';
    reproduciendo = false;
  }
});
    

const btnRegalo = document.getElementById('btnRegalo');

btnRegalo.addEventListener('click', () => {
  // PEGAR LINK PAGINA REGALO
  window.location.href = 'https://jfft98.github.io/windows/regalo.html';
});


