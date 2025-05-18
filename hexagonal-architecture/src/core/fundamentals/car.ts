export interface Car {
  readonly maxSpeed: number;
  currentSpeed: number;
  speedUp(): void;
  break(): void;
}
