"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CsvFileReader_1 = require("./CsvFileReader");
const reader = new CsvFileReader_1.CsvFileReader('football.csv');
reader.read();
var matchResult;
(function (matchResult) {
    matchResult["HomeWin"] = "H";
    matchResult["AwayWin"] = "A";
    matchResult["Draw"] = "D";
})(matchResult || (matchResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    const wonAtHome = match[1] === 'Man United' && match[5] === matchResult.HomeWin;
    const wonWhileAway = match[2] === 'Man United' && match[5] === matchResult.AwayWin;
    if (wonAtHome || wonWhileAway) {
        manUnitedWins++;
    }
}
console.log(`Man united won ${manUnitedWins} games`);
