import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCoordonneeComponent } from './liste-coordonnee.component';

describe('ListeCoordonneeComponent', () => {
  let component: ListeCoordonneeComponent;
  let fixture: ComponentFixture<ListeCoordonneeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCoordonneeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCoordonneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
