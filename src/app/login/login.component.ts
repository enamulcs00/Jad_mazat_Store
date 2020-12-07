import { Component, OnInit } from "@angular/core";
import { LoginBody } from "../cooldash/requests/login-body";
import { ApiService } from "../cooldash/services/api/api.service";
import { Router } from "@angular/router";
import { LocalStorageService } from "angular-web-storage";
import { ToastrManager } from "ng6-toastr-notifications";
import { PopupService } from '../cooldash/services/popup/popup.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginBody = new LoginBody();

  errorMessage: any = "Error";
  flags = {
    isLogin: false,
    isError: false
  };
  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService,
    private router: Router,
    private toastr: ToastrManager,
    private dialogService: PopupService
  ) { }

  ngOnInit() {
    if (localStorage.getItem("token")) {
      this.router.navigateByUrl("/dashboard");
    }
  }

  login() {
    let query;
    this.flags.isLogin = true;
    this.loginBody.verticalType = 1;
    this.api.singIn(this.loginBody).subscribe(response => {
      if (response["response"]["success"]) {
        localStorage.setItem(
          "token",
          JSON.stringify(response["data"].authToken)
        );
        localStorage.setItem(
          "storeLogin",
          JSON.stringify(response["data"])
        );
        this.router.navigateByUrl("/dashboard");
      } else {
        this.flags.isLogin = false;
        this.toastr.errorToastr(response["response"]["message"]);
        this.flags.isError = true;
      }
    });
  }

  onForgotPassword(){
    this.dialogService.forgotPasswordsendEmail().subscribe(res => {
      console.log(res);
      if (res != undefined) {
       if (res["response"] == "yes" && res["email"] != "" && res["email"] != undefined) {
          var data = {
            email : res.email,
            verticalType: 1
          };

          this.api.forgotPasswordSendEmail(data).subscribe(response => {
            if (response["response"]["success"]) {
              this.toastr.successToastr("Reset password link sent successfully");
            } else {
              this.toastr.errorToastr(response["response"]["message"]);
            }
          });
        }
      }
    });
  }
}
