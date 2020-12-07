import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UrlService {
  baseUrl = "http://192.168.1.98:3000/v1/admin";
  imageUrl = "http://192.168.1.98:3000";

  constructor() {}
  login = `${this.baseUrl}/login`;
}
