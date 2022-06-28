import { MatchData } from "../MatchData";
import { matchResult } from "../MatchResult";
import { Anaylzer } from "../Summary";

export class WinsAnaylsis implements Anaylzer {
  constructor(public teamName: string) {}

  run(matches: MatchData[]): string {
    let teamWins = 0;

    for (let match of matches ) {
      const wonAtHome : boolean = match[1] === 'Man United' && match[5] === matchResult.HomeWin;
      const wonWhileAway : boolean = match[2] === 'Man United' && match[5] === matchResult.AwayWin;
      if (wonAtHome || wonWhileAway) {
        teamWins++;
      } 
    }
    return `Team ${this.teamName} won ${teamWins} games`; 
  }
}