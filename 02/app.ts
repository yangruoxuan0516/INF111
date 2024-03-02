// créer programmatiquement (depuis l'application TypeScript) un div avec un id "app"
const div:HTMLDivElement = document.createElement('div');
div.id = 'app';
// créer un h1 avec le texte "Bonjour, TypeScript!"
const text: string = "Bonjour, TypeScript!";
const h1: HTMLHeadingElement = document.createElement("h1");
h1.textContent = text;
// ajouter le h1 dans le div
div.appendChild(h1)
// ajouter le div dans le body
document.body.appendChild(div);