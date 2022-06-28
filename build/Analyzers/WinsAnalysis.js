"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnaylsis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnaylsis {
    constructor(teamName) {
        this.teamName = teamName;
    }
    run(matches) {
        let teamWins = 0;
        for (let match of matches) {
            const wonAtHome = match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.HomeWin;
            const wonWhileAway = match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.AwayWin;
            if (wonAtHome || wonWhileAway) {
                teamWins++;
            }
        }
        return `Team ${this.teamName} won ${teamWins} games`;
    }
}
exports.WinsAnaylsis = WinsAnaylsis;
