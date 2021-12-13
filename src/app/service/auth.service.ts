import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: any;

  constructor(private afa: AngularFireAuth) { }

  login(user: User){
    const email:string = user.email as string;
    const password:string = user.password as string;
    return this.afa.signInWithEmailAndPassword(email, password);
  }

  register(user: User){
    const email = user.email as string;
    const password = user.password as string;
    console.log()
    return this.afa.createUserWithEmailAndPassword(email, password);
  }

  logout(){
    return this.afa.signOut();
  }

  getAuth(){
    return this.afa;
  }
}
