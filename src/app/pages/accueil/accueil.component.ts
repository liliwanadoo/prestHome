import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  // public hasErrors = false;
  // searchForm: FormGroup;

  // public get ville(): AbstractControl {
  //   return this.searchForm.controls.ville;
  // }

  // public get cp(): AbstractControl {
  //   return this.searchForm.controls.cp;
  // }

  constructor(
    private sf: FormBuilder,
) {}
  // constructor(
  //       private sf: FormBuilder,
  //   ) {}

  ngOnInit() {
  }
  // ngOnInit() {
  //   this.searchForm = this.sf.group({
  //     ville: [
  //       '',
  //       Validators.required
  //     ],
  //     cp: [
  //       '',
  //       [Validators.minLength(5),
  //       Validators.maxLength(5),
  //       Validators.pattern('[0-9]{5}'),
  //       Validators.required]
  //     ]
  //   });
  // }

}
