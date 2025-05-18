import { Car } from './car';

export class Beetle implements Car {
  constructor(
    readonly maxSpeed: number = 140,
    private _currentSpeed: number = 0,
  ) {}

  get currentSpeed() {
    return this._currentSpeed;
  }

  speedUp(): void {
    this._currentSpeed = Math.min(
      this._currentSpeed + 5,
      this.maxSpeed,
    );
  }

  break(): void {
    this._currentSpeed = Math.max(
      this._currentSpeed - 5,
      0
    );
  }
}
