import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
import { OrderService } from "../../../services/order.service";
import { ToastrManager } from "ng6-toastr-notifications";
import * as moment from 'moment';
import Swal from "sweetalert2";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.scss"]
})
export class OrderComponent implements OnInit {
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  orderList: Array<any> = [];
  imageUrl: string;
  acceptOrder: string;
  status: string = "pending";
  id: any;
  config: any = {
    id: "page",
    currentPage: 1,
    itemsPerPage: 25
  };
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router,
    private toastr: ToastrManager,
    private orderService: OrderService
  ) { }
  ngOnInit() {
    this.currentPage = 1;
    this.imageUrl = this.comm.imageUrl;
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id
        if (this.comm.orderStatus == 'pending') {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      }
    }
    this.acceptOrder = "acceptOrder";
    this.orderService.orderListener().subscribe(res => {
      if (res["status"] == 12) {
        this.toastr.successToastr("Order Rejected");
        if (this.comm.orderStatus == 'pending') {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      } else if (res["status"] == 1) {
        this.toastr.successToastr("Order Accepted");
        if (this.comm.orderStatus == 'pending') {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      }
    });

    this.orderService.newStoreOrder().subscribe((res:any) => {
      console.log(res, res['data'], JSON.parse(res.data), 'new order');
      if (res && res['data']) {
        const response = JSON.parse(res.data);
        if (response && response['storeId'] === this.id) {
          this.toastr.successToastr('New Store Order Received');
          if (this.router.url === '/store/order') {
            this.pendingOrder();
          }
        }
      }

    });
    this.orderService.statusCahnegListener().subscribe(res => {
      console.log(res['Id'], "statusCahnegListener")
      if (res['Id'] == this.id) {
        if (this.comm.orderStatus == 'pending') {
          this.pendingOrder();
        } else {
          this.allOrder();
        }
      }
    })
  }

  pendingOrder() {
    this.status = "pending";
    this.comm.orderStatus = this.status;
    var status = 0;
    var page = this.currentPage;
    this.api.getPendingStoreOrders(status, page, this.id).subscribe(response => {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: page,
          itemsPerPage: 25,
          totalItems: response["data"]["count"]
        }
      }
      if (!response["success"]) return;
    });
  }

  orderAccept(item) {
    this.dialogService.orderAcceptModal().subscribe(res => {
      console.log(res);
      if (res != undefined) {
        if (res["response"] == "no") {
          var data = {
            _id: item._id,
            status: 12,
            verticalType: 1,
            time: res.time
          };
          this.orderService.orderAccept(data);
        } else if (res["response"] == "yes" && res["time"] != "" && res["time"] != undefined) {
          var data = {
            _id: item._id,
            status: 1,
            verticalType: 1,
            time: res.time
          };
          this.orderService.orderAccept(data);
        }
      }
    });
  }

  // itemsList(items) {
  //   this.dialogService.itemList(items);
  // }

  viewOrder(item) {
    this.comm.orderStatus = this.status;
    this.router.navigate(['store/view-order/' + this.status + '/' + item._id])
  }

  allOrder() {
    this.status = "all";
    this.comm.orderStatus = this.status;
    var status = 1;
    var page = this.currentPage;
    this.api.getAllStoreOrders(status, page, this.id).subscribe(response => {
      if (response["response"]["success"]) {
        this.orderList = response["data"]["list"];
        console.log(this.orderList);
        for (let list of this.orderList) {
          var totalTime = moment(list['date']).add(list['preprationTime'], 'minutes');
          var currenntTime = moment();
          list.mins = currenntTime.diff(totalTime, "minutes")
        }
        this.loader = false;
        this.config = {
          id: "page",
          currentPage: page,
          itemsPerPage: 25,
          totalItems: response["data"]["count"]
        }
      }
      if (!response["success"]) return;
    });
  }

  pageChange(newPage: number) {
    this.currentPage = newPage;
    if (this.status == 'all') {
      this.allOrder();
    } else {
      this.pendingOrder();
    }
  }

  checkStatus(status: number, orderType: number) {
    if (!orderType) return 'Delivered'
    switch (status) {
      case 1:
        return 'Prepared'

      case 2:
        return 'Delivered'

      case 3:
        return 'Delivered'
    }
  }


  changeStatus(item: any) {
    let title = ''
    let btntitle = ''
    let status = 2

    switch (item.status) {
      case 1:
        title = 'Mark this order Prepared'
        btntitle = 'Prepared'
        break;
      case 2 || 3:
        title = 'Mark this order Delivered'
        btntitle = 'Delivered'
        status = 4
        break;
    }

    Swal.fire({
      title: "Are you sure?",
      text: title,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: btntitle,
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        let obj = {
          _id: item._id,
          verticalType: item.verticalType,
          orderType: item.orderType,
          status: status
        }
        this.orderService.changeStatus(obj).subscribe((res: any) => {
          return item.status = res.status
        })
      }
    })
  }

  assignDriver(item: any) {
    // console.log(item)
    Swal.fire({
      title: 'Select Driver',
      input: 'select',
      inputOptions: {
        '1': 'Tier 1',
        '2': 'Tier 2',
        '3': 'Tier 3'
      },
      inputPlaceholder: 'required',
      inputValidator: function (value) {
        return new Promise(function (resolve, reject) {
          if (value !== '') {
            resolve();
          } else {
            resolve('You need to select a Tier');
          }
        });
      },
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Assign",
      allowOutsideClick: false
    }).then(result => {

    })

  }

  orderCancel(item: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "Want to cancel this order",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes',
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        let obj = {
          _id: item._id,
          verticalType: item.verticalType,
          orderType: item.orderType,
          status: 12
        }
        this.orderService.changeStatus(obj).subscribe((res: any) => {
          return item.status = res.status
        })
      }
    })
  }
}
