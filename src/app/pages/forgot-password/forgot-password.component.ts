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
      this.validateError(code as string);

      this.spinner.hide();
    }finally{
      this.spinner.hide();
      }
    }


    validateError(code: string){
      console.log(code)
      switch (code){
          case "auth/argument-error":
            this.snak.openSnackBar('Digite um e-mail valido!', 'Fechar', 'my-snack-bar-fail');
            break;
          case "auth/user-disabled":
            this.snak.openSnackBar('A conta do usuário foi desativada por um administrador.', 'Fechar', 'my-snack-bar-fail');
            break;
          case "auth/user-not-found":
            this.snak.openSnackBar('Não há registro de usuário correspondente a este identificador. O usuário pode ter sido excluído.', 'Fechar', 'my-snack-bar-fail');
            break;
          case "auth/too-many-requests":
              this.snak.openSnackBar('O acesso a esta conta foi temporariamente desativado devido a muitas tentativas de login malsucedidas. Você pode restaurá-la imediatamente redefinindo sua senha ou pode tentar novamente mais tarde.', 'Fechar', 'my-snack-bar-fail');
              break;
          case "auth/invalid-email":
              this.snak.openSnackBar('O endereço de e-mail está formatado incorretamente.', 'Fechar', 'my-snack-bar-fail');
              break;
        default:
      }
    }
}
