// Constructor function for Car
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Method to get make and model of the car
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
}

// Constructor function for SportsCar inheriting from Car
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor with make and model
    this.topSpeed = topSpeed;
}

// Inherit Car prototype methods
SportsCar.prototype = Object.create(Car.prototype);

// Add method to get top speed of sports car
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
}

// Assigning constructors to window object
window.Car = Car;
window.SportsCar = SportsCar;
