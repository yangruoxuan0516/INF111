var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class AddressService {
    searchAddress(query, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const encodedQuery = encodeURIComponent(query);
            const response = yield fetch(`https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`);
            console.log(`https://api-adresse.data.gouv.fr/search/?q=${encodedQuery}&limit=${limit}`);
            const addressjson = yield response.json();
            return addressjson.features;
        });
    }
    displayAddresses() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const url = '8 bd du port';
                const addresses = yield this.searchAddress(url, 10);
                const ul = document.createElement("ul");
                addresses.forEach((address) => {
                    const li = document.createElement("li");
                    const finalString = `${address.properties.city} - ${address.properties.postcode} - ${address.properties.street} - ${address.properties.housenumber} - ${address.properties.context} - ${address.geometry.coordinates[0]} - ${address.geometry.coordinates[1]}`;
                    li.textContent = finalString;
                    ul.appendChild(li);
                    console.log(finalString);
                });
                document.body.appendChild(ul);
            }
            catch (error) {
                console.error('Error');
            }
        });
    }
}
const addressService = new AddressService();
addressService.displayAddresses();
//# sourceMappingURL=app.js.map