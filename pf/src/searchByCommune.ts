import { museumService } from './app.js';

window.onload = () => {
    new MyFormManager();
    // create container for museums
    // set properties for container
    const container: HTMLDivElement = document.createElement("div");
    container.id = "output";
    container.style.backgroundColor = "#f0f0f0";  // Set the color you want
    container.style.height = "auto";
    container.style.padding = "50px";
    document.body.appendChild(container);
    document.body.style.padding = "150px";    
  };
  
class MyFormManager {
    myForm: HTMLFormElement;
    inputCommune: HTMLInputElement;

    constructor() {
      this.myForm = document.getElementById("myForm") as HTMLFormElement;
      this.inputCommune = document.getElementById("commune") as HTMLInputElement;
      this.myForm.addEventListener("submit", this.handleSubmit.bind(this));
    }

    async handleSubmit(event: Event) {
        event.preventDefault();
        const options: RequestInit = {
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
        const commune = this.inputCommune.value;
        console.log(`commune: ${commune}`);
        try{
            museumService.searchByCommune(commune);
        } catch (error) {
          console.error('Error:', error);
        }
      }
    }
    
const div = document.createElement("div");
const header = document.createElement("h1");
header.textContent = "Find a museum in a commune...";
header.style.fontSize = "36px";
header.style.fontWeight = "bold";
header.style.fontFamily = "cursive";
header.style.fontVariant = "small-caps";
header.style.fontStyle = "italic";
div.appendChild(header);

const form = document.createElement("form");
form.id = "myForm";

const label = document.createElement("label");
label.htmlFor = "commune";
label.textContent = "Commune:";
label.style.fontSize = "24px";
label.style.fontWeight = "bold";
label.style.fontFamily = "cursive";
label.style.fontVariant = "small-caps";
form.appendChild(label);

const input = document.createElement("input");
input.type = "text";
input.id = "commune";
input.style.fontSize = "24px";
input.style.fontWeight = "bold";
input.style.fontFamily = "cursive";
input.style.fontVariant = "small-caps";
input.style.marginRight = "10px";
input.style.marginLeft = "10px";
input.style.marginBottom = "10px";
input.style.borderRadius = "10px 10px";
form.appendChild(input);

const button = document.createElement("button");
button.type = "submit";
button.textContent = "Submit";
button.style.fontSize = "24px";
button.style.fontWeight = "bold";
button.style.fontFamily = "cursive";
button.style.fontVariant = "small-caps";
button.style.backgroundColor = "#ffffff";
button.style.borderRadius = "10px 10px";

form.appendChild(button);
form.style.marginBottom = "-10px";
div.appendChild(form);
div.style.display = "flex";
div.style.justifyContent = "space-between";
div.style.alignItems = "center";
div.style.marginBottom = "-20px";
document.body.appendChild(div);

// const ul = document.createElement("ul");
// ul.id = "output";
// document.body.appendChild(ul);

// const inputCommune = document.getElementById("commune");
// console.log((inputCommune as HTMLInputElement).value);
// museumService.searchByCommune((inputCommune as HTMLInputElement).value);