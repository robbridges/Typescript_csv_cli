"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
let manUnitedWins = 0;
for (let match of reader.data) {
    const wonAtHome = match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.HomeWin;
    const wonWhileAway = match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.AwayWin;
    if (wonAtHome || wonWhileAway) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
