import { Component, OnInit } from "@angular/core";

import { UrlService } from "../../services/url/url.service";
import { ApiService } from "../../services/api/api.service";
// import { Resp } from "src/app/models/Resp";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  tokenVal;
  DashboarddData;
  storeDetail: any;
  id: any;
  constructor(private router: Router,
    private route: ActivatedRoute, private api: ApiService, private url: UrlService) { }

  ngOnInit() {
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id
        this.getStoreById(this.id);
      }
    }
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
