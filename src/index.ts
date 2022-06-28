
import { MatchReader } from './MatchReader';

import { matchResult } from './MatchResult';

const reader = new MatchReader('football.csv');
reader.read();


let manUnitedWins = 0;

for (let match of reader.data ) {
  const wonAtHome : boolean = match[1] === 'Man United' && match[5] === matchResult.HomeWin;
  const wonWhileAway : boolean = match[2] === 'Man United' && match[5] === matchResult.AwayWin;
  if (wonAtHome || wonWhileAway) {
    manUnitedWins++;
  } 
}

console.log(`Man united won ${manUnitedWins} games`);