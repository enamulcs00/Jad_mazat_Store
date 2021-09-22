import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiSwitchModule } from "ngx-ui-switch";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { OrderComponent } from "./order/order.component";
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { StoreRoutingModule } from "./store-routing.module";
import { ItemsModalComponent } from "./order/items-modal/items-modal.component";
import { CategoryComponent } from "./category/category.component";
import { StoreComponent } from "./store/store.component";
import { ViewStoreComponent } from "./store/view-store/view-store.component";
import { OutletComponent } from "./store/outlet/outlet.component";
import { FoodTypeComponent } from "./store/food-type/food-type.component";
import { FoodItemComponent } from "./store/food-item/food-item.component";
import { AddStoreComponent } from "./store/add-store/add-store.component";
import { AddFoodItemComponent } from "./store/food-item/add-food-item/add-food-item.component";
import { ViewOrderComponent } from "./order/view-order/view-order.component";
import { StoreTypeModalComponent } from "./store/food-type/store-type-modal/store-type-modal.component";
import { NgxPaginationModule } from "ngx-pagination"; // <-- import the module
import { PaginationModule } from "ngx-bootstrap";
import {MatDialogModule, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogRef} from '@angular/material';
@NgModule({
  declarations: [
    AddFoodItemComponent,
    ViewOrderComponent,
    AddStoreComponent,
    OutletComponent,
    FoodItemComponent,
    FoodTypeComponent,
    OrderComponent,
    ItemsModalComponent,
    CategoryComponent,
    StoreComponent,
    ViewStoreComponent,
    StoreTypeModalComponent,
  ],
  imports: [
    MatDialogModule,
    CommonModule,
    StoreRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    UiSwitchModule,
    PaginationModule.forRoot(),
    NgxPaginationModule,
    NgMultiSelectDropDownModule.forRoot(),
    GooglePlaceModule,
  ],
  entryComponents: [
    StoreTypeModalComponent,
  ],
  providers: [{ provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] },],
})
export class StoreModule {}
