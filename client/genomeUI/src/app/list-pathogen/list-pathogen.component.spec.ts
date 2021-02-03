import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPathogenComponent } from './list-pathogen.component';

describe('ListPathogenComponent', () => {
  let component: ListPathogenComponent;
  let fixture: ComponentFixture<ListPathogenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPathogenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPathogenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
