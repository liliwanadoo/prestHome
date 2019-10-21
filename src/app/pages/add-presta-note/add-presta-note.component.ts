import { Component, OnInit, Output, Input, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { DateValidatorService } from './../../shared/service/date-validator.service';
import { Router, ActivatedRoute } from '@angular/router';
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
    private http: HttpclientService,
    private route: ActivatedRoute,
    public dialogRef: MatDialogRef<AddPrestaNoteComponent>,
    @Inject(MAT_DIALOG_DATA) public prestEvalue: number
  ) { }

  public hasErrors = false;
  noteForm: FormGroup;

  ngOnInit() {
    // this.route.params.subscribe(params => {
    // this.prestEvalue = Number.parseInt(params['prestEvalue']);
    //});
    console.log(this.prestEvalue);

    this.noteForm = this.nf.group({
      _datePrestation: [
        ''],
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

  onNoClick(): void {
    this.dialogRef.close(null);
  }

  public submit() {
    if (this.noteForm.valid) {
      const newNotation: Notation = new Notation();
      newNotation.amabilite = this.amabilite.value;
      newNotation.qualite = this.qualite.value;
      newNotation.ponctualite = this.ponctualite.value;
      newNotation.respectDelai = this.respectDelai.value;
      newNotation.datePrestation = this.datePrestation.value;
      console.log("Je vais évaluer le prestataire " + this.prestEvalue);
      newNotation.idPrestataire = this.prestEvalue;
      newNotation.idClient = 2;

      this.http.postNotation(newNotation).pipe(first())
      .subscribe((data: HttpResponse<number>) => {
        console.log('good' + data);
      }, (error) => {
        console.log('not working');
      });

      //this.router.navigate(['']);
      this.onNoClick();

      this.toastr.success('Merci pour votre contribution. Votre notation à bien été enregistrée', 'NOTATION EFFECTUEE', {
      positionClass: 'toast-bottom-center'});
    } else {
      Object.keys(this.noteForm.controls).forEach(key => {
        console.log(key + ' [ ' + JSON.stringify(this.noteForm.controls[key].errors) + '] : ' + this.noteForm.controls[key].status);
      });
  }
}


}
