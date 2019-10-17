import { Component, OnInit, Input } from '@angular/core';
import { PrestataireList } from 'src/app/models/prestataire-list';
import { Prestataire } from 'src/app/models/prestataire';
import { MaCategorie } from 'src/app/models/ma-categorie';
import { Categorie } from 'src/app/models/categorie';
import { Coordonnee } from 'src/app/models/coordonnee';
import { MaVilleCP } from 'src/app/models/ma-villeCP';
import { CategorieList } from 'src/app/models/categorie-list';

@Component({
  selector: 'app-liste-prestataire',
  templateUrl: './liste-prestataire.component.html',
  styleUrls: ['./liste-prestataire.component.scss']
})
export class ListePrestataireComponent implements OnInit {
  @Input() all: boolean;
  public prestataires: Array<Prestataire>;
  //public categorie: Categorie;
  public coordonnee: Coordonnee;
  public prest: Prestataire = new Prestataire();
  public categories: Categorie[];


  constructor(private collection: PrestataireList,
              private maCategorie: MaCategorie,
              private maVilleCP: MaVilleCP,
              private catcollection: CategorieList) { }

  ngOnInit() {
//    this.maCategorie.getCollection().then((cats: Categorie) => {
//      this.categorie = cats;
//    });
this.categories  = this.catcollection.getCollection();

    this.maVilleCP.getCollection().then((coord: Coordonnee) => {
      this.coordonnee = coord;
    });

    this.collection.getCollection(this.all).then((prests: Array<Prestataire>) => {
      this.prestataires = prests;
   });
  }
}
