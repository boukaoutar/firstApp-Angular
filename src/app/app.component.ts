import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'liste des courses';
  ma_valeur: string = "valeur initiale";

  getTitle () {
    return this.title;
  }

  modifTitle() {
    this.title = 'nouveau titre';
  }

}