import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditemployeComponent } from './editemploye.component';

describe('EditemployeComponent', () => {
  let component: EditemployeComponent;
  let fixture: ComponentFixture<EditemployeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditemployeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditemployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
