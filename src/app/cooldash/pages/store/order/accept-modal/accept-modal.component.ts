import { Component, OnInit } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
  selector: "app-accept-modal",
  templateUrl: "./accept-modal.component.html",
  styleUrls: ["./accept-modal.component.scss"]
})
export class AcceptModalComponent implements OnInit {
  time: any;

  constructor(private dialog: MatDialogRef<AcceptModalComponent>) {}

  ngOnInit() {}

  close() {
    var data = {
      response: "no",
      time: this.time
    };
    this.dialog.close(data);
  }

  onSubmit() {
    var data = {
      response: "yes",
      time: this.time
    };
    this.dialog.close(data);
  }
}
