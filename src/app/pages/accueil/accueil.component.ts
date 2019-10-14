import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public hasErrors = false;
  searchForm = new FormGroup({
    ville: new FormControl(''),
    cp: new FormControl('')
  });

  public get ville(): AbstractControl {
    return this.searchForm.controls.ville;
  }

  public get cp(): AbstractControl {
    return this.searchForm.controls.cp;
  }


  constructor(
        private sf: FormBuilder,
    ) {}

  ngOnInit() {
    this.searchForm = this.sf.group({
      ville: [
        '',
        [Validators.required,
        Validators.pattern('^([a-zA-Z\u0080-\u024F]+(?:. |-| |\'))*[a-zA-Z\u0080-\u024F]*$')]
      ],
      cp: [
        '',
        [Validators.minLength(5),
        Validators.maxLength(5),
        Validators.required]
      ]
    });
  }

}
