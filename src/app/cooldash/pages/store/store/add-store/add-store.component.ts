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
declare var google: any;
import { MapsAPILoader } from "@agm/core";

@Component({
  selector: "app-add-store",
  templateUrl: "./add-store.component.html",
  styleUrls: ["./add-store.component.scss"]
})
export class AddStoreComponent implements OnInit {
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
  restaurantDetail: any;
  geoCoder: any;
  outlet: any;
  addressLocation: any;

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
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id
        this.getRestaurantById(this.id);
      }
    }
    this.mapsAPILoader.load().then(() => {
      this.geoCoder = new google.maps.Geocoder();
    });
    this.restaurantForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required, Validators.maxLength(16)])),
      // description: new FormControl(
      //   "",
      //   Validators.compose([Validators.required, Validators.maxLength(250)])
      // ),
      discount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      categories: new FormControl(
        "",
        Validators.compose([Validators.required])
      ),
      // minOrderAmount: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      avgOrderPrice: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      discountUpto: new FormControl("", [Validators.required, Validators.pattern(/^[.\d]+$/)]),
      outlet: new FormControl(""),
      email: new FormControl("", [Validators.required, Validators.pattern(
        "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$"
      )]),
      password: new FormControl(""),
      isRecommended: new FormControl(""),
      status: new FormControl("")
      // openTime: new FormControl("", Validators.compose([Validators.required])),
      // closeTime: new FormControl(
      //   "",
      //   Validators.compose([Validators.required])
      // )
    });
    this.dropDownSetting = this.comm.dropSetting;
    this.singleDropDownSetting = this.comm.singleDropSetting;
    this.getCategories();
  }

  getRestaurantById(id) {
    this.api.getStoreById(id).subscribe(res => {
      if (res["response"]["success"]) {
        this.restaurantDetail = res["data"];
        this.setValues(this.restaurantDetail);
      }
    });
  }

  getCategories() {
    const list = [];
    this.api.getAllStoreCategories().subscribe(response => {
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

  setValues = data => {
    if (data) {
      console.log(data.detail)
      this.restaurantForm.patchValue({
        name: data.detail.name,
        // description: data.detail.description,
        discount: data.detail.discount,
        // minOrderAmount: data.detail.minOrderAmount,
        avgOrderPrice: data.detail.avgOrderPrice,
        discountUpto: data.detail.discountUpto,
        categories: data.detail.categories,
        email: data.detail.email,
        isRecommended: data.detail.isRecommended ? 1 : 0,
        status: data.detail.status ? 1 : 0
      });
      // this.restaurantForm.controls['openTime'].setValue(new Date(data.detail.openTime
      // ));
      // this.restaurantForm.controls['closeTime'].setValue(new Date(data.detail.closeTime));
      if (data.detail.image) {
        this.categoryImage = this.comm.imageUrl + data.detail.image;
      }
    }
  };

  getAddress(lat, long) {
    this.geoCoder.geocode(
      { location: { lat: lat, lng: long } },
      (results, status) => {
        this.addressLocation = results[0].formatted_address;
        this.outlet = {
          address: this.addressLocation,
          latitude: lat,
          longitude: long
        };
      }
    );
  }

  handleAddress(address) {
    if (address.formatted_address) {
      this.outlet = {
        address: address.formatted_address,
        latitude: address.geometry.location.lat(),
        longitude: address.geometry.location.lng()
      };
      this.restaurantForm.controls["outlet"].setValue(
        address.formatted_address
      );
    }
  }

  update() {
    this.submitted = true;
    this.restaurantForm['controls']['isRecommended'].setValue(this.restaurantForm['controls']['isRecommended'].value ? 1 : 0)
    this.restaurantForm['controls']['status'].setValue(this.restaurantForm['controls']['status'].value ? 1 : 0)
    if (this.restaurantForm.valid) {
      var data = this.restaurantForm.value;
      data.updateId = this.id;
      let formData = new FormData();
      formData.append("data", JSON.stringify(data));
      formData.append("image", this.File);
      this.api.editStore(formData).subscribe(res => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.router.navigate(["/dashboard"]);
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
