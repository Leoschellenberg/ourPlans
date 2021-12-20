import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { SnackBarComponent } from 'src/app/components/snack-bar/snack-bar.component';
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
    private spinner: NgxSpinnerService,
    private snak: SnackBarComponent
  ) { }

  ngOnInit(): void {
  }

  async resetPassword() {
    this.spinner.show();
    try {
      await this.authService.resetPasswordToEmail(this.userResetPass);
      this.snak.openSnackBar('E-mail enviado com sucesso!', 'Fechar', 'my-snack-bar-sucess');
    } catch ({code, message}) {
      const codigo = code as string;
      const mensagem = message as string;
      this.snak.openSnackBar(mensagem,codigo, "my-snack-bar-fail");
      console.log(message)
      this.spinner.hide();
    }finally{
      this.spinner.hide();
      }
    }
}
