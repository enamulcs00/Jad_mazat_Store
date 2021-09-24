(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" style=\"margin-top:140px\">\r\n  <!-- Outer Row -->\r\n  <div class=\"row justify-content-center\">\r\n    <div class=\"col-lg-8\">\r\n      <div class=\"card o-hidden border-0 shadow-lg my-5\">\r\n        <div class=\"card-body p-0\">\r\n          <!-- Nested Row within Card Body -->\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <div class=\"p-5\">\r\n                <div class=\"text-center\">\r\n                  <h1 class=\"h4 text-gray-900 mb-4\">Welcome!</h1>\r\n                </div>\r\n                <form\r\n                  class=\"user\"\r\n                  #loginForm=\"ngForm\"\r\n                  name=\"form\"\r\n                  (ngSubmit)=\"loginForm.form.valid && login()\"\r\n                >\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"email\"\r\n                      class=\"form-control form-control-user\"\r\n                      name=\"email\"\r\n                      id=\"exampleInputEmail\"\r\n                      [(ngModel)]=\"loginBody.email\"\r\n                      aria-describedby=\"emailHelp\"\r\n                      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$\"\r\n                      placeholder=\"Enter Email Address...\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                  <div class=\"form-group\">\r\n                    <input\r\n                      type=\"password\"\r\n                      class=\"form-control form-control-user\"\r\n                      name=\"password\"\r\n                      [(ngModel)]=\"loginBody.password\"\r\n                      id=\"exampleInputPassword\"\r\n                      placeholder=\"Password\"\r\n                      required\r\n                    />\r\n                  </div>\r\n\r\n                  <button\r\n                    class=\"btn btn-primary btn-user btn-block\"\r\n                    type=\"submit\"\r\n                    [disabled]=\"!loginForm.valid || flags.isLogin\"\r\n                  >\r\n                    {{ flags.isLogin ? \"Hold on...\" : \"Login\" }}\r\n                  </button>\r\n                </form>\r\n                <a\r\n                (click)=\"onForgotPassword()\"\r\n                >Forgot password</a\r\n              >\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-forgot-password-modal></app-forgot-password-modal> -->\r\n");

/***/ }),

/***/ "./src/app/cooldash/requests/login-body.ts":
/*!*************************************************!*\
  !*** ./src/app/cooldash/requests/login-body.ts ***!
  \*************************************************/
/*! exports provided: LoginBody */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginBody", function() { return LoginBody; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class LoginBody {
}


/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




const routes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }
];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("form.user .btn-user {\n  padding: 0.75rem 4rem !important;\n  margin: auto !important;\n}\n\n.btn-block {\n  width: auto !important;\n}\n\na {\n  cursor: pointer;\n}\n\n/* You can add global styles to this file, and also import other style files */\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfc3RvcmUvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxzQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBLDhFQUFBIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtLnVzZXIgLmJ0bi11c2VyIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtIDRyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW46IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJ0bi1ibG9jayB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxufVxyXG5cclxuYXtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8qIFlvdSBjYW4gYWRkIGdsb2JhbCBzdHlsZXMgdG8gdGhpcyBmaWxlLCBhbmQgYWxzbyBpbXBvcnQgb3RoZXIgc3R5bGUgZmlsZXMgKi8iLCJmb3JtLnVzZXIgLmJ0bi11c2VyIHtcbiAgcGFkZGluZzogMC43NXJlbSA0cmVtICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogYXV0byAhaW1wb3J0YW50O1xufVxuXG4uYnRuLWJsb2NrIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuYSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqLyJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cooldash_requests_login_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cooldash/requests/login-body */ "./src/app/cooldash/requests/login-body.ts");
/* harmony import */ var _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cooldash/services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angular_web_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-web-storage */ "./node_modules/angular-web-storage/fesm2015/angular-web-storage.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _cooldash_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../cooldash/services/popup/popup.service */ "./src/app/cooldash/services/popup/popup.service.ts");








let LoginComponent = class LoginComponent {
    constructor(api, localStorage, router, toastr, dialogService) {
        this.api = api;
        this.localStorage = localStorage;
        this.router = router;
        this.toastr = toastr;
        this.dialogService = dialogService;
        this.loginBody = new _cooldash_requests_login_body__WEBPACK_IMPORTED_MODULE_2__["LoginBody"]();
        this.errorMessage = "Error";
        this.flags = {
            isLogin: false,
            isError: false
        };
    }
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
                localStorage.setItem("token", JSON.stringify(response["data"].authToken));
                localStorage.setItem("storeLogin", JSON.stringify(response["data"]));
                this.router.navigateByUrl("/dashboard");
            }
            else {
                this.flags.isLogin = false;
                this.toastr.errorToastr(response["response"]["message"]);
                this.flags.isError = true;
            }
        });
    }
    onForgotPassword() {
        this.dialogService.forgotPasswordsendEmail().subscribe(res => {
            console.log(res);
            if (res != undefined) {
                if (res["response"] == "yes" && res["email"] != "" && res["email"] != undefined) {
                    var data = {
                        email: res.email,
                        verticalType: 1
                    };
                    this.api.forgotPasswordSendEmail(data).subscribe(response => {
                        if (response["response"]["success"]) {
                            this.toastr.successToastr("Reset password link sent successfully");
                        }
                        else {
                            this.toastr.errorToastr(response["response"]["message"]);
                        }
                    });
                }
            }
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _cooldash_services_api_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: angular_web_storage__WEBPACK_IMPORTED_MODULE_5__["LocalStorageService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] },
    { type: _cooldash_services_popup_popup_service__WEBPACK_IMPORTED_MODULE_7__["PopupService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-login",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");






let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_4__["LoginRoutingModule"]]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map