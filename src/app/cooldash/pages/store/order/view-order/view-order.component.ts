import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";
import * as moment  from 'moment';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.scss']
})
export class ViewOrderComponent implements OnInit {
  id;
  orderDetail: any;

  history = window.history;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public comm: CommonService,
    private api: ApiService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
      this.getStoreOrderDetail(this.id);
    });
  }

  getStoreOrderDetail(id) {
    this.api.getStoreOrderDetail(id).subscribe(res => {
      if (res["response"]["success"]) {
        // if (res["data"]['deliveryDate']) res["data"]['deliveryDate'] = moment(res["data"]['deliveryDate']).format('YYYY-MM-DD hh:mm a')
        this.orderDetail = res["data"];
      }
    });
  }
}
