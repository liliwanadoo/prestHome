import { Component, OnInit } from '@angular/core';
import { CoordonneeList } from 'src/app/models/coordonnee-list';
import { Coordonnee } from 'src/app/models/coordonnee';

@Component({
  selector: 'app-liste-coordonnee',
  templateUrl: './liste-coordonnee.component.html',
  styleUrls: ['./liste-coordonnee.component.scss']
})
export class ListeCoordonneeComponent implements OnInit {

  public coordonnees: Array<Coordonnee>;
  public city: Coordonnee;

  constructor(private collection: CoordonneeList) { }
  ngOnInit(): void {
    this.coordonnees = this.collection.getCollection();
  }

}
