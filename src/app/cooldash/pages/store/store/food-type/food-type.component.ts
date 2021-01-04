import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
import { MapsAPILoader } from "@agm/core";
import { PopupService } from "../../../../services/popup/popup.service";
import Swal from "sweetalert2";
declare var google: any;

@Component({
  selector: "app-food-type",
  templateUrl: "./food-type.component.html",
  styleUrls: ["./food-type.component.scss"],
})
export class FoodTypeComponent implements OnInit {
  history = window.history;
  foodType: any;
  id: any;
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  categoryList: Array<any> = [];
  imageUrl: string;
  tokenVal;
  role: any;
  access: any;
  searchText: string = "";
  allData: any[];
  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader,
    private dialogService: PopupService
  ) {}

  ngOnInit() {
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id;
        this.getFoodType(this.id);
      }
    }
  }

  getFoodType(id) {
    this.api.getStoreTypeById(id).subscribe((res) => {
      console.log(res);
      if (res["response"]["success"]) {
        this.foodType = res["data"];
        this.allData = this.foodType;
        for (var data of this.foodType) {
          data.status = data["status"] == 1 ? true : false;
        }

        console.log(this.foodType);
        this.loader = false;
      }
    });
  }

  updateActiveStatus(item) {
    var data = {
      name: item.name,
      updateId: item._id,
      status: item.status ? 1 : 0,
      restaurantId: this.id,
    };
    this.api.editStoreFoodType(data).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getFoodType(this.id);
      }
      if (!res["response"]["success"]) return;
    });
  }

  deleteCategory(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Food Type!",
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
          name_ar: item.name_ar,
          updateId: item._id,
          storeId: this.id,
          status: 2,
        };
        this.api.editStoreFoodType(data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success",
            });
            this.getFoodType(this.id);
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }

  addFoodType(item) {
    this.dialogService.addStoreType(this.id).subscribe((res) => {
      if (res == "yes") {
        this.getFoodType(this.id);
      }
    });
  }

  onEditSelect(item) {
    this.dialogService.editStoreype(item).subscribe((res) => {
      if (res == "yes") {
        this.getFoodType(this.id);
      }
    });
  }

  searchType() {
    this.foodType = this.allData.filter(
      (row) =>
        row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1
    );
  }

  reset() {
    this.searchText = "";
    this.getFoodType(this.id);
  }
}
