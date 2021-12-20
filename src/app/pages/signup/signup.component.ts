import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

import { NgxSpinnerService } from "ngx-spinner";
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userRegister: User = {};

  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private snak: SnackBarComponent
  ) { }

  ngOnInit(): void {
  }

  async register() {
    try {
      this.spinner.show();
      const userRegister = await this.authService.register(this.userRegister);
    } catch ({code, message}) {
      const error = message as string;
      const codeError = code as string;

      this.snak.openSnackBar(error, codeError, "my-snack-bar-fail");

      this.spinner.hide();
    }finally {
      this.spinner.hide();
      this.snak.openSnackBar(`Olá ${this.userRegister.nome}, seu cadastro foi efetuado com sucesso!`, 'Fechar', 'my-snack-bar-sucess');
    }
  }
}
