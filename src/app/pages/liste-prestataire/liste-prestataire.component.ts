import { Component, OnInit } from '@angular/core';
import { PrestataireList } from 'src/app/models/prestataire-list';

@Component({
  selector: 'app-liste-prestataire',
  templateUrl: './liste-prestataire.component.html',
  styleUrls: ['./liste-prestataire.component.scss']
})
export class ListePrestataireComponent implements OnInit {

  constructor(private collection: PrestataireList) { }

  ngOnInit() {
  }

}
