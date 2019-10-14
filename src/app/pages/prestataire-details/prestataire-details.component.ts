import { Component, OnInit } from '@angular/core';
import { AddPrestaNoteComponent } from '../add-presta-note/add-presta-note.component';



@Component({
  selector: 'app-prestataire-details',
  templateUrl: './prestataire-details.component.html',
  styleUrls: ['./prestataire-details.component.scss']
})
export class PrestataireDetailsComponent implements OnInit {


  public toggleStatus(note: AddPrestaNoteComponent): void {
    note._isNoteHidden = !note._isNoteHidden;
  }


  constructor() { }

  ngOnInit() {
  }

}
