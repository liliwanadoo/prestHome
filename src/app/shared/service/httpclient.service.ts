import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

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
      environment.apiRoot + 'UsrLists', usr);
  }

  /**
   *  Call the api to get a specific Usr
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
}
