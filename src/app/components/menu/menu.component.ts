import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/app/interfaces/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public UserData: any = {};
  public showFiller = false;

  constructor(
    private auth: AuthService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  async ngOnInit(): Promise<void> {
    this.loadUser()
  }

  async loadUser(){
    const user =  await this.afa.currentUser;
    this.afs.collection('Users').doc(user?.uid).get().subscribe((doc) => {
      this.UserData = doc.data()
    });
  }

  async logout() {
    try {
      await this.auth.logout();
    } catch (err) {
      console.error(err);
    }
  }
}
