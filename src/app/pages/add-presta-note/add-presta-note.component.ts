import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { DateValidatorService } from './../../shared/service/date-validator.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Notation } from 'src/app/models/notation';
import { first } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';
import { HttpclientService } from 'src/app/shared/service/httpclient.service';

@Component({
  selector: 'app-add-presta-note',
  templateUrl: './add-presta-note.component.html',
  styleUrls: ['./add-presta-note.component.scss']
})
export class AddPrestaNoteComponent implements OnInit {

  constructor(
    private nf: FormBuilder,
    private dateValidator: DateValidatorService,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpclientService
  ) { }

  public hasErrors = false;
  noteForm: FormGroup;

  ngOnInit() {
    this.noteForm = this.nf.group({
      _datePrestation: [
        '',
        Validators.required,
        this.dateValidator.isLowerThan.bind(this.dateValidator)
      ],
      _amabilite: [
        '',
        Validators.required
      ],
      _qualite: [
        '',
        Validators.required
      ],
      _ponctualite: [
        '',
        Validators.required
      ],
      _respectDelai: [
        ''
      ]
    });
  }

  public get datePrestation(): AbstractControl {
    return this.noteForm.controls._datePrestation;
  }
  public get qualite(): AbstractControl {
    return this.noteForm.controls._qualite;
  }
  public get amabilite(): AbstractControl {
    return this.noteForm.controls._amabilite;
  }
  public get ponctualite(): AbstractControl {
    return this.noteForm.controls._ponctualite;
  }
  public get respectDelai(): AbstractControl {
    return this.noteForm.controls._respectDelai;
  }

  public submit() {
    if (this.noteForm.valid) {
      const newNotation: Notation = new Notation();
      newNotation.amabilite = this.amabilite.value;
      newNotation.qualite = this.qualite.value;
      newNotation.ponctualite = this.ponctualite.value;
      newNotation.respectDetail = this.respectDelai.value;
      newNotation.datePrestation = this.datePrestation.value;
      newNotation.idPrestataire = 15;
      newNotation.idClient = 14;
      newNotation.id = 1;

      console.log('Yo.....Datas are : ' + JSON.stringify(this.noteForm.value));
      console.log('Yo.....Datas are : ' + JSON.stringify(newNotation));

      this.http.postNotation(newNotation).pipe(first())
      .subscribe((data: HttpResponse<number>) => {
        console.log('good' + data);
      }, (error) => {
        console.log('not working');
      });

      this.router.navigate(['/details']);

      this.toastr.success('Votre notation à bien été enregistrée', 'NOTATION EFFECTUEE', {
      positionClass: 'toast-bottom-center'});
    } else {
      Object.keys(this.noteForm.controls).forEach(key => {
        console.log(key + ' [ ' + JSON.stringify(this.noteForm.controls[key].errors) + '] : ' + this.noteForm.controls[key].status);
      });
  }
}


}
