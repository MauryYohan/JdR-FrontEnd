import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPartieComponent } from './form-partie.component';

describe('FormPartieComponent', () => {
  let component: FormPartieComponent;
  let fixture: ComponentFixture<FormPartieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPartieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPartieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
