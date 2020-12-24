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
  restaurantId;

  constructor(
    private dialog: MatDialogRef<StoreTypeModalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager
  ) {}

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required])),
      name_ar: new FormControl("", Validators.compose([Validators.required])),
    });
    if (this.item) {
      this.setValues();
    }
  }

  setValues = () => {
    if (this.item) {
      this.categoryForm.patchValue({
        name: this.item.name,
        name_ar: this.item.name_ar,
      });
    }
  };

  onSubmit() {
    this.submitted = true;
    if (this.categoryForm.valid && this.submitted) {
      var data = {
        name: this.categoryForm.controls["name"].value,
        name_ar: this.categoryForm.controls["name_ar"].value,
        storeId: this.restaurantId,
      };
      this.api.addStoreFoodType(data).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.dialog.close("yes");
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
          this.dialog.close("no");
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
        name_ar: this.categoryForm.controls["name_ar"].value,
        updateId: this.item._id,
        storeId: this.item.storeId,
      };
      this.api.editStoreFoodType(data).subscribe((res) => {
        if (res["response"]["success"]) {
          this.toastr.successToastr(res["response"]["message"]);
          this.dialog.close("yes");
        } else {
          this.toastr.errorToastr(res["response"]["message"]);
          this.dialog.close("no");
        }
      });
    }
  }
}
