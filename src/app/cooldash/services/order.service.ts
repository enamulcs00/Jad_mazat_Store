import { Injectable } from "@angular/core";
import io from "socket.io-client";
import { CommonService } from "./common/common.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  socket;

  constructor(private comm: CommonService) {
    this.socket = io(comm.imageUrl, {
      reconnection: true,
      reconnectionDelay: 30000,
      reconnectionDelayMax : 60000,
      reconnectionAttempts: Infinity
    });

  }

  orderAccept(order) {
    this.socket.emit("acceptOrder", order);
  }

  changeStatus(order) {
    this.socket.emit("adminChangeStatus", order);
    this.socket.removeListener('adminChangeStatus');
    return Observable.create((observer) => {
      this.socket.on('adminChangeStatus', (message) => {
        observer.next(message);
      })
    });
  }

  orderListener() {
    return Observable.create(observer => {
      this.socket.removeListener('acceptOrder');
      this.socket.on("acceptOrder", message => {
        observer.next(message);
      });
    });
  }

  statusCahnegListener(){
    return Observable.create(observer => {
      this.socket.removeListener('adminCheckChange');
      this.socket.on("adminCheckChange", message => {
        observer.next(message);
      });
    });
  }
  
  newStoreOrder() {
    return Observable.create(observer => {
      this.socket.removeListener('storeOrder');
      this.socket.on("storeOrder", message => {
        observer.next(message);
      });
    });
  }
}
