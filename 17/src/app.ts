//attendre que le DOM soit chargé

window.onload = () => {
  new MyFormManager();
};

class MyFormManager {
  myForm: HTMLFormElement;
  cityInput: HTMLInputElement;
  constructor() {
    this.myForm = document.getElementById("myForm") as HTMLFormElement;
    this.cityInput = document.getElementById("city") as HTMLInputElement;
    // do it the first time without waiting
    this.myForm.addEventListener("submit", this.handleSubmit.bind(this));
    // then repete every 10 seconds
    setInterval(async () => {
      console.log("répétition: 10 secondes se sont écoulées");
      this.handleSubmit(new Event('submit'));
    }, 10000);

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
    const url: string = "http://localhost:8088/https://api.openaq.org/v2/locations?city="+this.cityInput.value;
    console.log(`url: ${url}`);
    const result = await fetch(url,options);
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
        const ul: HTMLUListElement = document.createElement("ul");

        const place = document.createElement('h3');
        place.textContent = cityElement.name;
        // ul.appendChild(place);
        outputDiv.appendChild(place);

        parameters.forEach(parameterElement => {
          // creat a table
          const li = document.createElement('li');
        
          const parameter = document.createElement('p');
          parameter.textContent = 'parameter: '+parameterElement.parameter;
          li.appendChild(parameter);

          const lastValue = document.createElement('p');
          lastValue.textContent = 'lastValue: '+parameterElement.lastValue;
          li.appendChild(lastValue);

          const unit = document.createElement('p');
          unit.textContent = 'unit: '+parameterElement.unit;
          li.appendChild(unit);

          ul.appendChild(li);
        });
        outputDiv.appendChild(ul);
      });
      document.body.appendChild(outputDiv);

    }).catch((error) => {
      console.error('Error:', error);
    });

  }
}

