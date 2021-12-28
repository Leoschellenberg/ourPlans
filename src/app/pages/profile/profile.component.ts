import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public UserData: any = {};

  constructor(
    private auth: AuthService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.loadUser()
    console.log(this.UserData);
  }

  async loadUser(){
    const user =  await this.afa.currentUser;
    this.afs.collection('Users').doc(user?.uid).get().subscribe((doc) => {
      this.UserData = doc.data()
    });
  }

}
