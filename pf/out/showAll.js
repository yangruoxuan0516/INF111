const header = document.createElement("h1");
header.textContent = "See all the museums in France...";
header.style.fontSize = "36px";
header.style.fontWeight = "bold";
header.style.fontFamily = "cursive";
header.style.fontVariant = "small-caps";
header.style.fontStyle = "italic";
header.style.marginBottom = "5px";
document.body.appendChild(header);
import { museumService } from './app.js';
museumService.showAll();
//# sourceMappingURL=showAll.js.map