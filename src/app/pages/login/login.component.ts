import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userLogin: User = {};

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  async login() {
    try {
     await this.authService.login(this.userLogin);
   } catch (err) {
     console.error(err);
   }finally {
     console.log("PRONTO")
   }
   }
}

