interface IVehicle {
  drive():void;
}

abstract class Vehicle implements IVehicle {
  private speed: number;
  abstract honk(): void;
  drive():void{
    console.log(`Driving at ${this.speed} km/h$`)
  }
  constructor(speed:number){
    this.speed = speed;
  }
}

class Car extends Vehicle {
  honk():void{
    console.log("Beep beep!")
  }
  constructor(speed:number){
    super(speed);
  }
}

class Bicycle extends Vehicle {
  honk():void{
    console.log("Ring ring")
  }
  constructor(speed:number){
    super(speed);
  }
}

let Car1:Car = new Car(90);
let Car2:Car = new Car(120);
let Bicycle1:Bicycle = new Bicycle(20);
let Bicycle2:Bicycle = new Bicycle(30);
let Bicycle3:Bicycle = new Bicycle(40);
// on utilise plutôt l'interface que la classe abstraite pour déclarer le type des éléments du tableau
let vehicles:IVehicle[] = [Car1,Car2,Bicycle1,Bicycle2,Bicycle3];
for (let vehicle of vehicles as Vehicle[]){
  vehicle.drive();
  vehicle.honk();
}