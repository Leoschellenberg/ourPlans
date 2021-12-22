import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn: any;


  constructor(
    private afa: AngularFireAuth,
    private afs: AngularFirestore
    ) { }

  async login(user: User){
    const email = user.email as string;
    const password = user.password as string;
    return await this.afa.signInWithEmailAndPassword(email, password);
  }

  async register(user: User){
    const email = user.email as string;
    const password = user.password as string;
    const newUser = await this.afa.createUserWithEmailAndPassword(email, password);
    await this.afs.collection('Users').doc(newUser.user?.uid).set(user);
    return newUser
  }

  logout(){
    return this.afa.signOut();
  }

  getAuth(){
    return this.afa;
  }

  resetPasswordToEmail({ email }: User){
      return this.afa.sendPasswordResetEmail(email as string)
  }
}
