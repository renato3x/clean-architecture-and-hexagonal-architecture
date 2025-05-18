import { Car } from '@/core/fundamentals/car';
import { TerminalUtils } from '../util/terminal';
import { Ferrari } from '@/core/fundamentals/ferrari';
import { Beetle } from '@/core/fundamentals/beetle';

export async function polymorphism() {
  TerminalUtils.title('Fundamentals');

  const [carType] = await TerminalUtils.select('Which type of car do you want?', [
    'Ferrari',
    'Beetle',
  ]);

  const car: Car = carType === 0 ? new Ferrari() : new Beetle();

  while (true) {
    TerminalUtils.clear();
    TerminalUtils.keyValue('Max. Speed', `${car.maxSpeed}km/h`);
    TerminalUtils.keyValue('Cur. Speed', `${car.currentSpeed}km/h`);

    const [option] = await TerminalUtils.select('What do you want to do?', ['Speed up', 'Break']);

    option === 0 ? car.speedUp() : car.break();

    const continuing = await TerminalUtils.confirm('Do you want to continue?');

    if (!continuing) {
      return;
    }
  }
}
