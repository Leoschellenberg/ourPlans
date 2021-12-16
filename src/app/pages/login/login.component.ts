import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

import { NgxSpinnerService } from "ngx-spinner";

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public userLogin: User = {};

constructor(
  private authService: AuthService,
  private spinner: NgxSpinnerService
) { }

ngOnInit(): void {
}

async login() {
  this.spinner.show();
  try {
    await this.authService.login(this.userLogin);
  } catch (err) {
    console.error(err);
    this.spinner.hide();
  }finally {
    console.log("PRONTO")
    this.spinner.hide();
  }
  }
}

