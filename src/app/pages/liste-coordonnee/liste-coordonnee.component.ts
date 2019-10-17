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
<<<<<<< HEAD
      console.log(this.allCoord ? 'Tous' : 'Restreint');
      this.collection.getCollection(this.allCoord).then((coords: Array<Coordonnee>) => {

=======
      console.log(this.all ? 'Tous' : 'Restreint');
      this.collection.getCollection(this.all).then((coords: Array<Coordonnee>) => {
>>>>>>> 72ad0f62d3b7ef8bb861e636ffb71dec5a186a62
       this.coordonnees = coords;
       console.log('Liste : ' + JSON.stringify(this.coordonnees));
    });
    // this.coordonnees = this.collection.getCollection();
  }

}
