import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: 'utf-8', // utf-8 expected in the file and telling fs.readFileSync to return a string
      })
      .split('\n') // parsing the data
      .map((row: string): string[] => {
        return row.split(',');
      })

  }
}
