import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

import { NgxSpinnerService } from "ngx-spinner";
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';

@Component({
selector: 'app-login',
templateUrl: './login.component.html',
styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
public userLogin: User = {};

constructor(
  private authService: AuthService,
  private spinner: NgxSpinnerService,
  private snak: SnackBarComponent
) { }

ngOnInit(): void {
}


async login() {
  this.spinner.show();
  try {
    await this.authService.login(this.userLogin);
  } catch ({code, message}) {
    const error = message as string;
    const codeError = code as string;

    this.snak.openSnackBar(error, codeError, "my-snack-bar-fail");

    this.spinner.hide();
  }finally {
    this.spinner.hide();
  }
  }

}

