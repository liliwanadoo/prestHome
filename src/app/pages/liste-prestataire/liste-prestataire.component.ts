import { Component, OnInit, Input } from '@angular/core';
import { PrestataireList } from 'src/app/models/prestataire-list';
import { Prestataire } from 'src/app/models/prestataire';
import { MaCategorie } from 'src/app/models/ma-categorie';
import { Categorie } from 'src/app/models/categorie';
import { Coordonnee } from 'src/app/models/coordonnee';
import { MaVilleCP } from 'src/app/models/ma-villeCP';
import { CategorieList } from 'src/app/models/categorie-list';
import { CoordonneeList } from 'src/app/models/coordonnee-list';

@Component({
  selector: 'app-liste-prestataire',
  templateUrl: './liste-prestataire.component.html',
  styleUrls: ['./liste-prestataire.component.scss']
})
export class ListePrestataireComponent implements OnInit {
  @Input() allPrest: boolean;
  public prestataires: Array<Prestataire>;
  public categorie: Categorie;
  public coordonnee: Coordonnee;
  public prest: Prestataire = new Prestataire();
  public miniPrest: Array<Prestataire>;
  public myMiniPrest: Prestataire = new Prestataire();
  public categories: Array<Categorie>;
  public cat: Categorie = new Categorie();
  @Input() allCoord: boolean;
  public coordonnees: Array<Coordonnee>;
  public city: Coordonnee = new Coordonnee();


  public id = 0;
  public idVilleCp = 0;
  constructor(private collection: PrestataireList,
              private collectionCat: CategorieList,
              private maCategorie: MaCategorie,
              private maVilleCP: MaVilleCP,
              private collectionCoord: CoordonneeList) { }

  ngOnInit() {
    console.log(this.allCoord ? 'Tous' : 'Restreint');
    this.collectionCoord.getCollection(this.allCoord).then((coords: Array<Coordonnee>) => {
     this.coordonnees = coords;
  });

    this.categories = this.collectionCat.getCollection();

    this.maCategorie.getCollection(this.id).then((cats: Categorie) => {
      this.categorie = cats;
    });

    this.maVilleCP.getCollection(this.idVilleCp).then((coord: Coordonnee) => {
      this.coordonnee = coord;
    });

    this.collection.getCollection(this.allPrest).then((prests: Array<Prestataire>) => {
      this.prestataires = prests;
   });
  }

  fillPrest() {
    console.log(JSON.stringify(this.prestataires));
    this.miniPrest = this.collection.smallHydrate(this.prestataires, this.cat.id, this.city.id);
    console.log('After : ' + JSON.stringify(this.miniPrest));
  }
}
