import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  public userRegister: User = {};

  constructor(
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
  }

  async register() {
    try {
     await this.authService.register(this.userRegister);
    } catch (err) {
      console.error(err);
    }finally {
    }
  }

}
