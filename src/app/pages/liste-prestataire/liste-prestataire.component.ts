import { Component, OnInit, Input } from '@angular/core';
import { PrestataireList } from 'src/app/models/prestataire-list';
import { Prestataire } from 'src/app/models/prestataire';
import { MaCategorie } from 'src/app/models/ma-categorie';
import { Categorie } from 'src/app/models/categorie';
import { Coordonnee } from 'src/app/models/coordonnee';
import { MaVilleCP } from 'src/app/models/ma-villeCP';

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
  public id = 7;
  public idVilleCp = 48627;

  constructor(private collection: PrestataireList, private maCategorie: MaCategorie, private maVilleCP: MaVilleCP) { }

  ngOnInit() {
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
}
