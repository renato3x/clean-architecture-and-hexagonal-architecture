import { TerminalUtils } from '../util/terminal';

export async function polymorphism() {
  TerminalUtils.title('Fundamentals');

  const carType = await TerminalUtils.select('Which type of car do you want?', [
    'Ferrari',
    'Fusca',
  ]);

  while (true) {
    TerminalUtils.clear();
    const continuing = await TerminalUtils.confirm('Do you want to continue?');

    if (!continuing) {
      return;
    }
  }
}
