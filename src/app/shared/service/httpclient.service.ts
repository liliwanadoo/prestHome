import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Client } from 'src/app/models/client';
import { Prestataire } from 'src/app/models/prestataire';

@Injectable({
  providedIn: 'root'
})
export class HttpclientService {

  constructor(private http: HttpClient) { }
  /**
   *  Call the api to post a new Usr
   * @param usr : l'objet usr formé par le formulaire d'inscription
   */
  public postUsr(usr: User): Observable<any> {
    return this.http.post<User>(
      environment.apiRoot + 'UsrLists/', usr);
  }

  public postClient(client: Client): Observable<any> {
    return this.http.post<Client>(
      environment.apiRoot + 'ClientCtrl/', client);
  }
  public postPrestataire(prestataire: Prestataire): Observable<any> {
    return this.http.post<Prestataire>(
      environment.apiRoot + 'PrestLists/', prestataire);
  }

  /**
   *  Call the api to get a specific
   * @param id : l'id du Usr ciblé
   */
  public getUsr(id: number): Observable<any> {
    return this.http.get(
      environment.apiRoot + 'UsrLists/' + id,
      {
        observe: 'response'
      }
    );
  }

   /**
   *  Call the api to get all the coords
   */
  public getCoords(all: boolean): Observable<any> {
  //public getCoords(): Observable<any> {
    const uri = all ? environment.apiRoot + 'CoordLists/' : environment.apiRoot + 'CoordLists/used/';
    //const uri = environment.apiRoot + 'CoordLists/';
    return this.http.get(
      uri,
      {
        observe: 'response'
      }
    );
  }

  /**
   *  Call the api to get all the prestataires
   */
  public getPrests(all: boolean): Observable<any> {
      const uri = all ? environment.apiRoot + 'PrestLists/' : environment.apiRoot + 'PrestLists/';
      return this.http.get(
        uri,
        {
          observe: 'response'
        }
      );
    }

  /**
   *  Call the api to get all the cats
   */
  public getCats(): Observable<any> {
    return this.http.get(
      environment.apiRoot + 'CatLists/alpha/',
      {
        observe: 'response'
      }
    );
  }
}
