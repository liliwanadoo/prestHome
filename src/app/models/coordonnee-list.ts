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
  public all: boolean;

  public constructor(private http: HttpclientService) {
    // Instanciates the Coordonnees Array
    this._coordonnees = new Array<Coordonnee>();


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
  public getCollection(all: boolean): Promise<Array<Coordonnee>> {
  //  public getCollection(): Array<Coordonnee> {
      // Hydrate the collection with some datas from the bdd
      this.all = all;
      return this._hydrate();
  }

  public get coordonnees(): Array<Coordonnee> {
    this._coordonnees.sort();
    return this._coordonnees;
  }

/**
 * Retrieve anonymous collection of things...
 */
  private _hydrate(): Promise<Array<Coordonnee>> {
    // push new Coordonnees into the collection
   /** let coordonnee: Coordonnee = new Coordonnee(); // Sets a variable named coordonnee
    */
   //const coordonnees: Array<any>;
   return new Promise((resolve) => {
    this.http.getCoords(this.all).subscribe((res: HttpResponse<any>) => {
      //this.http.getCoords().subscribe((res: HttpResponse<any>) => {
        const datas: Array<any> = res.body;
        datas.forEach((coords: any) => {
         const currentCoordonnee: Coordonnee = new Coordonnee();
         currentCoordonnee.coord = coords.coordonnees;
         currentCoordonnee.cp = coords.cp;
         currentCoordonnee.id = coords.id;
         currentCoordonnee.ville = coords.ville;
         if (this._coordonnees.includes(currentCoordonnee, 0) === false) {
           console.log("id de ma coordonnée : " + currentCoordonnee.id);
           this._coordonnees.push(currentCoordonnee);
          }
       });
       this._coordonnees.sort();
        resolve(this._coordonnees);
    });
   });

  }

}

