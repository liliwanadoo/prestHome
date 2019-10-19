import { Component, OnInit, Input, Output } from '@angular/core';
import { CoordonneeList } from 'src/app/models/coordonnee-list';
import { Coordonnee } from 'src/app/models/coordonnee';

@Component({
  selector: 'app-liste-coordonnee',
  templateUrl: './liste-coordonnee.component.html',
  styleUrls: ['./liste-coordonnee.component.scss']
})
export class ListeCoordonneeComponent implements OnInit {
 @Input() allCoord: boolean;
  public coordonnees: Array<Coordonnee>;
  public city: Coordonnee = new Coordonnee();

  @Output() selectedId: number;

  constructor(private collection: CoordonneeList) { }
  ngOnInit(): void {
      this.collection.getCollection(this.allCoord).then((coords: Array<Coordonnee>) => {

       this.coordonnees = coords;
    });
  }

}
