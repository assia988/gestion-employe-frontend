import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewemployeComponent } from './newemploye.component';

describe('NewemployeComponent', () => {
  let component: NewemployeComponent;
  let fixture: ComponentFixture<NewemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
