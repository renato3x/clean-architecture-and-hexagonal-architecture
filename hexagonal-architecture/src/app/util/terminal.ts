import { terminal } from 'terminal-kit';

export class TerminalUtils {
  static title(title: string) {
    terminal.clear();
    terminal.magenta(`${title}\n`);
    terminal.magenta(`${'-'.repeat(title.length)}\n`);
  }

  static clear() {
    terminal.clear();
  }

  static async confirm(message: string) {
    terminal.yellow(`\n${message}`);
    const response = await terminal.singleLineMenu(['Yes', 'No']).promise;
    return response.selectedIndex === 0;
  }

  static async menu(options: string[]): Promise<[number, string]> {
    const response = await terminal.singleColumnMenu(options).promise;
    return [response.selectedIndex, response.selectedText];
  }

  static async select(message: string, options: string[]): Promise<[number, string]> {
    terminal.yellow(`\n${message}`);
    const response = await terminal.singleLineMenu(options).promise;
    return [response.selectedIndex, response.selectedText];
  }

  static keyValue(key: string, value: string) {
    terminal.blue(`${key}: `).green(value).white('\n');
  }
}
