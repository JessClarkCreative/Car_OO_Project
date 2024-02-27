// Define the base class 'Vehicle'
class Vehicle {
    // Constructor to initialize 'make', 'model', and 'year' properties
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    honk() {
      return "Beep.";
    }
  
    // Method to get a string representation of the vehicle
    toString() {
      return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`;
    }
  }
  
  // Define a subclass 'Car' that inherits from 'Vehicle'
  class Car extends Vehicle {
    // Constructor to initialize additional 'numWheels' property
    constructor(make, model, year) {
      // Call the parent class constructor using 'super'
      super(make, model, year);
      this.numWheels = 4;  // Set the number of wheels for cars
    }
  }
  
  // Define another subclass 'Motorcycle' that inherits from 'Vehicle'
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
      this.numWheels = 2;  // Set the number of wheels for motorcycles
    }
  
    // Additional method specific to motorcycles
    revEngine() {
      return "VROOM!!!";
    }
  }
  
  // Define a class 'Garage'
  class Garage {
    // Constructor to initialize 'vehicles' array and 'capacity'
    constructor(capacity) {
      this.vehicles = [];  // Initialize an empty array to store vehicles
      this.capacity = capacity;  // Set the maximum capacity of the garage
    }
  
    // Method to add a vehicle to the garage
    add(vehicle) {
      // Check if the provided object is an instance of 'Vehicle'
      if (!(vehicle instanceof Vehicle)) {
        return "Only vehicles are allowed in here!";  // Return a message if the input is not a vehicle
      }
  
      // Check if the garage is at capacity
      if (this.vehicles.length >= this.capacity) {
        return "Sorry, we're full.";
      }
  
      // Add the vehicle to the 'vehicles' array
      this.vehicles.push(vehicle);
      return "Vehicle added!";
    }
  }
  
  // Example usage:
  
  // Create an instance of 'Vehicle'
  let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
  console.log(myFirstVehicle.honk());
  console.log(myFirstVehicle.toString());
  
  // Create an instance of 'Car'
  let myFirstCar = new Car("Toyota", "Corolla", 2005);
  console.log(myFirstCar.toString());
  console.log(myFirstCar.honk());
  console.log(myFirstCar.numWheels); 
  
  // Create an instance of 'Motorcycle'
  let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
  console.log(myFirstMotorcycle.toString());
  console.log(myFirstMotorcycle.honk());
  console.log(myFirstMotorcycle.revEngine());
  console.log(myFirstMotorcycle.numWheels);
  
  // Create an instance of 'Garage'
  let garage = new Garage(2);
  console.log(garage.vehicles);
  console.log(garage.add(new Car("Hyundai", "Elantra", 2015))); 
  console.log(garage.vehicles);
  console.log(garage.add("Taco")); 
  console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2000)));
  console.log(garage.vehicles);
  console.log(garage.add(new Motorcycle("Honda", "Nighthawk", 2001)));
  