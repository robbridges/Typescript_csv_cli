
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResult';


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

let manUnitedWins = 0;

for (let match of matchReader.matches ) {
  const wonAtHome : boolean = match[1] === 'Man United' && match[5] === matchResult.HomeWin;
  const wonWhileAway : boolean = match[2] === 'Man United' && match[5] === matchResult.AwayWin;
  if (wonAtHome || wonWhileAway) {
    manUnitedWins++;
  } 
}

console.log(`Man united won ${manUnitedWins} games`);