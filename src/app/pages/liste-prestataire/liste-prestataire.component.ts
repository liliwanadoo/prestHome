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
  public resRecherche = "Merci de patienter pendant la préparation de la liste des prestataires";
  public affDetails = "Voir le profil détaillé du prestataire";

  //public id = 0;
  //public idVilleCp = 0;
  constructor(private collection: PrestataireList,
              private collectionCat: CategorieList,
              private maCategorie: MaCategorie,
              private maVilleCP: MaVilleCP,
              private collectionCoord: CoordonneeList) { }

  ngOnInit() {
    this.collectionCoord.getCollection(this.allCoord).then((coords: Array<Coordonnee>) => {
     this.coordonnees = coords;
  });

    this.categories = this.collectionCat.getCollection();

    this.collection.getCollection(this.allPrest).then((prests: Array<Prestataire>) => {
      this.prestataires = prests;
      this.resRecherche = "Liste des prestataires prête pour la recherche";
   });
  }

  public toggleStatus(myMiniPrest: Prestataire): void {
    myMiniPrest.isDetailsHidden = !myMiniPrest.isDetailsHidden;

    if (myMiniPrest.isDetailsHidden === false) {
       this.affDetails = "Voir les coordonnées du prestataire";
     } else {
       this.affDetails = "Masquer les coordonnées du prestataire";
     }
   }

  fillPrest() {
    if (!this.city.id) {
      this.city.id = 0;
    }
    if (!this.cat.id) {
      this.cat.id = 0;
    }
    this.resRecherche = "Liste de résultats";
    if (this.cat.id !== 0) {
      this.resRecherche = this.resRecherche + " pour la catégorie " + this.cat.libelle;
    }
    if (this.city.id !== 0) {
      this.resRecherche = this.resRecherche + " pour la ville " + this.city.ville;
    }
    if (this.prestataires) {
    this.miniPrest = this.collection.smallHydrate(this.prestataires, this.cat.id, this.city.id);
    } else {
      this.resRecherche = "Préparation de liste en cours, merci de répéter votre demande";
    }
  }
}
