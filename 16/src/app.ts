
interface AlloResto {
  restaurants: Restaurant[];
  categories: Category[];
  restaurantCategories: RestaurantCategory[];
}

interface Category {
  // the ? is used to mark a property as optional
  id?: string;
  name?: string;
  restaurantIds?: string[];
}

interface RestaurantCategory {
  id?: string;
  restaurantId?: string;
  categoryId?: string;
}

interface Restaurant {
  id?: string;
  name?: string;
  description?: string;
  categoryIds?: string[];
}

//interfaces créées avec le site https://app.quicktype.io/

abstract class HttpClient<T> {
  protected url: string;
  protected options: RequestInit;

  constructor(url: string) {
    this.url = url;
    this.options = {
      headers: {
        "Content-Type": "application/json",
      },
    };
  }

  public async execute(): Promise<T | void> {
    try {
      const response = await fetch(this.url, this.options);
      if (response.ok) {
      const data: T = await response.json(); //extraction du corps de la réponse au format JSON
      return data;
      }

    } catch (error) {
      console.error("There was a problem with the fetch operation: ", error);
    }
  }
}

class CreateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url); //appel du constructeur de la classe parente
    this.options.method = "POST";
    this.options.body = JSON.stringify(data);
  }
}

class ReadClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "GET";
  }
}

class UpdateClient<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "PATCH";
    this.options.body = JSON.stringify(data);
  }
}

class UpdateClientPUT<T> extends HttpClient<T> {
  constructor(url: string, data: T) {
    super(url);
    this.options.method = "PUT";
    this.options.body = JSON.stringify(data);
  }
}

class DeleteClient<T> extends HttpClient<T> {
  constructor(url: string) {
    super(url);
    this.options.method = "DELETE";
  }
}


class DeleteClientCategory<Category> extends DeleteClient<Category> {
  constructor(url: string) {
    super(url);
  }
  protected url_ = new URL(this.url);
  protected origin = this.url_.origin;
  protected urlRestaurant = this.origin.toString() + "/restaurants";
  protected urlCategory = this.origin.toString() + "/categories";
  protected urlRestaurantCategory = this.origin.toString() + "/restaurantCategories";
  protected parts = this.url_.pathname.split('/');
  protected lastPart = this.parts[this.parts.length - 1];
  
  public async DeleteClientCategory() {
// delete category
    const deleteClientCategory = new DeleteClient<Category>(`${this.urlCategory}/${this.lastPart}`);
    await deleteClientCategory.execute();
// modify restaurant
    const readClientRestaurant = new ReadClient<Restaurant[]>(this.urlRestaurant);
    const readData = await readClientRestaurant.execute();
    if (readData){
      readData.forEach(async restaurant => {
        try{
          const test = await fetch(`${this.urlRestaurant}/${restaurant.id}`);
          if (test.ok){ 
            const updateData: Restaurant = {categoryIds: restaurant.categoryIds.filter((id) => id !== this.lastPart)};
            const updateClientRestaurant = new UpdateClient<Restaurant>(`${this.urlRestaurant}/${restaurant.id}`, updateData);
            await updateClientRestaurant.execute();
            }
          }
        catch (error) {
          console.log(`restaurant ${restaurant.id} does not exist anymore`);
        } 
      })
    };
// modify restaurantCategory
    const readClientRestaurantCategory = new ReadClient<RestaurantCategory[]>(this.urlRestaurantCategory);
    const readDataRestaurantCategory = await readClientRestaurantCategory.execute();
    console.log(readDataRestaurantCategory);
    if (readDataRestaurantCategory){
      readDataRestaurantCategory.forEach(async restaurantCategory => {
        if(restaurantCategory.categoryId === null || restaurantCategory.restaurantId === null){
          try{
            const id = restaurantCategory.id;
            const deleteClientRestaurantCategory = new DeleteClient<RestaurantCategory>(`${this.urlRestaurantCategory}/${id}`);
            await deleteClientRestaurantCategory.execute();
          }
          catch (error) {
            console.log(error.message);
          }
        }
      });
    }
}

}


class DeleteClientRestaurant<Restaurant> extends DeleteClient<Restaurant> {
  constructor(url: string) {
    super(url);
  }
  protected url_ = new URL(this.url);
  protected origin = this.url_.origin;
  protected urlRestaurant = this.origin.toString() + "/restaurants";
  protected urlCategory = this.origin.toString() + "/categories";
  protected urlRestaurantCategory = this.origin.toString() + "/restaurantCategories";
  protected parts = this.url_.pathname.split('/');
  protected lastPart = this.parts[this.parts.length - 1];
  
  public async DeleteClientRestaurant() {
// delete restaurant
    const deleteClientRestaurant = new DeleteClient<Restaurant>(`${this.urlRestaurant}/${this.lastPart}`);
    await deleteClientRestaurant.execute();
// modify category
    const readClientCategory = new ReadClient<Category[]>(this.urlCategory);
    const readData = await readClientCategory.execute();
    if (readData){
      readData.forEach(async category => {
        try{
          const test = await fetch(`${this.urlCategory}/${category.id}`);
          if (test.ok){ 
            const updateData: Category = {restaurantIds: category.restaurantIds.filter((id) => id !== this.lastPart)};
            const updateClientCategory = new UpdateClient<Category>(`${this.urlCategory}/${category.id}`, updateData);
            await updateClientCategory.execute(); 
          }
        } 
        catch (error) {
          console.log(`category ${category.id} does not exist anymore`);
        } 
      })
    };
// modify restaurantCategory
    const readClientRestaurantCategory = new ReadClient<RestaurantCategory[]>(this.urlRestaurantCategory);
    const readDataRestaurantCategory = await readClientRestaurantCategory.execute();
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
    if (readDataRestaurantCategory){
      readDataRestaurantCategory.forEach(async restaurantCategory => {
        if(restaurantCategory.restaurantId === null || restaurantCategory.categoryId === null){
          try{
            const id = restaurantCategory.id;
            const deleteClientRestaurantCategory = new DeleteClient<RestaurantCategory>(`${this.urlRestaurantCategory}/${id}`);
            await deleteClientRestaurantCategory.execute();
          }
        catch (error) {
          console.log(error.message);
        }
      }
    });
    }
  }
}




(async () => {
let url1 = "http://localhost:3000/restaurants";
const deleteClientRestaurant = new DeleteClientRestaurant<Restaurant>(`${url1}/55fa`);
console.log("delete restaurant with id 55fa")
await deleteClientRestaurant.DeleteClientRestaurant(); 


let url2 = "http://localhost:3000/categories";
const deleteClientCategory = new DeleteClientCategory<Category>(`${url2}/71b2`);
console.log("delete category with id 71b2")
await deleteClientCategory.DeleteClientCategory();
})();