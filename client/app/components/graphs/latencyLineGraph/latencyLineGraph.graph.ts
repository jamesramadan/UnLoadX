import {Component, OnInit, AfterViewInit, ViewChild, Input, Output, EventEmitter} from '@angular/core';
import {nvD3} from '.././ng2-nvd3/lib/ng2-nvd3';
declare let d3: any;

@Component({
  selector: 'latencyLineGraph',
  template: `
    <h5 [style.color]="'orange'"> Latency Per Request </h5>
    <div>
      <nvd3 [options]="options" [data]="data"></nvd3>
    </div>
  `,
  directives: [nvD3],
  providers: []
})


export class latencyLineGraph implements OnInit{
  options;
  data;
  parsedData;
  @Input () requestData: any;
  @Output () dataReceived = new EventEmitter();
  constructor () {}
  @ViewChild(nvD3)
  nvD3: nvD3;
  ngOnInit(){
    this.parsedData = JSON.parse(this.requestData);
    this.options = {
      chart: {
        type: 'lineChart',
        height: 450,
        margin : {
          top: 20,
          right: 20,
          bottom: 50,
          left: 55
        },
        x: function(d){ return d.x; },
        y: function(d){ return d.y; },
        useInteractiveGuideline: true,
        dispatch: {
                stateChange: function(e){ console.log("stateChange"); },
                changeState: function(e){ console.log("changeState"); },
                tooltipShow: function(e){ console.log("tooltipShow"); },
                tooltipHide: function(e){ console.log("tooltipHide"); }
        },
        showValues: true,
        valueFormat: function(d){
          return d3.format(',.4f')(d);
        },
        duration: 500,
        xAxis: {
          axisLabel: 'Request # (across time)'
        },
        yAxis: {
          axisLabel: 'Time Latency (ms)',
          axisLabelDistance: -10
        }
      }
    }
    this.data = [
      {
        values: this.parsedData.latency.latencySet, //values - represents the array of {x,y} data points
        key: 'Latency Per Request', //key  - the name of the series.
        color: '#ff7f0e'  //color - optional: choose your own line color.
      }
    ];
  }

  ngAfterViewInit() {
      this.nvD3.chart.update()
  }

}
