import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DateValidatorService {

  constructor(private http: HttpClient) {}

   public isLowerThan(dateCtrl: FormControl): Promise<any> {
    return new Promise<any>((resolve) => {
      this.http.get(
        'http://worldclockapi.com/api/json/utc/now'
    ).subscribe((reponse: any) => {
      const serverDate = new Date(reponse.currentDateTime);
      const userDate = new Date(dateCtrl.value);

      if (userDate.getDay > serverDate.getDay) {
      resolve({ isLowerThan: false }); // take promise...
      } else {
      resolve(null); } } );
    } );
  }

}
