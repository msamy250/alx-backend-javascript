export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  get brand() {
    return this._brand;
  }

  set brand(brand) {
    this._brand = brand;
  }

  get motor() {
    return this._motor;
  }

  set motor(motor) {
    this._motor = motor;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  static get [Symbol.species]() {
    return this.prototype.constructor;
  }

  cloneCar() {
    return new (this.constructor[Symbol.species])();
  }

  // cloneCar() {
  //   return new Car(this._brand, this._motor, this._color);
  // }
}
