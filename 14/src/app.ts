interface Address {
  properties: {
  city: string;
  postcode: string;
  street: string;
  housenumber: string;
  context: string;
},
  geometry: {coordinates: number[];}
}

class AddressService {
  private async searchAddress(query:string, limit:number): Promise<Address[]>{
    const encodedQuery = encodeURIComponent(query);
    const response = await fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`);
    console.log(`https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`);
    const addressjson = await response.json();
    return addressjson.features;
  }

  async displayAddresses(){
    try{
      const url = '8 bd du port';
      const addresses = await this.searchAddress(url,10);
      const ul: HTMLUListElement = document.createElement("ul");
      addresses.forEach((address) => {
        const li: HTMLLIElement = document.createElement("li");
        const finalString: string = `${address.properties.city} - ${address.properties.postcode} - ${address.properties.street} - ${address.properties.housenumber} - ${address.properties.context} - ${address.geometry.coordinates[0]} - ${address.geometry.coordinates[1]}`;
        li.textContent = finalString;
        ul.appendChild(li);
        console.log(finalString);
      });
      document.body.appendChild(ul);

    }catch(error){
      console.error('Error');
    }
  }
}

const addressService = new AddressService();
addressService.displayAddresses();
