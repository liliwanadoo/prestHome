import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-prestataire-details',
  templateUrl: './prestataire-details.component.html',
  styleUrls: ['./prestataire-details.component.scss']
})
export class PrestataireDetailsComponent implements OnInit {
  constructor(
    private router: Router,
    private toastr: ToastrService,
  ) { }

  private id_UsrClient: number = 3;
  private id_UsrPresta: number = 3;



  public userStatusVerif() {
    if (this.id_UsrClient !== this.id_UsrPresta && this.id_UsrClient !== null) {
      this.router.navigate(['/notation']);
    }
    else {
      this.toastr.error('Votre statut ne vous permets pas de noter ce prestataire', 'ERREUR', {
        positionClass: 'toast-bottom-center'});
    }
  }

  ngOnInit() {

  }

}
