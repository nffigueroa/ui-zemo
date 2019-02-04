import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareMainComponent } from './square-main.component';

describe('SquareMainComponent', () => {
  let component: SquareMainComponent;
  let fixture: ComponentFixture<SquareMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquareMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquareMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
