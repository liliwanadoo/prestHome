import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';
import { User } from '../../models/user';
import { HttpclientService } from '../../shared/service/httpclient.service';
import { HttpResponse } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

public hasErrors: boolean = false;

userForm = new FormGroup({
  email: new FormControl(''),
  password: new FormControl('')
});

public get email(): AbstractControl {
  return this.userForm.controls.email;
}

public get password(): AbstractControl {
  return this.userForm.controls.password;
}

constructor(
  private uf: FormBuilder,
  private http: HttpclientService,
  private router: Router
 ) {}

ngOnInit() {

  this.userForm = this.uf.group(
    {
      email: [
        '',
        [Validators.required,
        Validators.pattern('^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$'),
        Validators.email]
      ],
      password: [
        '',
        [Validators.minLength(6),
        Validators.required]
      ]
    });

}

public submit() {
  if (this.userForm.valid) {
  const newUsr: User = new User();
  newUsr.email = this.email.value;
  newUsr.password = this.password.value;
  this.http.postUsr(newUsr).pipe(first())
  .subscribe((data: HttpResponse<number>) => {
      if (data.status === 201) {
        this.router.navigate(['']);
      }
    }, error => {
      console.log( 'not working sorry' );
    }


    );
    // TODO : probablement un commentaire pour dire que le compte a bien été créé
  this.router.navigate(['']);
  }
}
}

