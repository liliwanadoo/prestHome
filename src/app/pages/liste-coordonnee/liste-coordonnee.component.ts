import { Component, OnInit, Input } from '@angular/core';
import { CoordonneeList } from 'src/app/models/coordonnee-list';
import { Coordonnee } from 'src/app/models/coordonnee';

@Component({
  selector: 'app-liste-coordonnee',
  templateUrl: './liste-coordonnee.component.html',
  styleUrls: ['./liste-coordonnee.component.scss']
})
export class ListeCoordonneeComponent implements OnInit {
 @Input() all: boolean;
  public coordonnees: Array<Coordonnee>;
  public city: Coordonnee = new Coordonnee();

  constructor(private collection: CoordonneeList) { }
  ngOnInit(): void {
      console.log(this.all ? 'Tous' : 'Restreint');
     this.collection.getCollection(this.all).then((coords: Array<Coordonnee>) => {

       this.coordonnees = coords;
       console.log('Liste : ' + JSON.stringify(this.coordonnees));
    });
    //this.coordonnees = this.collection.getCollection();
  }

}
