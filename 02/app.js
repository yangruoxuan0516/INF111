// créer programmatiquement (depuis l'application TypeScript) un div avec un id "app"
var div = document.createElement('div');
div.id = 'app';
// créer un h1 avec le texte "Bonjour, TypeScript!"
var text = "Bonjour, TypeScript!";
var h1 = document.createElement("h1");
h1.textContent = text;
// ajouter le h1 dans le div
div.appendChild(h1);
// ajouter le div dans le body
document.body.appendChild(div);
