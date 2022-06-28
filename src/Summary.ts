import { MatchData } from "./MatchData";

export interface Anaylzer {
  run(matches: MatchData[]): string;
}

export interface OutPutTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Anaylzer, public outputTarget: OutPutTarget) {}

  buildAndPrintReport(matches: MatchData[]):void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output);
  }
}