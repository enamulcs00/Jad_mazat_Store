import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { CommonService } from "../../../../../services/common/common.service";
import { ApiService } from "../../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
import { Router, ActivatedRoute } from "@angular/router";
declare var google: any;
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-add-food-item",
  templateUrl: "./add-food-item.component.html",
  styleUrls: ["./add-food-item.component.scss"],
})
export class AddFoodItemComponent implements OnInit {
  restaurantForm: FormGroup;
  history = window.history;
  submitted: boolean = false;
  categoryList: any;
  selectedCat: Array<any> = [];
  categoryImage: any;
  File;
  dropDownSetting: any;
  singleDropDownSetting: any;
  id;
  categoryBody = { type: "", list: [] };
  foodType: any = [];
  restaurantDetail: any;
  geoCoder: any;
  addressLocation: any;
  itemId: any;

  constructor(
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
    private mapsAPILoader: MapsAPILoader
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params["id"];
      this.itemId = params["itemId"];
      this.getAllFoodType();
      this.getFoodItemById(this.itemId);
    });
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.restaurantForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      // name_ar: new FormControl("", Validators.compose([Validators.required])),
      description: new FormControl(
        "",
        Validators.compose([Validators.required, Validators.maxLength(250)])
      ),
      // description_ar: new FormControl(
      //   "",
      //   Validators.compose([Validators.required, Validators.maxLength(250)])
      // ),
      storeId: new FormControl("", Validators.compose([Validators.required])),
      storeItemTypeId: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      // discount: new FormControl("", Validators.compose([Validators.required])),
      storeCategoryId: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      packingTime: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      quantity: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      price: new FormControl("", [
        Validators.required,
        Validators.pattern(/^[.\d]+$/),
      ]),
    });
    this.dropDownSetting = this.comm.dropSetting;
    this.singleDropDownSetting = this.comm.singleDropSetting;
    this.getCategories();
  }

  getAllFoodType() {
    const list = [];
    this.api.getStoreTypeById(this.id).subscribe((response) => {
      if (response["response"]["success"]) {
        this.foodType = response["data"];
      }
    });
  }

  getFoodItemById(id) {
    this.api.getStoreItemById(id).subscribe((res) => {
      if (res["response"]["success"]) {
        this.restaurantDetail = res["data"];
        console.log(this.restaurantDetail);
        this.setValues(this.restaurantDetail);
      }
    });
  }

  getCategories() {
    const list = [];
    this.api.getAllStoreCategories().subscribe((response) => {
      if (response["response"]["success"]) {
        this.categoryList = response["response"]["message"];
      }
    });
  }

  async profilePic(event) {
    this.File = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.categoryImage = event.target.result;
      };
    }
  }

  setValues = (data) => {
    if (data) {
      this.restaurantForm.patchValue({
        name: data.name,
        name_ar: data.name_ar,
        description: data.description,
        description_ar: data.description_ar,
        storeItemTypeId: data.storeItemTypeId,
        // discount: data.discount,
        price: data.price,
        packingTime: data.packingTime,
        storeCategoryId: data.storeCategoryId,
        storeId: data.storeId,
      });
      if (data.image) {
        this.categoryImage = this.comm.imageUrl + data.image;
      }
    }
  };

  submit() {
    this.submitted = true;
    this.restaurantForm.controls["storeId"].setValue(this.id);
    if (this.submitted && this.restaurantForm.valid) {
      var data = this.restaurantForm.value;
      let formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("image", this.File);
      this.api.addStoreFoodItem(formData).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/store/food-item"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }

  update() {
    if (this.restaurantForm.valid) {
      var data = this.restaurantForm.value;
      data.updateId = this.itemId;
      let formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("image", this.File);
      this.api.editStoreFoodItem(formData).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/store/food-item"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
