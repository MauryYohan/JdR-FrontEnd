import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPersonnageComponent } from './list-personnage.component';

describe('ListPersonnageComponent', () => {
  let component: ListPersonnageComponent;
  let fixture: ComponentFixture<ListPersonnageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPersonnageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPersonnageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
