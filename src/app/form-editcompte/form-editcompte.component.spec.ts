import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditcompteComponent } from './form-editcompte.component';

describe('FormEditcompteComponent', () => {
  let component: FormEditcompteComponent;
  let fixture: ComponentFixture<FormEditcompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEditcompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEditcompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
