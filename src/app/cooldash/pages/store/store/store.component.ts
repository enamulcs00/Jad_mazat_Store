import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";
import { Router } from "@angular/router";
declare var swal: any;
import Swal from "sweetalert2";
@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"]
})
export class StoreComponent implements OnInit {
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  storeList: Array<any> = [];
  imageUrl: string;
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService,
    private router: Router
  ) { }

  ngOnInit() {
    this.imageUrl = this.comm.imageUrl;
    this.getStore();
  }

  getStore() {
    this.api.getAllStore().subscribe(response => {
      console.log(response["response"]);
      if (response["response"]["success"]) {
        this.storeList = response["data"];
        for (var data of this.storeList) {
          data.isRecommended = data["isRecommended"] == 1 ? true : false;
          data.isFavourite = data["isFavourite"] == 1 ? true : false;
        }
        this.loader = false;
      }
      if (!response["success"]) return;
    });
  }

  updateFavRes(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      isFavourite: item.isFavourite ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStore(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getStore();
      }
      if (!res["response"]["success"]) return;
    });
  }

  updateRecoRes(item) {
    console.log(item);
    var data = {
      name: item.name,
      updateId: item._id,
      isRecommended: item.isRecommended ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStore(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getStore();
      }
      if (!res["response"]["success"]) return;
    });
  }

  addRestaurant() {
    this.router.navigate(["/store/add"]);
  }

  onViewItem(item) {
    this.router.navigate(["/store/view", item._id]);
  }

  onEditSelect(item) {
    this.router.navigate(["/store/edit", item._id]);
  }

  deleteStore(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Store!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",

      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          name: item.name,
          updateId: item._id,
          status: 2
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", item.image);
        this.api.editStore(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getStore();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  getOutlet(item) {
    console.log(item)
    this.router.navigate(["/store/outlet", item._id]);
  }

  getFoodType(item) {
    this.router.navigate(["/store/food-type", item._id]);
  }

  getFoodItem(item) {
    this.router.navigate(["/store/food-item", item._id]);
  }
}
