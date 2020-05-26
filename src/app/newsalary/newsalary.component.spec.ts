import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsalaryComponent } from './newsalary.component';

describe('NewsalaryComponent', () => {
  let component: NewsalaryComponent;
  let fixture: ComponentFixture<NewsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
