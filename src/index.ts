
import { CsvFileReader } from './CsvFileReader';

const reader = new CsvFileReader('football.csv');
reader.read();
enum matchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

let manUnitedWins = 0;

for (let match of reader.data ) {
  const wonAtHome : boolean = match[1] === 'Man United' && match[5] === matchResult.HomeWin;
  const wonWhileAway : boolean = match[2] === 'Man United' && match[5] === matchResult.AwayWin;
  if (wonAtHome || wonWhileAway) {
    manUnitedWins++;
  } 
}

console.log(`Man united won ${manUnitedWins} games`);