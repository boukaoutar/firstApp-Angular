import { Component, OnInit } from '@angular/core';
import { Course } from './course/course'; // importer l'interface

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  titre: string = 'Liste des cours';
  ma_valeur: string = 'valeur initiale'

  //UE ; interface : liste des cours
  UE: Course[] = [
    { titre: 'c1', nb_etud: 2 },
    { titre: 'c2', nb_etud: 5 }
  ];
  
  nb_etuds!: number;

  constructor() {}
  ngOnInit(): void { this.getNbEtuds(); }
  getNbEtuds(): void {
    this.nb_etuds = 0;
    for (const ue of this.UE) this.nb_etuds += ue.nb_etud;
  }
  onNewNb(delta: number) { this.nb_etuds += delta; }
  getTitle() { return this.titre; }
  updateTitle() { this.titre = 'nouveau titre'}

}
