class DateTime extends HTMLElement {
    constructor() {
        super();
        this.year = "";
        this.month = "";
        this.day = "";
        this.hour = "";
        this.minute = "";
        this.second = "";
    }
    static get observedAttributes() {
        return ["year", "month", "day", "hour", "minute", "second"];
    }
    attributeChangedCallback(element, oldValue, newValue) {
        if (element === "year") {
            this.year = newValue;
        }
        if (element === "month") {
            this.month = newValue;
        }
        if (element === "day") {
            this.day = newValue;
        }
        if (element === "hour") {
            this.hour = newValue;
        }
        if (element === "minute") {
            this.minute = newValue;
        }
        if (element === "second") {
            this.second = newValue;
        }
    }
    connectedCallback() {
        this.textContent = `${this.year}-${Number(this.month) + 1}-${this.day} ${this.hour}:${this.minute}:${this.second}`;
    }
}
customElements.define("date-time", DateTime);
class GreetCustom extends HTMLElement {
    constructor() {
        super();
        this.greeting = "";
    }
    static get observedAttributes() {
        return ["greeting"];
    }
    attributeChangedCallback(greeting, oldValue, newValue) {
        if (greeting === "greeting") {
            this.greeting = newValue;
        }
    }
    connectedCallback() {
        this.textContent = `${this.greeting} !`;
    }
}
customElements.define("greet-custom", GreetCustom);
function afficher() {
    const dt = new Date();
    const dateTime = document.getElementById("dateTime");
    if (dateTime) {
        dateTime.setAttribute("year", dt.getFullYear().toString());
        dateTime.setAttribute("month", dt.getMonth().toString());
        dateTime.setAttribute("day", dt.getDate().toString());
        dateTime.setAttribute("hour", dt.getHours().toString());
        dateTime.setAttribute("minute", dt.getMinutes().toString());
        dateTime.setAttribute("second", dt.getSeconds().toString());
        dateTime.connectedCallback();
    }
    else {
        console.log("dateTime is null");
    }
    const greetCustom = document.getElementById("greetCustom");
    if (greetCustom) {
        if (dt.getHours() < 12) {
            greetCustom.setAttribute("greeting", "Bonjour");
        }
        else if (dt.getHours() < 18) {
            greetCustom.setAttribute("greeting", "Bon après-midi");
        }
        else {
            greetCustom.setAttribute("greeting", "Bonsoir");
        }
        greetCustom.connectedCallback();
    }
    else {
        console.log("greetCustom is null");
    }
}
window.onload = () => {
    afficher();
    setInterval(() => {
        afficher();
    }, 1000);
};
//# sourceMappingURL=app.js.map