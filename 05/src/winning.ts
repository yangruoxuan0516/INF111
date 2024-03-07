// https://codemyui.com/square-emoji-shadow-and-line-particles-popper-effect-on-button-click/

// function pop (e) {
export function pop(): Promise<boolean> {
    let amount = 200;
    // switch (e.target.dataset.type) {
    //   case 'shadow':
    //   case 'line':
    //     amount = 60;
    //     break;
    // }
    // Quick check if user clicked the button using a keyboard
    // if (e.clientX === 0 && e.clientY === 0) {
    //   const bbox = e.target.getBoundingClientRect();
    //   const x = bbox.left + bbox.width / 2;
    //   const y = bbox.top + bbox.height / 2;
    //   for (let i = 0; i < 30; i++) {
    //     // We call the function createParticle 30 times
    //     // We pass the coordinates of the button for x & y values
    //     createParticle(x, y, e.target.dataset.type);
    //   }
    // } else {
      for (let i = 0; i < amount; i++) {
        // createParticle(e.clientX, e.clientY + window.scrollY, e.target.dataset.type);
        // createParticle(e.clientX, e.clientY + window.scrollY);
        createParticle(window.innerWidth/2, window.innerHeight/2);
      }
    // }
    return new Promise((resolve, reject) => {
      // Some asynchronous operation
      setTimeout(() => {
          const result = true; // This should be the result of your operation
          resolve(result);
      }, 500);
  });
  }

// function createParticle (x, y, type) {
function createParticle (x, y) {
    const particle = document.createElement('particle');
    document.body.appendChild(particle);
    let width = Math.floor(Math.random() * 30 + 8);
    let height = width;
    let destinationX = (Math.random() - 0.5) * 300;
    let destinationY = (Math.random() - 0.5) * 300;
    let rotation = Math.random() * 520;
    let delay = Math.random() * 200;
    
    // switch (type) {
    //   case 'square':
        // particle.style.background = `hsl(${Math.random() * 90 + 270}, 70%, 60%)`;
        particle.style.background = 'rgba(255, 0, 0,'+ Math.random().toString() +')';
        particle.style.border = '1px solid white';
    //     break;
    //   case 'emoji':
    //     particle.innerHTML = ['❤','🧡','💛','💚','💙','💜','🤎'][Math.floor(Math.random() * 7)];
    //     particle.style.fontSize = `${Math.random() * 24 + 10}px`;
    //     width = height = 'auto';
    //     break;
    //   case 'mario':
    //     particle.style.backgroundImage = 'url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/127738/mario-face.png)';
    //     break;
    //   case 'shadow':
    //     var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
    //     particle.style.boxShadow = `0 0 ${Math.floor(Math.random() * 10 + 10)}px ${color}`;
    //     particle.style.background = color;
    //     particle.style.borderRadius = '50%';
    //     width = height = Math.random() * 5 + 4;
    //     break;
    //   case 'line':
    //     var color = `hsl(${Math.random() * 90 + 90}, 70%, 50%)`;
    //     particle.style.background = 'black';
    //     height = 1;
    //     rotation += 1000;
    //     delay = Math.random() * 1000;
    //     break;
    // }
    
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
  
if (document.body.animate) {
    document.querySelectorAll('button').forEach(button => button.addEventListener('click', pop));
}
  




