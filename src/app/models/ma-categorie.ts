import { Categorie } from './categorie';
import { HttpclientService } from '../shared/service/httpclient.service';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class MaCategorie {
    private _categories: Categorie;

    public constructor(private http: HttpclientService) {
      // Instanciates the Categorie Array
      this._categories = new Categorie();

        // Hydrate the collection with some datas from the bdd
      this._hydrate();
    }

    /**
     * Add a categorie to the collection
     */
    public add(cat: Categorie): MaCategorie {
      this._categories = cat; // Add an element to the array of categories
      return this;
    }

    /**
     * Get a categorie from the collection
     */
    public get(): Categorie {
      return null;
    }

    /** Gets the collection of categories @return Array<Categorie> */
    public getCollection(): Promise<Categorie>  {
      return this._hydrate();
    }

    public get categories(): Categorie {
      return this._categories;
    }

  /**
   * Retrieve anonymous collection of things...
   */
    private _hydrate(): Promise<Categorie> {
      // push new Categories into the collection
       return new Promise((resolve) => {
       this.http.getCat().subscribe((res: HttpResponse<any>) => {
       const cats: any = res.body;

       const currentCat: Categorie = new Categorie();
       currentCat.id = cats.id;
       currentCat.libelle = cats.libelle;
       console.log(currentCat.id + ' ' + currentCat.libelle);
       this._categories = currentCat;

       resolve(this._categories);
      });
     });
    }
}
