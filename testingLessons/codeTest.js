class Vehicle {
  constructor(driver) {
    // @todo
    this.driver = driver;
  }
}


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

var teslaS = new Car("Charly");
console.log(teslaS);
console.log(teslaS.getSpeed());
teslaS.drive();
console.log(teslaS);
teslaS.stop();
console.log(teslaS);