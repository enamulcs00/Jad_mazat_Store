import { Injectable } from "@angular/core";
import { HttpClient, HttpEventType, HttpHeaders } from "@angular/common/http";
import { UrlService } from "../url/url.service";
import { LoginBody } from "../../requests/login-body";
import { map } from "rxjs/operators";
import { CommonService } from "../common/common.service";

@Injectable({
  providedIn: "root"
})
export class ApiService {
  countryCode: any;

  constructor(
    private http: HttpClient,
    private url: UrlService,
    private comm: CommonService
  ) {
    this.getCountryCode();
  }
  getCountryCode() {
    return this.http
      .get<Response>("assets/json/countryCode.json")
      .pipe(map(response => response));
  }

  singIn(body: LoginBody) {
    return this.http.post(this.comm.baseUrl + "/panel/login", body);
  }
  
  forgotPasswordSendEmail(body){
    return this.http.post(this.comm.baseUrl + "/panel/forgotpass",body)
  }  

  sendToken(token: string) {
    localStorage.setItem("token", token);
  }
  getToken() {
    console.log(localStorage.getItem("token"))
    return localStorage.getItem("token");
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  getAllRestaurantCategories() {
    return this.http.get(this.comm.baseUrl + "/food/category");
  }

  addFoodCategory(body) {
    return this.http.post(this.comm.baseUrl + "/food/category", body);
  }

  editFoodCategory(body) {
    return this.http.put(this.comm.baseUrl + "/food/category", body);
  }

  getAllRestaurant() {
    return this.http.get(this.comm.baseUrl + "/food/restaurant");
  }

  editFoodRestaurant(body) {
    return this.http.put(this.comm.baseUrl + "/food/restaurant", body);
  }

  getResturantById(id) {
    return this.http.get(this.comm.baseUrl + "/food/restaurant/" + id);
  }

  getResturantFoodItemById(id) {
    return this.http.get(this.comm.baseUrl + "/food/itembyid/" + id);
  }

  getStoreItemById(id) {
    return this.http.get(this.comm.baseUrl + "/store/itembyid/" + id);
  }

  addFoodRestaurant(body) {
    return this.http.post(this.comm.baseUrl + "/food/restaurant", body);
  }

  getAllOrders(status, page) {
    return this.http.get(
      this.comm.baseUrl + "/food/orders?status=" + status + "&page=" + page
    );
  }

  getOutletById(id) {
    return this.http.get(this.comm.baseUrl + "/food/restaurant/outlet/" + id);
  }

  getStoreOutletById(id) {
    return this.http.get(this.comm.baseUrl + "/store/outlet/" + id);
  }

  addRestaurantOutlet(body) {
    return this.http.post(this.comm.baseUrl + "/food/restaurant/outlet", body);
  }

  editRestaurantOutlet(body) {
    return this.http.put(this.comm.baseUrl + "/food/restaurant/outlet", body);
  }

  getPendingStoreOrders(status, page, id) {
    return this.http.get(
      this.comm.baseUrl + "/store/orders/all?status=" + status + "&page=" + page + "&storeId=" + id
    );
  }

  getAllStoreOrders(status, page, id) {
    return this.http.get(
      this.comm.baseUrl + "/store/orders/all?&page=" + page + "&storeId=" + id
    );
  }

  getRestaurantTypeById(id) {
    return this.http.get(this.comm.baseUrl + "/food/type/" + id);
  }

  getRestaurantItemeById(id) {
    return this.http.get(this.comm.baseUrl + "/food/item/" + id);
  }

  getAllStoreCategories() {
    return this.http.get(this.comm.baseUrl + "/store/category");
  }

  addStoreCategory(body) {
    return this.http.post(this.comm.baseUrl + "/store/category", body);
  }

  editStoreCategory(body) {
    return this.http.put(this.comm.baseUrl + "/store/category", body);
  }

  getAllStore() {
    return this.http.get(this.comm.baseUrl + "/store");
  }

  getStoreById(id) {
    return this.http.get(this.comm.baseUrl + "/store/" + id);
  }

  addStore(body) {
    return this.http.post(this.comm.baseUrl + "/store", body);
  }

  editStore(body) {
    return this.http.put(this.comm.baseUrl + "/store", body);
  }

  addStoreOutlet(body) {
    return this.http.post(this.comm.baseUrl + "/store/outlet", body);
  }

  editStoreOutlet(body) {
    return this.http.put(this.comm.baseUrl + "/store/outlet", body);
  }


  addRestaurantFoodType(body) {
    return this.http.post(this.comm.baseUrl + "/food/type", body);
  }

  addRestaurantFoodItem(body) {
    return this.http.post(this.comm.baseUrl + "/food/item", body);
  }

  editRestaurantFoodType(body) {
    return this.http.put(this.comm.baseUrl + "/food/type", body);
  }

  editRestaurantFoodItem(body) {
    return this.http.put(this.comm.baseUrl + "/food/item", body);
  }


  addStoreFoodType(body) {
    return this.http.post(this.comm.baseUrl + "/store/type", body);
  }

  addStoreFoodItem(body) {
    return this.http.post(this.comm.baseUrl + "/store/item", body);
  }

  editStoreFoodType(body) {
    return this.http.put(this.comm.baseUrl + "/store/type", body);
  }

  editStoreFoodItem(body) {
    return this.http.put(this.comm.baseUrl + "/store/item", body);
  }

  getStoreTypeById(id) {
    return this.http.get(this.comm.baseUrl + "/store/type/" + id);
  }

  getStoreItemeById(id) {
    return this.http.get(this.comm.baseUrl + "/store/item/" + id);
  }

  getStoreOrderDetail(id) {
    return this.http.get(this.comm.baseUrl + "/store/order/" + id);
  }
  changePassword(body) {
    return this.http.post(this.comm.baseUrl + "/panel/changepass", body);
  }

  addInventory(data)
  {
    return this.http.post(this.comm.baseUrl + "/store/manageInventoryOne",data);
  }
}
