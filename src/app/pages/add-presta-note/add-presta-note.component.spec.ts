import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrestaNoteComponent } from './add-presta-note.component';

describe('AddPrestaNoteComponent', () => {
  let component: AddPrestaNoteComponent;
  let fixture: ComponentFixture<AddPrestaNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrestaNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrestaNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
