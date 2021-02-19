import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { StoreCategoryModalComponent } from '../../pages/store/category/storeCategoryModal/storeCategoryModal.component';
import { StoreOutletmodalComponent } from '../../pages/store/store/storeOutletModal/storeOutletModal.component';
import { StoreTypeModalComponent } from '../../pages/store/store/food-type/store-type-modal/store-type-modal.component';
import { AcceptModalComponent } from "../../pages/store/order/accept-modal/accept-modal.component";
import { ForgotPasswordModalComponent } from "../../../forgot-password-modal/forgot-password-modal.component";


@Injectable({
  providedIn: "root"
})
export class PopupService {
  constructor(public dialog: MatDialog) { }


  addStoreCategory() {
    const dialogRef = this.dialog.open(StoreCategoryModalComponent);
    return dialogRef.afterClosed();
  }
  orderAcceptModal() {
    const dialogRef = this.dialog.open(AcceptModalComponent);
    return dialogRef.afterClosed();
  }
  editStoreCategory(item) {
    const dialogRef = this.dialog.open(StoreCategoryModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addStoreOutlet(id) {
    const dialogRef = this.dialog.open(StoreOutletmodalComponent);
    dialogRef.componentInstance.storeId = id;
    return dialogRef.afterClosed();
  }

  editStoreOutlet(item) {
    const dialogRef = this.dialog.open(StoreOutletmodalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  addStoreType(id) {
    const dialogRef = this.dialog.open(StoreTypeModalComponent);
    dialogRef.componentInstance.restaurantId = id;
    return dialogRef.afterClosed();
  }

  editStoreype(item) {
    const dialogRef = this.dialog.open(StoreTypeModalComponent);
    dialogRef.componentInstance.item = item;
    return dialogRef.afterClosed();
  }

  forgotPasswordsendEmail() {
    const dialogRef = this.dialog.open(ForgotPasswordModalComponent);
    return dialogRef.afterClosed();
  }

}
