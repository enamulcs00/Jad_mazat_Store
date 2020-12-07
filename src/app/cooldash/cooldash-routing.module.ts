import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CoolDashComponent } from "./cooldash.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ChangePasswordComponent } from './pages/change-password/change-password.component';

const routes: Routes = [
  {
    path: "",
    component: CoolDashComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      {
        path: "store",
        loadChildren: () =>
          import("./pages/store/store.module").then(m => m.StoreModule)
      },
      { path: "change-password", component: ChangePasswordComponent }
      // { path: 'sub-categories', component: SubCategoryComponent },
      // { path: 'users', component: UsersComponent},
      // { path: 'add-user', component: AddUserComponent },
      // { path: 'edit-user/:id', component: EditUserComponent },
      // { path: 'merchant', component: MerchantComponent },
      // { path: 'drivers', component: DriverComponent },
      // { path: 'add-driver', component: AddDriverComponent },
      // { path: 'document/:id', component: DocumentComponent },
      // { path: 'edit-driver/:id', component: EditDriverComponent },
      // { path: 'user-address', component: UserModalComponent },
      //  { path: 'order', loadChildren: () => import('../b2b/pages/order/order.module').then(m => m.OrderModule) },
      // { path: 'products', loadChildren: () => import('../b2b/pages/product/product.module').then(m => m.ProductModule) },
      // { path: 'inventory', component: InventoryComponent },
      // {path: 'banner', loadChildren: () => import('../b2b/pages/banner/banner.module').then(m => m.BannerModule)},
      // {path: 'businessType', loadChildren: () => import('../b2b/pages/business-type/business-type.module').then(m => m.BusinessTypeModule)},
      // { path: 'setting', component: SettingComponent },
      // { path:'geofence',component:GeofenceComponent},
      // { path: 'edit-geofence/:id', component: EditGeofenceComponent },
      // { path: 'add-merchant', component: AddMerchantComponent },
      // { path: 'edit-merchant/:id', component: EditMerchantComponent },
      // { path: 'sub-admin', component: SubAdminComponent },
      // { path: 'add-sub-admin', component: AddSubAdminComponent },
      // { path: 'edit-sub-admin/:id', component: EditSubAdminComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoolDashRoutingModule { }
