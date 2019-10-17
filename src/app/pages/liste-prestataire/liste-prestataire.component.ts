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
  @Input() allPrest: boolean;
  public prestataires: Array<Prestataire>;
  //public categorie: Categorie;
  public coordonnee: Coordonnee;
  public prest: Prestataire = new Prestataire();
<<<<<<< HEAD
  public id = 7;
  public idVilleCp = 48627;
=======
  public categories: Categorie[];
>>>>>>> 72ad0f62d3b7ef8bb861e636ffb71dec5a186a62


  constructor(private collection: PrestataireList,
              private maCategorie: MaCategorie,
              private maVilleCP: MaVilleCP,
              private catcollection: CategorieList) { }

  ngOnInit() {
<<<<<<< HEAD
    this.maCategorie.getCollection(this.id).then((cats: Categorie) => {
      this.categorie = cats;
    });
=======
//    this.maCategorie.getCollection().then((cats: Categorie) => {
//      this.categorie = cats;
//    });
this.categories  = this.catcollection.getCollection();
>>>>>>> 72ad0f62d3b7ef8bb861e636ffb71dec5a186a62

    this.maVilleCP.getCollection(this.idVilleCp).then((coord: Coordonnee) => {
      this.coordonnee = coord;
    });

    this.collection.getCollection(this.allPrest).then((prests: Array<Prestataire>) => {
      this.prestataires = prests;
   });
  }
}
