// https://codemyui.com/square-emoji-shadow-and-line-particles-popper-effect-on-button-click/

export function pop () {
    let amount = 200;
      for (let i = 0; i < amount; i++) {
        createParticle(window.innerWidth/2, window.innerHeight/2);
      }
  }

function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    
    particle.style.background = 'rgba(255, 0, 0,'+ Math.random().toString() +')';
    particle.style.border = '1px solid white';
    particle.style.width = `${width}px`;
    particle.style.height = `${height}px`;
    const animation = particle.animate([
      {
        transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(0deg)`,
        opacity: 1
      },
      {
        transform: `translate(-50%, -50%) translate(${x + destinationX*3}px, ${y + destinationY*3}px) rotate(${rotation}deg)`,
        opacity: 0
      }
    ], {
      duration: Math.random() * 1000 + 5000,
      easing: 'cubic-bezier(0, .9, .57, 1)',
      delay: delay
    });
    animation.onfinish = removeParticle;
}

function removeParticle (e) {
    e.srcElement.effect.target.remove();
}




