//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends Vehicle {
    constructor(make, model, year, color, mileage){
        super (make, model, year, color, mileage);
            this.Wheels = 4
            this.maxPassenger <= 10
            this.Passenger = 0
            this.speed = 0

        }
    }
}


let A28 = new Car("Mercury", "Sedan", "1965", "blue", "200000");
let A28MaxPassengers = 6
let A28MaxSpeed = 200
let A28Fuel = 100
let A28Service = false
console.log(A28)

