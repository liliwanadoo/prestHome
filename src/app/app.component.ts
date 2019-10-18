import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './shared/service/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'PrestaFind';
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
}
