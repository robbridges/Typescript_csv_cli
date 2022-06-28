"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CsvFileReader_1 = require("./CsvFileReader");
const MatchResult_1 = require("./MatchResult");
const csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    const wonAtHome = match[1] === 'Man United' && match[5] === MatchResult_1.matchResult.HomeWin;
    const wonWhileAway = match[2] === 'Man United' && match[5] === MatchResult_1.matchResult.AwayWin;
    if (wonAtHome || wonWhileAway) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
