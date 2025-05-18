import { terminal } from 'terminal-kit';
import { Car } from './car';

export function race(car: Car, logger: (message: string) => void) {
  Array.from({ length: 10 }).forEach(() => {
    car.speedUp();
    logger(`\nSpeed: ${car.currentSpeed}`);
  });

  Array.from({ length: 10 }).forEach(() => {
    car.break();
    logger(`\nSpeed: ${car.currentSpeed}`);
  });
}
