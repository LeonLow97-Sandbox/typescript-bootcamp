import fs from 'fs';

// Load and Parse
const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8', // utf-8 expected in the file and telling fs.readFileSync to return a string
  })
  .split('\n') // parsing the data
  .map((row: string): string[] => {
    return row.split(',');
  });

// enum - enumeration (signal to other engineers that these are closely related values)
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D',
}

let manUnitedWins = 0;

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games.`);
