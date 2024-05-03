//attendre que le DOM soit chargé
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
window.onload = () => {
    new MyFormManager();
};
class MyFormManager {
    constructor() {
        this.myForm = document.getElementById("myForm");
        this.cityInput = document.getElementById("city");
        // do it the first time without waiting
        this.myForm.addEventListener("submit", this.handleSubmit.bind(this));
        // then repete every 10 seconds
        setInterval(() => __awaiter(this, void 0, void 0, function* () {
            console.log("répétition: 10 secondes se sont écoulées");
            this.handleSubmit(new Event('submit'));
        }), 10000);
    }
    handleSubmit(event) {
        return __awaiter(this, void 0, void 0, function* () {
            event.preventDefault();
            const options = {
                method: "get",
                headers: {
                    "Content-Type": "application/json",
                }
            };
            // delete existing output
            const outputDiv = document.getElementById('output');
            while (outputDiv.firstChild) {
                outputDiv.removeChild(outputDiv.firstChild);
            }
            // get city data
            const url = "http://localhost:8088/https://api.openaq.org/v2/locations?city=" + this.cityInput.value;
            console.log(`url: ${url}`);
            const result = yield fetch(url, options);
            result.json().then((data) => {
                const results = data.results;
                // if no city found, tell user
                if (results.length === 0) {
                    const p = document.createElement('p');
                    p.textContent = 'No data found';
                    outputDiv.appendChild(p);
                    document.body.appendChild(outputDiv);
                    return;
                }
                // else, for each place in city, show each pollution in il, than put each city in ul, then put the whole thing in div
                results.forEach(cityElement => {
                    const parameters = cityElement.parameters;
                    const ul = document.createElement("ul");
                    const place = document.createElement('h3');
                    place.textContent = cityElement.name;
                    // ul.appendChild(place);
                    outputDiv.appendChild(place);
                    parameters.forEach(parameterElement => {
                        // creat a table
                        const li = document.createElement('li');
                        const parameter = document.createElement('p');
                        parameter.textContent = 'parameter: ' + parameterElement.parameter;
                        li.appendChild(parameter);
                        const lastValue = document.createElement('p');
                        lastValue.textContent = 'lastValue: ' + parameterElement.lastValue;
                        li.appendChild(lastValue);
                        const unit = document.createElement('p');
                        unit.textContent = 'unit: ' + parameterElement.unit;
                        li.appendChild(unit);
                        ul.appendChild(li);
                    });
                    outputDiv.appendChild(ul);
                });
                document.body.appendChild(outputDiv);
            }).catch((error) => {
                console.error('Error:', error);
            });
        });
    }
}
//# sourceMappingURL=app.js.map