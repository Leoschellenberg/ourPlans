import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  public userResetPass: User = {};

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
  }

  async resetPassword() {
    this.spinner.show();
    try {
      await this.authService.resetPasswordToEmail(this.userResetPass);
    } catch (err) {
      console.error(err);
      this.spinner.hide();
    }finally {
      console.log("EMAIL ENVIADOa")
      this.spinner.hide();
    }
    }
}
