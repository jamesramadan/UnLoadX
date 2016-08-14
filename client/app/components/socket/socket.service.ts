import * as io from 'socket.io-client';
import { Injectable, EventEmitter, Output } from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {incomingData} from '../types/IncomingData';
import {Observer} from 'rxjs/Observer';
import {Observable} from 'rxjs/Observable';

// @Injectable()

// export default class SocketService { //removed default
//   @Output(): graphUpdate: EventEmitter <incomingData> = new EventEmitter <incomingData>();
//   private _url = 'http://localhost:3000';
//   private _socket = io.connect(this._url);
//   // private _graphData = new BehaviorSubject({"testId":0,"totalReqs":0,"latency":{"latencySet":[{"x":0,"y":0},{"x":0,"y":0}], "avg":0,"max":0,"min":0,"stdDev":0}, "status":[{"key":"200","values":[{"label":"Status Code","value":0}]}]});
//   graphData$ = this._graphData.asObservable();

//   constructor() {    
//     this._socket.on('receive-requests', (requests) => {
//       console.log('Received requests data from server', requests);
//         this.graphUpdate.emit(requests);
//     });
//   }

//   sendServers(serverPost) {
//     this._socket.emit('receive-post', serverPost);
    
//     console.log(`Emitted ${serverPost} to server socket`);
//   }

// }


@Injectable()
export default class SocketService {
  private _url = 'http://localhost:3000';
  private socket = io.connect(this._url);
  graphData$: Observable<any>;
  private _graphObserver : Observer<string>;


  constructor(){
    this.graphData$ = new Observable(observer => this._graphObserver = observer);
    this.socket = io('http://localhost:3000');
    this.socket.on('receive-requests', (data) =>{
        this._graphObserver.next(data); 
    });
  }

  getData() {
  }

    sendServers(serverPost) {
      this.socket.emit('receive-post', serverPost);
      
      console.log(`Emitted ${serverPost} to server socket`);
    }
}