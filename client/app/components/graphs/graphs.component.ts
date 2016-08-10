import {Component} from '@angular/core';
import { successBarChart} from './successBarChart/successBarChart.graph';
import { latencyLineGraph } from './latencyLineGraph/latencyLineGraph.graph';
import { descriptiveInfo } from './descriptiveInfo/descriptiveInfo.info';
import { networkGraph } from './networkGraph/networkGraph.graph';
import { GraphsService } from './graphsService/graphs.service';
import { HTTP_PROVIDERS } from '@angular/http';


 
@Component({
  selector: 'graphs',
  template: `
    <div>
      <networkGraph></networkGraph>
      <descriptiveInfo></descriptiveInfo>
      <successBarChart></successBarChart>
      <latencyLineGraph></latencyLineGraph>
    </div>
  `,
  directives: [successBarChart, latencyLineGraph, descriptiveInfo, networkGraph],
  providers: [GraphsService, HTTP_PROVIDERS]
})
 
export class Graphs {

  constructor(private _GraphsService: GraphsService) { }

  getTestSummaryData() { 
    this._GraphsService.getTestSummaryInfo();
   
  }
  
}


// var summaryData = {
//     latency: [0, 1, 2, 4, 1], 
//     averageLat: 2, 
//     minLat: 0, 
//     maxLat: 2, 
//     latStdDev: .2,
//     numSuccess: 100, 
//     numFailures: 0, 
//     totalReqs: 100
// };

//graph to visualize load balancer to server interactions somehow..
//bar chart for success//failures
//summary latency stats at top.
//line chart to view all latencies

