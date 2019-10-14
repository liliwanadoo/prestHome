import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { HttpclientService } from '../shared/service/httpclient.service';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategorieList {
  private _categories: Array<Categorie>;

  public constructor(private http: HttpclientService) {
    // Instanciates the Categorie Array
    this._categories = new Array<Categorie>();

      // Hydrate the collection with some datas from the bdd
    this._hydrate();
  }

  /**
   * Add a categorie to the collection
   */
  public add(cat: Categorie): CategorieList {
    this._categories.push(cat); // Add an element to the array of categories
    return this;
  }

  /**
   * Get a categorie from the collection
   */
  public get(): Categorie {
    return null;
  }

  /** Gets the collection of categories @return Array<Categorie> */
  public getCollection(): Array<Categorie> {
    return this._categories;
  }

  public get categories(): Array<Categorie> {
    this._categories.sort();
    return this._categories;
  }

/**
 * Retrieve anonymous collection of things...
 */
  private _hydrate(): void {
    // push new Categories into the collection
     this.http.getCats().subscribe((res: HttpResponse<any>) => {
     const datas: Array<any> = res.body;
     datas.forEach((cats: any) => {
      const currentCat: Categorie = new Categorie();
      currentCat.id = cats.id;
      currentCat.libelle = cats.libelle;
      console.log(currentCat.id + ' ' + currentCat.libelle);
      this._categories.push(currentCat);
    });
   });
  }

}
