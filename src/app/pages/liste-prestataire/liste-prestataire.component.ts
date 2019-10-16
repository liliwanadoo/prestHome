import { Component, OnInit, Input } from '@angular/core';
import { PrestataireList } from 'src/app/models/prestataire-list';
import { Prestataire } from 'src/app/models/prestataire';

@Component({
  selector: 'app-liste-prestataire',
  templateUrl: './liste-prestataire.component.html',
  styleUrls: ['./liste-prestataire.component.scss']
})
export class ListePrestataireComponent implements OnInit {
  @Input() all: boolean;
  public prestataires: Array<Prestataire>;
  public prest: Prestataire = new Prestataire();

  constructor(private collection: PrestataireList) { }

  ngOnInit() {
    this.collection.getCollection(this.all).then((prests: Array<Prestataire>) => {
      this.prestataires = prests;
   });
  }
}
