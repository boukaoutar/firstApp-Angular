import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  titre: string = 'Liste des cours';
  ma_valeur: string = 'valeur initiale'
  
  constructor() {}
  ngOnInit() {}
  getTitle() { return this.titre; }
  updateTitle() { this.titre = 'nouveau titre'}

}
