import { Component, OnInit } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieList } from 'src/app/models/categorie-list';

@Component({
  selector: 'app-liste-categorie',
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss']
})
export class ListeCategorieComponent implements OnInit {
  public categories: Array<Categorie>;
  public cat: Categorie;

  constructor(private collection: CategorieList) { }
  ngOnInit(): void {
    this.categories = this.collection.getCollection();
  }

}
