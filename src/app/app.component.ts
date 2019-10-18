import { Component } from '@angular/core';
<<<<<<< HEAD
import { Router } from '@angular/router';
import { AuthentificationService } from './shared/service/authentification.service';

=======
declare var ol: any;
>>>>>>> 753ac59accb8743dc39c18e102e5c1c339ca3daa
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrestaFind';
<<<<<<< HEAD
  currentUser: any;

    constructor(
        private router: Router,
        private authentificationService: AuthentificationService
    ) {
        this.authentificationService.currentUser.subscribe(x => this.currentUser = x);
    }

    logout() {
        this.authentificationService.logout();
        this.router.navigate(['/']);
    }
=======

>>>>>>> 753ac59accb8743dc39c18e102e5c1c339ca3daa
}
