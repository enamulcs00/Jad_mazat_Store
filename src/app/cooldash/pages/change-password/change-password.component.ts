import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { ApiService } from "../../services/api/api.service";
import { ToastrManager } from "ng6-toastr-notifications";
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
  resetPasswordForm: FormGroup;
  confirmPassword;
  submitted: boolean = false;
  id: any;
  history = window.history;
  constructor(public api: ApiService,
    public toastr: ToastrManager, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    if (localStorage.getItem("storeLogin")) {
      var data = JSON.parse(localStorage.getItem("storeLogin"));
      if (data.id) {
        this.id = data.id
      }
    }
    this.resetPasswordForm = this.formBuilder.group(
      {
        oldPassword: new FormControl("", Validators.compose([
          Validators.required
        ])
        ),
        newPassword: new FormControl("", Validators.compose([
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(25)
        ])
        ),
        confirmPassword: [""]
      }, { validator: this.checkPasswords }
    );
  }

  checkPasswords(group: FormGroup) {
    let pass = group.get("newPassword").value;
    let confirmPass = group.get("confirmPassword").value;
    return pass === confirmPass ? null : { notSame: true };
  }


  update() {
    this.submitted = true;
    if (this.submitted && this.resetPasswordForm.valid) {
      var data = {
        id: this.id,
        oldPassword: this.resetPasswordForm.controls['oldPassword'].value,
        newPassword: this.resetPasswordForm.controls['newPassword'].value,
        verticalType: 1
      }
      this.api.changePassword(data).subscribe(res => {
        if (res['response']['success']) {
          this.toastr.successToastr(res['response']['message']);
          this.router.navigate(['/'])
        } else {
          this.toastr.warningToastr(res['response']['message']);
        }
      }, err => {
        console.log(err);
      })
    } else {
      this.resetPasswordForm.markAllAsTouched();
    }
  };

}
