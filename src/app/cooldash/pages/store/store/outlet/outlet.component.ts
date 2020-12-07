import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
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
  selector: "app-outlet",
  templateUrl: "./outlet.component.html",
  styleUrls: ["./outlet.component.scss"]
})
export class OutletComponent implements OnInit {
  outlet: any;
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
  history = window.history;

  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader, private dialogService: PopupService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id
        this.getOutlettById(this.id);
      }
    }
  }

  getOutlettById(id) {
    this.api.getStoreOutletById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.outlet = res["data"];
        console.log(this.outlet);
        this.loader = false;
      }
    });
  }

  addOutlet(item) {
    this.dialogService.addStoreOutlet(this.id).subscribe(res => {
      if (res == "yes") {
        this.getOutlettById(this.id);
      }
    });
  }

  onEditSelect(item) {
    this.dialogService.editStoreOutlet(item).subscribe(res => {
      if (res == "yes") {
        this.getOutlettById(this.id);
      }
    });
  }

  deleteOutlet(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Outlet!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085D6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      allowOutsideClick: false
    }).then(result => {
      if (result.value) {
        var data = {
          address: item.address,
          latitude: item.latitude,
          longitude: item.longitude,
          updateId: item._id,
          restaurantId: item.restaurantId,
          status: 2
        };
        this.api.editStoreOutlet(data).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getOutlettById(this.id);
          }
          if (!res["response"]["success"]) return;
        });
      }
    });
  }
}
