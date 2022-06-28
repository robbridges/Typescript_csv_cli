"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinsAnalysis_1 = require("./Analyzers/WinsAnalysis");
const HtmlReport_1 = require("./ReportTargets/HtmlReport");
class Summary {
    constructor(analyzer, outputTarget) {
        this.analyzer = analyzer;
        this.outputTarget = outputTarget;
    }
    static winsAnalysiswithHthmlReport(teamName) {
        return new Summary(new WinsAnalysis_1.WinsAnaylsis(teamName), new HtmlReport_1.HtmlReport());
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}
exports.Summary = Summary;
