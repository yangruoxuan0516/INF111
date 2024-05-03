var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class MuseumService {
    getData() {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield fetch(`https://data.culture.gouv.fr/api/explore/v2.1/catalog/datasets/liste-et-localisation-des-musees-de-france/exports/json`);
            const data = yield response.json();
            return data;
        });
    }
    displayMuseum(museum) {
        return __awaiter(this, void 0, void 0, function* () {
            // get svg
            const svg_museum = yield fetch('./svg/museum.svg');
            let svgText_museum = yield svg_museum.text();
            svgText_museum = svgText_museum.replace('width="24"', 'width="48"');
            svgText_museum = svgText_museum.replace('height="24"', 'height="48"');
            const svg_phone = yield fetch('./svg/phone.svg');
            let svgText_phone = yield svg_phone.text();
            svgText_phone = svgText_phone.replace('width="24"', 'width="48"');
            svgText_phone = svgText_phone.replace('height="24"', 'height="48"');
            const svg_map = yield fetch('./svg/map.svg');
            let svgText_map = yield svg_map.text();
            svgText_map = svgText_map.replace('width="24"', 'width="48"');
            svgText_map = svgText_map.replace('height="24"', 'height="48"');
            // create ul for museum
            const UL = document.createElement("ul");
            // creat ul for svg and museum name
            const ul_museum = document.createElement("ul");
            const li_svg_museum = document.createElement("li");
            let url_museum = museum.url;
            if (url_museum && !url_museum.startsWith('http://') && !url_museum.startsWith('https://')) {
                url_museum = 'http://' + url_museum; // or 'https://' if it's a secure URL
            }
            li_svg_museum.innerHTML = `<a href="${url_museum}">${svgText_museum}</a>`;
            li_svg_museum.style.listStyleType = "none";
            li_svg_museum.style.marginRight = "5px";
            ul_museum.appendChild(li_svg_museum);
            //
            const li_nom = document.createElement("li");
            li_nom.textContent = museum.nom_officiel_du_musee;
            li_nom.style.fontSize = "45px";
            li_nom.style.fontWeight = "bold";
            li_nom.style.fontFamily = "cursive";
            li_nom.style.fontVariant = "small-caps";
            ul_museum.appendChild(li_nom);
            //
            ul_museum.style.listStyleType = "none";
            ul_museum.style.marginLeft = "-40px";
            ul_museum.style.display = "flex";
            ul_museum.style.justifyContent = "flex-start";
            // ul_museum.style.alignItems = 'flex-middle';
            UL.appendChild(ul_museum);
            // creat ul for svg and museum address
            const ul_address = document.createElement("ul");
            const li_svg_address = document.createElement("li");
            const li_adresse = document.createElement("li");
            let address = museum.adresse;
            if (address) {
                const add = address.split(/[\s,]+/).join('+');
                const url_address = `https://www.google.com/maps/search/?api=1&query=` + add + `+${museum.code_postal}+${museum.commune}`;
                li_svg_address.innerHTML = `<a href="${url_address}">${svgText_map}</a>`;
                li_svg_address.style.listStyleType = "none";
                li_svg_address.style.marginRight = "5px";
                ul_address.appendChild(li_svg_address);
                li_adresse.textContent = museum.adresse;
                li_adresse.style.fontSize = "36px";
                li_adresse.style.fontWeight = "bold";
                li_adresse.style.fontFamily = "cursive";
                li_adresse.style.fontVariant = "small-caps";
                li_adresse.style.listStyleType = "none";
                ul_address.appendChild(li_adresse);
            }
            else {
                li_svg_address.innerHTML = `${svgText_map}`;
                li_svg_address.style.listStyleType = "none";
                li_svg_address.style.marginRight = "5px";
                ul_address.appendChild(li_svg_address);
                li_adresse.textContent = `Not available for this moment, please check the museum website for more information ^^`;
                li_adresse.style.fontSize = "36px";
                li_adresse.style.fontWeight = "bold";
                li_adresse.style.fontFamily = "cursive";
                li_adresse.style.fontVariant = "small-caps";
                li_adresse.style.listStyleType = "none";
                li_adresse.style.color = "lightgrey";
                ul_address.appendChild(li_adresse);
            }
            //
            ul_address.style.listStyleType = "none";
            ul_address.style.marginLeft = "-40px";
            ul_address.style.display = "flex";
            ul_address.style.justifyContent = "flex-start";
            UL.appendChild(ul_address);
            // creat ul for svg and museum number
            const ul_number = document.createElement("ul");
            const li_svg_number = document.createElement("li");
            li_svg_number.innerHTML = `${svgText_phone}`;
            li_svg_number.style.listStyleType = "none";
            li_svg_number.style.marginRight = "5px";
            ul_number.appendChild(li_svg_number);
            //
            const li_number = document.createElement("li");
            if (museum.telephone) {
                li_number.textContent = museum.telephone;
                li_number.style.fontSize = "36px";
                li_number.style.fontWeight = "bold";
                li_number.style.fontFamily = "cursive";
                li_number.style.fontVariant = "small-caps";
            }
            else {
                li_number.textContent = `Not available for this moment, please check the museum website for more information ^^`;
                li_number.style.fontSize = "36px";
                li_number.style.fontWeight = "bold";
                li_number.style.fontFamily = "cursive";
                li_number.style.fontVariant = "small-caps";
                li_number.style.color = "lightgrey";
            }
            li_number.style.listStyleType = "none";
            ul_number.appendChild(li_number);
            //
            ul_number.style.listStyleType = "none";
            ul_number.style.marginLeft = "-40px";
            ul_number.style.display = "flex";
            ul_number.style.justifyContent = "flex-start";
            ul_number.style.marginBottom = "30px";
            UL.appendChild(ul_number);
            UL.style.marginBottom = "30px";
            UL.style.borderBottom = "1px solid black";
            return UL;
        });
    }
    showAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // create container for museums
                // set properties for container
                const container = document.createElement("div");
                container.style.backgroundColor = "#f0f0f0"; // Set the color you want
                container.style.height = "auto";
                container.style.padding = "50px";
                document.body.appendChild(container);
                document.body.style.padding = "150px";
                // get museums
                const museums = yield this.getData();
                // show each museum
                museums.forEach((museum) => {
                    this.displayMuseum(museum).then((UL) => {
                        container.appendChild(UL);
                    });
                });
            }
            catch (error) {
                console.error('Une erreur est survenue lors de la récupération des données des musées :', error);
            }
        });
    }
    random() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // create container for museums
                // set properties for container
                const container = document.createElement("div");
                container.style.backgroundColor = "#f0f0f0"; // Set the color you want
                container.style.height = "auto";
                container.style.padding = "50px";
                document.body.appendChild(container);
                document.body.style.padding = "150px";
                // get museums
                const museums = yield this.getData();
                // show random museum
                const random = Math.floor(Math.random() * museums.length);
                const museum = museums[random];
                this.displayMuseum(museum).then((UL) => { container.appendChild(UL); });
            }
            catch (error) {
                console.error('Une erreur est survenue lors de la récupération des données des musées :', error);
            }
        });
    }
    searchByCommune(commune) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // get museums
                const museums = yield this.getData();
                const outputDiv = document.getElementById('output');
                // show each museum
                museums.forEach((museum) => {
                    if (museum.commune.toLowerCase() === commune.toLowerCase()) {
                        this.displayMuseum(museum).then((UL) => {
                            outputDiv.appendChild(UL);
                        });
                    }
                });
            }
            catch (error) {
                console.error('Une erreur est survenue lors de la récupération des données des musées :', error);
            }
        });
    }
}
export const museumService = new MuseumService();
//# sourceMappingURL=app.js.map