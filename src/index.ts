
import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnaylsis } from './Analyzers/WinsAnalysis';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { Summary } from './Summary';
import { Console } from 'console';

const csvFileReader = new CsvFileReader('football.csv');
const matchReader = new MatchReader(csvFileReader);
matchReader.load();
const summary = new Summary(
  new WinsAnaylsis('Man United'),
  new ConsoleReport()
);

summary.buildAndPrintReport(matchReader.matches);

