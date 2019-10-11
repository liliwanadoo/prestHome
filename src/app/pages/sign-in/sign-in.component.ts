import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, AbstractControl, Validators, FormControl } from '@angular/forms';

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
 ) {}

ngOnInit() {

  this.userForm = this.uf.group({
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
}

