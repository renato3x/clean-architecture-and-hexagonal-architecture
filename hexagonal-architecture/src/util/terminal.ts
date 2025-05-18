import { terminal } from 'terminal-kit';

export class TerminalUtils {
  static title(title: string) {
    terminal.clear();
    terminal.magenta(title + '\n');
    terminal.magenta('-'.repeat(title.length) + '\n');
  }
}
