const div = document.createElement("div");

const header = document.createElement("h1");
header.textContent = "Get a random museum...";
header.style.fontSize = "36px";
header.style.fontWeight = "bold";
header.style.fontFamily = "cursive";
header.style.fontVariant = "small-caps";
header.style.fontStyle = "italic";
div.appendChild(header);

async function rerandom() {
    const choice_random = document.createElement("li");
    const svg = await fetch('./svg/redo.svg');
    let svgText = await svg.text();
    svgText = svgText.replace('width="24"', 'width="36"');
    svgText = svgText.replace('height="24"', 'height="36"');
    svgText = svgText.replace(/fill="#333"/g, 'fill="#000000"');
    svgText = svgText.replace(/stroke="#333"/g, 'stroke="#000000"');
    const url = './random.html';
    choice_random.innerHTML = `<a href="${url}">${svgText}</a>`;
    choice_random.style.listStyleType = "none";
    return choice_random;
}
rerandom().then((button) => {div.appendChild(button);});

div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.marginBottom = "-20px";
document.body.appendChild(div);

import { museumService } from './app.js';
museumService.random();

