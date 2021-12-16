import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userRegister: User = {};

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  async register() {
    this.spinner.show();
    try {
     await this.authService.register(this.userRegister);
    } catch (err) {
      console.error(err);
      this.spinner.hide();
    }finally {
      this.spinner.hide();
    }
  }

}
