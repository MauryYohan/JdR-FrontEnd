import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichePersonnageComponent } from './fiche-personnage.component';

describe('FichePersonnageComponent', () => {
  let component: FichePersonnageComponent;
  let fixture: ComponentFixture<FichePersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichePersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichePersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
