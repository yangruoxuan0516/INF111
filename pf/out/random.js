var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const div = document.createElement("div");
const header = document.createElement("h1");
header.textContent = "Get a random museum...";
header.style.fontSize = "36px";
header.style.fontWeight = "bold";
header.style.fontFamily = "cursive";
header.style.fontVariant = "small-caps";
header.style.fontStyle = "italic";
div.appendChild(header);
function rerandom() {
    return __awaiter(this, void 0, void 0, function* () {
        const choice_random = document.createElement("li");
        const svg = yield fetch('./svg/redo.svg');
        let svgText = yield svg.text();
        svgText = svgText.replace('width="24"', 'width="36"');
        svgText = svgText.replace('height="24"', 'height="36"');
        svgText = svgText.replace(/fill="#333"/g, 'fill="#000000"');
        svgText = svgText.replace(/stroke="#333"/g, 'stroke="#000000"');
        const url = './random.html';
        choice_random.innerHTML = `<a href="${url}">${svgText}</a>`;
        choice_random.style.listStyleType = "none";
        return choice_random;
    });
}
rerandom().then((button) => { div.appendChild(button); });
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.marginBottom = "-20px";
document.body.appendChild(div);
import { museumService } from './app.js';
museumService.random();
//# sourceMappingURL=random.js.map