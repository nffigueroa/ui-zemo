import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoStarSquareComponent } from './info-star-square.component';

describe('InfoStarSquareComponent', () => {
  let component: InfoStarSquareComponent;
  let fixture: ComponentFixture<InfoStarSquareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoStarSquareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoStarSquareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
