class Vehicle {
    drive() {
        console.log(`Driving at ${this.speed} km/h$`);
    }
    constructor(speed) {
        this.speed = speed;
    }
}
class Car extends Vehicle {
    honk() {
        console.log("Beep beep!");
    }
    constructor(speed) {
        super(speed);
    }
}
class Bicycle extends Vehicle {
    honk() {
        console.log("Ring ring");
    }
    constructor(speed) {
        super(speed);
    }
}
let Car1 = new Car(90);
let Car2 = new Car(120);
let Bicycle1 = new Bicycle(20);
let Bicycle2 = new Bicycle(30);
let Bicycle3 = new Bicycle(40);
// on utilise plutôt l'interface que la classe abstraite pour déclarer le type des éléments du tableau
let vehicles = [Car1, Car2, Bicycle1, Bicycle2, Bicycle3];
for (let vehicle of vehicles) {
    vehicle.drive();
    vehicle.honk();
}
//# sourceMappingURL=app.js.map