import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePrestataireComponent } from './liste-prestataire.component';

describe('ListePrestataireComponent', () => {
  let component: ListePrestataireComponent;
  let fixture: ComponentFixture<ListePrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
