(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~login-login-module~pages-store-store-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n  <div class=\"card shadow mb-4\">\r\n    <div class=\"card-header py-3\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-12\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <h6 *ngIf=\"restaurantId && typeID\">Edit Store Type</h6>\r\n              <h6  *ngIf=\"restaurantId && !typeID\">Add Store Type</h6>\r\n            </div>\r\n            <div class=\"col-md-6 text-right\">\r\n              <button class=\"btn btn-primary btn-primary_border\" (click)=\"back()\">\r\n                <span class=\"fas fa-arrow-left\"></span> Back\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"card-body\">\r\n      <form [formGroup]=\"categoryForm\">\r\n        <div class=\"usr_profile_inrmain\">\r\n          <div class=\"row\">\r\n            <div class=\"col-12 form-group\">\r\n              <div class=\"usr_profile_biodata\">\r\n                <label>Type</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name\" />\r\n                </div>\r\n                <div *ngIf=\"submitted && categoryForm.controls.name.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"categoryForm.controls.name.errors.required\">\r\n                    Type is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col-12 form-group\">\r\n              <div class=\"usr_profile_biodata\">\r\n                <label>نوع</label>\r\n                <div class=\"input-group\">\r\n                  <input class=\"form-control\" type=\"text\" name=\"name\" formControlName=\"name_ar\" />\r\n                </div>\r\n                <div *ngIf=\"submitted && categoryForm.controls.name.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"categoryForm.controls.name.errors.required\">\r\n                    Type is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <button class=\"btn btn-primary mr-3\" *ngIf=\"restaurantId && !typeID\" (click)=\"onSubmit()\">\r\n            Add Type\r\n          </button>\r\n          <button class=\"btn btn-primary mr-3\" *ngIf=\"restaurantId && typeID\" (click)=\"onUpdate()\">\r\n            Edit Type\r\n          </button>\r\n          <button class=\"btn btn-danger\" (click)=\"back()\">Close</button>\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalid-feedback {\n  display: block;\n  width: 100%;\n  margin-top: 0.14rem;\n  margin-left: 0.6rem;\n  font-size: 95%;\n  color: #f55353;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvZm9vZC10eXBlL3N0b3JlLXR5cGUtbW9kYWwvQzpcXFVzZXJzXFxyYWdodlxcRGVza3RvcFxcREVWXFxWZW5nb1xcbWF6YXRfc3RvcmUvc3JjXFxhcHBcXGNvb2xkYXNoXFxwYWdlc1xcc3RvcmVcXHN0b3JlXFxmb29kLXR5cGVcXHN0b3JlLXR5cGUtbW9kYWxcXHN0b3JlLXR5cGUtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Nvb2xkYXNoL3BhZ2VzL3N0b3JlL3N0b3JlL2Zvb2QtdHlwZS9zdG9yZS10eXBlLW1vZGFsL3N0b3JlLXR5cGUtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29vbGRhc2gvcGFnZXMvc3RvcmUvc3RvcmUvZm9vZC10eXBlL3N0b3JlLXR5cGUtbW9kYWwvc3RvcmUtdHlwZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbnZhbGlkLWZlZWRiYWNrIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDAuNnJlbTtcclxuICAgIGZvbnQtc2l6ZTogOTUlO1xyXG4gICAgY29sb3I6ICNmNTUzNTM7XHJcbiAgfVxyXG4gICIsIi5pbnZhbGlkLWZlZWRiYWNrIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwLjE0cmVtO1xuICBtYXJnaW4tbGVmdDogMC42cmVtO1xuICBmb250LXNpemU6IDk1JTtcbiAgY29sb3I6ICNmNTUzNTM7XG59Il19 */");

/***/ }),

