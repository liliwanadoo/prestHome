import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl, FormControl } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthentificationService } from 'src/app/shared/service/authentification.service';



@Component({templateUrl: 'login.component.html'})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authentificationService: AuthentificationService
    ) {
        // redirect to home if already logged in
        if (this.authentificationService.currentUserValue) {
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['',
            Validators.required,
            Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'),
            Validators.email],

            password: ['',
            Validators.minLength(6),
            Validators.required]
        });
    }

    public get email(): AbstractControl {
      return this.loginForm.controls.email;
    }
    public get password(): AbstractControl {
      return this.loginForm.controls.password;
    }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
          console.log('Form is invalid, stand here !');
            return;
        }

        this.loading = true;
        this.authentificationService.login(this.email.value, this.password.value)
            .pipe(first())
            .subscribe(
              usr => {
                // store user details and jwt token in session storage to keep user logged in between page refreshes
                sessionStorage.setItem('currentUser', usr.toString());
                this.authentificationService.currentUserSubject.next(usr);
                return usr;
            },
            error => {
                this.error = error;
                this.loading = false;
            });
        this.router.navigate(['']);
            /* .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate(['']);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                }); */
    }
  }
