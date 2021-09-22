import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxSpinnerModule } from "ngx-spinner";
import "hammerjs";
import { MaterialModule } from "./cooldash/pages/material/material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ToastrModule } from "ng6-toastr-notifications";
import { AngularWebStorageModule } from "angular-web-storage";
import { AcceptModalComponent } from "./cooldash/pages/store/order/accept-modal/accept-modal.component";
import { AuthGuard } from "./commonservice/auth.guard";
import { AuthguardGuardGuard } from "./commonservice/authguard-guard.guard";
import { OrderService } from "./cooldash/services/order.service";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { AgmCoreModule } from "@agm/core";
import { AgmDirectionModule } from "agm-direction";
import { StoreCategoryModalComponent } from './cooldash/pages/store/category/storeCategoryModal/storeCategoryModal.component';
import { StoreOutletmodalComponent } from './cooldash/pages/store/store/storeOutletModal/storeOutletModal.component';
// import { StoreTypeModalComponent } from './cooldash/pages/store/store/food-type/store-type-modal/store-type-modal.component';
import { ForgotPasswordModalComponent } from './forgot-password-modal/forgot-password-modal.component';
// import {MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    AcceptModalComponent,
    StoreCategoryModalComponent,
    StoreOutletmodalComponent,
    // StoreTypeModalComponent,
    ForgotPasswordModalComponent
  ],
  imports: [
    // MatDialogModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    AngularWebStorageModule,
    HttpClientModule,
    NgxSpinnerModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgmDirectionModule,
    GooglePlaceModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyDgWqhXSfEh-y2eBPFEH3mJ4wqcWsV4EJ8",
      libraries: ["geometry", "places"]
    })
  ],
  providers: [AuthGuard, AuthguardGuardGuard, OrderService],
  bootstrap: [AppComponent],
  entryComponents: [
    AcceptModalComponent,
    StoreCategoryModalComponent,
    StoreOutletmodalComponent,
    // StoreTypeModalComponent,
    ForgotPasswordModalComponent
  ]
})
export class AppModule { }
