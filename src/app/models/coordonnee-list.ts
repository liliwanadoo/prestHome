import { Coordonnee } from './coordonnee';
import { Injectable } from '@angular/core';
import { HttpclientService } from '../shared/service/httpclient.service';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CoordonneeList {
  // tslint:disable-next-line: variable-name
  private _coordonnees: Array<Coordonnee>;

  public constructor(private http: HttpclientService) {
    // Instanciates the Coordonnees Array
    this._coordonnees = new Array<Coordonnee>();

      // Hydrate the collection with some datas from the bdd
      this._hydrate();
  }

  /**
   * Add a coordonnee to the collection
   */
  public add(coord: Coordonnee): CoordonneeList {
    this._coordonnees.push(coord); // Add an element to the array of coordonnees
    return this;
  }

  /**
   * Get a coordonnee from the collection
   */
  public get(): Coordonnee {
    return null;
  }

  /** Gets the collection of coordonnees @return Array<Coordonnee> */
  public getCollection(): Array<Coordonnee> {
    return this._coordonnees;
  }

  public get coordonnees(): Array<Coordonnee> {
    this._coordonnees.sort();
    return this._coordonnees;
  }

/**
 * Retrieve anonymous collection of things...
 */
  private _hydrate(): void {
    // push new Coordonnees into the collection
   /** let coordonnee: Coordonnee = new Coordonnee(); // Sets a variable named coordonnee
    */
   //const coordonnees: Array<any>;
   this.http.getCoords().subscribe((res: HttpResponse<any>) => {
     const datas: Array<any> = res.body;
     datas.forEach((coords: any) => {
      const currentCoordonnee: Coordonnee = new Coordonnee();
      currentCoordonnee.coord = coords.coordonnees;
      currentCoordonnee.cp = coords.cp;
      currentCoordonnee.id = coords.id;
      currentCoordonnee.ville = coords.ville;
      this._coordonnees.push(currentCoordonnee);
    });
    console.log(this._coordonnees.length);
     });
  }

}

