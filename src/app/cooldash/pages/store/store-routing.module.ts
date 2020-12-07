import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OrderComponent } from "./order/order.component";
import { CategoryComponent } from "./category/category.component";
import { StoreComponent } from './store/store.component';
import { AddStoreComponent } from "./store/add-store/add-store.component";
import { ViewStoreComponent } from "./store/view-store/view-store.component";
import { OutletComponent } from "./store/outlet/outlet.component";
import { FoodTypeComponent } from './store/food-type/food-type.component';
import { FoodItemComponent } from './store/food-item/food-item.component';
import { AddFoodItemComponent } from './store/food-item/add-food-item/add-food-item.component';
import { ViewOrderComponent } from './order/view-order/view-order.component';

const routes: Routes = [
  {
    path: "",
    data: {
      title: ""
    },
    children: [
      {
        path: "order",
        component: OrderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "category",
        component: CategoryComponent,
        data: {
          title: ""
        }
      },
      {
        path: "store",
        component: StoreComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add",
        component: AddStoreComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view/:id",
        component: ViewStoreComponent,
        data: {
          title: ""
        }
      },
      {
        path: "outlet",
        component: OutletComponent,
        data: {
          title: ""
        }
      },
      {
        path: "food-type",
        component: FoodTypeComponent,
        data: {
          title: ""
        }
      },
      {
        path: "food-item",
        component: FoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: "profile",
        component: AddStoreComponent,
        data: {
          title: ""
        }
      },
      {
        path: "edit-food-item/:id/:itemId",
        component: AddFoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: "add-food-item/:id",
        component: AddFoodItemComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-order/all/:id",
        component: ViewOrderComponent,
        data: {
          title: ""
        }
      },
      {
        path: "view-order/pending/:id",
        component: ViewOrderComponent,
        data: {
          title: ""
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
