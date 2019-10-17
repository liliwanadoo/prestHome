import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchePrestataireComponent } from './recherche-prestataire.component';

describe('RecherchePrestataireComponent', () => {
  let component: RecherchePrestataireComponent;
  let fixture: ComponentFixture<RecherchePrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecherchePrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecherchePrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
