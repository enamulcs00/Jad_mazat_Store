import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
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

declare var $: any;
@Component({
  selector: "app-store-type-modal",
  templateUrl: "./store-type-modal.component.html",
  styleUrls: ["./store-type-modal.component.scss"],
})
export class StoreTypeModalComponent implements OnInit {
  categoryForm: FormGroup;
  categoryImage: any;
  File;
  submitted: boolean = false;
  item: any;
  restaurantId:any;
  typeID: any;

  constructor(
    private dialog: MatDialogRef<StoreTypeModalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:any) => {
      this.restaurantId = params.id;
      this.typeID = params.itemId;
    });
    this.categoryForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      name_ar: new FormControl("notUseAble"),
    });
    if (this.typeID) {
      this.setValues();
    }
  }

  back(){
    history.back();
  }

  setValues = () => {
    // if (this.item) {
    //   this.categoryForm.patchValue({
    //     name: this.item.name,
    //   });
    // }
    
    this.api.getStoreTypeById(this.restaurantId).subscribe((res:any) => {
      if (res["response"]["success"]) {
        this.item = res.data.find(element => (element._id==this.typeID));
        if (this.item) {
          this.categoryForm.patchValue({
            name: this.item.name,
          });
        }
      }
    });
  
  };

  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.valid && this.submitted) {
      var data = {
        name: this.categoryForm.controls["name"].value,
        name_ar: "notInUse",
        storeId: this.restaurantId,
      };
      // console.log("Data",data);
      this.api.addStoreFoodType(data).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          history.back();
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
          
        }
      });
    }
  }

  public errorHandling = (control: string, error: string) => {
    return this.categoryForm.controls[control].hasError(error);
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.categoryForm.valid && this.submitted) {
      var data = {
        name: this.categoryForm.controls["name"].value,
        name_ar: "notInUse",
        updateId: this.typeID,
        storeId: this.restaurantId,
      };
      this.api.editStoreFoodType(data).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          history.back();
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
        }
      });
    }
  }
}
