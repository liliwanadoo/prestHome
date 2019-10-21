import { Injectable } from '@angular/core';
import { Prestataire } from './prestataire';
import { HttpclientService } from '../shared/service/httpclient.service';
import { HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class PrestataireList {
private _prestataires: Array<Prestataire>;
private all: boolean;

public constructor(private http: HttpclientService) {
  // Instanciates the Prestataire Array
  this._prestataires = new Array<Prestataire>();
}

/**
 * Add a prestataire to the collection
 */
public add(prest: Prestataire): PrestataireList {
  this._prestataires.push(prest); // Add an element to the array of prestataires
  return this;
}

/**
 * Get a prestataire from the collection
 */
public get(): Prestataire {
  return null;
}

/** Gets the collection of prestataires @return Array<Prestataire> */
public getCollection(all: boolean): Promise<Array<Prestataire>> {
//  public getCollection(): Array<Prestataire> {
    // Hydrate the collection with some datas from the bdd
    this.all = all;
    return this._hydrate();
}

public get prestataires(): Array<Prestataire> {
  this._prestataires.sort();
  return this._prestataires;
}

public smallHydrate(originPrest: Array<Prestataire>, critCat: number, critCoord: number): Array<Prestataire> {
  const resPrest: Array<Prestataire> = new Array<Prestataire>();

  originPrest.forEach((prests: Prestataire) => {
    if (critCat !== 0 && critCoord !== 0) {
    if (prests.idcoord === critCoord &&  prests.idcat === critCat) {
        resPrest.push(prests);
    }
  } else if (critCat === 0 && critCoord !== 0) {
    if (prests.idcoord === critCoord) {
      resPrest.push(prests);
    }
  } else if (critCat !== 0 && critCoord === 0) {
    if (prests.idcat === critCat) {
      resPrest.push(prests);
    }
  }
  });
  return resPrest;
}

/**
* Retrieve anonymous collection of things...
*/
private _hydrate(): Promise<Array<Prestataire>> {
  // push new Prestataire into the collection
 /** let prestataire: Prestataire = new Prestataire(); // Sets a variable named prestataire
  */
 //const prestataire: Array<any>;
 return new Promise((resolve) => {
  this.http.getPrests(this.all).subscribe((res: HttpResponse<any>) => {
      const datas: Array<any> = res.body;
      datas.forEach((prests: any) => {
       const currentPrestataire: Prestataire = new Prestataire();
       currentPrestataire.id = prests.id;
       currentPrestataire.raisonsociale = prests.raisonsociale;
       currentPrestataire.telephone = prests.telephone;
       currentPrestataire.idusr = prests.idusr;
       currentPrestataire.idcoord = prests.idcoord;
       currentPrestataire.idcat = prests.idcat;
       currentPrestataire.coordonnees = prests.coordonnees;
       currentPrestataire.categorie = prests.categorie;
       currentPrestataire.mail = prests.mail;
       currentPrestataire.note = prests.note;
       this._prestataires.push(currentPrestataire);
      });
      resolve(this._prestataires);
   });
  });

 }

}

