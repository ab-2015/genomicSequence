import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPathogenComponent } from './add-pathogen.component';

describe('AddPathogenComponent', () => {
  let component: AddPathogenComponent;
  let fixture: ComponentFixture<AddPathogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPathogenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPathogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
