import fs from 'fs';
import { OutPutTarget } from "../Summary";

export class HtmlReport implements OutPutTarget {
  print(report: string): void {
    const html = `
    <head>
      <body>
        <div>
          <h1>Analysis Output </h1>
          <div>${report}</div>
        </div>
      </body>
    </head>
    `;
    fs.writeFileSync('report.html', html);
  }
  
}