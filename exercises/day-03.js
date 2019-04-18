// FUNCTIONS AS CONSTRUCTORS

// Create a function called `Vehicle` that accepts
// a driver as an argument and assign the driver
// to the context and execute it as a constructor
function Vehicle(driver) {
  // @todo
  this.driver = driver;
}

var vehicle = new Vehicle ("Charly"); /* = @TODO */

// Create a function called `Car` that accepts a driver,
// calls the function `Vehicle` with `call` and pass the
// driver and assign the speed in the context to 0
function Car(driver) {
  // @TODO
  Vehicle.call(this, driver);
  this.speed = 0;
}

var teslaS = new Car("Charly"); /* = @TODO */

// Add a function called `drive`, `stop` and `speed` to
// the `Car` prototype. Every time you call the
// `drive` "method" it sets the `speed` to `50`,
// every time you call the "method" `stop` it sets the
// speed to `0` and finally every time you call the
// "method" `getSpeed` it returns the speed
Car.prototype.stop = function() {
  // @TODO
  this.speed = 0;
};

Car.prototype.drive = function() {
  // @TODO
  this.speed =50;
};

Car.prototype.getSpeed = function() {
  // @TODO
  return this.speed;
};


console.log(teslaS);
console.log(teslaS.getSpeed());
teslaS.drive();
console.log(teslaS);
teslaS.stop();
console.log(teslaS);
// CLASSES

// Create a class called `Vehicle` that accepts
// a driver as an argument on the constructor
//  and assign the driver to the context
class Vehicle {
  constructor(driver) {
    // @todo
    this.driver = driver;
  }
}

var vehicle; /* = @TODO */

// Create a class called `Car` that accepts a driver,
// extends the `Vehicle` class and passes the driver
// to the `Car` constructor driver and assign the
// speed in the context to 0
class Car /* @TODO */ extends Vehicle{
  constructor(driver) {
    // @TODO
    super(driver);
    this.speed = 0;
  }
}

var teslaS = new Car("Charly"); /* = @TODO */

// Add the methods `drive`, `stop` and `getSpeed` to
// the `Car` class. Every time you call the
// `drive` "method" it sets the `speed` to `50`,
// every time you call the "method" `stop` it sets the
// speed to `0` and finally every time you call the
// "method" `getSpeed` it returns the speed
class Car /* @TODO */ extends Vehicle{
  // the rest of the code
  constructor(driver){
    super(driver);
    this.speed = 0;
  }

  drive() {
    // @TODO
    this.speed = 50;
  }

  stop() {
    // @TODO
    this.speed = 0;
  }

  getSpeed() {
    // @TODO
    return this.speed;
  }
}

//
// SET PROTOTYPE OF
//

// Replicate all the previous examples using
// plain objects and `Object.setPrototypeOf`

//
// OBJECT CREATE
//

// Replicate all the previous examples using
// plain objects and `Object.create`

//
// MIXINS
//

// Replicate all the previous examples using
// plain objects and mixins

//
// FUNCTIONAL MIXINS
//

// Replicate all the previous examples using
// plain objects and functional mixins
