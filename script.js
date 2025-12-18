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