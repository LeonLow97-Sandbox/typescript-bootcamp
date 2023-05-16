import fs from 'fs';
import { MatchResult } from './MatchResult';

// Abstract reusable class (Generic class with type T)
export abstract class CsvFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', // utf-8 expected in the file and telling fs.readFileSync to return a string
      })
      .split('\n') // parsing the data
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }
}
