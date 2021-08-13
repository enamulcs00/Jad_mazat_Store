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
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.scss']
})
export class FoodItemComponent implements OnInit {

  foodItem: any;
  id: any;
  totalItems: number;
  currentPage = 1;
  serialNumber = 0;
  loader: boolean = true;
  categoryList: Array<any> = [];
  imageUrl: string;
  tokenVal;
  role: any;
  searchText: string = '';
  access: any;
  allData: any[];
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
    this.imageUrl = this.comm.imageUrl;
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id
        this.getFoodItem(this.id);
      }
    }
  }

  getFoodItem(id) {
    
    this.api.getStoreItemeById(id).subscribe(res => {
      console.log(res);
      if (res["response"]["success"]) {
        this.foodItem = res["data"];
       
        this.allData = this.foodItem;
        for (var data of this.foodItem) {
          data.status = data["status"] == 1 ? true : false;
        }
        this.loader = false;
      }
    });
  }

  addCategory() {
    this.router.navigate(['store/add-food-item', this.id]);
  }

  onEditSelect(item) {
    this.router.navigate(['store/edit-food-item', this.id, item._id]);
  }

  deleteCategory(item) {
    Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this Food Item!",
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
        this.api.editStoreFoodItem(formData).subscribe((res: any) => {
          if (res["response"]["success"]) {
            Swal.fire({
              title: "Deleted!",
              text: res["response"]["message"],
              icon: "success"
            });
            this.getFoodItem(this.id);
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
      status: item.status ? 1 : 0
    };
    let formData = new FormData();
    formData.append("data", JSON.stringify(data));
    this.api.editStoreFoodItem(formData).subscribe((res: any) => {
      if (res["response"]["success"]) {
        this.getFoodItem(this.id);
      }
      if (!res["response"]["success"]) return;
    });
  }

  searchItem() {
    this.foodItem = this.allData.filter(
      row => row.name.toLowerCase().indexOf(this.searchText.toLowerCase()) > -1)
  }

  reset() {
    this.searchText = ''
    this.getFoodItem(this.id);
  }
}
