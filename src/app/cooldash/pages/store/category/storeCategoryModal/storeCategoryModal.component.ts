import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";
import { CommonService } from "../../../../services/common/common.service";
import { ApiService } from "../../../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";

declare var $: any;
@Component({
  selector: "app-storeCategoryModal",
  templateUrl: "./storeCategoryModal.component.html",
  styleUrls: ["./storeCategoryModal.component.scss"]
})
export class StoreCategoryModalComponent implements OnInit {
  categoryForm: FormGroup;
  categoryImage: any;
  File;
  submitted: boolean = false;
  item: any;

  constructor(
    private dialog: MatDialogRef<StoreCategoryModalComponent>,
    private formBuilder: FormBuilder,
    public comm: CommonService,
    public api: ApiService,
    public toastr: ToastrManager
  ) { }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      name: new FormControl("", Validators.compose([Validators.required]))
    });
    if (this.item) {
      console.log(this.item);
      this.setValues();
    }
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

  setValues = () => {
    if (this.item) {
      this.categoryForm.patchValue({
        name: this.item.name
      });
      if (this.item.image) {
        this.categoryImage = this.comm.imageUrl + this.item.image;
      }
    }
  };

  onSubmit() {
    this.submitted = true;
    if (this.File) {
      if (this.categoryForm.valid && this.submitted) {
        var data = {
          name: this.categoryForm.controls["name"].value
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        formData.append("image", this.File);
        this.api.addStoreCategory(formData).subscribe(res => {
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

  public errorHandling = (control: string, error: string) => {
    return this.categoryForm.controls[control].hasError(error);
  };

  close() {
    this.dialog.close();
  }

  onUpdate() {
    this.submitted = true;
    if (this.File || this.item.image) {
      if (this.categoryForm.valid && this.submitted) {
        var data = {
          name: this.categoryForm.controls["name"].value,
          updateId: this.item._id
        };
        let formData = new FormData();
        formData.append("data", JSON.stringify(data));
        if (this.File) {
          formData.append("image", this.File);
        } else {
          formData.append("image", this.item.image);
        }
        this.api.editStoreCategory(formData).subscribe(res => {
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
}
