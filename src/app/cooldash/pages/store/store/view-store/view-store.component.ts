import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { ApiService } from "../../../../services/api/api.service";
import { CommonService } from "../../../../services/common/common.service";

@Component({
  selector: "app-view-store",
  templateUrl: "./view-store.component.html",
  styleUrls: ["./view-store.component.scss"]
})
export class ViewStoreComponent implements OnInit {
  id;
  storeDetail: any;

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
      this.getStoreById(this.id);
    });
  }

  getStoreById(id) {
    this.api.getStoreById(id).subscribe(res => {
      if (res["response"]["success"]) {
        console.log(res);
        this.storeDetail = res["data"];
        console.log(this.storeDetail);
      }
    });
  }
}
