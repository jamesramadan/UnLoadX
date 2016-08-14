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
var io = require('socket.io-client');
var core_1 = require('@angular/core');
var Observable_1 = require('rxjs/Observable');
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
var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this._url = 'http://localhost:3000';
        this.socket = io.connect(this._url);
        this.graphData$ = new Observable_1.Observable(function (observer) { return _this._graphObserver = observer; });
        this.socket = io('http://localhost:3000');
        this.socket.on('receive-requests', function (data) {
            _this._graphObserver.next(data);
        });
    }
    SocketService.prototype.getData = function () {
    };
    SocketService.prototype.sendServers = function (serverPost) {
        this.socket.emit('receive-post', serverPost);
        console.log("Emitted " + serverPost + " to server socket");
    };
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SocketService;
//# sourceMappingURL=socket.service.js.map