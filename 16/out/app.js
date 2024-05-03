var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
//interfaces créées avec le site https://app.quicktype.io/
class HttpClient {
    constructor(url) {
        this.url = url;
        this.options = {
            headers: {
                "Content-Type": "application/json",
            },
        };
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(this.url, this.options);
                if (response.ok) {
                    const data = yield response.json(); //extraction du corps de la réponse au format JSON
                    return data;
                }
            }
            catch (error) {
                console.error("There was a problem with the fetch operation: ", error);
            }
        });
    }
}
class CreateClient extends HttpClient {
    constructor(url, data) {
        super(url); //appel du constructeur de la classe parente
        this.options.method = "POST";
        this.options.body = JSON.stringify(data);
    }
}
class ReadClient extends HttpClient {
    constructor(url) {
        super(url);
        this.options.method = "GET";
    }
}
class UpdateClient extends HttpClient {
    constructor(url, data) {
        super(url);
        this.options.method = "PATCH";
        this.options.body = JSON.stringify(data);
    }
}
class UpdateClientPUT extends HttpClient {
    constructor(url, data) {
        super(url);
        this.options.method = "PUT";
        this.options.body = JSON.stringify(data);
    }
}
class DeleteClient extends HttpClient {
    constructor(url) {
        super(url);
        this.options.method = "DELETE";
    }
}
class DeleteClientCategory extends DeleteClient {
    constructor(url) {
        super(url);
        this.url_ = new URL(this.url);
        this.origin = this.url_.origin;
        this.urlRestaurant = this.origin.toString() + "/restaurants";
        this.urlCategory = this.origin.toString() + "/categories";
        this.urlRestaurantCategory = this.origin.toString() + "/restaurantCategories";
        this.parts = this.url_.pathname.split('/');
        this.lastPart = this.parts[this.parts.length - 1];
    }
    DeleteClientCategory() {
        return __awaiter(this, void 0, void 0, function* () {
            // delete category
            const deleteClientCategory = new DeleteClient(`${this.urlCategory}/${this.lastPart}`);
            yield deleteClientCategory.execute();
            // modify restaurant
            const readClientRestaurant = new ReadClient(this.urlRestaurant);
            const readData = yield readClientRestaurant.execute();
            if (readData) {
                readData.forEach((restaurant) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const test = yield fetch(`${this.urlRestaurant}/${restaurant.id}`);
                        if (test.ok) {
                            const updateData = { categoryIds: restaurant.categoryIds.filter((id) => id !== this.lastPart) };
                            const updateClientRestaurant = new UpdateClient(`${this.urlRestaurant}/${restaurant.id}`, updateData);
                            yield updateClientRestaurant.execute();
                        }
                    }
                    catch (error) {
                        console.log(`restaurant ${restaurant.id} does not exist anymore`);
                    }
                }));
            }
            ;
            // modify restaurantCategory
            const readClientRestaurantCategory = new ReadClient(this.urlRestaurantCategory);
            const readDataRestaurantCategory = yield readClientRestaurantCategory.execute();
            console.log(readDataRestaurantCategory);
            if (readDataRestaurantCategory) {
                readDataRestaurantCategory.forEach((restaurantCategory) => __awaiter(this, void 0, void 0, function* () {
                    if (restaurantCategory.categoryId === null || restaurantCategory.restaurantId === null) {
                        try {
                            const id = restaurantCategory.id;
                            const deleteClientRestaurantCategory = new DeleteClient(`${this.urlRestaurantCategory}/${id}`);
                            yield deleteClientRestaurantCategory.execute();
                        }
                        catch (error) {
                            console.log(error.message);
                        }
                    }
                }));
            }
        });
    }
}
class DeleteClientRestaurant extends DeleteClient {
    constructor(url) {
        super(url);
        this.url_ = new URL(this.url);
        this.origin = this.url_.origin;
        this.urlRestaurant = this.origin.toString() + "/restaurants";
        this.urlCategory = this.origin.toString() + "/categories";
        this.urlRestaurantCategory = this.origin.toString() + "/restaurantCategories";
        this.parts = this.url_.pathname.split('/');
        this.lastPart = this.parts[this.parts.length - 1];
    }
    DeleteClientRestaurant() {
        return __awaiter(this, void 0, void 0, function* () {
            // delete restaurant
            const deleteClientRestaurant = new DeleteClient(`${this.urlRestaurant}/${this.lastPart}`);
            yield deleteClientRestaurant.execute();
            // modify category
            const readClientCategory = new ReadClient(this.urlCategory);
            const readData = yield readClientCategory.execute();
            if (readData) {
                readData.forEach((category) => __awaiter(this, void 0, void 0, function* () {
                    try {
                        const test = yield fetch(`${this.urlCategory}/${category.id}`);
                        if (test.ok) {
                            const updateData = { restaurantIds: category.restaurantIds.filter((id) => id !== this.lastPart) };
                            const updateClientCategory = new UpdateClient(`${this.urlCategory}/${category.id}`, updateData);
                            yield updateClientCategory.execute();
                        }
                    }
                    catch (error) {
                        console.log(`category ${category.id} does not exist anymore`);
                    }
                }));
            }
            ;
            // modify restaurantCategory
            const readClientRestaurantCategory = new ReadClient(this.urlRestaurantCategory);
            const readDataRestaurantCategory = yield readClientRestaurantCategory.execute();
            console.log(readDataRestaurantCategory);
            /*
            // the following code should work, but it does not due to a bug in the server
            if (readDataRestaurantCategory){
              const updateData: RestaurantCategory[] = readDataRestaurantCategory.filter((restaurantCategory) => restaurantCategory.restaurantId !== null);
              console.log(updateData);
              const updateClientRestaurantCategory = new UpdateClientPUT<RestaurantCategory[]>(`${this.urlRestaurantCategory}`, updateData);
              await updateClientRestaurantCategory.execute();
            }
            */
            if (readDataRestaurantCategory) {
                readDataRestaurantCategory.forEach((restaurantCategory) => __awaiter(this, void 0, void 0, function* () {
                    if (restaurantCategory.restaurantId === null || restaurantCategory.categoryId === null) {
                        try {
                            const id = restaurantCategory.id;
                            const deleteClientRestaurantCategory = new DeleteClient(`${this.urlRestaurantCategory}/${id}`);
                            yield deleteClientRestaurantCategory.execute();
                        }
                        catch (error) {
                            console.log(error.message);
                        }
                    }
                }));
            }
        });
    }
}
(() => __awaiter(this, void 0, void 0, function* () {
    let url1 = "http://localhost:3000/restaurants";
    const deleteClientRestaurant = new DeleteClientRestaurant(`${url1}/55fa`);
    console.log("delete restaurant with id 55fa");
    yield deleteClientRestaurant.DeleteClientRestaurant();
    let url2 = "http://localhost:3000/categories";
    const deleteClientCategory = new DeleteClientCategory(`${url2}/71b2`);
    console.log("delete category with id 71b2");
    yield deleteClientCategory.DeleteClientCategory();
}))();
//# sourceMappingURL=app.js.map