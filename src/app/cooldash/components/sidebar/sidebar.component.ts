import { Component, OnInit } from "@angular/core";
import * as js from "../../../../assets/js/custom";
@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  dashboard: any;

  menuItems = [];
  user: any;
  category: any;
  subcategory: any;
  order: any;
  Merchant: any;
  product: any;
  setting: any;
  SubAdmin: any;
  businessType: any;
  inventory: any;
  location: string;
  driver: string;
  banner: string;
  merchant: string;
  role: any;
  access: any;
  subadmin: string;
  constructor() {
    (this.dashboard = "assets/icon/dashboard.png"),
      (this.user = "assets/icon/user.png");
    this.category = "assets/icon/category.png";
    this.product = "assets/icon/product.png";
    this.inventory = "assets/icon/inventory.png";
    this.subcategory = "assets/icon/sub-category.png";
    this.order = "assets/icon/order.png";
    this.businessType = "assets/icon/business.png";
    this.setting = "assets/icon/gear.png";
    this.location = "assets/icon/location.png";
    this.subadmin = "assets/icon/driver.png";
    this.driver = "assets/icon/driver-icon.png";
    this.banner = "assets/icon/banner.png";
    this.merchant = "assets/icon/admin-icon.png";
  }

  ngOnInit() {
    js.customScript();
    this.menuItems = [
      {
        path: "/dashboard",
        title: "Dashboard",
        icon: "assets/icon/dashboard.png",
        class: "sub",
        id: 1
      },
      {
        path: "/store/outlet",
        title: "Outlet",
        icon: "assets/icon/location.png",
        class: "sub"
      },
      {
        path: "/store/food-type",
        title: "Store Type",
        icon: "assets/icon/product.png",
        class: "sub"
      },
      {
        path: "/store/food-item",
        title: "Store Item",
        icon: "assets/icon/inventory.png",
        class: "sub"
      },
      {
        path: "/store/order",
        title: "Order",
        icon: "assets/icon/order.png",
        class: "sub"
      },
      {
        path: "/store/profile",
        title: "Profile",
        icon: "assets/icon/profile.png",
        class: "sub"
      },
      {
        path: "/change-password",
        title: "Change Password",
        icon: "assets/icon/password.png",
        class: "sub"
      }]
    if (JSON.stringify(localStorage.getItem("role"))) {
      this.role = JSON.parse(localStorage.getItem("role"));
      this.access = JSON.parse(localStorage.getItem("access"));
    }
  }
}
