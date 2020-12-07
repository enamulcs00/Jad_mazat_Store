import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-items-modal",
  templateUrl: "./items-modal.component.html",
  styleUrls: ["./items-modal.component.scss"]
})
export class ItemsModalComponent implements OnInit {
  items: any;
  serialNumber = 0;
  constructor() {}

  ngOnInit() {}
}
