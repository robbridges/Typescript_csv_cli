
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { matchResult } from './MatchResult';
import { WinsAnaylsis } from './Analyzers/WinsAnalysis';


const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const manUnitedWins = new WinsAnaylsis('Man United')

console.log(manUnitedWins.run(matchReader.matches));