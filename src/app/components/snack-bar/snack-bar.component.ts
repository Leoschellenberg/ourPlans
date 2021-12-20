import { Component, Injectable, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})

@Injectable({
  providedIn: 'root',
})
export class SnackBarComponent implements OnInit {

  constructor(
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  openSnackBar(error: string, message: string | undefined, tipo: string) {
   return  this._snackBar.open(error, message, {
      duration: 5000,
      panelClass: [tipo],
      horizontalPosition: 'right',
      verticalPosition: 'top'
    });
  }
}
