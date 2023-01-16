import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Course } from './course'; // importer l'interface

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})

export class CourseComponent implements OnInit {
  //titre = 'liste des courses';
    
  @Input() contenu!: Course; //infos parent => enfant
  @Output() newNb = new EventEmitter<number>(); //infos enfant => parent

  lastNb!: number;

  constructor() { }
  ngOnInit() : void { this.lastNb = this.contenu.nb_etud; }
  updateNb(): void { 
    const nb = this.contenu.nb_etud - this.lastNb;
    this.lastNb = this.contenu.nb_etud;
    this.newNb.emit(nb);
  }

}