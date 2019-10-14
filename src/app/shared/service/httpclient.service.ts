import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

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
  public getCoords(): Observable<any> {
    return this.http.get(
      environment.apiRoot + 'CoordLists/',
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
