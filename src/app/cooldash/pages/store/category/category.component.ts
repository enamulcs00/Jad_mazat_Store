import { Component, OnInit, ViewChild } from "@angular/core";
import { ApiService } from "../../../services/api/api.service";
import { CommonService } from "../../../services/common/common.service";
import { PopupService } from "../../../services/popup/popup.service";

// import { Categories } from "src/app/models/categories";
// import { CategorymodalComponent } from "./categorymodal/categorymodal.component";
// import { Resp } from "src/app/models/Resp";
import Swal from "sweetalert2";
declare var swal: any;

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"],
})
export class CategoryComponent implements OnInit {
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  categoryList: Array<any> = [];
  imageUrl: string;
  tokenVal;
  role: any;
  access: any;
  constructor(
    private api: ApiService,
    private comm: CommonService,
    private dialogService: PopupService
  ) {}

  ngOnInit() {
    this.imageUrl = this.comm.imageUrl;
    this.getCategories();
  }

  getCategories() {
    this.api.getAllStoreCategories().subscribe((response) => {
      console.log(response["response"]);
      if (response["response"]["success"]) {
        this.categoryList = response["response"]["message"];
        for (var data of this.categoryList) {
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
        // this.totalItems = response.count;
      }
      if (!response["success"]) return;
    });
  }

  addCategory() {
    this.dialogService.addStoreCategory().subscribe((res) => {
      if (res == "yes") {
        this.getCategories();
      }
    });
  }

  onEditSelect(item) {
    this.dialogService.editStoreCategory(item).subscribe((res) => {
      if (res == "yes") {
        this.getCategories();
      }
    });
  }

  deleteCategory(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Category!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.value) {
        var data = {
          name: item.name,
          updateId: item._id,
          status: 2,
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", item.image);
        this.api.editStoreCategory(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success",
            });
            this.getCategories();
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  updateActiveStatus(item) {
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0,
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStoreCategory(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getCategories();
      }
      if (!res["response"]["success"]) return;
    });
  }

  // pageChange(page) {
  //   this.filterBody.page = page.page - 1;
  //   this.serialNumber = this.filterBody.page * this.filterBody.limit;
  //   this.getCategories();
  // }
}
