import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public UserPlans: any = {};

  constructor(
    private auth: AuthService,
    private afa: AngularFireAuth,
    private afs: AngularFirestore,
  ) { }

  ngOnInit(): void {
    this.loadUser();
  }

  async loadUser(){
    const user =  await this.afa.currentUser;
    this.afs.collection('Plans').doc(user?.uid)
    .collection(user?.uid as string)
    .snapshotChanges().subscribe((doc) => {
      this.UserPlans = doc.map(c => ({ key: c.payload.doc.id, ...c.payload.doc.data() }))
      console.log(this.UserPlans)
      //console.log(doc.)
    });
  }
}
