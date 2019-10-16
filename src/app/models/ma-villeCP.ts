
import { HttpclientService } from '../shared/service/httpclient.service';
import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Coordonnee } from './coordonnee';

@Injectable({
  providedIn: 'root'
})

export class MaVilleCP {
    private _coordonnees: Coordonnee;

    public constructor(private http: HttpclientService) {
      // Instanciates the Coordonnee Array
      this._coordonnees = new Coordonnee();

        // Hydrate the collection with some datas from the bdd
      this._hydrate();
    }

    /**
     * Get the coordonnnee
     */
    public add(villeCP: Coordonnee): MaVilleCP {
      this._coordonnees = villeCP;
      return this;
    }

    /**
     * Get no villeCP from the collection
     */
    public get(): Coordonnee {
      return null;
    }

    /** Gets the coordonnee @return Coordonnnee */
    public getCollection(): Promise<Coordonnee>  {
      return this._hydrate();
    }

    public get coordonnees(): Coordonnee {
      return this._coordonnees;
    }

  /**
   * Retrieve anonymous collection of things...
   */
    private _hydrate(): Promise<Coordonnee> {
      // push new Categories into the collection
       return new Promise((resolve) => {
       this.http.getCoord().subscribe((res: HttpResponse<any>) => {
       const coord: any = res.body;

       const currentCoord: Coordonnee = new Coordonnee();
       currentCoord.id = coord.id;
       currentCoord.cp = coord.cp;
       currentCoord.ville = coord.ville;
       currentCoord.coord = coord.coord;
       this._coordonnees = currentCoord;

       resolve(this._coordonnees);
  });
 });
    }
}
