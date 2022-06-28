import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { WinsAnaylsis } from './Analyzers/WinsAnalysis';
import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { HtmlReport } from './ReportTargets/HtmlReport';
import { Summary } from './Summary';


const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load();
const summary = Summary.winsAnalysiswithHthmlReport('Man United')

summary.buildAndPrintReport(matchReader.matches);

