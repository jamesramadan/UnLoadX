"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var successBarChart_graph_1 = require('./successBarChart/successBarChart.graph');
var Graphs = (function () {
    function Graphs() {
    }
    Graphs = __decorate([
        core_1.Component({
            selector: 'graphs',
            directives: [successBarChart_graph_1.successBarChart],
            template: "\n    <div>\n      <successBarChart></successBarChart>\n    </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Graphs);
    return Graphs;
}());
exports.Graphs = Graphs;
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
//# sourceMappingURL=graphs.component.js.map