/***/ "./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: StoreTypeModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreTypeModalComponent", function() { return StoreTypeModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../services/common/common.service */ "./src/app/cooldash/services/common/common.service.ts");
/* harmony import */ var _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../services/api/api.service */ "./src/app/cooldash/services/api/api.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm2015/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let StoreTypeModalComponent = class StoreTypeModalComponent {
    constructor(dialog, formBuilder, comm, api, toastr, router, route) {
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.comm = comm;
        this.api = api;
        this.toastr = toastr;
        this.router = router;
        this.route = route;
        this.submitted = false;
        this.setValues = () => {
            // if (this.item) {
            //   this.categoryForm.patchValue({
            //     name: this.item.name,
            //   });
            // }
            this.api.getStoreTypeById(this.restaurantId).subscribe((res) => {
                if (res["response"]["success"]) {
                    this.item = res.data.find(element => (element._id == this.typeID));
                    if (this.item) {
                        this.categoryForm.patchValue({
                            name: this.item.name,
                        });
                    }
                }
            });
        };
        this.errorHandling = (control, error) => {
            return this.categoryForm.controls[control].hasError(error);
        };
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            this.restaurantId = params.id;
            this.typeID = params.itemId;
        });
        this.categoryForm = this.formBuilder.group({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("", _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required])),
            name_ar: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]("notUseAble"),
        });
        if (this.typeID) {
            this.setValues();
        }
    }
    back() {
        history.back();
    }
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
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
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
                }
                else {
                    this.toastr.errorToastr(res["response"]["message"]);
                }
            });
        }
    }
};
StoreTypeModalComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_common_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"] },
    { type: _services_api_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
StoreTypeModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-store-type-modal",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./store-type-modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./store-type-modal.component.scss */ "./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.scss")).default]
    })
], StoreTypeModalComponent);



/***/ }),

/***/ "./src/app/cooldash/services/popup/popup.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/cooldash/services/popup/popup.service.ts ***!
  \**********************************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _pages_store_category_storeCategoryModal_storeCategoryModal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pages/store/category/storeCategoryModal/storeCategoryModal.component */ "./src/app/cooldash/pages/store/category/storeCategoryModal/storeCategoryModal.component.ts");
/* harmony import */ var _pages_store_store_storeOutletModal_storeOutletModal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pages/store/store/storeOutletModal/storeOutletModal.component */ "./src/app/cooldash/pages/store/store/storeOutletModal/storeOutletModal.component.ts");
/* harmony import */ var _pages_store_store_food_type_store_type_modal_store_type_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pages/store/store/food-type/store-type-modal/store-type-modal.component */ "./src/app/cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component.ts");
/* harmony import */ var _pages_store_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/store/order/accept-modal/accept-modal.component */ "./src/app/cooldash/pages/store/order/accept-modal/accept-modal.component.ts");
/* harmony import */ var _forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../forgot-password-modal/forgot-password-modal.component */ "./src/app/forgot-password-modal/forgot-password-modal.component.ts");








let PopupService = class PopupService {
    constructor(dialog) {
        this.dialog = dialog;
    }
    addStoreCategory() {
        const dialogRef = this.dialog.open(_pages_store_category_storeCategoryModal_storeCategoryModal_component__WEBPACK_IMPORTED_MODULE_3__["StoreCategoryModalComponent"]);
        return dialogRef.afterClosed();
    }
    orderAcceptModal() {
        const dialogRef = this.dialog.open(_pages_store_order_accept_modal_accept_modal_component__WEBPACK_IMPORTED_MODULE_6__["AcceptModalComponent"]);
        return dialogRef.afterClosed();
    }
    editStoreCategory(item) {
        const dialogRef = this.dialog.open(_pages_store_category_storeCategoryModal_storeCategoryModal_component__WEBPACK_IMPORTED_MODULE_3__["StoreCategoryModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addStoreOutlet(id) {
        const dialogRef = this.dialog.open(_pages_store_store_storeOutletModal_storeOutletModal_component__WEBPACK_IMPORTED_MODULE_4__["StoreOutletmodalComponent"]);
        dialogRef.componentInstance.storeId = id;
        return dialogRef.afterClosed();
    }
    editStoreOutlet(item) {
        const dialogRef = this.dialog.open(_pages_store_store_storeOutletModal_storeOutletModal_component__WEBPACK_IMPORTED_MODULE_4__["StoreOutletmodalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    addStoreType(id) {
        const dialogRef = this.dialog.open(_pages_store_store_food_type_store_type_modal_store_type_modal_component__WEBPACK_IMPORTED_MODULE_5__["StoreTypeModalComponent"]);
        dialogRef.componentInstance.restaurantId = id;
        return dialogRef.afterClosed();
    }
    editStoreype(item) {
        const dialogRef = this.dialog.open(_pages_store_store_food_type_store_type_modal_store_type_modal_component__WEBPACK_IMPORTED_MODULE_5__["StoreTypeModalComponent"]);
        dialogRef.componentInstance.item = item;
        return dialogRef.afterClosed();
    }
    forgotPasswordsendEmail() {
        const dialogRef = this.dialog.open(_forgot_password_modal_forgot_password_modal_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordModalComponent"]);
        return dialogRef.afterClosed();
    }
};
PopupService.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
];
PopupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], PopupService);



/***/ })

}]);
//# sourceMappingURL=default~login-login-module~pages-store-store-module-es2015.js.map