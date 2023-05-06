class Vehicle {
  // executed right when the instance of class is created
  constructor(public color: string) {}

  protected honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle('red');
console.log(vehicle.color);

// copy all the methods from Vehicle to Car
class Car extends Vehicle {
  // overriding the drive method of the Parent class
  private drive(): void {
    console.log('vroom vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car('red');
car.startDrivingProcess();
