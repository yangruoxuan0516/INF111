// title
const title: HTMLHeadingElement = document.createElement("h1");
title.style.fontFamily = "cursive";
title.style.fontStyle = "italic";
title.style.fontVariant = "small-caps";
title.textContent = "Museums in France";
title.style.textAlign = "center";
title.style.position = "absolute";
title.style.top = "10%";
title.style.left = "50%";
title.style.transform = "translate(-50%, -50%)";
title.style.zIndex = "9999";
title.style.fontSize = "5.5em";
document.body.appendChild(title);

// welcome
const welcome: HTMLHeadingElement = document.createElement("h1");
welcome.style.fontFamily = "cursive";
welcome.style.fontStyle = "italic";
welcome.style.fontVariant = "small-caps";
welcome.textContent = "Waiting for your visit...";
welcome.style.textAlign = "center";
welcome.style.position = "absolute";
welcome.style.top = "75%";
welcome.style.left = "50%";
welcome.style.transform = "translate(-50%, -50%)";
welcome.style.zIndex = "9999";
welcome.style.fontSize = "4.5em";
document.body.appendChild(welcome);

// show all the museums
async function showAll() {
    const choice_showAll = document.createElement("li");
    const svg = await fetch('./svg/list.svg');
    let svgText = await svg.text();
    svgText = svgText.replace('width="24"', 'width="96"');
    svgText = svgText.replace('height="24"', 'height="96"');
    svgText = svgText.replace(/fill="#333"/g, 'fill="#000000"');
    svgText = svgText.replace(/stroke="#333"/g, 'stroke="#000000"');
    const url = './showAll.html';
    choice_showAll.innerHTML = `<a href="${url}">${svgText}</a>`;
    choice_showAll.style.listStyleType = "none";
    return choice_showAll;
  }

// search by commune
async function searchByCommune() {
    const choice_searchByCommune = document.createElement("li");
    const svg = await fetch('./svg/search.svg');
    let svgText = await svg.text();
    svgText = svgText.replace('width="24"', 'width="96"');
    svgText = svgText.replace('height="24"', 'height="96"');
    svgText = svgText.replace(/fill="#333"/g, 'fill="#000000"');
    svgText = svgText.replace(/stroke="#333"/g, 'stroke="#000000"');
    const url = './searchByCommune.html';
    choice_searchByCommune.innerHTML = `<a href="${url}">${svgText}</a>`;
    choice_searchByCommune.style.listStyleType = "none";
    return choice_searchByCommune;
  }
// random museum
async function random() {
    const choice_random = document.createElement("li");
    const svg = await fetch('./svg/random.svg');
    let svgText = await svg.text();
    svgText = svgText.replace('width="24"', 'width="96"');
    svgText = svgText.replace('height="24"', 'height="96"');
    svgText = svgText.replace(/fill="#333"/g, 'fill="#000000"');
    svgText = svgText.replace(/stroke="#333"/g, 'stroke="#000000"');
    const url = './random.html';
    choice_random.innerHTML = `<a href="${url}">${svgText}</a>`;
    choice_random.style.listStyleType = "none";
    return choice_random;
  }


// blue div - random
const blueDiv: HTMLDivElement = document.createElement("div");
blueDiv.style.backgroundColor = "rgba(0, 0, 255, 0.5)";
blueDiv.style.width = "33.33%";
blueDiv.style.height = window.innerHeight + "px";
random().then((choice_random) => {
    blueDiv.appendChild(choice_random);
});
blueDiv.style.display = "flex";
blueDiv.style.justifyContent = "center";
blueDiv.style.alignItems = "center";

// white div - search by commune
const whiteDiv: HTMLDivElement = document.createElement("div");
whiteDiv.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
whiteDiv.style.width = "33.33%";
whiteDiv.style.height = window.innerHeight + "px";
searchByCommune().then((choice_searchByCommune) => {
    whiteDiv.appendChild(choice_searchByCommune);
});
whiteDiv.style.display = "flex";
whiteDiv.style.justifyContent = "center"
whiteDiv.style.alignItems = "center";

// red div - show all
const redDiv: HTMLDivElement = document.createElement("div");
redDiv.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
redDiv.style.width = "33.33%";
redDiv.style.height = window.innerHeight + "px";
showAll().then((choice_showAll) => {
    redDiv.appendChild(choice_showAll);
});
redDiv.style.display = "flex";
redDiv.style.justifyContent = "center";
redDiv.style.alignItems = "center";

// add divs to the container
const container: HTMLDivElement = document.createElement("div");
container.style.display = "flex";
document.body.appendChild(container);
container.appendChild(blueDiv);
container.appendChild(whiteDiv);
container.appendChild(redDiv);

