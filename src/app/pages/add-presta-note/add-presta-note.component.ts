import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { DateValidatorService } from './../../shared/service/date-validator.service';

@Component({
  selector: 'app-add-presta-note',
  templateUrl: './add-presta-note.component.html',
  styleUrls: ['./add-presta-note.component.scss']
})
export class AddPrestaNoteComponent implements OnInit {
  public hasErrors = false;
  noteForm: FormGroup;
  _isNoteHidden: boolean;

  public get isNoteHidden() {
    return this._isNoteHidden;
  }
  public set isNoteHidden(isHidden: boolean) {
    this._isNoteHidden = isHidden;
  }
  public get date(): AbstractControl {
    return this.noteForm.controls.date;
  }

  constructor(
    private nf: FormBuilder,
    private dateValidator: DateValidatorService
  ) { }

  ngOnInit() {
    this.noteForm = this.nf.group({
      date: [
        '',
        Validators.required,
        this.dateValidator.isLowerThan.bind(this.dateValidator)
      ],
    });
  }

}
