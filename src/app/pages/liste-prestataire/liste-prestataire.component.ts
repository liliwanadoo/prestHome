import { Component, OnInit, Input } from '@angular/core';
import { PrestataireList } from 'src/app/models/prestataire-list';
import { Prestataire } from 'src/app/models/prestataire';
import { MaCategorie } from 'src/app/models/ma-categorie';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-liste-prestataire',
  templateUrl: './liste-prestataire.component.html',
  styleUrls: ['./liste-prestataire.component.scss']
})
export class ListePrestataireComponent implements OnInit {
  @Input() all: boolean;
  public prestataires: Array<Prestataire>;
  public categorie: Categorie;
  public prest: Prestataire = new Prestataire();

  constructor(private collection: PrestataireList, private maCategorie: MaCategorie) { }

  ngOnInit() {
    this.maCategorie.getCollection().then((cats: Categorie) => {
      this.categorie = cats;
    });

    this.collection.getCollection(this.all).then((prests: Array<Prestataire>) => {
      this.prestataires = prests;
   });
  }
}
