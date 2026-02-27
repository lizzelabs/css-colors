/* eslint-disable @typescript-eslint/no-explicit-any */

export class Logs {
  static line(): string {
    return '\n::: >>> ';
  }

  static obj(force: boolean, ...obj: any): void {
    if (import.meta.env.DEV || force) {
      if (obj.lenght > 0) {
        console.dir(obj);
      }
    }
  }

  static info(componentName: string, message: string, force: boolean): void {
    const messageLines = message
      .split('\n')
      .map((row) => `${Logs.line()}${row}`.padEnd(200, ' '));
    const messages = [
      `ℹ️ ${Logs.line()}[${componentName}]`.padEnd(200),
      ...messageLines,
      `${Logs.line()}at: ${Logs.getDate()}`.padEnd(200),
    ].join('');

    if (import.meta.env.DEV || force) {
      console.log(
        `%c ${messages}`,
        `font-size: 13px; font-weight: bold; color: #222; background: lightblue; padding: 2px 6px;`,
      );
    }
  }

  static warn(componentName: string, message: string, force: boolean): void {
    const messageLines = message
      .split('\n')
      .map((row) => `${Logs.line()}${row}`.padEnd(200, ' '));
    const messages = [
      `⚠️ ${Logs.line()}[${componentName}]`.padEnd(200),
      ...messageLines,
      `${Logs.line()}at: ${Logs.getDate()}`.padEnd(200),
    ].join('');

    if (import.meta.env.DEV || force) {
      console.log(
        `%c ${messages}`,
        `font-size: 13px; font-weight: bold; color: #222; background: darkyellow; padding: 2px 6px;`,
      );
    }
  }

  static error(componentName: string, message: string, force: boolean): void {
    const messageLines = message
      .split('\n')
      .map((row) => `${Logs.line()}${row}`.padEnd(200, ' '));
    const messages = [
      `‼️ ${Logs.line()}[${componentName}]`.padEnd(200),
      ...messageLines,
      `${Logs.line()}at: ${Logs.getDate()}`.padEnd(200),
    ].join('');

    if (import.meta.env.DEV || force) {
      console.log(
        `%c ${messages}`,
        `font-family: monospace; font-size: 13px; font-weight: bold; color: #222; background: lightred; padding: 2px 6px;`,
      );
    }
  }

  static custom(
    componentName: string,
    message: string,
    force: boolean,
    background: string = '#CCC',
    color: string = '#333',
  ): void {
    const messageLines = message
      .split('\n')
      .map((row) => `${Logs.line()}${row}`.padEnd(200, ' '));
    const messages = [
      `${Logs.line()}[${componentName}]`.padEnd(200),
      ...messageLines,
      `${Logs.line()}at: ${Logs.getDate()}`.padEnd(200),
    ].join('');

    if (import.meta.env.DEV || force) {
      console.log(
        `%c${messages}`,
        `font-family: monospace; width: 100%; font-size: 13px; font-weight: bold; color: ${color}; background: ${background}; padding: 2px 0`,
      );
    }
  }

  static getDate() {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, '0');
    const MM = String(date.getMonth() + 1).padStart(2, '0');
    const HH = String(date.getHours()).padStart(2, '0');
    const mm = String(date.getMinutes()).padStart(2, '0');

    return `${dd}/${MM} ${HH}:${mm}`;
  }
}
