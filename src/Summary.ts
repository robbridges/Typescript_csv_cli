import { MatchData } from "./MatchData";
import { WinsAnaylsis } from "./Analyzers/WinsAnalysis";
import { HtmlReport } from "./ReportTargets/HtmlReport";

export interface Anaylzer {
  run(matches: MatchData[]): string;
}

export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {

  static winsAnalysiswithHthmlReport(teamName: string): Summary {
    return new Summary(
      new WinsAnaylsis(teamName),
      new HtmlReport()
    )
  }
  
  constructor(public analyzer: Anaylzer, public outputTarget: OutPutTarget) {}

  buildAndPrintReport(matches: MatchData[]):void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output);
  }
}