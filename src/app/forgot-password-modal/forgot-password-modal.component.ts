import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from "@angular/material/dialog";
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {
  isSubmitted: boolean = false;
  email = new FormControl('',[Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'),Validators.required]);

  constructor(private dialog: MatDialogRef<ForgotPasswordModalComponent>) {}

  ngOnInit() {}

  close() {
    var data = {
      response: "no",
      email: this.email
    };
    this.dialog.close(data);
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.email.valid && this.isSubmitted){
      var data = {
        response: "yes",
        email: this.email.value
      };
      this.dialog.close(data);
    }
    }
}
