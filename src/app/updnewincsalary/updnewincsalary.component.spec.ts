import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdnewincsalaryComponent } from './updnewincsalary.component';

describe('UpdnewincsalaryComponent', () => {
  let component: UpdnewincsalaryComponent;
  let fixture: ComponentFixture<UpdnewincsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdnewincsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdnewincsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
