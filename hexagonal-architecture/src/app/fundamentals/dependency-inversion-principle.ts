import { race } from '@/core/fundamentals/race';
import { TerminalUtils } from '../util/terminal';
import { Ferrari } from '@/core/fundamentals/ferrari';
import { Beetle } from '@/core/fundamentals/beetle';
import { Car } from '@/core/fundamentals/car';
import { terminal } from 'terminal-kit';

export async function dependencyInversionPrinciple() {
  TerminalUtils.title('Dependency Inversion Principle');
  const [carType] = await TerminalUtils.select('Which type of car do you want?', [
    'Ferrari',
    'Beetle',
  ]);
  
  let car: Car;

  switch (carType) {
    case 0:
      car = new Ferrari();
      break;
    default:
      car = new Beetle();
  }

  race(car, terminal.red);
  await TerminalUtils.waitForEnter();
}
